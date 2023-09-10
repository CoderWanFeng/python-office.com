# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/HYOWV7ImvTXImyYWtwADog
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/4 21:25 
@本段代码的视频说明     ：https://www.bilibili.com/video/BV1ph4y1v7MN/?spm_id_from=333.999.0.0
'''

import office

res = office.video.txt2mp3(content='程序员晚枫',
                           file=r'test_files/50-12-txt2mp3/程序员晚枫.txt',
                           mp3=r'test_files/50-12-txt2mp3/程序员晚枫.mp3',
                           speak=True)
print(res)
