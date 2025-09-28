// scripts/knife-update-by-guid.mjs
import { fs, fssync, path,
  splitFrontMatter, parseSimpleYAML, writeFrontMatter, getField
} from './knife-lib.mjs';

function applyCsvUpdate(fm, row, policy) {
  const out = { ...fm };
  if (row.Status && (policy==='prefer-csv' || !out.status)) out.status = row.Status;
  if (row.Category && (policy==='prefer-csv' || !out.category)) out.category = row.Category;
  return out;
}

async function main() {
  const repoRoot = '.';
  const locale = 'sk';
  const base = path.join(repoRoot,'docs',locale,'knifes');
  for (const folder of fssync.readdirSync(base)) {
    const file = path.join(base,folder,'index.md');
    if (!fssync.existsSync(file)) continue;
    const raw = fssync.readFileSync(file,'utf8');
    const [fmText, body] = splitFrontMatter(raw);
    const fm = parseSimpleYAML(fmText||{});
    const newFm = applyCsvUpdate(fm, {}, 'add-only');
    const newRaw = writeFrontMatter(newFm)+body;
    if (newRaw!==raw) {
      await fs.writeFile(file,newRaw,'utf8');
      console.log('Updated:',file);
    }
  }
}
main();
