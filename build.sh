cd docs-pages/
npm run build
rm -rf /opt/website/python-office.com/*
cp /opt/workplace/pro/python-office.com/dist/* /opt/website/python-office.com/ -R 