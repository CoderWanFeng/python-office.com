#!/bin/bash
# python-office.com 文档站预览脚本（Docusaurus 版）
# 用法：./scripts/preview.sh

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# 获取项目根目录
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DOCS_DIR="$PROJECT_ROOT/docs-pages"
LOG_FILE="$PROJECT_ROOT/scripts/preview.log"

# 清空旧日志
> "$LOG_FILE"

# 日志写入函数
log() {
    echo -e "$1"
    echo -e "$1" | sed 's/\x1b\[[0-9;]*m//g' >> "$LOG_FILE"
}

echo -e "${CYAN}========================================${NC}"
echo -e "${CYAN}    启动 python-office.com 文档站预览  ${NC}"
echo -e "${CYAN}========================================${NC}"
echo ""

# 进入 docs-pages 目录
cd "$DOCS_DIR" || { echo "❌ 找不到 docs-pages 目录"; exit 1; }

# 检查并安装依赖
if [ ! -d "node_modules" ]; then
    log "${YELLOW}⏳ 首次运行，正在安装依赖...${NC}"
    npm install >> "$LOG_FILE" 2>&1
    if [ $? -ne 0 ]; then
        log "${YELLOW}⚠️  npm install 失败，尝试使用 yarn...${NC}"
        yarn install >> "$LOG_FILE" 2>&1
    fi
    log "${GREEN}✅ 依赖安装完成！${NC}"
    log ""
fi

# 清理 Docusaurus 缓存
log "${YELLOW}🧹 清理缓存...${NC}"
rm -rf .docusaurus
rm -rf node_modules/.cache
log "${GREEN}✅ 缓存已清理${NC}"
log ""

# 启动开发服务器
log "${GREEN}🚀 正在启动 Docusaurus 开发服务器...${NC}"
log "${GREEN}   默认端口：3000  访问 http://localhost:3000/${NC}"
log ""

npx docusaurus start
