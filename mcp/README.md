# sapi-docs-mcp

Minecraft Script API 中文文档 MCP 服务器。数据来自 [sapi.dogelake.cn](https://sapi.dogelake.cn/)。

## 安装（给 AI / 人类）

请优先阅读并执行：

**https://sapi.dogelake.cn/mcp-install.md**

## 本地运行

```bash
npm install
npm run build
npm start          # stdio
npm run start:http # http://127.0.0.1:3921/mcp
```

环境变量：

| 变量 | 说明 |
|------|------|
| `SAPI_DOCS_BASE_URL` | 文档站根 URL，默认 `https://sapi.dogelake.cn` |
| `PORT` / `MCP_PORT` | HTTP 端口，默认 `3921` |
| `MCP_HOST` | 绑定地址，默认 `127.0.0.1` |
| `MCP_AUTH_TOKEN` | 可选；设置后要求 `Authorization: Bearer <token>` |
