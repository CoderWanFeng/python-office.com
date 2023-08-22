# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/HYOWV7ImvTXImyYWtwADog
@个人网站      ：www.python-office.com
@代码日期    ：2023/8/22 23:34 
@本段代码的视频说明     ：https://www.bilibili.com/video/BV1K84y1Z7n6/?spm_id_from=333.788&vd_source=ca20bb8763fcb18660aa74d7a87234fa
'''

# 下载命令 pip install python-office ，下载教程：https://www.bilibili.com/video/BV1m14y1y76g
import office

office.word.docx2pdf(path=r'./test_files/50-05-docx2pdf',
                     output_path=r'./test_files/50-05-docx2pdf/docx2pdf')
