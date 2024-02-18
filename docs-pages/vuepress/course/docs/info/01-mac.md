# 重磅！python-office，终于支持 Mac和 Linux下载了

------
> 点击学习：[50讲 · Python自动化办公](https://mall.bilibili.com/neul-next/index.html?page=mall-up_itemDetail&noTitleBar=1&itemsId=1104200099&from=items_share&msource=items_share)
------

大家好，这里是程序员晚枫，小红书也叫这个名。

给小白的《50讲Python自动化办公》，课程一直在更新中，昨晚12点多，有朋友在课程群里问能不能支持Mac？

今天给大家分享一个好消息：**python-office终于支持mac下载了。**

## 下载命令

先给大家说一下下载命令，然后再说注意事项。

不论你的电脑上有没有下载过python-office,都可以打开你的终端（Windows用户是cmd），运行以下命令：

```shell
pip install python-office -U -i https://pypi.tuna.tsinghua.edu.cn/simple
```

这条命令的作用是：

- 如果没有下载过，直接给你下载 + 安装最新版。
- 如果之前下载过，给你自动更新到最新版。

后面的`` -i https://pypi.tuna.tsinghua.edu.cn/simple`` 是指定使用清华镜像。之前的视频里给大家说过了。👇

视频


## 注意事项

但是这里不得不说一件遗憾的事情：**虽然Mac和Linux都可以下载了，但并不是所有功能都能用。**

例如我们之前讲过的👉[1行代码，实现聊天机器人](https://mp.weixin.qq.com/s/Pn3DtGEYkRdYF7fnDuLslQ)。

```python
import office

office.wechat.chat_robot(who='每天进步一点点')  # 智能聊天
```

这段代码，就必须在Windows系统里才能成功运行，因为虽然你在Mac上可以下载，但底层的技术支持Mac不如Windows全面，目前还是没有解决方法。

## 下载课程代码

![](../imgs/common/code.png)


如需获取本套课程配套的全部:代码、文档、视频、软件、答疑群，可以付费本套合集。👇

> 2个付费渠道：B站和微信公众号，2选1就行。悄悄说：我的粉丝，用B站购买更优惠~


- B站 购买链接：[128元-点我直达](https://mall.bilibili.com/neul-next/index.html?page=mall-up_itemDetail&noTitleBar=1&itemsId=1104200099&from=items_share&msource=items_share)
- 微信 购买链接：[178元-点我直达](https://mp.weixin.qq.com/s/VH93du82QMuPz_1V3c5a6w)

付费后，2个平台都会自动出现网盘链接，永久有效。

购买资料 或者 学习过程中有任何问题，也欢迎+我的微信交流👉[CoderWanFeng](https://mp.weixin.qq.com/s/Nt8E8vC-ZsoN1McTOYbY2g)