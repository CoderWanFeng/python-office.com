# 【第11讲】入门数据可视化，1行Python代码就够了，这是什么宝藏项目？

------
>
点击学习：[50讲 · Python自动化办公](https://mall.bilibili.com/neul-next/index.html?page=mall-up_itemDetail&noTitleBar=1&itemsId=1104200099&from=items_share&msource=items_share)
------

![](../xmind/imgs/50-11-txt2wordcloud.png)

有多少朋友第一次听说Python，是因为它可以轻松实现数据可视化？

今天我们就来学习一个入门案例：1行代码Python，实现文档数据可视化。效果如下。👇

![](../docs/imgs/50-11/your_wordcloud.png)

## 本讲视频

<iframe src="//player.bilibili.com/player.html?bvid=BV1ph4y1v7MN" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width=100%, height=500> </iframe>

## 下载课程代码

![](../docs/imgs/common/code.png)

如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以付费本套合集。👇

> 哪个平台购买都可以，都是一样的资料 + 答疑群。

- B站 购买链接：[178元-点我直达](https://mall.bilibili.com/neul-next/detailuniversal/detail.html?isMerchant=1&page=detailuniversal_detail&saleType=10&itemsId=11995842&loadingShow=1&noTitleBar=1&msource=merchant_share)
- 公众号 购买链接：[178元-点我直达](https://mp.weixin.qq.com/s/VH93du82QMuPz_1V3c5a6w)

付费后，会自动出现网盘链接，永久有效。

购买资料 或者 学习过程中有任何问题，也欢迎+我的微信交流👉[CoderWanFeng](http://www.python4office.cn/wechat-qrcode/)

## 补充知识 - 路径

路径，在编程里一般指的是文件存储的位置，主要有2种表示方式：相对路径和绝对路径。

- 绝对路径：从根目录开始写的位置，例如：D://work//code，
- 相对路径：相对于当前代码文件的位置，例如：./test/file。

> 既然绝对路径能定位到文件位置，为什么还要使用相对路径呢？

因为绝对路径是写死的，当你把代码给别人使用的时候，如果对方的存储位置和你的不一样，就找不到这个文件了。

但是使用相对路径，只要保持文件夹的层级关系是一致的，对方拿到你的文件夹，依然可以找到文件位置，成功运行代码。

所以我在视频里，所有代码都使用的是相对路径，如下面的代码所示。

**这样当你付费拿到课程的代码以后，就可以直接运行了。**

```python

import office

office.image.txt2wordcloud(filename=r'./test_files/50-11-txt2wordcloud/python-office.txt',  # 这里是相对路径
                           color="black", result_file="your_wordcloud.png")
```

## 读者福利

<p align="center" id='福利合集-banner'>
    <a target="_blank" href='http://python4office.cn/sideline-pro-list/'>
    <img src="https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/ads/fuli/all-1.jpg" width="100%"/>
    </a>   
</p>