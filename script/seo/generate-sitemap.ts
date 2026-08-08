/**
 * 扫描 doc_build 下 HTML，生成 sitemap.xml
 */
import { readdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { docBuildPath } from '../utils.js';

const SITE_ORIGIN = 'https://sapi.dogelake.cn';

async function walkHtmlFiles(dir: string, out: string[] = []): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // 构建产物中的静态资源目录无需进 sitemap
      if (entry.name === 'static' || entry.name === 'assets') continue;
      await walkHtmlFiles(full, out);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.html')) {
      out.push(full);
    }
  }
  return out;
}

function toUrl(filePath: string): string {
  const rel = path.relative(docBuildPath, filePath).split(path.sep).join('/');
  if (rel === 'index.html') return `${SITE_ORIGIN}/`;
  if (rel.endsWith('/index.html')) {
    return `${SITE_ORIGIN}/${rel.slice(0, -'index.html'.length)}`;
  }
  return `${SITE_ORIGIN}/${rel}`;
}

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

async function main() {
  const buildStat = await stat(docBuildPath).catch(() => null);
  if (!buildStat?.isDirectory()) {
    throw new Error(`doc_build 不存在：${docBuildPath}，请先执行 rspress build`);
  }

  const files = await walkHtmlFiles(docBuildPath);
  const urls = [...new Set(files.map(toUrl))].sort((a, b) => a.localeCompare(b));

  const body = urls
    .map(
      (loc) => `  <url>
    <loc>${escapeXml(loc)}</loc>
    <changefreq>weekly</changefreq>
  </url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  const outFile = path.join(docBuildPath, 'sitemap.xml');
  await writeFile(outFile, xml, 'utf8');
  console.log(`[seo] sitemap.xml urls=${urls.length} -> ${outFile}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
