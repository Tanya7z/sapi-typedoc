import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import * as z from 'zod/v4';
import {
  fetchPageMarkdown,
  getBaseUrl,
  getIndex,
  getLlmsSection,
} from './client.js';
import { searchEntries } from './search.js';

function textResult(text: string) {
  return {
    content: [{ type: 'text' as const, text }],
  };
}

function errorResult(err: unknown) {
  const message = err instanceof Error ? err.message : String(err);
  return {
    content: [{ type: 'text' as const, text: `错误：${message}` }],
    isError: true,
  };
}

/** 创建挂载全部文档工具的 MCP Server 实例 */
export function createDocsServer(): McpServer {
  const server = new McpServer({
    name: 'sapi-docs',
    version: '1.0.0',
  });

  server.registerTool(
    'search_docs',
    {
      description:
        '在 Minecraft Script API 中文文档（sapi.dogelake.cn）中搜索符号/页面。返回路径、标题与摘要。',
      inputSchema: {
        query: z.string().describe('搜索关键词，如 Player、Dimension、FormData'),
        module: z
          .string()
          .optional()
          .describe('可选，限定模块名，如 server、server-ui、math'),
        limit: z.number().int().min(1).max(30).optional().describe('返回条数，默认 8'),
      },
    },
    async ({ query, module, limit }) => {
      try {
        const index = await getIndex();
        const hits = searchEntries(index.entries, query, { module, limit });
        if (hits.length === 0) {
          return textResult(`未找到与「${query}」相关的文档。可换关键词或先 list_modules。`);
        }
        const body = hits
          .map(
            (h, i) =>
              `${i + 1}. ${h.title}\n   模块: ${h.module}\n   路径: ${h.path}\n   摘要: ${h.summary.slice(0, 220)}`,
          )
          .join('\n\n');
        return textResult(
          `站点: ${getBaseUrl()}\n查询: ${query}\n结果 ${hits.length} 条：\n\n${body}\n\n用 get_page 并传入「路径」读取全文 Markdown。`,
        );
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    'get_page',
    {
      description:
        '按路径获取文档 Markdown 正文。路径来自 search_docs / list_symbols，如 /server/classes/Player。',
      inputSchema: {
        path: z
          .string()
          .describe('文档路径或完整 URL，例如 /server/classes/Player'),
      },
    },
    async ({ path }) => {
      try {
        const page = await fetchPageMarkdown(path);
        const max = 120_000;
        const md =
          page.markdown.length > max
            ? `${page.markdown.slice(0, max)}\n\n…（已截断，原文更长；可缩小范围或分段阅读）`
            : page.markdown;
        return textResult(`来源: ${getBaseUrl()}${page.path}\n\n${md}`);
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    'list_modules',
    {
      description: '列出文档站中的 API 模块（来自 llms.txt 二级标题）。',
      inputSchema: {},
    },
    async () => {
      try {
        const index = await getIndex();
        const lines = index.modules.map((m) => `- ${m}`);
        return textResult(
          `共 ${index.modules.length} 个模块（${getBaseUrl()}）：\n${lines.join('\n')}`,
        );
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    'list_symbols',
    {
      description: '列出某模块下的符号（类/接口/函数等）及文档路径。',
      inputSchema: {
        module: z.string().describe('模块名，如 server、server-ui、vanilla-data'),
        limit: z.number().int().min(1).max(200).optional().describe('最多返回条数，默认 80'),
      },
    },
    async ({ module, limit }) => {
      try {
        const index = await getIndex();
        const m = module.trim().toLowerCase();
        const matched = index.entries.filter(
          (e) =>
            e.module.toLowerCase() === m ||
            e.module.toLowerCase().includes(m) ||
            e.path.toLowerCase().startsWith(`/${m}/`) ||
            e.path.toLowerCase() === `/${m}`,
        );
        if (matched.length === 0) {
          return textResult(`模块「${module}」下无条目。请先 list_modules。`);
        }
        const max = Math.min(Math.max(limit ?? 80, 1), 200);
        const slice = matched.slice(0, max);
        const body = slice.map((e) => `- ${e.title} → ${e.path}`).join('\n');
        return textResult(
          `模块 ${module}：显示 ${slice.length}/${matched.length} 条\n${body}`,
        );
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    'get_llms_index',
    {
      description:
        '获取 llms.txt 索引。不传 module 时返回模块目录摘要；传入 module 时返回该模块段落。',
      inputSchema: {
        module: z.string().optional().describe('可选模块名'),
      },
    },
    async ({ module }) => {
      try {
        const text = await getLlmsSection(module);
        return textResult(text);
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  return server;
}
