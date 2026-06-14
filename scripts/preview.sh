#!/bin/sh
# python-office.com VuePress 旧版预览脚本
# 用于 backup-main-2026 分支（Docusaurus 改造前）
# 用法：./scripts/preview.sh  或  sh scripts/preview.sh

if [ -t 1 ]; then
    GREEN='\033[0;32m'
    YELLOW='\033[1;33m'
    CYAN='\033[0;36m'
    RED='\033[0;31m'
    NC='\033[0m'
else
    GREEN=''; YELLOW=''; CYAN=''; RED=''; NC=''
fi

# 获取项目根目录
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

> "$LOG_FILE"

log() {
    printf '%b\n' "$1"
    printf '%s\n' "$1" | sed 's/\x1b\[[0-9;]*m//g' >> "$LOG_FILE"
}

die() {
    printf '%b\n' "${RED}❌ $1${NC}"
    exit 1
}

echo "${CYAN}========================================${NC}"
echo "${CYAN}    启动 python-office.com (VuePress)${NC}"
echo "${CYAN}========================================${NC}"
echo ""

[ -d "$DOCS_DIR" ] || die "找不到 docs-pages 目录：$DOCS_DIR"
cd "$DOCS_DIR" || die "无法进入目录：$DOCS_DIR"

# 确认是 VuePress 项目
if [ ! -d "vuepress" ]; then
    die "这不是 VuePress 项目！找不到 vuepress/ 目录"
fi

# 检查依赖
if [ ! -d "node_modules" ]; then
    log "${YELLOW}⏳ 首次运行，正在安装依赖（VuePress 推荐 yarn）...${NC}"
    if [ -f "yarn.lock" ] && command -v yarn >/dev/null 2>&1; then
        yarn install >> "$LOG_FILE" 2>&1
    else
        npm install >> "$LOG_FILE" 2>&1
    fi
    log "${GREEN}✅ 依赖安装完成！${NC}"
    log ""
fi

# 清理缓存
log "${YELLOW}🧹 清理缓存...${NC}"
rm -rf vuepress/.vuepress/cache
rm -rf vuepress/.vuepress/dist
rm -rf node_modules/.cache
log "${GREEN}✅ 缓存已清理${NC}"
log ""

# 启动 VuePress
log "${GREEN}🚀 正在启动 VuePress 开发服务器...${NC}"
log "${GREEN}   默认端口：8080  访问 http://localhost:8080/${NC}"
log ""

cd vuepress
yarn dev
