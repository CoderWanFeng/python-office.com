---
title: OCR API 参考
sidebar_position: 2
---

# 🔍 OCR API 参考

> 子库名：`poocr` | 安装：`pip install poocr`
> 导入：`import office` 或 `import poocr`

## VatInvoiceOCR2Excel

```python
office.ocr.VatInvoiceOCR2Excel(
    input_path,
    output_path='./',
    output_excel='VatInvoiceOCR2Excel.xlsx',
    img_url=None,
    id=None,
    key=None,
    file_name=False,
    trans=False
)
```

## 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `input_path` | str | 发票图片路径或文件夹 |
| `output_path` | str | 输出目录 |
| `output_excel` | str | 输出 Excel 名 |
| `img_url` | str | 网络图片 URL |
| `id` / `key` | str | 百度 API 凭证 |
| `file_name` | bool | 用文件名做 sheet 名 |
| `trans` | bool | 翻译为英文 |

## 示例

```python
import office

office.ocr.VatInvoiceOCR2Excel(
    input_path='./invoice.jpg',
    output_path='./output/'
)

office.ocr.VatInvoiceOCR2Excel(
    input_path='./invoices/',
    output_path='./output/',
    output_excel='所有发票汇总.xlsx',
    file_name=True
)
```

- 📖 [使用指南 →](/modules/ocr/guide)
- 📦 [PyPI: poocr](https://pypi.org/project/poocr/)
