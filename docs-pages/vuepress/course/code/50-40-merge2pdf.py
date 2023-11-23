# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/Nt8E8vC-ZsoN1McTOYbY2g
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/3 23:37 
@本段代码的视频说明     ：https://www.bilibili.com/video/BV1a14y1k7v9/
'''

# 安装python
# 安装python-office库
# pip install python-office==0.4.4
# pip install --upgrade python-office
# ====================================================================

# 导入python-office包
import office

# 调用pdf添加水印方法
# pdf_file：待加水印pdf
# mark_str：水印内容
'''
office.pdf.add_watermark_by_parameters(
    pdf_file=r"E:\program\python-office\正则表达式30分钟入门教程.pdf",
    mark_str="www.python-office.com",
)
'''

# ====================================================================

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
# ======================================================================
# 将pdf文件解密
# path：待解密pdf文件
# password：pdf文件密码
# res_pdf：输出pdf文件名
'''
office.pdf.decrypt4pdf(
    path=r"E:\program\python-office\加密文件\正则表达式30分钟入门教程（加密）.pdf",
    password="123@#",
    res_pdf = r"E:\program\python-office\解密文件\解密后文件.pdf"
    # res_pdf = r"解密后文件.pdf"
)
'''
# =======================================================================

# 合并两个pdf文件
# one_by_one：待合并pdf文件
# output：合并后pdf文件
office.pdf.merge2pdf(
    one_by_one=[r"正则表达式30分钟入门教程.pdf",r"STLINK调试补充教程.pdf"],
    output=r"E:\program\python-office\合并后文件\合并后文件.pdf"
)


# 上面这种是Windows用户@
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
