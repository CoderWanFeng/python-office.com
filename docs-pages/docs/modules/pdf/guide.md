---
title: PDF 使用指南
description: 使用 python-office 处理 PDF 文件
sidebar_position: 1
---

# 📑 PDF 模块使用指南

PDF 模块是 python-office 中**功能最丰富**的模块（13 个函数）。

## 核心场景

### PDF 转 Word

```python
import office

office.pdf.pdf2docx(
    input_file='./合同.pdf',
    output_file='./合同.docx'
)
```

### PDF 转图片

```python
# 每页一张图
office.pdf.pdf2imgs(
    input_file='./产品手册.pdf',
    output_file='./images/'
)

# 合并为一张长图
office.pdf.pdf2imgs(
    input_file='./产品手册.pdf',
    output_file='./long_image.png',
    merge=True
)
```

### 合并 PDF

```python
office.pdf.merge2pdf(
    input_file_list=['./封面.pdf', './正文.pdf', './附录.pdf'],
    output_file='./完整文档.pdf'
)
```

### 拆分 PDF

```python
office.pdf.split4pdf(
    input_file='./大型文档.pdf',
    output_file='./前10页.pdf',
    from_page=1,
    to_page=10
)
```

### 加密/解密 PDF

```python
# 加密
office.pdf.encrypt4pdf(
    password='mypassword',
    input_file='./机密.pdf',
    output_file='./机密_加密.pdf'
)

# 解密
office.pdf.decrypt4pdf(
    password='mypassword',
    input_file='./机密_加密.pdf',
    output_file='./机密_解密.pdf'
)
```

### PDF 加水印

```python
# 文本水印
office.pdf.add_text_watermark(
    input_file='./文档.pdf',
    text='机密 - 仅供内部使用',
    output_file='./带水印.pdf',
    fontsize=30,
    color=(1, 0, 0)
)

# 图片水印
office.pdf.add_img_water(
    input_file='./文档.pdf',
    mark_file='./logo.png',
    output_file='./带水印.pdf'
)
```

### 删除指定页面

```python
office.pdf.del4pdf(
    input_file='./原文档.pdf',
    output_file='./处理后.pdf',
    page_nums=[1, 3, 5]
)
```

## 完整 API

详见 [PDF API 参考](/modules/pdf/api)

## 实战案例：自动生成客户报价单

```python
import office

# 1. 合并多个产品的 PDF 介绍
office.pdf.merge2pdf(
    input_file_list=[
        './产品A介绍.pdf',
        './产品B介绍.pdf',
        './报价单模板.pdf'
    ],
    output_file='./客户报价单.pdf'
)

# 2. 加水印
office.pdf.add_text_watermark(
    input_file='./客户报价单.pdf',
    text='内部资料 - 严禁外传',
    output_file='./客户报价单_带水印.pdf',
    fontsize=40
)

# 3. 加密
office.pdf.encrypt4pdf(
    password='2026',
    input_file='./客户报价单_带水印.pdf',
    output_file='./客户报价单_最终.pdf'
)
```

## 性能优化建议

| 场景 | 建议 |
|------|------|
| 大文件（>100MB） | 分批处理 |
| 批量转换 | 关闭防病毒软件扫描 |
| 复杂 PDF | 提高超时时间 |
| 加密操作 | 密码长度建议 12+ 位 |
