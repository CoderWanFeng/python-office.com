# -*- coding: utf-8 -*-
# ⭐Python 60套学习资源：https://www.python-office.com/
# 📱公众号 :程序员晚枫 读者交流群：http://www.python4office.cn/wechat-group/
# 🏠2024最新视频：1行代码，实现自动化办公：https://www.bilibili.com/read/cv27366395
import pandas as pd
import numpy as np


def get_circumcircle_area(l, h):
    r = np.sqrt(l ** 2 + h ** 2) / 2
    return r ** 2 * np.pi


def wrapper(row):
    return get_circumcircle_area(row['Length'], row['Height'])


rects = pd.read_excel('./Rectangles.xlsx', index_col='ID')
rects['CA'] = rects.apply(wrapper, axis=1)
print(rects)
