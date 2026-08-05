import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { Node, Project } from 'ts-morph';
import { translatedPath as defaultTranslatedPath } from '../utils.js';
import { docsDir as defaultDocsDir } from './constants.js';
import { writeJson } from './fs-utils.js';

export type WriteVanillaDataIndexOptions = {
  translatedPath?: string;
  docsDir?: string;
};

/**
 * 从入口起跟随 re-export，收集导出的 enum / variable 名称（不含成员展开）。
 * @returns 是否成功写出索引；入口缺失时 warn 并返回 false
 */
export function writeVanillaDataIndex(
  options: WriteVanillaDataIndexOptions = {},
): boolean {
  const translatedRoot = options.translatedPath ?? defaultTranslatedPath;
  const outDocs = options.docsDir ?? defaultDocsDir;
  /** 包入口；可能仅为 `export * from "./vanilla-data/index"` */
  const entryPath = join(translatedRoot, 'vanilla-data.d.ts');
  /** 实际声明所在目录（barrel + mojang-*.d.ts） */
  const pkgGlob = join(translatedRoot, 'vanilla-data', '**', '*.d.ts');

  if (!existsSync(entryPath)) {
    console.warn(
      `[vanilla-data-index] 未找到 ${entryPath}，跳过精简索引`,
    );
    return false;
  }

  const project = new Project({ skipAddingFilesFromTsConfig: true });
  const entry = project.addSourceFileAtPath(entryPath);
  // 把 barrel / 子模块一并加入，否则 export * 无法解析到声明
  project.addSourceFilesAtPaths(pkgGlob);

  const names = new Set<string>();
  for (const [exportName, decls] of entry.getExportedDeclarations()) {
    for (const decl of decls) {
      if (Node.isEnumDeclaration(decl) || Node.isVariableDeclaration(decl)) {
        names.add(exportName);
        break;
      }
    }
  }

  const sorted = [...names].sort((a, b) => a.localeCompare(b));
  const groups = new Map<string, string[]>();
  for (const n of sorted) {
    const first = n[0]?.toUpperCase() ?? '#';
    const key = /^[A-Z]$/.test(first) ? first : '#';
    const list = groups.get(key);
    if (list) list.push(n);
    else groups.set(key, [n]);
  }

  const body = [...groups.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, list]) => `## ${k}\n\n${list.map((n) => `- \`${n}\``).join('\n')}`)
    .join('\n\n');

  const dir = join(outDocs, 'vanilla-data');
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, 'index.mdx'),
    `---\ntitle: vanilla-data\ndescription: @minecraft/vanilla-data 枚举/常量名称索引（精简，不展开成员）\n---\n\n# @minecraft/vanilla-data\n\n:::tip 精简索引\n本页仅列出导出名称，不生成每枚举成员页，以避免页数爆炸。\n:::\n\n${body}\n`,
    'utf-8',
  );
  writeJson(join(dir, '_meta.json'), [{ type: 'file', name: 'index', label: '索引' }]);
  console.log(`[vanilla-data-index] 写出 ${sorted.length} 个导出名称索引`);
  return true;
}
