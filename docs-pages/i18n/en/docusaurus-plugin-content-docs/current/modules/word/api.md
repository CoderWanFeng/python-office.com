---
title: Word API Reference
description: Word module API reference documentation
sidebar_position: 2
---

# 📝 Word API Reference

> Sub-package: `poword` | Install: `pip install poword`
> Import: `import office` or `import poword`

## Function Overview

| Function | Description |
|----------|-------------|
| [`docx2pdf`](#docx2pdf) | Word to PDF (batch supported) |
| [`merge4docx`](#merge4docx) | Merge multiple Word files |
| [`doc2docx`](#doc2docx) | Doc to Docx |
| [`docx2doc`](#docx2doc) | Docx to Doc |
| [`docx4imgs`](#docx4imgs) | Extract images from Word |

---

## docx2pdf

Convert Word documents to PDF. Supports a single file or batch conversion of a whole folder.

```python
office.word.docx2pdf(path, output_path=None)
```

```python
import office

# Single file
office.word.docx2pdf(
    path='document.docx',
    output_path='./pdf_output/'
)

# Batch convert
office.word.docx2pdf(
    path='./my_documents/',
    output_path='./pdf_output/'
)
```

---

## merge4docx

Merge multiple Docx files into one.

```python
office.word.merge4docx(
    input_path,
    output_path,
    new_word_name='merge4docx'
)
```

---

## doc2docx

Doc to Docx.

```python
office.word.doc2docx(
    input_path='legacy.doc',
    output_path='./output/',
    output_name='modern_version'
)
```

---

## docx2doc

Docx to Doc.

```python
office.word.docx2doc(
    input_path='modern.docx',
    output_path='./output/',
    output_name='legacy_version'
)
```

---

## docx4imgs

Extract images from a Word document.

```python
office.word.docx4imgs(
    word_path='document_with_images.docx',
    img_path='./extracted_images/'
)
```

## Related Resources

- 📖 [Usage Guide →](/modules/word/guide)
- 📦 [PyPI: poword](https://pypi.org/project/poword/)