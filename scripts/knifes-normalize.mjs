// knifes-normalize.mjs — doplní NAV, body:start, img/, multimedia/, viditeľný header, stabilizuje FM
import path from 'node:path';
import fs from 'node:fs/promises';
import fssync from 'node:fs';
import {
  ensureDir, fileExists, writeText,
  splitFrontMatter, parseSimpleYAML, writeFrontMatter,
  injectNav, ensureBodyDelimiter, buildVisibleHeader,
  kebab
} from './knifes-lib.mjs';

function parseArgs(){
  const args=process.argv.slice(2);
  const out={ root:'.', locale:'sk', org:'', project:'', debug:false };
  for(let i=0;i<args.length;i++){
    const k=args[i], v=args[i+1];
    if(k==='--root'){ out.root=v; i++; continue; }
    if(k==='--locale'){ out.locale=v; i++; continue; }
    if(k==='--org'){ out.org=v; i++; continue; }
    if(k==='--project'){ out.project=v; i++; continue; }
    if(k==='--debug'){ out.debug=true; continue; }
  }
  return out;
}

async function main(){
  const {root, locale, org, project, debug}=parseArgs();
  const base = path.join(path.resolve(root), 'docs', locale, 'knifes');
  if(!fssync.existsSync(base)) return;

  for(const folder of fssync.readdirSync(base)){
    const dirAbs=path.join(base, folder);
    if(!fssync.statSync(dirAbs).isDirectory()) continue;
    const files=fssync.readdirSync(dirAbs);
    const mainMd = files.includes('index.md') ? 'index.md' : files.find(f=>/^K\d+.*\.md$/i.test(f));
    if(!mainMd) continue;

    // ensure folders
    await ensureDir(path.join(dirAbs,'img'));
    await ensureDir(path.join(dirAbs,'multimedia'));

    const mainAbs = path.join(dirAbs, mainMd);
    const raw = fssync.readFileSync(mainAbs,'utf8');
    const [fmText, body0] = splitFrontMatter(raw);
    const fm = parseSimpleYAML(fmText||{});

    // derive ID,title from folder if missing
    const idFromFolder = (folder.match(/^(K\d+)/i) || [, ''])[1] || '';
    const titleFromFolder = folder.replace(/^(K\d+)[-–\s_]*/i,'').replace(/[_]+/g,' ').trim();
    const h1 = (body0.match(/^#\s+(.+)$/m) || [, ''])[1]?.trim() || '';
    const id = (fm.id || idFromFolder || (h1.match(/^(K\d+)/i)||[, ''])[1] || 'K000').toUpperCase();
    const title = fm.title || titleFromFolder || h1 || 'Untitled KNIFE';

    // slug/sidebar_label defaults (do not overwrite if present)
    const slug = fm.slug ? fm.slug : `/${locale}/knifes/${kebab(`${id} ${title}`)}`;
    const sidebar_label = fm.sidebar_label ? fm.sidebar_label : `${id} – ${title.length>40?(title.slice(0,37)+'…'):title}`;
    const sidebar_position = fm.sidebar_position || parseInt(id.replace(/^K/i,''),10) || 999;

    // minimal visible header
    const ensuredGuid = fm.guid || crypto.randomUUID?.() || id;
    const body = injectNav(ensureBodyDelimiter(body0));
    const header = buildVisibleHeader(ensuredGuid, {...fm, id, title});

    const outFM = {
      ...fm,
      id, title,
      slug, sidebar_label, sidebar_position,
      dao: fm.dao || 'knife',
      locale: fm.locale || locale,
      display_id: fm.display_id || id
    };

    const newRaw = writeFrontMatter(outFM) + header + body;
    if(newRaw !== raw){
      await fs.writeFile(mainAbs, newRaw, 'utf8');
      if(debug) console.log('Updated:', path.relative(path.resolve(root), mainAbs));
    }
  }
}

main().catch(e=>{ console.error(e); process.exit(1); });