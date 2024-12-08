# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : http://www.python4office.cn/wechat-qrcode/
@个人网站      ：www.python-office.com
@代码日期    ：2023/8/27 23:42 
@本段代码的视频说明     ：https://www.bilibili.com/video/BV1Em4y1T7aH/
'''

import office

# office.image.add_watermark(file='./要添加水印的图片.png',mark='python办公自动化',output_path=r'已添加水印',opacity=0.2)

office.image.add_watermark(file='./要添加水印的图片.png',
                           mark='python办公自动化',
                           output_path=r'已添加水印',
                           color="#ff0000", size=80, opacity=0.5, space=600, angle=30)
