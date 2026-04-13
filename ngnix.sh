git pull
rm -rf /opt/website/python-office.com/*
cp /opt/workplace/pro/python-office.com/dist/* /opt/website/python-office.com/ -R
python3 url.py
