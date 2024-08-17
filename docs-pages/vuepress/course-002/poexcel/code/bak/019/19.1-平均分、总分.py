# -*- coding: utf-8 -*-
# ⭐Python 60套学习资源：https://www.python-office.com/
# 📱公众号 :程序员晚枫 读者交流群：http://www.python4office.cn/wechat-group/
# 🏠2024最新视频：1行代码，实现自动化办公：https://www.bilibili.com/read/cv27366395
import pandas as pd

students = pd.read_excel('./Students.xlsx', index_col='ID')
temp = students[['Test_1', 'Test_2', 'Test_3']]
row_sum = temp.sum(axis=1)
row_mean = temp.mean(axis=1)
students['Total'] = row_sum
students['Average'] = row_mean
col_mean = students[['Test_1', 'Test_2', 'Test_3', 'Total', 'Average']].mean()
print(col_mean)
col_mean['Name'] = 'Summary'  # 进行命名
students = students.append(col_mean, ignore_index=True)
print(students)
