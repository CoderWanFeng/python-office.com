# 工具

- Tools
    - 生成二维码：[代码](https://mp.weixin.qq.com/s/4Pt0YWakkPhfEWVMHwXe8g)
    - 翻译：[代码](https://mp.weixin.qq.com/s/4Pt0YWakkPhfEWVMHwXe8g)
    - 密码生成器：[代码](https://gitee.com/CoderWanFeng/python-office/blob/master/office/tools.py)
    - 查询天气：[代码](https://mp.weixin.qq.com/s/cImgWuTWbILLYT_kTnjQLA)

## 1、批量转成 PDF

文字说明：[传送门](https://mp.weixin.qq.com/s/T31F-U5AdDd3D-61b_K5Qg)
```python
# 导入库：python-office，简写为：office
import office

# 填入你的ppt目录
office.ppt.ppt2pdf(path='D:\\test\\temp\\ppt')
```