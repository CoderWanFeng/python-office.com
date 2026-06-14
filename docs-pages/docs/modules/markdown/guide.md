---
title: Markdown 使用指南
description: 使用 python-office 进行 Markdown 转换
sidebar_position: 1
---

# 📝 Markdown 模块使用指南

Markdown 模块提供 Excel 与 Markdown 格式的互转。

## 核心场景

### Excel 转 Markdown
```python
import office
office.markdown.excel2markdown(
    input_file='./data.xlsx',
    output_file='./output.md'
)
```

### 转换指定 sheet
```python
office.markdown.excel2markdown(
    input_file='./data.xlsx',
    output_file='./sheet1.md',
    sheet_name='Sheet1'
)
```

## 使用场景

- **文档编写**：把 Excel 数据嵌入 Markdown 文档
- **博客发布**：将表格数据发布到支持 Markdown 的平台
- **README 制作**：为 GitHub 项目自动生成表格文档

完整 API 见 [Markdown API 参考](/modules/markdown/api)
