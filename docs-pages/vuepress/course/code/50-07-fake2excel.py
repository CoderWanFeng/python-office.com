# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/Nt8E8vC-ZsoN1McTOYbY2g
@个人网站      ：www.python-office.com
@代码日期    ：2023/8/25 22:27 
@本段代码的视频说明     ：https://www.bilibili.com/video/BV18m4y1u7Kq
'''

# pip install python-office
import office

# 代码、文档，见置顶评论
# 能模拟的数据有哪些？http://python4office.cn/python-office/fake2excel/

# 普通
office.excel.fake2excel(columns=['name', 'company', 'phone_number'],
                        rows=10,
                        path=r'./test_files/50-07-fake2excel/中文-1.xlsx')


import poexcel


poexcel.fake2excel()