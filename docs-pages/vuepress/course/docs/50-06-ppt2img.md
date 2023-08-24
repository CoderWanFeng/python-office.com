【第6讲】把PPT转成1张长图，用Python只需要1行代码，小白入门必学

------
> 点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect)
------

上一讲飞速就达到了20+投币，我赶紧更新了这一讲：把PPT转成长图。

## 视频说明



<iframe src="//player.bilibili.com/player.html?bvid=BV1QG411o7Xb" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width=100%, height=500> </iframe>

## 代码演示



```python
# 下载命令 pip install python-office ，下载教程：https://www.bilibili.com/video/BV1m14y1y76g
import office

# 置顶评论
office.ppt.ppt2img(input_path=r'./test_files/50-06-ppt2img/ppt-程序员晚枫.pptx',
                   output_path=r'./test_files/50-06-ppt2img/output',
                   merge=True)
```

上面这个代码里面，有3个参数，前2个参数之前都讲过了，今天重点说一下第3个参数：
- merge：是否合并，默认是False，如果你想合并成一张长图，可以改为True。


## 获取资料

如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以付费本套合集。👇

------
> 点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect)
------

付费合集后，下方自动出现百度云链接，永久有效。

学习过程中有任何问题，也欢迎+我的微信交流👉[CoderWanFeng](https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g)
