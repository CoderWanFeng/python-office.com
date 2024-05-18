# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/8x7c9qiAneTsDJq9JnWLgA
@个人网站      ：www.python-office.com
@代码日期    ：2023/8/28 21:04 
@本段代码的视频说明     ：https://www.bilibili.com/video/BV13N411q7W2/
'''

# 安装python
# 安装python-office库
# pip install python-office

# 导入python-office包
import office

# 调用pdf添加水印方法
# pdf_file：待加水印pdf
# mark_str：水印内容
office.pdf.add_watermark_by_parameters(
    pdf_file=r"E:\program\python-office\正则表达式30分钟入门教程.pdf",
    mark_str="www.python-office.com",
)

# 上面这种是Windows用户
# 尊贵的Mac和Linux用户
# ====================================================================
# pip install popdf
'''
import office

# 调用pdf添加水印方法
office.pdf.add_watermark_by_parameters(
    pdf_file=r"\program\python-office\正则表达式30分钟入门教程.pdf",
    mark_str="www.python-office.com",
)
'''