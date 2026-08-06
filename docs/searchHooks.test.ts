import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { DefaultMatchResult } from '@rspress/core/theme';
import {
  buildBoostMetaByRoute,
  clearBoostMetaCache,
  extractBoostMeta,
  loadBoostMetaByRoute,
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

  it('normalizeRoutePath 去 hash、尾斜杠并小写', () => {
    assert.equal(normalizeRoutePath('/server/classes/Entity#ctor'), '/server/classes/entity');
    assert.equal(normalizeRoutePath('server/classes/Entity/'), '/server/classes/entity');
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
      ['/server/entity', { domainTags: ['entity'], searchBoost: 1.2 }],
    ]);
    assert.deepEqual(extractBoostMeta({ link: '/server/Entity#x' }, map), {
      domainTags: ['entity'],
      searchBoost: 1.2,
    });
  });

  it('empty meta 不共享可变 domainTags', () => {
    const a = extractBoostMeta({ link: '/x' });
    const b = extractBoostMeta({ link: '/y' });
    a.domainTags.push('mutated');
    assert.deepEqual(b.domainTags, []);
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

  it('裸 link + metaByRoute 重排（生产路径：命中无 frontmatter）', () => {
    const group = {
      group: 'local',
      renderType: 'default',
      result: [
        {
          type: 'title',
          title: 'Player',
          header: 'Player',
          link: '/server/Player#overview',
          query: 'entity',
          highlightInfoList: [],
        },
        {
          type: 'title',
          title: 'Entity',
          header: 'Entity',
          link: '/server/Entity',
          query: 'entity',
          highlightInfoList: [],
        },
        {
          type: 'title',
          title: 'Block',
          header: 'Block',
          link: '/server/Block/',
          query: 'entity',
          highlightInfoList: [],
        },
      ],
    } as DefaultMatchResult;

    const metaByRoute = buildBoostMetaByRoute([
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

    reorderDefaultSearchResults('entity', [group], metaByRoute);
    assert.deepEqual(
      group.result.map((r) => r.link),
      ['/server/Entity', '/server/Player#overview', '/server/Block/'],
    );
  });
});

describe('loadBoostMetaByRoute cache', () => {
  it('import 失败不永久缓存空表，可重试', async () => {
    clearBoostMetaCache();
    const first = await loadBoostMetaByRoute();
    assert.equal(first.size, 0);
    // 失败路径未写入缓存：再次调用得到独立空 Map
    const second = await loadBoostMetaByRoute();
    assert.equal(second.size, 0);
    assert.notEqual(first, second);
    clearBoostMetaCache();
    const third = await loadBoostMetaByRoute();
    assert.equal(third.size, 0);
    assert.notEqual(second, third);
  });
});
