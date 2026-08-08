---
title: MCP
description: 用 MCP 让 AI 检索本站 Minecraft Script API 中文文档，并初始化脚本工程脚手架。
---

# MCP

本站提供 **sapi-docs** MCP 服务，让 Cursor、Claude、VS Code 等支持 MCP 的 AI 客户端直接：

- 搜索中文 Script API 文档（类、事件、接口等）
- 按路径读取 Markdown 正文
- 浏览模块与符号列表
- **结构化查询**符号签名、权限标签、领域标签与实验性差异
- 获取官方示例
- **初始化**行为包脚本工程（JS / TS 工具链）

数据来自本站公开文档与构建期混合索引（`/mcp/api-index.json` 等），无需克隆仓库。

## 安装

把下面这句话发给你的 AI 即可：

```text
请帮我安装Minecraft Scripts API 中文文档 MCP：https://sapi.dogelake.cn/mcp-install.md
```

AI 会按该说明优先连接远程 `https://sapi.dogelake.cn/mcp`；连不上时再回退到本地 `npx -y sapi-docs-mcp`。

## 首次写脚本时

若工作区还没有行为包脚本工程，AI 应先询问 **JavaScript 或 TypeScript（推荐 TS）**，再调用 `init_script_project` 生成模板与工作流，然后才写业务代码。
