# 控件样式参考

Minecraft Wiki 的「按钮 / 搜索框 / 侧栏折叠 / 标签页」观感，**大部分是 CSS 画的**，不是单独的按钮贴图。

## 本目录

| 文件 | 说明 |
| --- | --- |
| `controls-styles-excerpt.css` | 从 Vector/Common 抽出的站点控件相关规则 |
| `source-Vector.css` / `source-Common.css` | 原始站点样式全文（对照用） |
| `source-mp-button.css` | 首页 `.mp-button` 立体斜面（`::after` + `hard-light`） |

## 与贴图的关系

可用的 CC BY-NC-SA 控件相关贴图（已在 `../vanilla/`）：

- `Vector-tabs*.png` — 顶栏标签页
- `Vector-tabs-first*.png` — 首标签特殊角
- `List_bullet.svg` — 列表点

不收录游戏原版 GUI 贴图；主题按钮用 CSS 仿制即可。

## 实现提示（Rspress）

1. 侧栏标题的 `conic-gradient` 石质倒角
2. 搜索框草地色边框（`--simplesearch-*`）
3. 标签页用 `Vector-tabs` 切片背景
4. 主按钮对齐 `.mp-button::after`：`inset` 灰阶阴影 + `mix-blend-mode: hard-light`（随底色染色），按下收束阴影并下沉
