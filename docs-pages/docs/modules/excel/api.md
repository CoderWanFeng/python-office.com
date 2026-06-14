---
title: Excel API 参考
description: Excel 模块完整 API 文档
sidebar_position: 2
---

# 📊 Excel API 参考

> 子库名：`poexcel` | 安装：`pip install poexcel`
> 导入：`import office` 或 `import poexcel`

## 函数总览

| 函数 | 功能 | 难度 |
|------|------|------|
| [`fake2excel`](#fake2excel) | 自动生成模拟数据 | ⭐ |
| [`merge2excel`](#merge2excel) | 合并多个 Excel | ⭐⭐ |
| [`sheet2excel`](#sheet2excel) | 拆分 sheet | ⭐⭐ |
| [`merge2sheet`](#merge2sheet) | 合并多个 sheet | ⭐⭐ |
| [`find_excel_data`](#find_excel_data) | 搜索 Excel | ⭐⭐ |
| [`split_excel_by_column`](#split_excel_by_column) | 按列拆分 | ⭐⭐⭐ |
| [`excel2pdf`](#excel2pdf) | Excel 转 PDF | ⭐ |

---

## fake2excel

自动创建 Excel 文件并模拟数据。

**函数签名**：
```python
office.excel.fake2excel(
    columns=['name'],
    rows=1,
    path='./fake2excel.xlsx',
    language='zh_CN'
)
```

**参数说明**：

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `columns` | list | 否 | `['name']` | 列名列表 |
| `rows` | int | 否 | `1` | 生成的行数 |
| `path` | str | 否 | `'./fake2excel.xlsx'` | 输出文件路径 |
| `language` | str | 否 | `'zh_CN'` | 数据语言（`'zh_CN'` 或 `'english'`） |

**示例**：

```python
import office

# 示例 1：生成简单 Excel
office.excel.fake2excel(columns=['name'], rows=10, path='names.xlsx')

# 示例 2：生成多列用户数据
office.excel.fake2excel(
    columns=['name', 'phone', 'email', 'address', 'company'],
    rows=100,
    path='users.xlsx'
)

# 示例 3：生成英文数据
office.excel.fake2excel(
    columns=['name', 'country', 'city'],
    rows=50,
    path='english_data.xlsx',
    language='english'
)
```

---

## merge2excel

将多个 Excel 文件合并到一个 Excel 的不同 sheet 中。

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

将同一个 Excel 的不同 sheet 拆分为不同的 Excel 文件。

```python
office.excel.sheet2excel(
    file_path,
    output_path='./'
)
```

---

## merge2sheet

自动合并多个 Excel 文件的多个 sheet 到一个 Excel。

```python
office.excel.merge2sheet(
    dir_path,
    output_sheet_name='Sheet1',
    output_excel_name='merge2sheet'
)
```

---

## find_excel_data

在 Excel 文件中搜索指定内容。

```python
office.excel.find_excel_data(
    search_key,
    target_dir
)
```

```python
office.excel.find_excel_data(
    search_key='程序员晚枫',
    target_dir='./excels/'
)
```

---

## split_excel_by_column

按指定列的内容拆分 Excel 文件。

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

将 Excel 文件转换为 PDF 格式。

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

## 相关资源

- 📖 [使用指南 →](/modules/excel/guide)
- 📦 [PyPI: poexcel](https://pypi.org/project/poexcel/)
