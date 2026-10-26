---
title: 更新日志
description: python-office 版本更新记录
sidebar_position: 2
---

# 更新日志

## v1.1.0（最新）

### 新增功能
- 🆕 **命令行工具 `po`**：7 大模块 42 个子命令，不写代码也能用
  - `po pdf merge2pdf a.pdf b.pdf --output-file merged.pdf`
  - `po --json tools url2ip www.python-office.com` —— 单行 JSON 输出，方便脚本与 AI Agent 调用
  - `python -m office` 为等价入口
- 🆕 **5 个 Excel 数据核对方法**（PR #185）
  - `excel_diff` 比对两份 Excel，支持按主键配对
  - `excel_dedupe` 按列或整行去重，返回重复明细
  - `excel_column_stats` 逐列画像，输出填充率、类型、唯一值数与数值分布
  - `excel2json` 工作表转 JSON，支持 records / columns / values 三种结构
  - `excel2csv` 导出 CSV，默认 utf-8-sig 规避中文乱码
- 🆕 `batch_rename_by_excel` 按 Excel 映射批量重命名文件（PR #183）

### 优化
- ⚡ **`import office` 改为 PEP 562 懒加载**：不再拖入整套 po* 依赖树，安装体积与启动速度大幅优化
- 🐛 修复贡献者 Skill 兜底分支抛 NameError 而非 ImportError 的问题
- 📝 同步更新 wiki 文档中的版本号与代码结构统计

### 升级方式

```bash
pip install python-office --upgrade
```

> 📖 完整更新说明见 [python-office 1.1.0 发布公告](/about/v1.1.0-release)

## v1.0.6

### 新增功能
- ✨ `office.markdown.excel2markdown` Excel 转 Markdown
- ✨ `office.image.del_watermark` 图片去水印
- ✨ `office.image.image2gif` 图片转 GIF
- 🐛 修复 PDF 转 Word 时的中文乱码问题

### 优化
- 提升 PDF 加水印性能
- 改进 `add_watermark_by_parameters` 的参数校验
- 优化 API 文档结构

## v1.0.5

### 新增功能
- ✨ `office.finance.t0` 股票 T+0 计算
- ✨ `office.tools.net_speed_test` 网速测试
- ✨ `office.tools.create_article` AI 生成文章

## v1.0.4

### 新增功能
- ✨ `office.tools.pwd4wifi` WiFi 密码生成
- ✨ `office.tools.lottery8ticket` 彩票生成

## v1.0.3

### 新增功能
- ✨ `office.video.txt2mp3` 文本转语音

## v1.0.0

🎉 **正式版发布**！

- 📊 Excel 模块（7 个函数）
- 📝 Word 模块（5 个函数）
- 📑 PDF 模块（13 个函数）
- 🖼️ Image 模块（9 个函数）
- 📁 File 模块（9 个函数）
- 📧 Email 模块（2 个函数）
- 💬 WeChat 模块（7 个函数）
- 🔍 OCR 模块（1 个函数）
- 🎬 Video 模块（3 个函数）
- 🛠️ Tools 模块（8 个函数）

## 升级方式

```bash
pip install python-office --upgrade
```

## 反馈与建议

- 🐛 报告 Bug：[GitHub Issues](https://github.com/CoderWanFeng/python-office/issues)
- 💡 功能建议：[GitHub Discussions](https://github.com/CoderWanFeng/python-office/discussions)
