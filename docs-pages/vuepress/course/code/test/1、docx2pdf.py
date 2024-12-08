# -*- coding: UTF-8 -*-
'''
@作者  ：B站/抖音/微博/小红书/公众号，都叫：程序员晚枫
@微信     ：CoderWanFeng : http://www.python4office.cn/wechat-qrcode/
@个人网站      ：www.python-office.com
@代码日期    ：2023/7/15 0:35 
@本段代码的视频说明     ：
'''
import poword


from docx import Document,ImagePart
from os.path import basename,dirname,join
def ext2image(document):
    for p in document.paragraphs: #遍历所有堕落
        for image in p._element.xpath('.//pic:pic'): #提取图片的标签pic
            for image_id in image.xpath('.//a:blip/@r:embed'): #获取id
                part = document.part.related_parts[image_id]#进一步得到part
                if not isinstance(part,ImagePart):
                    continue
                save_dir = dirname(__file__) #提取路径部分，去掉文件名
                save_path = join(save_dir,basename(part.partname)) #获取默认文件名image1
                with open(save_path,"wb") as f:
                    f.write(part.blob)
if __name__ == '__main__':
    # doc = Document("./test.docx")
    # ext2image(doc)
    poword.docx4imgs(word_path=r'./test.docx',img_path='./out')
