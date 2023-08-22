# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/HYOWV7ImvTXImyYWtwADog
@个人网站      ：www.python-office.com
@代码日期    ：2023/8/20 15:16 
@本段代码的视频说明     ：https://www.bilibili.com/video/BV1m14y1y76g/?spm_id_from=333.999.0.0&vd_source=ca20bb8763fcb18660aa74d7a87234fa
'''
import office

office.image.add_watermark(file=r'./test_files/50-03-pip/img.png',mark='全网同名，程序员晚枫',output_path=r'./test_files/50-03-pip/mark')