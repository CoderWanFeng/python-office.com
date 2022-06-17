# word

- Word：
    - Word 批量转成 PDF：[代码](https://mp.weixin.qq.com/s/eBn3N_FEx1dlC_-ttmlOwg)
    

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