---
title: PPT API Reference
sidebar_position: 2
---

# 📊 PPT API Reference

> Sub-package: `poppt` | Install: `pip install poppt`
> Import: `import office` or `import poppt`

## Function Overview

| Function | Description |
|----------|-------------|
| `ppt2pdf(path, output_path='./')` | PPT to PDF |
| `ppt2img(input_path, output_path='./', merge=False)` | PPT to image |
| `merge4ppt(input_path, output_path='./', output_name='merge4ppt.pptx')` | Merge PPT |

## Examples

```python
import office

office.ppt.ppt2pdf(path='presentation.pptx', output_path='./output/')
office.ppt.ppt2img(input_path='presentation.pptx', output_path='./images/', merge=True)
office.ppt.merge4ppt(input_path='./ppt_files/', output_name='combined.pptx')
```

- 📖 [Usage Guide →](/modules/ppt/guide)
- 📦 [PyPI: poppt](https://pypi.org/project/poppt/)