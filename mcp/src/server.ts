import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import * as z from 'zod/v4';
import {
  findExamples,
  findSymbols,
  formatExamples,
  formatSymbol,
  getApiIndex,
  getExamplesIndex,
  getVersionsIndex,
  searchByTag,
} from './api-index.js';
import {
  fetchPageMarkdown,
  getBaseUrl,
  getIndex,
  getLlmsSection,
} from './client.js';
import { buildScriptProject, formatScaffoldResult } from './scaffold.js';
import { searchEntries } from './search.js';

const SERVER_INSTRUCTIONS = `你是 Minecraft Script API（sapi.dogelake.cn）文档助手。

首次编写 / 项目初始化规则（必须遵守）：
1. 当用户要写 Script API、做脚本模组、初始化行为包/附加包工程，且工作区未见现成 BP 脚本工程时：
   - 先询问语言：JavaScript 或 TypeScript；推荐 TypeScript（类型与文档一致，更不易写错）。
   - 可顺带确认包名（默认 demo_pack）与模块（默认 server）。
   - 用户选定后调用 init_script_project，将返回的 FILE 区块写入工作区，再写业务代码。
2. 查 API 优先用 get_symbol / search_by_tag / get_examples；需要长说明再用 get_page。
3. 回答中的类型、权限（worldMutation / earlyExecution）、实验性标记以工具结果为准，勿臆造。`;

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
    version: '1.1.0',
    instructions: SERVER_INSTRUCTIONS,
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
          `站点: ${getBaseUrl()}\n查询: ${query}\n结果 ${hits.length} 条：\n\n${body}\n\n结构化详情用 get_symbol；全文用 get_page。`,
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
        '按路径获取文档 Markdown 正文。路径来自 search_docs / list_symbols / get_symbol，如 /server/classes/Player。',
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

  server.registerTool(
    'get_symbol',
    {
      description:
        '获取结构化符号信息：签名、成员、权限标签（worldMutation 等）、领域标签、实验性标记。优先于整页 Markdown。',
      inputSchema: {
        name: z.string().optional().describe('符号名，如 Player、World'),
        module: z.string().optional().describe('模块名，如 server'),
        path: z.string().optional().describe('文档路径，如 /server/classes/Player'),
        member: z.string().optional().describe('可选，只返回匹配的成员，如 teleport'),
      },
    },
    async ({ name, module, path, member }) => {
      try {
        if (!name && !path) {
          return textResult('请提供 name 或 path。');
        }
        const index = await getApiIndex();
        const hits = findSymbols(index, { name, module, path });
        if (hits.length === 0) {
          return textResult(
            `未找到符号。可先 search_docs 或 search_by_tag。站点: ${getBaseUrl()}`,
          );
        }
        // 精确名优先
        const exact = name
          ? hits.filter((h) => h.name.toLowerCase() === name.trim().toLowerCase())
          : hits;
        const list = (exact.length > 0 ? exact : hits).slice(0, 5);
        const body = list.map((s) => formatSymbol(s, { member })).join('\n\n---\n\n');
        return textResult(
          list.length > 1
            ? `匹配 ${list.length} 个符号（最多展示 5 个）：\n\n${body}`
            : body,
        );
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    'search_by_tag',
    {
      description:
        '按领域标签列出符号（event / player / block / component 等）。适合「有哪些玩家相关事件」类问题。',
      inputSchema: {
        tag: z.string().describe('领域标签，如 event、player、block'),
        module: z.string().optional().describe('可选模块过滤'),
        limit: z.number().int().min(1).max(200).optional().describe('默认 40'),
      },
    },
    async ({ tag, module, limit }) => {
      try {
        const index = await getApiIndex();
        const legendLine = index.legend
          .map((l) => `- ${l.tag}: ${l.meaning}`)
          .join('\n');
        const hits = searchByTag(index, tag, { module, limit });
        if (hits.length === 0) {
          return textResult(
            `标签「${tag}」下无符号。可用标签：\n${legendLine}`,
          );
        }
        const body = hits
          .map((s) => `- ${s.name} (${s.module}/${s.kind}) → ${s.path} [${s.tags.join(', ')}]`)
          .join('\n');
        return textResult(
          `标签 ${tag}：${hits.length} 条\n${body}\n\n用 get_symbol 查看签名。\n\n图例：\n${legendLine}`,
        );
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    'get_examples',
    {
      description: '按符号或关键词获取官方可粘贴示例代码。',
      inputSchema: {
        symbol: z
          .string()
          .optional()
          .describe('符号或成员路径，如 Player、Player.teleport、Block.hasTag'),
        module: z.string().optional().describe('模块名，与 symbol 合用'),
        keyword: z.string().optional().describe('文件名或代码关键词'),
        limit: z.number().int().min(1).max(20).optional().describe('默认 5'),
      },
    },
    async ({ symbol, module, keyword, limit }) => {
      try {
        const index = await getExamplesIndex();
        const examples = findExamples(index, { symbol, module, keyword, limit });
        return textResult(formatExamples(examples));
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    'get_versions',
    {
      description: '返回文档站锁定的 @minecraft/* 包版本，供依赖与 manifest 对齐。',
      inputSchema: {},
    },
    async () => {
      try {
        const versions = await getVersionsIndex();
        const lines = Object.entries(versions.packages).map(
          ([name, info]) =>
            `- ${name}: manifest=${info.manifest} locked=${info.locked}` +
            (info.stable ? ` stable=${info.stable}` : '') +
            (info.preview ? ` preview=${info.preview}` : ''),
        );
        return textResult(
          [
            `生成时间: ${versions.generatedAt}`,
            versions.gameVersion ? `游戏版本: ${versions.gameVersion}` : '',
            '',
            ...lines,
          ]
            .filter(Boolean)
            .join('\n'),
        );
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    'init_script_project',
    {
      description:
        '生成 Script API 行为包工程文件树（manifest、入口脚本、TS 工具链等）。只返回文件内容，由调用方写入磁盘。写入前若用户未选定语言，必须先询问 JS 或 TS（推荐 TS）。',
      inputSchema: {
        language: z.enum(['ts', 'js']).describe('ts（推荐）或 js'),
        packName: z
          .string()
          .optional()
          .describe('包名，默认 demo_pack'),
        modules: z
          .array(z.string())
          .optional()
          .describe('模块列表（无 @minecraft/ 前缀），默认 ["server"]'),
        track: z
          .enum(['preview', 'stable'])
          .optional()
          .describe('依赖轨道，默认 preview（与文档站锁定一致）'),
        includeEmptyResourcePack: z
          .boolean()
          .optional()
          .describe('是否附带空资源包，默认 false'),
      },
    },
    async ({ language, packName, modules, track, includeEmptyResourcePack }) => {
      try {
        const versions = await getVersionsIndex();
        const result = buildScriptProject(versions, {
          language,
          packName: packName ?? 'demo_pack',
          modules: modules ?? ['server'],
          track: track ?? 'preview',
          includeEmptyResourcePack: includeEmptyResourcePack ?? false,
        });
        return textResult(formatScaffoldResult(result));
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  return server;
}
