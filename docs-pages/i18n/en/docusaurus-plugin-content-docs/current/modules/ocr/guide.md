---
title: OCR Guide
description: VAT invoice recognition → Excel
sidebar_position: 1
---

# 🔍 OCR Module Guide

The OCR module calls the **Baidu AI Cloud API** and provides features like **VAT invoice recognition → Excel**.

## Core Scenarios

### Recognize a Single Invoice
```python
import office
office.ocr.VatInvoiceOCR2Excel(
    input_path='./invoice_001.jpg',
    output_path='./output/'
)
```

### Batch-Recognize a Folder
```python
office.ocr.VatInvoiceOCR2Excel(
    input_path='./all_invoices/',
    output_path='./output/',
    output_excel='monthly_invoice_summary.xlsx',
    file_name=True
)
```

### Recognize Image from URL
```python
office.ocr.VatInvoiceOCR2Excel(
    img_url='https://example.com/invoice.jpg',
    output_path='./output/'
)
```

## Recognition Result

The Excel automatically includes the following fields:
- Invoice code, invoice number, issue date
- Seller / buyer info (name, tax ID)
- Amount, tax amount, tax-exclusive amount, tax rate

## Configuring Baidu OCR API

1. Visit [Baidu AI Cloud](https://ai.baidu.com/) and register an account
2. Create a "Text Recognition OCR" application
3. Get the API Key and Secret Key
4. Configure:
```python
office.ocr.VatInvoiceOCR2Excel(
    input_path='./invoices/',
    id='your_api_id',
    key='your_api_secret'
)
```

Full API see [OCR API Reference](/modules/ocr/api)