# 【第4讲】Word文件转PDF文件，用Python怎么做？如果是1000个文件呢？

曾经遇到过一个需求：口罩期间，公司需要给大家发放补贴，想给每个人都单独发一个通知。

原始文档是用Word编辑的，为了防止格式错误和篡改内容，需要把它们转换成PDF。

然而全公司有1000多名员工，如何进行高效转换呢？

## 1行Python代码搞定



```python
# pip install python-office ，下载教程：https://www.bilibili.com/video/BV1pT4y1k7FH
import office

office.word.docx2pdf(path=r'./test_files/程序员晚枫（作品合集）.docx',
                     output_path=r'./test_files/docx2pdf/程序员晚枫（作品合集）.pdf')
```

