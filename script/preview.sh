#!/bin/bash

# python-office.com VuePress 网站启动脚本 - 支持热加载

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_FILE="$SCRIPT_DIR/preview.log"

# 清空旧日志
> "$LOG_FILE"

# 日志写入函数
log() {
    echo -e "$1"
    echo -e "$1" | sed 's/\x1b\[[0-9;]*m//g' >> "$LOG_FILE"
}

echo -e "${CYAN}========================================${NC}"
echo -e "${CYAN}    启动 python-office.com (热加载模式)${NC}"
echo -e "${CYAN}========================================${NC}"
echo ""

# 进入 VuePress 目录
cd "$SCRIPT_DIR/docs-pages" || exit 1

# 检查并安装依赖
if [ ! -d "node_modules" ]; then
    log "${YELLOW}首次运行，正在安装依赖...${NC}"
    yarn install >> "$LOG_FILE" 2>&1
    log "${GREEN}✅ 依赖安装完成！${NC}"
    log ""
fi

# 清理缓存（避免修改不生效）
log "${YELLOW}🧹 清理缓存...${NC}"
rm -rf node_modules/.cache
rm -rf vuepress/.vuepress/dist
log "${GREEN}✅ 缓存已清理${NC}"
log ""

# 启动开发服务器（支持热加载）
log "${GREEN}🚀 正在启动预览服务器...${NC}"
log ""
log "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
log "${CYAN}📝 访问地址（注意 URL 里有 # 号）：${NC}"
log "${GREEN}   首页:        http://localhost:18001/${NC}"
log "${GREEN}   入门指南:    http://localhost:18001/#/guide/introduction${NC}"
log "${GREEN}   Word 文档:   http://localhost:18001/#/office/word${NC}"
log "${GREEN}   课程页:      http://localhost:18001/#/course/50-python-office${NC}"
log "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
log "${YELLOW}💡 因为 VuePress 0.14 dev server 使用 hash 路由，URL 必须加 #/${NC}"
log "${YELLOW}⏹️  按 Ctrl+C 停止${NC}"
log ""

yarn run dev 2>&1 | tee -a "$LOG_FILE"