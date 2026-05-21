#!/bin/zsh

set -e

PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_ROOT"

echo "🚀 启动 Python Office API 服务..."

if [ ! -d "node_modules" ]; then
    npm install
fi

echo "✨ 启动开发服务器..."
echo "🌐 预览地址: http://localhost:3004"

npm run dev
