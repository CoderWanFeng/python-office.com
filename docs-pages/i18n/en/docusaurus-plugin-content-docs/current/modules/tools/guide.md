---
title: Tools Guide
description: Translation, QR code, password, weather and 10+ other tools
sidebar_position: 1
---

# 🛠️ Tools Module Guide

> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*



# 🛠️ Tools Module Guide

The Tools module provides 10+ **everyday utilities**, including translation, QR code, password generation, etc.

## Core Scenarios

### Translation
```python
import office
result = office.tools.transtools(to_lang='en', content='你好，世界！')
print(result)  # Hello, World!
```

### Generate QR Code
```python
office.tools.qrcodetools(
    url='https://www.python-office.com',
    output='./qrcode.png'
)
```

### Generate Random Password
```python
password = office.tools.passwordtools(len=16)
```

### URL to IP
```python
ip = office.tools.url2ip(url='www.baidu.com')
```

### Weather / Network Speed Test / WiFi Password
```python
office.tools.weather()
office.tools.net_speed_test()
office.tools.pwd4wifi(len_pwd=8)
```

### AI Article Generation
```python
office.tools.create_article(theme='Python Office Automation', line_num=200)
```

Full API see [Tools API Reference](/modules/tools/api)