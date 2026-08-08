---
title: MCP
description: 用 MCP 检索本站 Script API，查结构化签名与示例，并初始化 JS/TS 脚本工程。
---

# MCP

**sapi-docs** 让 Cursor / Claude / VS Code 等直接使用本站文档写脚本：

- 搜索与阅读 API 文档
- 查结构化签名、权限标签、领域标签与实验性差异
- 取官方示例；初始化行为包工程（JS / TS，推荐 TS）

数据来自本站公开页与 `/mcp-data/api-index.json` 等混合索引。远程优先；本地回退 `npx -y sapi-docs-mcp`。

## 安装

```text
请帮我安装Minecraft Scripts API 中文文档 MCP：https://sapi.dogelake.cn/mcp-install.md
```

远程端点：`https://sapi.dogelake.cn/mcp`。首次写脚本时，AI 应先询问 JS/TS（推荐 TS），再生成工程模板。
