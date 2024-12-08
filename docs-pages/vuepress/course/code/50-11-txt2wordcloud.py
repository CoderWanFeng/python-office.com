# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : http://www.python4office.cn/wechat-qrcode/
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/8 22:29 
@本段代码的视频说明     ：https://www.bilibili.com/video/BV1ph4y1v7MN/
'''

import office

office.image.txt2wordcloud(filename=r'./test_files/50-11-txt2wordcloud/python-office.txt', color="black",
                           result_file="./test_files/50-11-txt2wordcloud/your_wordcloud.png")
