# 【第15讲】批量识别发票，自动保存到Excel中，1行Python代码稿定

------
> 点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect)
------

![](../xmind/imgs/50-15-VatInvoiceOCR2Excel.png)

学习Python，怎么能少了财务人员的需求？

之前给大家分享过一些票据识别的视频：

- [识别火车票](https://www.bilibili.com/video/BV1Tv4y1n7Js/?spm_id_from=333.999.0.0)
- [识别身份证](https://www.bilibili.com/video/BV1484y1g7N4/?spm_id_from=333.999.0.0)
- [识别银行卡](https://www.bilibili.com/video/BV1QY4y1o7qc/?spm_id_from=333.999.0.0)

但有读者提问：能不能识别发票后，直接保存在Excel里面？

当然可以了！本期我们就来一起看一下，如何用1行代码批量识别发票，并且自动整理在Excle里。

## 视频说明

<iframe src="//player.bilibili.com/player.html?bvid=BV1h94y1W7ds" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width=100%, height=500> </iframe>

## 代码演示

本期使用了一个新的库：poocr

运行以下代码之前，请一定要下载一下poocr。

```shell
# 升级命令
pip install poocr -U
```
不会用升级命令的同学，去看一下第3讲的最后：[打开第3讲](https://www.bilibili.com/video/BV1m14y1y76g/)

本期视频代码，都在课程配套资料的**代码**文件夹里。👉[课程资料，点我下载](https://gf.bilibili.com/item/detail/1104200099?noTitleBar=1&from=mall-up_itemDetail&msource=comments_259649365),全部50讲的课程资料，只要10元

![](../docs/imgs/common/code.png)



## 获取资料

如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以付费本套合集。👇

------
> 点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect)
------

付费合集后，下方自动出现百度云链接，永久有效。

学习过程中有任何问题，也欢迎+我的微信交流👉[CoderWanFeng](https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g)
