# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g
@个人网站      ：www.python-office.com
@代码日期    ：2023/10/2 1:45 
@本段代码的视频说明     ：
'''

"""
## 第2讲 - 发送消息

```python
# 首先，将PyOfficeRobot模块导入到我们的代码块中。
import PyOfficeRobot

PyOfficeRobot.chat.send_message(who='小红书：程序员晚枫', message='你好')
# who:发给谁
# message:发送的内容
```
其中，发消息如何换行？

```python
import PyOfficeRobot

PyOfficeRobot.chat.send_message(who='CSDN：程序员晚枫', message='你好' + '{ctrl}{ENTER}' + 'hello')

```
"""
