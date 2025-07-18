# -*- coding: utf-8 -*-
# ⭐Python 60套学习资源：https://www.python-office.com/
# 📱公众号 :程序员晚枫 读者交流群：http://www.python4office.cn/wechat-group/
# 🏠2024最新视频：1行代码，实现自动化办公：https://www.bilibili.com/read/cv27366395
import pandas as pd
import matplotlib.pyplot as plt

students = pd.read_excel("./example.xlsx")
students.sort_values(by="Number", inplace=True, ascending=False)
print(students)
plt.bar(students.Field, students.Number, color="orange")
plt.xticks(students.Field, rotation="90")
plt.xlabel("Field")
plt.ylabel("Number")
plt.title("International Students by Field", fontsize=16)
plt.tight_layout()
plt.show()
