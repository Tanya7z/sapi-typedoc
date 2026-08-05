export const meta = {
  name: 'translate-tail-v2',
  description: '收尾核心模块未译 JSDoc',
  phases: [
    { title: 'Translate' }
  ]
};

// 剩余核心模块清单(共 ~95 块)
const TASKS = [
  // server-net: PacketId 26 + WebSocketClient 5 + HttpClient 1 = 32
  { mod: 'server-net', file: 'enums/PacketId.d.ts', blocks: 26 },
  { mod: 'server-net', file: 'classes/WebSocketClient.d.ts', blocks: 5 },
  { mod: 'server-net', file: 'classes/HttpClient.d.ts', blocks: 1 },
  // debug-utilities: 5 个 DebugXxx 各 4 = 20
  { mod: 'debug-utilities', file: 'classes/DebugArrow.d.ts', blocks: 4 },
  { mod: 'debug-utilities', file: 'classes/DebugCone.d.ts', blocks: 4 },
  { mod: 'debug-utilities', file: 'classes/DebugCylinder.d.ts', blocks: 4 },
  { mod: 'debug-utilities', file: 'classes/DebugDrawer.d.ts', blocks: 4 },
  { mod: 'debug-utilities', file: 'classes/DebugPyramid.d.ts', blocks: 4 },
  // server: ScoreboardObjective 5 + 11 个各 1 = 16
  { mod: 'server', file: 'classes/ScoreboardObjective.d.ts', blocks: 5 },
  { mod: 'server', file: 'classes/ScoreboardIdentity.d.ts', blocks: 1 },
  { mod: 'server', file: 'classes/ItemCooldownComponent.d.ts', blocks: 3 },
  { mod: 'server', file: 'classes/ItemComponentCompleteUseEvent.d.ts', blocks: 1 },
  { mod: 'server', file: 'classes/ItemCustomComponentAlreadyRegisteredError.d.ts', blocks: 1 },
  { mod: 'server', file: 'classes/ItemCustomComponentInstance.d.ts', blocks: 1 },
  { mod: 'server', file: 'classes/ItemCustomComponentReloadNewComponentError.d.ts', blocks: 1 },
  { mod: 'server', file: 'classes/ItemCustomComponentReloadNewEventError.d.ts', blocks: 1 },
  { mod: 'server', file: 'classes/ItemCustomComponentReloadVersionError.d.ts', blocks: 1 },
  { mod: 'server', file: 'classes/ItemDurabilityComponent.d.ts', blocks: 1 },
  { mod: 'server', file: 'classes/ItemInventoryComponent.d.ts', blocks: 1 },
  { mod: 'server', file: 'classes/PistonActivateAfterEventSignal.d.ts', blocks: 1 },
  { mod: 'server', file: 'classes/PotionDeliveryType.d.ts', blocks: 1 },
  { mod: 'server', file: 'types/BlockStateArg.d.ts', blocks: 1 },
  // server-admin: 4 classes + 4 functions + 1 variable = 13
  { mod: 'server-admin', file: 'classes/AdminBeforeEvents.d.ts', blocks: 1 },
  { mod: 'server-admin', file: 'classes/AllowListFileReloadError.d.ts', blocks: 1 },
  { mod: 'server-admin', file: 'classes/AllowListModificationError.d.ts', blocks: 1 },
  { mod: 'server-admin', file: 'classes/AsyncPlayerJoinBeforeEventSignal.d.ts', blocks: 1 },
  { mod: 'server-admin', file: 'classes/CannotDeopPlayerError.d.ts', blocks: 1 },
  { mod: 'server-admin', file: 'classes/CannotKickPlayerError.d.ts', blocks: 1 },
  { mod: 'server-admin', file: 'classes/LevelStorageSaveStateChangeError.d.ts', blocks: 1 },
  { mod: 'server-admin', file: 'classes/PlayerAlreadyOpError.d.ts', blocks: 1 },
  { mod: 'server-admin', file: 'functions/deopPlayer.d.ts', blocks: 1 },
  { mod: 'server-admin', file: 'functions/kickPlayer.d.ts', blocks: 1 },
  { mod: 'server-admin', file: 'functions/opPlayer.d.ts', blocks: 1 },
  { mod: 'server-admin', file: 'functions/transferPlayer.d.ts', blocks: 1 },
  { mod: 'server-admin', file: 'variables/dedicatedServer.d.ts', blocks: 1 },
  // server-gametest: Test 3 + SimulatedPlayer 1 + 6 functions = 6
  { mod: 'server-gametest', file: 'classes/Test.d.ts', blocks: 3 },
  { mod: 'server-gametest', file: 'classes/SimulatedPlayer.d.ts', blocks: 1 },
  { mod: 'server-gametest', file: 'functions/getPlayerSkin.d.ts', blocks: 1 },
  { mod: 'server-gametest', file: 'functions/register.d.ts', blocks: 1 },
  { mod: 'server-gametest', file: 'functions/registerAsync.d.ts', blocks: 1 },
  { mod: 'server-gametest', file: 'functions/setAfterBatchCallback.d.ts', blocks: 1 },
  { mod: 'server-gametest', file: 'functions/setBeforeBatchCallback.d.ts', blocks: 1 },
  // common: 1
  { mod: 'common', file: 'classes/InvalidArgumentError.d.ts', blocks: 1 }
];

