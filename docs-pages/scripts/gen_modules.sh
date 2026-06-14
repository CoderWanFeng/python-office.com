#!/bin/bash
# 批量创建/重置所有模块的 guide.md 和 api.md
# 用法：在 docs-pages/docs/ 目录下执行 bash scripts/gen_modules.sh
set -e
cd "$(dirname "$0")/../docs/modules"

# 此脚本用于首次生成所有模块文档
# 已有内容不会被覆盖（如需重新生成，请删除对应文件）
echo "✅ 此脚本用于首次生成模块文档"
echo "当前目录: $(pwd)"
echo "现有模块："
ls
