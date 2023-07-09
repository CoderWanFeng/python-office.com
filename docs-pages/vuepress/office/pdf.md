# PDF


## 1、加密、解密

文字说明：[传送门](https://mp.weixin.qq.com/s/YOxBzYPMqfl5gCAWtnVXKA)

**加密**
```python
# 导入这个库
import office

# PDF加密：填写你的文件位置和密码
office.pdf.encrypt4pdf(path='需要加密的.pdf', password='你想添加的密码')

# 参数说明：
# path：你的文件位置，例如：D:\work\参考.pdf
# password：你的密码，可以随意设置，不能为空
```

**解密**
```
# 导入这个库
import office

#PDF解密：填写你的文件位置和密码
office.pdf.decrypt4pdf(path='你的加密文件.pdf', password='该文件的密码')

# 参数说明：
# path：你的文件位置，例如：D:\work\参考.pdf
# password：你之前加密时设置的密码，不能为空
```


## 2、加水印

文字说明：[传送门](https://mp.weixin.qq.com/s/yJDs5RoytRL5hl-ybXkZOA)
```python
import office  # 导入python-office

office.pdf.add_watermark() # 不需要对代码进行任何修改，直接运行
```

## 3、 合并2个PDF

文字说明：[传送门](https://mp.weixin.qq.com/s/9erh3W3WCD36Axj70pRvog)
```python
# 导入这个库：python-office，简写为office
import office

#一行代码，合并pdf
office.pdf.merge2pdf(one_by_one=['程序员晚枫.pdf', '一键三连.pdf'], output='走起.pdf')

#参数作用：
# one_by_one = 是个列表，里面是2个pdf文件，合并后，a在前面，b在后面
# output = 合并后的pdf名字，不能为空
```

## 4、转 Word

文字说明：[传送门](https://mp.weixin.qq.com/s/O0pJOs9stD1prENP4N8QYg)

> 请注意，使用这个功能，一定要把python-office，更新到最新版本！
> 查看最新版本号：https://pypi.org/project/python-office/
```
更新命令：pip install -i https://mirrors.aliyun.com/pypi/simple python-office -U
```
```python

# 导入这个库：python-office，简写为office
import office

# 1行代码，实现 PDF 转 Word
office.pdf.pdf2docx(file_path='程序员晚枫.pdf')

# 参数说明：
# file_path:存放PDF的位置 + PDF的文件名，例如：c://test//程序员晚枫.pdf
```
## 5、 TxT 转成 PDF

文字说明：[传送门](https://mp.weixin.qq.com/s/GiXYB_xZdlsYv5AIeIELkA)
```python
# 导入这个库：python-office，简写为：office
import office

# path：你的文件位置，例如：D:\work\参考.txt
# res_pdf：你想输出的pdf名称，可以不填，默认是：txt2pdf.pdf
office.pdf.txt2pdf(path='test.txt', res_pdf='res.pdf')
```

## 6、转图片

文字说明：[传送门](https://mp.weixin.qq.com/s/tvHZIBGcrMBLTLB4u23Mow)
```python
# 导入这个库：python-office，简写为office
import office

# 一行代码，实现转换
office.pdf.pdf2imgs(
    pdf_path='D://程序员晚枫的文件夹//程序员晚枫.pdf',
    out_dir='./点赞+关注文件夹'
)
# 参数说明：
# pdf_path = 你的PDF文件的地址 
# out_dir = 转换后的图片存放地址，可以不填，默认是PDF的地址
```