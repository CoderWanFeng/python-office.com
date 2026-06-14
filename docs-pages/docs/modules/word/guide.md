---
title: Word 使用指南
description: 使用 python-office 处理 Word 文档
sidebar_position: 1
---

# 📝 Word 模块使用指南

## 核心场景

### Word 转 PDF

```python
import office

# 单个文件
office.word.docx2pdf(
    path='./合同.docx',
    output_path='./pdf_files/'
)

# 批量转换整个文件夹
office.word.docx2pdf(
    path='./所有文档/',
    output_path='./pdf_files/'
)
```

### 合并多个 Word

```python
office.word.merge4docx(
    input_path='./周报/',
    output_path='./汇总/',
    new_word_name='全组周报'
)
```

### Doc 与 Docx 互转

```python
# Doc 转 Docx
office.word.doc2docx(
    input_path='./旧版报告.doc',
    output_path='./modern/'
)

# Docx 转 Doc
office.word.docx2doc(
    input_path='./新版报告.docx',
    output_path='./legacy/'
)
```

### 提取 Word 中的图片

```python
office.word.docx4imgs(
    word_path='./产品手册.docx',
    img_path='./extracted_images/'
)
```

## 完整 API

详见 [Word API 参考](/modules/word/api)

## 实战案例：批量转换周报到 PDF

```python
import office
import os

src_dir = './周报_2026年5月/'
dst_dir = './周报PDF/'

os.makedirs(dst_dir, exist_ok=True)

office.word.docx2pdf(
    path=src_dir,
    output_path=dst_dir
)
```

## 常见问题

**Q: Word 转 PDF 报错？**
A: 多数是缺少 LibreOffice/Office。
- Windows：安装 Office 或 WPS
- macOS：`brew install --cask libreoffice`
- Linux：`sudo apt install libreoffice`

**Q: 转换后字体变了？**
A: 系统中缺少文档使用的字体，建议在文档中嵌入字体后再转换。
