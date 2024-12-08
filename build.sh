# nvm use v16.20.2git
cd docs-pages/
yarn run build
# /opt/software/node/node-v16.13.0-linux-x64/bin/yarn  build
rm -rf /opt/website/python-office.com/*
cp /opt/workplace/pro/python-office.com/dist/* /opt/website/python-office.com/ -R 