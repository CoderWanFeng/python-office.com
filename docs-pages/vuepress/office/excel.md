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
