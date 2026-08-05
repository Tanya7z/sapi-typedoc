import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import {
  buildInheritanceGraph,
  parseLocalParents,
  renderInheritanceKindMeta,
  renderMetaForModule,
  resolveLocalMemberHref,
  writeModuleMeta,
} from './inheritance-meta.js';
import type { MemberRef } from './restructure-modules.js';

/** 固定中文 TypeDoc 风格 fixture：继承节 + 本地链接 */
const FIXTURE = {
  Entity: `# 类: Entity

基类。

## 继承

无本地父类。

## 属性
`,
  Player: `# 类: Player

## 继承

- [\`Entity\`](Entity.md)

## 属性
`,
  // 多父：字母序应选 AlphaParent（先于 BetaParent）
  ChildMulti: `# 类: ChildMulti

## 继承

- [\`BetaParent\`](BetaParent.md)
- [\`AlphaParent\`](AlphaParent.md)

## 方法
`,
  AlphaParent: `# 类: AlphaParent

## 属性
`,
  BetaParent: `# 类: BetaParent

## 属性
`,
  // 环：A → B → C → A
  CycleA: `# 类: CycleA

## 继承

- [\`CycleB\`](CycleB.md)
`,
  CycleB: `# 类: CycleB

## 继承

- [\`CycleC\`](CycleC.md)
`,
  CycleC: `# 类: CycleC

## 继承

- [\`CycleA\`](CycleA.md)
`,
};

describe('resolveLocalMemberHref', () => {
  const known = new Set(['Entity.md', 'Player.mdx']);

  it('接受同目录 .md / .mdx / ./ 前缀', () => {
    assert.equal(resolveLocalMemberHref('Entity.md', known), 'Entity.md');
    assert.equal(resolveLocalMemberHref('./Entity.md', known), 'Entity.md');
    assert.equal(resolveLocalMemberHref('Player.md', known), 'Player.mdx');
  });

  it('接受 TypeDoc 的 mod.Symbol.md 并映射到本地文件', () => {
    assert.equal(resolveLocalMemberHref('server.Entity.md', known), 'Entity.md');
  });

  it('忽略跨目录链接', () => {
    assert.equal(resolveLocalMemberHref('../interfaces/Foo.md', known), undefined);
    assert.equal(resolveLocalMemberHref('common.EngineError.md', known), undefined);
  });
});

describe('parseLocalParents', () => {
  it('从「## 继承」提取本地父页', () => {
    const known = new Set(['Entity.md', 'Player.md']);
    assert.deepEqual(parseLocalParents(FIXTURE.Player, known), ['Entity.md']);
  });

  it('忽略跨模块链接与非 md 链接', () => {
    const content = `# X

## 继承

- [\`EngineError\`](../common/classes/EngineError.md)
- [\`Entity\`](Entity.md)
- [\`外部\`](https://example.com)

## 其它
`;
    const known = new Set(['Entity.md', 'Player.md']);
    assert.deepEqual(parseLocalParents(content, known), ['Entity.md']);
  });

  it('识别英文 ## Extends（当前 TypeDoc 输出）', () => {
    const content = `# Player

## Extends

- [\`Entity\`](server.Entity.md)

## Properties
`;
    const known = new Set(['Entity.md', 'Player.md']);
    assert.deepEqual(parseLocalParents(content, known), ['Entity.md']);
  });
});

describe('buildInheritanceGraph', () => {
  it('建立父子关系并分配 depth', () => {
    const graph = buildInheritanceGraph([
      { fileName: 'Entity.md', content: FIXTURE.Entity },
      { fileName: 'Player.md', content: FIXTURE.Player },
    ]);
    assert.equal(graph.nodes.get('Player.md')?.parent, 'Entity.md');
    assert.equal(graph.nodes.get('Player.md')?.depth, 1);
    assert.equal(graph.nodes.get('Entity.md')?.depth, 0);
    assert.deepEqual(graph.nodes.get('Entity.md')?.children, ['Player.md']);
    assert.deepEqual(graph.roots, ['Entity.md']);
  });

  it('多父时取字母序第一个本地父', () => {
    const graph = buildInheritanceGraph([
      { fileName: 'ChildMulti.md', content: FIXTURE.ChildMulti },
      { fileName: 'AlphaParent.md', content: FIXTURE.AlphaParent },
      { fileName: 'BetaParent.md', content: FIXTURE.BetaParent },
    ]);
    assert.equal(graph.nodes.get('ChildMulti.md')?.parent, 'AlphaParent.md');
  });

  it('打断继承环', () => {
    const graph = buildInheritanceGraph([
      { fileName: 'CycleA.md', content: FIXTURE.CycleA },
      { fileName: 'CycleB.md', content: FIXTURE.CycleB },
      { fileName: 'CycleC.md', content: FIXTURE.CycleC },
    ]);
    const edges = [...graph.nodes.values()].filter((n) => n.parent).length;
    assert.ok(edges < 3, 'cycle must drop at least one edge');
    // 所有节点仍在图中且 depth 有限
    for (const node of graph.nodes.values()) {
      assert.ok(Number.isFinite(node.depth));
    }
    assert.ok(graph.roots.length >= 1);
  });

  it('可展开节点排在同级字母序之前', () => {
    const graph = buildInheritanceGraph([
      { fileName: 'Zebra.md', content: '# Zebra\n' },
      { fileName: 'Alpha.md', content: '# Alpha\n' },
      { fileName: 'Child.md', content: '# Child\n\n## 继承\n\n- [`Zebra`](Zebra.md)\n' },
    ]);
    // Zebra 有子，应排在 Alpha 前
    assert.deepEqual(graph.roots, ['Zebra.md', 'Alpha.md']);
  });
});

