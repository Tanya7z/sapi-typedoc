export type DocEntry = {
  module: string;
  title: string;
  path: string;
  summary: string;
};

export type SearchHit = DocEntry & {
  score: number;
};

export type ApiMember = {
  name: string;
  kind: string;
  signature: string;
  privileges: string[];
  status: string[];
  experimental?: boolean;
};

export type ApiSymbol = {
  module: string;
  kind: string;
  name: string;
  path: string;
  summary: string;
  status: string[];
  tags: string[];
  experimental?: boolean;
  extends?: string[];
  members: ApiMember[];
};

export type ApiIndex = {
  generatedAt: string;
  symbolCount: number;
  legend: { tag: string; meaning: string }[];
  symbols: ApiSymbol[];
};

export type ExampleRef = {
  fileName: string;
  hash?: string;
  content: string;
  symbols: string[];
};

export type ExamplesIndex = {
  generatedAt: string;
  examples: ExampleRef[];
  bySymbol: Record<string, number[]>;
};

export type PackageVersionInfo = {
  locked: string;
  manifest: string;
  stable?: string;
  preview?: string;
  gameVersion?: string;
};

export type VersionsIndex = {
  generatedAt: string;
  gameVersion?: string;
  packages: Record<string, PackageVersionInfo>;
};

export type VersionMapRow = {
  apiVersion: string;
  stableMc?: string;
  previewMc?: string;
  firstPublished?: string;
};

export type VersionMapPackage = {
  module: string;
  packageName: string;
  npmStable?: string;
  npmPreview?: string;
  rows: VersionMapRow[];
};

export type VersionMapIndex = {
  generatedAt: string;
  packages: Record<string, VersionMapPackage>;
};
