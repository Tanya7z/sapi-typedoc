# 本地构建并把 doc_build 同步到阿里云服务器（ssh host: aliyun）
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
$Archive = Join-Path $PSScriptRoot "doc_build.tar.gz"
$RemoteHost = if ($env:SAPI_SSH_HOST) { $env:SAPI_SSH_HOST } else { "aliyun" }
$RemoteRoot = "/var/www/sapi-typedoc"

Set-Location $Root
Write-Host "==> build"
npm run build

Write-Host "==> pack"
if (Test-Path $Archive) { Remove-Item $Archive -Force }
tar -czf $Archive -C $Root doc_build

Write-Host "==> upload & extract -> ${RemoteHost}:${RemoteRoot}"
scp $Archive "${RemoteHost}:/tmp/doc_build.tar.gz"
ssh $RemoteHost @"
set -e
rm -rf /tmp/doc_build
mkdir -p /tmp/doc_build '$RemoteRoot'
tar -xzf /tmp/doc_build.tar.gz -C /tmp
rsync -a --delete /tmp/doc_build/ '$RemoteRoot'/
chown -R www-data:www-data '$RemoteRoot'
rm -rf /tmp/doc_build /tmp/doc_build.tar.gz
test -f '$RemoteRoot/index.html'
echo deploy_ok
"@

Remove-Item $Archive -Force
Write-Host "==> done"
