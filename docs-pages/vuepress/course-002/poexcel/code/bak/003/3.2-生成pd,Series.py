# -*- coding: utf-8 -*-
# ⭐Python 60套学习资源：https://www.python-office.com/
# 📱公众号 :程序员晚枫 读者交流群：http://www.python4office.cn/wechat-group/
# 🏠2024最新视频：1行代码，实现自动化办公：https://www.bilibili.com/read/cv27366395
import pandas as pd

L1 = [100, 200, 300]
L2 = ["x", "y", "z"]
s1 = pd.Series(L1, index=L2)
print(s1)
