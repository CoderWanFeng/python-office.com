---
title: Video Guide
description: Audio/video conversion, watermark, text-to-speech
sidebar_position: 1
---

# 🎬 Video Module Guide

> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*



# 🎬 Video Module Guide

The Video module provides **audio/video conversion** and **effects processing**.

## Core Scenarios

### Extract Audio from Video
```python
import office
office.video.video2mp3(
    path='./video.mp4',
    mp3_name='audio',
    output_path='./audio/'
)
```

### Audio to Text
```python
office.video.audio2txt(
    audio_path='./audio.mp3',
    appid='your_appid',
    secret_id='your_secret_id',
    secret_key='your_secret_key'
)
```

### Add Watermark to Video
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

### Text to Speech
```python
office.video.txt2mp3(
    content='Hello, welcome to python-office',
    mp3='./output/hello.mp3'
)
```

Full API see [Video API Reference](/modules/video/api)