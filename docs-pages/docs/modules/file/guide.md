---
title: File 使用指南
description: 使用 python-office 进行文件管理
sidebar_position: 1
---

# 📁 File 模块使用指南

File 模块专注于**批量文件管理**，尤其是**重命名**和**搜索**。

## 核心场景

### 批量重命名（替换）
```python
import office
office.file.replace4filename(
    path='./照片/',
    del_content='IMG_',
    replace_content='旅行_'
)
```

### 加前缀/后缀
```python
office.file.file_name_add_prefix(file_path='./文档/', prefix_content='2026_')
office.file.file_name_add_postfix(file_path='./文档/', postfix_content='_v1')
```

### 文件名导出到 Excel
```python
office.file.output_file_list_to_excel(dir_path='./文档/')
```

### 按类型搜索文件
```python
files = office.file.get_files(path='./', suffix='.xlsx', sub=True)
print(f"找到 {len(files)} 个 Excel 文件")
```

完整 API 见 [File API 参考](/modules/file/api)
