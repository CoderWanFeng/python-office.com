# -*- coding: utf-8 -*-
# ⭐Python 60套学习资源：https://www.python-office.com/
# 📱公众号 :程序员晚枫 读者交流群：http://www.python4office.cn/wechat-group/
# 🏠2024最新视频：1行代码，实现自动化办公：https://www.bilibili.com/read/cv27366395
import pandas as pd

d = {'x': 100, 'y': 200, 'z': 300}
print(d.keys())
print(d.values())
print(d['x'])

s1 = pd.Series(d)
print(s1)
print(s1.keys())
print(s1.values)
