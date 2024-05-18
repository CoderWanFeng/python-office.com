# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/8x7c9qiAneTsDJq9JnWLgA
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/18 21:53 
@本段代码的视频说明     ：
'''
# 导入这个库：pip install poexcel
import poexcel

poexcel.query4excel(query_content='小红书',
                    query_path=r'./test_files/50-20-query4excel',
                    output_path=r'./test_files/out',
                    output_name='query4excel.xlsx')
