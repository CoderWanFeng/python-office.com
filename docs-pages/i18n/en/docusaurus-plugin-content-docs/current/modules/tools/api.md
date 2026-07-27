---
title: Tools API Reference
sidebar_position: 2
---

# 🛠️ Tools API Reference

> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*



# 🛠️ Tools API Reference

> Sub-package: `wftools` (auto-installed with the main package)
> Import: `import office` or `import wftools`

## Function Overview

| Function | Description |
|----------|-------------|
| `transtools(to_lang, content, from_lang='zh')` | Multi-language translation |
| `qrcodetools(url, output)` | Generate QR code |
| `passwordtools(len=8)` | Random password |
| `weather()` | Weather query |
| `url2ip(url)` | URL to IP |
| `lottery8ticket()` | Lottery numbers |
| `create_article(theme, line_num=200)` | AI article generation |
| `pwd4wifi(len_pwd, pwd_list)` | WiFi password |
| `net_speed_test()` | Network speed test |
| `course()` | Project info |

## Examples

```python
import office

result = office.tools.transtools(to_lang='en', content='你好，世界！')
print(result)

office.tools.qrcodetools(url='https://www.python-office.com', output='./qrcode.png')

password = office.tools.passwordtools(len=16)
print(f"Password: {password}")
```

- 📖 [Usage Guide →](/modules/tools/guide)
- 📦 [PyPI: wftools](https://pypi.org/project/wftools/)