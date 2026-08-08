import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getBaseUrl } from './client.js';
import type {
  ApiIndex,
  ApiSymbol,
  ExampleRef,
  ExamplesIndex,
  VersionsIndex,
} from './types.js';

const CACHE_TTL_MS = 10 * 60 * 1000;

type CacheEntry<T> = { fetchedAt: number; data: T };

let apiCache: CacheEntry<ApiIndex> | null = null;
let examplesCache: CacheEntry<ExamplesIndex> | null = null;
let versionsCache: CacheEntry<VersionsIndex> | null = null;

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { Accept: 'application/json, text/plain, */*' },
    redirect: 'follow',
  });
  if (!res.ok) {
    throw new Error(`请求失败 HTTP ${res.status}：${url}`);
  }
  return res.text();
}

function readLocalJson<T>(fileName: string): T | undefined {
  const dir = process.env.SAPI_MCP_INDEX_DIR?.trim();
  if (!dir) return undefined;
  const path = join(dir, fileName);
  if (!existsSync(path)) return undefined;
  return JSON.parse(readFileSync(path, 'utf-8')) as T;
}

async function loadJson<T>(fileName: string, cache: CacheEntry<T> | null): Promise<{
  data: T;
  cache: CacheEntry<T>;
}> {
  const now = Date.now();
  if (cache && now - cache.fetchedAt < CACHE_TTL_MS) {
    return { data: cache.data, cache };
  }

  const local = readLocalJson<T>(fileName);
  if (local) {
    const next = { fetchedAt: now, data: local };
    return { data: local, cache: next };
  }

  const url = `${getBaseUrl()}/mcp/${fileName}`;
  const text = await fetchText(url);
  const data = JSON.parse(text) as T;
  const next = { fetchedAt: now, data };
  return { data, cache: next };
}

export async function getApiIndex(force = false): Promise<ApiIndex> {
  if (force) apiCache = null;
  const { data, cache } = await loadJson<ApiIndex>('api-index.json', apiCache);
  apiCache = cache;
  return data;
}

export async function getExamplesIndex(force = false): Promise<ExamplesIndex> {
  if (force) examplesCache = null;
  const { data, cache } = await loadJson<ExamplesIndex>('examples-index.json', examplesCache);
  examplesCache = cache;
  return data;
}

export async function getVersionsIndex(force = false): Promise<VersionsIndex> {
  if (force) versionsCache = null;
  const { data, cache } = await loadJson<VersionsIndex>('versions.json', versionsCache);
  versionsCache = cache;
  return data;
}

function norm(s: string): string {
  return s.trim().toLowerCase();
}

/** 按 path / module+name / name 查找符号（精确名优先） */
export function findSymbols(
  index: ApiIndex,
  query: { name?: string; module?: string; path?: string },
): ApiSymbol[] {
  if (query.path) {
    let p = query.path.trim();
    if (p.startsWith('http')) {
      try {
        p = new URL(p).pathname;
      } catch {
        /* keep */
      }
    }
    if (!p.startsWith('/')) p = `/${p}`;
    p = p.replace(/\.md$/i, '').replace(/\/+$/, '');
    return index.symbols.filter((s) => s.path.toLowerCase() === p.toLowerCase());
  }

  const name = query.name ? norm(query.name) : '';
  const mod = query.module ? norm(query.module) : '';
  if (!name && !mod) return [];

  const scored: Array<{ symbol: ApiSymbol; score: number }> = [];
  for (const s of index.symbols) {
    if (mod && s.module.toLowerCase() !== mod && !s.module.toLowerCase().includes(mod)) {
      continue;
    }
    if (!name) {
      scored.push({ symbol: s, score: 1 });
      continue;
    }
    const sn = s.name.toLowerCase();
    let score = 0;
    if (sn === name) score = 100;
    else if (sn.startsWith(name)) score = 60;
    else if (sn.includes(name)) score = 20;
    else continue;
    // 模块精确再加分
    if (mod && s.module.toLowerCase() === mod) score += 10;
    scored.push({ symbol: s, score });
  }

  scored.sort(
    (a, b) =>
      b.score - a.score ||
      a.symbol.module.localeCompare(b.symbol.module) ||
      a.symbol.name.localeCompare(b.symbol.name),
  );
  return scored.map((x) => x.symbol);
}

