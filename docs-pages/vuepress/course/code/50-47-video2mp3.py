# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/8x7c9qiAneTsDJq9JnWLgA
@个人网站      ：www.python-office.com
@代码日期    ：2023/10/1 17:59 
@本段代码的视频说明     ：
'''

# 导入这个库：python-office，简写为office
import office

# 1行代码，提取mp3文件
office.video.video2mp3(path=r'D:\download\baiduyun\50\44.mp4', mp3_name='44',output_path=r'./test_files/50-47-video2mp3/')

# 参数作用：
# path = 这里填写你本地的MV文件
# mp3_name = 这里填写你生成的mp3文件名，这里不用改

import povideo

povideo.video2mp3(path=r'D:\download\baiduyun\小破站：50讲自动化办公\程序员晚枫.mp4', mp3_name='44',output_path=r'./test_files/50-47-video2mp3/')
