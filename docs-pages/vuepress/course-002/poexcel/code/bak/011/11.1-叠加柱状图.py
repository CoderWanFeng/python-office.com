# -*- coding: utf-8 -*-
# ⭐Python 60套学习资源：https://www.python-office.com/
# 📱公众号 :程序员晚枫 读者交流群：http://www.python4office.cn/wechat-group/
# 🏠2024最新视频：1行代码，实现自动化办公：https://www.bilibili.com/read/cv27366395
import pandas as pd
import matplotlib.pyplot as plt

users = pd.read_excel("./example.xlsx")
users["Total"] = users["Oct"] + users["Nov"] + users["Dec"]
users.sort_values(by="Total", inplace=True)
print(users)
users.plot.barh(x="Name", y=["Oct", "Nov", "Dec"], stacked=True, title="User Behavior")
plt.tight_layout()
plt.show()
