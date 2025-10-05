#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const args = process.argv;
const getArg = (n, d=null) => { const i=args.indexOf(n); return i>=0 ? args[i+1] : d; };

const KNIFES_DIR = getArg('--dir', 'docs/sk/knifes');
const OUT_DIR    = getArg('--outdir', 'config/out');
const CSV_REF    = getArg('--csv');               // voliteľný: pre audit
const WITH_README = args.includes('--include-readme');

const CSV_HEADER = [
  'ID','display_id','GUID','DID','DAO','ShortTitle','Category','Type','Status','Priority','Created [YYYY-MM-DD]',
  'Author','Authors','Tags','Description','Context_Origin_WhyItWasInitiated','Technology','SFIA_Level','SFIA_Domain','SFIA_Maturity',
  'Related_KNIFE','PotentialOutputs','Owner','Org','Project','Locale','FolderName','SidebarLabel','LinkSlug','Copyright',
  'RightsHolderContent','RightsHolderSystem','License','Disclaimer'
];

const ts = () => {
  const d = new Date();
  const p = (n)=> String(n).padStart(2,'0');
  return `${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
};

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const y = m[1];
  const o = {};
  for (const ln of y.split(/\r?\n/)) {
    const mm = ln.match(/^\s*([A-Za-z0-9_\-\[\] ]+)\s*:\s*(.*)\s*$/);
    if (!mm) continue;
    const k = mm[1].trim();
    let v = mm[2].trim();
    if (/^\[.*\]$/.test(v)) {
      o[k] = v.replace(/^\[|\]$/g,'').split(',').map(s=>s.trim().replace(/^"|"$/g,'')).filter(Boolean).join('; ');
    } else {
      o[k] = v.replace(/^"|"$/g,'');
    }
  }
  return o;
}

function csvEsc(s){
  if (s==null) s='';
  s = String(s);
  if (s.includes('"') || s.includes(',') || s.includes('\n')) return `"${s.replace(/"/g,'""')}"`;
  return s;
}

function fmToRow(fm, folderName){
  const r = {};
  r.ID   = fm.id || fm.ID || '';
  r.GUID = fm.guid || fm.GUID || '';
  r['ShortTitle'] = fm.title || fm.ShortTitle || '';
  r.Author   = fm.author || fm.Author || '';
  r.Category = fm.category || '';
  r.Type     = fm.type || '';
  r.Priority = fm.priority || '';
  r['Created [YYYY-MM-DD]'] = fm.created || '';
  r.Tags = fm.tags || '';
  r.FolderName = folderName || '';
  // ostatné nechávame prázdne (CSV si zachová hlavičku)
  return r;
}

async function loadCsvMap(csvPath){
  let txt = await fs.readFile(csvPath, 'utf8');
  txt = txt.replace(/^\uFEFF/,'');
  const lines = txt.split(/\r?\n/).filter(Boolean);
  // nájdeme header (podporujeme tvoju preambulu "HEADER" + "DATA START")
  let headerIdx = lines.findIndex(l => /^"?\s*data\s*start\s*"?$/i.test(l.trim()));
  headerIdx = headerIdx>=0 ? headerIdx+1 : 0;
  const header = lines[headerIdx].split(',');
  const idxID = header.findIndex(h => /^"?id"?$/i.test(h.trim()));
  const map = new Map();
  for (let i=headerIdx+1; i<lines.length; i++){
    const row = lines[i].split(',');
    const id = (row[idxID]||'').replace(/^"|"$/g,'').trim().toUpperCase();
    if (!id) continue;
    map.set(id, true);
  }
  return map;
}

async function main(){
  await fs.mkdir(OUT_DIR, { recursive:true });
  const outCsv = path.join(OUT_DIR, `KNIFES-OVERVIEW-${ts()}.csv`);

  const entries = await fs.readdir(KNIFES_DIR, { withFileTypes:true });
  const dirs = entries.filter(e => e.isDirectory() && /^[Kk]\d{6}-/.test(e.name));

  const rows = [];
  const idsFS = new Set();

  for (const e of dirs){
    const dir = path.join(KNIFES_DIR, e.name);
    const fmFiles = [path.join(dir,'index.md')];
    if (WITH_README) fmFiles.push(path.join(dir,'README.md'));

    let used = null, fmObj = null;
    for (const f of fmFiles){
      try {
        const md = await fs.readFile(f,'utf8');
        const fm = parseFrontmatter(md);
        if (Object.keys(fm).length) { used = f; fmObj = fm; break; }
      } catch {}
    }
    if (!fmObj) continue;

    const id = (fmObj.id || fmObj.ID || '').toString().toUpperCase();
    if (id) idsFS.add(id);

    const row = fmToRow(fmObj, e.name);
    rows.push(row);
  }

  // write new snapshot (preambula + hlavička)
  const preamble = 'HEADER\n"DATA START"\n';
  const lines = [];
  lines.push(CSV_HEADER.map(csvEsc).join(','));
  for (const r of rows){
    const arr = CSV_HEADER.map(h => csvEsc(r[h] ?? ''));
    lines.push(arr.join(','));
  }
  await fs.writeFile(outCsv, preamble + lines.join('\n') + '\n', 'utf8');
  console.log(`✔ CSV snapshot written: ${outCsv}`);

  // optional audit
  if (CSV_REF){
    try {
      const idsCSV = await loadCsvMap(CSV_REF);
      const onlyFS = [...idsFS].filter(id => !idsCSV.has(id));
      const onlyCSV = [...idsCSV.keys()].filter(id => !idsFS.has(id));
      console.log('--- AUDIT ---');
      console.log(`Only in FS (${onlyFS.length}): ${onlyFS.join(', ') || '-'}`);
      console.log(`Only in CSV (${onlyCSV.length}): ${onlyCSV.join(', ') || '-'}`);
    } catch(e){
      console.warn('AUDIT skipped:', e.message);
    }
  }
}

main().catch(e => { console.error('SCAN failed:', e); process.exit(1); });