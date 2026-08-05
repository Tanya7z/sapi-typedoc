import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  DOMAIN_TAG_LEGEND,
  DOMAIN_TAG_RULES,
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

  it('排除表抑制误报', () => {
    assert.ok(Array.isArray(inferDomainTags('SomethingUnrelated')));
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
});
