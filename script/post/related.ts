import type { MemberRef } from './restructure-modules.js';

export type MemberWithTags = MemberRef & { domainTags: string[] };

/**
 * 选取同领域相关符号。
 * 与计划字面 `score > 0` 不同：要求至少共享一个 domain tag，
 * 同模块加分仅在共享 tag 候选中排序（体现「同领域」）；无共享 tag 的同模块符号不推荐。
 */
export function pickRelated(
  current: MemberWithTags,
  all: Array<MemberWithTags>,
  limit = 6,
): MemberRef[] {
  const scored = all
    .filter((x) => x.absPath !== current.absPath)
    .map((x) => {
      const shared = x.domainTags.filter((t) => current.domainTags.includes(t)).length;
      const sameMod = x.module === current.module ? 2 : 0;
      return { x, shared, score: shared * 3 + sameMod };
    })
    .filter((s) => s.shared > 0)
    .sort((a, b) => b.score - a.score || a.x.symbolName.localeCompare(b.x.symbolName));
  return scored.slice(0, limit).map((s) => s.x);
}

/** 成员文档链接：`/${module}/${kind}/${symbolName}`（无扩展名） */
export function memberDocHref(ref: MemberRef): string {
  return `/${ref.module}/${ref.kind}/${ref.symbolName}`;
}

/** 渲染「同领域相关」节；无条目时返回空串 */
export function renderRelatedSection(items: MemberRef[]): string {
  if (items.length === 0) return '';
  const lines = items.map((r) => `- [${r.symbolName}](${memberDocHref(r)})`);
  return `\n## 同领域相关\n\n${lines.join('\n')}\n`;
}

/** 去掉已有「同领域相关」节，便于幂等重跑 */
export function stripRelatedSection(body: string): string {
  const stripped = body.replace(/(?:\r?\n)*## 同领域相关\r?\n[\s\S]*?(?=(?:\r?\n)## |\s*$)/, '');
  if (stripped.length === 0) return '\n';
  return stripped.replace(/(?:\r?\n)*$/, '\n');
}

/** 先剥旧节再按需追加；items 为空则只剥离 */
export function applyRelatedSection(body: string, items: MemberRef[]): string {
  const base = stripRelatedSection(body).replace(/(?:\r?\n)*$/, '\n');
  if (items.length === 0) return base;
  return `${base}${renderRelatedSection(items)}`;
}
