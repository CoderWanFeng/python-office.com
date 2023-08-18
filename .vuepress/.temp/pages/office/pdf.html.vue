<template><div><h1 id="pdf" tabindex="-1"><a class="header-anchor" href="#pdf" aria-hidden="true">#</a> PDF</h1>
<h2 id="_1、加密、解密" tabindex="-1"><a class="header-anchor" href="#_1、加密、解密" aria-hidden="true">#</a> 1、加密、解密</h2>
<p>文字说明：<a href="https://mp.weixin.qq.com/s/YOxBzYPMqfl5gCAWtnVXKA" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<p><strong>加密</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入这个库</span>
<span class="token keyword">import</span> office

<span class="token comment"># PDF加密：填写你的文件位置和密码</span>
office<span class="token punctuation">.</span>pdf<span class="token punctuation">.</span>encrypt4pdf<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">'需要加密的.pdf'</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">'你想添加的密码'</span><span class="token punctuation">)</span>

<span class="token comment"># 参数说明：</span>
<span class="token comment"># path：你的文件位置，例如：D:\work\参考.pdf</span>
<span class="token comment"># password：你的密码，可以随意设置，不能为空</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解密</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 导入这个库
import office

#PDF解密：填写你的文件位置和密码
office.pdf.decrypt4pdf(path='你的加密文件.pdf', password='该文件的密码')

# 参数说明：
# path：你的文件位置，例如：D:\work\参考.pdf
# password：你之前加密时设置的密码，不能为空
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、加水印" tabindex="-1"><a class="header-anchor" href="#_2、加水印" aria-hidden="true">#</a> 2、加水印</h2>
<p>文字说明：<a href="https://mp.weixin.qq.com/s/yJDs5RoytRL5hl-ybXkZOA" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> office  <span class="token comment"># 导入python-office</span>

office<span class="token punctuation">.</span>pdf<span class="token punctuation">.</span>add_watermark<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 不需要对代码进行任何修改，直接运行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、-合并2个pdf" tabindex="-1"><a class="header-anchor" href="#_3、-合并2个pdf" aria-hidden="true">#</a> 3、 合并2个PDF</h2>
<p>文字说明：<a href="https://mp.weixin.qq.com/s/9erh3W3WCD36Axj70pRvog" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入这个库：python-office，简写为office</span>
<span class="token keyword">import</span> office

<span class="token comment">#一行代码，合并pdf</span>
office<span class="token punctuation">.</span>pdf<span class="token punctuation">.</span>merge2pdf<span class="token punctuation">(</span>one_by_one<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">'程序员晚枫.pdf'</span><span class="token punctuation">,</span> <span class="token string">'一键三连.pdf'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> output<span class="token operator">=</span><span class="token string">'走起.pdf'</span><span class="token punctuation">)</span>

<span class="token comment">#参数作用：</span>
<span class="token comment"># one_by_one = 是个列表，里面是2个pdf文件，合并后，a在前面，b在后面</span>
<span class="token comment"># output = 合并后的pdf名字，不能为空</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、转-word" tabindex="-1"><a class="header-anchor" href="#_4、转-word" aria-hidden="true">#</a> 4、转 Word</h2>
<p>文字说明：<a href="https://mp.weixin.qq.com/s/O0pJOs9stD1prENP4N8QYg" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<blockquote>
<p>请注意，使用这个功能，一定要把python-office，更新到最新版本！
查看最新版本号：https://pypi.org/project/python-office/</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>更新命令：pip install -i https://mirrors.aliyun.com/pypi/simple python-office -U
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
<span class="token comment"># 导入这个库：python-office，简写为office</span>
<span class="token keyword">import</span> office

<span class="token comment"># 1行代码，实现 PDF 转 Word</span>
office<span class="token punctuation">.</span>pdf<span class="token punctuation">.</span>pdf2docx<span class="token punctuation">(</span>file_path<span class="token operator">=</span><span class="token string">'程序员晚枫.pdf'</span><span class="token punctuation">)</span>

<span class="token comment"># 参数说明：</span>
<span class="token comment"># file_path:存放PDF的位置 + PDF的文件名，例如：c://test//程序员晚枫.pdf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、-txt-转成-pdf" tabindex="-1"><a class="header-anchor" href="#_5、-txt-转成-pdf" aria-hidden="true">#</a> 5、 TxT 转成 PDF</h2>
<p>文字说明：<a href="https://mp.weixin.qq.com/s/GiXYB_xZdlsYv5AIeIELkA" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入这个库：python-office，简写为：office</span>
<span class="token keyword">import</span> office

<span class="token comment"># path：你的文件位置，例如：D:\work\参考.txt</span>
<span class="token comment"># res_pdf：你想输出的pdf名称，可以不填，默认是：txt2pdf.pdf</span>
office<span class="token punctuation">.</span>pdf<span class="token punctuation">.</span>txt2pdf<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">'test.txt'</span><span class="token punctuation">,</span> res_pdf<span class="token operator">=</span><span class="token string">'res.pdf'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、转图片" tabindex="-1"><a class="header-anchor" href="#_6、转图片" aria-hidden="true">#</a> 6、转图片</h2>
<p>文字说明：<a href="https://mp.weixin.qq.com/s/tvHZIBGcrMBLTLB4u23Mow" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入这个库：python-office，简写为office</span>
<span class="token keyword">import</span> office

<span class="token comment"># 一行代码，实现转换</span>
office<span class="token punctuation">.</span>pdf<span class="token punctuation">.</span>pdf2imgs<span class="token punctuation">(</span>
    pdf_path<span class="token operator">=</span><span class="token string">'D://程序员晚枫的文件夹//程序员晚枫.pdf'</span><span class="token punctuation">,</span>
    out_dir<span class="token operator">=</span><span class="token string">'./点赞+关注文件夹'</span>
<span class="token punctuation">)</span>
<span class="token comment"># 参数说明：</span>
<span class="token comment"># pdf_path = 你的PDF文件的地址 </span>
<span class="token comment"># out_dir = 转换后的图片存放地址，可以不填，默认是PDF的地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


