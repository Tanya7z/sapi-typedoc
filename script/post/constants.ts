import { resolve as resolvePath } from 'node:path';
import { basePath } from '../utils.js';

export const docsDir = resolvePath(basePath, 'docs');
export const apiDir = resolvePath(docsDir, 'api');

/** 顶栏主模块（规格 §4） */
export const PRIMARY_MODULES = ['server', 'server-ui', 'common', 'math'] as const;

/** 全模块顺序（主 + 更多内排序；含 vanilla-data 索引） */
export const MODULE_ORDER = [
  'server',
  'server-ui',
  'common',
  'math',
  'server-net',
  'server-admin',
  'server-gametest',
  'server-graphics',
  'server-editor',
  'debug-utilities',
  'diagnostics',
  'vanilla-data',
] as const;

export const KIND_DIRS = [
  'classes',
  'interfaces',
  'enumerations',
  'enums',
  'functions',
  'variables',
  'types',
  'type-aliases',
  'modules',
] as const;

export const KIND_META: Record<string, { label: string }> = {
  classes: { label: '类' },
  interfaces: { label: '接口' },
  enumerations: { label: '枚举' },
  enums: { label: '枚举' },
  functions: { label: '函数' },
  variables: { label: '变量' },
  types: { label: '类型别名' },
  'type-aliases': { label: '类型别名' },
  modules: { label: '模块' },
};
