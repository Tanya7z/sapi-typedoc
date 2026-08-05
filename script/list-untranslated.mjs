import { readdirSync, readFileSync } from 'fs';
import { resolve, join } from 'path';

const root = resolve('translate-pieces');
const CJK = /[一-鿿]/;
// 核心模块（排除实验性 editor、已完成 ui 自然为 0、机器生成 vanilla-data、examples）
const EXCLUDE = ['server-editor', 'vanilla-data', 'examples'];

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith('.d.ts')) acc.push(p);
  }
  return acc;
}

function untransCount(txt) {
  const blocks = txt.match(/\/\*\*[\s\S]*?\*\//g) || [];
  let n = 0;
  for (const b of blocks) {
    const body = b.replace(/^\s*\*\s?/gm, '').replace(/\/\*\*|\*\//g, '');
    const prose = body
      .replace(/@throws[^\n]*(?:\n(?!\s*@)[^\n]*)*/g, '')
      .replace(/\{@\w+[^}]*\}/g, '')
      .replace(/@\w+/g, '');
    const hasEnglishSentence = /[A-Za-z]{3,}/.test(prose);
    if (hasEnglishSentence && !CJK.test(prose)) n++;
  }
  return n;
}

const files = walk(root).filter((f) => {
  const mod = f.slice(root.length + 1).split(/[\\/]/)[0];
  return !EXCLUDE.includes(mod);
});

const list = [];
for (const f of files) {
  const n = untransCount(readFileSync(f, 'utf-8'));
  if (n > 0) {
    const rel = f.slice(resolve('.').length + 1).split(/[\\/]/).join('/');
    list.push({ path: rel, untrans: n });
  }
}
list.sort((a, b) => b.untrans - a.untrans);
console.log(JSON.stringify(list, null, 0));
console.error(`待翻译文件: ${list.length}，未译块合计: ${list.reduce((s, x) => s + x.untrans, 0)}`);
