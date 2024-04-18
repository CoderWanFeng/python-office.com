# -*- coding: UTF-8 -*-
'''
@学习网站      ：www.python-office.com
@读者群     ：http://www.python4office.cn/wechat-group/
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫，微信：CoderWanFeng
@代码日期    ：2024/2/18 22:02 
@本段代码的视频说明     ：
'''

"""
本讲用到的资料：
1、所有功能的调用方法：https://mp.weixin.qq.com/s/tg-0yuItjZj0O0UEksl5ag
2、json解析网站：https://www.sojson.com/simple_json.html
"""

import poocr

tencent_id = 'AKIDxz9EJVgieQ3CGQYllcWUK1b7Ulx120vp'
tencent_key = 'vd6mbPE1gKJMUTMBwa8e3uusodTGT0Qf'

res = poocr.ocr.LicensePlateOCR(img_path=r'D:\test\程序员晚枫的\车牌\img.png',
                                id=tencent_id, key=tencent_key)

print(res)
