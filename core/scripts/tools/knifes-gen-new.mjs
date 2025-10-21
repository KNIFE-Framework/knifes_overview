#!/usr/bin/env node
/**
 * KNIFE generator (no slug, explicit path)
 * See: make knifes-new id=K062 name="..." title="..."
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const [, , ID, NAME_DIR, TITLE, ...rest] = process.argv;

function parseFlags(args) {
  const out = {};
  let key = null;
  for (const a of args) {
    if (a.startsWith('--')) { key = a.slice(2); if (!(key in out)) out[key] = true; }
    else if (key) { out[key] = a; key = null; }
  }
  return out;
}
const flags = parseFlags(rest);

if (!ID || !NAME_DIR || !TITLE) {
  console.error('Usage: node scripts/knifes-gen-new.mjs <ID> "<NAME_DIR>" "<TITLE>" [--type <type>] [--category "<cat>"] [--lang sk|en] [--status <status>] [--author "<Name>"] [--force] [--template <path>] [--outroot <path>]');
  process.exit(1);
}

const repoRoot = path.resolve(__dirname, '..');
const templatePath = path.resolve(repoRoot, flags.template || 'core/templates/system/FM-Core.md');
const outRoot = path.resolve(repoRoot, flags.outroot || 'content/knifes');
const outDir = path.resolve(outRoot, NAME_DIR);
const outFile = path.resolve(outDir, 'index.md');

function uuidv4() {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random()*16)|0;
    const v = c === 'x' ? r : (r&0x3)|0x8;
    return v.toString(16);
  });
}

function extractFM(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { fm: '', body: md, hasFM: false };
  return { fm: m[1], body: m[2], hasFM: true };
}

function parseYAML(src) {
  const obj = {};
  let current = null;
  src.split('\n').forEach(line => {
    if (/^\s*#/.test(line) || /^\s*$/.test(line)) return;
    const li = line.match(/^\s*-\s+(.*)$/);
    if (li && current) { obj[current] = obj[current] || []; obj[current].push(li[1].replace(/^"|"$/g,'')); return; }
    const kv = line.match(/^([A-Za-z0-9_]+)\s*:\s*(.*)$/);
    if (kv) {
      const k = kv[1]; let v = kv[2].trim();
      if (v in {'':1,'null':1,'~':1}) { obj[k]=''; current=null; return; }
      if (v.startsWith('[') && v.endsWith(']')) {
        const inside = v.slice(1,-1).trim();
        obj[k] = inside ? inside.split(',').map(s=>s.trim().replace(/^"|"$/g,'')) : [];
        current=null; return;
      }
      const keyOnly = v === '' && line.endsWith(':');
      if (keyOnly) { current=k; obj[k]=[]; return; }
      obj[k] = v.replace(/^"|"$/g,''); current=null; return;
    }
  });
  return obj;
}

function dumpYAML(obj) {
  const preferred = ['id','guid','title','type','category','language','created','status','authors','related','tags','topic','record_date','duration','segments','source_files','outputs'];
  const keys = [...new Set([...preferred, ...Object.keys(obj)])];
  const lines = [];
  for (const k of keys) {
    if (!(k in obj)) continue;
    const v = obj[k];
    if (Array.isArray(v)) {
      if (v.length === 0) { lines.push(`${k}: []`); continue; }
      lines.push(`${k}:`); v.forEach(item => lines.push(`  - "${String(item)}"`));
    } else if (v && typeof v === 'object') {
      lines.push(`${k}:`);
      for (const [sk, sv] of Object.entries(v)) {
        if (Array.isArray(sv)) {
          if (sv.length === 0) { lines.push(`  ${sk}: []`); continue; }
          lines.push(`  ${sk}:`); sv.forEach(si => lines.push(`    - "${String(si)}"`));
        } else { lines.push(`  ${sk}: "${String(sv)}"`); }
      }
    } else { lines.push(`${k}: "${String(v ?? '')}"`); }
  }
  return lines.join('\n');
}

function ensureFM(fmObj, { id, title, type, category, language, status, author }) {
  const out = { ...fmObj };
  out.id = id || out.id || '';
  out.guid = out.guid || uuidv4();
  out.title = title || out.title || '';
  out.type = type || out.type || 'concept';
  out.category = category || out.category || 'SystemThinking';
  out.language = language || out.language || 'sk';
  out.created = out.created || new Date().toISOString().slice(0, 10);
  out.status = status || out.status || 'draft';

  if (!out.authors) out.authors = author ? [author] : ['Roman Kazička'];
  else if (typeof out.authors === 'string' && out.authors.trim() !== '') out.authors = [out.authors];
  else if (Array.isArray(out.authors) && out.authors.length === 0) out.authors = author ? [author] : ['Roman Kazička'];

  return out;
}

if (!fs.existsSync(templatePath)) { console.error(`Template not found: ${templatePath}`); process.exit(2); }
const tpl = fs.readFileSync(templatePath, 'utf8');
const { fm, body, hasFM } = extractFM(tpl);
if (!hasFM) { console.error('Template must contain YAML frontmatter (--- ... ---).'); process.exit(3); }
const fmObj = parseYAML(fm);
const ensured = ensureFM(fmObj, {
  id: ID, title: TITLE, type: flags.type, category: flags.category, language: flags.lang || flags.language, status: flags.status, author: flags.author || flags.authors
});

if (fs.existsSync(outFile) && !flags.force) { console.error(`Target exists: ${outFile} (use --force to overwrite)`); process.exit(4); }

fs.mkdirSync(outDir, { recursive: true });
const newFM = dumpYAML(ensured);
const finalMD = `---\n${newFM}\n---\n\n${body.trim()}\n`;
fs.writeFileSync(outFile, finalMD, 'utf8');
console.log(`✔ KNIFE created at: ${outFile}`);
