# -*- coding: UTF-8 -*-
'''
@学习网站      ：www.python-office.com
@读者群     ：http://www.python4office.cn/wechat-group/
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫，微信：python-office
@代码日期    ：2024/2/18 21:55 
@本段代码的视频说明     ：
'''

# pip install poocr
import poocr

SecretId = 'AKIDztbwHThnrtr7IHUm3Pugeq0vpfbeq4GY'
SecretKey = 'Hi3KgI0b1FNes7Qlx5JnGg3jIm7HMZ2W'

# poocr.ocr2excel.LicensePlateOCR2Excel(input_path=r'test_files/5-识别后保存为Excel/程序员晚枫-发票1.jpg',
#                                     output_excel='./test_files/发票识别结果（程序员晚枫）-单个.xlsx',
#                                     id=SecretId, key=SecretKey)


poocr.ocr2excel.VatInvoiceOCR2Excel(input_path=r'D:\test\py310\poocr_test\程序员晚枫的发票\3、滴滴发票-鼠标垫滴滴送过来的.pdf',
                                    output_excel='./test_files/发票识别结果（程序员晚枫）-多个.xlsx',
                                    id=SecretId, key=SecretKey)
