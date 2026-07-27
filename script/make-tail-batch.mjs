import { readFileSync, writeFileSync } from 'fs';

const list = JSON.parse(readFileSync('cache/untranslated-list.json', 'utf-8'));

// 本批仅补 server-net/enums/PacketId.d.ts 剩余 26 块(其包 229 块大文件大部分已译,剩 26 个 enum 成员)
// 不分批:直接用一个大 agent 补完所有剩余文件
const tail = list;
console.log(`最终收尾批: ${tail.length} 文件, ${tail.reduce((s, x) => s + x.untrans, 0)} 块`);
writeFileSync('cache/translate-tail.json', JSON.stringify(tail));
