---
title: Markdown API Reference
sidebar_position: 2
---

# 📝 Markdown API Reference

> Sub-package: `pomarkdown` | Install: `pip install pomarkdown`
> Import: `import office` or `import pomarkdown`

## excel2markdown

```python
office.markdown.excel2markdown(
    input_file,
    output_file,
    sheet_name=None
)
```

## Examples

```python
import office

office.markdown.excel2markdown(input_file='data.xlsx', output_file='output.md')

office.markdown.excel2markdown(
    input_file='data.xlsx', output_file='sheet1.md', sheet_name='Sheet1'
)
```

- 📖 [Usage Guide →](/modules/markdown/guide)
- 📦 [PyPI: pomarkdown](https://pypi.org/project/pomarkdown/)