/** MCP 混合索引共享类型（构建产物与 mcp 包约定一致） */

export type ApiMemberKind =
  | 'constructor'
  | 'method'
  | 'property'
  | 'accessor'
  | 'enum-member'
  | 'call-signature'
  | 'other';

export type ApiSymbolKind =
  | 'classes'
  | 'interfaces'
  | 'enums'
  | 'functions'
  | 'variables'
  | 'types'
  | 'modules';

export type ApiMember = {
  name: string;
  kind: ApiMemberKind;
  signature: string;
  privileges: string[];
  status: string[];
  experimental?: boolean;
};

export type ApiSymbol = {
  module: string;
  kind: ApiSymbolKind;
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
  /** key: `${module}:${symbolPath}` 如 server:Player.teleport */
  bySymbol: Record<string, number[]>;
};

export type PackageVersionInfo = {
  locked: string;
  /** 供 manifest 使用的简短版本，如 2.11.0-beta */
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
