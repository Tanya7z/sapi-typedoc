# sapi-docs-mcp

Minecraft Script API 中文文档 MCP 服务器。数据来自 [sapi.dogelake.cn](https://sapi.dogelake.cn/)。

## 安装（给 AI / 人类）

请优先阅读并执行：

**https://sapi.dogelake.cn/mcp-install.md**

## 能力

| 工具 | 说明 |
|------|------|
| `search_docs` / `get_page` / `list_*` / `get_llms_index` | 文档检索与全文 |
| `get_symbol` | 结构化签名、成员、权限、标签 |
| `search_by_tag` | 按领域标签发现 API |
| `get_examples` | 官方示例 |
| `get_versions` | 文档站锁定包版本 |
| `resolve_versions` | 按游戏版本解析推荐包版本 |
| `init_script_project` | JS/TS 行为包脚手架（可传 `gameVersion`） |

首次写脚本时，服务端 instructions 要求先询问 JS/TS（推荐 TS）与游戏版本，再初始化工程。

## 本地运行

```bash
npm install
npm run build
npm start          # stdio
npm run start:http # http://127.0.0.1:3921/mcp
```

环境变量：

| 变量 | 说明 |
|------|------|
| `SAPI_DOCS_BASE_URL` | 文档站根 URL，默认 `https://sapi.dogelake.cn` |
| `SAPI_MCP_INDEX_DIR` | 本地混合索引目录（含 `api-index.json` 等），优先于远程 `/mcp-data/` |
| `PORT` / `MCP_PORT` | HTTP 端口，默认 `3921` |
| `MCP_HOST` | 绑定地址，默认 `127.0.0.1` |
| `MCP_AUTH_TOKEN` | 可选；设置后要求 `Authorization: Bearer <token>` |

本地冒烟（需先在仓库根执行 `npm run mcp:index`）：

```bash
# PowerShell
$env:SAPI_MCP_INDEX_DIR="D:\path\to\sapi-typedoc\doc_build\mcp"
npx tsx scripts/smoke.ts
```
