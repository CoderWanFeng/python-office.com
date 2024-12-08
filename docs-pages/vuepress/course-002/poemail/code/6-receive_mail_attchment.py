# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : http://www.python4office.cn/wechat-qrcode/
@个人网站      ：www.python-office.com
@代码日期    ：2023/12/24 1:26 
@本段代码的视频说明     ：
'''
import os

import poemail

key = os.getenv('EMAIL_KEY')
msg_from = "1957875073@qq.com"

poemail.receive.receive_email(key=key,
                              msg_from=msg_from,
                              output_path=r'D:\download\原创课程（程序员晚枫）\代码\test_files\批量下载附件',
                              status="UNSEEN")  # status="UNSEEN"

#
# import office
#
# office.email.receive_email(key=key,
#                            msg_from=msg_from,
#                            msg_to=msg_to,
#                            output_path=r'./test_files/6',
#                            status="ALL")
