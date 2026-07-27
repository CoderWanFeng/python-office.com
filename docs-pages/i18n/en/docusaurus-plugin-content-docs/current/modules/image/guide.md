---
title: Image Guide
description: "Image: compression, watermark, QR code, word cloud, cartoonify"
sidebar_position: 1
---

# 🖼️ Image Module Guide

> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*



# 🖼️ Image Module Guide

The Image module provides 9 functions covering **compression, conversion, effects, and recognition** — everything you need for image processing.

## Core Scenarios

### Image Compression
```python
import office
office.image.compress_image(
    input_file='./original_large.jpg',
    output_file='./compressed.jpg',
    quality=85
)
```

### Batch Watermark
```python
office.image.add_watermark(
    file='./photo.jpg',
    mark='@python-office',
    color='#eaeaea',
    size=30,
    opacity=0.35,
    angle=30
)
```

### Image to Cartoon
```python
office.image.img2Cartoon(path='./photo.jpg')
```

### Generate Word Cloud
```python
office.image.txt2wordcloud(
    filename='./article.txt',
    color='white',
    result_file='./wordcloud.png'
)
```

### Decode QR Code
```python
result = office.image.decode_qrcode(qrcode_path='./qr.png')
print(result)
```

### Download Image
```python
office.image.down4img(
    url='https://example.com/image.jpg',
    output_path='./images/',
    output_name='downloaded_photo',
    type='jpg'
)
```

### Pencil Sketch Effect
```python
office.image.pencil4img(
    input_img='./photo.jpg',
    output_path='./art/',
    output_name='pencil_sketch.jpg'
)
```

### Image to GIF / Remove Watermark
```python
office.image.image2gif()
office.image.del_watermark(input_image='./watermarked.jpg', output_image='./no_watermark.jpg')
```

Full API see [Image API Reference](/modules/image/api)