---
title: 5-Minute Quick Start
description: Quickly experience python-office through 5 examples
sidebar_position: 3
---

# ⚡ 5-Minute Quick Start

> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*



# ⚡ 5-Minute Quick Start

Five real-world scenarios let you quickly feel how convenient python-office is.

## 1️⃣ Generate Mock Excel Data in One Line of Code

```python
import office

office.excel.fake2excel(
    columns=['name', 'phone', 'email', 'address'],
    rows=100,
    path='./users.xlsx'
)
```

## 2️⃣ Merge Multiple Excel Files in One Line of Code

```python
import office

office.excel.merge2excel(
    dir_path='./excels/',
    output_file='all_merged.xlsx'
)
```

## 3️⃣ PDF to Word in One Line of Code

```python
import office

office.pdf.pdf2docx(
    input_file='./contract.pdf',
    output_file='./contract.docx'
)
```

## 4️⃣ Add Watermark to Image in One Line of Code

```python
import office

office.image.add_watermark(
    file='./photo.jpg',
    mark='@python-office',
    output_path='./output/'
)
```

## 5️⃣ Send Batch Emails in One Line of Code

```python
import office

office.email.send_email(
    key='your_email_authorization_code',
    msg_from='your@qq.com',
    msg_to='colleague@qq.com',
    msg_subject='Weekly Report',
    content='Please find attached this week\'s report.',
    attach_files=['./report.pdf']
)
```

## Complete Runnable Example

```python
import office

print("=== python-office 5-Minute Quick Start ===\n")

print("1️⃣ Generate mock Excel data")
office.excel.fake2excel(
    columns=['name', 'phone', 'email'],
    rows=10,
    path='./demo_users.xlsx'
)
print("   ✅ Done\n")

print("2️⃣ Add watermark to image")
office.image.add_watermark(
    file='./demo_photo.jpg',
    mark='@python-office',
    output_path='./demo_output/'
)
print("   ✅ Done\n")

print("3️⃣ Create word cloud")
office.image.txt2wordcloud(
    filename='./demo_article.txt',
    result_file='./demo_wordcloud.png'
)
print("   ✅ Done\n")

print("=== Quick Start Complete! ===")
print("📚 Want to learn more? Check [Module Documentation](/modules/overview)")
```

## Next Steps...

- 📚 [Deep dive into each module](/modules/overview)
- 🔧 [API Reference](/modules/excel/api)
- ❓ [Troubleshooting](/start/faq)