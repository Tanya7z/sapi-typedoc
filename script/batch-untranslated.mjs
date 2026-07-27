import { readFileSync, writeFileSync } from 'fs';

const list = JSON.parse(readFileSync('cache/untranslated-list.json', 'utf-8'));
const MAX_BLOCKS = 55; // 每个 agent 批次的目标块数上限

const batches = [];
let cur = [];
let curBlocks = 0;
for (const item of list) {
  // 超大文件独占一个批次
  if (item.untrans >= MAX_BLOCKS) {
    batches.push([item]);
    continue;
  }
  if (curBlocks + item.untrans > MAX_BLOCKS && cur.length > 0) {
    batches.push(cur);
    cur = [];
    curBlocks = 0;
  }
  cur.push(item);
  curBlocks += item.untrans;
}
if (cur.length > 0) batches.push(cur);

writeFileSync('cache/translate-batches.json', JSON.stringify(batches));
console.log(`批次数: ${batches.length}`);
batches.forEach((b, i) => {
  const blocks = b.reduce((s, x) => s + x.untrans, 0);
  console.log(`  批次 ${String(i).padStart(2)}: ${b.length} 文件 / ${blocks} 块  [${b.map((x) => x.path.split('/').slice(-1)[0]).slice(0, 4).join(', ')}${b.length > 4 ? ', …' : ''}]`);
});
