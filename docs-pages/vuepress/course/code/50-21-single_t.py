# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：python-office : http://www.python4office.cn/wechat-qrcode/
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/19 23:45 
@本段代码的视频说明     ：
'''
import pofinance as pf

# 联创电子：002036
money = pf.t0(buy_price=9.9, sale_price=10, num=6000, w_rate=2.5 / 10000, min_rate=5, stamp_tax=0.5 / 1000)
print(money)

"""
计算做T的收益
Args:
    buy_price: 买入成本
    sale_price: 卖出价格
    num: 单笔数量
    w_rate: 手续费，默认万2.5
    min_rate: 单笔最低手续费，默认5元
    stamp_tax: 印花税，默认千0.5

Returns: 做T后的收益金额

"""
