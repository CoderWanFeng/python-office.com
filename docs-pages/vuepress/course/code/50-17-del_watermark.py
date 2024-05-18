# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/8x7c9qiAneTsDJq9JnWLgA
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/13 20:05 
@本段代码的视频说明     ：https://www.bilibili.com/video/BV1Xk4y1c7Dk/?vd_source=ca20bb8763fcb18660aa74d7a87234fa
'''
import office

office.image.del_watermark(input_image=r'./test_files/50-17-del_watermark/程序员晚枫的发票1.png',
                           output_image=r'./test_files/50-17-del_watermark/del_water_mark.jpg')

# pip install poimage
import poimage

poimage.add_watermark(file=r'./test_files/50-03-pip/img.png', mark='全网同名，程序员晚枫',
                      output_path=r'./test_files/50-03-pip/mark')
