<template><div><h1 id="【第4讲】word文件转pdf文件-用python怎么做-如果是1000个文件呢" tabindex="-1"><a class="header-anchor" href="#【第4讲】word文件转pdf文件-用python怎么做-如果是1000个文件呢" aria-hidden="true">#</a> 【第4讲】Word文件转PDF文件，用Python怎么做？如果是1000个文件呢？</h1>
<p>曾经遇到过一个需求：口罩期间，公司需要给大家发放补贴，想给每个人都单独发一个通知。</p>
<p>原始文档是用Word编辑的，为了防止格式错误和篡改内容，需要把它们转换成PDF。</p>
<p>然而全公司有1000多名员工，如何进行高效转换呢？</p>
<h2 id="_1行python代码搞定" tabindex="-1"><a class="header-anchor" href="#_1行python代码搞定" aria-hidden="true">#</a> 1行Python代码搞定</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># pip install python-office ，下载教程：https://www.bilibili.com/video/BV1pT4y1k7FH</span>
<span class="token keyword">import</span> office

office<span class="token punctuation">.</span>word<span class="token punctuation">.</span>docx2pdf<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">r'./test_files/程序员晚枫（作品合集）.docx'</span><span class="token punctuation">,</span>
                     output_path<span class="token operator">=</span><span class="token string">r'./test_files/docx2pdf/程序员晚枫（作品合集）.pdf'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