describe('renderInheritanceKindMeta / writeModuleMeta', () => {
  it('父类渲染为可折叠 custom-link，叶子为 file', () => {
    const graph = buildInheritanceGraph([
      { fileName: 'Entity.md', content: FIXTURE.Entity },
      { fileName: 'Player.md', content: FIXTURE.Player },
      { fileName: 'Standalone.md', content: '# Standalone\n' },
    ]);
    const meta = renderInheritanceKindMeta('server', 'classes', graph);
    const entity = meta.find(
      (item) => typeof item === 'object' && item.type === 'custom-link' && item.label === 'Entity',
    );
    assert.ok(entity && typeof entity === 'object' && entity.type === 'custom-link');
    assert.equal(entity.link, '/server/classes/Entity');
    assert.equal(entity.collapsible, true);
    assert.ok(Array.isArray(entity.items));
    assert.ok(
      entity.items!.some(
        (c) => typeof c === 'object' && c.type === 'custom-link' && c.label === 'Player',
      ),
    );
    assert.ok(
      meta.some((item) => typeof item === 'object' && item.type === 'file' && item.name === 'Standalone'),
    );
  });

  it('writeModuleMeta 强制覆盖模块与 kind _meta.json', () => {
    const root = mkdtempSync(join(tmpdir(), 'sapi-meta-'));
    const classesDir = join(root, 'server', 'classes');
    mkdirSync(classesDir, { recursive: true });
    writeFileSync(join(classesDir, 'Entity.md'), FIXTURE.Entity, 'utf-8');
    writeFileSync(join(classesDir, 'Player.md'), FIXTURE.Player, 'utf-8');
    writeFileSync(join(root, 'server', 'index.md'), '# server\n', 'utf-8');

    const refs: MemberRef[] = [
      {
        module: 'server',
        kind: 'modules',
        symbolName: 'index',
        fileName: 'index.md',
        absPath: join(root, 'server', 'index.md'),
      },
      {
        module: 'server',
        kind: 'classes',
        symbolName: 'Entity',
        fileName: 'Entity.md',
        absPath: join(classesDir, 'Entity.md'),
      },
      {
        module: 'server',
        kind: 'classes',
        symbolName: 'Player',
        fileName: 'Player.md',
        absPath: join(classesDir, 'Player.md'),
      },
    ];

    writeFileSync(join(root, 'server', '_meta.json'), '[]\n', 'utf-8');
    writeModuleMeta('server', refs, { docsDir: root });

    const moduleMeta = JSON.parse(readFileSync(join(root, 'server', '_meta.json'), 'utf-8')) as unknown[];
    assert.deepEqual(moduleMeta[0], { type: 'file', name: 'index', label: '概览' });
    assert.ok(
      moduleMeta.some(
        (item) =>
          typeof item === 'object' &&
          item !== null &&
          (item as { type?: string; name?: string }).type === 'dir' &&
          (item as { name?: string }).name === 'classes',
      ),
    );

    const classesMeta = JSON.parse(
      readFileSync(join(classesDir, '_meta.json'), 'utf-8'),
    ) as Array<{ type: string; label?: string; name?: string }>;
    assert.ok(classesMeta.some((item) => item.type === 'custom-link' && item.label === 'Entity'));
  });

  it('renderMetaForModule 对非树 kind 输出扁平 file 列表', () => {
    const refs: MemberRef[] = [
      {
        module: 'server',
        kind: 'enums',
        symbolName: 'WeatherType',
        fileName: 'WeatherType.md',
        absPath: '/tmp/WeatherType.md',
      },
      {
        module: 'server',
        kind: 'enums',
        symbolName: 'GameMode',
        fileName: 'GameMode.md',
        absPath: '/tmp/GameMode.md',
      },
    ];
    const plan = renderMetaForModule('server', refs, () => '');
    assert.deepEqual(plan.kindMetas.enums, [
      { type: 'file', name: 'GameMode' },
      { type: 'file', name: 'WeatherType' },
    ]);
  });
});
