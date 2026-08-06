---
title: OCR API Reference
sidebar_position: 2
---

# 🔍 OCR API Reference

> Sub-package: `poocr` | Install: `pip install poocr`
> Import: `import office` or `import poocr`

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

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input_path` | str | Invoice image path or folder |
| `output_path` | str | Output directory |
| `output_excel` | str | Output Excel name |
| `img_url` | str | Image URL |
| `id` / `key` | str | Baidu API credentials |
| `file_name` | bool | Use filename as sheet name |
| `trans` | bool | Translate to English |

## Examples

```python
import office

office.ocr.VatInvoiceOCR2Excel(
    input_path='./invoice.jpg',
    output_path='./output/'
)

office.ocr.VatInvoiceOCR2Excel(
    input_path='./invoices/',
    output_path='./output/',
    output_excel='all_invoices_summary.xlsx',
    file_name=True
)
```

- 📖 [Usage Guide →](/modules/ocr/guide)
- 📦 [PyPI: poocr](https://pypi.org/project/poocr/)