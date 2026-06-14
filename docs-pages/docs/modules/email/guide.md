---
title: Email 使用指南
description: 使用 python-office 自动收发邮件
sidebar_position: 1
---

# 📧 Email 模块使用指南

Email 模块实现**邮件的自动收发**，支持附件、抄送、群发等高级功能。

## 核心场景

### 发送简单邮件
```python
import office
office.email.send_email(
    key='你的邮箱授权码',
    msg_from='your@qq.com',
    msg_to='target@qq.com',
    msg_subject='会议通知',
    content='明天下午 3 点开会。'
)
```

### 发送带附件的邮件
```python
office.email.send_email(
    key='你的邮箱授权码',
    msg_from='your@qq.com',
    msg_to='target@qq.com',
    msg_subject='项目周报',
    content='请查收本周工作汇报。',
    attach_files=['./周报.pdf', './数据.xlsx']
)
```

### 抄送多人
```python
office.email.send_email(
    key='你的邮箱授权码',
    msg_from='your@qq.com',
    msg_to='主要收件人@qq.com',
    msg_cc='抄送1@qq.com, 抄送2@qq.com',
    msg_subject='项目会议',
    content='明天下午 3 点开会。'
)
```

### 接收邮件
```python
office.email.receive_email(
    key='你的邮箱授权码',
    msg_from='your@qq.com',
    msg_to='sender@qq.com',
    output_path='./received_emails/',
    status='UNSEEN'
)
```

## 邮箱配置

| 邮箱 | host | 端口 |
|------|------|------|
| QQ | smtp.qq.com | 465 |
| 163 | smtp.163.com | 465 |
| Gmail | smtp.gmail.com | 587 |

> ⚠️ 这里的 `key` 是**授权码**，不是登录密码！

完整 API 见 [Email API 参考](/modules/email/api)
