---
title: Image API Reference
sidebar_position: 2
---

# 🖼️ Image API Reference

> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*



# 🖼️ Image API Reference

> Sub-package: `poimage` | Install: `pip install poimage`
> Import: `import office` or `import poimage`

## Function Overview

| Function | Description |
|----------|-------------|
| `compress_image(input_file, output_file, quality)` | Compress image |
| `image2gif()` | Convert to GIF |
| `add_watermark(file, mark, ...)` | Add watermark (tunable parameters) |
| `img2Cartoon(path, ...)` | Cartoonify (Baidu API) |
| `down4img(url, output_path, output_name, type)` | Download image |
| `txt2wordcloud(filename, color, result_file)` | Word cloud |
| `pencil4img(input_img, output_path, output_name)` | Pencil sketch |
| `decode_qrcode(qrcode_path)` | Decode QR code |
| `del_watermark(input_image, output_image)` | Remove watermark |

## Examples

```python
import office

office.image.compress_image(input_file='big.jpg', output_file='small.jpg', quality=85)

office.image.add_watermark(
    file='photo.jpg',
    mark='@python-office',
    color='#eaeaea',
    size=30,
    opacity=0.35,
    angle=30
)

office.image.txt2wordcloud(filename='article.txt', result_file='wordcloud.png')
```

- 📖 [Usage Guide →](/modules/image/guide)
- 📦 [PyPI: poimage](https://pypi.org/project/poimage/)