---
title: WeChat 使用指南
description: 使用 python-office 实现微信机器人
sidebar_position: 1
---

# 💬 WeChat 模块使用指南

> ⚠️ **注意**：微信 API 不是 `office.wechat.*`，而是 `PyOfficeRobot.*`

WeChat 模块基于 [PyOfficeRobot](https://pypi.org/project/PyOfficeRobot/)，实现**微信消息自动收发**和**智能聊天**。

## 核心场景

### 发送消息
```python
import PyOfficeRobot
PyOfficeRobot.chat.send_message(
    who='文件传输助手',
    message='Hello from Python!'
)
```

### 定时发送
```python
PyOfficeRobot.chat.send_message_by_time(
    who='家人',
    message='生日快乐！',
    time='2026-06-15 09:00:00'
)
```

### 关键词自动回复
```python
PyOfficeRobot.chat.chat_by_keywords(
    who='好友',
    keywords={
        '你好': '你好！我是机器人',
        'python': '推荐学习 python-office',
    }
)
```

### 发送文件
```python
PyOfficeRobot.file.send_file(who='好友', file='./document.pdf')
```

### 群发消息
```python
PyOfficeRobot.group.send()
```

### 智能聊天
```python
PyOfficeRobot.chat.chat_robot(who='好友')
```

## ⚠️ 使用注意事项

1. **不要频繁发消息** - 建议间隔 1 秒以上
2. **不要群发广告** - 容易被封号
3. **个人微信慎用** - 推荐用企业微信

完整 API 见 [WeChat API 参考](/modules/wechat/api)
