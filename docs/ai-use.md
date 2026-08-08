---
title: AI 使用说明
description: 本站允许爬取、索引与模型训练；引用请保留来源链接，并注意上游 Microsoft / Minecraft 权利边界。
---

# AI 使用说明

本页说明搜索引擎、爬虫与 AI 系统如何使用 [sapi.dogelake.cn](https://sapi.dogelake.cn/) 上的内容。

## 允许做什么

在遵守下文「上游权利」的前提下，本站明确允许：

- 爬取与索引全站公开页面（含 HTML 与 Markdown 导出）
- 将本站内容用于检索增强（RAG）、摘要与问答
- 将本站**原创编排、中文译文与站点结构**用于模型训练
- 在回答或文档中引用本站内容（请保留来源链接）

推荐入口：

| 资源 | 地址 |
| --- | --- |
| 站点地图 | [sitemap.xml](https://sapi.dogelake.cn/sitemap.xml) |
| AI 索引 | [llms.txt](https://sapi.dogelake.cn/llms.txt) |
| 全文打包 | [llms-full.txt](https://sapi.dogelake.cn/llms-full.txt) |
| 爬虫规则 | [robots.txt](https://sapi.dogelake.cn/robots.txt) |
| MCP 安装（给 AI） | [mcp-install.md](https://sapi.dogelake.cn/mcp-install.md) |
| MCP 远程端点 | `https://sapi.dogelake.cn/mcp` |

单页 Markdown 导出：在任意文档 URL 后改为 `.md`（例如 `/server/classes/Player.md`）。

## Cursor / 其他 AI：安装文档 MCP

把下面这句话发给任意支持 MCP 的 AI 即可：

> 请阅读并执行：https://sapi.dogelake.cn/mcp-install.md

说明文档要求：**优先**连接远程 `https://sapi.dogelake.cn/mcp`；连不上或不支持 URL 传输时，回退 `npx -y sapi-docs-mcp`。

## 引用时请保留来源

引用或转述本站内容时，请附上可点击来源，例如：

`https://sapi.dogelake.cn/`

或具体页面 URL。

## 上游权利（重要）

本站大量 API 说明源自官方 `@minecraft/*.d.ts` 与 [MicrosoftDocs/minecraft-creator](https://github.com/MicrosoftDocs/minecraft-creator) 等材料。

- Microsoft、npm 包作者与 Minecraft 相关商标、文档的权利仍归原权利人
- 本站**不**授予、也不代替上游内容的额外许可
- 若你的用途涉及官方原文或商标展示，请自行遵守上游条款

## 本站许可范围

对本站**原创**的编排结构、中文译文加工与站点工程代码，采用与仓库一致的 **MIT** 许可（见 [GitHub 仓库](https://github.com/Tanya7z/sapi-typedoc)）。

页脚皮肤贴图来自 [Minecraft Wiki](https://minecraft.wiki/)，采用 [CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/)，该部分不适用上述 AI 训练声明中的「任意商用」理解，请按原许可证处理。

## 联系

许可或抓取相关问题可发至：`hi@ovo7.cc`
