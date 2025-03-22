# 【第13讲】把Python代码打包成Exe软件，竟然用了100多行代码

------
> 点击学习：[50讲 · Python自动化办公](https://mall.bilibili.com/neul-next/index.html?page=mall-up_itemDetail&noTitleBar=1&itemsId=1104200099&from=items_share&msource=items_share)
------

![](../xmind/imgs/50-13-ppt2pdf.png)

这一讲的主要内容是关于：python代码转成exe软件，但功能是用的PPT转PDF，这也是答疑群里读者自己提交的代码。

## 本讲视频

<iframe src="//player.bilibili.com/player.html?bvid=BV1Fw411S7kV" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width=100%, height=500> </iframe>


## 下载课程代码

![](../docs/imgs/common/code.png)




如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以直接付费下载。👇

> 哪个平台购买都可以，都是一样的资料 + 答疑群。


- B站 购买链接：[178元-点我直达](https://gf.bilibili.com/item/detail/1104200099)
- 公众号 购买链接：[178元-点我直达](https://mp.weixin.qq.com/s/VH93du82QMuPz_1V3c5a6w)

付费后，会自动出现网盘链接，永久有效。


购买资料 或者 学习过程中有任何问题，也欢迎+我的微信交流👉[CoderWanFeng](http://www.python4office.cn/wechat-qrcode/)

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


## 读者福利

<p align="center" id='福利合集-banner'>
    <a target="_blank" href='http://python4office.cn/sideline-pro-list/'>
    <img src="https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/ads/fuli/all-1.jpg" width="100%"/>
    </a>   
</p>