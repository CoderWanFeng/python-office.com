# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/8x7c9qiAneTsDJq9JnWLgA
@个人网站      ：www.python-office.com
@代码日期    ：2023/10/1 17:55 
@本段代码的视频说明     ：
'''
# pip install pocode
import pocode

count_of_code_lines, count_of_blank_lines, count_of_annotation_lines = pocode.line.count_line(code_path=r'D:\workplace\code\github\python-office')
print(f'代码总行数：{count_of_code_lines}，代码空行：{count_of_blank_lines}，代码注释：{count_of_annotation_lines}')
