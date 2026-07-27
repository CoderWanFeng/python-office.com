---
title: Word Guide
description: Word/PDF conversion, merge, image extraction
sidebar_position: 1
---

# 📝 Word Module Guide

> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*



# 📝 Word Module Guide

## Core Scenarios

### Word to PDF

```python
import office

# Single file
office.word.docx2pdf(
    path='./contract.docx',
    output_path='./pdf_files/'
)

# Batch convert a whole folder
office.word.docx2pdf(
    path='./all_documents/',
    output_path='./pdf_files/'
)
```

### Merge Multiple Word Documents

```python
office.word.merge4docx(
    input_path='./weekly_reports/',
    output_path='./summary/',
    new_word_name='team_weekly_report'
)
```

### Convert Between Doc and Docx

```python
# Doc to Docx
office.word.doc2docx(
    input_path='./legacy_report.doc',
    output_path='./modern/'
)

# Docx to Doc
office.word.docx2doc(
    input_path='./modern_report.docx',
    output_path='./legacy/'
)
```

### Extract Images from Word

```python
office.word.docx4imgs(
    word_path='./product_manual.docx',
    img_path='./extracted_images/'
)
```

## Full API

See [Word API Reference](/modules/word/api)

## Real-World Example: Batch Convert Weekly Reports to PDF

```python
import office
import os

src_dir = './weekly_reports_2026_05/'
dst_dir = './weekly_reports_pdf/'

os.makedirs(dst_dir, exist_ok=True)

office.word.docx2pdf(
    path=src_dir,
    output_path=dst_dir
)
```

## FAQ

**Q: Word to PDF fails?**
A: Most of the time it's because LibreOffice/Office is missing.
- Windows: install Office or WPS
- macOS: `brew install --cask libreoffice`
- Linux: `sudo apt install libreoffice`

**Q: Fonts change after conversion?**
A: The fonts used in the document are missing from the system. Embed fonts in the document before conversion.