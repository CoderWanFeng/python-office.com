# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : http://www.python4office.cn/wechat-qrcode/
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/23 17:20 
@本段代码的视频说明     ：
'''
import office

office.file.replace4filename(path=r'./test_files/50-23-replace4filename',
                             del_content='小红书-程序员晚枫',
                             replace_content='抖音-程序员晚枫',
                        )

office.file.replace4filename(path=r'./test_files/50-23-replace4filename',
                             del_content='程序员晚枫',
                             replace_content='小红书-程序员晚枫',
                             dir_rename=False,
                             suffix='.py')
