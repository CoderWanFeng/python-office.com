---
title: Image API 参考
sidebar_position: 2
---

# 🖼️ Image API 参考

> 子库名：`poimage` | 安装：`pip install poimage`
> 导入：`import office` 或 `import poimage`

## 函数总览

| 函数 | 功能 |
|------|------|
| `compress_image(input_file, output_file, quality)` | 压缩图片 |
| `image2gif()` | 转为 GIF |
| `add_watermark(file, mark, ...)` | 加水印（参数可调） |
| `img2Cartoon(path, ...)` | 卡通化（百度 API） |
| `down4img(url, output_path, output_name, type)` | 下载图片 |
| `txt2wordcloud(filename, color, result_file)` | 词云 |
| `pencil4img(input_img, output_path, output_name)` | 铅笔画 |
| `decode_qrcode(qrcode_path)` | 解析二维码 |
| `del_watermark(input_image, output_image)` | 去水印 |

## 示例

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

- 📖 [使用指南 →](/modules/image/guide)
- 📦 [PyPI: poimage](https://pypi.org/project/poimage/)
