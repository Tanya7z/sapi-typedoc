import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { basename } from 'node:path';
import { boostForInheritanceDepth, inferDomainTags } from '../domain-tags.js';
import {
  buildExperimentalDiff,
  experimentalMembersOf,
  isSymbolExperimental,
  type ExperimentalDiffResult,
} from './experimental-diff.js';
import { moveFileSync } from './fs-utils.js';
import { buildInheritanceGraph, TREE_KINDS } from './inheritance-meta.js';
import { applyRelatedSection, pickRelated, stripRelatedSection, type MemberWithTags } from './related.js';
import type { MemberRef } from './restructure-modules.js';

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
export function isEnhanceableMember(ref: MemberRef): boolean {
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

/**
 * 正文状态：仅识别弃用。
 * experimental 由稳定↔预览符号差异决定（见 experimental-diff），不看正文 Beta 徽章。
 */
export function detectStatusTag(content: string): 'deprecated' | undefined {
  const text = stripFrontmatter(content).body;
  if (
    /@deprecated/i.test(text) ||
    /\bdeprecated\b/i.test(text) ||
    /已弃用/.test(text) ||
    /\*\*`Deprecated`\*\*/i.test(text) ||
    /\*\*`已弃用`\*\*/.test(text)
  ) {
    return 'deprecated';
  }
  return undefined;
}

/** 合并弃用与符号级实验性：弃用优先 */
export function resolveStatusTag(
  content: string,
  symbolExperimental?: boolean,
): 'deprecated' | 'experimental' | undefined {
  return detectStatusTag(content) ?? (symbolExperimental ? 'experimental' : undefined);
}

const EXPERIMENTAL_MEMBER_BADGE = '<Badge type="warning">实验性</Badge>';

/** 去掉 ### 标题下由本流水线写入的实验性 Badge，便于幂等 */
export function stripExperimentalMemberBadges(body: string): string {
  return body.replace(
    /^(###[^\r\n]+)\r?\n+(?:<Badge type="warning">实验性<\/Badge>\s*\r?\n+)*/gm,
    '$1\n\n',
  );
}

/**
 * 在仅预览新增的成员 `###` 标题下插入实验性 Badge。
 * 构造函数标题 `Constructor` / `构造函数` 对应成员名 `constructor`。
 */
export function markExperimentalMembers(body: string, memberNames: Iterable<string>): string {
  const wanted = new Set([...memberNames].filter(Boolean));
  let next = stripExperimentalMemberBadges(body);
  if (wanted.size === 0) return next;
  return next.replace(
    /^###[ \t]+([^\r\n{#]+?)[ \t]*(?:\{#[^}]+\})?[ \t]*$/gm,
    (full, rawTitle: string) => {
      const title = rawTitle.trim();
      const key = /^(Constructor|构造函数)$/i.test(title) ? 'constructor' : title;
      if (!wanted.has(key)) return full;
      return `${full}\n\n${EXPERIMENTAL_MEMBER_BADGE}`;
    },
  );
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

/** 转义 Badge 子文本，避免 & < > 破坏 MDX */
export function escapeBadgeChildren(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** 转义 Tab label 供 JSX 双引号属性使用（用 \"，不用 HTML 实体） */
export function escapeTabLabel(text: string): string {
  return text.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

/** 转义 MDX 会误解析的散文字符；保留围栏代码与行内代码。须在注入 JSX / {#锚点} 之前调用。 */
export function escapeMdxProse(content: string): string {
  return content
    .split(/(```[\s\S]*?```)/g)
    .map((part, i) => {
      if (i % 2 === 1) return part;
      return part
        .split(/(`[^`]*`)/g)
        .map((seg, j) => {
          if (j % 2 === 1) return seg;
          // 保护标题锚点 {#id}（幂等重跑时可能已是 \{#id\}）
          const anchors: string[] = [];
          const withSlots = seg
            .replace(/\\?\{#[^}\\]+\\?\}/g, (m) => {
              const normalized = m.replace(/\\\{/g, '{').replace(/\\\}/g, '}');
              anchors.push(normalized);
              return `\0ANCHOR${anchors.length - 1}\0`;
            })
            .replace(/(?<!\\)\{/g, '\\{')
            .replace(/(?<!\\)\}/g, '\\}')
            .replace(/(?<!\\)</g, '\\<');
          return withSlots.replace(/\0ANCHOR(\d+)\0/g, (_, idx) => anchors[Number(idx)]!);
        })
        .join('');
    })
    .join('');
}

/** 模块名 → npm 包（如 server → @minecraft/server） */
export function npmPackageForModule(moduleName: string): string {
  return `@minecraft/${moduleName}`;
}

export function sourceCodeHref(moduleName: string): string {
  return `https://www.npmjs.com/package/${npmPackageForModule(moduleName)}`;
}

/** 去掉 @rspress/core/theme 的 import 行 */
export function stripThemeImport(body: string): string {
  return body.replace(/^import\s+\{[^}]+\}\s+from\s+['"]@rspress\/core\/theme['"];\s*\r?\n+/gm, '');
}

/** 去掉已有 Badge import 与标题下 chips，便于幂等重跑 */
export function stripBadgeArtifacts(body: string): string {
  let next = stripThemeImport(body);
  // 标题后连续的 Badge 行
  next = next.replace(
    /^(#\s+[^\r\n]+)\r?\n+(?:(?:<Badge\b[^>]*>[^<]*<\/Badge>\s*)+\r?\n+)*/m,
    '$1\n\n',
  );
  return next;
}

/** 去掉页尾 SourceCode，便于幂等重跑 */
export function stripSourceCode(body: string): string {
  const stripped = body.replace(/(?:\r?\n)*<SourceCode\b[^>]*\/>\s*/g, '\n');
  return stripped.replace(/(?:\r?\n)*$/, '\n');
}

/** 页尾插入 SourceCode；module 为空则只剥离 */
export function applySourceCode(body: string, moduleName: string | undefined): string {
  const base = stripSourceCode(body).replace(/(?:\r?\n)*$/, '\n');
  if (!moduleName) return base;
  return `${base}\n<SourceCode href="${sourceCodeHref(moduleName)}" />\n`;
}

type ExampleTabItem = { label: string; content: string };

const EXAMPLE_FENCE_RE =
  /((?:\:\:\:details[^\r\n]*\r?\n)?```[^\r\n]*\r?\n[\s\S]*?```(?:\r?\n\:\:\:)?)/g;

/** 从 Examples 节正文收集「可选粗体标签 + 代码块（可含 details）」；围栏间说明并入下一 Tab */
export function collectExampleTabItems(sectionBody: string): ExampleTabItem[] {
  const items: ExampleTabItem[] = [];
  const re = new RegExp(EXAMPLE_FENCE_RE.source, 'g');
  let match: RegExpExecArray | null;
  let index = 0;
  let lastEnd = 0;
  while ((match = re.exec(sectionBody)) !== null) {
    index += 1;
    const fence = match[1]!.trim();
    const before = sectionBody.slice(lastEnd, match.index);
    const labelAtEnd = /\*\*([^*]+)\*\*[ \t]*\r?\n*$/.exec(before);
    let rawLabel: string | undefined;
    let proseRegion = before;
    if (labelAtEnd) {
      rawLabel = labelAtEnd[1]!.trim();
      proseRegion = before.slice(0, labelAtEnd.index);
    }
    const prose = proseRegion.trim();
    const label = rawLabel || inferExampleLabel(fence, index);
    // 首个围栏前的说明由 wrapExampleTabs 作为 preface 保留在 Tabs 外，避免重复
    const content = index > 1 && prose ? `${prose}\n\n${fence}` : fence;
    items.push({ label, content });
    lastEnd = match.index + match[0].length;
  }
  return items;
}

/** 标签回退：首行注释 → 语言 → 示例 N */
export function inferExampleLabel(fenceOrDetails: string, index: number): string {
  const fence = /```([^\r\n`]*)\r?\n([\s\S]*?)```/.exec(fenceOrDetails);
  if (fence) {
    const lang = fence[1]!.trim().split(/\s+/)[0] || '';
    const code = fence[2] ?? '';
    const comment =
      /^\s*\/\/\s*(.+)$/m.exec(code)?.[1]?.trim() ||
      /^\s*\/\*\s*(.+?)\s*\*\//m.exec(code)?.[1]?.trim() ||
      /^\s*#\s*(.+)$/m.exec(code)?.[1]?.trim();
    if (comment) return comment;
    if (lang) return `${lang} · 示例 ${index}`;
  }
  return `示例 ${index}`;
}

function renderExampleTabs(items: ExampleTabItem[]): string {
  const tabs = items
    .map(
      (item, i) =>
        `<Tab label="${escapeTabLabel(item.label)}" value="ex-${i + 1}">\n\n${item.content}\n\n</Tab>`,
    )
    .join('\n');
  return `<Tabs>\n${tabs}\n</Tabs>`;
}

/**
 * 将 ## Examples / ## 示例 下 2+ 个示例围栏包成 Tabs。
 * 单示例不生成；已是 Tabs 时先由 stripExampleTabs 还原。
 * 节边界仅到下一 ##（h2）或文末，避免 ### 示例小标题截断。
 */
export function wrapExampleTabs(content: string): string {
  // 不用 /m 下的 $：其会在行末提前命中，导致节正文被吞成空串
  // 仅下一 h2 或真正文末（(?![\s\S])）结束本节，### 留在节内
  return content.replace(
    /(^##[ \t]+(?:Examples?|示例)[ \t]*\r?\n)([\s\S]*?)(?=^##[ \t]+|(?![\s\S]))/gm,
    (full, heading: string, sectionBody: string) => {
      if (/<Tabs>/.test(sectionBody)) return full;
      const items = collectExampleTabItems(sectionBody);
      if (items.length < 2) return full;
      // 保留节内 Tabs 以外的前导说明
      const firstFence = /(?:\:\:\:details[^\r\n]*\r?\n)?```/.exec(sectionBody);
      let preface = '';
      if (firstFence && firstFence.index !== undefined) {
        const beforeFirst = sectionBody.slice(0, firstFence.index);
        // 去掉紧贴首个围栏的 **label**，其余为 preface
        const labelAtEnd = /\*\*([^*]+)\*\*[ \t]*\r?\n*$/.exec(beforeFirst);
        const proseRegion = labelAtEnd ? beforeFirst.slice(0, labelAtEnd.index) : beforeFirst;
        preface = proseRegion.trimEnd();
      }
      const prefaceBlock = preface ? `${preface}\n\n` : '';
      return `${heading}${prefaceBlock}${renderExampleTabs(items)}\n`;
    },
  );
}

/** 拆掉增强器生成的 Tabs，还原为粗体标签 + 代码块，便于幂等 */
export function stripExampleTabs(body: string): string {
  return body.replace(/<Tabs>\s*([\s\S]*?)<\/Tabs>/g, (_full, inner: string) => {
    const parts: string[] = [];
    const tabRe = /<Tab\b([^>]*)>\s*([\s\S]*?)\s*<\/Tab>/g;
    let match: RegExpExecArray | null;
    while ((match = tabRe.exec(inner)) !== null) {
      const attrs = match[1] ?? '';
      const content = match[2]!.trim();
      const labelMatch = /\blabel="((?:\\.|[^"\\])*)"/.exec(attrs);
      const label = labelMatch?.[1]?.replace(/\\([\\"])/g, '$1');
      if (label && !/^示例 \d+$/.test(label) && !/^[a-z0-9.+-]+ · 示例 \d+$/i.test(label)) {
        parts.push(`**${label}**\n\n${content}`);
      } else {
        parts.push(content);
      }
    }
    return parts.length > 0 ? `\n\n${parts.join('\n\n')}\n\n` : _full;
  });
}

/** 在正文前插入 theme import（调用方保证 body 已无旧 import） */
export function ensureThemeImport(body: string, names: string[]): string {
  const unique = [...new Set(names.filter(Boolean))];
  if (unique.length === 0) return body;
  return `import { ${unique.join(', ')} } from '@rspress/core/theme';\n\n${body}`;
}

export function insertDomainChips(body: string, domainTags: string[]): string {
  if (domainTags.length === 0) return body;
  const chips = domainTags.map((t) => `<Badge type="info">${escapeBadgeChildren(t)}</Badge>`).join(' ');
  const heading = /^(#\s+[^\r\n]+)\r?\n+/m.exec(body);
  if (!heading || heading.index === undefined) {
    return `${chips}\n\n${body}`;
  }
  const insertAt = heading.index + heading[0].length;
  const before = body.slice(0, insertAt);
  const after = body.slice(insertAt);
  return `${before}${chips}\n\n${after}`;
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
    module?: string;
    /** 该符号相对稳定版为新增导出 */
    symbolExperimental?: boolean;
    /** 稳定版已有符号上的新增成员名 */
    experimentalMembers?: Iterable<string>;
  } = {},
): EnhanceContentResult {
  const strippedFm = stripFrontmatter(raw);
  // 去掉旧 Badge / Tabs / SourceCode / 同领域相关，保证幂等；相关节在第二遍再追加
  let body = stripBadgeArtifacts(strippedFm.body);
  body = stripExperimentalMemberBadges(body);
  body = stripExampleTabs(body);
  body = stripSourceCode(body);
  body = stripRelatedSection(body);
  body = escapeMdxProse(body);

  const symbolName = options.symbolName?.trim() || parseSymbolFromTitle(body) || 'unknown';
  const domainTags = inferDomainTags(symbolName);
  const tag = resolveStatusTag(body, options.symbolExperimental);
  const searchBoost =
    options.inheritanceDepth !== undefined
      ? boostForInheritanceDepth(options.inheritanceDepth)
      : undefined;

  body = addConstructorAnchors(body);
  body = wrapPrivilegeParagraphs(body);
  body = wrapExampleTabs(body);
  body = wrapLongCodeBlocks(body);
  body = markExperimentalMembers(body, options.experimentalMembers ?? []);
  body = insertDomainChips(body, domainTags);
  body = applySourceCode(body, options.module);

  const importNames: string[] = [];
  const hasExperimentalMemberBadge = body.includes(EXPERIMENTAL_MEMBER_BADGE);
  if (domainTags.length > 0 || hasExperimentalMemberBadge) importNames.push('Badge');
  if (body.includes('<Tabs>')) {
    importNames.push('Tabs', 'Tab');
  }
  if (body.includes('<SourceCode')) importNames.push('SourceCode');
  body = ensureThemeImport(body, importNames);

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
        (r) => r.module === mod && r.kind === kind && isEnhanceableMember(r) && existsSync(r.absPath),
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
 * 两遍：先增强并收集 domainTags，再追加「同领域相关」。
 * 就地更新 refs 的 fileName/absPath，供同一次 build 后续任务使用。
 */
export async function enhanceMemberPages(
  refs: MemberRef[],
  options: { experimentalDiff?: ExperimentalDiffResult } = {},
): Promise<MemberRef[]> {
  const depthByAbsPath = buildInheritanceDepthByAbsPath(refs);
  const modules = [...new Set(refs.map((r) => r.module))];
  const experimentalDiff =
    options.experimentalDiff ??
    (await buildExperimentalDiff({ modules }));
  let enhanced = 0;
  const tagged: MemberWithTags[] = [];

  for (const ref of refs) {
    if (!isEnhanceableMember(ref)) continue;
    if (!existsSync(ref.absPath)) {
      console.warn(`[enhance-member-mdx] missing file, skip: ${ref.absPath}`);
      continue;
    }

    const modDiff = experimentalDiff.modules[ref.module];
    const raw = readFileSync(ref.absPath, 'utf-8');
    const depth = depthByAbsPath.get(ref.absPath);
    const result = enhanceMemberContent(raw, {
      symbolName: ref.symbolName,
      inheritanceDepth: depth,
      module: ref.module,
      symbolExperimental: isSymbolExperimental(modDiff, ref.symbolName),
      experimentalMembers: experimentalMembersOf(modDiff, ref.symbolName),
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
    tagged.push({
      module: ref.module,
      kind: ref.kind,
      symbolName: ref.symbolName,
      fileName: ref.fileName,
      absPath: ref.absPath,
      domainTags: result.domainTags,
    });
    enhanced += 1;
  }

  let relatedPages = 0;
  for (const item of tagged) {
    const raw = readFileSync(item.absPath, 'utf-8');
    const { frontmatter, body } = stripFrontmatter(raw);
    const related =
      item.domainTags.length > 0 ? pickRelated(item, tagged) : [];
    // 相关节在前，SourceCode 固定页尾，避免相关剥离误伤
    let nextBody = applyRelatedSection(stripSourceCode(body), related);
    nextBody = applySourceCode(nextBody, item.module);
    // stripFrontmatter 的 fence 不含尾换行，body 已剥掉该换行，写入时必须补回
    const fm = frontmatter ?? '';
    const sep = fm.length === 0 || fm.endsWith('\n') ? '' : '\n';
    writeFileSync(item.absPath, `${fm}${sep}${nextBody}`, 'utf-8');
    if (related.length > 0) relatedPages += 1;
  }

  console.log(
    `[enhance-member-mdx] enhanced ${enhanced} member page(s); related on ${relatedPages}`,
  );
  return refs;
}
