# 本地预览脚本（开发模式，热更新）
# 用法：./local_test.sh

cd docs-pages/

# 首次运行安装依赖，之后会自动跳过
if [ ! -d "node_modules" ]; then
    echo "📦 首次运行，安装依赖..."
    yarn install
fi

echo "🚀 启动本地预览服务器（热更新模式）..."
echo "📝 浏览器访问: http://localhost:18001"
echo "⏹️  按 Ctrl+C 停止"
echo ""

yarn run dev