# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/Nt8E8vC-ZsoN1McTOYbY2g
@个人网站      ：www.python-office.com
@代码日期    ：2023/8/28 21:05 
@本段代码的视频说明     ：https://www.bilibili.com/video/BV1Fu4y1v7xH
'''

import office

office.wechat.chat_robot(who='每天进步一点点')  # 智能聊天

# 所有代码，在置顶评论，24小时自动获取
# office.wechat.send_message()  # 发消息
# office.wechat.send_file()  # 发文件
# office.wechat.send_message_by_time()  # 定时发送
# office.wechat.chat_by_keywords()  # 根据关键词回复
# # 批量加好友
# #  群发


"""
1行代码，实现智能聊天机器人

# pip install python-office
import office

office.wechat.chat_robot(who='输入你的好友微信名')  # 智能聊天
"""