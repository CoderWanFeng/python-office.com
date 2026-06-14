---
title: Video 使用指南
description: 使用 python-office 处理视频和音频
sidebar_position: 1
---

# 🎬 Video 模块使用指南

Video 模块提供**音视频转换**和**特效处理**功能。

## 核心场景

### 视频提取音频
```python
import office
office.video.video2mp3(
    path='./视频.mp4',
    mp3_name='音频',
    output_path='./audio/'
)
```

### 音频转文字
```python
office.video.audio2txt(
    audio_path='./音频.mp3',
    appid='your_appid',
    secret_id='your_secret_id',
    secret_key='your_secret_key'
)
```

### 视频加水印
```python
office.video.mark2video(
    video_path='./video.mp4',
    output_path='./output/',
    output_name='watermarked.mp4',
    mark_str='My Video',
    font_size=28,
    font_color='white'
)
```

### 文本转语音
```python
office.video.txt2mp3(
    content='你好，欢迎使用 python-office',
    mp3='./output/hello.mp3'
)
```

完整 API 见 [Video API 参考](/modules/video/api)
