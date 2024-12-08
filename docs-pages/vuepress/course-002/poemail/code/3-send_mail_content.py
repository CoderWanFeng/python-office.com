# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : http://www.python4office.cn/wechat-qrcode/
@个人网站      ：www.python-office.com
@代码日期    ：2023/12/24 1:26 
@本段代码的视频说明     ：
'''
import os

key = "fdasfdsa"  # 授权码
msg_from = "1957875073@qq.com"  # 发件人
msg_to = "CoderWanFeng@163.com"  # 收件人
msg_subject = '这里填写程序员晚枫的邮件主题'
msg_cc = '1529577833@qq.com'# 抄送人
content = '这里填写程序员晚枫的邮件正文'
# pip install poemail
import poemail

poemail.send.send_email(key=key,
                        msg_from=msg_from,
                        msg_to=msg_to,
                        msg_subject=msg_subject,
                        msg_cc=msg_cc,
                        content=content)
