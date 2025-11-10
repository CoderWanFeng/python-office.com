# API参考

<cite>
**本文档中引用的文件**   
- [50-04-pdf2docx.py](file://docs-pages\vuepress\course\code\50-04-pdf2docx.py)
- [50-05-docx2pdf.py](file://docs-pages\vuepress\course\code\50-05-docx2pdf.py)
- [50-10-excel2pdf.py](file://docs-pages\vuepress\course\code\50-10-excel2pdf.py)
- [50-13-ppt2pdf.py](file://docs-pages\vuepress\course\code\50-13-ppt2pdf.py)
- [50-17-del_watermark.py](file://docs-pages\vuepress\course\code\50-17-del_watermark.py)
- [50-22-merge2excel.py](file://docs-pages\vuepress\course\code\50-22-merge2excel.py)
- [50-25-merge4docx.py](file://docs-pages\vuepress\course\code\50-25-merge4docx.py)
- [50-28-zip4dir.py](file://docs-pages\vuepress\course\code\50-28-zip4dir.py)
- [50-31-group_send.py](file://docs-pages\vuepress\course\code\50-31-group_send.py)
- [50-40-merge2pdf.py](file://docs-pages\vuepress\course\code\50-40-merge2pdf.py)
- [50-09-search4content.py](file://docs-pages\vuepress\course\code\50-09-search4content.py)
- [50-11-txt2wordcloud.py](file://docs-pages\vuepress\course\code\50-11-txt2wordcloud.py)
</cite>

## 目录
1. [简介](#简介)
2. [PDF处理API](#pdf处理api)
3. [文档转换API](#文档转换api)
4. [电子表格处理API](#电子表格处理api)
5. [演示文稿处理API](#演示文稿处理api)
6. [图像处理API](#图像处理api)
7. [文件操作API](#文件操作api)
8. [自动化办公API](#自动化办公api)
9. [文本处理API](#文本处理api)
10. [性能提示与使用限制](#性能提示与使用限制)

## 简介
python-office项目提供了一套简洁高效的自动化办公工具，通过简单的API调用即可完成复杂的办公文档处理任务。本API参考文档详细介绍了各个功能模块的公开接口，包括参数说明、使用示例和底层实现机制，帮助开发者快速集成和使用这些功能。

## PDF处理API

### pdf2docx
将PDF文件转换为Word文档。

**功能说明**：使用`office.pdf.pdf2docx`方法将PDF文件转换为可编辑的Word文档格式。

**参数说明**：
- `file_path`：输入PDF文件的路径
- `output_path`：转换后Word文档的输出路径

**返回值**：无明确返回值，操作成功时生成指定路径的Word文件

**异常**：可能抛出文件不存在、权限不足等IO异常

**使用示例**：
```python
import office
office.pdf.pdf2docx(file_path=r'./test_files/50-04-pdf2docx', 
                    output_path=r'./test_files/50-04-pdf2docx/pdf2docx')
```

**底层依赖**：基于popdf库实现PDF到Word的转换，利用PDF解析技术和文档结构重建算法

**处理流程**：读取PDF内容→解析页面布局→提取文本和图像→重建Word文档结构→保存为.docx格式

**性能提示**：大型PDF文件转换可能需要较长时间，建议对超过100页的文档进行分批处理

**使用限制**：复杂排版的PDF（如多栏布局、特殊字体）可能无法完全保留原始格式

**Section sources**
- [50-04-pdf2docx.py](file://docs-pages\vuepress\course\code\50-04-pdf2docx.py#L13-L14)

### merge2pdf
合并多个PDF文件为单个PDF文档。

**功能说明**：使用`office.pdf.merge2pdf`方法将多个PDF文件合并成一个连续的PDF文档。

**参数说明**：
- `one_by_one`：包含多个PDF文件路径的列表
- `output`：合并后PDF文件的输出路径

**返回值**：无明确返回值，操作成功时生成指定路径的合并PDF文件

**异常**：可能抛出文件不存在、PDF格式错误等异常

**使用示例**：
```python
import office
office.pdf.merge2pdf(
    one_by_one=[r"正则表达式30分钟入门教程.pdf", r"STLINK调试补充教程.pdf"],
    output=r"E:\program\python-office\合并后文件\合并后文件.pdf"
)
```

**底层依赖**：基于PyPDF2或类似PDF处理库，实现PDF页面的读取和合并

**处理流程**：依次读取每个PDF文件→提取所有页面→按顺序重组页面→写入新的PDF文件

**性能提示**：内存使用量与合并文件总页数成正比，超大文件合并建议使用临时文件

**使用限制**：不支持保留原文件的书签和超链接结构

**Section sources**
- [50-40-merge2pdf.py](file://docs-pages\vuepress\course\code\50-40-merge2pdf.py#L60-L63)

### encrypt4pdf
对PDF文件进行加密保护。

**功能说明**：使用`office.pdf.encrypt4pdf`方法为PDF文件设置密码保护。

**参数说明**：
- `path`：待加密PDF文件或目录路径
- `password`：设置的密码
- `output_path`：加密后文件的输出路径

**返回值**：无明确返回值，操作成功时生成加密的PDF文件

**异常**：可能抛出文件权限、密码强度不足等异常

**使用示例**：
```python
import office
office.pdf.encrypt4pdf(
    path=r"E:\program\python-office\源文件",
    password="123@#",
    output_path=r"E:\program\python-office\加密文件"
)
```

**底层依赖**：基于PDF加密标准（如AES-256）实现文档保护

**处理流程**：读取原始PDF→应用加密算法→设置访问权限→保存加密文档

**性能提示**：加密过程CPU密集型，批量处理时建议控制并发数量

**使用限制**：某些PDF阅读器可能不完全支持加密文档的全部功能

**Section sources**
- [50-40-merge2pdf.py](file://docs-pages\vuepress\course\code\50-40-merge2pdf.py#L36-L40)

### decrypt4pdf
对加密的PDF文件进行解密。

**功能说明**：使用`office.pdf.decrypt4pdf`方法移除PDF文件的密码保护。

**参数说明**：
- `path`：待解密PDF文件路径
- `password`：PDF文件的密码
- `res_pdf`：解密后文件的输出路径

**返回值**：无明确返回值，操作成功时生成无密码的PDF文件

**异常**：可能抛出密码错误、文件损坏等异常

**使用示例**：
```python
import office
office.pdf.decrypt4pdf(
    path=r"E:\program\python-office\加密文件\正则表达式30分钟入门教程（加密）.pdf",
    password="123@#",
    res_pdf=r"E:\program\python-office\解密文件\解密后文件.pdf"
)
```

**底层依赖**：与encrypt4pdf使用相同的加密库，执行逆向解密过程

**处理流程**：验证密码→解密文档内容→重建无保护PDF→保存新文件

**性能提示**：解密速度通常快于加密，但仍受文件大小影响

**使用限制**：无法解密使用强加密或未知算法保护的PDF文件

**Section sources**
- [50-40-merge2pdf.py](file://docs-pages\vuepress\course\code\50-40-merge2pdf.py#L48-L53)

## 文档转换API

### docx2pdf
将Word文档转换为PDF格式。

**功能说明**：使用`office.word.docx2pdf`方法将Word文档转换为PDF格式。

**参数说明**：
- `path`：输入Word文件或目录路径
- `output_path`：转换后PDF文件的输出路径

**返回值**：无明确返回值，操作成功时生成指定路径的PDF文件

**异常**：可能抛出文件格式错误、Office组件缺失等异常

**使用示例**：
```python
import office
office.word.docx2pdf(path=r'./test_files/50-05-docx2pdf',
                     output_path=r'./test_files/50-05-docx2pdf/docx2pdf')
```

**底层依赖**：基于Microsoft Office自动化或LibreOffice实现文档转换

**处理流程**：加载Word文档→渲染页面布局→导出为PDF格式→保存文件

**性能提示**：需要安装Microsoft Office或WPS等办公软件，转换速度受软件性能影响

**使用限制**：复杂的宏和ActiveX控件可能无法正确转换

**Section sources**
- [50-05-docx2pdf.py](file://docs-pages\vuepress\course\code\50-05-docx2pdf.py#L13-L14)

## 电子表格处理API

### merge2excel
合并多个Excel文件为单个工作簿。

**功能说明**：使用`office.excel.merge2excel`方法将多个Excel文件合并到一个工作簿中。

**参数说明**：
- `excel_path`：包含Excel文件的目录路径
- `output`：合并后Excel文件的输出路径

**返回值**：无明确返回值，操作成功时生成合并的Excel文件

**异常**：可能抛出文件格式不支持、内存不足等异常

**使用示例**：
```python
import office
office.excel.merge2excel(excel_path=r'./test_files/50-22-merge2excel',
                         output=r'./test_files/50-22-merge2excel/out/程序员晚枫-全平台统计.xlsx')
```

**底层依赖**：基于pandas和openpyxl库实现Excel文件的读取和写入

**处理流程**：扫描目录→读取每个Excel文件→提取数据→合并到新工作簿→保存文件

**性能提示**：大量小文件合并效率高于少数大文件合并，建议预估内存使用

**使用限制**：不支持合并包含复杂宏或VBA代码的Excel文件

**Section sources**
- [50-22-merge2excel.py](file://docs-pages\vuepress\course\code\50-22-merge2excel.py#L12-L13)

### excel2pdf
将Excel文件转换为PDF格式。

**功能说明**：使用`office.excel.excel2pdf`方法将Excel文件转换为PDF文档。

**参数说明**：
- `excel_path`：输入Excel文件路径
- `pdf_path`：输出PDF文件路径

**返回值**：无明确返回值，操作成功时生成PDF文件

**异常**：可能抛出Excel格式错误、打印组件缺失等异常

**使用示例**：
```python
import office
office.excel.excel2pdf(excel_path=r'./test_files/50-10-excel2pdf/程序员晚枫的账号和粉丝.xlsx', 
                       pdf_path=r'./test_files/50-10-excel2pdf/output')
```

**底层依赖**：基于Excel打印功能或PDF导出API实现格式转换

**处理流程**：加载Excel文件→设置打印区域→导出为PDF→保存文件

**性能提示**：包含大量图表的Excel文件转换时间较长

**使用限制**：分页设置可能无法完全保留，建议转换后检查布局

**Section sources**
- [50-10-excel2pdf.py](file://docs-pages\vuepress\course\code\50-10-excel2pdf.py#L12)

## 演示文稿处理API

### ppt2pdf
将PPT演示文稿转换为PDF格式。

**功能说明**：使用`poppt.ppt2pdf`方法将PPT文件批量转换为PDF格式。

**参数说明**：
- `path`：包含PPT文件的目录路径
- `output_path`：转换后PDF文件的输出路径

**返回值**：无明确返回值，操作成功时生成对应的PDF文件

**异常**：可能抛出PPT格式不支持、Office组件不可用等异常

**使用示例**：
```python
import poppt
poppt.ppt2pdf(path=path, output_path=output_path)
```

**底层依赖**：基于Microsoft PowerPoint自动化实现演示文稿转换

**处理流程**：启动PowerPoint→加载PPT文件→导出每页为PDF→合并保存

**性能提示**：需要安装Microsoft Office，转换过程会启动GUI界面

**使用限制**：动画和切换效果无法在PDF中保留

**Section sources**
- [50-13-ppt2pdf.py](file://docs-pages\vuepress\course\code\50-13-ppt2pdf.py#L159)

## 图像处理API

### del_watermark
移除图像中的水印。

**功能说明**：使用`office.image.del_watermark`方法从图像中删除水印。

**参数说明**：
- `input_image`：输入图像文件路径
- `output_image`：处理后图像的输出路径

**返回值**：无明确返回值，操作成功时生成无水印的图像文件

**异常**：可能抛出图像格式不支持、处理失败等异常

**使用示例**：
```python
import office
office.image.del_watermark(input_image=r'./test_files/50-17-del_watermark/程序员晚枫的发票1.png',
                           output_image=r'./test_files/50-17-del_watermark/del_water_mark.jpg')
```

**底层依赖**：基于OpenCV或PIL图像处理库，使用图像修复算法

**处理流程**：加载图像→识别水印区域→应用修复算法→保存处理结果

**性能提示**：高分辨率图像处理需要较多内存和计算资源

**使用限制**：复杂背景上的水印可能无法完全清除

**Section sources**
- [50-17-del_watermark.py](file://docs-pages\vuepress\course\code\50-17-del_watermark.py#L11-L12)

### txt2wordcloud
从文本生成词云图像。

**功能说明**：使用`office.image.txt2wordcloud`方法将文本内容转换为可视化词云。

**参数说明**：
- `filename`：输入文本文件路径
- `color`：词云颜色
- `result_file`：生成的词云图像路径

**返回值**：无明确返回值，操作成功时生成词云图像文件

**异常**：可能抛出文本编码错误、字体缺失等异常

**使用示例**：
```python
import office
office.image.txt2wordcloud(filename=r'./test_files/50-11-txt2wordcloud/python-office.txt', 
                           color="black",
                           result_file="./test_files/50-11-txt2wordcloud/your_wordcloud.png")
```

**底层依赖**：基于wordcloud库和matplotlib实现文本可视化

**处理流程**：读取文本→分词处理→计算词频→生成词云布局→渲染图像

**性能提示**：大型文本文件建议先进行预处理和过滤

**使用限制**：中文文本需要确保使用支持中文的字体

**Section sources**
- [50-11-txt2wordcloud.py](file://docs-pages\vuepress\course\code\50-11-txt2wordcloud.py#L12-L13)

## 文件操作API

### merge4docx
合并多个Word文档为单个文档。

**功能说明**：使用`office.word.merge4docx`方法将多个Word文件合并成一个连续文档。

**参数说明**：
- `input_path`：包含Word文件的目录路径
- `output_path`：合并后文档的输出目录
- `new_word_name`：合并后文档的文件名

**返回值**：无明确返回值，操作成功时生成合并的Word文件

**异常**：可能抛出文件格式不兼容、权限不足等异常

**使用示例**：
```python
import office
office.word.merge4docx(input_path=r'./test_files/50-25-merge4docx', 
                       output_path=r'./test_files/out', 
                       new_word_name='合并的文档.docx')
```

**底层依赖**：基于python-docx库实现Word文档的读取和合并

**处理流程**：读取每个Word文件→提取段落内容→按顺序添加到新文档→保存文件

**性能提示**：保留原有文档的格式和样式，但复杂元素可能需要手动调整

**使用限制**：不支持合并包含密码保护的Word文档

**Section sources**
- [50-25-merge4docx.py](file://docs-pages\vuepress\course\code\50-25-merge4docx.py#L12)

### zip4dir
将目录压缩为ZIP文件。

**功能说明**：使用`pofile.zip4dir`方法将指定目录压缩为ZIP格式的压缩包。

**参数说明**：
- `path`：要压缩的目录路径

**返回值**：无明确返回值，操作成功时生成ZIP压缩文件

**异常**：可能抛出目录不存在、磁盘空间不足等异常

**使用示例**：
```python
import pofile
pofile.zip4dir(path=r'..\test_files\50-28-zip4dir')
```

**底层依赖**：基于Python标准库的zipfile模块实现压缩功能

**处理流程**：遍历目录→添加文件到压缩包→生成ZIP文件

**性能提示**：大目录压缩建议显示进度条，避免用户误以为卡死

**使用限制**：不支持设置压缩密码或选择压缩算法

**Section sources**
- [50-28-zip4dir.py](file://docs-pages\vuepress\course\code\50-28-zip4dir.py#L12)

## 自动化办公API

### group_send
执行微信群发消息操作。

**功能说明**：使用`office.wechat.group_send`方法实现微信消息的批量发送。

**参数说明**：无参数

**返回值**：无明确返回值，操作成功时完成消息群发

**异常**：可能抛出网络连接错误、微信登录失效等异常

**使用示例**：
```python
import office
office.wechat.group_send()
```

**底层依赖**：基于微信Web协议或第三方自动化工具实现消息发送

**处理流程**：登录微信→选择联系人→发送消息内容→记录发送结果

**性能提示**：受微信客户端性能和网络状况影响，大批量发送建议分批进行

**使用限制**：可能触发微信的反自动化机制，导致账号临时限制

**Section sources**
- [50-31-group_send.py](file://docs-pages\vuepress\course\code\50-31-group_send.py#L12)

## 文本处理API

### search_by_content
按内容搜索文件。

**功能说明**：使用`office.file.search_by_content`方法在指定目录中搜索包含特定文本的文件。

**参数说明**：
- `search_path`：要搜索的目录路径
- `content`：要搜索的文本内容

**返回值**：无明确返回值，操作成功时输出包含搜索内容的文件列表

**异常**：可能抛出目录权限不足、文件编码错误等异常

**使用示例**：
```python
import office
office.file.search_by_content(
    search_path=r'..\test_files\50-09-search4content',
    content='import office')
```

**底层依赖**：基于文件系统遍历和文本匹配算法实现内容搜索

**处理流程**：遍历目录→读取文件内容→匹配搜索文本→输出结果

**性能提示**：大型文件夹搜索可能需要较长时间，建议指定文件类型过滤

**使用限制**：二进制文件的内容搜索可能不准确

**Section sources**
- [50-09-search4content.py](file://docs-pages\vuepress\course\code\50-09-search4content.py#L11-L13)

## 性能提示与使用限制

### 通用性能建议
1. **内存管理**：处理大型文件时，注意监控内存使用情况，必要时采用分块处理策略
2. **错误处理**：在生产环境中使用时，务必添加适当的异常处理机制
3. **并发控制**：批量处理任务时，合理控制并发数量，避免系统资源耗尽
4. **路径处理**：使用原始字符串（r""）或双反斜杠处理Windows路径，避免转义问题

### 跨平台注意事项
1. **Windows用户**：主要使用`python-office`包，依赖Microsoft Office组件
2. **Mac/Linux用户**：推荐使用`popdf`、`poppt`等专用包，避免Office依赖
3. **路径分隔符**：注意不同操作系统的路径分隔符差异，建议使用`os.path.join()`构建路径

### 安全考虑
1. **文件权限**：确保程序有足够的读写权限访问指定文件和目录
2. **输入验证**：对用户输入的文件路径进行验证，防止路径遍历攻击
3. **敏感信息**：避免在代码中硬编码密码等敏感信息

### 最佳实践
1. **环境隔离**：使用虚拟环境管理项目依赖，避免包冲突
2. **版本控制**：明确指定`python-office`的版本，确保功能稳定性
3. **日志记录**：添加适当的日志记录，便于问题排查和调试
4. **资源清理**：及时关闭打开的文件和释放占用的系统资源