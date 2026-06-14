---
title: Tools API 参考
sidebar_position: 2
---

# 🛠️ Tools API 参考

> 子库名：`wftools`（随主包自动安装）
> 导入：`import office` 或 `import wftools`

## 函数总览

| 函数 | 功能 |
|------|------|
| `transtools(to_lang, content, from_lang='zh')` | 多语言翻译 |
| `qrcodetools(url, output)` | 生成二维码 |
| `passwordtools(len=8)` | 随机密码 |
| `weather()` | 天气查询 |
| `url2ip(url)` | URL 转 IP |
| `lottery8ticket()` | 彩票号码 |
| `create_article(theme, line_num=200)` | AI 生成文章 |
| `pwd4wifi(len_pwd, pwd_list)` | WiFi 密码 |
| `net_speed_test()` | 网速测试 |
| `course()` | 项目信息 |

## 示例

```python
import office

result = office.tools.transtools(to_lang='en', content='你好，世界！')
print(result)

office.tools.qrcodetools(url='https://www.python-office.com', output='./qrcode.png')

password = office.tools.passwordtools(len=16)
print(f"密码：{password}")
```

- 📖 [使用指南 →](/modules/tools/guide)
- 📦 [PyPI: wftools](https://pypi.org/project/wftools/)
