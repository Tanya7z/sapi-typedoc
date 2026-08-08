/**
 * 在 Rspress 生成的 llms.txt / llms-full.txt 头部注入 AI 使用声明
 */
import { readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { docBuildPath } from '../utils.js';

const MARKER = '<!-- sapi-ai-use -->';

const HEADER = `${MARKER}
> AI / 爬虫：本站允许抓取、索引与模型训练（本站原创编排与中文译文，MIT）。引用请保留来源 https://sapi.dogelake.cn/ 。上游 Microsoft / Minecraft 权利仍归原权利人。完整说明：https://sapi.dogelake.cn/ai-use/

`;

async function inject(fileName: string) {
  const filePath = path.join(docBuildPath, fileName);
  try {
    await access(filePath);
  } catch {
    console.warn(`[seo] skip missing ${fileName}`);
    return;
  }

  const original = await readFile(filePath, 'utf8');
  if (original.includes(MARKER)) {
    console.log(`[seo] ${fileName} already injected`);
    return;
  }

  // 插在首行标题之后，保留原有站点名
  const lines = original.split(/\r?\n/);
  if (lines.length === 0) {
    await writeFile(filePath, HEADER + original, 'utf8');
    return;
  }

  const first = lines[0] ?? '';
  const rest = lines.slice(1).join('\n');
  const next = `${first}\n\n${HEADER}${rest.startsWith('\n') ? rest.slice(1) : rest}`;
  await writeFile(filePath, next.endsWith('\n') ? next : `${next}\n`, 'utf8');
  console.log(`[seo] injected header -> ${fileName}`);
}

async function main() {
  await inject('llms.txt');
  await inject('llms-full.txt');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
