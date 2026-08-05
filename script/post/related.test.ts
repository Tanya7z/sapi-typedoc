import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  applyRelatedSection,
  memberDocHref,
  pickRelated,
  renderRelatedSection,
  stripRelatedSection,
  type MemberWithTags,
} from './related.js';

function ref(partial: Partial<MemberWithTags> & Pick<MemberWithTags, 'symbolName' | 'domainTags'>): MemberWithTags {
  const symbolName = partial.symbolName;
  const module = partial.module ?? 'server';
  const kind = partial.kind ?? 'classes';
  return {
    module,
    kind,
    symbolName,
    fileName: `${symbolName}.mdx`,
    absPath: partial.absPath ?? `/docs/${module}/${kind}/${symbolName}.mdx`,
    domainTags: partial.domainTags,
  };
}

describe('pickRelated', () => {
  it('共享 tag 越多分越高', () => {
    const current = ref({ symbolName: 'EntityDieAfterEvent', domainTags: ['event', 'entity'] });
    const all = [
      current,
      ref({ symbolName: 'Player', domainTags: ['player'] }),
      ref({ symbolName: 'Entity', domainTags: ['entity'] }),
      ref({ symbolName: 'EntitySpawnAfterEvent', domainTags: ['event', 'entity'] }),
    ];
    const related = pickRelated(current, all);
    assert.deepEqual(
      related.map((r) => r.symbolName),
      ['EntitySpawnAfterEvent', 'Entity'],
    );
  });

  it('共享 tag 相同时优先同模块', () => {
    const current = ref({ symbolName: 'Entity', domainTags: ['entity'], module: 'server' });
    const all = [
      current,
      ref({
        symbolName: 'AdminEntity',
        domainTags: ['entity'],
        module: 'server-admin',
        absPath: '/docs/server-admin/classes/AdminEntity.mdx',
      }),
      ref({ symbolName: 'EntityQuery', domainTags: ['entity'], module: 'server' }),
    ];
    const related = pickRelated(current, all);
    assert.equal(related[0]?.symbolName, 'EntityQuery');
    assert.equal(related[1]?.symbolName, 'AdminEntity');
  });

  it('遵守 limit 并排除自身', () => {
    const current = ref({ symbolName: 'A', domainTags: ['entity'] });
    const all = [
      current,
      ref({ symbolName: 'B', domainTags: ['entity'] }),
      ref({ symbolName: 'C', domainTags: ['entity'] }),
      ref({ symbolName: 'D', domainTags: ['entity'] }),
    ];
    const related = pickRelated(current, all, 2);
    assert.equal(related.length, 2);
    assert.ok(related.every((r) => r.symbolName !== 'A'));
    assert.ok(related.every((r) => r.absPath !== current.absPath));
  });

  it('无共享 tag 时返回空（含仅同模块）', () => {
    const current = ref({ symbolName: 'Player', domainTags: ['player'] });
    const all = [
      current,
      ref({ symbolName: 'World', domainTags: ['world'], module: 'server' }),
      ref({ symbolName: 'Untagged', domainTags: [], module: 'server' }),
    ];
    assert.deepEqual(pickRelated(current, all), []);
  });

  it('当前无 domainTags 时无法匹配共享', () => {
    const current = ref({ symbolName: 'Foo', domainTags: [] });
    const all = [current, ref({ symbolName: 'Entity', domainTags: ['entity'] })];
    assert.deepEqual(pickRelated(current, all), []);
  });
});

describe('related section helpers', () => {
  it('memberDocHref / renderRelatedSection 链接无扩展名', () => {
    const items = [ref({ symbolName: 'Entity', domainTags: ['entity'] })];
    assert.equal(memberDocHref(items[0]!), '/server/classes/Entity');
    assert.equal(
      renderRelatedSection(items),
      '\n## 同领域相关\n\n- [Entity](/server/classes/Entity)\n',
    );
  });

  it('stripRelatedSection / applyRelatedSection 幂等', () => {
    const body = ['# Class: Player', '', '玩家。', '', '## 属性', '', '说明。', ''].join('\n');
    const items = [ref({ symbolName: 'Entity', domainTags: ['entity'] })];
    const once = applyRelatedSection(body, items);
    assert.match(once, /## 同领域相关\n\n- \[Entity\]\(\/server\/classes\/Entity\)\n$/);
    const twice = applyRelatedSection(once, items);
    assert.equal(twice, once);
    assert.equal(stripRelatedSection(once).includes('同领域相关'), false);
  });
});