export function formatSymbol(
  symbol: ApiSymbol,
  options?: { member?: string; maxMembers?: number },
): string {
  const lines: string[] = [];
  const kindLabel: Record<string, string> = {
    classes: 'Class',
    interfaces: 'Interface',
    enums: 'Enum',
    functions: 'Function',
    variables: 'Variable',
    types: 'Type',
    modules: 'Module',
  };
  lines.push(`# ${kindLabel[symbol.kind] ?? symbol.kind}: ${symbol.name}`);
  lines.push(`模块: ${symbol.module}`);
  lines.push(`路径: ${symbol.path}`);
  lines.push(`导入: import { ${symbol.name} } from '@minecraft/${symbol.module}';`);
  if (symbol.extends?.length) lines.push(`继承: ${symbol.extends.join(', ')}`);
  if (symbol.status.length) lines.push(`状态: ${symbol.status.join(', ')}`);
  if (symbol.tags.length) lines.push(`标签: ${symbol.tags.join(', ')}`);
  if (symbol.experimental) lines.push('实验性: 是（相对稳定轨为新增/仅预览）');
  if (symbol.summary) lines.push(`摘要: ${symbol.summary}`);

  let members = symbol.members;
  if (options?.member) {
    const m = norm(options.member);
    members = members.filter(
      (x) => x.name.toLowerCase() === m || x.name.toLowerCase().includes(m),
    );
    if (members.length === 0) {
      lines.push(`\n未找到成员「${options.member}」。可用成员名：${symbol.members.map((x) => x.name).slice(0, 40).join(', ')}`);
      return lines.join('\n');
    }
  }

  const max = options?.member ? members.length : Math.min(options?.maxMembers ?? 80, members.length);
  const slice = members.slice(0, max);
  lines.push(`\n成员 ${slice.length}/${members.length}：`);
  for (const mem of slice) {
    const flags = [
      ...mem.privileges,
      ...mem.status,
      mem.experimental ? 'experimental' : '',
    ].filter(Boolean);
    const flagText = flags.length ? ` [${flags.join(', ')}]` : '';
    lines.push(`- (${mem.kind}) ${mem.signature}${flagText}`);
  }
  if (slice.length < members.length) {
    lines.push(`… 其余 ${members.length - slice.length} 个成员未列出；用 member 参数筛选。`);
  }
  lines.push(`\n完整说明可用 get_page，路径: ${symbol.path}`);
  return lines.join('\n');
}

export function searchByTag(
  index: ApiIndex,
  tag: string,
  options?: { module?: string; limit?: number },
): ApiSymbol[] {
  const t = norm(tag);
  const mod = options?.module ? norm(options.module) : '';
  const limit = Math.min(Math.max(options?.limit ?? 40, 1), 200);
  const hits = index.symbols.filter((s) => {
    if (mod && !s.module.toLowerCase().includes(mod)) return false;
    return s.tags.some((x) => x.toLowerCase() === t || x.toLowerCase().includes(t));
  });
  hits.sort(
    (a, b) =>
      a.module.localeCompare(b.module) ||
      a.kind.localeCompare(b.kind) ||
      a.name.localeCompare(b.name),
  );
  return hits.slice(0, limit);
}

export function findExamples(
  index: ExamplesIndex,
  query: { symbol?: string; module?: string; keyword?: string; limit?: number },
): ExampleRef[] {
  const limit = Math.min(Math.max(query.limit ?? 5, 1), 20);
  const seen = new Set<number>();
  const out: ExampleRef[] = [];

  const pushIdx = (i: number) => {
    if (seen.has(i) || i < 0 || i >= index.examples.length) return;
    seen.add(i);
    out.push(index.examples[i]!);
  };

  if (query.symbol) {
    const sym = query.symbol.trim();
    const mod = query.module?.trim();
    const keys = [
      mod ? `${mod}:${sym}` : '',
      sym.includes(':') ? sym : '',
      // 尝试常见模块前缀
      ...(!mod && !sym.includes(':')
        ? ['server', 'server-ui', 'math', 'vanilla-data'].map((m) => `${m}:${sym}`)
        : []),
    ].filter(Boolean);

    for (const key of keys) {
      for (const i of index.bySymbol[key] ?? []) pushIdx(i);
      // 前缀匹配
      for (const [k, list] of Object.entries(index.bySymbol)) {
        if (k === key || k.startsWith(`${key}.`) || k.endsWith(`:${sym}`)) {
          for (const i of list) pushIdx(i);
        }
      }
      if (out.length >= limit) break;
    }
  }

  if (out.length < limit && query.keyword) {
    const kw = norm(query.keyword);
    for (let i = 0; i < index.examples.length && out.length < limit; i++) {
      const ex = index.examples[i]!;
      if (
        ex.fileName.toLowerCase().includes(kw) ||
        ex.content.toLowerCase().includes(kw) ||
        ex.symbols.some((s) => s.toLowerCase().includes(kw))
      ) {
        pushIdx(i);
      }
    }
  }

  if (out.length === 0 && !query.symbol && !query.keyword) {
    return index.examples.slice(0, limit);
  }

  return out.slice(0, limit);
}

export function formatExamples(examples: ExampleRef[]): string {
  if (examples.length === 0) return '未找到示例。可换符号名或关键词。';
  return examples
    .map(
      (ex, i) =>
        `### 示例 ${i + 1}: ${ex.fileName}\n关联: ${ex.symbols.join(', ') || '—'}\n\n${ex.content}`,
    )
    .join('\n\n');
}
