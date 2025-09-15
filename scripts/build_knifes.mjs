// scripts/build_knifes.mjs (v8)
// CSV -> KNIFE prehľady + chýbajúce Kxxx skeletony (.md) bez prepisovania existujúcich
// + NORMALIZE: YAML metadá, img/ + multimedia/, TEDex skelet, provenance.org/project
// + LOCALE: --locale sk|en (default sk) – promietne sa do slug/locale
// + OVERVIEWS: stĺpce Org/Project a relatívne odkazy na .md (VS Code/GitHub aj web) + Author(s)
// + JSON index: docs/<locale>/knifes/knifes_index.json (machine-readable) vrátane author/authors
// + NAV: do každého článku sa vloží navigácia na 3 prehľady (relatívne .md)
// + SANITIZE: CSV hodnoty (dlhé reťazce, behy spätných lomítok a whitespace)
//
// Usage:
//   node scripts/build_knifes.mjs --csv data/KNIFE-OVERVIEW-ONLY.csv --root . [--dry-run] [--dry-verify] [--org ORG] [--project PROJ] [--locale sk] [--debug]
//   node scripts/build_knifes.mjs --root . --org ORG --project PROJ --locale sk

import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';

// --- args ---
function parseArgs() {
  const args = process.argv.slice(2);
  const out = {
    csv: 'data/KNIFE-OVERVIEW-ONLY.csv',
    root: '.',
    dryRun: false,
    dryVerify: false,
    org: process.env.KNIFE_ORG || '',
    project: process.env.KNIFE_PROJECT || '',
    locale: process.env.KNIFE_LOCALE || 'sk',
    debug: false,
  };
  for (let i = 0; i < args.length; i++) {
    const k = args[i];
    const v = args[i + 1];
    if (k === '--csv')         { out.csv = v; i++; continue; }
    if (k === '--root')        { out.root = v; i++; continue; }
    if (k === '--dry-run')     { out.dryRun = true; continue; }
    if (k === '--dry-verify')  { out.dryVerify = true; continue; }
    if (k === '--org')         { out.org = v; i++; continue; }
    if (k === '--project')     { out.project = v; i++; continue; }
    if (k === '--locale')      { out.locale = v; i++; continue; }
    if (k === '--debug')       { out.debug = true; continue; }
  }
  return out;
}

// Parse authors from CSV row (supports "Author" or "Authors" with , ; | separators)
function parseAuthors(row) {
  const raw = row.Authors ?? row.Author ?? row.author ?? '';
  return String(raw)
    .split(/[,;|]/)
    .map(s => s.trim())
    .filter(Boolean)
    .slice(0, 10);
}

// --- sanitizer (chráni pred OOM / "Invalid string length") ---
function sanitizeScalar(v, max = 4000) {
  let s = String(v ?? '');
  // zlúč priveľké behy spätných lomítok a whitespace
  s = s.replace(/\\{5,}/g, '\\').replace(/\s{3,}/g, ' ');
  if (s.length > max) s = s.slice(0, max) + '…';
  return s;
}
function sanitizeRow(row) {
  const out = {};
  for (const [k, v] of Object.entries(row)) out[k] = sanitizeScalar(v);
  return out;
}

