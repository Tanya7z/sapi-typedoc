import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { DOMAIN_TAG_LEGEND, inferDomainTags } from '../domain-tags.js';
import { docsDir } from './constants.js';
import { isEnhanceableMember, stripFrontmatter } from './enhance-member-mdx.js';
import { writeJson } from './fs-utils.js';
import { memberDocHref } from './related.js';
import type { MemberRef } from './restructure-modules.js';

export type TagIndexItem = {
  name: string;
  module: string;
  kind: string;
  tags: string[];
  href: string;
};

export type TagsIndexData = {
  legend: { tag: string; meaning: string }[];
  items: TagIndexItem[];
};

function unquoteYamlScalar(raw: string): string {
  const value = raw.trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

/** 从 frontmatter 文本解析 domainTags 列表 */
export function parseDomainTagsFromFrontmatter(frontmatter: string | undefined): string[] | undefined {
  if (!frontmatter) return undefined;

  // 流式列表：domainTags: [] / domainTags: [player] / domainTags: ["player", "entity"]
  const flow = /^domainTags:\s*\[([^\]]*)\][ \t]*$/m.exec(frontmatter);
  if (flow) {
    const inner = flow[1]!.trim();
    if (!inner) return [];
    return inner
      .split(',')
      .map((part) => unquoteYamlScalar(part))
      .filter((tag) => tag.length > 0);
  }

  // 块式列表：domainTags:\n  - player\n  - entity
  const block = /^domainTags:\s*\r?\n((?:[ \t]+-[ \t]*.+(?:\r?\n|$))*)/m.exec(frontmatter);
  if (block) {
    const tags: string[] = [];
    for (const line of block[1]!.split(/\r?\n/)) {
      const item = /^[ \t]+-\s*(.+?)\s*$/.exec(line);
      if (!item) continue;
      const value = unquoteYamlScalar(item[1]!);
      if (value) tags.push(value);
    }
    return tags;
  }

  // 仅写出键、无值：视为显式空列表（不重推断）
  if (/^domainTags:\s*$/m.test(frontmatter)) {
    return [];
  }

  // 未出现 domainTags → undefined，调用方可再推断
  return undefined;
}

/** 读取成员页 domainTags；缺省则按符号名推断 */
export function resolveMemberDomainTags(absPath: string, symbolName: string): string[] {
  if (!existsSync(absPath)) return inferDomainTags(symbolName);
  const raw = readFileSync(absPath, 'utf-8');
  const { frontmatter } = stripFrontmatter(raw);
  const fromFm = parseDomainTagsFromFrontmatter(frontmatter);
  if (fromFm !== undefined) return fromFm;
  return inferDomainTags(symbolName);
}

export function buildTagIndexItem(ref: MemberRef, tags: string[]): TagIndexItem {
  return {
    name: ref.symbolName,
    module: ref.module,
    kind: ref.kind,
    tags,
    href: memberDocHref(ref),
  };
}

/** 由 refs 构建索引数据（仅 enhanceable 成员） */
export function buildTagsIndexDataFromRefs(refs: MemberRef[]): TagsIndexData {
  const items: TagIndexItem[] = [];
  for (const ref of refs) {
    if (!isEnhanceableMember(ref)) continue;
    const tags = resolveMemberDomainTags(ref.absPath, ref.symbolName);
    items.push(buildTagIndexItem(ref, tags));
  }
  items.sort(
    (a, b) =>
      a.module.localeCompare(b.module) ||
      a.kind.localeCompare(b.kind) ||
      a.name.localeCompare(b.name),
  );
  return {
    legend: DOMAIN_TAG_LEGEND.map((x) => ({ tag: x.tag, meaning: x.meaning })),
    items,
  };
}

export function renderTagsIndexMdx(): string {
  return `---
title: 标签索引
description: 按领域、模块与类型筛选 Script API 符号
---

import { TagFilter } from '../components/TagFilter';
import data from './_data.json';

按领域标签、模块与类型筛选 Script API 符号。图例与条目由构建时扫描增强后的成员页生成。

<TagFilter items={data.items} legend={data.legend} />
`;
}

export type WriteTagsIndexOptions = {
  docsDir?: string;
  /** 为空时跳过破坏性覆写，保留既有标签页 */
  skipIfEmpty?: boolean;
};

/**
 * 写 docs/tags/_data.json、index.mdx、_meta.json。
 * refs 为空时默认跳过（与 writeRootNav 策略一致）。
 */
export function writeTagsIndex(refs: MemberRef[], options: WriteTagsIndexOptions = {}): boolean {
  const root = options.docsDir ?? docsDir;
  const skipIfEmpty = options.skipIfEmpty !== false;

  if (refs.length === 0 && skipIfEmpty) {
    console.warn('[tags-index] refs 为空，跳过标签索引覆写，保留现有 /tags/');
    return false;
  }

  const data = buildTagsIndexDataFromRefs(refs);
  const tagsDir = join(root, 'tags');
  writeJson(join(tagsDir, '_data.json'), data);
  writeFileSync(join(tagsDir, 'index.mdx'), renderTagsIndexMdx(), 'utf-8');
  writeJson(join(tagsDir, '_meta.json'), [{ type: 'file', name: 'index', label: '标签索引' }]);
  console.log(`[tags-index] wrote ${data.items.length} item(s) to docs/tags/`);
  return true;
}
