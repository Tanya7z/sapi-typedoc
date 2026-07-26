# Minecraft 脚本 API 文档（sapi-typedoc）

将官方 npm [`@minecraft/*`](https://www.npmjs.com/search?q=scope%3Aminecraft) 的 `.d.ts` 生成可查阅文档。

## 数据来源

.d.ts / 版本：npm @minecraft/*
更新日志：MicrosoftDocs/minecraft-creator
在线原文：Microsoft Learn
中文翻译：本仓库 translate-pieces/

- **上游 HTML 站**：[projectxero.top/sapi](https://projectxero.top/sapi/)
- **上游仓库**：[XeroAlpha/sapi-typedoc](https://github.com/XeroAlpha/sapi-typedoc)
- **本仓站点**: [sapi.dogelake.cn](sapi.dogelake.cn)

生成器：[TypeDoc](https://typedoc.org/) + [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org/) + [MkDocs Material](https://squidfunk.github.io/mkdocs-material/)

## 准备

```bash
npm install
pip install -r requirements-docs.txt
```

## 构建

```bash
# 完整站点（CI / 发布用）：build:md + mkdocs build → site/
npm run docs:build

# 本地预览（默认复用已有 docs/api，监听 translated/）
npm run docs:serve

# 预览时强制重跑 TypeDoc Markdown
npm run docs:serve:rebuild
```

按需拆分：

| 命令 | 作用 |
| ------ | ------ |
| `npm run build:md` | TypeDoc → `docs/api/`，再整理为顶层模块目录；同步首页与 `docs/changelog/` |
| `npm run docs:sync` | 只刷新首页版本表与更新日志（npm + MicrosoftDocs，不跑 TypeDoc） |
| `npm run build` | TypeDoc HTML → `dist/`（兼容用，**不**进 Pages） |
| `npm run build:both` | 同时产出 HTML + Markdown |

说明：`docs:serve` 若已有 `docs/api` 会跳过 TypeDoc；需要最新 API 页时用 `docs:serve:rebuild`，或设 `SAPI_FORCE_BUILD_MD=1`。

## 更新官方 .d.ts

> 默认会把分支切到 `original`。执行前请先提交本地更改。

```bash
npm run update
```

CI / 保持当前分支：

```bash
npm run update:ci
```

GitHub Actions：

| 工作流 | 触发 | 作用 |
| -------- | ------ | ------ |
| **Weekly Update & Deploy** | 每周一 08:00 UTC / 手动 | `update:ci` 拉官方 d.ts → 有变更则提交 main → `docs:build` 部署 Pages |
| **Deploy** | `main` 推送 / 手动 | `docs:build` → GitHub Pages（`site/`） |

## 目录摘要

| 路径 | 说明 |
| ------ | ------ |
| `original/` | 依赖声明（latest/beta/preview 标签） |
| `translated/` | 翻译后的聚合 d.ts + 版本快照 |
| `translate-pieces/` | 按符号切分的翻译单元 |
| `docs/` | MkDocs 源；`docs/api/` 为生成物 |
| `script/` | 构建 / 更新 CLI |
