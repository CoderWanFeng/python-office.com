# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : https://mp.weixin.qq.com/s/8x7c9qiAneTsDJq9JnWLgA
@个人网站      ：www.python-office.com
@代码日期    ：2023/9/30 20:37 
@本段代码的视频说明     ：
'''
import poocr

# 免费体验：https://cloud.tencent.com/act/cps/redirect?redirect=34190&cps_key=ca76be5a2293ba3906d6d5407aea15ee
# 拿到id和key：https://cloud.tencent.com/act/cps/redirect?redirect=36394&cps_key=ca76be5a2293ba3906d6d5407aea15ee
car_num = poocr.ocr.LicensePlateOCR(img_path=r'./test_files/50-36-LicensePlateOCR/程序员晚枫的车牌.png',
                                    id='AKIDmU0JVbaS8vY1HMJG7oSwFQI4kQ8h6KND',
                                    key='jvywlSzKYjpu1shN3azERWYWUPHE4i9N')
print(car_num)
