# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/HYOWV7ImvTXImyYWtwADog
@个人网站      ：www.python-office.com
@代码日期    ：2023/10/1 17:57 
@本段代码的视频说明     ：
'''
# pip install potime ，下载这个库
from potime import RunTime  # 从potime里，导入RunTime这个模块

@RunTime
def add_sum(start, end):
    # 算术逻辑
    res = 0
    for num in range(start, end):
        res += num


if __name__ == '__main__':
    add_sum(0, 10000)
