# 参考资料


大家好，这里是程序员晚枫，全网同名

今天给大家分享1行Python代码就可以实现的功能：**批量识别身份证，自动保存为Excel文件。**

![](./imgs/draft/1.png)

## 1、先上代码

识别身份证并且写入Excel功能，调用了python的免费第三方库：poocr。

直接上代码，看到这里，提醒一下还没有安装Python的同学，可以看一下我主页的全套免费教程，跟着我免费下载和安装一下Python。

```python
# 安装这个库
pip install poocr
```

```python
（左右滑动，查看全部）

# 运行这个库
import poocr

# pip install poocr
import poocr

tencent_id = '免费开通方法：https://b23.tv/TTo4QTc'
tencent_key = '免费开通方法：https://b23.tv/TTo4QTc'

poocr.ocr.PassportOCR(img_path=r'./images/程序员晚枫的护照.png',
                    id=tencent_id, key=tencent_key)
```
运行结果如下:

- https://mp.weixin.qq.com/s/JefHbzYpE5GXP4f1g1ncyg


## 2、代码说明
poocr是一个具有ocr功能的python第三方库，支持识别100多种场景下的文字识别，例如：发票、驾驶证、身份证等。全部功能的介绍，点击查看👉Python实现图片文字提取，准确率高达99%，100多个功能全给你！

底层实现应用的是腾讯提供的AI功能，其中id和key需要配置一下腾讯AI的id和key，每个人都有1000次的免费额度。

免费配置1000次额度的方法，请查看这个视频教程，👇

- [OCR文字识别](https://b23.tv/TTo4QTc)
- [领取免费额度](https://curl.qcloud.com/vdG5ChvZ)

