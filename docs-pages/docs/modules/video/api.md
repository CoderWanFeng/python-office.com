---
title: Video API 参考
sidebar_position: 2
---

# 🎬 Video API 参考

> 子库名：`povideo` | 安装：`pip install povideo`
> 导入：`import office` 或 `import povideo`

## 函数总览

| 函数 | 功能 |
|------|------|
| `video2mp3(path, mp3_name, output_path)` | 视频转音频 |
| `audio2txt(audio_path, appid, secret_id, secret_key)` | 音频转文字 |
| `mark2video(video_path, ...)` | 视频加水印 |
| `txt2mp3(content, file, mp3, speak)` | 文本转语音 |

## 示例

```python
import office

office.video.video2mp3(path='video.mp4', output_path='./output/')

office.video.mark2video(
    video_path='video.mp4', output_path='./output/',
    mark_str='My Video', font_size=28, font_color='white'
)

office.video.txt2mp3(content='你好', mp3='./output/hello.mp3')
```

- 📖 [使用指南 →](/modules/video/guide)
- 📦 [PyPI: povideo](https://pypi.org/project/povideo/)
