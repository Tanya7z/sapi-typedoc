# Minecraft Wiki 皮肤贴图（预览用）

从 [zh.minecraft.wiki](https://zh.minecraft.wiki/) 拉取的 **vanilla（主 Minecraft）** 界面皮肤，供评估 Rspress 主题贴图方案。

许可与署名见 [LICENSE](./LICENSE)、[NOTICE.md](./NOTICE.md)。

## 目录结构

```text
minecraft-wiki-skin/
├── LICENSE / NOTICE.md / README.md
├── preview.html            # 本地打开可浏览贴图
├── controls/               # 搜索/侧栏/标签页等 CSS 摘录
├── catalog/                # Wiki logo 参考
└── vanilla/{light,dark}/   # CC BY-NC-SA 站点皮肤贴图
```

本地预览：

- `preview.html` — 贴图一览
- `docs-shell-preview.html` — **仿文档站布局的控件样板**（顶栏 / 侧栏 / 按钮 / 搜索 / 标签页）

## 已下载（vanilla）

### light — 用途对照

| 文件 | 典型用途 |
| --- | --- |
| `Header-background.png` / `-HiDPI` | 顶栏草地条纹理 |
| `Background.png` / `-HiDPI` | 页面 / 侧栏石质平铺底 |
| `Vector-tabs.png` / `-HiDPI` | 标签页背景 |
| `Vector-tabs-first.png` / `-HiDPI` | 首个标签页背景 |
| `Mobile-header.png` | 移动端顶栏 |
| `GrassBackground.png` | 部分组件草地底 |
| `List_bullet.svg` | 列表圆点 |

### dark

| 文件 | 对应 light |
| --- | --- |
| `Dark-header-background*.png` | Header-background |
| `Dark-background*.png` | Background |
| `Dark-vector-tabs*.png` | Vector-tabs |
| `Dark-mobile-header.png` | Mobile-header |
| `Dark-GrassBackground.png` | GrassBackground |

## 尚未下载的变体

Wiki 还有 Dungeons / Earth / Legends / Story Mode / 中国版 / 下界 / 冬季等主题皮肤。  
探测结果见 `available-variants.json`；需要时再按需拉取，避免仓库膨胀。

源工程工程文件（`.pdn` / `.kra` / `.blend`）见：  
<https://github.com/mc-wiki/assets/tree/master/skin-assets>
