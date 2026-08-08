---
title: 版本映射
description: "各 @minecraft/* 包的 API 版本与 Minecraft 游戏版本对照；含当前文档站锁定版本。"
---

# 版本映射

数据来源：官方 npm [`@minecraft/*`](https://www.npmjs.com/search?q=scope%3Aminecraft) 已发布版本号。

## 当前文档站锁定版本

下列版本为构建本站文档时锁定的 `@minecraft/*` 依赖；完整历史对照见下文各包分表。

| 包名 | 当前文档版本 | 对应 MC 版本 | 本站更新日志 |
| --- | --- | --- | --- |
| [@minecraft/server](https://www.npmjs.com/package/@minecraft/server) | [`2.11.0-beta`](#minecraftserver) | `1.26.50.20` | [稳定/预览](/changelog/server) |
| [@minecraft/server-ui](https://www.npmjs.com/package/@minecraft/server-ui) | [`2.3.0-beta`](#minecraftserver-ui) | `1.26.50.20` | [稳定/预览](/changelog/server-ui) |
| [@minecraft/server-net](https://www.npmjs.com/package/@minecraft/server-net) | [`1.0.0-beta`](#minecraftserver-net) | `1.26.50.20` | [稳定/预览](/changelog/server-net) |
| [@minecraft/common](https://www.npmjs.com/package/@minecraft/common) | [`1.3.0`](#minecraftcommon) | - | [稳定/预览](/changelog/common) |
| [@minecraft/debug-utilities](https://www.npmjs.com/package/@minecraft/debug-utilities) | [`1.0.0-beta`](#minecraftdebug-utilities) | `1.26.50.20` | [稳定/预览](/changelog/debug-utilities) |
| [@minecraft/diagnostics](https://www.npmjs.com/package/@minecraft/diagnostics) | [`1.0.0-beta`](#minecraftdiagnostics) | `1.26.50.20` | [稳定/预览](/changelog/diagnostics) |
| [@minecraft/math](https://www.npmjs.com/package/@minecraft/math) | [`2.4.0`](#minecraftmath) | - | [模块文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/math/minecraft-math) |
| [@minecraft/server-admin](https://www.npmjs.com/package/@minecraft/server-admin) | [`1.0.0-beta`](#minecraftserver-admin) | `1.26.50.20` | [稳定/预览](/changelog/server-admin) |
| [@minecraft/server-editor](https://www.npmjs.com/package/@minecraft/server-editor) | [`0.1.0-beta`](#minecraftserver-editor) | `1.26.50.20` | [稳定/预览](/changelog/server-editor) |
| [@minecraft/server-gametest](https://www.npmjs.com/package/@minecraft/server-gametest) | [`1.0.0-beta`](#minecraftserver-gametest) | `1.26.50.20` | [稳定/预览](/changelog/server-gametest) |
| [@minecraft/server-graphics](https://www.npmjs.com/package/@minecraft/server-graphics) | [`1.0.0-beta`](#minecraftserver-graphics) | `1.26.50.20` | [稳定/预览](/changelog/server-graphics) |
| [@minecraft/vanilla-data](https://www.npmjs.com/package/@minecraft/vanilla-data) | [`1.26.50-preview.20`](#minecraftvanilla-data) | - | [模块文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/vanilla-data/minecraft-vanilla-data) |

由版本号推断的游戏版本号：`1.26.50.20`

> `@minecraft/vanilla-data` 以[精简名称索引](/vanilla-data/)收录，不生成完整成员页。

## 各包 API 版本对照

下表按包列出 npm 上出现过的 API 核心版本，以及能从版本号解析出的 Minecraft 稳定/预览分支。备注中的「文档站」对应当前本站锁定依赖所属的 API 核心版本。

### @minecraft/server {#minecraftserver}

[npm](https://www.npmjs.com/package/@minecraft/server) · [Learn](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/changelog) · [本站更新日志](/changelog/server)


> 由 npm 已发布版本号推断（如 `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC `1.26.50.20`）。

| API 版本 | 稳定分支 MC | 预览分支 MC | 首次发布 | 备注 |
| --- | --- | --- | --- | --- |
| `2.11.0` | - | `1.26.50.24` | 2026-07-21 | 文档站 |
| `2.10.0` | `1.26.43` | `1.26.50.24` | 2026-06-02 | 预览 |
| `2.9.0` | `1.26.36` | `1.26.50.22` | 2026-04-21 | 稳定 |
| `2.8.0` | `1.26.21` | `1.26.40.24` | 2026-03-10 | - |
| `2.7.0` | `1.26.14` | `1.26.30.26` | 2026-01-27 | - |
| `2.6.0` | `1.26.3` | `1.26.20.20` | 2025-12-03 | - |
| `2.5.0` | `1.21.132` | `1.26.10.22` | 2025-10-14 | - |
| `2.4.0` | `1.21.124` | `1.26.0.24` | 2025-09-03 | - |
| `2.3.0` | `1.21.114` | `1.21.130.22` | 2025-07-22 | - |
| `2.2.0` | `1.21.102` | `1.21.120.23` | 2025-06-10 | - |
| `2.1.0` | `1.21.95` | `1.21.110.22` | 2025-04-22 | - |
| `2.0.0` | `1.21.84` | `1.21.100.20` | 2025-01-30 | - |
| `1.19.0` | - | `1.21.90.21` | 2025-04-03 | - |
| `1.18.0` | `1.21.62` | `1.21.80.21` | 2024-11-21 | - |
| `1.17.0` | `1.21.51` | `1.21.70.22` | 2024-10-10 | - |
| `1.16.0` | `1.21.44` | `1.21.60.21` | 2024-09-04 | - |
| `1.15.0` | `1.21.31` | `1.21.50.24` | 2024-08-01 | - |
| `1.14.0` | `1.21.23` | `1.21.40.21` | 2024-06-27 | - |
| `1.13.0` | - | `1.21.30.22` | 2024-05-22 | - |
| `1.12.0` | `1.21.3` | `1.21.30.22` | 2024-04-03 | - |
| `1.11.0` | `1.20.80` | `1.21.10.23` | 2024-02-29 | - |
| `1.10.0` | `1.20.70` | `1.21.0.22` | 2024-01-24 | - |
| `1.9.0` | `1.20.60` | `1.20.80.21` | 2023-11-15 | - |
| `1.8.0` | `1.20.50` | `1.20.70.21` | 2023-10-11 | - |
| `1.7.0` | `1.20.40` | `1.20.60.21` | 2023-09-13 | - |
| `1.6.0` | `1.20.30` | `1.20.50.21` | 2023-08-03 | - |
| `1.5.0` | - | `1.20.40.21` | 2023-06-14 | - |
| `1.4.0` | `1.20.10` | `1.20.40.21` | 2023-05-11 | - |
| `1.3.0` | `1.20.0` | `1.20.20.20` | 2023-04-19 | - |
| `1.2.0` | `1.19.80` | `1.20.10.21` | 2023-03-08 | - |
| `1.1.0` | `1.19.70` | `1.20.0.22` | 2022-10-19 | - |
| `1.0.0` | - | `1.19.60.23` | 2022-09-27 | - |
| `0.0.1` | - | - | 2022-09-22 | - |

### @minecraft/server-ui {#minecraftserver-ui}

[npm](https://www.npmjs.com/package/@minecraft/server-ui) · [Learn](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-ui/changelog) · [本站更新日志](/changelog/server-ui)


> 由 npm 已发布版本号推断（如 `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC `1.26.50.20`）。

| API 版本 | 稳定分支 MC | 预览分支 MC | 首次发布 | 备注 |
| --- | --- | --- | --- | --- |
| `2.3.0` | - | `1.26.50.24` | 2026-07-21 | 文档站 |
| `2.2.0` | `1.26.43` | `1.26.50.24` | 2026-05-19 | 预览 |
| `2.1.0` | `1.26.21` | `1.26.40.24` | 2025-04-22 | 稳定 |
| `2.0.0` | `1.21.84` | `1.21.100.20` | 2025-01-30 | - |
| `1.4.0` | `1.21.62` | `1.21.60.28` | 2024-08-01 | - |
| `1.3.0` | `1.21.23` | `1.21.40.21` | 2024-06-12 | - |
| `1.2.0` | `1.21.3` | `1.21.30.22` | 2023-06-14 | - |
| `1.1.0` | `1.20.0` | `1.20.20.20` | 2023-04-19 | - |
| `1.0.0` | `1.19.80` | `1.20.10.21` | 2022-09-27 | - |

### @minecraft/server-net {#minecraftserver-net}

[npm](https://www.npmjs.com/package/@minecraft/server-net) · [Learn](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-net/changelog) · [本站更新日志](/changelog/server-net)


> 由 npm 已发布版本号推断（如 `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC `1.26.50.20`）。

| API 版本 | 稳定分支 MC | 预览分支 MC | 首次发布 | 备注 |
| --- | --- | --- | --- | --- |
| `1.0.0` | `1.26.43` | `1.26.50.24` | 2022-09-26 | 文档站 / 稳定 / 预览 |
| `0.0.1` | - | - | 2022-09-22 | - |

### @minecraft/common {#minecraftcommon}

[npm](https://www.npmjs.com/package/@minecraft/common) · [Learn](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/common/changelog) · [本站更新日志](/changelog/common)


> 由 npm 已发布版本号推断（如 `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC `1.26.50.20`）。

| API 版本 | 稳定分支 MC | 预览分支 MC | 首次发布 | 备注 |
| --- | --- | --- | --- | --- |
| `1.3.0` | - | `1.26.30.26` | 2026-03-25 | 文档站 / 稳定 / 预览 |
| `1.2.0` | - | `1.20.80.21` | 2024-01-24 | - |
| `1.1.0` | - | `1.20.60.21` | 2023-10-18 | - |
| `1.0.0` | - | `1.20.50.22` | 2023-09-27 | - |

### @minecraft/debug-utilities {#minecraftdebug-utilities}

[npm](https://www.npmjs.com/package/@minecraft/debug-utilities) · [Learn](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/debug-utilities/changelog) · [本站更新日志](/changelog/debug-utilities)


> 由 npm 已发布版本号推断（如 `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC `1.26.50.20`）。

| API 版本 | 稳定分支 MC | 预览分支 MC | 首次发布 | 备注 |
| --- | --- | --- | --- | --- |
| `1.0.0` | `1.26.43` | `1.26.50.24` | 2024-01-24 | 文档站 / 稳定 / 预览 |

### @minecraft/diagnostics {#minecraftdiagnostics}

[npm](https://www.npmjs.com/package/@minecraft/diagnostics) · [Learn](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/diagnostics/changelog) · [本站更新日志](/changelog/diagnostics)


> 由 npm 已发布版本号推断（如 `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC `1.26.50.20`）。

| API 版本 | 稳定分支 MC | 预览分支 MC | 首次发布 | 备注 |
| --- | --- | --- | --- | --- |
| `1.0.0` | `1.26.43` | `1.26.50.24` | 2025-02-05 | 文档站 / 稳定 / 预览 |

### @minecraft/math {#minecraftmath}

[npm](https://www.npmjs.com/package/@minecraft/math) · [Learn](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/math/minecraft-math)


> 由 npm 已发布版本号推断（如 `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC `1.26.50.20`）。

| API 版本 | 稳定分支 MC | 预览分支 MC | 首次发布 | 备注 |
| --- | --- | --- | --- | --- |
| `2.4.0` | - | - | 2026-02-25 | 文档站 |
| `2.3.1` | - | - | 2026-01-26 | - |
| `2.3.0` | - | - | 2026-01-13 | - |
| `2.2.11` | - | - | 2025-09-29 | - |
| `2.2.10` | - | - | 2025-09-10 | - |
| `2.2.9` | - | - | 2025-09-04 | - |
| `2.2.8` | - | - | 2025-07-24 | - |
| `2.2.7` | - | - | 2025-06-30 | - |
| `2.2.6` | - | - | 2025-05-23 | - |
| `2.2.5` | - | - | 2025-05-22 | - |
| `2.2.4` | - | - | 2025-04-28 | - |
| `2.2.3` | - | - | 2025-04-18 | - |
| `2.2.2` | - | - | 2025-04-14 | - |
| `2.2.1` | - | - | 2025-03-13 | - |
| `2.2.0` | - | - | 2025-02-28 | - |
| `2.1.0` | - | - | 2025-02-12 | - |
| `2.0.1` | - | - | 2025-01-09 | - |
| `2.0.0` | - | - | 2025-01-09 | - |
| `1.5.2` | - | - | 2024-12-25 | - |
| `1.5.1` | - | - | 2024-12-03 | - |
| `1.5.0` | - | - | 2024-11-26 | - |
| `1.4.2` | - | - | 2024-11-25 | - |
| `1.4.1` | - | - | 2024-11-25 | - |
| `1.4.0` | - | - | 2024-07-12 | - |
| `1.3.5` | - | - | 2024-03-18 | - |
| `1.3.4` | - | - | 2024-03-04 | - |
| `1.3.3` | - | - | 2024-03-01 | - |
| `1.3.2` | - | - | 2024-02-29 | - |
| `1.3.1` | - | - | 2024-02-27 | - |
| `1.3.0` | - | - | 2024-02-27 | - |
| `1.1.1` | - | - | 2024-02-27 | - |
| `1.1.0` | - | - | 2024-02-02 | - |
| `1.0.1` | - | - | 2024-01-29 | - |
| `1.0.0` | - | - | 2024-01-29 | - |

### @minecraft/server-admin {#minecraftserver-admin}

[npm](https://www.npmjs.com/package/@minecraft/server-admin) · [Learn](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-admin/changelog) · [本站更新日志](/changelog/server-admin)


> 由 npm 已发布版本号推断（如 `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC `1.26.50.20`）。

| API 版本 | 稳定分支 MC | 预览分支 MC | 首次发布 | 备注 |
| --- | --- | --- | --- | --- |
| `1.0.0` | `1.26.43` | `1.26.50.24` | 2022-09-27 | 文档站 / 稳定 / 预览 |

### @minecraft/server-editor {#minecraftserver-editor}

[npm](https://www.npmjs.com/package/@minecraft/server-editor) · [Learn](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-editor/changelog) · [本站更新日志](/changelog/server-editor)


> 由 npm 已发布版本号推断（如 `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC `1.26.50.20`）。

| API 版本 | 稳定分支 MC | 预览分支 MC | 首次发布 | 备注 |
| --- | --- | --- | --- | --- |
| `0.1.0` | `1.26.43` | `1.26.50.24` | 2023-06-28 | 文档站 / 稳定 / 预览 |

### @minecraft/server-gametest {#minecraftserver-gametest}

[npm](https://www.npmjs.com/package/@minecraft/server-gametest) · [Learn](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-gametest/changelog) · [本站更新日志](/changelog/server-gametest)


> 由 npm 已发布版本号推断（如 `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC `1.26.50.20`）。

| API 版本 | 稳定分支 MC | 预览分支 MC | 首次发布 | 备注 |
| --- | --- | --- | --- | --- |
| `1.0.0` | `1.26.43` | `1.26.50.24` | 2022-09-27 | 文档站 / 稳定 |
| `0.1.0` | - | `1.21.40.20` | 2024-08-19 | 预览 |

### @minecraft/server-graphics {#minecraftserver-graphics}

[npm](https://www.npmjs.com/package/@minecraft/server-graphics) · [Learn](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-graphics/changelog) · [本站更新日志](/changelog/server-graphics)


> 由 npm 已发布版本号推断（如 `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC `1.26.50.20`）。

| API 版本 | 稳定分支 MC | 预览分支 MC | 首次发布 | 备注 |
| --- | --- | --- | --- | --- |
| `1.0.0` | `1.26.43` | `1.26.50.24` | 2025-10-22 | 文档站 / 稳定 / 预览 |

### @minecraft/vanilla-data {#minecraftvanilla-data}

[npm](https://www.npmjs.com/package/@minecraft/vanilla-data) · [Learn](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/vanilla-data/minecraft-vanilla-data)


> 由 npm 已发布版本号推断（如 `2.9.0-rc.1.26.50-preview.20` → 预览分支 MC `1.26.50.20`）。

| API 版本 | 稳定分支 MC | 预览分支 MC | 首次发布 | 备注 |
| --- | --- | --- | --- | --- |
| `1.26.50` | - | - | 2026-07-21 | 文档站 |
| `1.26.40` | - | - | 2026-06-02 | - |
| `1.26.33` | - | - | 2026-07-09 | - |
| `1.26.32` | - | - | 2026-06-25 | - |
| `1.26.31` | - | - | 2026-06-19 | - |
| `1.26.30` | - | - | 2026-04-21 | - |
| `1.26.21` | - | - | 2026-05-14 | - |
| `1.26.20` | - | - | 2026-03-10 | - |
| `1.26.13` | - | - | 2026-04-06 | - |
| `1.26.12` | - | - | 2026-03-31 | - |
| `1.26.10` | - | - | 2026-01-27 | - |
| `1.26.2` | - | - | 2026-02-25 | - |
| `1.26.1` | - | - | 2026-02-19 | - |
| `1.26.0` | - | - | 2025-12-03 | - |
| `1.21.131` | - | - | 2025-12-16 | - |
| `1.21.130` | - | - | 2025-10-14 | - |
| `1.21.124` | - | - | 2025-11-21 | - |
| `1.21.123` | - | - | 2025-11-13 | - |
| `1.21.120` | - | - | 2025-09-03 | - |
| `1.21.114` | - | - | 2025-10-16 | - |
| `1.21.113` | - | - | 2025-10-09 | - |
| `1.21.111` | - | - | 2025-09-30 | - |
| `1.21.110` | - | - | 2025-07-22 | - |
| `1.21.101` | - | - | 2025-08-13 | - |
| `1.21.100` | - | - | 2025-06-10 | - |
| `1.21.93` | - | - | 2025-07-03 | - |
| `1.21.90` | - | - | 2025-04-22 | - |
| `1.21.81` | - | - | 2025-05-14 | - |
| `1.21.80` | - | - | 2025-03-11 | - |
| `1.21.70` | - | - | 2025-01-30 | - |
| `1.21.62` | - | - | 2025-02-25 | - |
| `1.21.61` | - | - | 2025-02-19 | - |
| `1.21.60` | - | - | 2024-11-21 | - |
| `1.21.50` | - | - | 2024-10-09 | - |
| `1.21.44` | - | - | 2024-10-31 | - |
| `1.21.43` | - | - | 2024-10-25 | - |
| `1.21.41` | - | - | 2024-10-22 | - |
| `1.21.40` | - | - | 2024-09-04 | - |
| `1.21.31` | - | - | 2024-09-30 | - |
| `1.21.30` | - | - | 2024-08-01 | - |
| `1.21.23` | - | - | 2024-09-03 | - |
| `1.21.22` | - | - | 2024-08-26 | - |
| `1.21.20` | - | - | 2024-06-27 | - |
| `1.21.10` | - | - | 2024-05-22 | - |
| `1.21.3` | - | - | 2024-07-15 | - |
| `1.21.2` | - | - | 2024-07-09 | - |
| `1.21.1` | - | - | 2024-06-20 | - |
| `1.21.0` | - | - | 2024-04-03 | - |
| `1.20.80` | - | - | 2024-02-29 | - |
| `1.20.70` | - | - | 2024-01-24 | - |
| `1.20.60` | - | - | 2023-11-15 | - |
| `1.20.50` | - | - | 2023-10-11 | - |
| `1.20.40` | - | - | 2023-09-07 | - |
| `1.20.30` | - | - | 2023-08-03 | - |
| `1.20.20` | - | - | 2023-06-14 | - |
| `1.20.10` | - | - | 2023-05-11 | - |
| `1.20.0` | - | - | 2023-04-19 | - |
| `1.19.80` | - | - | 2023-04-10 | - |

