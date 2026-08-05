export const meta = {
  name: 'translate-sapi-jsdoc',
  description: '并行翻译 sapi-typedoc 核心模块未译 JSDoc（双语格式，中文在上英文在下）',
  phases: [
    { title: 'Load', detail: '读取批次清单' },
    { title: 'Translate', detail: '每批一个 agent，逐块翻译并自校验' },
  ],
};

// ── 翻译规范（逐字嵌入每个 agent 的提示词）───────────────────────────────
const CONVENTION = `
你在为 Minecraft 基岩版 Script API 的中文文档项目（sapi-typedoc）翻译 TypeScript 声明文件（.d.ts）里的 JSDoc 注释。

## 项目的双语 JSDoc 约定（务必逐字遵守）
译文放在英文原文**上方**，中间用一行「空的 \` * \`」隔开，英文原文**原样保留**。例：

翻译前：
    /**
     * @remarks
     * Returns the dimension that the block is within.
     *
     * @returns
     * The dimension.
     * @throws This property can throw when used.
     */
翻译后：
    /**
     * @remarks
     * 返回方块所在的维度。
     *
     * Returns the dimension that the block is within.
     *
     * @returns
     * 该维度。
     *
     * The dimension.
     * @throws This property can throw when used.
     */

## 只翻译「描述性散文」，具体是：
- 顶部摘要（类/接口/枚举/函数说明，没有 @remarks 标签的那段）
- @remarks 下面的描述
- @param <名字> 下面的描述（@param 和参数名本身不动）
- @returns 下面的描述（@returns 关键字本身不动）
- 枚举成员 / 属性上方的描述性注释

## 绝对不要碰：
- @throws 开头的整行样板句（如 "This function can throw errors." "This property can throw when used."）——**保持英文原样**
- 标签本身：@beta @rc @worldMutation @earlyExecution @seeExample @see @param @returns @remarks 等
- {@link Xxx} 内联引用——原样保留，不翻译方括号里的符号名
- 任何 TypeScript 代码：签名、类型、参数名、= 值、以及 /* IMPORT */ 与 /* EXPORT */ 注释
- 已经有中文译文的块——跳过，不重复翻译
- @see https://... 这类纯链接行

## 翻译质量要求：
- 术语统一：dimension=维度, entity=实体, block=方块, component=组件, permutation=方块状态(BlockPermutation), player=玩家, world=世界, itemStack=物品堆, scoreboard=计分板, container=容器, chunk=区块, waterlogged=含水, redstone=红石, liquid=液体
- 保留原有缩进（每行以 \` * \` 前缀对齐），不要改变 * 的列位置
- 译文简洁准确、符合中文技术文档习惯，不要机翻腔
- 换行：英文原文本来怎么折行就怎么保留；中文译文可整段成句，不必逐行对齐英文

## 自校验（必须做）：
翻译完一个文件后，运行下面的命令确认该文件已无未译块（输出应为空）：
    node -e "const fs=require('fs');const CJK=/[\\u4e00-\\u9fff]/;const t=fs.readFileSync(process.argv[1],'utf8');for(const b of (t.match(/\\/\\*\\*[\\s\\S]*?\\*\\//g)||[])){const body=b.replace(/^\\s*\\*\\s?/gm,'').replace(/\\/\\*\\*|\\*\\//g,'');const prose=body.replace(/@throws[^\\n]*(?:\\n(?!\\s*@)[^\\n]*)*/g,'').replace(/\\{@\\w+[^}]*\\}/g,'').replace(/@\\w+/g,'');if(/[A-Za-z]{3,}/.test(prose)&&!CJK.test(prose))console.log('UNTRANSLATED:',body.slice(0,80).replace(/\\n/g,' '))}" "<文件路径>"
若有输出，继续翻译遗漏的块，直到为空。
另外确认文件花括号仍配平、结构未被破坏。
`;

phase('Load');
// 让一个 agent 读取批次清单，返回「每批的文件路径数组」
const loaded = await agent(
  `读取仓库里的 cache/translate-batches.json（运行 \`cat cache/translate-batches.json\`），它是一个二维数组：外层是批次，每个批次是若干 {path, untrans} 对象。` +
    `请把它转换成「每批只含 path 字符串数组」的形式返回。工作目录就是仓库根目录。`,
  {
    label: 'load-batches',
    schema: {
      type: 'object',
      additionalProperties: false,
      required: ['batches'],
      properties: {
        batches: {
          type: 'array',
          items: { type: 'array', items: { type: 'string' } },
        },
      },
    },
  }
);

const batches = (loaded?.batches ?? []).filter((b) => b.length > 0);
log(`共 ${batches.length} 个批次，${batches.reduce((s, b) => s + b.length, 0)} 个文件`);

phase('Translate');
const results = await pipeline(
  batches,
  (files, _orig, i) =>
    agent(
      `${CONVENTION}\n\n## 你这一批要翻译的文件（相对仓库根目录，逐个处理）：\n${files
        .map((f) => `- ${f}`)
        .join('\n')}\n\n` +
        `逐个打开这些文件，按上面的约定把其中所有「仅有英文、尚无中文」的 JSDoc 描述块翻成中文（中文在上、英文原文保留在下）。` +
        `用 Edit 工具精确替换，不要动任何 TS 代码。每个文件译完后跑自校验命令确认无遗漏。` +
        `全部完成后，返回你实际修改了哪些文件、各翻译了多少块。`,
      {
        label: `translate:batch-${i}`,
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
                properties: {
                  path: { type: 'string' },
                  blocks: { type: 'number' },
                },
              },
            },
            totalBlocks: { type: 'number' },
            notes: { type: 'string' },
          },
        },
      }
    )
);

const ok = results.filter(Boolean);
const totalBlocks = ok.reduce((s, r) => s + (r.totalBlocks || 0), 0);
const totalFiles = ok.reduce((s, r) => s + (r.files?.length || 0), 0);
log(`翻译完成：${totalFiles} 文件 / ${totalBlocks} 块（${ok.length}/${batches.length} 批成功）`);

return {
  batchesTotal: batches.length,
  batchesOk: ok.length,
  totalFiles,
  totalBlocks,
  perBatch: results.map((r, i) => ({ batch: i, ok: !!r, files: r?.files?.length ?? 0, blocks: r?.totalBlocks ?? 0 })),
};
