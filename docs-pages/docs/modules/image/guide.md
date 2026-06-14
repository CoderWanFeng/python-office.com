---
title: Image 使用指南
description: 使用 python-office 处理图片
sidebar_position: 1
---

# 🖼️ Image 模块使用指南

Image 模块提供 9 个函数，覆盖**压缩、转换、特效、识别**等图片处理全场景。

## 核心场景

### 图片压缩
```python
import office
office.image.compress_image(
    input_file='./原始大图.jpg',
    output_file='./压缩后.jpg',
    quality=85
)
```

### 批量加水印
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

### 图片转卡通
```python
office.image.img2Cartoon(path='./photo.jpg')
```

### 生成词云
```python
office.image.txt2wordcloud(
    filename='./文章.txt',
    color='white',
    result_file='./词云.png'
)
```

### 识别二维码
```python
result = office.image.decode_qrcode(qrcode_path='./qr.png')
print(result)
```

### 下载图片
```python
office.image.down4img(
    url='https://example.com/image.jpg',
    output_path='./images/',
    output_name='downloaded_photo',
    type='jpg'
)
```

### 铅笔画效果
```python
office.image.pencil4img(
    input_img='./photo.jpg',
    output_path='./art/',
    output_name='pencil_sketch.jpg'
)
```

### 图片转 GIF / 去水印
```python
office.image.image2gif()
office.image.del_watermark(input_image='./带水印.jpg', output_image='./无水印.jpg')
```

完整 API 见 [Image API 参考](/modules/image/api)
