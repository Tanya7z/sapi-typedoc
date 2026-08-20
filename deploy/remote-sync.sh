#!/usr/bin/env bash
# 在目标服务器上解压并发布静态站点
set -euo pipefail

ARCHIVE="${1:-/tmp/doc_build.tar.gz}"
REMOTE_ROOT="${2:-/var/www/sapi-typedoc}"

if [[ ! -f "$ARCHIVE" ]]; then
  echo "archive not found: $ARCHIVE" >&2
  exit 1
fi

rm -rf /tmp/doc_build
mkdir -p /tmp/doc_build "$REMOTE_ROOT"
tar -xzf "$ARCHIVE" -C /tmp

if [[ ! -f /tmp/doc_build/index.html ]]; then
  echo "invalid archive: missing doc_build/index.html" >&2
  exit 1
fi

rsync -a --delete /tmp/doc_build/ "$REMOTE_ROOT"/
chown -R www-data:www-data "$REMOTE_ROOT"
rm -rf /tmp/doc_build "$ARCHIVE"

# 品牌图同步到图床，页面走 https://img.ovo7.cc/sapi/...
if command -v imgup >/dev/null 2>&1; then
  for name in logo.png sapi_cn_docs_logo.png sapi_cn_docs_title.png \
    rspress-icon.png rspress-light-logo.png rspress-dark-logo.png; do
    if [[ -f "$REMOTE_ROOT/$name" ]]; then
      imgup sapi "$REMOTE_ROOT/$name" >/dev/null
    fi
  done
fi

test -f "$REMOTE_ROOT/index.html"
echo "deploy_ok files=$(find "$REMOTE_ROOT" -type f | wc -l) size=$(du -sh "$REMOTE_ROOT" | cut -f1)"
