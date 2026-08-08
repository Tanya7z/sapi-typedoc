# 阿里云部署

目标站点：`sapi.dogelake.cn`  
服务器静态目录：`/var/www/sapi-typedoc`

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
bash /root/setup-ssl.sh sapi.dogelake.cn 你的邮箱@example.com
```

证书由 `certbot.timer` 自动续期。

## DNS 建议（国内访问）

1. 把 `sapi` 的 A 记录改为服务器公网 IP
2. Cloudflare 代理务必设为 **DNS only（灰云）**；橙云代理国内常慢/不稳定
3. NS 目前在 Cloudflare 可以先保留；若仍不满意，再迁到阿里云 DNS / DNSPod
