# 阿里云部署

目标站点：`https://sapi.dogelake.cn/`（备用：`sapi.ovo7.cc`，需备案通过后再接入）  
服务器静态目录：`/var/www/sapi-typedoc`  
续期通知邮箱：`hi@ovo7.cc`

## 本地发布

```powershell
.\deploy\deploy.ps1
# 已有 doc_build 时跳过构建
.\deploy\deploy.ps1 -SkipBuild
```

## CI 发布

`.github/workflows/deploy.yml` 会在 `main` 推送或手动触发时：

1. 构建站点
2. 部署到 GitHub Pages（兼容旧入口）
3. 通过 SSH 同步到阿里云

需要仓库 Secrets：

| Secret | 说明 |
|--------|------|
| `DEPLOY_SSH_KEY` | 服务器登录私钥（PEM） |
| `DEPLOY_HOST` | 如 `139.224.226.83` |
| `DEPLOY_USER` | 如 `root` |

## HTTPS（Let's Encrypt）

域名 A 记录指向服务器，且 Cloudflare **关闭代理（仅 DNS）** 后：

```bash
ssh aliyun
bash /root/setup-ssl.sh sapi.dogelake.cn hi@ovo7.cc
```

证书由 `certbot.timer` 自动续期。

## SEO / AI

构建会生成 `robots.txt`、`sitemap.xml`，并在 `llms.txt` 头部注入训练许可说明。

部署后建议：

1. [Google Search Console](https://search.google.com/search-console) 提交 `https://sapi.dogelake.cn/sitemap.xml`
2. [百度搜索资源平台](https://ziyuan.baidu.com/) 验证域名并提交 sitemap
3. 授权说明页：`/ai-use.html`

## Statuspage（运行状态）

公开状态页：https://ovo71.statuspage.io/  
组件 `SAPI DOCS` id：`c9z3mztsf5xb`（page id：`qkgdl82ct4hx`）

同步方式：GitHub Actions 工作流 `Statuspage Sync` 每 5 分钟从**站外**探活：

| 探测 | 结果映射 |
|------|----------|
| 首页 + `/llms.txt` 与 `/mcp` 均正常 | `operational` |
| 文档站正常、MCP 失败 | `partial_outage` |
| MCP 正常、文档站失败 | `degraded_performance` |
| 两者都失败 | `major_outage` |

状态未变化时不调用 PATCH，避免刷屏。

### 一次性配置

1. Statuspage 控制台右上角头像 → **API info** → 创建 API key（名称如 `sapi-typedoc-ci`）
2. 仓库 Secrets 增加 `STATUSPAGE_API_KEY`
3. Actions → **Statuspage Sync** → Run workflow 手动跑一次验证

本地也可：

```bash
export STATUSPAGE_API_KEY=你的密钥
bash deploy/sync-statuspage.sh
```

## DNS 建议（国内访问）

1. 把 `sapi` 的 A 记录改为服务器公网 IP
2. Cloudflare 代理务必设为 **DNS only（灰云）**；橙云代理国内常慢/不稳定
3. NS 目前在 Cloudflare 可以先保留；若仍不满意，再迁到阿里云 DNS / DNSPod
