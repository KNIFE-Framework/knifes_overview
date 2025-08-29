// scripts/build_knifes.mjs (v4)
// CSV -> KNIFE prehľady + chýbajúce Kxxx skeletony (.md) bez prepisovania existujúcich
// Usage:
//   node scripts/build_knifes.mjs --csv data/KNIFE-OVERVIEW-ONLY.csv --root . [--dry-run] [--dry-verify]

import fs from 'node:fs/promises';
import path from 'node:path';

// --- args ---
function parseArgs() {
  const args = process.argv.slice(2);
  const out = { csv: 'data/KNIFE-OVERVIEW-ONLY.csv', root: '.', dryRun: false, dryVerify: false };
  for (let i = 0; i < args.length; i++) {
    const k = args[i];
    const v = args[i + 1];
    if (k === '--csv') { out.csv = v; i++; continue; }
    if (k === '--root') { out.root = v; i++; continue; }
    if (k === '--dry-run') { out.dryRun = true; continue; }
    if (k === '--dry-verify') { out.dryVerify = true; continue; }
  }
  return out;
}

// --- CSV utils (robust: preambula nad tabuľkou, BOM, , ; \t |, quotes) ---
function parseCSV(text) {
  // Normalize & strip BOM
  text = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  const rawLines = text.split('\n');

  // Parse one line with quotes
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
    return hasID && (hits >= 2); // ID + aspoň 2 typické stĺpce
  };

  // Nájdeme (idx, delim) riadku s hlavičkou a ignorujeme preambulu
  let headerIdx = -1, delim = ',';

  outer:
  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i].trim();
    if (!line) continue;
    for (const d of DELIMS) {
      const cells = parseLine(line, d);
      if (looksLikeHeader(cells)) { headerIdx = i; delim = d; break outer; }
      // fallback: ak najbližší non-empty riadok pod týmto vyzerá ako „data“ (KNNN v 1. bunke),
      // ber aktuálny riadok ako header, aj keď nie je ideálny
      for (let j = i + 1; j < Math.min(i + 8, rawLines.length); j++) {
        const nxt = rawLines[j].trim(); if (!nxt) continue;
        const nextCells = parseLine(nxt, d);
        if (/^K\d{3}$/i.test((nextCells[0] || '').trim())) { headerIdx = i; delim = d; break outer; }
        break;
      }
    }
  }

  // Ak nič, použi prvý non-empty riadok ako „header“
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

  // Parse s nájdenou hlavičkou
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
function ensureTrailingSlash(s) { return s?.endsWith('/') ? s : (s || '') + '/'; }
async function ensureDir(p) { await fs.mkdir(p, { recursive: true }); }
async function fileExists(p) { try { await fs.access(p); return true; } catch { return false; } }
function mdEscape(str){ return String(str||'').replace(/"/g,'\\"'); }

// --- derivácie z jedného CSV riadku ---
function computeDerived(row) {
  const shortTitle = row.ShortTitle || row['Short Title'] || 'Untitled';
  const id = (row.ID || row.Id || row.id || row['\uFEFFID'] || '').trim();
  const folderName = row.FolderName?.trim() || `${id}-${kebab(shortTitle)}`;
  const sidebarLabel = row.SidebarLabel?.trim() || `${id} – ${shortTitle}`;
  const linkSlug = ensureTrailingSlash(
    row.LinkSlug?.trim() || `/KNIFES/${folderName}/`
  );
  return { shortTitle, folderName, sidebarLabel, linkSlug };
}

function buildFrontMatter(row, d) {
  const id = (row.ID || row.Id || row.id || row['\uFEFFID'] || 'kxxx').trim();
  const idLower = id.toLowerCase();
  const tags = (row.Tags || '')
    .split(',').map(t => t.trim()).filter(Boolean).map(t => `"${t}"`).join(', ');
  const description = row.Description ? row.Description + '\n\n' : '';
  const contextKey = row['Context, Origin, Why it was initiated?'] || row.Context || '';
  const context = contextKey ? '## Kontext\n' + contextKey + '\n' : '';

  return `---\nid: ${idLower}-${kebab(d.shortTitle)}\ntitle: "${mdEscape(id)} – ${mdEscape(d.shortTitle)}"\nslug: ${d.linkSlug}\nsidebar_label: "${mdEscape(d.sidebarLabel)}"\ntags: [${tags}]\n---\n\n${description}${context}`;
}

function tableLine(row) {
  const link = `[${row.ShortTitle || row['Short Title'] || ''}](${row._linkSlug || '#'})`;
  return `| ${row.ID} | ${row.Category||''} | ${row.ShortTitle||row['Short Title']||''} | ${row.Status||''} | ${row.Priority||''} | ${row.Type||''} | ${row['Date of Record']||row.Date||''} | ${link} |`;
}
function detailsBlock(row) {
  const link = `[${row._folderName||row.ShortTitle||row['Short Title']||''}](${row._linkSlug||'#'})`;
  const tags = (row.Tags||'').split(',').map(t=>t.trim()).filter(Boolean).join(', ');
  const tech = row.Technology || '';
  const sfiaL = row['SFIA – Level'] || row.SFIA_Level || '';
  const sfiaD = row['SFIA – Domain (?)'] || row.SFIA_Domain || '';
  const sfiaM = row['SFIA – Maturity'] || row.SFIA_Maturity || '';
  const ctx = row['Context, Origin, Why it was initiated?'] || row.Context || '';
  return `### ${row.ID} – ${row.ShortTitle||row['Short Title']||''}\n\n**Category**: ${row.Category||''}  \n**Status**: ${row.Status||''}  \n**Type**: ${row.Type||''}  \n**Priority**: ${row.Priority||''}  \n**Date**: ${row['Date of Record']||row.Date||''}\n\n**Technology**: ${tech}  \n**Description**: ${row.Description||''}  \n**Context**: ${ctx}  \n**SFIA**: level=${sfiaL}, domain=${sfiaD}, maturity=${sfiaM}  \n**Tags**: ${tags}  \n**Link**: ${link}\n\n---\n`;
}

async function main() {
  const { csv, root, dryRun, dryVerify } = parseArgs();
  const repoRoot = path.resolve(root);
  const csvPath = path.resolve(repoRoot, csv);

  const text = await fs.readFile(csvPath, 'utf8');
  const rowsRaw = parseCSV(text);

  // Akceptuj ID/Id/id a normalizuj na row.ID; filtruj len KNNN
  const rows = rowsRaw.filter(r => {
    const id = (r.ID || r.Id || r.id || r['\uFEFFID'] || '').trim();
    if (id && !r.ID) r.ID = id;
    return /^K\d{3}$/i.test(id);
  });
  if (rows.length === 0 && rowsRaw.length > 0) {
    const first = rowsRaw[0];
    console.log('ℹ️  Detected CSV header keys:', Object.keys(first));
    console.log('ℹ️  Tip: CSV musí mať stĺpec \"ID\" a data riadky s \"KNNN\" (napr. K060).');
  }

  // DRY-VERIFY: len report, žiadne zápisy
  if (dryVerify) {
    let createCount = 0;
    const missing = [];
    for (const r of rows) {
      const { folderName, linkSlug } = computeDerived(r);
      const isExternal = /^https?:\/\//i.test((r.LinkSlug || '').trim());
      const dir = path.join(repoRoot, 'docs', 'sk', 'KNIFES', folderName);
      const file = path.join(dir, `${folderName}.md`);
      const exists = await fileExists(file);
      if (!isExternal && !exists) {
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

  // 1) Vytvoriť skeletony a dopočítať linky pre prehľady
  for (const row of rows) {
    const d = computeDerived(row);
    row._folderName = d.folderName;
    row._sidebarLabel = d.sidebarLabel;
    row._linkSlug = d.linkSlug;

    const dir = path.join(repoRoot, 'docs', 'sk', 'KNIFES', d.folderName);
    const file = path.join(dir, `${d.folderName}.md`);
    await ensureDir(dir);
    const front = buildFrontMatter(row, d);

    if (!(await fileExists(file))) {
      if (dryRun) {
        console.log('Would create:', path.relative(repoRoot, file));
      } else {
        await fs.writeFile(file, front, 'utf8');
        console.log('Created:', path.relative(repoRoot, file));
      }
    } else {
      console.log('Skipped (exists):', path.relative(repoRoot, file));
    }
  }

  // 2) Prehľady (vždy sa prepisujú, resp. v dry-run len ohlásime)
  const overviewShort =
`# 📋 KNIFEs Overview

| ID   | Category | Short Title | Status | Priority | Type | Date | Link |
|------|----------|-------------|--------|---------:|------|------|------|
` + rows.map(tableLine).join('\n') + '\n';

const overviewList =
`| ID | Category | Short Title | Status | Type | Priority | Description | Context, Origin, Why it was initiated? | SFIA – Level | SFIA – Domain (?) | SFIA – Maturity | Tags |
|:---:|:---:|:---:|:---:|:---:|:---:|:---|:---|:---:|:---:|:---:|:---:|
` + rows.map(r => {
  const title = r.ShortTitle || r['Short Title'] || '';
  const link = `[${title}](${r._linkSlug || '#'})`;  // 👈 klikateľné
  return `| ${r.ID} | ${r.Category||''} | ${link} | ${r.Status||''} | ${r.Type||''} | ${r.Priority||''} | ${r.Description||''} | ${(r['Context, Origin, Why it was initiated?']||r.Context||'').replace(/\n/g,' ')} | ${r['SFIA – Level']||r.SFIA_Level||''} | ${r['SFIA – Domain (?)']||r.SFIA_Domain||''} | ${r['SFIA – Maturity']||r.SFIA_Maturity||''} | ${r.Tags||''} |`;
}).join('\n') + '\n';


const overviewDetails = `# 📘 KNIFE Overview – Detailed View\n\n` + rows.map(detailsBlock).join('\n');

// cieľový priečinok definuj pred vetvením, nech ho vieš použiť aj v dry-run
const overviewDir = path.join(repoRoot, 'docs', 'sk', 'KNIFES');
await ensureDir(overviewDir);

if (dryRun) {
  console.log(`Would write overview files under ${path.relative(repoRoot, overviewDir)}/`);
} else {
  await fs.writeFile(path.join(overviewDir, 'KNIFEsOverview.md'), overviewShort, 'utf8');
  await fs.writeFile(path.join(overviewDir, 'KNIFE_Overview_List.md'), overviewList, 'utf8');
  await fs.writeFile(path.join(overviewDir, 'KNIFE_Overview_Details.md'), overviewDetails, 'utf8');
  console.log(`Overview files written under ${path.relative(repoRoot, overviewDir)}/`);
}

} // <-- Add this closing brace to end the async function 'main'

main().catch(err => { console.error(err); process.exit(1); });