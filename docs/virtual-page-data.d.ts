/** Rspress 客户端虚拟模块：页面运行时数据（含 frontmatter） */
declare module 'virtual-page-data' {
  export const pageData: {
    pages: Array<{
      routePath: string;
      frontmatter?: Record<string, unknown>;
    }>;
  };
  export const searchIndexHash: Record<string, string>;
}
