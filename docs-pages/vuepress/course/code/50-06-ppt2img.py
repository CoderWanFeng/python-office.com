# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/HYOWV7ImvTXImyYWtwADog
@个人网站      ：www.python-office.com
@代码日期    ：2023/8/24 21:53 
@本段代码的视频说明     ： https://www.bilibili.com/video/BV1QG411o7Xb/
'''

# pip install python-office
import office

# 置顶评论
office.ppt.ppt2img(input_path=r'./test_files/50-06-ppt2img/ppt-程序员晚枫.pptx',
                   output_path=r'./test_files/50-06-ppt2img/output',
                   merge=True)
