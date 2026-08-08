#!/usr/bin/env bash
# 为域名申请/续期 Let's Encrypt 证书并写入 Nginx HTTPS
# 前置：域名 A 记录已指向本机，且 Cloudflare 代理为关闭（仅 DNS）
set -euo pipefail

DOMAIN="${1:-sapi.dogelake.cn}"
EMAIL="${2:-}"
WEB_ROOT="${3:-/var/www/sapi-typedoc}"
NGINX_SITE="/etc/nginx/sites-available/sapi-typedoc"

if [[ -z "$EMAIL" ]]; then
  echo "usage: $0 <domain> <email> [web_root]" >&2
  echo "example: $0 sapi.dogelake.cn you@example.com" >&2
  exit 1
fi

export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y -qq certbot python3-certbot-nginx

cat > "$NGINX_SITE" <<EOF
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name ${DOMAIN};

    root ${WEB_ROOT};
    index index.html;

    charset utf-8;
    server_tokens off;

    location ^~ /.well-known/acme-challenge/ {
        root ${WEB_ROOT};
        default_type "text/plain";
        try_files \$uri =404;
    }

    location / {
        try_files \$uri \$uri/ \$uri.html /index.html;
    }
}
EOF

ln -sfn "$NGINX_SITE" /etc/nginx/sites-enabled/sapi-typedoc
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

certbot --nginx \
  -d "$DOMAIN" \
  --non-interactive \
  --agree-tos \
  -m "$EMAIL" \
  --redirect \
  --keep-until-expiring

CERT_PATH="/etc/letsencrypt/live/${DOMAIN}"
cat > "$NGINX_SITE" <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN};
    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name ${DOMAIN};

    ssl_certificate ${CERT_PATH}/fullchain.pem;
    ssl_certificate_key ${CERT_PATH}/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    root ${WEB_ROOT};
    index index.html;

    charset utf-8;
    server_tokens off;

    gzip on;
    gzip_types text/plain text/css application/javascript application/json application/xml image/svg+xml;
    gzip_min_length 1024;

    location ^~ /.well-known/acme-challenge/ {
        root ${WEB_ROOT};
        default_type "text/plain";
        try_files \$uri =404;
    }

    location = /robots.txt {
        default_type text/plain;
        try_files \$uri =404;
    }

    location = /sitemap.xml {
        default_type application/xml;
        try_files \$uri =404;
    }

    location = /llms.txt {
        default_type text/plain;
        try_files \$uri =404;
    }

    location = /llms-full.txt {
        default_type text/plain;
        try_files \$uri =404;
    }

    location ~* \\.(?:js|css|png|jpg|jpeg|gif|svg|ico|woff2?)\$ {
        expires 7d;
        add_header Cache-Control "public, max-age=604800";
        try_files \$uri =404;
    }

    location ~* \\.md\$ {
        default_type text/markdown;
        charset utf-8;
        try_files \$uri =404;
    }

    location / {
        try_files \$uri \$uri/ \$uri.html /index.html;
    }
}
EOF

nginx -t
systemctl reload nginx

systemctl enable --now certbot.timer || true
systemctl list-timers --all | grep -i certbot || true

echo "ssl_ok https://${DOMAIN}/"