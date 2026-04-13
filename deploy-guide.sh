#!/bin/bash

# ============================================
# python-office 网站优化后部署指南
# ============================================

echo "🚀 开始构建和部署优化后的网站..."
echo ""

# 1. 检查 Node.js 版本
echo "📦 检查 Node.js 版本..."
node_version=$(node -v)
echo "✅ 当前 Node.js 版本：$node_version"
echo ""

# 2. 进入项目目录
echo "📂 进入项目目录..."
cd docs-pages/ || exit 1
echo ""

# 3. 安装依赖（如果需要）
echo "🔧 检查并安装依赖..."
if [ ! -d "node_modules" ]; then
    echo "首次运行，正在安装依赖..."
    yarn install
else
    echo "依赖已存在，跳过安装"
fi
echo ""

# 4. 本地测试（可选）
echo "💡 提示："
echo "   - 如需本地预览，请运行：yarn dev"
echo "   - 然后访问：http://localhost:18001"
echo ""

# 5. 构建生产版本
echo "🏗️  开始构建生产版本..."
yarn run build

if [ $? -eq 0 ]; then
    echo "✅ 构建成功！"
    echo ""
    
    # 6. 显示构建输出目录
    echo "📁 构建输出目录："
    ls -lh dist/ | head -10
    echo ""
    
    # 7. 显示文件大小统计
    echo "📊 构建文件统计："
    du -sh dist/
    find dist/ -type f | wc -l | xargs echo "文件总数:"
    echo ""
    
    echo "🎉 部署准备完成！"
    echo ""
    echo "📝 下一步操作："
    echo "   1. 将 dist/ 目录内容上传到服务器"
    echo "   2. 或者使用现有的部署脚本自动部署"
    echo "   3. 访问 https://www.python-office.com 查看效果"
    echo ""
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi
