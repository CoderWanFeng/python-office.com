---
title: Excel API Reference
description: Excel module API reference documentation
sidebar_position: 2
---

# 📊 Excel API Reference

> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*



# 📊 Excel API Reference

> Sub-package: `poexcel` | Install: `pip install poexcel`
> Import: `import office` or `import poexcel`

## Function Overview

| Function | Description | Difficulty |
|----------|-------------|------------|
| [`fake2excel`](#fake2excel) | Auto-generate mock data | ⭐ |
| [`merge2excel`](#merge2excel) | Merge multiple Excel files | ⭐⭐ |
| [`sheet2excel`](#sheet2excel) | Split sheets | ⭐⭐ |
| [`merge2sheet`](#merge2sheet) | Merge multiple sheets | ⭐⭐ |
| [`find_excel_data`](#find_excel_data) | Search Excel | ⭐⭐ |
| [`split_excel_by_column`](#split_excel_by_column) | Split by column | ⭐⭐⭐ |
| [`excel2pdf`](#excel2pdf) | Excel to PDF | ⭐ |

---

## fake2excel

Auto-create an Excel file with mock data.

**Function signature**:
```python
office.excel.fake2excel(
    columns=['name'],
    rows=1,
    path='./fake2excel.xlsx',
    language='zh_CN'
)
```

**Parameters**:

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `columns` | list | No | `['name']` | List of column names |
| `rows` | int | No | `1` | Number of rows to generate |
| `path` | str | No | `'./fake2excel.xlsx'` | Output file path |
| `language` | str | No | `'zh_CN'` | Data language (`'zh_CN'` or `'english'`) |

**Examples**:

```python
import office

# Example 1: Generate a simple Excel
office.excel.fake2excel(columns=['name'], rows=10, path='names.xlsx')

# Example 2: Multi-column user data
office.excel.fake2excel(
    columns=['name', 'phone', 'email', 'address', 'company'],
    rows=100,
    path='users.xlsx'
)

# Example 3: English data
office.excel.fake2excel(
    columns=['name', 'country', 'city'],
    rows=50,
    path='english_data.xlsx',
    language='english'
)
```

---

## merge2excel

Merge multiple Excel files into different sheets of one Excel.

```python
office.excel.merge2excel(
    dir_path,
    output_file='merge2excel.xlsx'
)
```

```python
office.excel.merge2excel(
    dir_path='./excels/',
    output_file='merged.xlsx'
)
```

---

## sheet2excel

Split different sheets of one Excel into different Excel files.

```python
office.excel.sheet2excel(
    file_path,
    output_path='./'
)
```

---

## merge2sheet

Auto-merge multiple sheets from multiple Excel files into one Excel.

```python
office.excel.merge2sheet(
    dir_path,
    output_sheet_name='Sheet1',
    output_excel_name='merge2sheet'
)
```

---

## find_excel_data

Search for specified content in Excel files.

```python
office.excel.find_excel_data(
    search_key,
    target_dir
)
```

```python
office.excel.find_excel_data(
    search_key='Customer A',
    target_dir='./excels/'
)
```

---

## split_excel_by_column

Split an Excel file by the values of a specified column.

```python
office.excel.split_excel_by_column(
    filepath,
    column,
    worksheet_name=None
)
```

```python
office.excel.split_excel_by_column(
    filepath='sales_data.xlsx',
    column=2
)
```

---

## excel2pdf

Convert an Excel file to PDF format.

```python
office.excel.excel2pdf(
    excel_path,
    pdf_path,
    sheet_id=0
)
```

```python
office.excel.excel2pdf(
    excel_path='report.xlsx',
    pdf_path='./output/report.pdf',
    sheet_id=1
)
```

## Related Resources

- 📖 [Usage Guide →](/modules/excel/guide)
- 📦 [PyPI: poexcel](https://pypi.org/project/poexcel/)