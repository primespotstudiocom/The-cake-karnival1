import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const customizeDir = path.join(projectRoot, 'public', 'customize');
const outFile = path.join(customizeDir, 'manifest.json');

const allowedExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif']);

function encodePathSegmentPreservingSlashes(input) {
  return input
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

function main() {
  if (!fs.existsSync(customizeDir)) {
    console.warn(`[customize-manifest] Skipped: folder not found: ${customizeDir}`);
    return;
  }

  const items = fs
    .readdirSync(customizeDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => allowedExtensions.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b));

  const urls = items.map((name) => encodePathSegmentPreservingSlashes(`/customize/${name}`));

  const payload = {
    generatedAt: new Date().toISOString(),
    count: urls.length,
    images: urls,
  };

  fs.writeFileSync(outFile, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  console.log(`[customize-manifest] Wrote ${urls.length} images -> ${path.relative(projectRoot, outFile)}`);
}

main();

