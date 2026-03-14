# nvm use v16.20.2

# 执行 git pull 并检查是否有更新
pull_output=$(git pull 2>&1)

# 检查是否有更新
if echo "$pull_output" | grep -q "Already up to date\|Already up-to-date"; then
    echo "没有代码更新，跳过构建"
    exit 0
fi

cd docs-pages/
yarn run build
# /opt/software/node/node-v16.13.0-linux-x64/bin/yarn  build
rm -rf /opt/website/python-office.com/*
cp /opt/workplace/pro/python-office.com/dist/* /opt/website/python-office.com/ -R 