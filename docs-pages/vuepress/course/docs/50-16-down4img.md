# 【第16讲】Python爬虫，了解一下？1行代码下载图片，小白轻松学

------
> 点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/s/tKlzVee4kmJk4dGfKvVnFQ)
------


## 本讲视频

<iframe src="//player.bilibili.com/player.html?bvid=BV14p4y1j7jg" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width=100%, height=500> </iframe>


## 下载课程代码

![](../docs/imgs/common/code.png)




如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以付费本套合集。👇

> 2个付费渠道：B站和微信公众号，2选1就行。悄悄说：B站购买更优惠~


- B站 购买链接：[48元-点我直达](https://mp.weixin.qq.com/s/7VlKqTjE4yBbP8aqEIITpw)
- 微信 购买链接：[78元-点我直达](https://mp.weixin.qq.com/s/tKlzVee4kmJk4dGfKvVnFQ)

付费后，2个平台都会自动出现网盘链接，永久有效。

购买资料 或者 学习过程中有任何问题，也欢迎+我的微信交流👉[CoderWanFeng](https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g)


## 补充知识 - 批量操作

我们在文件操作中，大概率会涉及批量操作。PS：不涉及批量操作，还要自动化办公干什么？

批量操作文件的前提是，能批量取出文件。以pdf转word为例，如果批量获得文件夹里的全部pdf文件呢？

我们讲一下下面的代码。这段源码的地址，见：``https://github.com/CoderWanFeng/popdf/blob/main/popdf/core/PDFType.py#L78``
👇
```python
from pofile import get_files
def pdf2docx(self, file_path, output_path, pdfSuffix='.pdf', docxSuffix=".docx"):
    waiting_covert_pdf_files = get_files(file_path, suffix=pdfSuffix)
    """此处省略无关代码"""
```
上面这段代码中，``get_files``就是批量获取文件的代码。它可以自动查询指定文件夹下的所有文件，其中``suffix``参数，还可以通过文件后缀，指定文件类型。

例如，我想要获取D盘下所有的pdf文件，代码可以这样写：

```python
from pofile import get_files

pdf_files = get_files(path=r'd://', suffix='.pdf')
print(pdf_files)
```


## 读者福利

<p align="center" id='福利合集-banner'>
    <a target="_blank" href='http://python4office.cn/sideline-pro-list/'>
    <img src="https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/fuli.jpg" width="100%"/>
    </a>   
</p>
