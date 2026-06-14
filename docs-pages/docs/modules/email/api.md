---
title: Email API 参考
sidebar_position: 2
---

# 📧 Email API 参考

> 子库名：`poemail` | 安装：`pip install poemail`
> 导入：`import office` 或 `import poemail`

## send_email

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `key` | str | 是 | 邮箱授权码 |
| `msg_from` | str | 是 | 发件人 |
| `msg_to` | str | 是 | 收件人 |
| `msg_cc` | str | 否 | 抄送 |
| `attach_files` | list | 否 | 附件列表 |
| `msg_subject` | str | 否 | 主题 |
| `content` | str | 否 | 正文 |
| `host` | str | 否 | `qq` / `163` / `gmail` |
| `port` | int | 否 | 默认 465 |

## receive_email

接收邮件。

## 示例

```python
import office

office.email.send_email(
    key='your_auth_code',
    msg_from='your@qq.com',
    msg_to='target@qq.com',
    msg_subject='测试',
    content='Hello',
    attach_files=['./report.pdf']
)
```

- 📖 [使用指南 →](/modules/email/guide)
- 📦 [PyPI: poemail](https://pypi.org/project/poemail/)
