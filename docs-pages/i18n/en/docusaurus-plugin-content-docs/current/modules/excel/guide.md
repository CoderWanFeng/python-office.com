---
title: Excel Guide
description: "Excel operations: generation, merge, split, search, PDF export"
sidebar_position: 1
---

# 📊 Excel Module Guide

## Core Scenarios

### Generate Test Data

```python
import office

office.excel.fake2excel(
    columns=['name', 'phone', 'email', 'address'],
    rows=1000,
    path='./test_users.xlsx'
)
```

**Available fields**: name, phone, email, address, company, job, country, city, postcode, ssn, credit_card_number, user_agent, text, sentence

### Merge Multiple Excel Files

```python
office.excel.merge2excel(
    dir_path='./department_reports/',
    output_file='monthly_summary.xlsx'
)
```

### Split a Multi-Sheet Excel

```python
office.excel.sheet2excel(
    file_path='./multi_sheet.xlsx',
    output_path='./split_output/'
)
```

### Merge Multiple Sheets

```python
office.excel.merge2sheet(
    dir_path='./excels/',
    output_sheet_name='Summary',
    output_excel_name='all_merged'
)
```

### Search Excel Content

```python
office.excel.find_excel_data(
    search_key='Customer A',
    target_dir='./historical_contracts/'
)
```

### Split by Column

```python
office.excel.split_excel_by_column(
    filepath='./employee_info.xlsx',
    column=2
)
```

### Excel to PDF

```python
office.excel.excel2pdf(
    excel_path='./monthly_report.xlsx',
    pdf_path='./monthly_report.pdf',
    sheet_id=0
)
```

## Full API

See [Excel API Reference](/modules/excel/api)

## Real-World Example: Automating Monthly Reports

```python
import office
from datetime import datetime

# 1. Generate test data
office.excel.fake2excel(
    columns=['name', 'company', 'sale'],
    rows=200,
    path=f'./data/{datetime.now():%Y%m}_data.xlsx'
)

# 2. Merge all branch reports for the current month
office.excel.merge2excel(
    dir_path=f'./data/{datetime.now():%Y%m}/',
    output_file=f'./reports/{datetime.now():%Y%m}_merged_report.xlsx'
)

# 3. Convert to PDF for easy sharing
office.excel.excel2pdf(
    excel_path=f'./reports/{datetime.now():%Y%m}_merged_report.xlsx',
    pdf_path=f'./reports/{datetime.now():%Y%m}_merged_report.pdf'
)
```

## FAQ

**Q: Slow when processing large files?**
A: Excel operations rely on openpyxl/pandas; it is recommended to keep Excel files under 100,000 rows.

**Q: Formatting is messed up after merging?**
A: Merging only keeps the data, not the original formatting. To preserve formatting, use VBA macros.