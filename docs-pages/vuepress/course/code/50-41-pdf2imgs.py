# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：python-office : http://www.python4office.cn/wechat-qrcode/
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/16 18:53 
@本段代码的视频说明     ：
'''

# 安装python
# 安装python-office库
# pip install python-office==0.4.6 # 当前视频版本
# pip install -U python-office # 未安装过
# pip install --upgrade python-office # 安装过
# ====================================================================

# 导入python-office包
import office

# 调用pdf转图片方法
# pdf_path：待转为图片的pdf文件路径
# out_dir：图片输出文件夹
office.pdf.pdf2imgs(
    pdf_path=r"E:\program\python-office\python-office.pdf",
    out_dir=r"E:\program\python-office\img"
)
