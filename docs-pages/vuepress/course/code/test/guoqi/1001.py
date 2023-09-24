# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/HYOWV7ImvTXImyYWtwADog
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/24 23:57 
@本段代码的视频说明     ：
'''

#
# from PIL import Image
# import math
#
#
# key = 3.2  # 修改key值可以调整国旗的范围，推荐2~4之间的数字，支持小数
# motherland_flag = Image.open('国旗1024.png')
# head_picture = Image.open('头像600.jpg')
# # 截图国旗上的五颗五角星
# flag_width, flag_height = motherland_flag.size
# crop_flag = motherland_flag.crop((66, 0, flag_height+66, flag_height))
# # 将国旗截图处理成颜色渐变
# for i in range(flag_height):
#     for j in range(flag_height):
#         color = crop_flag.getpixel((i, j))
#         distance = int(math.sqrt(i*i + j*j))
#         alpha = 255 - int(distance//key)
#         new_color = (*color[0:-1], alpha if alpha > 0 else 0)
#         crop_flag.putpixel((i, j), new_color)
# # 修改渐变图片的尺寸，适应头像大小，粘贴到头像上
# new_crop_flag = crop_flag.resize(head_picture.size)
# head_picture.paste(new_crop_flag, (0, 0), new_crop_flag)
# # 保存自己的国旗头像
# head_picture.save('国旗头像.png')

import poimage

poimage.flag2profile(flag_path=r'./国旗1024.png', profile_path=r'./头像600.jpg', output_path=r'./out/p01.png')
