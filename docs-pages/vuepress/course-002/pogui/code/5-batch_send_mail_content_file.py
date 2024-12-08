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
msg_from = "1957875073@qq.com"  # 发件人
excel_path = r'D:\download\原创课程（程序员晚枫）\代码\test_files\5-batch_send_mail_content_file\全班的邮箱.xlsx'

##
# msg_to = "CoderWanFeng@163.com"  # 收件人
msg_subject = '主题：程序员晚枫发送的【带附件的邮件】'
content = '主题：程序员晚枫发送的【带附件的邮件】'
# 附件列表，可以写多个
attach_files = [r'./test_files/4-send_mail_content_file/程序员晚枫.doc',
                r'./test_files/4-send_mail_content_file/0816.jpg']








email_list = []

for msg_to in email_list:
    poemail.send.send_email(key=key,
                            msg_from=msg_from,
                            msg_to=msg_to,
                            msg_subject=msg_subject,
                            content=content,
                            attach_files=attach_files)
