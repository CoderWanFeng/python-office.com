# -*- coding: utf-8 -*-
# ⭐Python 60套学习资源：https://www.python-office.com/
# 📱公众号 :程序员晚枫 读者交流群：http://www.python4office.cn/wechat-group/
# 🏠2024最新视频：1行代码，实现自动化办公：https://www.bilibili.com/read/cv27366395
import pandas as pd
import matplotlib.pyplot as plt

students = pd.read_excel("./example.xlsx", index_col="From")
print(students)
# students["2017"].sort_values(ascending=True).plot.pie(fontsize=8,startangle=-270)
students["2017"].plot.pie(fontsize=8, counterclock=False, startangle=-270)
plt.title("Source of International Students", fontsize=16, fontweight="bold")
plt.ylabel("2017", fontsize=12, fontweight="bold")
plt.show()
