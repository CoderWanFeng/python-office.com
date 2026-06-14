---
title: PDF API 参考
description: PDF 模块完整 API 文档（13 个函数）
sidebar_position: 2
---

# 📑 PDF API 参考

> 子库名：`popdf` | 安装：`pip install popdf`
> 导入：`import office` 或 `import popdf`

PDF 模块是 python-office 中**最丰富**的模块（13 个函数）。

## 函数总览

| 函数 | 功能 |
|------|------|
| [`pdf2docx`](#pdf2docx) | PDF 转 Word |
| [`pdf2imgs`](#pdf2imgs) | PDF 转图片 |
| [`txt2pdf`](#txt2pdf) | 文本转 PDF |
| [`split4pdf`](#split4pdf) | 拆分 PDF |
| [`encrypt4pdf`](#encrypt4pdf) | 加密 PDF |
| [`decrypt4pdf`](#decrypt4pdf) | 解密 PDF |
| [`merge2pdf`](#merge2pdf) | 合并 PDF |
| [`add_text_watermark`](#add_text_watermark) | 文本水印 |
| [`add_img_water`](#add_img_water) | 图片水印 |
| [`add_mark`](#add_mark) | 水印（旧版） |
| [`add_watermark_by_parameters`](#add_watermark_by_parameters) | 参数化水印 |
| [`del4pdf`](#del4pdf) | 删除页面 |
| [`add_watermark`](#add_watermark) | 交互式水印 |

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
# 加密
office.pdf.encrypt4pdf(
    password='mypassword123',
    input_file='document.pdf',
    output_file='encrypted.pdf'
)

# 解密
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
    text='机密 - 仅供内部使用',
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

旧版水印接口。

```python
office.pdf.add_mark(
    input_file='document.pdf',
    mark_str='python-office',
    output_path='./output/'
)
```

---

## add_watermark_by_parameters

参数化水印（推荐使用）。

```python
office.pdf.add_watermark_by_parameters(
    input_file='document.pdf',
    mark_str='机密文档',
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
office.pdf.add_watermark()  # 交互式
```

## 相关资源

- 📖 [使用指南 →](/modules/pdf/guide)
- 📦 [PyPI: popdf](https://pypi.org/project/popdf/)
