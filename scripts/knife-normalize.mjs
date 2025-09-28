// scripts/knife-normalize.mjs
import { fs, fssync, path, crypto,
  ensureDir, fileExists, splitFrontMatter, parseSimpleYAML, writeFrontMatter
} from './knife-lib.mjs';

async function normalizeKnifes(repoRoot, locale) {
  const base = path.join(repoRoot, 'docs', locale, 'knifes');
  if (!fssync.existsSync(base)) return;
  for (const folder of fssync.readdirSync(base)) {
    const dirAbs = path.join(base, folder);
    if (!fssync.statSync(dirAbs).isDirectory()) continue;
    const file = path.join(dirAbs, 'index.md');
    if (!fssync.existsSync(file)) continue;

    const raw = fssync.readFileSync(file,'utf8');
    const [fmText, body] = splitFrontMatter(raw);
    const fm = parseSimpleYAML(fmText||{});
    if (!fm.guid) fm.guid = crypto.randomUUID();
    if (!fm.dao) fm.dao = 'knife';
    const newRaw = writeFrontMatter(fm) + body;
    if (newRaw !== raw) {
      await fs.writeFile(file, newRaw,'utf8');
      console.log('Normalized:', file);
    }
  }
}
normalizeKnifes('.', 'sk');
