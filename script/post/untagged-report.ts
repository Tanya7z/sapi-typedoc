import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { basePath } from '../utils.js';
import { isEnhanceableMember } from './enhance-member-mdx.js';
import { resolveMemberDomainTags } from './tags-index.js';
import type { MemberRef } from './restructure-modules.js';

export type UntaggedSymbol = {
  module: string;
  kind: string;
  name: string;
};

export type UntaggedReport = {
  generatedAt: string;
  count: number;
  symbols: UntaggedSymbol[];
};

/** 收集可增强且 domainTags 为空的成员 */
export function collectUntaggedSymbols(refs: MemberRef[]): UntaggedSymbol[] {
  const symbols: UntaggedSymbol[] = [];
  for (const ref of refs) {
    if (!isEnhanceableMember(ref)) continue;
    const tags = resolveMemberDomainTags(ref.absPath, ref.symbolName);
    if (tags.length > 0) continue;
    symbols.push({
      module: ref.module,
      kind: ref.kind,
      name: ref.symbolName,
    });
  }
  symbols.sort(
    (a, b) =>
      a.module.localeCompare(b.module) ||
      a.kind.localeCompare(b.kind) ||
      a.name.localeCompare(b.name),
  );
  return symbols;
}

export function buildUntaggedReport(refs: MemberRef[]): UntaggedReport {
  const symbols = collectUntaggedSymbols(refs);
  return {
    generatedAt: new Date().toISOString(),
    count: symbols.length,
    symbols,
  };
}

export type WriteUntaggedReportOptions = {
  outPath?: string;
};

/**
 * 写 cache/untagged-symbols.json。
 * refs 为空时跳过覆写（避免清空既有报告）。
 */
export function writeUntaggedReport(
  refs: MemberRef[],
  options: WriteUntaggedReportOptions = {},
): UntaggedReport | undefined {
  if (refs.length === 0) {
    console.warn('[untagged-report] refs 为空，跳过未打标报告覆写');
    return undefined;
  }

  const report = buildUntaggedReport(refs);
  const outPath = options.outPath ?? join(basePath, 'cache', 'untagged-symbols.json');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`, 'utf-8');
  console.log(`[untagged-report] ${report.count} untagged symbol(s) → ${outPath}`);
  return report;
}
