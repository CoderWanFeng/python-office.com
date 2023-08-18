# PPT


## 1、PPT批量转成 PDF

文字说明：[传送门](https://mp.weixin.qq.com/s/T31F-U5AdDd3D-61b_K5Qg)
```python
# 导入库：python-office，简写为：office
import office

# 填入你的ppt目录
office.ppt.ppt2pdf(path='D:\\test\\temp\\ppt')
```

## 2、把PPT转为一张长图

视频说明：[传送门](https://www.bilibili.com/video/BV1pu411Y7zz)
```python

import office

office.ppt.ppt2img(input_path=ppt_path,
                   output_path=out_dir,
                   merge=True)
```

## 3、合并PPT


```python

import office

office.ppt.merge4ppt(input_path=r'd:\\程序员晚枫的文件夹', output_path=r'./', output_name='merge4ppt.pptx')
```