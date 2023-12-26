# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/Nt8E8vC-ZsoN1McTOYbY2g
@个人网站      ：www.python-office.com
@代码日期    ：2023/8/22 23:34 
@本段代码的视频说明     ：https://www.bilibili.com/video/BV1K84y1Z7n6/
'''

# 下载命令 pip install python-office ，下载教程：https://www.bilibili.com/video/BV1m14y1y76g
import office

office.word.docx2pdf(path=r'./test_files/50-05-docx2pdf',
                     output_path=r'./test_files/50-05-docx2pdf/docx2pdf')

# 下载命令 pip install python-office ，下载教程：https://www.bilibili.com/video/BV1m14y1y76g
import office

office.word.docx2pdf(path=r'./test_files/50-05-docx2pdf',
                     output_path=r'./test_files/50-05-docx2pdf/docx2pdf')

# 生成图片用代码
"""
# 1行代码，实现Word转PDF
# pip install python-office
import office  # 导入第三方库

office.word.docx2pdf(path=r'这里填你的Word文件位置',
                    output_path=r'这里填转换后的PDF保存位置')
"""
