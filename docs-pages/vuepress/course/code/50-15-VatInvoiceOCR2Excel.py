# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/Nt8E8vC-ZsoN1McTOYbY2g
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/10 22:35 
@本段代码的视频说明     ：
'''

# pip install poocr
import poocr

# 免费体验：https://cloud.tencent.com/act/cps/redirect?redirect=34190&cps_key=ca76be5a2293ba3906d6d5407aea15ee
# 拿到id和key：https://cloud.tencent.com/act/cps/redirect?redirect=36394&cps_key=ca76be5a2293ba3906d6d5407aea15ee
poocr.ocr2excel.VatInvoiceOCR2Excel(input_path=r'test_files/50-15-VatInvoiceOCR2Excel/',
                                    output_path=r'test_files/50-15-VatInvoiceOCR2Excel',
                                    output_excel='程序员晚枫的发票.xlsx',
                                    id='AKIDmU0JVbaS8vY1HMJG7oSwFQI4kQ8h6KND',
                                    key='jvywlSzKYjpu1shN3azERWYWUPHE4i9N')

# 全部100多个识别功能：https://mp.weixin.qq.com/s/WxICBZZSgkm-OrvXB82hbg
# # 识别增值税发票
# ressult = poocr.ocr.VatInvoiceOCR()
# # 识别银行卡
# ressult = poocr.ocr.BankCardOCR()
# # 识别身份证
# ressult = poocr.ocr.IDCardOCR()
