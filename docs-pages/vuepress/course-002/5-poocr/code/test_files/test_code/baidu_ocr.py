# -*- coding: UTF-8 -*-
'''
@学习网站      ：www.python-office.com
@读者群     ：http://www.python4office.cn/wechat-group/
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫，微信：python-office
@代码日期    ：2024/5/6 21:35 
@本段代码的视频说明     ：
'''
import poocr

res = poocr.ocr.social_security_card(img_path=r'D:\workplace\\程序员晚枫的社保卡.jpg',
                                     id=API_Key, key=Secret_Key)
print(res)


