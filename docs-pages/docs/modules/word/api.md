---
title: Word API 参考
description: Word 模块完整 API 文档
sidebar_position: 2
---

# 📝 Word API 参考

> 子库名：`poword` | 安装：`pip install poword`
> 导入：`import office` 或 `import poword`

## 函数总览

| 函数 | 功能 |
|------|------|
| [`docx2pdf`](#docx2pdf) | Word 转 PDF（支持批量） |
| [`merge4docx`](#merge4docx) | 合并多个 Word |
| [`doc2docx`](#doc2docx) | Doc 转 Docx |
| [`docx2doc`](#docx2doc) | Docx 转 Doc |
| [`docx4imgs`](#docx4imgs) | 从 Word 提取图片 |

---

## docx2pdf

将 Word 文档转换为 PDF。支持单个文件或整个文件夹批量转换。

```python
office.word.docx2pdf(path, output_path=None)
```

```python
import office

# 单个文件
office.word.docx2pdf(
    path='document.docx',
    output_path='./pdf_output/'
)

# 批量转换
office.word.docx2pdf(
    path='./my_documents/',
    output_path='./pdf_output/'
)
```

---

## merge4docx

合并多个 Docx 文件为一个文件。

```python
office.word.merge4docx(
    input_path,
    output_path,
    new_word_name='merge4docx'
)
```

---

## doc2docx

Doc 转 Docx。

```python
office.word.doc2docx(
    input_path='legacy.doc',
    output_path='./output/',
    output_name='modern_version'
)
```

---

## docx2doc

Docx 转 Doc。

```python
office.word.docx2doc(
    input_path='modern.docx',
    output_path='./output/',
    output_name='legacy_version'
)
```

---

## docx4imgs

从 Word 文档中提取图片。

```python
office.word.docx4imgs(
    word_path='document_with_images.docx',
    img_path='./extracted_images/'
)
```

## 相关资源

- 📖 [使用指南 →](/modules/word/guide)
- 📦 [PyPI: poword](https://pypi.org/project/poword/)
