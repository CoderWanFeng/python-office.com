# 视频

- Video
    - [代码](https://mp.weixin.qq.com/s/4Pt0YWakkPhfEWVMHwXe8g)


- 1、从视频里提取音频
文字说明：[传送门](https://mp.weixin.qq.com/s/cT8lcUwd3UayTfLGddjfJw)

这个代码，可以从任意常见格式的视频中，提取出MP3文件。
这里以MP4举例：

```
# 导入这个库：python-office，简写为office
import office

#1行代码，提取mp3文件
office.video.video2mp3(path='d://程序员晚枫的文件夹//最伟大的作品.mp4', mp3_name='《最伟大的作品》')

# 参数作用：
# path = 这里填写你本地的MV文件
# mp3_name = 这里填写你生成的mp3文件名，这里不用改
```
运行以上代码，就会出现MP3格式的《最伟大的作品》了。