const PROMPT = (t) => `你是 Minecraft Bedrock Script API 文档的简体中文翻译员。

## 任务
翻译文件 \`translate-pieces/${t.mod}/${t.file}\` 中**所有尚未翻译**的 JSDoc 描述块（只译中文注释，保留英文原文）。

## 约定（严格遵守）
- **位置**：translate-pieces/${t.mod}/${t.file}
- **格式**：中文译文**在上**，原文英文**在下**。两段之间空一行。例如:
  \`\`\`
  /**
   * 设置计分板的显示名。
   *
   * Sets the display name of the scoreboard.
   */
  \`\`\`
- **保留**:\`@remarks\` / \`@param\` / \`@returns\` / \`@throws\` / \`@beta\` / \`@experimental\` / \`@rc\` / \`@seeExample\` / \`@worldMutation\` / \`@earlyExecution\` 等所有 @tag 标签,放在 JSDoc 块里同一行,不要挪位置
- **保留**:\`{@link Symbol}\` 内联引用、URL、代码示例、\`README\` 锚点
- **保留**:签名行(\`export class\`、\`export function\`、\`export type\` 等)
- **保留**:\`/* IMPORT */\` / \`/* EXPORT */\` / \`/* PRIVATE */\` 提示符
- **不要**翻译类型名、字段名、参数名(保留英文标识符)
- **不要**改动文件结构、缩进、空行
- **不要**翻译原文已有的中文(已经译过的段落保持不动)

## 判定"未译"
JSDoc 描述块去掉 @tag / {@link} / @throws 样板后,如果仍含英文散文而**没有中文**(CJK 字符)即为未译,需要补中文译文。

## 输出流程
1. \`Read\` translate-pieces/${t.mod}/${t.file} 完整内容
2. 找出所有未译 JSDoc 块,逐块在英文**之前**插入中文段落
3. \`Edit\` 写回文件
4. \`Bash\` 验证:
   \`node script/scan-untranslated.mjs | grep '${t.mod}/${t.file.split('/')[1].replace('.d.ts','')}'\` 该文件未译块应归 0
   若未归 0 再 Edit 补一次

## 范围
**只动 translate-pieces/${t.mod}/${t.file} 这一个文件**,不要修改其它文件。
不要运行任何 build/serve,不要 commit。`;

phase('Translate');
await pipeline(
  TASKS,
  (t) => agent(PROMPT(t), { label: `tx:${t.mod}/${t.file}`, effort: 'medium' })
);