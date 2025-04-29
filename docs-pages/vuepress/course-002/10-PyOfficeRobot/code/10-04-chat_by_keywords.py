# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：python-office : http://www.python4office.cn/wechat-qrcode/
@个人网站      ：www.python-office.com
@代码日期    ：2023/10/2 1:46 
@本段代码的视频说明     ：
'''

## 第4讲 - 关键词回复


import PyOfficeRobot

keywords = {
    "我要报名": "你好，这是报名链接：www.python-office.com",
    "你好":"你也好",
    "点赞了吗？": "点了",
    "关注了吗？": "必须的",
    "投币了吗？": "三连走起",
}
PyOfficeRobot.chat.chat_by_keywords(who='程序员晚枫', keywords=keywords)
# who:发给谁
# keywords:关键词的组合
