# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/Nt8E8vC-ZsoN1McTOYbY2g
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/18 21:42 
@本段代码的视频说明     ：
'''
# pip install pohan
import pohan
from pohan.pinyin.pinyin import Style

# 不带声调的
pinyin_list = pohan.pinyin.han2pinyin("程序员晚枫", style=Style.NORMAL)
print(f'我是不带声调的结果：{pinyin_list}')

# 带声调的
pinyin_list = pohan.pinyin.han2pinyin("程序员晚枫", style=Style.TONE)
print(f'我是带声调的结果：{pinyin_list}')

# 带数字声调的
pinyin_list = pohan.pinyin.han2pinyin("程序员晚枫", style=Style.TONE3)
print(f'我是带数字声调的结果：{pinyin_list}')
