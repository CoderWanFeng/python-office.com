---
title: Excel 使用指南
description: 使用 python-office 处理 Excel 文件
sidebar_position: 1
---

# 📊 Excel 模块使用指南

## 核心场景

### 生成测试数据

```python
import office

office.excel.fake2excel(
    columns=['name', 'phone', 'email', 'address'],
    rows=1000,
    path='./test_users.xlsx'
)
```

**可用字段**：name, phone, email, address, company, job, country, city, postcode, ssn, credit_card_number, user_agent, text, sentence

### 合并多个 Excel

```python
office.excel.merge2excel(
    dir_path='./部门报表/',
    output_file='月度汇总.xlsx'
)
```

### 拆分多 sheet Excel

```python
office.excel.sheet2excel(
    file_path='./multi_sheet.xlsx',
    output_path='./拆分后/'
)
```

### 合并多个 Sheet

```python
office.excel.merge2sheet(
    dir_path='./excels/',
    output_sheet_name='汇总',
    output_excel_name='all_merged'
)
```

### 搜索 Excel 内容

```python
office.excel.find_excel_data(
    search_key='客户A',
    target_dir='./历史合同/'
)
```

### 按列拆分

```python
office.excel.split_excel_by_column(
    filepath='./员工信息.xlsx',
    column=2
)
```

### Excel 转 PDF

```python
office.excel.excel2pdf(
    excel_path='./月报.xlsx',
    pdf_path='./月报.pdf',
    sheet_id=0
)
```

## 完整 API

详见 [Excel API 参考](/modules/excel/api)

## 实战案例：自动化生成月度报告

```python
import office
from datetime import datetime

# 1. 生成测试数据
office.excel.fake2excel(
    columns=['name', 'company', 'sale'],
    rows=200,
    path=f'./data/{datetime.now():%Y%m}_data.xlsx'
)

# 2. 合并本月所有分公司的报表
office.excel.merge2excel(
    dir_path=f'./data/{datetime.now():%Y%m}/',
    output_file=f'./reports/{datetime.now():%Y%m}_合并报表.xlsx'
)

# 3. 转换为 PDF 方便分享
office.excel.excel2pdf(
    excel_path=f'./reports/{datetime.now():%Y%m}_合并报表.xlsx',
    pdf_path=f'./reports/{datetime.now():%Y%m}_合并报表.pdf'
)
```

## 常见问题

**Q: 处理大文件速度慢？**
A: Excel 操作依赖 openpyxl/pandas，建议 Excel 不要超过 10 万行。

**Q: 合并后格式错乱？**
A: 合并仅保留数据，不保留原始格式。如需保留格式请用 VBA 宏。
