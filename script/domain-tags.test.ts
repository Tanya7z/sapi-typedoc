import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  DOMAIN_TAG_LEGEND,
  DOMAIN_TAG_RULES,
  boostForInheritanceDepth,
  inferDomainTags,
  SYMBOL_TAG_EXCLUDES,
} from './domain-tags.js';

describe('inferDomainTags', () => {
  it('从 CamelCase 推断 event + entity', () => {
    assert.deepEqual(inferDomainTags('EntityDieAfterEvent'), ['event', 'entity']);
  });

  it('Player 命中 player', () => {
    assert.deepEqual(inferDomainTags('Player'), ['player']);
  });

  it('无关符号返回空数组', () => {
    assert.deepEqual(inferDomainTags('SomethingUnrelated'), []);
  });

  it('排除表中的符号返回空数组', () => {
    const symbol = 'ExcludedTestSymbol';
    SYMBOL_TAG_EXCLUDES.add(symbol);
    try {
      assert.deepEqual(inferDomainTags(symbol), []);
    } finally {
      SYMBOL_TAG_EXCLUDES.delete(symbol);
    }
  });

  it('图例与规则 tag 集合一致', () => {
    const legendTags = new Set(DOMAIN_TAG_LEGEND.map((x) => x.tag));
    const ruleTags = new Set(DOMAIN_TAG_RULES.map((x) => x.tag));
    for (const tag of legendTags) {
      assert.ok(typeof tag === 'string' && tag.length > 0);
      assert.ok(ruleTags.has(tag), `legend tag "${tag}" missing from DOMAIN_TAG_RULES`);
    }
    for (const tag of ruleTags) {
      assert.ok(legendTags.has(tag), `rule tag "${tag}" missing from DOMAIN_TAG_LEGEND`);
    }
  });

  it('tick 图例不含 System', () => {
    const tick = DOMAIN_TAG_LEGEND.find((x) => x.tag === 'tick');
    assert.ok(tick);
    assert.equal(tick!.meaning.includes('System'), false);
    assert.ok(tick!.meaning.includes('Tick'));
  });
});

describe('boostForInheritanceDepth', () => {
  it('覆盖深度 0/1/2/3/-1', () => {
    assert.equal(boostForInheritanceDepth(0), 1.2);
    assert.equal(boostForInheritanceDepth(1), 1.1);
    assert.equal(boostForInheritanceDepth(2), 1.0);
    assert.equal(boostForInheritanceDepth(3), 0.95);
    assert.equal(boostForInheritanceDepth(-1), 1.2);
  });
});
