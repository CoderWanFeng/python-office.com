#!/bin/bash
set -e

. ~/.nvm/nvm.sh
nvm use v16.20.2

# 执行 git pull 并检查是否有更新
pull_output=$(git pull --rebase --autostash 2>&1)
echo "$pull_output"

# 检查是否有更新
if echo "$pull_output" | grep -qE "Already up to date|Already up-to-date|Current branch .* is up to date"; then
    echo "没有代码更新，跳过构建"
    exit 0
fi

cd docs-pages/
yarn run build
# /opt/software/node/node-v16.13.0-linux-x64/bin/yarn  build
rsync -a --delete \
  --exclude='openclaw/' \
  --exclude='hermes/' \
  --exclude='ai-nav2/' \
  --exclude='how-to-opc/' \
  --exclude='how-to-digital-nomad/' \
  --exclude='opc/' \
  /opt/workplace/pro/opc-website/python-office.com/dist/ /opt/website/opc-website/python-office.com/
