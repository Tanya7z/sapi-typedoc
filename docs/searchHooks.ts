import type { DefaultMatchResult, OnSearch } from '@rspress/core/theme';

/**
 * 搜索重排评分（文档约定）：
 *   base = 1（FlexSearch 原序仅作稳定并列打破）
 *   tagBoost = domainTags 与 query token 精确相交（忽略大小写）? 2 : 1
 *   final = base * tagBoost * (searchBoost ?? 1)
 *   按 final 降序；并列时保持原相对顺序
 *
 * 默认命中项（DefaultMatchResultItem）不含 frontmatter。
 * 运行时通过 virtual-page-data 的 pages[].frontmatter 按 routePath 查 domainTags / searchBoost。
 */

export type SearchBoostMeta = {
  domainTags: string[];
  searchBoost: number;
};

type PageBoostSource = {
  routePath?: string;
  frontmatter?: Record<string, unknown>;
  domainTags?: unknown;
  searchBoost?: unknown;
};

type RankableHit = {
  link?: string;
  routePath?: string;
  frontmatter?: Record<string, unknown>;
  domainTags?: unknown;
  searchBoost?: unknown;
};

const EMPTY_META: SearchBoostMeta = { domainTags: [], searchBoost: 1 };

let cachedBoostMetaByRoute: Map<string, SearchBoostMeta> | undefined;

/** 将查询规范为小写 token（按非字母数字字符切分） */
export function tokenizeQuery(query: string): string[] {
  return query
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);
}

/** 规范化路由：去 hash/query、统一前导斜杠、去掉末尾斜杠（根除外） */
export function normalizeRoutePath(path: string): string {
  const bare = path.split(/[?#]/, 1)[0] ?? '';
  if (!bare || bare === '/') return '/';
  const withSlash = bare.startsWith('/') ? bare : `/${bare}`;
  return withSlash.replace(/\/+$/, '') || '/';
}

export function parseDomainTags(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  const tags: string[] = [];
  for (const item of value) {
    if (typeof item !== 'string') continue;
    const trimmed = item.trim();
    if (trimmed) tags.push(trimmed);
  }
  return tags;
}

export function parseSearchBoost(value: unknown): number {
  if (typeof value === 'number' && Number.isFinite(value) && value > 0) {
    return value;
  }
  if (typeof value === 'string' && value.trim()) {
    const n = Number(value);
    if (Number.isFinite(n) && n > 0) return n;
  }
  return 1;
}

function metaFromFrontmatter(fm: Record<string, unknown> | undefined): SearchBoostMeta {
  if (!fm) return { ...EMPTY_META };
  return {
    domainTags: parseDomainTags(fm.domainTags),
    searchBoost: parseSearchBoost(fm.searchBoost),
  };
}

/** 从命中项自身或 route→meta 表解析 boost 元数据 */
export function extractBoostMeta(
  hit: RankableHit,
  metaByRoute?: ReadonlyMap<string, SearchBoostMeta>,
): SearchBoostMeta {
  if (hit.frontmatter && typeof hit.frontmatter === 'object') {
    const fromFm = metaFromFrontmatter(hit.frontmatter);
    if (fromFm.domainTags.length > 0 || fromFm.searchBoost !== 1) {
      return fromFm;
    }
  }

  if (hit.domainTags !== undefined || hit.searchBoost !== undefined) {
    return {
      domainTags: parseDomainTags(hit.domainTags),
      searchBoost: parseSearchBoost(hit.searchBoost),
    };
  }

  if (metaByRoute) {
    const route = normalizeRoutePath(hit.link ?? hit.routePath ?? '');
    const lookedUp = metaByRoute.get(route);
    if (lookedUp) return lookedUp;
  }

  return { ...EMPTY_META };
}

/** 单条命中最终分 */
export function scoreSearchHit(meta: SearchBoostMeta, queryTokens: string[]): number {
  const tagSet = new Set(meta.domainTags.map((t) => t.toLowerCase()));
  const tagBoost = queryTokens.some((token) => tagSet.has(token)) ? 2 : 1;
  return 1 * tagBoost * meta.searchBoost;
}

/**
 * 按 domainTags 相交与 searchBoost 重排命中列表（稳定排序）。
 * 纯函数，可供单测；不依赖 DOM / virtual modules。
 */
export function rankSearchHits<T extends RankableHit>(
  hits: readonly T[],
  query: string,
  metaByRoute?: ReadonlyMap<string, SearchBoostMeta>,
): T[] {
  const queryTokens = tokenizeQuery(query);
  const decorated = hits.map((hit, index) => ({
    hit,
    index,
    score: scoreSearchHit(extractBoostMeta(hit, metaByRoute), queryTokens),
  }));
  decorated.sort((a, b) => b.score - a.score || a.index - b.index);
  return decorated.map((d) => d.hit);
}

/** 原地重排默认搜索各组的 result 列表 */
export function reorderDefaultSearchResults(
  query: string,
  defaultSearchResult: DefaultMatchResult[],
  metaByRoute?: ReadonlyMap<string, SearchBoostMeta>,
): void {
  for (const group of defaultSearchResult) {
    if (!Array.isArray(group.result) || group.result.length === 0) continue;
    const ranked = rankSearchHits(group.result, query, metaByRoute);
    group.result.splice(0, group.result.length, ...ranked);
  }
}

/** 从 runtime pageData 构建 routePath → boost 元数据表 */
export function buildBoostMetaByRoute(
  pages: readonly PageBoostSource[],
): Map<string, SearchBoostMeta> {
  const map = new Map<string, SearchBoostMeta>();
  for (const page of pages) {
    if (!page.routePath) continue;
    map.set(normalizeRoutePath(page.routePath), {
      domainTags: parseDomainTags(page.frontmatter?.domainTags ?? page.domainTags),
      searchBoost: parseSearchBoost(page.frontmatter?.searchBoost ?? page.searchBoost),
    });
  }
  return map;
}

/** 加载（并缓存）页面 frontmatter 中的 domainTags / searchBoost */
export async function loadBoostMetaByRoute(): Promise<ReadonlyMap<string, SearchBoostMeta>> {
  if (cachedBoostMetaByRoute) return cachedBoostMetaByRoute;
  try {
    const mod = await import('virtual-page-data');
    const pages = mod.pageData?.pages ?? [];
    cachedBoostMetaByRoute = buildBoostMetaByRoute(pages);
  } catch {
    // Node 单测或无 virtual module 时跳过；重排退化为保持原序
    cachedBoostMetaByRoute = new Map();
  }
  return cachedBoostMetaByRoute;
}

/** 测试用：清空页面 meta 缓存 */
export function clearBoostMetaCache(): void {
  cachedBoostMetaByRoute = undefined;
}

/**
 * 默认全文搜索完成后：按 domainTags / searchBoost 原地重排。
 * 返回 [] —— OnSearch 返回值是「额外」自定义源，不是替换默认结果。
 */
export const onSearch: OnSearch = async (query, defaultSearchResult) => {
  const metaByRoute = await loadBoostMetaByRoute();
  reorderDefaultSearchResults(query, defaultSearchResult, metaByRoute);
  return [];
};
