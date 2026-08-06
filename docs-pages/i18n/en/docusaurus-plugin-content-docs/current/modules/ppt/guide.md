---
title: PPT Guide
description: PPT to PDF, PPT to image (long image), merge
sidebar_position: 1
---

# 📊 PPT Module Guide

The PPT module provides 3 core functions focused on **format conversion** and **merging**.

## Core Scenarios

### PPT to PDF
```python
import office
office.ppt.ppt2pdf(
    path='./product_intro.pptx',
    output_path='./pdf_files/'
)
```

### PPT to Image
```python
# One image per slide
office.ppt.ppt2img(
    input_path='./product_intro.pptx',
    output_path='./images/',
    merge=False
)

# Merge into a long image
office.ppt.ppt2img(
    input_path='./product_intro.pptx',
    output_path='./long_image.png',
    merge=True
)
```

### Merge Multiple PPTs
```python
office.ppt.merge4ppt(
    input_path='./chapter_ppts/',
    output_path='./full_version/',
    output_name='full_product_intro.pptx'
)
```

Full API see [PPT API Reference](/modules/ppt/api)