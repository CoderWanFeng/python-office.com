# -*- coding: UTF-8 -*-
'''
@学习网站      ：www.python-office.com
@读者群     ：http://www.python4office.cn/wechat-group/
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫，微信：CoderWanFeng
@代码日期    ：2024/2/18 20:43 
@本段代码的视频说明     ：
'''

# pip install poocr
import poocr

tencent_id = 'AKID3DLM9mHgRWO8j81xpby79zbzEJNFHKTQ'
tencent_key = 'wmWBxdP6e7gcSAkO2XwAHE5qXHsbIoIm'

poocr.ocr2excel.VatInvoiceOCR2Excel(input_path=r'test_files/2-原理和实现/发票/',
                                    output_excel='./test_files/2-原理和实现/发票识别结果（程序员晚枫）.xlsx',
                                    id=tencent_id, key=tencent_key)
