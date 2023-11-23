# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/Nt8E8vC-ZsoN1McTOYbY2g
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/3 23:37 
@本段代码的视频说明     ：https://www.bilibili.com/video/BV1i14y1y7Kp/
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
'''
office.pdf.encrypt4pdf(
    path=r"E:\program\python-office\源文件",
    password="123@#",
    output_path=r"E:\program\python-office\加密文件"
)
'''

# 将pdf文件解密
# path：待解密pdf文件
# password：pdf文件密码
# res_pdf：输出pdf文件名
office.pdf.decrypt4pdf(
    path=r"E:\program\python-office\加密文件\正则表达式30分钟入门教程（加密）.pdf",
    password="123@#",
    res_pdf = r"E:\program\python-office\解密文件\解密后文件.pdf"
    # res_pdf = r"解密后文件.pdf"
)



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
