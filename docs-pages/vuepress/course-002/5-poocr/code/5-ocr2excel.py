# -*- coding: UTF-8 -*-
'''
@学习网站      ：www.python-office.com
@读者群     ：http://www.python4office.cn/wechat-group/
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫，微信：CoderWanFeng
@代码日期    ：2024/2/18 21:55 
@本段代码的视频说明     ：
'''
import poocr


# pip install poocr
import poocr

tencent_id = '免费开通方法：https://b23.tv/TTo4QTc'
tencent_key = '免费开通方法：https://b23.tv/TTo4QTc'

poocr.ocr2excel.IDCardOCR(input_path=r'test_files/程序员晚枫的身份证.jpg',
                          output_excel='./test_files/身份证识别结果（程序员晚枫）.xlsx',
                          id=tencent_id, key=tencent_key)
