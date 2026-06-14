---
title: Tools 使用指南
description: 使用 python-office 的实用工具集
sidebar_position: 1
---

# 🛠️ Tools 模块使用指南

Tools 模块提供 10+ 个**日常实用工具**，包括翻译、二维码、密码生成等。

## 核心场景

### 翻译
```python
import office
result = office.tools.transtools(to_lang='en', content='你好，世界！')
print(result)  # Hello, World!
```

### 生成二维码
```python
office.tools.qrcodetools(
    url='https://www.python-office.com',
    output='./qrcode.png'
)
```

### 生成随机密码
```python
password = office.tools.passwordtools(len=16)
```

### URL 转 IP
```python
ip = office.tools.url2ip(url='www.baidu.com')
```

### 天气查询 / 网速测试 / WiFi 密码
```python
office.tools.weather()
office.tools.net_speed_test()
office.tools.pwd4wifi(len_pwd=8)
```

### AI 生成文章
```python
office.tools.create_article(theme='Python 自动化办公', line_num=200)
```

完整 API 见 [Tools API 参考](/modules/tools/api)
