# 图片

图片自动化办公的功能，目前有：

## 1、给图片添加水印

```python
import office

office.image.add_watermark(file='你的图片', mark='你的水印')
```
## 2、制作动漫头像
文字说明：[传送门](https://mp.weixin.qq.com/s/V1VJnQyVWMgS-_sp2u-lqg)
```
# 导入这个库：python-office，简写为office
import office

# 1行代码，实现 人像转动漫头像
office.image.img2Cartoon(path = 'd://image//程序员晚枫.jpg')

# 参数说明：
# path:存放自己真人照片的位置 + PDF的文件名，例如：d://image//程序员晚枫.jpg
```
效果展示
![car](https://www.python-office.com/api/img-cdn/cartoon-img.jpg)

### 重要提醒，如果你的代码报错中含有：image
![error](https://www.python-office.com/api/img-cdn/img2cartoon-error.jpg)


如果出现以上报错，就说明试用次数用完了。
你需要自己去[百度AI平台](https://mp.weixin.qq.com/s/5Eyk2j20jzSaVcr1DTsfvw)，开通：人像动漫化的应用，然后把id、key填进下面这个代码的参数里面。代码就可以继续运行了。
详细操作：[传送门](https://mp.weixin.qq.com/s/5Eyk2j20jzSaVcr1DTsfvw)

```
# 导入这个库：python-office，简写为office
import office

# 1行代码，实现 人像转动漫头像
office.image.img2Cartoon(path = 'd://image//程序员晚枫.jpg', client_api='your-api-key', client_secret='your-secret-key')

# 参数说明：
# path:存放自己真人照片的位置 + PDF的文件名，例如：d://image//程序员晚枫.jpg
```