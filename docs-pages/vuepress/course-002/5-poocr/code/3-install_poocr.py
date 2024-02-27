# -*- coding: UTF-8 -*-
'''
@学习网站      ：www.python-office.com
@读者群     ：http://www.python4office.cn/wechat-group/
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫，微信：CoderWanFeng
@代码日期    ：2024/2/18 21:55 
@本段代码的视频说明     ：
'''

# pip install poocr
import poocr

tencent_id = 'AKID3DLM9mHgRWO8j81xpby79zbzEJNFHKTQ'
tencent_key = 'wmWBxdP6e7gcSAkO2XwAHE5qXHsbIoIm'

res = poocr.ocr.IDCardOCR(img_path=r'test_files/3-下载poocr/img.png',
                          id=tencent_id, key=tencent_key)
print(res)


