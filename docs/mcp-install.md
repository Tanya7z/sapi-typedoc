---
title: MCP 安装说明（给 AI）
description: 将 sapi-docs MCP 安装到当前环境：优先远程 HTTPS，失败则回退 npx 本地 stdio。
---

# MCP 安装说明（给 AI Agent）

你是安装助手。目标：把 **Minecraft Script API 中文文档 MCP（sapi-docs）** 安装到用户当前的 AI 客户端，使工具 `search_docs` / `get_page` / `list_modules` / `list_symbols` / `get_llms_index` 可用。

**不要向用户推销。按下列步骤直接改配置并验证。**

## 决策树（必须遵守）

1. **优先远程（Streamable HTTP）**  
   URL：`https://sapi.dogelake.cn/mcp`
2. **若出现以下任一情况，立即回退本地 npm（stdio）**：
   - 远程探测失败（超时、DNS、非 2xx、TLS 错误）
   - 客户端不支持 `url` 型 MCP，只支持 `command`/`args`
   - 用户明确要求离线/本地
3. 回退命令：`npx -y sapi-docs-mcp`（需本机 Node.js ≥ 20）

远程探测（可选，有网络时执行）：

```bash
curl -sS -o /dev/null -w "%{http_code}" -X POST "https://sapi.dogelake.cn/mcp" -H "Content-Type: application/json" -H "Accept: application/json, text/event-stream" -d "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"initialize\",\"params\":{\"protocolVersion\":\"2024-11-05\",\"capabilities\":{},\"clientInfo\":{\"name\":\"probe\",\"version\":\"0.0.0\"}}}"
```

能返回 HTTP 2xx/4xx（有 MCP 响应体）即可视为端点可达；完全连不上再走 npm。

## 配置片段

把下列片段合并进客户端的 MCP 配置（保留用户已有的其他 server）。

### A. 远程（优先）

```json
{
  "mcpServers": {
    "sapi-docs": {
      "url": "https://sapi.dogelake.cn/mcp"
    }
  }
}
```

### B. 本地 npm（回退）

```json
{
  "mcpServers": {
    "sapi-docs": {
      "command": "npx",
      "args": ["-y", "sapi-docs-mcp"]
    }
  }
}
```

### 各客户端文件位置

| 客户端 | 配置文件 |
| --- | --- |
| Cursor | 项目 `.cursor/mcp.json` 或用户目录 `~/.cursor/mcp.json`（Windows：`%USERPROFILE%\.cursor\mcp.json`） |
| Claude Desktop | macOS：`~/Library/Application Support/Claude/claude_desktop_config.json`；Windows：`%APPDATA%\Claude\claude_desktop_config.json` |
| VS Code / Copilot | 用户或工作区 MCP 配置（常见 `.vscode/mcp.json`，字段可能为 `servers`；按客户端文档把 `url` 或 `command` 写进去） |
| 其他 MCP 客户端 | 使用标准字段：`url` **或** `command` + `args` |

若客户端 schema 使用 `servers` 而非 `mcpServers`，保持相同 server 名 `sapi-docs` 与同等 `url`/`command` 内容即可。

## Cursor 一键链接（人类可选）

- 远程：`cursor://anysphere.cursor-deeplink/mcp/install?name=sapi-docs&config=eyJ1cmwiOiJodHRwczovL3NhcGkuZG9nZWxha2UuY24vbWNwIn0=`
- 本地：`cursor://anysphere.cursor-deeplink/mcp/install?name=sapi-docs&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInNhcGktZG9jcy1tY3AiXX0=`

主路径仍是改配置文件；deeplink 仅作快捷方式。

## 安装后验证

1. 重新加载 MCP / 重启客户端（若需要）。
2. 确认工具列表含：`search_docs`、`get_page`、`list_modules`、`list_symbols`、`get_llms_index`。
3. 冒烟调用：`search_docs`，参数 `query: "Player"`；再 `get_page`，参数 `path: "/server/classes/Player"`（若搜索结果路径不同则以搜索为准）。

## 工具说明（装好后如何用）

| 工具 | 用途 |
| --- | --- |
| `search_docs` | 按关键词搜索 API 文档 |
| `get_page` | 按路径取 Markdown 全文 |
| `list_modules` | 列出模块 |
| `list_symbols` | 列出模块内符号与路径 |
| `get_llms_index` | 读取 llms 索引摘要或某模块段落 |

文档站：https://sapi.dogelake.cn/  
完整 llms 索引：https://sapi.dogelake.cn/llms.txt  
npm 包：`sapi-docs-mcp`

## 给用户的最短提示（可复制）

```text
请帮我安装Minecraft Scripts API 中文文档 MCP：https://sapi.dogelake.cn/mcp-install.md
```
