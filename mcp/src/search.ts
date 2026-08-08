import type { DocEntry, SearchHit } from './types.js';

function tokenize(q: string): string[] {
  return q
    .toLowerCase()
    .split(/[\s/._:-]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}

function scoreEntry(entry: DocEntry, tokens: string[], moduleFilter?: string): number {
  if (moduleFilter) {
    const m = moduleFilter.toLowerCase();
    if (
      !entry.module.toLowerCase().includes(m) &&
      !entry.path.toLowerCase().includes(`/${m}`)
    ) {
      return 0;
    }
  }

  const title = entry.title.toLowerCase();
  const path = entry.path.toLowerCase();
  const summary = entry.summary.toLowerCase();
  const moduleName = entry.module.toLowerCase();

  let score = 0;
  for (const token of tokens) {
    if (title === token) score += 50;
    else if (title.startsWith(token)) score += 30;
    else if (title.includes(token)) score += 20;

    if (path.endsWith(`/${token}`) || path.endsWith(`/${token}/index`)) score += 25;
    else if (path.includes(token)) score += 10;

    if (moduleName === token) score += 8;
    if (summary.includes(token)) score += 4;
  }
  return score;
}

export function searchEntries(
  entries: DocEntry[],
  query: string,
  options?: { module?: string; limit?: number },
): SearchHit[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const limit = Math.min(Math.max(options?.limit ?? 8, 1), 30);
  const hits: SearchHit[] = [];

  for (const entry of entries) {
    const score = scoreEntry(entry, tokens, options?.module);
    if (score > 0) hits.push({ ...entry, score });
  }

  hits.sort((a, b) => b.score - a.score || a.path.localeCompare(b.path));
  return hits.slice(0, limit);
}
