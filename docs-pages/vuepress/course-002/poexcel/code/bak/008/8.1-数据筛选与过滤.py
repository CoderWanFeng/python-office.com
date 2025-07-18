# -*- coding: utf-8 -*-
# ⭐Python 60套学习资源：https://www.python-office.com/
# 📱公众号 :程序员晚枫 读者交流群：http://www.python4office.cn/wechat-group/
# 🏠2024最新视频：1行代码，实现自动化办公：https://www.bilibili.com/read/cv27366395
import pandas as pd


def age_18_to_30(a):
    return a >= 18 and a <= 30


def level_a(s):
    return 85 <= s <= 100


students = pd.read_excel("./example.xlsx", index_col="ID")
students = students.loc[students["Age"].apply(age_18_to_30)].loc[students.Score.apply(level_a)]
print(students)
