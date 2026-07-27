import { readdirSync, readFileSync } from 'fs';
import { resolve, join } from 'path';

const root = resolve('translate-pieces');
const CJK = /[一-鿿]/;

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith('.d.ts')) acc.push(p);
  }
  return acc;
}

const files = walk(root).filter((f) => !f.includes('vanilla-data') && !f.includes('examples'));
let totalFiles = 0;
let filesWithEnglishJSDoc = 0;
let jsdocTotal = 0;
let jsdocUntranslated = 0;
const perModule = {};

for (const f of files) {
  const rel = f.slice(root.length + 1).split(/[\\/]/);
  const mod = rel[0];
  perModule[mod] ??= { files: 0, untrans: 0, jsdoc: 0 };
  const txt = readFileSync(f, 'utf-8');
  totalFiles++;
  perModule[mod].files++;
  const blocks = txt.match(/\/\*\*[\s\S]*?\*\//g) || [];
  let fileHasEnglishOnly = false;
  for (const b of blocks) {
    const body = b.replace(/^\s*\*\s?/gm, '').replace(/\/\*\*|\*\//g, '');
    // 约定：@throws 样板句始终保留英文、不翻译；连同 {@link} 内联引用与其余 @tag 一并剔除，
    // 只对 @remarks / @param / @returns 的英文散文判定是否已翻译
    const prose = body
      .replace(/@throws[^\n]*(?:\n(?!\s*@)[^\n]*)*/g, '')
      .replace(/\{@\w+[^}]*\}/g, '')
      .replace(/@\w+/g, '');
    const hasEnglishSentence = /[A-Za-z]{3,}/.test(prose);
    if (!hasEnglishSentence) continue;
    jsdocTotal++;
    perModule[mod].jsdoc++;
    if (!CJK.test(prose)) {
      jsdocUntranslated++;
      perModule[mod].untrans++;
      fileHasEnglishOnly = true;
    }
  }
  if (fileHasEnglishOnly) filesWithEnglishJSDoc++;
}

console.log(`总 piece 文件: ${totalFiles}`);
console.log(`含未译 JSDoc 的文件: ${filesWithEnglishJSDoc}`);
console.log(`JSDoc 描述块总数(有英文): ${jsdocTotal}`);
console.log(`其中未翻译(无中文): ${jsdocUntranslated}  (${((100 * jsdocUntranslated) / jsdocTotal).toFixed(1)}%)`);
console.log('\n按模块:');
for (const [m, s] of Object.entries(perModule).sort((a, b) => b[1].untrans - a[1].untrans)) {
  console.log(`  ${m.padEnd(18)} 未译 ${String(s.untrans).padStart(5)} / ${String(s.jsdoc).padStart(5)}  (文件 ${s.files})`);
}
