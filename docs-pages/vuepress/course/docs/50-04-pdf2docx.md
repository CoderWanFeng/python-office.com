# 【第4讲】PDF转Word，1行代码就够了，Python自动化办公原来这么简单

------
> 点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect)
------

![](../xmind/imgs/50-04-pdf2docx.png)

开始课程之前，先说一个悲伤的事情：

> 周末我本想更新一下网站：python-office.com，结果最终因为服务器配置太低，被迫又还原了。又一次被黄金打败了，希望本套课能帮到大家，大家帮我宣传一下，我挣钱升级服务器！

言归正传，今天第一个案例，我们学习一个好玩的需求：如何用1行代码，把PDF转换成Word？

## 1、先看视频

<iframe src="//player.bilibili.com/player.html?bvid=BV1em4y1H7ir" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width=100%, height=500> </iframe>

## 2、文档说明：1行Python代码搞定


下载python-office，1行命令。还有不会下载的，是不是上一讲逃课了？去补课，答应我👉[【第3讲】不要重复造轮子原来是这个意思！入门pip的使用，编程准备工作最后一站](https://mp.weixin.qq.com/s/GPgLsMvfzG9j_Eq887fm-w)

```python
pip install python-office
```



```python
# pip install python-office
import office # 导入第三方库

office.pdf.pdf2docx(file_path=r'D:\workplace\code\github\python-office\demo\popdf\test_files\pdf2docx\程序员晚枫.pdf',
                    output_path=r'D:\download')
# 上面这种是Windows用户

# 如果你是尊贵的Mac和Linux用户，用下面这个代码
# pip install popdf
import popdf
#
popdf.pdf2docx(file_path=r'D:\workplace\code\github\python-office\demo\popdf\test_files\pdf2docx\程序员晚枫.pdf',
               output_path=r'./test_files/pdf2docx/output')
```
## 3、全套资料

如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以付费本套合集。👇

------
> 点击学习：[50讲 · Python自动化办公](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect)
------

付费合集后，下方自动出现百度云链接，永久有效。

学习过程中有任何问题，也欢迎+我的微信交流👉[CoderWanFeng](https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g)


