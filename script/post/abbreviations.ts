import { readFileSync } from 'node:fs';
import { resolve as resolvePath } from 'node:path';
import type { PhrasingContent, Root, RootContent, Text } from 'mdast';
import type { Plugin } from 'unified';
import { basePath } from '../utils.js';

export type AbbreviationMap = Map<string, string>;

/** pandoc/mkdocs 词表行：`*[ABBR]: definition` */
const ABBR_LINE_RE = /^\*\[([^\]]+)\]:\s*(.+)$/;

/** 解析 abbreviations.md 文本为缩写表（同名后者覆盖） */
export function parseAbbreviations(markdown: string): AbbreviationMap {
  const map: AbbreviationMap = new Map();
  for (const rawLine of markdown.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('<!--')) continue;
    const match = ABBR_LINE_RE.exec(line);
    if (!match) continue;
    map.set(match[1]!, match[2]!.trim());
  }
  return map;
}

/** 从文件加载词表；默认 `includes/abbreviations.md` */
export function loadAbbreviations(filePath?: string): AbbreviationMap {
  const path = filePath ?? resolvePath(basePath, 'includes', 'abbreviations.md');
  return parseAbbreviations(readFileSync(path, 'utf-8'));
}

/** title 属性用纯文本：去掉 markdown 链接/行内代码标记 */
export function abbreviationTitle(definition: string): string {
  return definition
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .trim();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** 按词长降序，优先匹配更长缩写 */
export function buildAbbreviationPattern(keys: Iterable<string>): RegExp | undefined {
  const sorted = [...keys].filter(Boolean).sort((a, b) => b.length - a.length || a.localeCompare(b));
  if (sorted.length === 0) return undefined;
  const body = sorted.map(escapeRegExp).join('|');
  // 词边界：避免 API 误伤在标识符中间；大小写敏感
  return new RegExp(`\\b(${body})\\b`, 'g');
}

type MdxJsxAttribute = {
  type: 'mdxJsxAttribute';
  name: string;
  value?: string | null;
};

type MdxJsxTextElement = {
  type: 'mdxJsxTextElement';
  name: string;
  attributes: MdxJsxAttribute[];
  children: PhrasingContent[];
};

function makeAbbrNode(abbr: string, title: string): MdxJsxTextElement {
  return {
    type: 'mdxJsxTextElement',
    name: 'abbr',
    attributes: [{ type: 'mdxJsxAttribute', name: 'title', value: title }],
    children: [{ type: 'text', value: abbr }],
  };
}

const SKIP_PARENT_TYPES = new Set([
  'code',
  'inlineCode',
  'link',
  'linkReference',
  'definition',
  'yaml',
  'toml',
  'html',
  'mdxJsxFlowElement',
  'mdxJsxTextElement',
  'mdxjsEsm',
]);

function splitTextNode(node: Text, pattern: RegExp, glossary: AbbreviationMap): PhrasingContent[] {
  const value = node.value;
  pattern.lastIndex = 0;
  const parts: PhrasingContent[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(value)) !== null) {
    const abbr = match[1]!;
    const title = glossary.get(abbr);
    if (!title) continue;
    if (match.index > last) {
      parts.push({ type: 'text', value: value.slice(last, match.index) });
    }
    parts.push(makeAbbrNode(abbr, abbreviationTitle(title)));
    last = match.index + abbr.length;
  }
  if (parts.length === 0) return [node];
  if (last < value.length) {
    parts.push({ type: 'text', value: value.slice(last) });
  }
  return parts;
}

function transformChildren(
  children: RootContent[] | PhrasingContent[],
  pattern: RegExp,
  glossary: AbbreviationMap,
  parentType: string | undefined,
): void {
  if (parentType && SKIP_PARENT_TYPES.has(parentType)) return;

  for (let i = 0; i < children.length; i++) {
    const child = children[i]!;
    if (child.type === 'text') {
      if (parentType === 'code' || parentType === 'inlineCode') continue;
      const next = splitTextNode(child, pattern, glossary);
      if (next.length === 1 && next[0] === child) continue;
      (children as PhrasingContent[]).splice(i, 1, ...next);
      i += next.length - 1;
      continue;
    }
    if ('children' in child && Array.isArray(child.children)) {
      transformChildren(child.children as RootContent[], pattern, glossary, child.type);
    }
  }
}

export type RemarkAbbrGlossaryOptions = {
  /** 预解析词表；缺省则读默认文件 */
  glossary?: AbbreviationMap;
  /** 词表文件路径（仅在未传 glossary 时使用） */
  filePath?: string;
};

/**
 * 基于外部词表的 remark 缩写插件。
 * 正文中的完整词匹配替换为 `<abbr title="...">`，代码块/行内代码/链接内不处理。
 * 不用过时的 remark-abbr（需页内定义且不适配 remark 13+ / MDX）。
 */
export function remarkAbbrGlossary(options: RemarkAbbrGlossaryOptions = {}): Plugin<[], Root> {
  const glossary = options.glossary ?? loadAbbreviations(options.filePath);
  const pattern = buildAbbreviationPattern(glossary.keys());

  return function remarkAbbrGlossaryPlugin() {
    return (tree: Root) => {
      if (!pattern || glossary.size === 0) return;
      transformChildren(tree.children, pattern, glossary, undefined);
    };
  };
}
