import{_ as i,r as o,o as l,c as p,a as n,d as s,b as e,e as t}from"./app-70aa94dd.js";const c={},r=n("h1",{id:"文件管理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文件管理","aria-hidden":"true"},"#"),s(" 文件管理")],-1),d=n("p",null,"文件、文件夹自动化办公的功能，目前有：",-1),u=n("ul",null,[n("li",null,"4、获得指定文件夹下的全部文件")],-1),v={href:"https://www.bilibili.com/video/BV1ua4y1M7ya",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pofile

pofile<span class="token punctuation">.</span>get_files<span class="token punctuation">(</span>path<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> suffix<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
获取指定路径下的所有文件
:param path: 必填，指定路径
:param name: 可以不填，名字中包含的内容
:param suffix: 可以不填，指定文件后缀
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3、自动整理文件夹</li></ul>`,2),k={href:"https://www.bilibili.com/video/BV1RX4y1o7HF",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导入这个库：python-office，简写为office</span>
<span class="token keyword">import</span> office

office<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">.</span>group_by_name<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2、根据内容查找文件</li></ul>`,2),f={href:"https://baijiahao.baidu.com/s?id=1734311309666123699",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导入这个库：python-office，简写为office</span>
<span class="token keyword">import</span> office

<span class="token comment"># 1行代码，实现 </span>
office<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">.</span>search_by_content<span class="token punctuation">(</span><span class="token string">r&#39;你的文件夹，例如：c:\\&#39; , content=&#39;</span>你需要查找的文件里面的内容&#39;<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_={href:"https://www.bilibili.com/video/BV12r4y187Yj/",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> office
path <span class="token operator">=</span> <span class="token string">r&#39;D:\\\\QMDownload\\\\&#39;</span>
office<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">.</span>replace4filename<span class="token punctuation">(</span>
                              path<span class="token operator">=</span>path<span class="token punctuation">,</span>
                              del_content<span class="token operator">=</span><span class="token string">&#39;你要去掉的内容&#39;</span><span class="token punctuation">,</span>
                              replace_content<span class="token operator">=</span><span class="token string">&#39;你想替换掉广告的内容，可以不填&#39;</span>
                              <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function y(w,x){const a=o("ExternalLinkIcon");return l(),p("div",null,[r,d,u,n("p",null,[s("视频说明："),n("a",v,[s("传送门"),e(a)])]),m,n("p",null,[s("视频说明："),n("a",k,[s("传送门"),e(a)])]),b,n("p",null,[s("详细说明："),n("a",f,[s("传送门"),e(a)])]),h,n("ul",null,[n("li",null,[s("1、批量重命名 文件/文件夹 视频说明："),n("a",_,[s("传送门"),e(a)])])]),g])}const V=i(c,[["render",y],["__file","file.html.vue"]]);export{V as default};
