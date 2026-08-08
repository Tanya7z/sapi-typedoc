# 本地构建并把 doc_build 同步到阿里云（默认 ssh host: aliyun）
# 用法:
#   .\deploy\deploy.ps1
#   .\deploy\deploy.ps1 -SkipBuild
#   .\deploy\deploy.ps1 -HostName aliyun -HealthUrl http://139.224.226.83/
param(
  [string]$HostName = $(if ($env:SAPI_SSH_HOST) { $env:SAPI_SSH_HOST } else { "aliyun" }),
  [string]$RemoteRoot = "/var/www/sapi-typedoc",
  [string]$HealthUrl = $(if ($env:SAPI_HEALTH_URL) { $env:SAPI_HEALTH_URL } else { "http://139.224.226.83/" }),
  [switch]$SkipBuild,
  [switch]$SkipHealthCheck
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
$Archive = Join-Path $PSScriptRoot "doc_build.tar.gz"
$SyncScript = Join-Path $PSScriptRoot "remote-sync.sh"

Set-Location $Root

if (-not $SkipBuild) {
  Write-Host "==> build"
  npm run build
} else {
  Write-Host "==> skip build"
}

if (-not (Test-Path (Join-Path $Root "doc_build\index.html"))) {
  throw "doc_build/index.html 不存在，请先构建或去掉 -SkipBuild"
}

Write-Host "==> pack"
if (Test-Path $Archive) { Remove-Item $Archive -Force }
tar -czf $Archive -C $Root doc_build
$mb = [math]::Round((Get-Item $Archive).Length / 1MB, 2)
Write-Host "    archive ${mb} MB"

Write-Host "==> upload archive + sync script -> ${HostName}"
scp $Archive "${HostName}:/tmp/doc_build.tar.gz"
scp $SyncScript "${HostName}:/tmp/remote-sync.sh"
# 防止 Windows CRLF 导致 bash 解析失败
ssh $HostName "sed -i 's/\r$//' /tmp/remote-sync.sh && chmod +x /tmp/remote-sync.sh"

Write-Host "==> remote extract"
ssh $HostName "bash /tmp/remote-sync.sh /tmp/doc_build.tar.gz '$RemoteRoot'"

Remove-Item $Archive -Force -ErrorAction SilentlyContinue

if (-not $SkipHealthCheck) {
  Write-Host "==> healthcheck $HealthUrl"
  $code = curl.exe -s -o NUL -w "%{http_code}" --max-time 20 $HealthUrl
  if ($code -ne "200") {
    throw "healthcheck failed: HTTP $code from $HealthUrl"
  }
  Write-Host "    HTTP $code"
}

Write-Host "==> done"
