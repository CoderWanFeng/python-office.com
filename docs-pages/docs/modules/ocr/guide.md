---
title: OCR 使用指南
description: 使用 python-office 进行 OCR 识别
sidebar_position: 1
---

# 🔍 OCR 模块使用指南

OCR 模块调用**百度智能云 API**，提供**增值税发票识别 → Excel** 等功能。

## 核心场景

### 识别单张发票
```python
import office
office.ocr.VatInvoiceOCR2Excel(
    input_path='./invoice_001.jpg',
    output_path='./output/'
)
```

### 批量识别文件夹
```python
office.ocr.VatInvoiceOCR2Excel(
    input_path='./所有发票/',
    output_path='./output/',
    output_excel='本月所有发票汇总.xlsx',
    file_name=True
)
```

### 识别网络图片
```python
office.ocr.VatInvoiceOCR2Excel(
    img_url='https://example.com/invoice.jpg',
    output_path='./output/'
)
```

## 识别结果

Excel 中自动包含以下字段：
- 发票代码、发票号码、开票日期
- 销售方/购买方信息（名称、纳税人识别号）
- 金额、税额、不含税金额、税率

## 配置百度 OCR API

1. 访问 [百度智能云](https://ai.baidu.com/) 注册账号
2. 创建「文字识别 OCR」应用
3. 获取 API Key 和 Secret Key
4. 配置：
```python
office.ocr.VatInvoiceOCR2Excel(
    input_path='./invoices/',
    id='your_api_id',
    key='your_api_secret'
)
```

完整 API 见 [OCR API 参考](/modules/ocr/api)
