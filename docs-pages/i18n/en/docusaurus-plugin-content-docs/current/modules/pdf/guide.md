---
title: PDF Guide
description: "PDF operations: conversion, encryption, merge, split, watermark"
sidebar_position: 1
---

# 📑 PDF Module Guide

The PDF module is the **most feature-rich** module in python-office (13 functions).

## Core Scenarios

### PDF to Word

```python
import office

office.pdf.pdf2docx(
    input_file='./contract.pdf',
    output_file='./contract.docx'
)
```

### PDF to Image

```python
# One image per page
office.pdf.pdf2imgs(
    input_file='./product_manual.pdf',
    output_file='./images/'
)

# Merge into a single long image
office.pdf.pdf2imgs(
    input_file='./product_manual.pdf',
    output_file='./long_image.png',
    merge=True
)
```

### Merge PDFs

```python
office.pdf.merge2pdf(
    input_file_list=['./cover.pdf', './content.pdf', './appendix.pdf'],
    output_file='./full_document.pdf'
)
```

### Split PDF

```python
office.pdf.split4pdf(
    input_file='./large_document.pdf',
    output_file='./first_10_pages.pdf',
    from_page=1,
    to_page=10
)
```

### Encrypt / Decrypt PDF

```python
# Encrypt
office.pdf.encrypt4pdf(
    password='mypassword',
    input_file='./confidential.pdf',
    output_file='./confidential_encrypted.pdf'
)

# Decrypt
office.pdf.decrypt4pdf(
    password='mypassword',
    input_file='./confidential_encrypted.pdf',
    output_file='./confidential_decrypted.pdf'
)
```

### PDF Watermark

```python
# Text watermark
office.pdf.add_text_watermark(
    input_file='./document.pdf',
    text='Confidential - For Internal Use Only',
    output_file='./watermarked.pdf',
    fontsize=30,
    color=(1, 0, 0)
)

# Image watermark
office.pdf.add_img_water(
    input_file='./document.pdf',
    mark_file='./logo.png',
    output_file='./watermarked.pdf'
)
```

### Delete Specific Pages

```python
office.pdf.del4pdf(
    input_file='./original.pdf',
    output_file='./processed.pdf',
    page_nums=[1, 3, 5]
)
```

## Full API

See [PDF API Reference](/modules/pdf/api)

## Real-World Example: Auto-Generate Customer Quotes

```python
import office

# 1. Merge product PDF introductions
office.pdf.merge2pdf(
    input_file_list=[
        './product_A_intro.pdf',
        './product_B_intro.pdf',
        './quote_template.pdf'
    ],
    output_file='./customer_quote.pdf'
)

# 2. Add watermark
office.pdf.add_text_watermark(
    input_file='./customer_quote.pdf',
    text='Internal Material - Do Not Distribute',
    output_file='./customer_quote_watermarked.pdf',
    fontsize=40
)

# 3. Encrypt
office.pdf.encrypt4pdf(
    password='2026',
    input_file='./customer_quote_watermarked.pdf',
    output_file='./customer_quote_final.pdf'
)
```

## Performance Tuning Tips

| Scenario | Recommendation |
|----------|----------------|
| Large files (>100MB) | Process in batches |
| Batch conversion | Disable antivirus scanning |
| Complex PDFs | Increase timeout |
| Encryption | Use a password of 12+ characters |