<template><div><h1 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h1>
<p>图片自动化办公的功能，目前有：</p>
<h2 id="_1、给图片添加水印" tabindex="-1"><a class="header-anchor" href="#_1、给图片添加水印" aria-hidden="true">#</a> 1、给图片添加水印</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> office

office<span class="token punctuation">.</span>image<span class="token punctuation">.</span>add_watermark<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token operator">=</span><span class="token string">'你的图片'</span><span class="token punctuation">,</span> mark<span class="token operator">=</span><span class="token string">'你的水印'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、制作动漫头像" tabindex="-1"><a class="header-anchor" href="#_2、制作动漫头像" aria-hidden="true">#</a> 2、制作动漫头像</h2>
<p>文字说明：<a href="https://mp.weixin.qq.com/s/V1VJnQyVWMgS-_sp2u-lqg" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 导入这个库：python-office，简写为office
import office

# 1行代码，实现 人像转动漫头像
office.image.img2Cartoon(path = 'd://image//程序员晚枫.jpg')

# 参数说明：
# path:存放自己真人照片的位置 + PDF的文件名，例如：d://image//程序员晚枫.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果展示
<img src="https://www.python-office.com/api/img-cdn/cartoon-img.jpg" alt="car"></p>
<h3 id="重要提醒-如果你的代码报错中含有-image" tabindex="-1"><a class="header-anchor" href="#重要提醒-如果你的代码报错中含有-image" aria-hidden="true">#</a> 重要提醒，如果你的代码报错中含有：image</h3>
<p><img src="https://www.python-office.com/api/img-cdn/img2cartoon-error.jpg" alt="error"></p>
<p>如果出现以上报错，就说明试用次数用完了。
你需要自己去<a href="https://mp.weixin.qq.com/s/5Eyk2j20jzSaVcr1DTsfvw" target="_blank" rel="noopener noreferrer">百度AI平台<ExternalLinkIcon/></a>，开通：人像动漫化的应用，然后把id、key填进下面这个代码的参数里面。代码就可以继续运行了。
详细操作：<a href="https://mp.weixin.qq.com/s/5Eyk2j20jzSaVcr1DTsfvw" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 导入这个库：python-office，简写为office
import office

# 1行代码，实现 人像转动漫头像
office.image.img2Cartoon(path = 'd://image//程序员晚枫.jpg', client_api='your-api-key', client_secret='your-secret-key')

# 参数说明：
# path:存放自己真人照片的位置 + PDF的文件名，例如：d://image//程序员晚枫.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


