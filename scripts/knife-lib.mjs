// scripts/knife-lib.mjs
import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

// --- HEADER ALIASES ---
export const HEADER_ALIASES = {
  id: ['ID', 'Id', 'id', '\uFEFFID'],
  short_title: ['ShortTitle', 'Short Title', 'title'],
  folder_name: ['FolderName', 'Folder Name'],
  sidebar_label: ['SidebarLabel', 'Sidebar Label'],
  date: ['Date', 'Date of Record', 'created'],
  guid: ['GUID','Guid','guid'],
  display_id: ['DisplayID','HumanID','Alias','display_id'],
};

export function getField(row, key) {
  const aliases = HEADER_ALIASES[key] || [key];
  for (const k of aliases) {
    if (row[k] !== undefined && row[k] !== null && row[k] !== '') return row[k];
  }
  return '';
}

export function parseAuthors(row) {
  const raw = row.Authors ?? row.Author ?? row.author ?? '';
  return String(raw)
    .split(/[,;|]/)
    .map(s => s.trim())
    .filter(Boolean)
    .slice(0, 10);
}

export async function ensureDir(p) { await fs.mkdir(p, { recursive: true }); }
export async function fileExists(p) { try { await fs.access(p); return true; } catch { return false; } }
export function kebab(s) {
  return (s || 'untitled')
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase();
}

export function splitFrontMatter(text) {
  const m = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!m) return [null, text];
  return [m[1], text.slice(m[0].length)];
}
export function parseSimpleYAML(yaml) {
  if (!yaml) return {};
  const obj = {};
  const lines = yaml.split('\n');
  for (const line of lines) {
    const mm = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (mm) obj[mm[1]] = mm[2].replace(/^"|"$/g, '').trim();
  }
  return obj;
}

export function writeFrontMatter(obj) {
  const order = [
    'id','guid','dao','title','description','author',
    'created','modified','date',
    'status','tags',
    'slug','sidebar_label','sidebar_position','locale',
    'category','type','author_id','author_did',
    'copyright','rights_holder_content','rights_holder_system','license','disclaimer'
  ];
  const quote = (s) => JSON.stringify(String(s == null ? '' : s));
  const print = (v) => {
    if (v === null || v === undefined) return '""';
    if (typeof v === 'number' || typeof v === 'boolean') return String(v);
    return quote(v);
  };
  const b = [];
  b.push('---');
  for (const k of order) {
    if (!(k in obj)) continue;
    const val = obj[k];
    if (val === undefined) continue;
    if (k === 'tags' && Array.isArray(val)) {
      const arr = val.slice(0, 200).map((x) => quote(x));
      b.push(`${k}: [${arr.join(', ')}]`);
      continue;
    }
    b.push(`${k}: ${print(val)}`);
  }
  b.push('---');
  return b.join('\n') + '\n';
}

export { fs, fssync, path, crypto };
