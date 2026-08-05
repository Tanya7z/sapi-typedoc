export type DomainRule = {
  tag: string;
  nameTokens: string[];
  /** 仅扫符号名；body 匹配首期可选 */
  bodyPatterns?: RegExp[];
};

/** 中文图例（驱动 /tags/ 说明表） */
export const DOMAIN_TAG_LEGEND: { tag: string; meaning: string }[] = [
  { tag: 'event', meaning: '事件信号/回调类（BeforeEvent / AfterEvent / EventSignal 等）' },
  { tag: 'player', meaning: '玩家相关' },
  { tag: 'entity', meaning: '实体相关' },
  { tag: 'item', meaning: '物品 / 物品堆相关' },
  { tag: 'block', meaning: '方块 / 方块排列相关' },
  { tag: 'world', meaning: '世界相关' },
  { tag: 'dimension', meaning: '维度相关' },
  { tag: 'biome', meaning: '生物群系相关' },
  { tag: 'damage', meaning: '伤害 / 生命值相关' },
  { tag: 'inventory', meaning: '物品栏 / 容器相关' },
  { tag: 'scoreboard', meaning: '计分板相关' },
  { tag: 'chat', meaning: '原始消息 / 聊天相关' },
  { tag: 'permission', meaning: '权限 / OP 等级相关' },
  { tag: 'tick', meaning: '时序 / Tick / System 相关' },
  { tag: 'animation', meaning: '动画相关' },
  { tag: 'sound', meaning: '声音 / 音乐相关' },
  { tag: 'effect', meaning: '状态效果相关' },
  { tag: 'debug', meaning: '调试绘制相关' },
  { tag: 'network', meaning: 'HTTP / WebSocket / 数据包相关' },
  { tag: 'data', meaning: '动态属性 / 持久存储相关' },
  { tag: 'error', meaning: '错误异常类' },
  { tag: 'component', meaning: '实体 / 物品 / 方块组件相关' },
];

export const DOMAIN_TAG_RULES: DomainRule[] = [
  { tag: 'event', nameTokens: ['Event', 'Events', 'EventSignal', 'EventCallback', 'Signal'] },
  { tag: 'player', nameTokens: ['Player'] },
  { tag: 'entity', nameTokens: ['Entity', 'Entities'] },
  { tag: 'item', nameTokens: ['ItemStack', 'ItemType', 'ItemEnchants', 'ItemLockMode'] },
  { tag: 'block', nameTokens: ['BlockType', 'BlockPermutation', 'BlockVolume', 'BlockRaycastHit', 'Block'] },
  { tag: 'world', nameTokens: ['World'] },
  { tag: 'dimension', nameTokens: ['Dimension'] },
  { tag: 'biome', nameTokens: ['Biome'] },
  { tag: 'damage', nameTokens: ['Damage', 'Health'] },
  { tag: 'inventory', nameTokens: ['Inventory', 'Container'] },
  { tag: 'scoreboard', nameTokens: ['Scoreboard'] },
  { tag: 'chat', nameTokens: ['RawMessage', 'RawText'] },
  { tag: 'permission', nameTokens: ['Permission'] },
  { tag: 'tick', nameTokens: ['Tick'] },
  { tag: 'animation', nameTokens: ['Animation'] },
  { tag: 'sound', nameTokens: ['Sound'] },
  { tag: 'effect', nameTokens: ['Effect'] },
  { tag: 'debug', nameTokens: ['Debug'] },
  { tag: 'network', nameTokens: ['Http', 'WebSocket', 'Packet'] },
  { tag: 'data', nameTokens: ['DynamicProperty', 'Storage'] },
  { tag: 'error', nameTokens: ['Error'] },
  { tag: 'component', nameTokens: ['Component'] },
];

/** 整符号排除（误报） */
export const SYMBOL_TAG_EXCLUDES = new Set<string>([]);

function makeNameRegex(tokens: string[]): RegExp {
  return new RegExp(`(?:^|(?<=[a-z]))(${tokens.join('|')})(?=[A-Z0-9_]|$)`, 'g');
}

const COMPILED = DOMAIN_TAG_RULES.map((rule) => ({
  tag: rule.tag,
  nameRegex: makeNameRegex(rule.nameTokens),
}));

export function inferDomainTags(symbolName: string): string[] {
  if (SYMBOL_TAG_EXCLUDES.has(symbolName)) return [];
  const seen = new Set<string>();
  const result: string[] = [];
  for (const { tag, nameRegex } of COMPILED) {
    nameRegex.lastIndex = 0;
    if (nameRegex.test(symbolName)) {
      if (!seen.has(tag)) {
        seen.add(tag);
        result.push(tag);
      }
    }
  }
  return result;
}

export function boostForInheritanceDepth(depth: number): number {
  if (depth <= 0) return 1.2;
  if (depth === 1) return 1.1;
  if (depth === 2) return 1.0;
  return 0.95;
}
