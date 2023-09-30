# 【第13讲】把Python代码打包成Exe软件，竟然用了100多行代码

------
> 点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/s/W39OFo6XoXsS-hL9poHP6Q)
------

![](../xmind/imgs/50-13-ppt2pdf.png)

这一讲的主要内容是关于：python代码转成exe软件，但功能是用的PPT转PDF，这也是答疑群里读者自己提交的代码。

## 本讲视频

<iframe src="//player.bilibili.com/player.html?bvid=BV1Fw411S7kV" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width=100%, height=500> </iframe>


## 下载课程代码

![](../docs/imgs/common/code.png)




如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以付费本套合集。👇

> 2个付费渠道：B站和微信公众号，2选1就行，都是一样的价格 10元。


- B站 购买链接：[点我直达](https://mp.weixin.qq.com/s/J47pgSQBwKQxfT0mBBlvSA)
- 微信 购买链接：[点我直达](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect)

付费后，2个平台都会自动出现百度云链接，永久有效。

购买资料 或者 学习过程中有任何问题，也欢迎+我的微信交流👉[CoderWanFeng](https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g)

## 补充知识 - 方法

如何通过**方法**，重复使用自己编写的Python代码，从而减少代码量？

举个例子：我想写一个加法功能，并且使用一次，代码是下面这样的。

```python
# 计算8 + 1的结果是多少？
num_1 = 8
num_2 = 1
result = num_1 + num_2
print(result)
```

上面代码中：
- num_1是第一个数
- num_2是第二个数
- result是它们相加的结果

如果我要继续计算1+6，2+3，我要把这段代码重复写下去吗？想想都觉得麻烦。

而使用**方法**这个语法，可以简化这个工作。代码如下所示。

```python
def add(num_1, num_2):
    result = num_1 + num_2
    return result


print(add(1, 6))  # 显示1+6的结果
print(add(2, 3))  # 显示2+3的结果
```
上面的代码中：
- def定义了一个叫add的方法，可以传进去2个任意数
- return这2个数相加的结果
- 后面的代码中，可以直接使用add调用这个方法，得到2个数相加的结果

