# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/B1V6KeXc7IOEB8DgXLWv3g
@个人网站      ：www.python-office.com
@代码日期    ：2023/7/15 0:35 
@本段代码的视频说明     ：
'''


sum_num = 0
for num in range(1, 101):
    sum_num += num
print(sum_num)


sum_num = sum(range(1, 101))
print(sum_num)
