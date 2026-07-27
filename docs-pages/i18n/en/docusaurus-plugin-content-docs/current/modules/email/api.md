---
title: Email API Reference
sidebar_position: 2
---

# 📧 Email API Reference

> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*



# 📧 Email API Reference

> Sub-package: `poemail` | Install: `pip install poemail`
> Import: `import office` or `import poemail`

## send_email

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | str | Yes | Email authorization code |
| `msg_from` | str | Yes | Sender |
| `msg_to` | str | Yes | Recipient |
| `msg_cc` | str | No | CC |
| `attach_files` | list | No | Attachment list |
| `msg_subject` | str | No | Subject |
| `content` | str | No | Body |
| `host` | str | No | `qq` / `163` / `gmail` |
| `port` | int | No | Default 465 |

## receive_email

Receive emails.

## Examples

```python
import office

office.email.send_email(
    key='your_auth_code',
    msg_from='your@qq.com',
    msg_to='target@qq.com',
    msg_subject='Test',
    content='Hello',
    attach_files=['./report.pdf']
)
```

- 📖 [Usage Guide →](/modules/email/guide)
- 📦 [PyPI: poemail](https://pypi.org/project/poemail/)