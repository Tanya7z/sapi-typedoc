import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import type { MemberRef } from './restructure-modules.js';

/** module.symbol → 成员引用 */
export function buildMemberLinkCatalog(refs: MemberRef[]): Map<string, MemberRef> {
  const map = new Map<string, MemberRef>();
  for (const ref of refs) {
    if (ref.kind === 'modules' || ref.symbolName === 'index') continue;
    map.set(`${ref.module}.${ref.symbolName}`, ref);
  }
  return map;
}

function memberRoute(ref: MemberRef): string {
  return `/${ref.module}/${ref.kind}/${ref.symbolName}`;
}

/**
 * 将 TypeDoc kind 路由残留链接（server.Player.md、../enums/server.X.md）
 * 改写为重组后的绝对路由。无法解析则原样返回。
 */
export function rewriteTypedocHref(
  href: string,
  current: MemberRef,
  catalog: Map<string, MemberRef>,
): string {
  const trimmed = href.trim();
  if (!trimmed) return href;
  if (
    trimmed.startsWith('#') ||
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('mailto:') ||
    trimmed.startsWith('//')
  ) {
    return href;
  }

  const hashIdx = trimmed.indexOf('#');
  const pathPart = hashIdx >= 0 ? trimmed.slice(0, hashIdx) : trimmed;
  const hash = hashIdx >= 0 ? trimmed.slice(hashIdx) : '';
  if (!pathPart) return href;

  let bare = pathPart.replace(/\\/g, '/').replace(/\.(mdx|md|html)$/i, '');
  if (bare.startsWith('./')) bare = bare.slice(2);

  const segments = bare.split('/').filter((s) => s && s !== '.');
  const file = segments[segments.length - 1] ?? '';
  if (!file) return href;

  let moduleName: string | undefined;
  let symbol: string | undefined;

  const dot = file.indexOf('.');
  if (dot > 0) {
    moduleName = file.slice(0, dot);
    symbol = file.slice(dot + 1);
  } else {
    moduleName = current.module;
    symbol = file;
  }

  if (!moduleName || !symbol) return href;

  const target = catalog.get(`${moduleName}.${symbol}`);
  if (!target) return href;

  return `${memberRoute(target)}${hash}`;
}

/** 改写 Markdown 行内链接中的 TypeDoc 路径 */
export function rewriteTypedocMarkdownLinks(
  content: string,
  current: MemberRef,
  catalog: Map<string, MemberRef>,
): string {
  return content.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (full, text: string, link: string) => {
    const next = rewriteTypedocHref(link, current, catalog);
    return next === link ? full : `[${text}](${next})`;
  });
}

/** 对重组后的成员页批量改写链接 */
export function rewriteAllMemberLinks(refs: MemberRef[]): number {
  const catalog = buildMemberLinkCatalog(refs);
  let changed = 0;
  for (const ref of refs) {
    if (!existsSync(ref.absPath)) continue;
    const raw = readFileSync(ref.absPath, 'utf-8');
    const next = rewriteTypedocMarkdownLinks(raw, ref, catalog);
    if (next !== raw) {
      writeFileSync(ref.absPath, next, 'utf-8');
      changed += 1;
    }
  }
  return changed;
}
