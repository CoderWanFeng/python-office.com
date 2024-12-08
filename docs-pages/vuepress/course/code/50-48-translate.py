# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : http://www.python4office.cn/wechat-qrcode/
@个人网站      ：www.python-office.com
@代码日期    ：2023/10/1 18:00 
@本段代码的视频说明     ：
'''

# trans_all = Translator(from_lang=lang1.capitalize(), to_lang=lang2.capitalize())
#
# text = input("需要翻译的文本")
# text_to = trans_all.translate(text)
#
# print(text_to)

import office

# https://en.wikipedia.org/wiki/ISO_639-1
# https://pypi.org/project/translate/

res = office.tools.transtools(content='你好', from_lang='zh', to_lang='en', )
print(res)

res = office.tools.transtools(content='你好', from_lang='zh', to_lang='ko', )
print(res)

res = office.tools.transtools(content='你好', from_lang='zh', to_lang='French', )
print(res)
