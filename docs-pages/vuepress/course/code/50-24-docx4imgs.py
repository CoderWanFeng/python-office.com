# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : http://www.python4office.cn/wechat-qrcode/
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/24 14:50 
@本段代码的视频说明     ：
'''
# pip install python-office
import office

# 王鹏
office.word.docx4imgs(word_path=r'./test_files/50-24-docx4imgs/程序员晚枫.docx',
                      img_path=r'./test_files/out')
