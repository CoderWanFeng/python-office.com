# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/4 1:24 
@本段代码的视频说明     ： https://www.bilibili.com/video/BV1Lm4y1M7Pz/
'''
import office

office.file.search_by_content(
    search_path=r'..\test_files\50-09-search4content',
    content='import office')


# pip install pofile
import pofile

pofile.search_by_content(
    search_path=r'..\test_files\50-09-search4content',
    content='import office')
