# 文件管理


    
文件、文件夹自动化办公的功能，目前有：


- 4、获得指定文件夹下的全部文件

视频说明：[传送门](https://www.bilibili.com/video/BV1ua4y1M7ya)
```python
import pofile

pofile.get_files(path: str, name: str = '', suffix: str = None)
"""
获取指定路径下的所有文件
:param path: 必填，指定路径
:param name: 可以不填，名字中包含的内容
:param suffix: 可以不填，指定文件后缀
"""
```

- 3、自动整理文件夹

视频说明：[传送门](https://www.bilibili.com/video/BV1RX4y1o7HF)
```python
# 导入这个库：python-office，简写为office
import office

office.file.group_by_name(path)
```


- 2、根据内容查找文件

详细说明：[传送门](https://baijiahao.baidu.com/s?id=1734311309666123699)
```python
# 导入这个库：python-office，简写为office
import office

# 1行代码，实现 
office.file.search_by_content(r'你的文件夹，例如：c:\' , content='你需要查找的文件里面的内容')
```


- 1、批量重命名 文件/文件夹
视频说明：[传送门](https://www.bilibili.com/video/BV12r4y187Yj/)
```python
import office
path = r'D:\\QMDownload\\'
office.file.replace4filename(
                              path=path,
                              del_content='你要去掉的内容',
                              replace_content='你想替换掉广告的内容，可以不填'
                              )
```



