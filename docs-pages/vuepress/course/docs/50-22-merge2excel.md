# 【第22讲】合并Excel，1行Python代码搞定，数据分析专用

------
> 点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/s/6hAgvbcXhdWOh4K9OH73cA)
------



## 本讲视频

<iframe src="//player.bilibili.com/player.html?bvid=BV1Th4y1Y7kd" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width=100%, height=500> </iframe>


## 下载课程代码

![](../docs/imgs/common/code.png)




如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以付费本套合集。👇

> 2个付费渠道：B站和微信公众号，2选1就行，都是一样的价格 10元。


- B站 购买链接：[点我直达](https://mp.weixin.qq.com/s/J47pgSQBwKQxfT0mBBlvSA)
- 微信 购买链接：[点我直达](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect)

付费后，2个平台都会自动出现百度云链接，永久有效。

购买资料 或者 学习过程中有任何问题，也欢迎+我的微信交流👉[CoderWanFeng](https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g)


## 补充知识 - 3.12中，我最期待的新特性

今年10月2号，Python3.12正式发布。

每次发布新版本，都会增加一些新的特性（你可以理解成新语法 or 新功能）。官方原文：``https://docs.python.org/3.12/whatsnew/3.12.html``


今天我们一起来看一个，这次更新中，我们会在自动化办公会用到的新特性：override。

### @override

这是我最期待的新特性了，没有之一。

这是一个装饰器，自动校验重载的方法是否正确。

要知道，现在的Python虽然有这个装饰器，但实际是没有校验功能的，写和不写，没区别。

以下是有了新特性后的演示代码：

```python
from typing import override

class Base:
  def get_color(self) -> str:
    return "blue"

class GoodChild(Base):
  @override  # ok: overrides Base.get_color
  def get_color(self) -> str:
    return "yellow"

class BadChild(Base):
  @override  # type checker error: does not override Base.get_color
  def get_colour(self) -> str:
    return "red"
```

