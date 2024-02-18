# -*- coding: UTF-8 -*-
'''
@学习网站      ：www.python-office.com
@读者群     ：http://www.python4office.cn/wechat-group/
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫，微信：CoderWanFeng
@代码日期    ：2024/2/18 20:46 
@本段代码的视频说明     ：
'''

# 识别发票，并且保存到Excel中

# pip install poocr
import poocr

tencent_id = 'AKIDQhldHjy0nMhpiNo36vWu52kEUXM8g184'
tencent_key = 'oPp25va2JOGyUovra8UdbOyLXYMxKWTC'

# poocr.ocr2excel.VatInvoiceOCR2Excel(input_path=r'test_files/2-原理和实现/发票/',
#                                     output_excel='./test_files/2-原理和实现/发票识别结果（程序员晚枫）.xlsx',
#                                     id=tencent_id, key=tencent_key)

poocr.ocr2excel.BankCardOCR2Excel(input_path=r'test_files/2-原理和实现/银行卡/程序员晚枫的银行卡.png', output_excel='./test_files/2-原理和实现/银行卡识别结果（程序员晚枫）.xlsx',
                                  id=tencent_id, key=tencent_key)

"""
- 产品说明
    - 腾讯云：https://cloud.tencent.com/product/ocr
    - 免费额度：https://cloud.tencent.com/document/product/866/35945
    - 购买额度：https://buy.cloud.tencent.com/iai_ocr

- id和key：
    - 开通和使用 - 教程：https://cloud.tencent.com/document/product/598/37140?fromSource=gwzcw.1293314.1293314.1293314&cps_key=ca76be5a2293ba3906d6d5407aea15ee
    - 页面：https://cloud.tencent.com/login?s_url=https%3A%2F%2Fconsole.cloud.tencent.com%2Fcam
"""
