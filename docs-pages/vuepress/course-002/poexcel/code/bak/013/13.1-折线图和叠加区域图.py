# -*- coding: utf-8 -*-
# ⭐Python 60套学习资源：https://www.python-office.com/
# 📱公众号 :程序员晚枫 读者交流群：http://www.python4office.cn/wechat-group/
# 🏠2024最新视频：1行代码，实现自动化办公：https://www.bilibili.com/read/cv27366395
import pandas as pd
import matplotlib.pyplot as plt

weeks = pd.read_excel("./example.xlsx", index_col="Week")
print(weeks)
print(weeks.columns)
# weeks.plot(y=['Accessories', 'Bikes', 'Clothing', 'Components'])
weeks.plot.area(y=['Accessories', 'Bikes', 'Clothing', 'Components'])
# weeks.plot.bar(y=['Accessories', 'Bikes', 'Clothing', 'Components'],stacked=True)
plt.title("Sales Weekly Trend", fontsize=16, fontweight="bold")
plt.ylabel("Total", fontsize=12, fontweight="bold")
plt.xticks(weeks.index, fontsize=8)
plt.show()
