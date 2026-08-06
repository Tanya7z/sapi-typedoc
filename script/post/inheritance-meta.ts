import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { docsDir, KIND_DIRS, KIND_META } from './constants.js';
import { writeJson } from './fs-utils.js';
import type { MemberRef } from './restructure-modules.js';

/** 侧栏 meta 条目（对齐 Rspress `_meta.json` schema） */
export type SideMetaItem =
  | string
  | {
      type: 'file';
      name: string;
      label?: string;
      tag?: string;
    }
  | {
      type: 'dir';
      name: string;
      label?: string;
      collapsed?: boolean;
      collapsible?: boolean;
      tag?: string;
    }
  | {
      type: 'custom-link';
      label: string;
      link?: string;
      tag?: string;
      collapsible?: boolean;
      collapsed?: boolean;
      items?: SideMetaItem[];
    };

export type InheritanceNode = {
  fileName: string;
  symbolName: string;
  /** 选定的本地父页文件名；根节点无此字段 */
  parent?: string;
  children: string[];
  depth: number;
};

export type InheritanceGraph = {
  nodes: Map<string, InheritanceNode>;
  /** 排序后的根节点文件名 */
  roots: string[];
};

/**
 * 从 frontmatter 读取 `tag`（如 experimental / deprecated）。
 * custom-link 侧栏项不会自动继承页面 frontmatter，需写入 `_meta.json`。
 */
export function parseFrontmatterTag(content: string): string | undefined {
  const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(content);
  if (!fm) return undefined;
  const match = /^tag:\s*(.+?)\s*$/m.exec(fm[1]);
  if (!match) return undefined;
  const raw = match[1].trim();
  if (!raw || raw === '|' || raw === '>' || raw === '>-') return undefined;
  return raw.replace(/^['"]|['"]$/g, '');
}

export type ModuleMetaPlan = {
  moduleMeta: SideMetaItem[];
  kindMetas: Record<string, SideMetaItem[]>;
};

/** 侧栏继承树适用的 kind（classes / interfaces） */
export const TREE_KINDS = new Set(['classes', 'interfaces']);

function symbolFromFileName(fileName: string): string {
  return fileName.replace(/\.(md|mdx)$/i, '');
}

/**
 * 将链接解析为本目录已知成员文件名（模块感知）。
 * - Bare `Symbol.md` / `./Symbol.md` → 本地（若在 knownFiles）
 * - `currentModule.Symbol.md` → 本地 Symbol.md（若已知）
 * - `/currentModule/kind/Symbol`（rewrite-links 后）→ 本地（若已知）
 * - `otherModule.Symbol.md` / 跨模块绝对路径 → 永不视为本地
 * 限定名按与 parseApiFileName 一致的「首个 `.`」拆分。
 */
export function resolveLocalMemberHref(
  href: string,
  knownFiles: Set<string>,
  currentModule: string,
  currentKind?: string,
): string | undefined {
  let h = href.trim();
  if (h.startsWith('./')) h = h.slice(2);
  if (!h) return undefined;

  // 去掉锚点
  const hash = h.indexOf('#');
  if (hash >= 0) h = h.slice(0, hash);

  const matchKnownSymbol = (symbol: string): string | undefined => {
    if (!symbol) return undefined;
    for (const ext of ['.md', '.mdx'] as const) {
      const candidate = `${symbol}${ext}`;
      if (knownFiles.has(candidate)) return candidate;
    }
    return undefined;
  };

  // 站内绝对路径：/server/classes/Entity
  if (h.startsWith('/')) {
    const parts = h.split('/').filter(Boolean);
    if (parts.length < 3) return undefined;
    const [mod, kind, ...rest] = parts;
    if (mod !== currentModule) return undefined;
    if (currentKind && kind !== currentKind) return undefined;
    const symbol = rest.join('/').replace(/\.(md|mdx)$/i, '');
    if (symbol.includes('/')) return undefined;
    return matchKnownSymbol(symbol);
  }

  if (h.includes('/')) return undefined;

  if (knownFiles.has(h)) return h;

  if (/\.(md|mdx)$/i.test(h)) {
    const base = h.replace(/\.(md|mdx)$/i, '');
    const hit = matchKnownSymbol(base);
    if (hit) return hit;
  } else {
    // 无扩展名的裸符号（少见）
    const hit = matchKnownSymbol(h);
    if (hit) return hit;
  }

  // TypeDoc：currentModule.Symbol.md → Symbol.md；其它模块永不映射
  const base = h.replace(/\.(md|mdx)$/i, '');
  const dot = base.indexOf('.');
  if (dot > 0) {
    const hrefModule = base.slice(0, dot);
    const symbol = base.slice(dot + 1);
    if (hrefModule === currentModule) return matchKnownSymbol(symbol);
  }
  return undefined;
}

/**
 * 从「## 继承」小节提取指向本目录的父页（忽略跨模块/跨目录链接）。
 * 同时识别尚未中文化的「## Extends」，便于对接当前 TypeDoc 输出。
 */
export function parseLocalParents(
  content: string,
  knownFiles: Set<string>,
  currentModule: string,
  currentKind?: string,
): string[] {
  const heading = /^## (?:继承|Extends)\s*$/m.exec(content);
  if (!heading || heading.index === undefined) return [];
  const bodyStart = heading.index + heading[0].length;
  const rest = content.slice(bodyStart);
  const nextHeading = /^##\s+/m.exec(rest);
  const section = nextHeading ? rest.slice(0, nextHeading.index) : rest;
  const parents: string[] = [];
  for (const match of section.matchAll(/\]\(([^)]+)\)/g)) {
    const resolved = resolveLocalMemberHref(match[1], knownFiles, currentModule, currentKind);
    if (resolved && !parents.includes(resolved)) {
      parents.push(resolved);
    }
  }
  return parents;
}

