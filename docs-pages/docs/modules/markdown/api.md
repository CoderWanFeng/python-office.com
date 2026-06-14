---
title: Markdown API 参考
sidebar_position: 2
---

# 📝 Markdown API 参考

> 子库名：`pomarkdown` | 安装：`pip install pomarkdown`
> 导入：`import office` 或 `import pomarkdown`

## excel2markdown

```python
office.markdown.excel2markdown(
    input_file,
    output_file,
    sheet_name=None
)
```

## 示例

```python
import office

office.markdown.excel2markdown(input_file='data.xlsx', output_file='output.md')

office.markdown.excel2markdown(
    input_file='data.xlsx', output_file='sheet1.md', sheet_name='Sheet1'
)
```

- 📖 [使用指南 →](/modules/markdown/guide)
- 📦 [PyPI: pomarkdown](https://pypi.org/project/pomarkdown/)
