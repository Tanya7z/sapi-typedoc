---
title: MCP
description: 用 MCP 让 AI 直接检索本站 Minecraft Script API 中文文档；一句话即可安装。
---

# MCP

本站提供 **sapi-docs** MCP 服务，让 Cursor、Claude、VS Code 等支持 MCP 的 AI 客户端直接：

- 搜索中文 Script API 文档（类、事件、接口等）
- 按路径读取 Markdown 正文
- 浏览模块与符号列表

数据来自本站公开文档（含 `/llms.txt` 与各页 `.md` 导出），无需克隆仓库。

## 安装

把下面这句话发给你的 AI 即可：

```text
请帮我安装Minecraft Scripts API 中文文档 MCP：https://sapi.dogelake.cn/mcp-install.md
```

AI 会按该说明优先连接远程 `https://sapi.dogelake.cn/mcp`；连不上时再回退到本地 `npx -y sapi-docs-mcp`。
