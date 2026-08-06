---
title: Email Guide
description: "Email: auto-send (attachments, CC, mass), receive"
sidebar_position: 1
---

# 📧 Email Module Guide

The Email module enables **automatic sending and receiving of emails**, with support for attachments, CC, mass sending and other advanced features.

## Core Scenarios

### Send a Simple Email
```python
import office
office.email.send_email(
    key='your_email_authorization_code',
    msg_from='your@qq.com',
    msg_to='target@qq.com',
    msg_subject='Meeting Notice',
    content='Meeting at 3 PM tomorrow.'
)
```

### Send Email with Attachment
```python
office.email.send_email(
    key='your_email_authorization_code',
    msg_from='your@qq.com',
    msg_to='target@qq.com',
    msg_subject='Weekly Report',
    content='Please find attached this week\'s report.',
    attach_files=['./report.pdf', './data.xlsx']
)
```

### CC Multiple People
```python
office.email.send_email(
    key='your_email_authorization_code',
    msg_from='your@qq.com',
    msg_to='primary@qq.com',
    msg_cc='cc1@qq.com, cc2@qq.com',
    msg_subject='Project Meeting',
    content='Meeting at 3 PM tomorrow.'
)
```

### Receive Emails
```python
office.email.receive_email(
    key='your_email_authorization_code',
    msg_from='your@qq.com',
    msg_to='sender@qq.com',
    output_path='./received_emails/',
    status='UNSEEN'
)
```

## Email Configuration

| Email | host | Port |
|-------|------|------|
| QQ | smtp.qq.com | 465 |
| 163 | smtp.163.com | 465 |
| Gmail | smtp.gmail.com | 587 |

> ⚠️ The `key` here is the **authorization code**, not the login password!

Full API see [Email API Reference](/modules/email/api)