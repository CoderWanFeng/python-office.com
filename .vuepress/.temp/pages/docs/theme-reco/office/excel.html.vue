<template><div><h1 id="excel" tabindex="-1"><a class="header-anchor" href="#excel" aria-hidden="true">#</a> Excel</h1>
<p>Excel自动化办公的功能，目前有:(开发时间倒叙，序号越大，距离今天越近)</p>
<ul>
<li>6、按条件查询&amp;合并Excel</li>
</ul>
<p>视频说明：<a href="https://www.bilibili.com/video/BV1A84y1N7or/?spm_id_from=333.999.0.0&amp;vd_source=f8208b6c3b1d83ce5daeb73662c4ad91" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入这个库：python-office，简写为office</span>
<span class="token keyword">import</span> poexcel

office<span class="token punctuation">.</span>excel<span class="token punctuation">.</span>excel2pdf<span class="token punctuation">(</span>query_content<span class="token punctuation">,</span> query_path <span class="token punctuation">,</span>output_path<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> output_name<span class="token operator">=</span><span class="token string">'output_path/query4excel.xlsx'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>5、关联查询</li>
</ul>
<p>视频说明：<a href="https://www.bilibili.com/video/BV1A84y1N7or/?spm_id_from=333.999.0.0&amp;vd_source=f8208b6c3b1d83ce5daeb73662c4ad91" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入这个库：python-office，简写为office</span>
<span class="token keyword">import</span> office

office<span class="token punctuation">.</span>excel<span class="token punctuation">.</span>excel2pdf<span class="token punctuation">(</span>excel_path<span class="token punctuation">,</span> pdf_path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>4、关联查询</li>
</ul>
<p>视频说明：<a href="https://www.bilibili.com/video/BV1Bd4y1B7yr" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入这个库：python-office，简写为office</span>
<span class="token keyword">import</span> office

office<span class="token punctuation">.</span>excel<span class="token punctuation">.</span>find_excel_data<span class="token punctuation">(</span>search_key<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> target_dir<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>3、拆分excel文件</li>
</ul>
<p>文字说明：<a href="https://mp.weixin.qq.com/s/dAx6JEbj5OlVnCcxokCzTQ" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入这个库：python-office，简写为office</span>
<span class="token keyword">import</span> office

<span class="token comment">#1行代码，验证是否绑定成功</span>
office<span class="token punctuation">.</span>excel<span class="token punctuation">.</span>sheet2excel<span class="token punctuation">(</span>file_path<span class="token operator">=</span><span class="token string">'d://程序员晚枫的文件夹/class.xlsx'</span><span class="token punctuation">)</span>

<span class="token comment">#参数作用：</span>
<span class="token comment"># file_path = 将要拆分的Excel文件的位置，只能拆分xlsx后缀的Excel文件。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接运行以上代码，就可以得到一个拆分后的excel文件啦~</p>
<ul>
<li>2、合并excel文件</li>
</ul>
<p>文字说明：<a href="https://mp.weixin.qq.com/s/3ZhZZfGlpNhszCWnOBeklg" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入这个库：python-office，简写为office</span>
<span class="token keyword">import</span> office

<span class="token comment">#1行代码，验证是否绑定成功</span>
office<span class="token punctuation">.</span>excel<span class="token punctuation">.</span>merge2excel<span class="token punctuation">(</span>dir_path<span class="token operator">=</span><span class="token string">r'C:\程序员晚枫\excel-merge\excel'</span><span class="token punctuation">,</span>output_file<span class="token operator">=</span><span class="token string">'test.xlsx'</span><span class="token punctuation">)</span>

<span class="token comment">#参数作用：</span>
<span class="token comment"># dir_path = 文件夹的位置，建议把需要合并的多个excel文件放到同一个文件夹里。</span>
<span class="token comment"># output_file = 最终合并的excel文件放在哪里、叫什么名字，可以不填，默认是：merge2excel.xlsx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接运行以上代码，就可以得到一个合并后的excel文件啦~</p>
<ul>
<li>1、模拟数据
视频说明：<a href="https://www.bilibili.com/video/BV1wr4y1b7uk/" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> office

office<span class="token punctuation">.</span>excel<span class="token punctuation">.</span>fake2excel<span class="token punctuation">(</span>columns<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'text'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rows<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>

<span class="token comment"># 参数说明</span>
<span class="token comment"># columns:list，每列的数据名称，默认是名称</span>
<span class="token comment"># rows：多少行，默认是1</span>
<span class="token comment"># language：什么语言，可以填english，默认是中文</span>
<span class="token comment"># path：输出excel的位置，有默认值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多可以模拟的数据种类，请参考文档：<a href="https://mp.weixin.qq.com/s/xVwEjXu58WovgSi4ZTtVQw" target="_blank" rel="noopener noreferrer">数据种类<ExternalLinkIcon/></a></p>
</div></template>


