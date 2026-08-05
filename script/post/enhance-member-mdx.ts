import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { basename } from 'node:path';
import { boostForInheritanceDepth, inferDomainTags } from '../domain-tags.js';
import { moveFileSync } from './fs-utils.js';
import { buildInheritanceGraph, TREE_KINDS } from './inheritance-meta.js';
import type { MemberRef } from './restructure-modules.js';

const BADGE_IMPORT = "import { Badge } from '@rspress/core/theme';";

const TIP_MARKERS = [
  '世界的执行权限',
  '只读模式',
  '执行权限',
  '无法在只读',
  "can't be called in read-only",
  "can't be edited in read-only",
  "can't be used in read-only",
  'read-only mode',
  'restricted-execution',
];

const WARN_MARKERS = ['@deprecated', '已弃用'];

/** 模块概览不增强（仅真实成员页） */
export function isEnhancableMember(ref: MemberRef): boolean {
  if (ref.kind === 'modules') return false;
  if (ref.symbolName === 'index') return false;
  const base = basename(ref.fileName).replace(/\.(md|mdx)$/i, '');
  return base !== 'index';
}

/** 从一级标题解析符号名（`# 类: Player` / `# Class: Player` / `# Player`） */
export function parseSymbolFromTitle(content: string): string | undefined {
  const body = stripFrontmatter(content).body;
  const headingMatch = /^#\s+(.+?)\s*$/m.exec(body);
  if (!headingMatch) return undefined;
  const heading = headingMatch[1]!.trim();
  const colon = heading.indexOf(': ');
  if (colon >= 0) return heading.slice(colon + 2).trim() || undefined;
  return heading || undefined;
}

/** 状态 tag：弃用优先于 experimental */
export function detectStatusTag(content: string): 'deprecated' | 'experimental' | undefined {
  const text = stripFrontmatter(content).body;
  if (
    /@deprecated/i.test(text) ||
    /\bdeprecated\b/i.test(text) ||
    /已弃用/.test(text) ||
    /\*\*`Deprecated`\*\*/i.test(text)
  ) {
    return 'deprecated';
  }
  if (
    /\bbeta\b/i.test(text) ||
    /\bpreview\b/i.test(text) ||
    /\brc\b/i.test(text) ||
    /\*\*`Beta`\*\*/i.test(text) ||
    /\*\*`Preview`\*\*/i.test(text)
  ) {
    return 'experimental';
  }
  return undefined;
}

