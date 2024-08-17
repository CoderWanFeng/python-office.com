# -*- coding: UTF-8 -*-
'''
@学习网站      ：https://www.python-office.com
@读者群     ：http://www.python4office.cn/wechat-group/
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫，微信：CoderWanFeng
@代码日期    ：2024/5/18 22:44 
@本段代码的视频说明     ：
'''

import poocr

SecretId = 'AKIDztbwHThnrtr7IHUm3Pugeq0vpfbeq4GY'
SecretKey = 'Hi3KgI0b1FNes7Qlx5JnGg3jIm7HMZ2W'

# 只需要修改这里
pdf_path = r'D:\test\py310\poocr_test\程序员晚枫的发票\1、山姆发票-矿泉水.pdf'
output_path = r'D:\test\py310\poocr_test\识别结果'

poocr.ocr2excel.VatInvoiceOCR2Excel(input_path=pdf_path,
                                    output_path=output_path,
                                    id=SecretId, key=SecretKey,
                                    file_name=False)
