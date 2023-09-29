# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g
@个人网站      ：www.python-office.com
@代码日期    ：2023/8/24 22:10 
@本段代码的视频说明     ：
'''

import povideo

povideo.mark2video(video_path=r'D:\迅雷下载\9月25日\29.mp4',output_path=r'D:\迅雷下载\9月25日\29')
povideo.mark2video(video_path=r'D:\迅雷下载\9月25日\30.mp4',output_path=r'D:\迅雷下载\9月25日\30')
# povideo.mark2video(video_path=r'D:\download\baiduyun\5个实用的PDF自动化办公操作~1行Python代码搞定PDF转图片\06-PDF转图片.mp4')
import os
IMAGEMAGICK_BINARY = os.getenv('IMAGEMAGICK_BINARY', 'auto-detect')
# IMAGEMAGICK_BINARY = os.getenv('Path', 'auto-detect')
print(IMAGEMAGICK_BINARY)