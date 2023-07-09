# 下载和安装

本文会帮助你从头搭建一个运行``python-office自动化办公``的环境。

**如果你已经安装了Python环境，并且懂得如何使用，可以直接从步骤 2 开始。**

1. 安装Python和Pycharm

视频教程：[传送门](https://www.bilibili.com/video/BV1Q44y1u7rV)
> 注意，这个项目支持的Python版本是3.8+

2. 安装python-office

国内用户建议使用阿里镜像
```python
pip install -i https://mirrors.aliyun.com/pypi/simple python-office -U
```

3. 验证安装成功

跟着这个视频：[python-office一键生成模拟数据](https://www.bilibili.com/video/BV1wr4y1b7uk?spm_id_from=333.999.0.0)，
运行以下代码，看是否能自动批量模拟Excel数据
```python
import office

office.excel.fake2excel(columns=['name', 'text'], rows=20)

# 参数说明
# columns:list，每列的数据名称，默认是名称
# rows：多少行，默认是1
# language：什么语言，可以填english，默认是中文
# path：输出excel的位置，有默认值
```

4. 常见问题

如果以上步骤能够运行成功，恭喜你，环境安装完成，可以跟着接下来的文档去使用了~！

如果不能运行成功，请移步：[常见问题](https://www.python-office.com/ref/qaq.html)