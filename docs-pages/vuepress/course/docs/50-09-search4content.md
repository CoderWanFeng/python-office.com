# 【第9讲】根据内容搜索文件，1行Python代码，这是什么黑科技？


------
> 点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect)
------

![](../xmind/imgs/50-09-search4content.png)

通过标题搜索文件，已经有很多人用过了。

> 但是通过内容搜索文件，你用过吗？

## 视频说明

<iframe src="//player.bilibili.com/player.html?bvid=BV1Lm4y1M7Pz" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width=100%, height=500> </iframe>


## 代码演示

运行以下代码之前，请一定要升级一下python-office。

升级命令：pip install python-office -U，不会用升级命令的同学，去看一下第3讲的最后：[打开第3讲](https://www.bilibili.com/video/BV1m14y1y76g/)

```
import office

office.file.search_by_content(
    search_path=r'D:\程序员晚枫的文件夹',
    content='import office')
```

两个参数：
- search_path：指定搜索目录
- content：指定搜索内容

## 获取资料

如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以付费本套合集。👇

------
> 点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect)
------

付费合集后，下方自动出现百度云链接，永久有效。

学习过程中有任何问题，也欢迎+我的微信交流👉[CoderWanFeng](https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g)
