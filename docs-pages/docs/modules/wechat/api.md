---
title: WeChat API 参考
sidebar_position: 2
---

# 💬 WeChat API 参考

> ⚠️ **注意**：微信 API 不是 `office.wechat.*`，而是 `PyOfficeRobot.*`
> 安装：`pip install PyOfficeRobot`
> 导入：`import PyOfficeRobot`

## 函数总览

| 函数 | 功能 |
|------|------|
| `chat.send_message(who, message)` | 发送消息 |
| `chat.send_message_by_time(who, message, time)` | 定时发送 |
| `chat.chat_by_keywords(who, keywords)` | 关键词自动回复 |
| `file.send_file(who, file)` | 发送文件 |
| `group.send()` | 群发消息 |
| `chat.receive_message(who, txt, output_path)` | 接收消息 |
| `chat.chat_robot(who)` | 智能聊天 |

## 示例

```python
import PyOfficeRobot

PyOfficeRobot.chat.send_message(
    who='文件传输助手',
    message='Hello from Python!'
)

PyOfficeRobot.chat.send_message_by_time(
    who='家人', message='生日快乐！', time='2026-06-15 09:00:00'
)

PyOfficeRobot.chat.chat_by_keywords(
    who='好友',
    keywords={'你好': '你好！我是机器人', 'python': '推荐学习 python-office'}
)
```

- 📖 [使用指南 →](/modules/wechat/guide)
- 📦 [PyPI: PyOfficeRobot](https://pypi.org/project/PyOfficeRobot/)