// --- CSV utils ---
function parseCSV(text) {
  text = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  const rawLines = text.split('\n');

  const parseLine = (line, delim) => {
    const cols = [];
    let curr = '', inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQ && line[i + 1] === '"') { curr += '"'; i++; }
        else inQ = !inQ;
      } else if (ch === delim && !inQ) {
        cols.push(curr); curr = '';
      } else {
        curr += ch;
      }
    }
    cols.push(curr);
    return cols.map(c => c.trim());
  };

  const DELIMS = [',', ';', '\t', '|'];
  const reqHints = ['id', 'short title', 'category', 'status', 'type', 'priority'];

  const looksLikeHeader = (cells) => {
    const L = cells.map(c => c.replace(/^\uFEFF/, '').toLowerCase());
    const hasID = L.includes('id');
    const hits = reqHints.reduce((n, h) => n + (L.includes(h) ? 1 : 0), 0);
    return hasID && (hits >= 2);
  };

  let headerIdx = -1, delim = ',';
  outer:
  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i].trim();
    if (!line) continue;
    for (const d of DELIMS) {
      const cells = parseLine(line, d);
      if (looksLikeHeader(cells)) { headerIdx = i; delim = d; break outer; }
      for (let j = i + 1; j < Math.min(i + 8, rawLines.length); j++) {
        const nxt = rawLines[j].trim(); if (!nxt) continue;
        const nextCells = parseLine(nxt, d);
        if (/^K\d{3}$/i.test((nextCells[0] || '').trim())) { headerIdx = i; delim = d; break outer; }
        break;
      }
    }
  }

  if (headerIdx === -1) {
    const first = rawLines.findIndex(l => l.trim().length > 0);
    if (first === -1) return [];
    delim = rawLines[first].includes(';') ? ';'
         : rawLines[first].includes('\t') ? '\t'
         : rawLines[first].includes('|') ? '|'
         : ',';
    const headers = parseLine(rawLines[first], delim);
    return rawLines.slice(first + 1)
      .filter(l => l.trim().length > 0)
      .map(line => {
        const cols = parseLine(line, delim);
        const obj = {}; headers.forEach((h, idx) => obj[h] = (cols[idx] ?? '').trim());
        return obj;
      });
  }

  const headers = parseLine(rawLines[headerIdx], delim).map(h => h.replace(/^\uFEFF/, '').trim());
  const dataLines = rawLines.slice(headerIdx + 1).filter(l => l.trim().length > 0);
  return dataLines.map(line => {
    const cols = parseLine(line, delim);
    const obj = {}; headers.forEach((h, idx) => { obj[h] = (cols[idx] ?? '').trim(); });
    return obj;
  });
}

