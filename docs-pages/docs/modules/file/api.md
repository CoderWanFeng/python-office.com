---
title: File API 参考
sidebar_position: 2
---

# 📁 File API 参考

> 子库名：`pofile` | 安装：`pip install pofile`
> 导入：`import office` 或 `import pofile`

## 函数总览

| 函数 | 功能 |
|------|------|
| `replace4filename(path, del_content, replace_content)` | 批量替换重命名 |
| `file_name_insert_content(file_path, insert_position, insert_content)` | 中间插入 |
| `file_name_add_prefix(file_path, prefix_content)` | 加前缀 |
| `file_name_add_postfix(file_path, postfix_content)` | 加后缀 |
| `output_file_list_to_excel(dir_path)` | 文件名 → Excel |
| `search_specify_type_file(file_path, file_type)` | 搜索指定类型 |
| `get_files(path, name, suffix, sub, level)` | 搜索并返回列表 |
| `add_line_by_type(add_line_dict, file_path)` | 按类型添加行 |
| `group_by_name(path, output_path, del_old_file)` | 按名称分组 |

## 示例

```python
import office

office.file.replace4filename(
    path='./photos/', del_content='IMG_', replace_content='旅行_'
)

office.file.file_name_add_prefix(file_path='./docs/', prefix_content='2026_')

files = office.file.get_files(path='./', suffix='.xlsx', sub=True)
```

- 📖 [使用指南 →](/modules/file/guide)
- 📦 [PyPI: pofile](https://pypi.org/project/pofile/)
