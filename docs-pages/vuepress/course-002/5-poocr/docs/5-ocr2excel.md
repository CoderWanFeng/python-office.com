# 【第5讲】识别后自动保存为Excel文件

------
> 全套课程：[5讲 · Python实现批量OCR识别](https://www.python-office.com/course-002/5-poocr/5-poocr.html)
------

## 课程内容

之前的课程里讲了如何识别图片，并且留了一个悬念：如何识别后直接保存为Excel？这一讲我们一起来看一下。

首先看一个案例👉[入门案例！批量识别发票自动保存为Excel文件，1行Python代码实现](https://mp.weixin.qq.com/s/JefHbzYpE5GXP4f1g1ncyg)

这个案例就是OCR课程最典型的功能，代码如下：

```python
# pip install poocr
import poocr

tencent_id = 'AKID3DLM9mHgRWO8j81xpby79zbzEJNFHKTQ'
tencent_key = 'wmWBxdP6e7gcSAkO2XwAHE5qXHsbIoIm'

poocr.ocr2excel.VatInvoiceOCR2Excel(input_path=r'test_files/2-原理和实现/发票/',
                                    output_excel='./test_files/2-原理和实现/发票识别结果（程序员晚枫）-单个.xlsx',
                                    id=tencent_id, key=tencent_key)
```

上1讲提到OCR识别功能一共又100多个，本讲的自动识别保存为Excel文件，目前只有以下几个：

| 调用方法                  | 功能说明  | 课程资料&交流群                                                |
|-----------------------|-------|---------------------------------------------------------|
| VatInvoiceOCR2Excel   | 发票识别  | [加入](https://mp.weixin.qq.com/s/xEX6tFUxPMZKdJIq5P7UOA) |
| IDCardOCR2Excel       | 身份证识别 | [加入](https://mp.weixin.qq.com/s/xEX6tFUxPMZKdJIq5P7UOA) |
| TrainTicketOCR2Excel  | 火车票识别 | [加入](https://mp.weixin.qq.com/s/xEX6tFUxPMZKdJIq5P7UOA) |
| BankCardOCR2Excel     | 银行卡识别 | [加入](https://mp.weixin.qq.com/s/xEX6tFUxPMZKdJIq5P7UOA) |
| LicensePlateOCR2Excel | 车牌号识别 | [加入](https://mp.weixin.qq.com/s/xEX6tFUxPMZKdJIq5P7UOA) |

如需其它的识别后保存为Excel的功能，请点击加入👉[答疑群](https://mp.weixin.qq.com/s/xEX6tFUxPMZKdJIq5P7UOA)后@群主开发，有时间会尽力满足您的需求~

## 本讲视频

- [点我直达](https://www.bilibili.com/video/BV13J4m1s7L7?p=6)

## 课程资料

![](../imgs/code.png)

如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以付费后下载。👇

- B站 购买链接：[98元-点我直达](https://gf.bilibili.com/item/detail/1106110099)

付费后，文末会自动出现网盘链接，永久有效。

购买资料 或者 学习过程中有任何问题，也欢迎+我的微信交流👉[CoderWanFeng](http://www.python4office.cn/wechat-qrcode/)

## 读者福利

<p align="center" id='福利合集-banner'>
    <a target="_blank" href='http://python4office.cn/sideline-pro-list/'>
    <img src="https://www.python-office.com/assets/img/fuli.682e424c.jpg" width="100%"/>
    </a>   
</p>


<p align="center" id='30讲自动化办公-banner'>
    <a target="_blank" href='https://www.python-office.com/video/video.html'>
    <img src="https://website-python-1300615378.cos.ap-nanjing.myqcloud.com/%E5%BC%95%E5%AF%BC%E8%B6%85%E9%93%BE%E6%8E%A5%2Fauto-work.jpg" width="100%"/>
    </a>   
</p>


<p align="center" id='10讲机器人-banner'>
    <a target="_blank" href='https://www.python-office.com/course-002/10-PyOfficeRobot/10-PyOfficeRobot.html'>
    <img src="https://website-python-1300615378.cos.ap-nanjing.myqcloud.com/course/10%E8%AE%B2%E6%9C%BA%E5%99%A8%E4%BA%BA-%E6%A8%AA.jpg" width="100%"/>
    </a>   
</p>


<p align="center" id='100本电子书-banner'>
    <a target="_blank" href='https://mp.weixin.qq.com/s/6bM_3tROqdY_2WbBShzqyw'>
    <img src="https://website-python-1300615378.cos.ap-nanjing.myqcloud.com/%E5%BC%95%E5%AF%BC%E8%B6%85%E9%93%BE%E6%8E%A5%2Febook.jpg" width="100%"/>
    </a>   
</p>