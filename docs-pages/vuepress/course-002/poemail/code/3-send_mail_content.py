# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/Nt8E8vC-ZsoN1McTOYbY2g
@个人网站      ：www.python-office.com
@代码日期    ：2023/12/24 1:26 
@本段代码的视频说明     ：
'''
import os

key = os.getenv('EMAIL_KEY')#授权码
msg_from = os.getenv('EMAIL_FROM')#发件
msg_to = os.getenv('EMAIL_TO')#收件人
msg_subject = '程序员晚枫的邮件主题'
msg_cc = '抄送人的邮箱@163.com'
content = '程序员晚枫的邮件正文'

import poemail

poemail.send.send_email(key=key, msg_from=msg_from, msg_to=msg_to, msg_subject=msg_subject, content=content)



