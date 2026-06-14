---
title: 模块总览
description: python-office 13 大功能模块
sidebar_position: 1
---

# 📦 模块总览

python-office 提供 **13 大功能模块**，覆盖办公自动化的方方面面。每个模块下都有：
- 📖 **使用指南**（guide.md）— 用例、实战、最佳实践
- 🔧 **API 参考**（api.md）— 完整函数、参数、示例

## 模块列表

### 📊 办公文档处理

| 模块 | 简介 | 函数数 | 难度 |
|------|------|--------|------|
| [📊 Excel](/modules/excel/guide) | 数据生成、合并、拆分、搜索、PDF导出 | 7 | ⭐ |
| [📝 Word](/modules/word/guide) | Word/PDF转换、合并、图片提取 | 5 | ⭐ |
| [📑 PDF](/modules/pdf/guide) | 转换、加解密、合并、拆分、水印 | 13 | ⭐⭐ |
| [📊 PPT](/modules/ppt/guide) | 转PDF、转图片、合并 | 3 | ⭐ |
| [📝 Markdown](/modules/markdown/guide) | Excel 转 Markdown | 1 | ⭐ |

### 🖼️ 多媒体处理

| 模块 | 简介 | 函数数 | 难度 |
|------|------|--------|------|
| [🖼️ Image](/modules/image/guide) | 压缩、水印、二维码、词云、卡通化 | 9 | ⭐⭐ |
| [🎬 Video](/modules/video/guide) | 音视频转换、加水印 | 4 | ⭐⭐ |
| [🔍 OCR](/modules/ocr/guide) | 发票识别 → Excel | 1 | ⭐⭐ |

### 💬 通信协作

| 模块 | 简介 | 函数数 | 难度 |
|------|------|--------|------|
| [📧 Email](/modules/email/guide) | 自动收发邮件、附件、群发 | 2 | ⭐⭐ |
| [💬 WeChat](/modules/wechat/guide) | 微信机器人、自动回复 | 7 | ⭐⭐ |

### 🛠️ 实用工具

| 模块 | 简介 | 函数数 | 难度 |
|------|------|--------|------|
| [📁 File](/modules/file/guide) | 批量重命名、文件管理 | 9 | ⭐ |
| [💰 Finance](/modules/finance/guide) | 股票 T+0 收益计算 | 1 | ⭐ |
| [🛠️ Tools](/modules/tools/guide) | 翻译、二维码、密码等 10+ 工具 | 10 | ⭐ |

**总计：72+ 个 API 函数**

## 如何选择模块？

- 想处理 **Excel 表格** → [Excel 模块](/modules/excel/guide)
- 想转换 **文档格式**（PDF↔Word↔PPT） → [PDF 模块](/modules/pdf/guide)
- 想给 **图片加水印/生成二维码** → [Image 模块](/modules/image/guide)
- 想做 **微信机器人** → [WeChat 模块](/modules/wechat/guide)
- 想 **自动发邮件** → [Email 模块](/modules/email/guide)
- 想 **批量管理文件** → [File 模块](/modules/file/guide)

## 学习建议

1. **按需学习**：不必一次学完所有模块，用到哪个学哪个
2. **从指南开始**：每个模块的 guide.md 都有多个真实场景示例
3. **查 API 不必看指南**：直接看 api.md 更快