function sortSiblingFileNames(files: string[], childrenOf: Map<string, string[]>): string[] {
  return [...files].sort((a, b) => {
    const aExpandable = (childrenOf.get(a)?.length ?? 0) > 0 ? 0 : 1;
    const bExpandable = (childrenOf.get(b)?.length ?? 0) > 0 ? 0 : 1;
    if (aExpandable !== bExpandable) return aExpandable - bExpandable;
    return symbolFromFileName(a).localeCompare(symbolFromFileName(b));
  });
}

/**
 * 根据成员正文中的继承节构建树。
 * 多父时取字母序第一个本地父；环路在遍历重访时删边打断。
 */
export function buildInheritanceGraph(
  members: Array<{ fileName: string; content: string }>,
  currentModule: string,
  currentKind?: string,
): InheritanceGraph {
  const knownFiles = new Set(members.map((m) => m.fileName));
  const parentOf = new Map<string, string>();

  for (const m of members) {
    const parents = parseLocalParents(m.content, knownFiles, currentModule, currentKind);
    if (parents.length === 0) continue;
    const chosen = [...parents].sort((a, b) => a.localeCompare(b))[0]!;
    parentOf.set(m.fileName, chosen);
  }

  // 打断继承环：沿父链走，若重访则删除当前节点指向父的边
  for (const start of [...parentOf.keys()]) {
    const seen = new Set<string>();
    let cur: string | undefined = start;
    while (cur && parentOf.has(cur)) {
      if (seen.has(cur)) {
        parentOf.delete(cur);
        break;
      }
      seen.add(cur);
      cur = parentOf.get(cur);
    }
  }

  const childrenOf = new Map<string, string[]>();
  for (const file of knownFiles) {
    childrenOf.set(file, []);
  }
  for (const [child, parent] of parentOf) {
    childrenOf.get(parent)?.push(child);
  }
  for (const [parent, kids] of childrenOf) {
    childrenOf.set(parent, sortSiblingFileNames(kids, childrenOf));
  }

  const roots = sortSiblingFileNames(
    [...knownFiles].filter((f) => !parentOf.has(f)),
    childrenOf,
  );

  const depthOf = new Map<string, number>();
  const assignDepth = (file: string, depth: number) => {
    depthOf.set(file, depth);
    for (const child of childrenOf.get(file) ?? []) {
      assignDepth(child, depth + 1);
    }
  };
  for (const root of roots) {
    assignDepth(root, 0);
  }

  const nodes = new Map<string, InheritanceNode>();
  for (const file of knownFiles) {
    nodes.set(file, {
      fileName: file,
      symbolName: symbolFromFileName(file),
      parent: parentOf.get(file),
      children: childrenOf.get(file) ?? [],
      depth: depthOf.get(file) ?? 0,
    });
  }

  return { nodes, roots };
}

/**
 * 将继承树渲染为 kind 目录 `_meta.json`。
 * 物理文件保持扁平（docs/<mod>/classes/*.md）；可折叠嵌套用 custom-link + items，
 * 因 Rspress 的 type:dir 要求真实子目录，迁文件会破坏既有 URL。
 *
 * custom-link 不会读取页面 frontmatter，故需把 `tag` 显式写入 meta（见 tagsByFile）。
 */
