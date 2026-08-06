---
title: WeChat API Reference
sidebar_position: 2
---

# 💬 WeChat API Reference

> ⚠️ **Note**: The WeChat API is not `office.wechat.*`, but `PyOfficeRobot.*`
> Install: `pip install PyOfficeRobot`
> Import: `import PyOfficeRobot`

## Function Overview

| Function | Description |
|----------|-------------|
| `chat.send_message(who, message)` | Send message |
| `chat.send_message_by_time(who, message, time)` | Scheduled send |
| `chat.chat_by_keywords(who, keywords)` | Keyword auto-reply |
| `file.send_file(who, file)` | Send file |
| `group.send()` | Mass send |
| `chat.receive_message(who, txt, output_path)` | Receive message |
| `chat.chat_robot(who)` | Smart chat |

## Examples

```python
import PyOfficeRobot

PyOfficeRobot.chat.send_message(
    who='File Transfer Assistant',
    message='Hello from Python!'
)

PyOfficeRobot.chat.send_message_by_time(
    who='Family', message='Happy Birthday!', time='2026-06-15 09:00:00'
)

PyOfficeRobot.chat.chat_by_keywords(
    who='Friend',
    keywords={'hello': 'Hi! I am a bot.', 'python': 'I recommend learning python-office'}
)
```

- 📖 [Usage Guide →](/modules/wechat/guide)
- 📦 [PyPI: PyOfficeRobot](https://pypi.org/project/PyOfficeRobot/)