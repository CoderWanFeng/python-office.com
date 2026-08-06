---
title: PDF API Reference
description: PDF module API reference documentation
sidebar_position: 2
---

# 📑 PDF API Reference

> Sub-package: `popdf` | Install: `pip install popdf`
> Import: `import office` or `import popdf`

The PDF module is the **most feature-rich** module in python-office (13 functions).

## Function Overview

| Function | Description |
|----------|-------------|
| [`pdf2docx`](#pdf2docx) | PDF to Word |
| [`pdf2imgs`](#pdf2imgs) | PDF to image |
| [`txt2pdf`](#txt2pdf) | Text to PDF |
| [`split4pdf`](#split4pdf) | Split PDF |
| [`encrypt4pdf`](#encrypt4pdf) | Encrypt PDF |
| [`decrypt4pdf`](#decrypt4pdf) | Decrypt PDF |
| [`merge2pdf`](#merge2pdf) | Merge PDF |
| [`add_text_watermark`](#add_text_watermark) | Text watermark |
| [`add_img_water`](#add_img_water) | Image watermark |
| [`add_mark`](#add_mark) | Watermark (legacy) |
| [`add_watermark_by_parameters`](#add_watermark_by_parameters) | Parameterized watermark |
| [`del4pdf`](#del4pdf) | Delete pages |
| [`add_watermark`](#add_watermark) | Interactive watermark |

---

## pdf2docx

```python
office.pdf.pdf2docx(
    input_file=None,
    output_file=None,
    input_path=None,
    output_path=None
)
```

```python
office.pdf.pdf2docx(
    input_file='document.pdf',
    output_file='document.docx'
)
```

---

## pdf2imgs

```python
office.pdf.pdf2imgs(
    input_file=None,
    output_file=None,
    merge=False
)
```

```python
office.pdf.pdf2imgs(
    input_file='document.pdf',
    output_file='./long.png',
    merge=True
)
```

---

## txt2pdf

```python
office.pdf.txt2pdf(
    input_file='text.txt',
    output_file='output.pdf'
)
```

---

## split4pdf

```python
office.pdf.split4pdf(
    input_file='big.pdf',
    output_file='part1.pdf',
    from_page=1,
    to_page=10
)
```

---

## encrypt4pdf / decrypt4pdf

```python
# Encrypt
office.pdf.encrypt4pdf(
    password='mypassword123',
    input_file='document.pdf',
    output_file='encrypted.pdf'
)

# Decrypt
office.pdf.decrypt4pdf(
    password='mypassword123',
    input_file='encrypted.pdf',
    output_file='decrypted.pdf'
)
```

---

## merge2pdf

```python
office.pdf.merge2pdf(
    input_file_list=['1.pdf', '2.pdf', '3.pdf'],
    output_file='merged.pdf'
)
```

---

## add_text_watermark

```python
office.pdf.add_text_watermark(
    input_file='document.pdf',
    text='Confidential - For Internal Use Only',
    output_file='watermarked.pdf',
    fontsize=20,
    color=(0, 0, 1)
)
```

---

## add_img_water

```python
office.pdf.add_img_water(
    input_file='document.pdf',
    mark_file='logo.png',
    output_file='watermarked.pdf'
)
```

---

## add_mark

Legacy watermark interface.

```python
office.pdf.add_mark(
    input_file='document.pdf',
    mark_str='python-office',
    output_path='./output/'
)
```

---

## add_watermark_by_parameters

Parameterized watermark (recommended).

```python
office.pdf.add_watermark_by_parameters(
    input_file='document.pdf',
    mark_str='Confidential',
    output_path='./output/',
    output_file='watermarked.pdf'
)
```

---

## del4pdf

```python
office.pdf.del4pdf(
    input_file='document.pdf',
    output_file='deleted.pdf',
    page_nums=[1, 3]
)
```

---

## add_watermark

```python
office.pdf.add_watermark()  # Interactive
```

## Related Resources

- 📖 [Usage Guide →](/modules/pdf/guide)
- 📦 [PyPI: popdf](https://pypi.org/project/popdf/)