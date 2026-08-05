---
title: MkDocs → Rspress 迁移设计
description: 将 sapi-typedoc 从 MkDocs Material 迁移到 Rspress + @rspress/plugin-typedoc 的完整规格（方案 C 对齐旧站体验）。
sidebar: false
outline: false
navbar: false
---

# MkDocs → Rspress 迁移设计

- **日期**：2026-08-06
- **状态**：待用户终审
- **旧项目**：`D:\#WorkPlace\#MCBEProjects\sapi-typedoc`
- **新项目**：`D:\WorkPlace\sapi-typedoc`
- **约束**：不以迁移原手写 docs 为主路径；以生成链路为准

---

## 1. 目标与非目标

### 1.1 目标

- 对齐旧站关键体验：模块导航、继承嵌套侧栏、领域分类、构造函数锚点、缩写、changelog 进站。
- 主路径为生成链路：`translate` → `typedoc` → `post-process` → `rspress`。
- 保留现有翻译 hooks / `setupTypeDoc`。
- 用 Rspress MDX / Tag / 容器 / Tabs / SourceCode / llms 等能力补齐并增强。
- frontmatter 写入可迁移的 search 权重字段（首期本地 FlexSearch；二期可接 Algolia/Typesense）。

### 1.2 非目标

- 不追求 MkDocs Material 皮肤/组件像素级一致。
- 不以迁入手写教程为主（`sync.md` 等仅在明确保留时纳入）。
- 首期不做中英双站。
- 首期不上 Algolia/Typesense（只预留权重字段与数据形状）。

---



## 2. 架构决策摘要


| 决策点            | 结论                                                                             |
| -------------- | ------------------------------------------------------------------------------ |
| 实现路径           | **B**：保留 `@rspress/plugin-typedoc` + 自研 post-typedoc Rspress 插件（`beforeBuild`） |
| 顶栏形态           | **②**：主模块顶栏 +「更多」                                                              |
| 主模块名单          | `server`、`server-ui`、`common`、`math`                                           |
| 搜索             | 首期本地 FlexSearch + frontmatter 权重；二期可换外部引擎                                      |
| `vanilla-data` | **加回**；**A**：ts-morph 扫 d.ts 写索引页；进「更多」；无一枚举一厚页                                |
| 领域索引           | 可筛选 MDX 页 + 页内 chips + 同领域相关 + searchHooks                                     |
| 生成页格式          | 成员页产出 `.mdx`，post 注入组件                                                         |


---



## 3. 生成流水线

```
build:translate
  → translated/*.d.ts + build-meta

syncDocsHome（并入默认 build / dev；无网走 cache）
  → docs/changelog/** + 首页 summary/changelog 块

rspress build/dev
  → plugin-typedoc（config 阶段）
      · 11 个模块 entryPoints（不含 vanilla-data）
      · setupTypeDoc：既有 TypeDoc hooks
  → 自研 post 插件（beforeBuild，注册在 typedoc 之后）
      · 模块导航 / 继承 _meta / frontmatter / MDX 增强
      · vanilla-data ts-morph 索引
      · 标签索引页与相关推荐数据
  → Rspress 编路由与 SSG（含 llms）
```



### 3.1 约定

- `dev` 与 `build` 共用同一 post 插件，避免「只在 CI 像旧站」。
- 生成 md/mdx、changelog 进 `.gitignore`（或标明勿手改）。
- 可提交：生成器、手写壳（`index.md` 标记块）、词表、领域规则配置、少量 `_meta` 手调壳（若需要）。
- `docs/superpowers/**` 为内部规格，必须 `route.exclude`，不对外发布。

---



## 4. 导航 / 侧栏



### 4.1 顶栏 `_nav.json`


| 入口                                         | 说明                                           |
| ------------------------------------------ | -------------------------------------------- |
| `server` / `server-ui` / `common` / `math` | 主模块，各一项                                      |
| 更多                                         | 下拉或落地页：其余 `@minecraft/*` + `vanilla-data` 索引 |
| 更新日志                                       | `/changelog/`                                |
| （可选）索引                                     | `/tags/`                                     |


新包默认进「更多」，避免顶栏膨胀。

### 4.2 模块侧栏

- 当前模块独立 `_meta.json`：kind 分组 + 成员列表。
- classes/interfaces：解析「继承」节建树，可折叠嵌套；**每 build 强制覆盖** `_meta`（不依赖 plugin-typedoc「只写一次」）。
- 原 `api/`：保留作缓存/跳转或对导航隐藏，避免双份顶栏入口。
- 不依赖根 `_meta.json` 吞掉分模块侧栏；changelog 用 `_nav` + `changelog/_meta.json`。

---



## 5. 内容增强（MDX / tags / search）



### 5.1 双轨标签


| 用途        | 字段                            | 展示                                |
| --------- | ----------------------------- | --------------------------------- |
| 侧栏 / 导航徽章 | Rspress `tag`                 | 仅状态：`deprecated`、`experimental` 等 |
| 领域分类      | `domainTags`（自定义 frontmatter） | 正文 chips；服务索引 / 搜索 / 相关推荐         |