export function renderInheritanceKindMeta(
  module: string,
  kind: string,
  graph: InheritanceGraph,
  tagsByFile: ReadonlyMap<string, string> = new Map(),
): SideMetaItem[] {
  const attachTag = (item: Exclude<SideMetaItem, string>, fileName: string): SideMetaItem => {
    const tag = tagsByFile.get(fileName);
    return tag ? { ...item, tag } : item;
  };

  /** 嵌套 items 必须是 custom-link（Rspress schema），不可混用 file/dir */
  const renderCustomLink = (fileName: string): SideMetaItem => {
    const node = graph.nodes.get(fileName);
    if (!node) {
      throw new Error(`inheritance-meta: missing graph node for ${fileName}`);
    }
    const link = `/${module}/${kind}/${node.symbolName}`;
    if (node.children.length === 0) {
      return attachTag({ type: 'custom-link', label: node.symbolName, link }, fileName);
    }
    return attachTag(
      {
        type: 'custom-link',
        label: node.symbolName,
        link,
        collapsible: true,
        collapsed: true,
        items: node.children.map((child) => renderCustomLink(child)),
      },
      fileName,
    );
  };

  // 顶层叶子用 file（可自动吃 frontmatter tag）；有子节点的用可折叠 custom-link
  return graph.roots.map((root) => {
    const node = graph.nodes.get(root)!;
    if (node.children.length === 0) {
      return attachTag({ type: 'file', name: node.symbolName }, root);
    }
    return renderCustomLink(root);
  });
}

function renderFlatKindMeta(refs: MemberRef[]): SideMetaItem[] {
  return [...refs]
    .sort((a, b) => a.symbolName.localeCompare(b.symbolName))
    .map((r) => ({ type: 'file' as const, name: r.symbolName }));
}

function isModuleOverview(ref: MemberRef): boolean {
  return ref.kind === 'modules' || ref.symbolName === 'index';
}

/**
 * 按模块生成根 `_meta` 与各 kind `_meta` 结构（不写盘）。
 * classes/interfaces 走继承树；其余 kind 扁平列表。
 */
export function renderMetaForModule(
  mod: string,
  refs: MemberRef[],
  readContent: (absPath: string) => string = (p) => readFileSync(p, 'utf-8'),
): ModuleMetaPlan {
  const memberRefs = refs.filter((r) => !isModuleOverview(r));
  const kindsPresent = new Set(memberRefs.map((r) => r.kind));

  const moduleMeta: SideMetaItem[] = [
    { type: 'file', name: 'index', label: '概览' },
    ...KIND_DIRS.filter((k) => kindsPresent.has(k)).map((k) => ({
      type: 'dir' as const,
      name: k,
      label: KIND_META[k]?.label ?? k,
      collapsed: false,
    })),
  ];

  const kindMetas: Record<string, SideMetaItem[]> = {};
  for (const kind of KIND_DIRS) {
    if (!kindsPresent.has(kind)) continue;
    const kindRefs = memberRefs.filter((r) => r.kind === kind);
    if (TREE_KINDS.has(kind)) {
      const members = kindRefs.map((r) => ({
        fileName: r.fileName,
        content: readContent(r.absPath),
      }));
      const tagsByFile = new Map<string, string>();
      for (const m of members) {
        const tag = parseFrontmatterTag(m.content);
        if (tag) tagsByFile.set(m.fileName, tag);
      }
      const graph = buildInheritanceGraph(members, mod, kind);
      kindMetas[kind] = renderInheritanceKindMeta(mod, kind, graph, tagsByFile);
    } else {
      kindMetas[kind] = renderFlatKindMeta(kindRefs);
    }
  }

  return { moduleMeta, kindMetas };
}

/** 强制覆盖模块根与各 kind 的 `_meta.json` */
export function writeModuleMeta(
  mod: string,
  refs: MemberRef[],
  options: { docsDir?: string; readContent?: (absPath: string) => string } = {},
): void {
  const root = options.docsDir ?? docsDir;
  const plan = renderMetaForModule(mod, refs, options.readContent);
  writeJson(join(root, mod, '_meta.json'), plan.moduleMeta);
  for (const [kind, meta] of Object.entries(plan.kindMetas)) {
    writeJson(join(root, mod, kind, '_meta.json'), meta);
  }
}
