# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/8x7c9qiAneTsDJq9JnWLgA
@个人网站      ：www.python-office.com
@代码日期    ：2023/8/29 22:01 
@本段代码的视频说明     ：https://www.bilibili.com/video/BV1H8411X7uu/
'''

# 安装python
# 安装python-office库
# pip install python-office
# ====================================================================

# 导入python-office包
import office

# 将pdf文件加密
# path：待加密pdf文件路径
# password：输出pdf文件
# output_path：输出pdf文件路径
office.pdf.encrypt4pdf(
    path=r"E:\program\python-office\pdf",
    password="123@#",
)

# output_path=r"E:\program\python-office\encrypt"

# 上面这种是Windows用户
# 尊贵的Mac和Linux用户
# ====================================================================
# pip install popdf
'''
office.pdf.encrypt4pdf(
    path=r"/program/python-office/pdf",
    password="123@#",
    output_path=r"/program/python-office/encrypt"
)
'''
