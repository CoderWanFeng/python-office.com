# 【第5讲】100个Word转PDF，Python批量办公自动化，告别无意义加班

------
> 点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect)
------

上一讲我们学习了：[PDF转Word](https://mp.weixin.qq.com/s/n-LyhLaSIKYo3awXuRsRyA)，大家都已经运行成功了吧？

今天我们趁热打铁，学习反向操作：**Word转PDF，而且是100个一起的那种。**

## 课程答疑

学习之前，先回答一个问题：今天在课程配套的答疑群里，看到这样一个提问。👇

![](./imgs/50-05/50-05-source.png)

> 这里再给大家说明一下，只要付费了本套合集，就可以自动获取本套课程配套的所有资料，包括：代码、文档、软件、视频和答疑群。

怎么个自动法呢？

付费后，每篇文章的最后，你都会看到一个相同的二维码。不付费你是看不到的。付费的同学，赶紧滑倒文末去领取吧~

## 视频说明

曾经遇到过一个需求：口罩期间，公司需要给大家发放补贴，想给每个人都单独发一个通知。

原始文档是用Word编辑的，为了防止格式错误和篡改内容，需要把它们转换成PDF。

然而全公司有1000多名员工，如何进行高效转换呢？

<iframe src="//player.bilibili.com/player.html?bvid=BV1K84y1Z7n6" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width=100%, height=500> </iframe>

## 代码演示



```python
# 下载命令 pip install python-office ，下载教程：https://www.bilibili.com/video/BV1m14y1y76g
import office

office.word.docx2pdf(path=r'./test_files/程序员晚枫（作品合集）.docx',
                     output_path=r'./test_files/docx2pdf/程序员晚枫（作品合集）.pdf')
```

上面这个代码里面，有2个参数：

- path：填写word文件的路径，如果指定文件，就写文件名；如果是批量，只写批处理文件的存放位置。
- output_path：输出pdf文件的路径，规则同上。

## 获取资料

如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以付费本套合集。👇

------
> 点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect)
------

付费合集后，下方自动出现百度云链接，永久有效。

学习过程中有任何问题，也欢迎+我的微信交流👉[CoderWanFeng](https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g)
