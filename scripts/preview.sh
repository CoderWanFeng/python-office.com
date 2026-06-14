#!/bin/sh
# python-office.com 文档站预览脚本（Docusaurus 版）
# 用于 main 分支（Docusaurus 文档站）
# 用法：./scripts/preview.sh  或  sh scripts/preview.sh

# 颜色定义（仅在交互式终端使用）
if [ -t 1 ]; then
    GREEN='\033[0;32m'
    YELLOW='\033[1;33m'
    CYAN='\033[0;36m'
    RED='\033[0;31m'
    NC='\033[0m'
else
    GREEN=''; YELLOW=''; CYAN=''; RED=''; NC=''
fi

# 获取项目根目录（兼容 sh 和 bash）
SCRIPT_PATH="$0"
case "$SCRIPT_PATH" in
    ./*) SCRIPT_PATH="$(pwd)/$(echo "$SCRIPT_PATH" | sed 's|^\./||')" ;;
    /*) ;;
    *)  SCRIPT_PATH="$(pwd)/$SCRIPT_PATH" ;;
esac
SCRIPT_DIR="$(cd "$(dirname "$SCRIPT_PATH")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DOCS_DIR="$PROJECT_ROOT/docs-pages"
LOG_FILE="$PROJECT_ROOT/scripts/preview.log"

# 清空旧日志
> "$LOG_FILE"

# 日志写入函数（POSIX 兼容）
log() {
    printf '%b\n' "$1"
    printf '%s\n' "$1" | sed 's/\x1b\[[0-9;]*m//g' >> "$LOG_FILE"
}

# 错误退出函数
die() {
    printf '%b\n' "${RED}❌ $1${NC}"
    exit 1
}

# 标题
echo "${CYAN}========================================${NC}"
echo "${CYAN}    启动 python-office.com 文档站预览  ${NC}"
echo "${CYAN}    技术栈：Docusaurus 3.x            ${NC}"
echo "${CYAN}========================================${NC}"
echo ""

# 进入 docs-pages 目录
[ -d "$DOCS_DIR" ] || die "找不到 docs-pages 目录：$DOCS_DIR"
cd "$DOCS_DIR" || die "无法进入目录：$DOCS_DIR"

# 确认是 Docusaurus 项目
if [ ! -f "docusaurus.config.ts" ] && [ ! -f "docusaurus.config.js" ]; then
    die "这不是 Docusaurus 项目！找不到 docusaurus.config.{ts,js}"
fi

# 检查 Node.js 版本（Docusaurus 3.x 需要 Node 18+）
NODE_VERSION=$(node --version 2>/dev/null | sed 's/v//')
NODE_MAJOR=$(echo "$NODE_VERSION" | cut -d. -f1)
if [ -z "$NODE_VERSION" ] || [ "$NODE_MAJOR" -lt 18 ]; then
    log "${YELLOW}⚠️  Node.js 版本 $NODE_VERSION 较低，建议升级到 18+${NC}"
fi

# 检查并安装依赖
if [ ! -d "node_modules" ]; then
    log "${YELLOW}⏳ 首次运行，正在安装依赖...${NC}"
    if [ -f "package-lock.json" ] && command -v npm >/dev/null 2>&1; then
        npm install >> "$LOG_FILE" 2>&1
    elif [ -f "yarn.lock" ] && command -v yarn >/dev/null 2>&1; then
        yarn install >> "$LOG_FILE" 2>&1
    else
        npm install >> "$LOG_FILE" 2>&1
    fi
    log "${GREEN}✅ 依赖安装完成！${NC}"
    log ""
fi

# 清理 Docusaurus 缓存
log "${YELLOW}🧹 清理缓存...${NC}"
rm -rf .docusaurus
rm -rf node_modules/.cache
rm -rf build
log "${GREEN}✅ 缓存已清理${NC}"
log ""

# 启动 Docusaurus 开发服务器
log "${GREEN}🚀 正在启动 Docusaurus 开发服务器...${NC}"
log "${GREEN}   默认端口：3000  访问 http://localhost:3000/${NC}"
log "${CYAN}   提示：按 Ctrl+C 停止服务${NC}"
log ""

npx docusaurus start
