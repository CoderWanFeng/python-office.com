<template><div><h1 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理" aria-hidden="true">#</a> 文件管理</h1>
<p>文件、文件夹自动化办公的功能，目前有：</p>
<ul>
<li>4、获得指定文件夹下的全部文件</li>
</ul>
<p>视频说明：<a href="https://www.bilibili.com/video/BV1ua4y1M7ya" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> pofile

pofile<span class="token punctuation">.</span>get_files<span class="token punctuation">(</span>path<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">,</span> suffix<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">"""
获取指定路径下的所有文件
:param path: 必填，指定路径
:param name: 可以不填，名字中包含的内容
:param suffix: 可以不填，指定文件后缀
"""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>3、自动整理文件夹</li>
</ul>
<p>视频说明：<a href="https://www.bilibili.com/video/BV1RX4y1o7HF" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入这个库：python-office，简写为office</span>
<span class="token keyword">import</span> office

office<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">.</span>group_by_name<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>2、根据内容查找文件</li>
</ul>
<p>详细说明：<a href="https://baijiahao.baidu.com/s?id=1734311309666123699" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入这个库：python-office，简写为office</span>
<span class="token keyword">import</span> office

<span class="token comment"># 1行代码，实现 </span>
office<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">.</span>search_by_content<span class="token punctuation">(</span><span class="token string">r'你的文件夹，例如：c:\' , content='</span>你需要查找的文件里面的内容'<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>1、批量重命名 文件/文件夹
视频说明：<a href="https://www.bilibili.com/video/BV12r4y187Yj/" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> office
path <span class="token operator">=</span> <span class="token string">r'D:\\QMDownload\\'</span>
office<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">.</span>replace4filename<span class="token punctuation">(</span>
                              path<span class="token operator">=</span>path<span class="token punctuation">,</span>
                              del_content<span class="token operator">=</span><span class="token string">'你要去掉的内容'</span><span class="token punctuation">,</span>
                              replace_content<span class="token operator">=</span><span class="token string">'你想替换掉广告的内容，可以不填'</span>
                              <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


