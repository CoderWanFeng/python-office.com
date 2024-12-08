# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : http://www.python4office.cn/wechat-qrcode/
@个人网站      ：www.python-office.com
@代码日期    ：2023/12/27 23:20 
@本段代码的视频说明     ：
'''

a=0.1
b=0.2
c=a+b
# print(c)

from decimal import Decimal

a = Decimal(str(0.1))
b = Decimal(str(0.2))
c = a + b
print(c)