# 常见问题


> 总结了python-office在使用过程中的常见问题，
也欢迎有使用经验的同学，来一起更新这个文档：
> - 不会代码的同学：[腾讯文档](https://docs.qq.com/sheet/DYVNvUUhlZUFHeXVY)
> - 会代码的同学：[本文档的Git地址](https://github.com/CoderWanFeng/python-office/tree/gh-pages)


## 有没有python-office的使用文档？
- 解决方法：
    - 我开发了一个python-office的文档官网：[www.python-office.com](https://www.python-office.com/)
    - 另外我还录制了讲解视频：[传送门](https://www.bilibili.com/video/BV1pT4y1k7FH)


## pip无法使用
- 问题原因：在安装python的时候，没有勾选： Add Python xxx to PATH
- 解决方法：跟着这个视频，把python重新卸载了重装：[安装python&pycharm](https://www.bilibili.com/video/BV1sy4y1q7zH)


## 导入office后报红，并且运行时提示：office has no attributes ‘xxx’
- 问题原因：你错误的使用了虚拟环境
- 解决方法：
    - 如果您不是专业开发，请不要使用虚拟环境，跟着这个教程，把环境调回来：[教程](https://www.bilibili.com/video/BV1Q44y1u7rV) 
    - 如果您是专业开发，配置好你的虚拟环境后，再下载和运行代码，你应该知道怎么做吧？

## mac下载报错
- 问题原因：目前python-office的部分功能，不适配mac系统
- 解决方法：我暂时新开了一个库：python-office-mac，下载命令：
```
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple python-office-mac -U
```

## 如何参与项目的开发，给python-office增加自己的方法
目前项目已开源在GitHub和Gitee，可以通过PR的方式，参与项目开发。
- 项目地址：
- GitHub：[https://github.com/CoderWanFeng/python-office](https://github.com/CoderWanFeng/python-office)
- Gitee：[https://gitee.com/CoderWanFeng/python-office](https://gitee.com/CoderWanFeng/python-office)