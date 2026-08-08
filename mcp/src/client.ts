import type { DocEntry } from './types.js';

const DEFAULT_BASE = 'https://sapi.dogelake.cn';
const CACHE_TTL_MS = 10 * 60 * 1000;

type IndexCache = {
  fetchedAt: number;
  raw: string;
  entries: DocEntry[];
  modules: string[];
};

let cache: IndexCache | null = null;

export function getBaseUrl(): string {
  const fromEnv = process.env.SAPI_DOCS_BASE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, '');
  return DEFAULT_BASE;
}

function stripBadgeNoise(text: string): string {
  return text
    .replace(/<Badge[^>]*>.*?<\/Badge>/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** 解析 llms.txt 为条目列表 */
export function parseLlmsIndex(raw: string): { entries: DocEntry[]; modules: string[] } {
  const entries: DocEntry[] = [];
  const modules: string[] = [];
  let currentModule = 'root';

  for (const line of raw.split(/\r?\n/)) {
    const heading = /^##\s+(.+)\s*$/.exec(line);
    if (heading) {
      currentModule = heading[1]!.trim();
      if (currentModule && !modules.includes(currentModule)) {
        modules.push(currentModule);
      }
      continue;
    }

    const item = /^-\s+\[([^\]]+)\]\(([^)]+)\)\s*:\s*(.*)$/.exec(line);
    if (!item) continue;

    const title = item[1]!.trim();
    let path = item[2]!.trim();
    const summary = stripBadgeNoise(item[3] ?? '');

    // 统一成站点路径（去掉 .md，保留前导 /）
    path = path.replace(/^\.\//, '/');
    if (!path.startsWith('/')) path = `/${path}`;
    path = path.replace(/\.md$/i, '');
    if (path.endsWith('/index')) {
      path = path.slice(0, -'/index'.length) || '/';
    }

    entries.push({ module: currentModule, title, path, summary });
  }

  return { entries, modules };
}

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { Accept: 'text/plain, text/markdown, */*' },
    redirect: 'follow',
  });
  if (!res.ok) {
    throw new Error(`请求失败 HTTP ${res.status}：${url}`);
  }
  return res.text();
}

export async function getIndex(force = false): Promise<IndexCache> {
  const now = Date.now();
  if (!force && cache && now - cache.fetchedAt < CACHE_TTL_MS) {
    return cache;
  }

  const url = `${getBaseUrl()}/llms.txt`;
  const raw = await fetchText(url);
  const parsed = parseLlmsIndex(raw);
  cache = {
    fetchedAt: now,
    raw,
    entries: parsed.entries,
    modules: parsed.modules,
  };
  return cache;
}

/** 将用户传入的路径规范为可请求的 .md URL 路径 */
export function toMarkdownUrlPath(input: string): string {
  let p = input.trim();
  if (p.startsWith('http://') || p.startsWith('https://')) {
    const u = new URL(p);
    p = u.pathname;
  }
  if (!p.startsWith('/')) p = `/${p}`;
  p = p.replace(/\/+$/, '');
  if (p === '') p = '/index';
  if (p.endsWith('.html')) p = p.slice(0, -'.html'.length);
  if (p.endsWith('.md')) return p;
  // /server/ -> /server/index.md；/server/classes/Player -> .md
  if (p.endsWith('/index')) return `${p}.md`;
  if (p === '/index') return '/index.md';
  // 目录型路径（仅一层模块名）在索引里常对应 /mod/index
  return `${p}.md`;
}

export async function fetchPageMarkdown(pathOrUrl: string): Promise<{ path: string; markdown: string }> {
  const mdPath = toMarkdownUrlPath(pathOrUrl);
  const url = `${getBaseUrl()}${mdPath}`;
  try {
    const markdown = await fetchText(url);
    return { path: mdPath, markdown };
  } catch (err) {
    // 常见：模块根用 /server.md 失败时试 /server/index.md
    if (mdPath.endsWith('.md') && !mdPath.endsWith('/index.md')) {
      const alt = mdPath.replace(/\.md$/, '/index.md');
      const markdown = await fetchText(`${getBaseUrl()}${alt}`);
      return { path: alt, markdown };
    }
    throw err;
  }
}

export async function getLlmsSection(module?: string): Promise<string> {
  const index = await getIndex();
  if (!module) {
    // 返回头部 + 各模块标题行，避免整文件过大
    const lines = index.raw.split(/\r?\n/);
    const out: string[] = [];
    let count = 0;
    for (const line of lines) {
      if (line.startsWith('#') || line.startsWith('>')) {
        out.push(line);
        continue;
      }
      if (line.startsWith('## ')) {
        out.push(line);
        count += 1;
      }
    }
    out.push('', `（共 ${index.entries.length} 条索引；完整索引见 ${getBaseUrl()}/llms.txt）`);
    return out.join('\n');
  }

  const needle = module.trim().toLowerCase();
  const chunks: string[] = [];
  let capture = false;
  for (const line of index.raw.split(/\r?\n/)) {
    if (line.startsWith('## ')) {
      const name = line.slice(3).trim().toLowerCase();
      capture = name === needle || name.includes(needle);
      if (capture) chunks.push(line);
      continue;
    }
    if (capture) {
      if (line.startsWith('## ')) break;
      chunks.push(line);
    }
  }
  if (chunks.length === 0) {
    throw new Error(`未找到模块「${module}」。可用 list_modules 查看列表。`);
  }
  return chunks.join('\n');
}
