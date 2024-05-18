# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/8x7c9qiAneTsDJq9JnWLgA
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/13 20:26 
@本段代码的视频说明     ：https://www.bilibili.com/video/BV1em4y1P7UM/?spm_id_from=333.788&vd_source=dcea3feb81b702defb6006f671564224
'''
import office

keywords = {
    "生成密码": "你的密码是：" + office.tools.passwordtools(),
    "点赞了吗？": "点了，我还打开了你的网站呢：python-office.com",
    "关注了吗？": "必须的",
    "投币了吗？": "三连走起",
}

office.wechat.chat_by_keywords(who='每天进步一点点', keywords=keywords)
