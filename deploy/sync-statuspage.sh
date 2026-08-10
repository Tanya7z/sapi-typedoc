#!/usr/bin/env bash
# Probe sapi.dogelake.cn from outside and sync result to Atlassian Statuspage.
# Required env: STATUSPAGE_API_KEY
set -euo pipefail

API_KEY="${STATUSPAGE_API_KEY:?STATUSPAGE_API_KEY is required}"
PAGE_ID="${STATUSPAGE_PAGE_ID:-qkgdl82ct4hx}"
COMPONENT_ID="${STATUSPAGE_COMPONENT_ID:-c9z3mztsf5xb}"
STATUS_PUBLIC="${STATUSPAGE_PUBLIC_URL:-https://ovo71.statuspage.io}"
SITE_URL="${SAPI_SITE_URL:-https://sapi.dogelake.cn}"
TIMEOUT="${PROBE_TIMEOUT_SEC:-20}"

http_code() {
  local url="$1"
  curl -sS -o /dev/null -w "%{http_code}" --max-time "$TIMEOUT" "$url" 2>/dev/null || echo "000"
}

mcp_code() {
  curl -sS -o /dev/null -w "%{http_code}" --max-time "$TIMEOUT" \
    -X POST "${SITE_URL}/mcp" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json, text/event-stream" \
    --data-binary '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"statuspage-sync","version":"0.0.0"}}}' \
    2>/dev/null || echo "000"
}

is_2xx() {
  [[ "$1" =~ ^2[0-9][0-9]$ ]]
}

site_home="$(http_code "${SITE_URL}/")"
site_llms="$(http_code "${SITE_URL}/llms.txt")"
mcp="$(mcp_code)"

site_ok=false
mcp_ok=false
if is_2xx "$site_home" && is_2xx "$site_llms"; then
  site_ok=true
fi
if is_2xx "$mcp"; then
  mcp_ok=true
fi

desired="major_outage"
if $site_ok && $mcp_ok; then
  desired="operational"
elif $site_ok; then
  desired="partial_outage"
elif $mcp_ok; then
  desired="degraded_performance"
fi

echo "probe home=${site_home} llms=${site_llms} mcp=${mcp} -> desired=${desired}"

current="$(
  curl -sS --max-time "$TIMEOUT" "${STATUS_PUBLIC}/api/v2/components.json" \
    | python3 -c "
import json,sys
data=json.load(sys.stdin)
cid='${COMPONENT_ID}'
for c in data.get('components',[]):
    if c.get('id')==cid:
        print(c.get('status') or '')
        break
"
)"

if [[ -z "$current" ]]; then
  echo "warn: could not read current component status from public API" >&2
  current="unknown"
fi

echo "current=${current}"

if [[ "$current" == "$desired" ]]; then
  echo "unchanged; skip PATCH"
  exit 0
fi

resp="$(
  curl -sS --max-time "$TIMEOUT" -w "\n%{http_code}" \
    -X PATCH "https://api.statuspage.io/v1/pages/${PAGE_ID}/components/${COMPONENT_ID}" \
    -H "Authorization: OAuth ${API_KEY}" \
    -H "Content-Type: application/json" \
    -d "{\"component\":{\"status\":\"${desired}\"}}"
)"
body="$(printf '%s' "$resp" | sed '$d')"
code="$(printf '%s' "$resp" | tail -n1)"

echo "PATCH http=${code}"
if ! is_2xx "$code"; then
  echo "$body" >&2
  exit 1
fi

echo "updated ${COMPONENT_ID}: ${current} -> ${desired}"