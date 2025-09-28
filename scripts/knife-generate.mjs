// scripts/knife-generate.mjs
import { fs, fssync, path, crypto,
  ensureDir, fileExists, kebab, getField,
  parseAuthors, splitFrontMatter, parseSimpleYAML, writeFrontMatter
} from './knife-lib.mjs';

function tedexSkeleton(id, title) {
  return `<!-- body:start -->

# KNIFE ${id} – ${title}

## 🎯 Čo rieši
...`;
}
function buildVisibleHeader(guid, fm) {
  return `<!-- fm-visible: start -->
> **GUID:** \`${guid}\`
<!-- fm-visible: end -->
`;
}

function buildFrontMatter(row, opts) {
  const id = String(getField(row, 'id') || 'K000').toUpperCase();
  const title = getField(row, 'short_title') || id;
  const loc = opts.locale || 'sk';
  const slug = `/${loc}/knifes/${kebab(`${id} ${title}`)}`;
  const fm = {
    id,
    guid: crypto.randomUUID(),
    dao: 'knife',
    title,
    slug,
    sidebar_label: `${id} – ${title}`,
    sidebar_position: parseInt(id.replace(/^K/i,''), 10) || 999,
    tags: ['KNIFE'],
    locale: loc,
    created: new Date().toISOString().slice(0,10),
    modified: new Date().toISOString().slice(0,10),
    status: 'draft'
  };
  return writeFrontMatter(fm);
}

async function main() {
  const root = '.';
  const locale = 'sk';
  const csv = 'data/KNIFE-OVERVIEW-ONLY.csv';
  const repoRoot = path.resolve(root);
  const overviewDir = path.join(repoRoot, 'docs', locale, 'knifes');
  await ensureDir(overviewDir);

  // TODO: parse CSV (reuse your parser), loop rows and generate missing KNIFEs
  // TODO: write overview.md, KNIFE_Overview_List.md, KNIFE_Overview_Details.md
}
main();
