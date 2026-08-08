#!/usr/bin/env bash
set -euo pipefail
JSON=/tmp/probe-init.json

echo "== health =="
curl -sS http://127.0.0.1:3921/health
echo

echo "== local mcp =="
curl -sS -D - -o /tmp/mcp-local.out -X POST 'http://127.0.0.1:3921/mcp' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H 'Host: sapi.dogelake.cn' \
  --data-binary @"$JSON" | head -20
echo '----'
head -c 600 /tmp/mcp-local.out; echo

echo "== public https =="
curl -sS -D - -o /tmp/mcp-pub.out -X POST 'https://sapi.dogelake.cn/mcp' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  --data-binary @"$JSON" | head -25
echo '----'
head -c 600 /tmp/mcp-pub.out; echo
