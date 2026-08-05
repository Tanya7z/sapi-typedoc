# sapi-typedoc

Minecraft Script API 中文参考（Rspress + TypeDoc）。

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
