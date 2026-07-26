# 同步与更新

## 维护策略

数据源固定为：

| 内容 | 官方来源 |
|------|----------|
| `.d.ts` 与 npm 版本 | [npm `@minecraft/*`](https://www.npmjs.com/search?q=scope%3Aminecraft) |
| API 更新日志 | [MicrosoftDocs/minecraft-creator](https://github.com/MicrosoftDocs/minecraft-creator/tree/main/creator/ScriptAPI/minecraft) |
| 在线原文 | [Microsoft Learn Script API](https://learn.microsoft.com/minecraft/creator/scriptapi/) |

## 官方最新 .d.ts

`original/package.json` 使用 `latest` / `beta` / `preview` 标签。`npm run update` 会：

1. （默认）检出 `original` 分支  
2. `npm install` 拉取当前标签解析到的具体版本  
3. 切分声明到 `translate-pieces/`  
4. 写入 `translated/package.json` 版本快照  

CI / 不想切分支时：

```bash
npm run update:ci
# 或
SAPI_UPDATE_SKIP_CHECKOUT=1 npm run update
```

## 首页自动同步

首页的 **NPM 包版本表** 与 **更新日志** 为自动生成：

- 版本表读取 npm 安装后写入的 `translated/package.json` 快照；
- 每个包同时拉取 npm **稳定版（`latest`）** 与 **预览版（`rc` → `preview` → `beta`）**；
- 正文来自 `MicrosoftDocs/minecraft-creator` 官方 changelog；完整内容写到 `docs/changelog/`，出现在首页侧栏；
- 若 npm 预览版本尚未被 MicrosoftDocs 收录，回退到同轨道最近官方条目，并标注近似匹配；
- 每个模块页附「版本对应」表：由 npm 已发布版本号推断各 API 版本对应的稳定 / 预览分支 MC 版本与首次发布日期（如 `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC `1.26.50.20`），不依赖 Learn 的更新节奏；
- 拉取失败时可复用 `cache/official-changelogs/` 与 `cache/npm-packuments/` 本地缓存。

| 时机 | 行为 |
|------|------|
| `npm run update` / `update:ci` / `docs:sync` | 刷新首页与 `docs/changelog/` |
| `npm run build:md` / `docs:build` | 构建前再同步一次（与 TypeDoc 并行；6h 内复用 `cache/`） |
| **Weekly Update & Deploy**（每周一） | CI 拉最新 d.ts、提交数据变更，并重建部署站点 |
| `SAPI_SKIP_DOCS_SYNC=1` | 跳过首页/更新日志网络同步（本地快速迭代） |
| `SAPI_FORCE_FETCH=1` | 忽略官方元数据缓存，强制重新拉取 |

> 侧栏「类 / 接口」按本模块内继承关系嵌套（父在上、子可展开）；图标一律使用 Material 原版 `icon` front matter。搜索结果通过页面 `search.boost` 按继承深度加权（父类高于子类）。

## 构建产物

| 命令 | 产物 |
|------|------|
| `npm run build` | TypeDoc HTML → `dist/`（本地/兼容用，**不**进 Pages） |
| `npm run build:md` | TypeDoc Markdown → `docs/api/`（不含 vanilla-data；TypeAlias/Variable 并入模块页） |
| `npm run build:both` | HTML + Markdown |
| `npm run docs:serve` | 本地预览（复用已有 `docs/api`；`--rebuild` / `docs:serve:rebuild` 强制重生成） |
| `npm run docs:build` | `build:md` + MkDocs → `site/`（**GitHub Pages 唯一产物**） |
