---
title: 5分钟快速体验
description: 通过 5 个例子快速感受 python-office
sidebar_position: 3
---

# ⚡ 5 分钟快速体验

通过 5 个真实场景的示例，让你快速感受 python-office 的便捷。

## 1️⃣ 一行代码生成 Excel 模拟数据

```python
import office

office.excel.fake2excel(
    columns=['name', 'phone', 'email', 'address'],
    rows=100,
    path='./users.xlsx'
)
```

## 2️⃣ 一行代码合并多个 Excel

```python
import office

office.excel.merge2excel(
    dir_path='./excels/',
    output_file='all_merged.xlsx'
)
```

## 3️⃣ 一行代码 PDF 转 Word

```python
import office

office.pdf.pdf2docx(
    input_file='./合同.pdf',
    output_file='./合同.docx'
)
```

## 4️⃣ 一行代码给图片加水印

```python
import office

office.image.add_watermark(
    file='./photo.jpg',
    mark='@python-office',
    output_path='./output/'
)
```

## 5️⃣ 一行代码批量发送邮件

```python
import office

office.email.send_email(
    key='你的邮箱授权码',
    msg_from='your@qq.com',
    msg_to='colleague@qq.com',
    msg_subject='项目周报',
    content='请查收本周工作汇报。',
    attach_files=['./周报.pdf']
)
```

## 完整可运行示例

```python
import office

print("=== python-office 5 分钟快速体验 ===\n")

print("1️⃣ 生成 Excel 模拟数据")
office.excel.fake2excel(
    columns=['name', 'phone', 'email'],
    rows=10,
    path='./demo_users.xlsx'
)
print("   ✅ 完成\n")

print("2️⃣ 图片加水印")
office.image.add_watermark(
    file='./demo_photo.jpg',
    mark='@python-office',
    output_path='./demo_output/'
)
print("   ✅ 完成\n")

print("3️⃣ 创建词云")
office.image.txt2wordcloud(
    filename='./demo_article.txt',
    result_file='./demo_wordcloud.png'
)
print("   ✅ 完成\n")

print("=== 体验完成！===")
print("📚 想学更多？查看 [模块文档](/modules/overview)")
```

## 接下来...

- 📚 [深入学习各模块](/modules/overview)
- 🔧 [查询 API 文档](/modules/excel/api)
- ❓ [遇到问题](/start/faq)
