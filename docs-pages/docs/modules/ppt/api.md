---
title: PPT API 参考
sidebar_position: 2
---

# 📊 PPT API 参考

> 子库名：`poppt` | 安装：`pip install poppt`
> 导入：`import office` 或 `import poppt`

## 函数总览

| 函数 | 功能 |
|------|------|
| `ppt2pdf(path, output_path='./')` | PPT 转 PDF |
| `ppt2img(input_path, output_path='./', merge=False)` | PPT 转图片 |
| `merge4ppt(input_path, output_path='./', output_name='merge4ppt.pptx')` | 合并 PPT |

## 示例

```python
import office

office.ppt.ppt2pdf(path='presentation.pptx', output_path='./output/')
office.ppt.ppt2img(input_path='presentation.pptx', output_path='./images/', merge=True)
office.ppt.merge4ppt(input_path='./ppt_files/', output_name='combined.pptx')
```

- 📖 [使用指南 →](/modules/ppt/guide)
- 📦 [PyPI: poppt](https://pypi.org/project/poppt/)
