# -*- coding: utf-8 -*-
# ⭐Python 60套学习资源：https://www.python-office.com/
# 📱公众号 :程序员晚枫 读者交流群：http://www.python4office.cn/wechat-group/
# 🏠2024最新视频：1行代码，实现自动化办公：https://www.bilibili.com/read/cv27366395
import pandas as pd
from datetime import date
import numpy as np

pd.options.display.max_columns = 999
orders = pd.read_excel('./Orders.xlsx')
orders['Year'] = pd.DatetimeIndex(orders.Date).year
pt1 = orders.pivot_table(index='Category', columns='Year', values='Total', aggfunc=np.sum)
print(pt1)
groups = orders.groupby(['Category', 'Year'])
s = groups['Total'].sum()
c = groups['ID'].count()
pt2 = pd.DataFrame({'Sum': s, 'Count': c})
print(pt2)
