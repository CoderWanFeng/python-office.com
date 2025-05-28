# -*- coding: UTF-8 -*-
'''
@学习网站      ：https://www.python-office.com
@读者群     ：http://www.python4office.cn/wechat-group/
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫，微信：python-office
@代码日期    ：2024/7/11 20:56 
@本段代码的视频说明     ：
'''
# 导入poocr模块，用于实现OCR识别功能
# 下载命令：pip install poocr -U
import poocr

# 定义SecretId和SecretKey，它们是访问API所需的密钥
# 这里使用的是示例值，实际使用时需要替换为有效的密钥
SecretId = '免费开通教程：https://www.bilibili.com/video/BV13J4m1s7L7/?p=3'
SecretKey = '免费开通教程：https://www.bilibili.com/video/BV13J4m1s7L7/?p=3'

# 调用BankCardOCR2Excel函数，将银行卡图片转换为Excel表格
# 参数说明：
# r'./test_files/程序员晚枫的文件夹/demo1.png': 图片文件路径，使用了原始字符串语法以处理反斜杠
# output_excel='BankCardOCR2Excel.xlsx': 输出的Excel文件名
# id=SecretId, key=SecretKey: API访问的密钥，分别对应SecretId和SecretKey
poocr.ocr2excel.BizLicenseOCR2Excel(r'./test_files/7-营业执照识别/demo1.png',
                                  output_excel='BankCardOCR2Excel.xlsx',
                                  id=SecretId, key=SecretKey)
