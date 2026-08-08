# 打包 mcp/ 并部署到阿里云 HTTP 服务
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
$McpDir = Join-Path $Root "mcp"
$Archive = Join-Path $PSScriptRoot "sapi-docs-mcp.tgz"
$HostName = if ($env:SAPI_SSH_HOST) { $env:SAPI_SSH_HOST } else { "aliyun" }

Set-Location $McpDir
Write-Host "==> build mcp"
npm run build

Write-Host "==> pack"
if (Test-Path $Archive) { Remove-Item $Archive -Force }
# 含 package.json / dist / README，不含 node_modules
tar -czf $Archive -C $McpDir package.json package-lock.json README.md dist

Write-Host "==> upload"
scp $Archive "${HostName}:/tmp/sapi-docs-mcp.tgz"
scp (Join-Path $PSScriptRoot "sapi-docs-mcp.service") "${HostName}:/tmp/sapi-docs-mcp.service"
scp (Join-Path $PSScriptRoot "deploy-mcp.sh") "${HostName}:/tmp/deploy-mcp.sh"
scp (Join-Path $PSScriptRoot "nginx-sapi-typedoc.conf") "${HostName}:/etc/nginx/sites-available/sapi-typedoc"

Write-Host "==> remote install"
ssh $HostName "sed -i 's/\r$//' /tmp/deploy-mcp.sh /tmp/sapi-docs-mcp.service && bash /tmp/deploy-mcp.sh /tmp/sapi-docs-mcp.tgz && nginx -t && systemctl reload nginx && echo nginx_reloaded"

Remove-Item $Archive -Force -ErrorAction SilentlyContinue
Write-Host "==> done"
