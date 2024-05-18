# 【第20讲】同时查找100个Excel，阁下如何应对？1行Python搞定

------
> 点击学习：[50讲 · Python自动化办公](https://mall.bilibili.com/neul-next/index.html?page=mall-up_itemDetail&noTitleBar=1&itemsId=1104200099&from=items_share&msource=items_share)
------



## 本讲视频

<iframe src="//player.bilibili.com/player.html?bvid=BV1oN411H7cH" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width=100%, height=500> </iframe>


## 下载课程代码

![](../docs/imgs/common/code.png)




如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以付费本套合集。👇

> 2个付费渠道：B站和微信公众号，2选1就行。悄悄说：我的粉丝，用B站购买更优惠~


- B站 购买链接：[68元-点我直达](https://mall.bilibili.com/neul-next/index.html?page=mall-up_itemDetail&noTitleBar=1&itemsId=1104200099&from=items_share&msource=items_share)
- 微信 购买链接：[78元-点我直达](https://mp.weixin.qq.com/s/tKlzVee4kmJk4dGfKvVnFQ)

付费后，2个平台都会自动出现网盘链接，永久有效。

购买资料 或者 学习过程中有任何问题，也欢迎+我的微信交流👉[CoderWanFeng](https://mp.weixin.qq.com/s/8x7c9qiAneTsDJq9JnWLgA)

## 补充知识 - 列表生成式

今天给大家分享一个Python代码风格的写法：列表生成式。

列表生成式的结构是在一个中括号里包含一个表达式,然后是一个for语句,然后是0个或多个for或者if语句。

列表生成式可以是任意的,意思是你可以在列表中放入任意类型的对象。返回结果将是一个新的列表,在这个以if和for语句为上下文的表达式运行完成之后产生。

我们用下面这个案例来理解一下。

**案例：现在有一个包含从1到10数字的无序列表，从中取出大于5的数字。**

如果不使用列表表达式，代码这么写：

```python
num_list = [1, 5, 2, 9, 6, 3, 4, 8, 7, 10]
res_list = []
for num in num_list:
    if num > 5:
        res_list.append(num)
print(res_list)
```

学习了列表表达式以后，你可以这么写：

```python
num_list = [1, 5, 2, 9, 6, 3, 4, 8, 7, 10]
res_list = [num for num in num_list if num > 5]
print(res_list)
```

## 读者福利

<p align="center" id='福利合集-banner'>
    <a target="_blank" href='http://python4office.cn/sideline-pro-list/'>
    <img src="https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/fuli.jpg" width="100%"/>
    </a>   
</p>
