# file


    
文件、文件夹自动化办公的功能，目前有：

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

- 2、批量重命名 文件/文件夹
详细说明：[传送门](https://baijiahao.baidu.com/s?id=1734311309666123699)
```python
# 导入这个库：python-office，简写为office
import office

# 1行代码，实现 
office.file.search_by_content(r'你的文件夹，例如：c:\' , content='你需要查找的文件里面的内容')
```


