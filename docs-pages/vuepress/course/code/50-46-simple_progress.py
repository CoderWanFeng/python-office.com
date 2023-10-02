# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g
@个人网站      ：www.python-office.com
@代码日期    ：2023/10/1 17:58 
@本段代码的视频说明     ：
'''
# pip install poprogress
from poprogress import simple_progress

a_list = [1, 2, 3, 4, 5, 6, 7, 8]*1000000


for a in simple_progress(a_list):
    pass