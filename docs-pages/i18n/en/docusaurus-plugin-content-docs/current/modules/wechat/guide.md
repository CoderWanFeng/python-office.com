---
title: WeChat Guide
description: "WeChat: send messages, schedule, keyword reply, mass send"
sidebar_position: 1
---

# 💬 WeChat Module Guide

> ⚠️ **Note**: The WeChat API is not `office.wechat.*`, but `PyOfficeRobot.*`

The WeChat module is built on [PyOfficeRobot](https://pypi.org/project/PyOfficeRobot/) and enables **automatic WeChat message sending/receiving** and **smart chat**.

## Core Scenarios

### Send Message
```python
import PyOfficeRobot
PyOfficeRobot.chat.send_message(
    who='File Transfer Assistant',
    message='Hello from Python!'
)
```

### Scheduled Send
```python
PyOfficeRobot.chat.send_message_by_time(
    who='Family',
    message='Happy Birthday!',
    time='2026-06-15 09:00:00'
)
```

### Keyword Auto-Reply
```python
PyOfficeRobot.chat.chat_by_keywords(
    who='Friend',
    keywords={
        'hello': 'Hi! I am a bot.',
        'python': 'I recommend learning python-office.',
    }
)
```

### Send File
```python
PyOfficeRobot.file.send_file(who='Friend', file='./document.pdf')
```

### Mass Send
```python
PyOfficeRobot.group.send()
```

### Smart Chat
```python
PyOfficeRobot.chat.chat_robot(who='Friend')
```

## ⚠️ Usage Notes

1. **Do not send messages too frequently** — keep an interval of 1 second or more.
2. **Do not mass-send ads** — your account may be banned.
3. **Be careful with personal WeChat** — WeChat Work is recommended.

Full API see [WeChat API Reference](/modules/wechat/api)