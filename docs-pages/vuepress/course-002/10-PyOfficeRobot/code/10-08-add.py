# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/8x7c9qiAneTsDJq9JnWLgA
@个人网站      ：www.python-office.com
@代码日期    ：2023/10/2 1:48 
@本段代码的视频说明     ：
'''

## 第8讲 - 批量加好友

import PyOfficeRobot

msg = "你好，我是程序员晚枫，全网同名。"
num_notes = {
    # '微信号/手机号': '你给Ta的备注',
    # 'hdylw1024': '公众号-晚枫',
    'CoderWanFeng': '小红书-晚枫',
}
PyOfficeRobot.friend.add(msg=msg, num_notes=num_notes)