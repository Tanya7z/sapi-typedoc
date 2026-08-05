import type { OnSearch } from '@rspress/core/theme';

/** Rspress 自定义搜索钩子占位（Task 8 实现 domainTags + searchBoost） */
export const onSearch: OnSearch = async (_query, _matchedResult) => {
  return undefined;
};
