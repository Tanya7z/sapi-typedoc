#!/usr/bin/env bash
# 在服务器上安装/更新 sapi-docs-mcp HTTP 服务
set -euo pipefail

APP_DIR=/opt/sapi-docs-mcp
SRC_TGZ="${1:-/tmp/sapi-docs-mcp.tgz}"

if [[ ! -f "$SRC_TGZ" ]]; then
  echo "missing archive: $SRC_TGZ" >&2
  exit 1
fi

mkdir -p "$APP_DIR"
rm -rf "$APP_DIR"/*
tar -xzf "$SRC_TGZ" -C "$APP_DIR"

cd "$APP_DIR"
if [[ -f package-lock.json ]]; then
  npm ci --omit=dev
else
  npm install --omit=dev
fi

# 若产物未打进包，则在服务器构建
if [[ ! -f dist/http.js ]]; then
  npm install
  npm run build
  npm prune --omit=dev
fi

install -m 644 /tmp/sapi-docs-mcp.service /etc/systemd/system/sapi-docs-mcp.service
systemctl daemon-reload
systemctl enable --now sapi-docs-mcp.service
systemctl restart sapi-docs-mcp.service
sleep 1
systemctl --no-pager --full status sapi-docs-mcp.service | head -20
curl -sS "http://127.0.0.1:3921/health"
echo
echo mcp_http_ok