### 5.2 领域分类（首期全做）

- **单一规则源**（如 `script/domain-tags.ts`）：驱动推断、图例、校验；移植并收紧旧 `DOMAIN_TAG_RULES`。
- `/tags/`：MDX 可筛选页（领域 × 模块 × kind）。
- **页内 chips**：成员页正文展示 `domainTags`。
- **同领域相关**：页底推荐（同 tag、限条数、优先同模块）。
- **推断质量**：收紧规则 + 排除表；build 输出未打标报告。
- `searchHooks`：把 `domainTags` 纳入可搜字段；frontmatter 保留权重字段供本地重排与二期外部引擎。



### 5.3 MDX / 格式（首期全做）


| 能力         | 做法                                                |
| ---------- | ------------------------------------------------- |
| 生成页        | 产出 `.mdx`，post 注入组件                               |
| 容器         | `:::tip` / `:::warning` / `:::details`（权限、弃用、长内容） |
| 长示例        | `@example` 过长时默认 `:::details` 折叠                  |
| Tabs       | 多示例或 stable/beta 对照（有内容才生成）                       |
| SourceCode | 链到声明来源（npm / 仓库路径策略固定）                            |
| 构造函数锚点     | 移植旧替换逻辑，核对标题语言                                    |
| 缩写         | `includes/abbreviations.md` + remark abbr，代码块内不误伤 |
| llms       | `llms: true`，产出 llms.txt 等                        |


手写壳页（首页、tags、说明）优先 `.mdx`。

---



## 6. `vanilla-data`

- **不**进入主 TypeDoc entryPoints（避免与 11 模块共用「一枚举一页」策略）。
- 辅轨：**ts-morph** 扫描 `translated/vanilla-data.d.ts`，生成模块/枚举**名称索引**页（可按字母分组）。
- 不展开枚举成员表、不生成每枚举独立厚页。
- 导航进「更多」；翻译低优先级。
- 回退阀：若仍明显拖慢 `dev`/`build`，允许改回完全排除或进一步降为纯名单。

---



## 7. changelog / CI

- 默认 `build` / `dev`：`build:translate` → `syncDocsHome` → `rspress`。
- 保证 changelog 目录与顶栏入口一致；修复根导航缺失导致的空操作。
- CI 无网：changelog / official-data cache 策略写清。
- `deploy.yml`：全量 build 后部署 `doc_build/`。
- `update-dts.yml`：更新 d.ts → commit 翻译与版本快照 → build → 部署；生成物不必强行入库。

---



## 8. 清理 MkDocs 残留

- 删除或隔离：`mkdocs.yml`、`.pages`、Material 专用资源、仅 MkDocs 脚本分支（确认无引用后）。
- README / 注释改为 Rspress 流水线说明。
- `writeMkdocsModuleTabs` 逻辑移植到 post 插件，不双轨维护。
- 保留：`translate-pieces/`、翻译流水线、`abbreviations` 词表、CI 意图。

---



## 9. 验收标准

1. 顶栏为主模块四件套 +「更多」；侧栏随模块切换；`vanilla-data` 在「更多」且仅为索引。
2. 抽样（如 `server`）classes/interfaces 继承嵌套与旧站同构（允许折叠 UI 差异）。
3. 成员页具备：领域 chips、状态侧栏徽章、同领域相关、构造函数锚点。
4. `/tags/` 可按领域 × 模块 × kind 筛选；规则单一源；存在未打标报告。
5. 搜索可命中 `domainTags`；frontmatter 含可迁移权重字段。
6. 缩写生效（代码块不误伤）；长示例可折叠；有内容处出现 Tabs / SourceCode。
7. `llms` 产出存在；`npm run build` 含 changelog；首页版本块非空。
8. 无 MkDocs 构建依赖；Rspress 死链检查通过。

---



## 10. 风险与注意

- `@rspress/plugin-typedoc` 在 `config` 写 md，且 `_meta.json` 默认只生成一次 → post 必须在 `beforeBuild` **强制覆盖**导航。
- 全局改 `membersWithOwnFile` 会影响所有模块 → `vanilla-data` 必须独立辅轨。
- 成员页改 `.mdx` 后需确认 TypeDoc/插件清理策略与 gitignore 模式（`**/*.mdx`）。
- 同领域推荐与标签索引依赖全量 frontmatter 扫描，注意 build 时长；可缓存增量。

---



## 11. 已否决 / 延后


| 项                                                            | 处理                |
| ------------------------------------------------------------ | ----------------- |
| 每模块一个顶栏（旧 MkDocs 全量 tabs）                                    | 否决；改用主模块 + 更多     |
| 首期 Algolia/Typesense                                         | 延后；预留权重字段         |
| `vanilla-data` 完整 TypeDoc 成员页                                | 否决；仅索引            |
| PackageManagerTabs / PageTabs / Prompt / Twoslash playground | 不纳入（与 SAPI 参考站不符） |
| 中英双站 / `sapi/original` 切换                                    | 延后                |


