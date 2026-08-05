import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { DefaultMatchResult } from '@rspress/core/theme';
import {
  buildBoostMetaByRoute,
  extractBoostMeta,
  normalizeRoutePath,
  parseDomainTags,
  parseSearchBoost,
  rankSearchHits,
  reorderDefaultSearchResults,
  scoreSearchHit,
  tokenizeQuery,
  type SearchBoostMeta,
} from './searchHooks.ts';

describe('tokenizeQuery / parse helpers', () => {
  it('小写并按非字母数字切分', () => {
    assert.deepEqual(tokenizeQuery('Entity Event'), ['entity', 'event']);
    assert.deepEqual(tokenizeQuery('  player-block  '), ['player', 'block']);
    assert.deepEqual(tokenizeQuery('Foo_Bar'), ['foo', 'bar']);
  });

  it('parseDomainTags / parseSearchBoost 容错', () => {
    assert.deepEqual(parseDomainTags(['entity', '  event ', 1, '']), ['entity', 'event']);
    assert.equal(parseSearchBoost(1.2), 1.2);
    assert.equal(parseSearchBoost('1.1'), 1.1);
    assert.equal(parseSearchBoost(0), 1);
    assert.equal(parseSearchBoost(undefined), 1);
  });

  it('normalizeRoutePath 去 hash 与尾斜杠', () => {
    assert.equal(normalizeRoutePath('/server/classes/Entity#ctor'), '/server/classes/Entity');
    assert.equal(normalizeRoutePath('server/classes/Entity/'), '/server/classes/Entity');
    assert.equal(normalizeRoutePath('/'), '/');
  });
});

describe('extractBoostMeta / scoreSearchHit', () => {
  it('优先读命中项 frontmatter', () => {
    assert.deepEqual(
      extractBoostMeta({
        link: '/a',
        frontmatter: { domainTags: ['entity'], searchBoost: 1.2 },
      }),
      { domainTags: ['entity'], searchBoost: 1.2 },
    );
  });

  it('无 FM 时按 route 查表', () => {
    const map = new Map<string, SearchBoostMeta>([
      ['/server/Entity', { domainTags: ['entity'], searchBoost: 1.2 }],
    ]);
    assert.deepEqual(extractBoostMeta({ link: '/server/Entity#x' }, map), {
      domainTags: ['entity'],
      searchBoost: 1.2,
    });
  });

  it('tag 相交 ×2，再乘 searchBoost', () => {
    assert.equal(
      scoreSearchHit({ domainTags: ['entity'], searchBoost: 1.2 }, ['entity']),
      2.4,
    );
    assert.equal(
      scoreSearchHit({ domainTags: ['entity'], searchBoost: 1.2 }, ['player']),
      1.2,
    );
    assert.equal(
      scoreSearchHit({ domainTags: ['Entity'], searchBoost: 1 }, ['entity']),
      2,
    );
  });
});

describe('rankSearchHits', () => {
  it('domainTags 命中优先，其次 searchBoost，并列保序', () => {
    const hits = [
      { link: '/a', title: 'A', frontmatter: { domainTags: ['player'], searchBoost: 1.5 } },
      { link: '/b', title: 'B', frontmatter: { domainTags: ['entity'], searchBoost: 1 } },
      { link: '/c', title: 'C', frontmatter: { domainTags: ['entity'], searchBoost: 1.2 } },
      { link: '/d', title: 'D', frontmatter: { domainTags: ['block'], searchBoost: 2 } },
    ];
    const ranked = rankSearchHits(hits, 'entity');
    assert.deepEqual(
      ranked.map((h) => h.link),
      // c: tag×2×1.2=2.4, b: tag×2×1=2, d: 1×2=2, a: 1×1.5=1.5；b/d 同为 2 时保原序 b 先于 d
      ['/c', '/b', '/d', '/a'],
    );
  });

  it('无 meta 时保持原序（稳定）', () => {
    const hits = [{ link: '/1' }, { link: '/2' }, { link: '/3' }];
    assert.deepEqual(
      rankSearchHits(hits, 'entity').map((h) => h.link),
      ['/1', '/2', '/3'],
    );
  });

  it('可通过 metaByRoute 重排（模拟 DefaultMatchResultItem 无 FM）', () => {
    const hits = [
      { link: '/server/Player' },
      { link: '/server/Entity' },
      { link: '/server/Block' },
    ];
    const meta = buildBoostMetaByRoute([
      {
        routePath: '/server/Player',
        frontmatter: { domainTags: ['player'], searchBoost: 1.1 },
      },
      {
        routePath: '/server/Entity',
        frontmatter: { domainTags: ['entity'], searchBoost: 1.2 },
      },
      {
        routePath: '/server/Block',
        frontmatter: { domainTags: ['block'], searchBoost: 1 },
      },
    ]);
    const ranked = rankSearchHits(hits, 'entity', meta);
    assert.deepEqual(
      ranked.map((h) => h.link),
      ['/server/Entity', '/server/Player', '/server/Block'],
    );
  });
});

describe('reorderDefaultSearchResults', () => {
  it('原地重排 Default 组 result', () => {
    const group = {
      group: 'local',
      renderType: 'default',
      result: [
        {
          type: 'title',
          title: 'Player',
          header: 'Player',
          link: '/Player',
          query: 'entity',
          highlightInfoList: [],
        },
        {
          type: 'title',
          title: 'Entity',
          header: 'Entity',
          link: '/Entity',
          query: 'entity',
          highlightInfoList: [],
        },
      ],
    } as DefaultMatchResult;
    // 挂上测试用 FM（运行时真实命中无此字段，靠 metaByRoute）
    Object.assign(group.result[0]!, {
      frontmatter: { domainTags: ['player'], searchBoost: 1 },
    });
    Object.assign(group.result[1]!, {
      frontmatter: { domainTags: ['entity'], searchBoost: 1 },
    });

    reorderDefaultSearchResults('entity', [group]);
    assert.equal(group.result[0]?.link, '/Entity');
    assert.equal(group.result[1]?.link, '/Player');
  });
});