export function addConstructorAnchors(content: string): string {
  // 用 [ \t]* 而非 \s*，避免 /m 下吞掉标题后的空行换行
  return content
    .replace(/^## 构造函数[ \t]*$/gm, '## 构造函数 {#constructors}')
    .replace(/^### 构造函数[ \t]*$/gm, '### 构造函数 {#constructor}')
    .replace(/^## Constructors[ \t]*$/gm, '## Constructors {#constructors}')
    .replace(/^### Constructor[ \t]*$/gm, '### Constructor {#constructor}');
}

function escapeYamlDoubleQuoted(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

export function buildFrontmatter(options: {
  title: string;
  tag?: 'deprecated' | 'experimental';
  domainTags: string[];
  searchBoost?: number;
}): string {
  const lines = ['---', `title: "${escapeYamlDoubleQuoted(options.title)}"`];
  if (options.tag) lines.push(`tag: ${options.tag}`);
  if (options.domainTags.length > 0) {
    lines.push('domainTags:');
    for (const tag of options.domainTags) {
      lines.push(`  - ${tag}`);
    }
  }
  if (options.searchBoost !== undefined) {
    lines.push(`searchBoost: ${options.searchBoost}`);
  }
  lines.push('---', '');
  return lines.join('\n');
}

export function stripFrontmatter(content: string): { frontmatter: string | undefined; body: string } {
  if (!content.startsWith('---')) return { frontmatter: undefined, body: content };
  const end = content.indexOf('\n---', 3);
  if (end < 0) return { frontmatter: undefined, body: content };
  const after = end + '\n---'.length;
  let body = content.slice(after);
  if (body.startsWith('\r\n')) body = body.slice(2);
  else if (body.startsWith('\n')) body = body.slice(1);
  return { frontmatter: content.slice(0, after), body };
}

/** 去掉已有 Badge import 与标题下 chips，便于幂等重跑 */
export function stripBadgeArtifacts(body: string): string {
  let next = body.replace(/^import\s+\{\s*Badge\s*\}\s+from\s+['"]@rspress\/core\/theme['"];\s*\r?\n+/m, '');
  // 标题后连续的 Badge 行
  next = next.replace(
    /^(#\s+[^\r\n]+)\r?\n+(?:(?:<Badge\b[^>]*>[^<]*<\/Badge>\s*)+\r?\n+)*/m,
    '$1\n\n',
  );
  return next;
}

export function insertDomainChips(body: string, domainTags: string[]): string {
  if (domainTags.length === 0) return body;
  const chips = domainTags.map((t) => `<Badge type="info">${t}</Badge>`).join(' ');
  const heading = /^(#\s+[^\r\n]+)\r?\n+/m.exec(body);
  if (!heading || heading.index === undefined) {
    return `${BADGE_IMPORT}\n\n${chips}\n\n${body}`;
  }
  const insertAt = heading.index + heading[0].length;
  const before = body.slice(0, insertAt);
  const after = body.slice(insertAt);
  return `${BADGE_IMPORT}\n\n${before}${chips}\n\n${after}`;
}

function paragraphLooksWrapped(para: string): boolean {
  const trimmed = para.trimStart();
  return trimmed.startsWith(':::');
}

function shouldTip(para: string): boolean {
  return TIP_MARKERS.some((m) => para.includes(m));
}

function shouldWarn(para: string): boolean {
  if (WARN_MARKERS.some((m) => para.includes(m))) return true;
  // 英文 Deprecated 标记（排除代码标识符误伤由 fence 外处理兜底）
  if (/\*\*`Deprecated`\*\*/i.test(para)) return true;
  if (/(^|\s)deprecated(\s|[.!,:;]|$)/i.test(para)) return true;
  return false;
}

/** 在非代码围栏区域，将权限/弃用段落外包 tip/warning */
export function wrapPrivilegeParagraphs(content: string): string {
  const parts = content.split(/(```[\s\S]*?```)/g);
  return parts
    .map((part) => {
      if (part.startsWith('```')) return part;
      return part.replace(/(?:^|\n\n+)([^\n]+(?:\n(?!\n)[^\n]+)*)/g, (match, para: string) => {
        const text = para.trim();
        if (!text || paragraphLooksWrapped(para)) return match;
        // 跳过标题与纯列表结构的整块（仍允许列表项内短通知段落）
        if (/^#{1,6}\s/.test(text)) return match;
        if (!shouldWarn(text) && !shouldTip(text)) return match;
        const kind = shouldWarn(text) ? 'warning' : 'tip';
        const prefix = match.startsWith('\n\n') ? '\n\n' : match.startsWith('\n') ? '\n' : '';
        return `${prefix}:::${kind}\n${text}\n:::`;
      });
    })
    .join('');
}

/** 超过 maxLines 的代码块外包 :::details 示例 */
export function wrapLongCodeBlocks(content: string, maxLines = 80): string {
  return content.replace(/(^|\n)(:::details[^\n]*\n)?```([^\n`]*)\n([\s\S]*?)```/g, (full, lead, details, lang, body) => {
    if (details) return full;
    const lineCount = String(body).split('\n').length;
    if (lineCount <= maxLines) return full;
    return `${lead}:::details 示例\n\`\`\`${lang}\n${body}\`\`\`\n:::`;
  });
}

export type EnhanceContentResult = {
  content: string;
  symbolName: string;
  domainTags: string[];
  tag?: 'deprecated' | 'experimental';
  searchBoost?: number;
};

export function enhanceMemberContent(
  raw: string,
  options: {
    symbolName?: string;
    inheritanceDepth?: number;
  } = {},
): EnhanceContentResult {
  const strippedFm = stripFrontmatter(raw);
  let body = stripBadgeArtifacts(strippedFm.body);

  const symbolName = options.symbolName?.trim() || parseSymbolFromTitle(body) || 'unknown';
  const domainTags = inferDomainTags(symbolName);
  const tag = detectStatusTag(body);
  const searchBoost =
    options.inheritanceDepth !== undefined
      ? boostForInheritanceDepth(options.inheritanceDepth)
      : undefined;

  body = addConstructorAnchors(body);
  body = wrapPrivilegeParagraphs(body);
  body = wrapLongCodeBlocks(body);
  body = insertDomainChips(body, domainTags);

  const frontmatter = buildFrontmatter({
    title: symbolName,
    tag,
    domainTags,
    searchBoost,
  });

  return {
    content: frontmatter + body,
    symbolName,
    domainTags,
    tag,
    searchBoost,
  };
}

function toMdxPath(absPath: string): string {
  if (/\.mdx$/i.test(absPath)) return absPath;
  return absPath.replace(/\.md$/i, '.mdx');
}

/** 按模块重建 classes/interfaces 继承深度：absPath → depth */
export function buildInheritanceDepthByAbsPath(refs: MemberRef[]): Map<string, number> {
  const depthMap = new Map<string, number>();
  const modules = [...new Set(refs.map((r) => r.module))];

  for (const mod of modules) {
    for (const kind of TREE_KINDS) {
      const kindRefs = refs.filter(
        (r) => r.module === mod && r.kind === kind && isEnhancableMember(r) && existsSync(r.absPath),
      );
      if (kindRefs.length === 0) continue;
      const members = kindRefs.map((r) => ({
        fileName: r.fileName,
        content: readFileSync(r.absPath, 'utf-8'),
      }));
      const graph = buildInheritanceGraph(members, mod);
      for (const r of kindRefs) {
        const node = graph.nodes.get(r.fileName);
        if (node) depthMap.set(r.absPath, node.depth);
      }
    }
  }
  return depthMap;
}

/**
 * 增强成员页：frontmatter / Badge / 锚点 / 容器 / 权重；.md → .mdx。
 * 就地更新 refs 的 fileName/absPath，供同一次 build 后续任务使用。
 */
export function enhanceMemberPages(refs: MemberRef[]): MemberRef[] {
  const depthByAbsPath = buildInheritanceDepthByAbsPath(refs);
  let enhanced = 0;

  for (const ref of refs) {
    if (!isEnhancableMember(ref)) continue;
    if (!existsSync(ref.absPath)) {
      console.warn(`[enhance-member-mdx] missing file, skip: ${ref.absPath}`);
      continue;
    }

    const raw = readFileSync(ref.absPath, 'utf-8');
    const depth = depthByAbsPath.get(ref.absPath);
    const result = enhanceMemberContent(raw, {
      symbolName: ref.symbolName,
      inheritanceDepth: depth,
    });

    const destPath = toMdxPath(ref.absPath);
    if (destPath !== ref.absPath) {
      writeFileSync(ref.absPath, result.content, 'utf-8');
      moveFileSync(ref.absPath, destPath);
    } else {
      writeFileSync(destPath, result.content, 'utf-8');
    }

    ref.fileName = basename(destPath);
    ref.absPath = destPath;
    enhanced += 1;
  }

  console.log(`[enhance-member-mdx] enhanced ${enhanced} member page(s)`);
  return refs;
}
