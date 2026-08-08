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

test -f "$REMOTE_ROOT/index.html"
echo "deploy_ok files=$(find "$REMOTE_ROOT" -type f | wc -l) size=$(du -sh "$REMOTE_ROOT" | cut -f1)"