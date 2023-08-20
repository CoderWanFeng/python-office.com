import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.5a9098e4.mjs";
import "@vuepress/shared";
import "@waline/client/dist/component";
import "@giscus/vue";
import "vue-router";
import "@waline/client";
import "ts-debounce";
import "@vicons/carbon";
import "@vuepress-reco/shared";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理" aria-hidden="true">#</a> 文件管理</h1><p>文件、文件夹自动化办公的功能，目前有：</p><ul><li>4、获得指定文件夹下的全部文件</li></ul><p>视频说明：<a href="https://www.bilibili.com/video/BV1ua4y1M7ya" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pofile

pofile<span class="token punctuation">.</span>get_files<span class="token punctuation">(</span>path<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> suffix<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
获取指定路径下的所有文件
:param path: 必填，指定路径
:param name: 可以不填，名字中包含的内容
:param suffix: 可以不填，指定文件后缀
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3、自动整理文件夹</li></ul><p>视频说明：<a href="https://www.bilibili.com/video/BV1RX4y1o7HF" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导入这个库：python-office，简写为office</span>
<span class="token keyword">import</span> office

office<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">.</span>group_by_name<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2、根据内容查找文件</li></ul><p>详细说明：<a href="https://baijiahao.baidu.com/s?id=1734311309666123699" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导入这个库：python-office，简写为office</span>
<span class="token keyword">import</span> office

<span class="token comment"># 1行代码，实现 </span>
office<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">.</span>search_by_content<span class="token punctuation">(</span><span class="token string">r&#39;你的文件夹，例如：c:\\&#39; , content=&#39;</span>你需要查找的文件里面的内容&#39;<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>1、批量重命名 文件/文件夹 视频说明：<a href="https://www.bilibili.com/video/BV12r4y187Yj/" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> office
path <span class="token operator">=</span> <span class="token string">r&#39;D:\\\\QMDownload\\\\&#39;</span>
office<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">.</span>replace4filename<span class="token punctuation">(</span>
                              path<span class="token operator">=</span>path<span class="token punctuation">,</span>
                              del_content<span class="token operator">=</span><span class="token string">&#39;你要去掉的内容&#39;</span><span class="token punctuation">,</span>
                              replace_content<span class="token operator">=</span><span class="token string">&#39;你想替换掉广告的内容，可以不填&#39;</span>
                              <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/office/file.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const file_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "file.html.vue"]]);
export {
  file_html as default
};