function kebab(s) {
  return (s || 'untitled')
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase();
}
async function ensureDir(p) { await fs.mkdir(p, { recursive: true }); }
async function fileExists(p) { try { await fs.access(p); return true; } catch { return false; } }
function mdEscape(str){ return String(str||'').replace(/"/g,'\\"'); }

// --- Normalize helpers ---
function normToArray(v) {
  if (Array.isArray(v)) return v.filter(Boolean).map(s => String(s).trim());
  if (typeof v === 'string') {
    let str = v.trim();
    if (!str) return [];
    // If it looks like a bracketed array, try to clean common escape artifacts and parse
    if (/^\[.*\]$/.test(str)) {
      try {
        // Clean typical artifacts: \" -> ", \\ -> \
        const cleaned = str.replace(/\\+\"/g, '"').replace(/\\\\/g, '\\');
        const arr = JSON.parse(cleaned);
        if (Array.isArray(arr)) return arr.map(x => String(x).trim());
      } catch {}
      // Fallback: manual split of bracketed content
      const inner = str.replace(/^\[/, '').replace(/\]$/, '');
      return inner
        .split(/\s*,\s*/)
        .map(s => s.replace(/^\s*["']|["']\s*$/g, ''))
        .map(s => s.replace(/\\+/g, ''))
        .map(s => s.trim())
        .filter(Boolean);
    }
    // Non-bracketed string -> split by common delimiters
    return str.split(/[,;|]/).map(s => s.trim()).filter(Boolean);
  }
  return [];
}

// --- FM I/O ---
function splitFrontMatter(text) {
  const m = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!m) return [null, text];
  return [m[1], text.slice(m[0].length)];
}
function parseSimpleYAML(yaml) {
  if (!yaml) return {};
  const obj = {};
  const lines = yaml.split('\n');
  for (const line of lines) {
    const mm = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (mm) obj[mm[1]] = mm[2].replace(/^"|"$/g, '').trim();
  }
  return obj;
}
function writeFrontMatter(obj) {
  // v writeFrontMatter:
const order = [
  'id','title','description','author','authors',
  'created','modified','date','updated',
  'status','type','category','tags','slug','sidebar_label',
  'sidebar_position','locale','provenance','provenance_org','provenance_project'
];
  const clamp = (v, max = 2000) =>
    typeof v === 'string' ? (v.length > max ? v.slice(0, max) + '…' : v) : v;

  const b = [];
  b.push('---');
  for (const k of order) {
    if (obj[k] === undefined) continue;
    const val = obj[k];

    if ((k === 'tags' || k === 'authors') && Array.isArray(val)) {
      b.push(`${k}: [${val.slice(0, 50).map(v => JSON.stringify(clamp(v))).join(', ')}]`);
    } else if (k === 'provenance' && val && typeof val === 'object') {
      b.push(`${k}:`);
      for (const [kk, vv] of Object.entries(val)) {
        b.push(`  ${kk}: ${JSON.stringify(clamp(vv))}`);
      }
    } else {
      b.push(`${k}: ${JSON.stringify(clamp(val))}`);
    }
  }
  b.push('---');
  return b.join('\n') + '\n';
}

// --- NAV blok (relatívne odkazy na ľahký prehľad) ---
const NAV_MARKER = '<!-- nav:knifes -->';
function navBlock() {
  return `${NAV_MARKER}
> [⬅ KNIFES – Prehľad](../knifesOverview.md)
---
`;
}

function ensureBodyDelimiter(body) {
  const t = body.trimStart();
  return t.startsWith('<!-- body:start -->') ? body : `<!-- body:start -->\n\n${body}`;
}
function injectNav(body) {
  if (body.includes(NAV_MARKER)) return body;
  const idx = body.indexOf('<!-- body:start -->');
  if (idx >= 0) {
    const before = body.slice(0, idx + '<!-- body:start -->'.length);
    const after  = body.slice(idx + '<!-- body:start -->'.length);
    return `${before}\n\n${navBlock()}${after}`.replace(/\n{3,}/g, '\n\n');
  }
  return `${navBlock()}${body}`;
}

function tedexSkeleton(id, title) {
  return `<!-- body:start -->

${navBlock()}# KNIFE ${id} – ${title}

## 🎯 Čo rieši (účel, cieľ)

## 🧩 Ako to rieši (princíp)

## 🧪 Ako to použiť (aplikácia)

---

## ⚡ Rýchly návod (Top)

## 📜 Detailný článok

## 💡 Tipy a poznámky

## ✅ Hodnota / Zhrnutie
`;
}
function firstParagraph(mdBody) {
  const cleaned = mdBody.replace(/<!--[\s\S]*?-->/g, '').trim();
  const para = cleaned.split(/\n\s*\n/)[0] || '';
  return para.replace(/[#>*`]/g, '').trim().slice(0, 220);
}

// --- derivácie z CSV ---
function computeDerived(row, locale = 'sk') {
  const shortTitle = row.ShortTitle || row['Short Title'] || 'Untitled';
  const id = (row.ID || row.Id || row.id || row['\uFEFFID'] || '').trim();
  const folderName = row.FolderName?.trim() || `${id}-${kebab(shortTitle)}`;
  const sidebarLabel = row.SidebarLabel?.trim() || `${id} – ${shortTitle}`;
  const linkSlug = `/${locale}/knifes/${kebab(`${id} ${shortTitle}`)}`;
  return { shortTitle, folderName, sidebarLabel, linkSlug };
}

// --- FM pre nový .md
function buildFrontMatter(row, d, opts) {
  const id = (row.ID || row.Id || row.id || row['\uFEFFID'] || 'K000').trim().toUpperCase();
  const shortTitle = d.shortTitle;
  const loc = opts?.locale || 'sk';
  const slug = `/${loc}/knifes/${kebab(`${id} ${shortTitle}`)}`;
  const position = parseInt(id.slice(1), 10) || 999;
  const tags = (row.Tags || '').split(',').map(t => t.trim()).filter(Boolean);
  if (!tags.includes('KNIFE')) tags.unshift('KNIFE');

  const fm = {
    id: id,
    title: shortTitle || id,
    description: row.Description ? String(row.Description) : '',
    status: row.Status ? String(row.Status).toLowerCase() : 'draft',
    slug,
    sidebar_label: `${id} – ${shortTitle}`,
    sidebar_position: position,
    tags,
    locale: loc
  };

  // authors from CSV
  const authors = parseAuthors(row);
  if (authors.length) {
    fm.authors = authors.slice(0, 10);
    fm.author = authors[0];
  }

  const prov = {};
  if (opts?.org) prov.org = opts.org;
  if (opts?.project) prov.project = opts.project;
  if (Object.keys(prov).length) fm.provenance = { platform: 'github', ...prov };
  // dates from CSV
  const createdRaw = row['Date of Record'] || row.Date || '';
  const today = new Date().toISOString().slice(0,10);
  fm.created = createdRaw ? new Date(createdRaw).toISOString().slice(0,10) : today;
  fm.modified = fm.created;
  return writeFrontMatter(fm);
}

// --- Prehľady (relatívne linky na .md)
function tableLine(row) {
  const title = row.ShortTitle || row['Short Title'] || '';
  const href = row._linkSlug || row._docRelLink || '#';
  const titleLink = href ? `[${title}](${href})` : title;
  return `| ${row.ID} | ${row.Category||''} | ${titleLink} | ${row.Status||''} | ${row.Priority||''} | ${row.Type||''} | ${row['Date of Record']||row.Date||''} |`;
}
function detailsBlock(row, org, project) {
  const link = `[${row._folderName||row.ShortTitle||row['Short Title']||''}](${row._docRelLink||'#'})`;
  const tags = (row.Tags||'').split(',').map(t=>t.trim()).filter(Boolean).join(', ');
  const tech = row.Technology || '';
  const sfiaL = row['SFIA – Level'] || row.SFIA_Level || '';
  const sfiaD = row['SFIA – Domain (?)'] || row.SFIA_Domain || '';
  const sfiaM = row['SFIA – Maturity'] || row.SFIA_Maturity || '';
  const ctx = row['Context, Origin, Why it was initiated?'] || row.Context || '';
  const slug = row._linkSlug || '';
  const position = parseInt(String(row.ID||'').replace(/^K/i,''),10) || '';
  const author = (row._authors && row._authors[0]) || row.Author || row.Authors || '';

  return `### ${row.ID} – ${row.ShortTitle||row['Short Title']||''}

**Author**: ${author}  
**Category**: ${row.Category||''}  
**Status**: ${row.Status||''}  
**Type**: ${row.Type||''}  
**Priority**: ${row.Priority||''}  
**Date**: ${row['Date of Record']||row.Date||''}

**Technology**: ${tech}  
**Description**: ${row.Description||''}  
**Context**: ${ctx}  
**SFIA**: level=${sfiaL}, domain=${sfiaD}, maturity=${sfiaM}  
**Tags**: ${tags}  
**Link**: ${link}

**Metadáta (generated)**:  
- **slug**: \`${slug}\`  
- **sidebar_label**: \`${row.ID} – ${row.ShortTitle||row['Short Title']||''}\`  
- **sidebar_position**: \`${position}\`  
- **locale**: \`${row._locale || 'sk'}\`  
- **provenance.org**: \`${org||''}\`  
- **provenance.project**: \`${project||''}\`

---
`;
}

// --- media helpers & tags infer ---
async function ensureMediaFolders(dirAbs) {
  await ensureDir(path.join(dirAbs, 'img'));
  await ensureDir(path.join(dirAbs, 'multimedia'));
}
function inferFsTags(dirAbs, initial = []) {
  const tags = new Set(initial.length ? initial : ['KNIFE']);
  if (fssync.existsSync(path.join(dirAbs, 'img')) && fssync.readdirSync(path.join(dirAbs,'img')).length) tags.add('images');
  if (fssync.existsSync(path.join(dirAbs, 'multimedia')) && fssync.readdirSync(path.join(dirAbs,'multimedia')).length) tags.add('multimedia');
  if (fssync.existsSync(path.join(dirAbs, 'multimedia', 'AP', 'HTML5'))) { tags.add('active-presenter'); tags.add('html5'); }
  if (fssync.existsSync(path.join(dirAbs, 'multimedia', 'AP', 'video'))) tags.add('video');
  return Array.from(tags);
}

// --- NORMALIZE: doplní FM + body:start + NAV do docs/<locale>/knifes
async function normalizeKnifes(repoRoot, opts) {
  // Normalize all articles in docs/<locale>/knifes by updating frontmatter, navigation, and media folders.
  const loc = opts.locale || 'sk';
  const base = path.join(repoRoot, 'docs', loc, 'knifes');
  if (!await fileExists(base)) return;

  for (const folder of (await fs.readdir(base))) {
    const dirAbs = path.join(base, folder);
    if (!fssync.statSync(dirAbs).isDirectory()) continue;

    await ensureMediaFolders(dirAbs);

    const files = await fs.readdir(dirAbs);
    const mainMd = files.includes('index.md') ? 'index.md' : files.find(f => /^K\d{3}.*\.md$/i.test(f));
    if (!mainMd) continue;

    const mainAbs = path.join(dirAbs, mainMd);
    const raw = await fs.readFile(mainAbs, 'utf8');
    const [fmText, bodyRaw0] = splitFrontMatter(raw);
    const fm = parseSimpleYAML(fmText || '');

    const bodyRaw = injectNav(ensureBodyDelimiter(bodyRaw0));

    // Derivácie z názvu priečinka
    const idFromFolder = (folder.match(/^(K\d{3})/i) || [,''])[1] || '';
    const titleFromFolder = folder.replace(/^(K\d{3})[-–\s_]*/i, '').replace(/[_]+/g, ' ').trim();
    const titleFromH1 = (bodyRaw.match(/^#\s+(.+)$/m) || [,''])[1].trim();

    const id = (idFromFolder || (titleFromH1.match(/^(K\d{3})/i)||[,''])[1] || 'K000').toUpperCase();
    const title = fm.title || titleFromFolder || titleFromH1 || 'Untitled KNIFE';

    const slug = fm.slug || `/${loc}/knifes/${kebab(`${id} ${title}`)}`;
    const sidebar_label = fm.sidebar_label || `${id} – ${title.length>40? (title.slice(0,37)+'…') : title}`;
    const sidebar_position = fm.sidebar_position || parseInt(id.slice(1), 10) || 999;

    const fmTags = (fm.tags !== undefined) ? normToArray(fm.tags) : [];
    const tags = Array.from(new Set(inferFsTags(dirAbs, fmTags)));

    // prevzatie description z tela ak vo FM chýba
    const description = fm.description && fm.description !== '""'
      ? fm.description
      : firstParagraph(bodyRaw);

    // Authors: normalize from FM and backfill from CSV index if missing
    let authorsFM = normToArray(fm.authors);
    let authorFM  = fm.author || (authorsFM[0] || '');

    const csvMap = (opts.csvById instanceof Map) ? opts.csvById : null;
    if (csvMap) {
      const rec = csvMap.get(id);
      if (rec && Array.isArray(rec.authors) && rec.authors.length) {
        if (!authorFM)         authorFM  = rec.authors[0];
        if (!authorsFM.length) authorsFM = rec.authors.slice(0, 10);
      }
    }

    let provenance;
    if (!fm.provenance && (opts.org || opts.project)) {
      provenance = { platform: 'github', ...(opts.org?{org: opts.org}:{ }), ...(opts.project?{project: opts.project}:{ }) };
    }

    const outObj = {
      id, title, description,
      status: fm.status || 'draft',
      slug, sidebar_label, sidebar_position,
      tags,
      locale: fm.locale || loc,
      ...(authorsFM.length ? { authors: authorsFM } : {}),
      ...(authorFM ? { author: authorFM } : {}),
      ...(provenance ? { provenance } : {})
    };

    const newRaw = writeFrontMatter(outObj) + bodyRaw;
    if (newRaw !== raw) {
      if (opts.dryRun) {
        console.log('Would update:', path.relative(repoRoot, mainAbs));
      } else {
        await fs.writeFile(mainAbs, newRaw, 'utf-8');
        console.log('Updated:', path.relative(repoRoot, mainAbs));
      }
    }
  }
}

// --- JSON index writer ---
async function writeJsonIndex(repoRoot, locale, org, project, dryRun) {
  // Write a machine-readable JSON index for docs/<locale>/knifes
  const base = path.join(repoRoot, 'docs', locale, 'knifes');
  if (!fssync.existsSync(base)) return;
  const index = [];

  for (const folder of fssync.readdirSync(base)) {
    const dirAbs = path.join(base, folder);
    if (!fssync.statSync(dirAbs).isDirectory()) continue;
    const entries = fssync.readdirSync(dirAbs);
    const mainMd = entries.includes('index.md') ? 'index.md' : entries.find(f => /^K\d{3}.*\.md$/i.test(f));
    if (!mainMd) continue;

    const raw = fssync.readFileSync(path.join(dirAbs, mainMd), 'utf8');
    const [fmText] = splitFrontMatter(raw);
    const fm = parseSimpleYAML(fmText||'');

    const tags = Array.isArray(fm.tags) ? fm.tags :
      (typeof fm.tags === 'string' && fm.tags.startsWith('[') ? (() => { try { return JSON.parse(fm.tags); } catch { return []; } })() :
       typeof fm.tags === 'string' ? fm.tags.split(',').map(s=>s.trim()).filter(Boolean) : []);

    // robustné načítanie autorov do indexu
    const authors = Array.isArray(fm.authors) ? fm.authors :
      (typeof fm.authors === 'string' && fm.authors.startsWith('[') ? (() => { try { return JSON.parse(fm.authors); } catch { return []; } })() :
       typeof fm.authors === 'string' ? fm.authors.split(',').map(s=>s.trim()).filter(Boolean) :
       fm.author ? [String(fm.author)] : []);
    const author = authors[0] || (fm.author || '');

    index.push({
      id: fm.id || '',
      title: fm.title || '',
      author,
      authors,
      description: fm.description || '',
      status: fm.status || 'draft',
      type: fm.type || '',
      category: fm.category || '',
      slug: fm.slug || '',
      sidebar_label: fm.sidebar_label || '',
      sidebar_position: Number(fm.sidebar_position||0),
      locale: fm.locale || locale,
      tags,
      provenance: {
        platform: 'github',
        org: org || '',
        project: project || ''
      },
      path: `docs/${locale}/knifes/${folder}/${mainMd}`
    });
  }

  const jsonPath = path.join(base, 'knifes_index.json');
  if (dryRun) {
    console.log(`Would write JSON index at ${path.relative(repoRoot, jsonPath)}`);
  } else {
    await fs.writeFile(jsonPath, JSON.stringify(index, null, 2), 'utf8');
    console.log(`JSON index written: ${path.relative(repoRoot, jsonPath)}`);
  }
}

// --- main ---
async function main() {
  const { csv, root, dryRun, dryVerify, org, project, locale, debug } = parseArgs();
  const repoRoot = path.resolve(root);
  const csvPath = path.resolve(repoRoot, csv);
  const haveCSV = fssync.existsSync(csvPath);
  if (debug) console.log({ csvPath, repoRoot, haveCSV, org, project, locale });

  // bez CSV: len normalizácia + JSON index
  if (!haveCSV) {
    await normalizeKnifes(repoRoot, { org, project, dryRun, locale });
    await writeJsonIndex(repoRoot, locale, org, project, dryRun);
    return;
  }

  // CSV → rows
  const text = await fs.readFile(csvPath, 'utf8');
  const rowsRaw = parseCSV(text);

  // sanitizácia riadkov kvôli stabilite
  const rowsSanitized = rowsRaw.map(sanitizeRow);

  const rows = rowsSanitized.filter(r => {
    const id = (r.ID || r.Id || r.id || r['\uFEFFID'] || '').trim();
    if (id && !r.ID) r.ID = id;
    // predpočítaj autorov pre prehľady
    r._authors = parseAuthors(r);
    r._author = r._authors[0] || '';
    return /^K\d{3}$/i.test(id);
  });

  if (rows.length === 0 && rowsRaw.length > 0) {
    const first = rowsRaw[0];
    console.log('ℹ️  Detected CSV header keys:', Object.keys(first));
    console.log('ℹ️  Tip: CSV musí mať stĺpec "ID" a data riadky s "KNNN" (napr. K060).');
  }

  // DRY-VERIFY
  if (dryVerify) {
    let createCount = 0;
    const missing = [];
    for (const r of rows) {
      const { folderName, linkSlug } = computeDerived(r);
      const dir = path.join(repoRoot, 'docs', locale, 'knifes', folderName);
      const file = path.join(dir, `index.md`);
      const exists = await fileExists(file);
      if (!exists) {
        createCount++;
        missing.push({ id: r.ID, slug: linkSlug, rel: path.relative(repoRoot, file) });
      }
    }
    console.log('\n== DRY-VERIFY (CSV → plán) ==');
    console.log(`Záznamov: ${rows.length}`);
    console.log(`Chýbajúce lokálne články: ${createCount}`);
    for (const m of missing.slice(0, 20)) console.log(` • ${m.id} → ${m.slug} (${m.rel})`);
    if (missing.length > 20) console.log(` … +${missing.length - 20} ďalších`);
    process.exit(0);
  }

  // CSV -> Map pre normalize (ID -> authors[])
  const csvById = new Map(rows.map(r => [ String(r.ID).toUpperCase(), { authors: r._authors || [] } ]));

  // 1) Vytváraj skeletony
  for (const row of rows) {
    const d = computeDerived(row, locale);
    row._folderName = d.folderName;
    row._sidebarLabel = d.sidebarLabel;
    row._linkSlug = d.linkSlug;                               // web info
    row._docRelLink = `./${d.folderName}/index.md`; // file link
    row._locale = locale;

    const dir = path.join(repoRoot, 'docs', locale, 'knifes', d.folderName);
    const file = path.join(dir, `index.md`);
    await ensureDir(dir);
    await ensureDir(path.join(dir, 'img'));
    await ensureDir(path.join(dir, 'multimedia'));

    if (!(await fileExists(file))) {
      if (dryRun) {
        console.log('Would create:', path.relative(repoRoot, file));
      } else {
        const fm = buildFrontMatter(row, d, { org, project, locale });
        const body = tedexSkeleton(row.ID || 'K000', d.shortTitle);
        await fs.writeFile(file, fm + body, 'utf8');
        console.log('Created:', path.relative(repoRoot, file));
      }
    } else if (debug) {
      console.log('Exists:', path.relative(repoRoot, file));
    }
  }

  // 1.5) NORMALIZE + NAV inject
  await normalizeKnifes(repoRoot, { org, project, dryRun, locale, csvById });

  // 2) JSON index
  await writeJsonIndex(repoRoot, locale, org, project, dryRun);

  // 3) Prehľady – len ľahký súhrn (bez veľkých tabuliek)
  const overviewShort =
`# 📋 KNIFEs Overview

| ID   | Category | Title | Status | Priority | Type | Date | Author | Org | Project |
|------|----------|-------|--------|---------:|------|------|--------|-----|---------|
` + rows.map(r => {
    const title = r.ShortTitle || r['Short Title'] || '';
    const href = r._linkSlug || r._docRelLink || '#';
    const titleLink = href ? `[${title}](${href})` : title;
    const author = (r._authors && r._authors[0]) || r.Author || r.Authors || '';
    return `| ${r.ID} | ${r.Category||''} | ${titleLink} | ${r.Status||''} | ${r.Priority||''} | ${r.Type||''} | ${r['Date of Record']||r.Date||''} | ${author} | ${org||''} | ${project||''} |`;
  }).join('\n') + '\n';

  const overviewDir = path.join(repoRoot, 'docs', locale, 'knifes');
  await ensureDir(overviewDir);

  if (dryRun) {
    console.log(`Would write lightweight overview at ${path.relative(repoRoot, path.join(overviewDir, 'knifesOverview.md'))}`);
  } else {
    await fs.writeFile(path.join(overviewDir, 'knifesOverview.md'), overviewShort, 'utf8');
    console.log(`Overview file written: ${path.relative(repoRoot, path.join(overviewDir, 'knifesOverview.md'))}`);
  }
}

main().catch(err => { console.error(err); process.exit(1); });