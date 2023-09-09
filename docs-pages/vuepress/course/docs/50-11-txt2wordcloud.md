# 【第11讲】入门数据可视化，1行Python代码就够了，这是什么宝藏项目？

------
>
点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect)
------

![](../xmind/imgs/50-11-txt2wordcloud.png)

有多少朋友第一次听说Python，是因为它可以轻松实现数据可视化？

> 但是通过内容搜索文件，你用过吗？

## 视频说明

<iframe src="//player.bilibili.com/player.html?bvid=BV1ph4y1v7MN" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width=100%, height=500> </iframe>

## 代码演示

运行以下代码之前，请一定要升级一下python-office。

升级命令：pip install python-office
-U，不会用升级命令的同学，去看一下第3讲的最后：[打开第3讲](https://www.bilibili.com/video/BV1m14y1y76g/)

```python
import office

office.image.txt2wordcloud(filename=r'./test_files/50-11-txt2wordcloud/python-office.txt', color="black",
                           result_file="程序员晚枫的图片.png")
```

两个参数：

- filename：存储文档的目录
- color：词云的背景颜色
- result_file：输出的图片名称和位置

## 获取资料

如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以付费本套合集。👇

------
>
点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect)
------

付费合集后，下方自动出现百度云链接，永久有效。

学习过程中有任何问题，也欢迎+我的微信交流👉[CoderWanFeng](https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g)
