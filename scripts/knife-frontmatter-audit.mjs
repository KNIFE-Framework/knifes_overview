#!/usr/bin/env node
// Frontmatter audit for KNIFE docs
// Usage:
//   node scripts/knife-frontmatter-audit.mjs [rootDir]
// Default rootDir: docs/sk/knifes

import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';

const root = process.argv[2] || path.join('docs','sk','knifes');

function isISODate(s){ return /^\d{4}-\d{2}-\d{2}$/.test(String(s||'')); }
function readText(p){ return fs.readFile(p,'utf8'); }

async function* walk(dir){
  const ents = await fs.readdir(dir,{ withFileTypes:true });
  for (const e of ents){
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.isFile() && e.name === 'index.md') yield p;
  }
}

function extractFM(txt){
  const m = txt.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return { fm: {}, body: txt };
  const yaml = m[1];
  const fm = {};
  const lines = yaml.split(/\n/);
  let key=null, buf=[];
  function flush(){ if (!key) return; fm[key] = buf.join('\n').trim(); key=null; buf=[]; }
  for (const line of lines){
    const m2 = line.match(/^([a-zA-Z0-9_\-]+):\s*(.*)$/);
    if (m2){ flush(); key = m2[1]; buf.push(m2[2] || ''); }
    else { buf.push(line); }
  }
  flush();
  return { fm, body: txt.slice(m[0].length) };
}

function getVal(fm, k){
  if (!(k in fm)) return '';
  let v = String(fm[k] ?? '').trim();
  v = v.replace(/^\"([\s\S]*)\"$/,'$1');
  return v;
}

function auditOne(fm){
  const issues = [];
  const id = getVal(fm,'id');
  const guid = getVal(fm,'guid');
  const dao = getVal(fm,'dao');
  const title = getVal(fm,'title');
  const created = getVal(fm,'created');
  const date = getVal(fm,'date');
  const modified = getVal(fm,'modified');
  const slug = getVal(fm,'slug');
  const sidebar_label = getVal(fm,'sidebar_label');
  const locale = getVal(fm,'locale');

  if (!id) issues.push('missing:id');
  else if (!/^K\d{3}$/.test(id)) issues.push(`invalid:id=${id}`);

  if (!guid) issues.push('missing:guid');
  else if (!/^knife-/.test(guid)) issues.push('invalid:guid');

  if (dao && dao !== 'knife') issues.push(`unexpected:dao=${dao}`);
  if (!title) issues.push('missing:title');

  if (!created && !date) issues.push('missing:created/date');
  if (created && !isISODate(created)) issues.push(`invalid:created=${created}`);
  if (date && !isISODate(date)) issues.push(`invalid:date=${date}`);
  if (modified && !isISODate(modified)) issues.push(`invalid:modified=${modified}`);

  if (!slug) issues.push('missing:slug');
  if (!sidebar_label) issues.push('missing:sidebar_label');
  if (!locale) issues.push('missing:locale');

  return issues;
}

(async function main(){
  if (!fssync.existsSync(root)) {
    console.error(`✖ Root not found: ${root}`);
    process.exit(2);
  }
  let total = 0, bad = 0;
  const details = [];
  for await (const p of walk(root)){
    total++;
    const txt = await readText(p);
    const { fm } = extractFM(txt);
    const issues = auditOne(fm);
    if (issues.length){ bad++; details.push({ p, issues }); }
  }

  if (!total){
    console.log('ℹ️ No index.md files under', root);
    return;
  }

  if (!bad){
    console.log(`✅ All ${total} files passed frontmatter audit.`);
    return;
  }

  console.log(`⚠️ ${bad}/${total} files with frontmatter issues.`);
  for (const d of details){
    console.log(`— ${d.p}`);
    console.log('   • ' + d.issues.join('\n   • '));
  }
  process.exit(1);
})().catch(e=>{ console.error(e); process.exit(1); });