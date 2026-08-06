---
pageType: home

hero:
  name: Minecraft Script API
  text: 中文文档
  tagline: 基于官方 @minecraft/*.d.ts 自动生成，包含稳定版与预览版 API 参考
  actions:
    - theme: brand
      text: API 参考
      link: /server/
    - theme: alt
      text: 版本映射
      link: /versions/
    - theme: alt
      text: 更新日志
      link: /changelog/
    - theme: alt
      text: GitHub
      link: https://github.com/Tanya7z/sapi-typedoc
  image:
    src: /logo.png
    alt: Minecraft Script API 文档

features:
  - title: 全模块覆盖
    details: 涵盖 @minecraft/server、server-ui、server-net、server-editor 等官方 npm 包的完整 API。
    icon: 📦
    link: /server/
  - title: 中文本地化
    details: 通过 ts-morph 精确拆分 .d.ts 声明文件，逐段翻译后还原，保留类型完整性。
    icon: 🌐
  - title: 稳定 / 预览双轨道
    details: 同步 npm latest 与 rc/preview/beta 版本，标注对应 Minecraft 游戏版本号。
    icon: 🔄
    link: /versions/
  - title: 版本映射表
    details: 对照当前文档站锁定的 @minecraft/* npm 包版本与对应 Minecraft 游戏版本。
    icon: 📋
    link: /versions/
  - title: 标签索引
    details: 按 entity、block、ui 等领域标签筛选符号，快速定位相关 API。
    icon: 🏷️
    link: /tags/
  - title: LLM 增强
    details: 生成 llms.txt 与页面 Markdown，便于在 ChatGPT、Claude 等工具中引用文档。
    icon: ✨
  - title: 自动化更新
    details: GitHub Actions 每周自动拉取最新 .d.ts、翻译、构建并部署。
    icon: 🤖
---

# Minecraft Script API 中文文档

当前文档站锁定的 npm 包版本与对应游戏版本见[版本映射](/versions/)。

> `@minecraft/vanilla-data` 以[精简名称索引](/vanilla-data/)收录，不生成完整成员页。

## 更新日志

<!-- changelog start -->

每个 npm 包的**稳定版（latest）**与**预览版（rc / preview / beta）**完整更新日志已生成，见顶栏「更新日志」入口。

| 模块 | 稳定版 | 预览版 |
| --- | --- | --- |
| [@minecraft/server](./changelog/server.md) | `2.9.0` | `2.10.0-rc.1.26.50-preview.24` |
| [@minecraft/server-ui](./changelog/server-ui.md) | `2.1.0` | `2.2.0-rc.1.26.50-preview.24` |
| [@minecraft/server-net](./changelog/server-net.md) | `1.0.0-beta.11940b24` | `1.0.0-beta.1.26.50-preview.24` |
| [@minecraft/common](./changelog/common.md) | `1.3.0` | `1.3.0-rc.1.26.30-preview.26` |
| [@minecraft/debug-utilities](./changelog/debug-utilities.md) | `1.0.0-beta.1.20.70-preview.20` | `1.0.0-beta.1.26.50-preview.24` |
| [@minecraft/diagnostics](./changelog/diagnostics.md) | `1.0.0-beta.1.21.70-preview.22` | `1.0.0-beta.1.26.50-preview.24` |
| [@minecraft/server-admin](./changelog/server-admin.md) | `1.0.0-beta.11940b24` | `1.0.0-beta.1.26.50-preview.24` |
| [@minecraft/server-editor](./changelog/server-editor.md) | `0.1.0-beta.1.20.20-preview.20` | `0.1.0-beta.1.26.50-preview.24` |
| [@minecraft/server-gametest](./changelog/server-gametest.md) | `1.0.0-beta.1.21.60-preview.24` | `0.1.0-rc.1.21.40-preview.20` |
| [@minecraft/server-graphics](./changelog/server-graphics.md) | `1.0.0-beta.1.21.130-preview.22` | `1.0.0-beta.1.26.50-preview.24` |

> 正文来自 [MicrosoftDocs/minecraft-creator](https://github.com/MicrosoftDocs/minecraft-creator/tree/main/creator/ScriptAPI/minecraft)；若 npm 预览版本尚未收录，会回退到官方 changelog 中同轨道最近条目。

<!-- changelog end -->
