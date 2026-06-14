#!/bin/bash
set -e

. ~/.nvm/nvm.sh
nvm use 20.20.2

# 执行 git pull 并检查是否有更新
pull_output=$(git pull 2>&1)
echo "$pull_output"

# 检查是否有更新
if echo "$pull_output" | grep -qE "Already up to date|Already up-to-date|Current branch .* is up to date"; then
    echo "没有代码更新，跳过构建"
    exit 0
fi

cd docs-pages/
yarn install
yarn run build
rm -rf /opt/website/opc-website/python-office.com/*
cp -R /opt/workplace/pro/opc-website/python-office.com/docs-pages/build/* /opt/website/opc-website/python-office.com/
