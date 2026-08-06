# sapi-typedoc

Minecraft Script API 中文参考（Rspress + TypeDoc）。

## 许可

- **代码**：MIT（见 `package.json`）
- **主题皮肤贴图**（`theme/assets/minecraft-wiki-skin/`）：[CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/)，来自 [Minecraft Wiki](https://minecraft.wiki/) 社区界面皮肤。署名与文件清单见该目录下 [NOTICE.md](theme/assets/minecraft-wiki-skin/NOTICE.md)、[README.md](theme/assets/minecraft-wiki-skin/README.md)。

本项目为非商业开源文档站；皮肤目录不含 Mojang 游戏原版贴图。

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

本地预览生产构建：

```bash
npm run preview
```

流水线：`translate` → `docs:sync` → Rspress（typedoc + post 插件）。

| 脚本 | 作用 |
| --- | --- |
| `npm run build:translate` | 翻译官方 `.d.ts` 到 `translated/` |
| `npm run docs:sync` | 同步首页版本表与 changelog |
| `npm run update` | 拉取最新官方 d.ts 并刷新翻译产物 |
| `npm run dev` / `build` | 依次执行 translate、docs:sync，再启动 / 构建站点 |
