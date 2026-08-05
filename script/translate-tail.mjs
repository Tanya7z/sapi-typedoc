export const meta = {
  name: 'translate-tail',
  description: '收尾翻译 sapi-typedoc 剩余 97 块 JSDoc',
  phases: [
    { title: 'Load', detail: '读取收尾批清单' },
    { title: 'Translate', detail: '并行翻译剩余 44 个文件' },
  ],
};

const CONVENTION = `
你为 Minecraft 基岩版 Script API 中文文档（sapi-typedoc）翻译 .d.ts 的 JSDoc。

## 双语 JSDoc 约定（务必逐字遵守）
- 中文译文放**上方**，英文原文**原样保留**在下方
- 中间用一行空的 \` * \` 隔开
- 保留原行缩进（每行以 \` * \` 前缀对齐）

## 只翻译描述性散文
- 顶部摘要（类/接口/枚举/函数说明，无 @remarks 的那段）
- @remarks 下的描述
- @param <名字> 下的描述
- @returns 下的描述
- 枚举成员 / 属性上方的描述性注释

## 不要碰
- @throws 样板句（"This function can throw errors." "This property can throw when used."）—— 保持英文
- 所有标签：@beta @rc @worldMutation @earlyExecution @seeExample @see @param @returns @remarks
- {@link Xxx} 内联引用（保留英文符号名）
- 任何 TypeScript 代码：签名、类型、参数名、= 值
- /* IMPORT */ /* EXPORT */ 注释
- 已有中文译文的块（不要重复翻）
- @see https://... 链接行

## 术语
dimension=维度, entity=实体, block=方块, component=组件, permutation=方块状态, player=玩家, world=世界, itemStack=物品堆, scoreboard=计分板, container=容器, chunk=区块, waterlogged=含水, redstone=红石, liquid=液体

## 自校验
每个文件译完用这条命令确认无遗漏（输出应为空）：
node -e "const fs=require('fs');const CJK=/[一-鿿]/;const t=fs.readFileSync(process.argv[1],'utf8');for(const b of (t.match(/\\/\\*\\*[\\s\\S]*?\\*\\//g)||[])){const body=b.replace(/^\\s*\\*\\s?/gm,'').replace(/\\/\\*\\*|\\*\\//g,'');const prose=body.replace(/@throws[^\\n]*(?:\\n(?!\\s*@)[^\\n]*)*/g,'').replace(/\\{@\\w+[^}]*\\}/g,'').replace(/@\\w+/g,'');if(/[A-Za-z]{3,}/.test(prose)&&!CJK.test(prose))console.log('UNTRANSLATED:',body.slice(0,80).replace(/\\n/g,' '))}" "<文件路径>"
`;

phase('Load');
const loaded = await agent(
  `读取仓库根目录的 cache/translate-tail.json（运行 \`cat cache/translate-tail.json\`）。它是一个数组，每个元素形如 {"path":"translate-pieces/...d.ts","untrans":N}。` +
    `请把它返回为只含 path 字符串的数组。`,
  {
    label: 'load-tail',
    schema: {
      type: 'object',
      additionalProperties: false,
      required: ['files'],
      properties: {
        files: { type: 'array', items: { type: 'string' } },
      },
    },
  }
);

const files = (loaded?.files ?? []).filter(Boolean);
log(`收尾批: ${files.length} 个文件`);

phase('Translate');
// 一次性派一个 agent 翻译所有剩余文件（97 块跨 44 文件，单 agent 可处理）
const result = await agent(
  `${CONVENTION}\n\n## 待翻译文件（相对仓库根目录，逐个处理）\n${files.map((f) => `- ${f}`).join('\n')}\n\n` +
    `注意：cache/untranslated-list.json 显示每个文件剩余未译块数，但请以每个文件实际状态为准——可能部分块在多 agent 并行时已被处理。\n` +
    `逐个用 Edit 工具翻译文件中所有仅含英文的 JSDoc 描述块（中文在上、英文在下）。每个文件译完跑自校验命令确认无遗漏。` +
    `全部完成后返回：你实际修改了哪些文件、各翻译了多少块（自校验通过后计数）。`,
  {
    label: 'translate-tail',
    phase: 'Translate',
    agentType: 'general-purpose',
    schema: {
      type: 'object',
      additionalProperties: false,
      required: ['files', 'totalBlocks', 'notes'],
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['path', 'blocks'],
            properties: { path: { type: 'string' }, blocks: { type: 'number' } },
          },
        },
        totalBlocks: { type: 'number' },
        notes: { type: 'string' },
      },
    },
  }
);

log(`收尾完成: ${result?.files?.length ?? 0} 文件 / ${result?.totalBlocks ?? 0} 块`);
return result ?? {};
