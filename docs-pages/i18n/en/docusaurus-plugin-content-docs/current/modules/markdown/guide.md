---
title: Markdown Guide
description: Excel to Markdown conversion
sidebar_position: 1
---

# 📝 Markdown Module Guide

> *This page is currently only available in Chinese. Please switch to 简体中文 for the full content.*



# 📝 Markdown Module Guide

The Markdown module provides bidirectional conversion between Excel and Markdown.

## Core Scenarios

### Excel to Markdown
```python
import office
office.markdown.excel2markdown(
    input_file='./data.xlsx',
    output_file='./output.md'
)
```

### Convert a Specific Sheet
```python
office.markdown.excel2markdown(
    input_file='./data.xlsx',
    output_file='./sheet1.md',
    sheet_name='Sheet1'
)
```

## Use Cases

- **Document writing**: embed Excel data into Markdown documents
- **Blog publishing**: publish tabular data to Markdown-friendly platforms
- **README generation**: auto-generate table docs for GitHub projects

Full API see [Markdown API Reference](/modules/markdown/api)