/** 版本映射机器可读结构（docs/versions/_data.json → mcp-data/version-map.json） */

export type VersionMapRow = {
  /** API 核心版本，如 2.9.0 */
  apiVersion: string;
  /** 稳定分支对应 MC 版本 */
  stableMc?: string;
  /** 预览分支对应 MC 版本 */
  previewMc?: string;
  firstPublished?: string;
};

export type VersionMapPackage = {
  module: string;
  packageName: string;
  /** npm dist-tag 解析的完整版本（若有） */
  npmStable?: string;
  npmPreview?: string;
  rows: VersionMapRow[];
};

export type VersionMapIndex = {
  generatedAt: string;
  packages: Record<string, VersionMapPackage>;
};
