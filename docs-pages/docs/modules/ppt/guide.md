---
title: PPT 使用指南
description: 使用 python-office 处理 PPT
sidebar_position: 1
---

# 📊 PPT 模块使用指南

PPT 模块提供 3 个核心函数，专注于**格式转换**和**合并**。

## 核心场景

### PPT 转 PDF
```python
import office
office.ppt.ppt2pdf(
    path='./产品介绍.pptx',
    output_path='./pdf_files/'
)
```

### PPT 转图片
```python
# 每页一张图
office.ppt.ppt2img(
    input_path='./产品介绍.pptx',
    output_path='./images/',
    merge=False
)

# 合并为长图
office.ppt.ppt2img(
    input_path='./产品介绍.pptx',
    output_path='./long_image.png',
    merge=True
)
```

### 合并多个 PPT
```python
office.ppt.merge4ppt(
    input_path='./分章节PPT/',
    output_path='./完整版/',
    output_name='完整产品介绍.pptx'
)
```

完整 API 见 [PPT API 参考](/modules/ppt/api)
