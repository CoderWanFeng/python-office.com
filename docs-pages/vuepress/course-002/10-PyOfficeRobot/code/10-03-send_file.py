# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g
@个人网站      ：www.python-office.com
@代码日期    ：2023/10/2 1:46 
@本段代码的视频说明     ：
'''

## 第3讲 - 发送文件（图片、文档、软件等）

import PyOfficeRobot

PyOfficeRobot.file.send_file(who='程序员晚枫', file=r'D:\download\kuake\10讲Python微信机器人\代码\test_files\程序员晚枫.docx')
# who:发给谁
# file:发送文件的位置
