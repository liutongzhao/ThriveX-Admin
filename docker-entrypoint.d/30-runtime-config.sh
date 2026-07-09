#!/bin/sh
set -eu

cat > /usr/share/nginx/html/config.json <<EOF
{
  "VITE_PROJECT_API": "${VITE_PROJECT_API:-/api}"
}
EOF
