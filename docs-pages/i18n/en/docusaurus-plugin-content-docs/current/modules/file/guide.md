---
title: File Guide
description: "File: batch rename, file search, organization"
sidebar_position: 1
---

# 📁 File Module Guide

The File module focuses on **batch file management**, especially **rename** and **search**.

## Core Scenarios

### Batch Rename (Replace)
```python
import office
office.file.replace4filename(
    path='./photos/',
    del_content='IMG_',
    replace_content='travel_'
)
```

### Add Prefix / Suffix
```python
office.file.file_name_add_prefix(file_path='./docs/', prefix_content='2026_')
office.file.file_name_add_postfix(file_path='./docs/', postfix_content='_v1')
```

### Export File Names to Excel
```python
office.file.output_file_list_to_excel(dir_path='./docs/')
```

### Search Files by Type
```python
files = office.file.get_files(path='./', suffix='.xlsx', sub=True)
print(f"Found {len(files)} Excel files")
```

Full API see [File API Reference](/modules/file/api)