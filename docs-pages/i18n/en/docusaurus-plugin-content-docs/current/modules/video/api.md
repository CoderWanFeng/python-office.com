---
title: Video API Reference
sidebar_position: 2
---

# 🎬 Video API Reference

> Sub-package: `povideo` | Install: `pip install povideo`
> Import: `import office` or `import povideo`

## Function Overview

| Function | Description |
|----------|-------------|
| `video2mp3(path, mp3_name, output_path)` | Video to audio |
| `audio2txt(audio_path, appid, secret_id, secret_key)` | Audio to text |
| `mark2video(video_path, ...)` | Add watermark to video |
| `txt2mp3(content, file, mp3, speak)` | Text to speech |

## Examples

```python
import office

office.video.video2mp3(path='video.mp4', output_path='./output/')

office.video.mark2video(
    video_path='video.mp4', output_path='./output/',
    mark_str='My Video', font_size=28, font_color='white'
)

office.video.txt2mp3(content='Hello', mp3='./output/hello.mp3')
```

- 📖 [Usage Guide →](/modules/video/guide)
- 📦 [PyPI: povideo](https://pypi.org/project/povideo/)