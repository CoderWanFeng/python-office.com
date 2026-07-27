---
title: File API Reference
sidebar_position: 2
---

# 📁 File API Reference

> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*



# 📁 File API Reference

> Sub-package: `pofile` | Install: `pip install pofile`
> Import: `import office` or `import pofile`

## Function Overview

| Function | Description |
|----------|-------------|
| `replace4filename(path, del_content, replace_content)` | Batch replace & rename |
| `file_name_insert_content(file_path, insert_position, insert_content)` | Insert in the middle |
| `file_name_add_prefix(file_path, prefix_content)` | Add prefix |
| `file_name_add_postfix(file_path, postfix_content)` | Add suffix |
| `output_file_list_to_excel(dir_path)` | File names → Excel |
| `search_specify_type_file(file_path, file_type)` | Search by file type |
| `get_files(path, name, suffix, sub, level)` | Search and return list |
| `add_line_by_type(add_line_dict, file_path)` | Add line by type |
| `group_by_name(path, output_path, del_old_file)` | Group by name |

## Examples

```python
import office

office.file.replace4filename(
    path='./photos/', del_content='IMG_', replace_content='travel_'
)

office.file.file_name_add_prefix(file_path='./docs/', prefix_content='2026_')

files = office.file.get_files(path='./', suffix='.xlsx', sub=True)
```

- 📖 [Usage Guide →](/modules/file/guide)
- 📦 [PyPI: pofile](https://pypi.org/project/pofile/)