# Word



Word自动化办公的功能，目前有：


- 1、Word 批量转成 PDF

视频说明：[传送门](https://www.bilibili.com/video/BV1pT4y1k7FH)

```python
# 导入python-office，简写为：office
import office 

path = ''  # path这里，填写你存放word文件的位置，例如：C:/app/workbook
office.word.docx2pdf(path=path) # 程序就可以自动将该目录下的所有word文档，自动转换成pdf文档了
```
> 注意：这个功能，目前只支持docx格式的文件。

- 2、doc格式 & docx格式 批量互转

视频说明：[传送门](https://www.bilibili.com/video/BV1so4y1H7rj)

```python
# pip install python-office
import office

# docx2docx
office.word.doc2docx(input_path=r'D:\workplace\code\github\poword\demo\doc_docx\word_file\aa.doc')

# docx2doc
office.word.docx2doc(input_path=r'C:\Users\Lenovo\Desktop\temp\test')
```

- 3、Word 批量合并

视频说明：[传送门](https://mp.weixin.qq.com/s/PjQJ3s4Arr872NDfcr-7YA)

```python
# 下载方式：pip install python-office
import office

office.word.merge4docx(input_path=r'D:\程序员晚枫的文件夹\word-in', 
                        output_path=r'D:\程序员晚枫的文件夹\word-out')

```