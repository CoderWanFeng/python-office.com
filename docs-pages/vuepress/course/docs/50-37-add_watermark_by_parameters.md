# 【粉丝投稿】给图片加个水印吧，只需要1行Python代码，0基础也能学会

------
> 点击学习：[50讲 · Python自动化办公](https://mall.bilibili.com/neul-next/index.html?page=mall-up_itemDetail&noTitleBar=1&itemsId=1104200099&from=items_share&msource=items_share)
------


这是一期读者投稿：PDF + 水印。

投稿请联系：👉[python-office](http://www.python4office.cn/wechat-qrcode/)

## 本讲视频

<iframe src="//player.bilibili.com/player.html?bvid=BV13N411q7W2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width=100%, height=500> </iframe>


## 代码演示

```python

# 安装python
# 安装python-office库
# pip install python-office

# 导入python-office包
import office

# 调用pdf添加水印方法
# pdf_file：待加水印pdf
# mark_str：水印内容
office.pdf.add_watermark_by_parameters(
    pdf_file=r"E:\program\python-office\正则表达式30分钟入门教程.pdf",
    mark_str="www.python-office.com",
)

# 上面这种是Windows用户
# 尊贵的Mac和Linux用户
# ====================================================================
# pip install popdf
'''
import office

# 调用pdf添加水印方法
office.pdf.add_watermark_by_parameters(
    pdf_file=r"\program\python-office\正则表达式30分钟入门教程.pdf",
    mark_str="www.python-office.com",
)
'''
```


## 下载课程代码

![](../docs/imgs/common/code.png)




如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以直接付费下载。👇

> 哪个平台购买都可以，都是一样的资料 + 答疑群。


- B站 购买链接：[178元-点我直达](https://mall.bilibili.com/neul-next/detailuniversal/detail.html?isMerchant=1&page=detailuniversal_detail&saleType=10&itemsId=11995842&loadingShow=1&noTitleBar=1&msource=merchant_share)
- 公众号 购买链接：[280元-点我直达](https://mp.weixin.qq.com/s/vmuDS4Xtk20JGIleUTsiKA)

付费后，会自动出现网盘链接，永久有效。


购买资料 或者 学习过程中有任何问题，也欢迎+我的微信交流👉[python-office](http://www.python4office.cn/wechat-qrcode/)


## 读者福利

<p align="center" id='福利合集-banner'>
    <a target="_blank" href='http://python4office.cn/sideline-pro-list/'>
    <img src="https://cos.python-office.com/ads/fuli/all-1.jpg" width="100%"/>
    </a>   
</p>