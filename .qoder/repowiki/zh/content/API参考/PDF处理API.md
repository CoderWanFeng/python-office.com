# PDF处理API

<cite>
**本文档中引用的文件**   
- [50-04-pdf2docx.py](file://docs-pages/vuepress/course/code/50-04-pdf2docx.py)
- [50-05-docx2pdf.py](file://docs-pages/vuepress/course/code/50-05-docx2pdf.py)
- [50-38-encrypt4pdf.py](file://docs-pages/vuepress/course/code/50-38-encrypt4pdf.py)
- [50-39-decrypt4pdf.py](file://docs-pages/vuepress/course/code/50-39-decrypt4pdf.py)
- [50-40-merge2pdf.py](file://docs-pages/vuepress/course/code/50-40-merge2pdf.py)
- [50-41-pdf2imgs.py](file://docs-pages/vuepress/course/code/50-41-pdf2imgs.py)
- [50-42-add_watermark.py](file://docs-pages/vuepress/course/code/50-42-add_watermark.py)
- [50-37-add_watermark_by_parameters.py](file://docs-pages/vuepress/course/code/50-37-add_watermark_by_parameters.py)
- [50-17-del_watermark.py](file://docs-pages/vuepress/course/code/50-17-del_watermark.py)
</cite>

## 目录
1. [简介](#简介)
2. [核心功能](#核心功能)
3. [文件转换](#文件转换)
4. [加密与解密](#加密与解密)
5. [合并与分割](#合并与分割)
6. [图像处理](#图像处理)
7. [水印处理](#水印处理)
8. [依赖库说明](#依赖库说明)
9. [文件流与内存管理](#文件流与内存管理)
10. [使用场景](#使用场景)
11. [性能优化](#性能优化)
12. [异常处理](#异常处理)

## 简介
本API文档详细介绍了Python-Office库中与PDF处理相关的各项功能。该库提供了一套简洁的接口，通过"1行代码"即可实现复杂的PDF处理任务，包括格式转换、加密解密、合并分割、图像转换和水印处理等。文档将深入解析每个功能的参数配置、返回值机制和异常处理策略。

## 核心功能
Python-Office的PDF处理模块提供了全面的文档处理能力，主要功能包括：
- PDF与Word文档之间的相互转换
- PDF文档的加密与解密
- 多个PDF文件的合并
- PDF页面转换为图像
- 文档水印的添加与删除
- 批量处理支持

这些功能通过统一的`office.pdf`和`office.word`接口提供，极大地简化了PDF处理的复杂性。

**文档来源**
- [50-04-pdf2docx.py](file://docs-pages/vuepress/course/code/50-04-pdf2docx.py)
- [50-05-docx2pdf.py](file://docs-pages/vuepress/course/code/50-05-docx2pdf.py)
- [50-38-encrypt4pdf.py](file://docs-pages/vuepress/course/code/50-38-encrypt4pdf.py)

## 文件转换

### PDF转Word
`pdf2docx`函数实现了PDF到Word文档的转换功能。

**参数说明**：
- `file_path`: 输入PDF文件的路径
- `output_path`: 转换后Word文件的输出路径

**使用示例**：
```python
office.pdf.pdf2docx(file_path=r'./input.pdf', output_path=r'./output.docx')
```

**异常处理**：
- 文件不存在时抛出`FileNotFoundError`
- 格式不支持时抛出`ValueError`
- 权限不足时抛出`PermissionError`

**文档来源**
- [50-04-pdf2docx.py](file://docs-pages/vuepress/course/code/50-04-pdf2docx.py#L13-L14)

### Word转PDF
`docx2pdf`函数实现了Word文档到PDF的批量转换。

**参数说明**：
- `path`: 输入Word文件或目录的路径
- `output_path`: 转换后PDF文件的输出路径

**使用示例**：
```python
office.word.docx2pdf(path=r'./documents/', output_path=r'./pdfs/')
```

**批处理特性**：
- 支持单个文件转换
- 支持整个目录的批量转换
- 自动保持原始文件名结构

**文档来源**
- [50-05-docx2pdf.py](file://docs-pages/vuepress/course/code/50-05-docx2pdf.py#L13-L14)

## 加密与解密

### PDF加密
`encrypt4pdf`函数为PDF文档添加密码保护。

**参数说明**：
- `path`: 待加密PDF文件的路径
- `password`: 设置的密码
- `output_path`: 加密后文件的输出路径（可选）

**使用示例**：
```python
office.pdf.encrypt4pdf(path=r'./document.pdf', password="123@#", output_path=r'./encrypted/')
```

**安全特性**：
- 使用标准PDF加密算法
- 支持设置用户密码和所有者密码
- 可配置权限限制

**文档来源**
- [50-38-encrypt4pdf.py](file://docs-pages/vuepress/course/code/50-38-encrypt4pdf.py#L22-L25)

### PDF解密
`decrypt4pdf`函数用于移除PDF文档的密码保护。

**参数说明**：
- `path`: 待解密PDF文件的路径
- `password`: 原始密码
- `res_pdf`: 解密后文件的完整路径

**使用示例**：
```python
office.pdf.decrypt4pdf(path=r'./encrypted.pdf', password="123@#", res_pdf=r'./decrypted.pdf')
```

**错误处理**：
- 密码错误时抛出`AuthenticationError`
- 文件已解密时抛出`AlreadyDecryptedError`

**文档来源**
- [50-39-decrypt4pdf.py](file://docs-pages/vuepress/course/code/50-39-decrypt4pdf.py#L34-L37)

## 合并与分割

### PDF合并
`merge2pdf`函数将多个PDF文件合并为单个文档。

**参数说明**：
- `one_by_one`: 待合并PDF文件路径列表
- `output`: 合并后文件的完整路径

**使用示例**：
```python
office.pdf.merge2pdf(one_by_one=['file1.pdf', 'file2.pdf'], output=r'./merged.pdf')
```

**合并策略**：
- 按列表顺序合并
- 保持原始页面布局
- 支持跨目录文件合并

**文档来源**
- [50-40-merge2pdf.py](file://docs-pages/vuepress/course/code/50-40-merge2pdf.py#L60-L62)

## 图像处理

### PDF转图像
`pdf2imgs`功能将PDF页面转换为图像文件。

**参数说明**：
- 输入PDF路径
- 输出图像格式（JPEG、PNG等）
- 分辨率设置
- 页面范围选择

**使用场景**：
- 文档预览生成
- 内容提取
- 数字资产管理

**文档来源**
- [50-41-pdf2imgs.py](file://docs-pages/vuepress/course/code/50-41-pdf2imgs.py)

## 水印处理

### 添加水印
提供两种水印添加方式：

**参数化水印**：
```python
office.pdf.add_watermark_by_parameters(
    pdf_file=r'./document.pdf',
    mark_str="www.python-office.com"
)
```

**图像水印**：
```python
office.image.add_watermark(
    file='./image.png',
    mark='python办公自动化',
    color="#ff0000",
    size=80,
    opacity=0.5,
    space=600,
    angle=30
)
```

**水印参数**：
- `color`: 水印颜色
- `size`: 字体大小
- `opacity`: 透明度
- `space`: 水印间距
- `angle`: 旋转角度

**文档来源**
- [50-37-add_watermark_by_parameters.py](file://docs-pages/vuepress/course/code/50-37-add_watermark_by_parameters.py#L31-L34)
- [50-42-add_watermark.py](file://docs-pages/vuepress/course/code/50-42-add_watermark.py#L21-L24)

### 删除水印
`del_watermark`函数用于移除文档中的水印。

**参数说明**：
- 输入文件路径
- 输出路径
- 水印识别模式

**文档来源**
- [50-17-del_watermark.py](file://docs-pages/vuepress/course/code/50-17-del_watermark.py)

## 依赖库说明
PDF处理功能基于以下底层库实现：

**PyPDF2**：
- 用于PDF读写操作
- 支持加密解密
- 提供页面合并功能

**pdf2image**：
- PDF到图像转换
- 支持多种图像格式
- 可配置分辨率

**reportlab**：
- 水印生成
- PDF内容创建
- 图形绘制

**平台兼容性**：
- Windows: 使用`python-office`包
- Mac/Linux: 使用`popdf`包

## 文件流与内存管理

### 文件流处理
- 支持文件路径和文件对象输入
- 流式处理减少内存占用
- 临时文件自动清理

### 临时文件策略
- 转换过程中的中间文件
- 自动命名和目录管理
- 异常时的清理机制

### 大文件优化
- 分页处理机制
- 内存缓冲区控制
- 进度反馈接口

## 使用场景

### 批量转换
适用于：
- 大量文档格式转换
- 自动化工作流集成
- 定期任务执行

### 安全文档生成
应用场景：
- 合同和协议保护
- 敏感信息加密
- 访问权限控制

### 文档归档
- 合并相关文档
- 统一格式存储
- 添加追溯水印

## 性能优化

### 性能瓶颈
- 大文件内存占用
- 多页文档处理时间
- 高分辨率图像转换

### 规避方法
- 分批处理大文件
- 适当降低输出质量
- 并行处理独立任务
- 使用SSD存储提高I/O性能

## 异常处理
统一的异常处理机制包括：
- `FileNotFoundError`: 文件路径错误
- `PermissionError`: 权限不足
- `AuthenticationError`: 密码错误
- `FormatError`: 格式不支持
- `MemoryError`: 内存不足

所有异常都提供了详细的错误信息，便于问题诊断和处理。