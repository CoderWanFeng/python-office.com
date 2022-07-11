# Excel

Excel自动化办公的功能，目前有：

- 1、模拟数据
视频说明：[传送门](https://www.bilibili.com/video/BV1wr4y1b7uk/)
```python
import office

office.excel.fake2excel(columns=['name', 'text'], rows=20)

# 参数说明
# columns:list，每列的数据名称，默认是名称
# rows：多少行，默认是1
# language：什么语言，可以填english，默认是中文
# path：输出excel的位置，有默认值
```

更多可以模拟的数据种类，请参考文档：[数据种类](https://mp.weixin.qq.com/s/xVwEjXu58WovgSi4ZTtVQw)

- 2、合并excel文件
文字说明：[传送门](https://mp.weixin.qq.com/s/3ZhZZfGlpNhszCWnOBeklg)

```python
# 导入这个库：python-office，简写为office
import office

#1行代码，验证是否绑定成功
office.excel.merge2excel(dir_path=r'C:\程序员晚枫\excel-merge\excel',output_file='test.xlsx')

#参数作用：
# dir_path = 文件夹的位置，建议把需要合并的多个excel文件放到同一个文件夹里。
# output_file = 最终合并的excel文件放在哪里、叫什么名字，可以不填，默认是：merge2excel.xlsx
```
直接运行以上代码，就可以得到一个合并后的excel文件啦~

**快去试试吧~**

- 3、拆分excel文件
文字说明：[传送门](https://mp.weixin.qq.com/s/dAx6JEbj5OlVnCcxokCzTQ)

```python
# 导入这个库：python-office，简写为office
import office

#1行代码，验证是否绑定成功
office.excel.sheet2excel(file_path='d://程序员晚枫的文件夹/class.xlsx')

#参数作用：
# file_path = 将要拆分的Excel文件的位置，只能拆分xlsx后缀的Excel文件。
```
直接运行以上代码，就可以得到一个拆分后的excel文件啦~

**快去试试吧~**