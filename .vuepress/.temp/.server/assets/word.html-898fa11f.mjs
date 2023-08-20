import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.00a88b89.mjs";
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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="word" tabindex="-1"><a class="header-anchor" href="#word" aria-hidden="true">#</a> Word</h1><p>Word自动化办公的功能，目前有：</p><ul><li>1、Word 批量转成 PDF</li></ul><p>视频说明：<a href="https://www.bilibili.com/video/BV1pT4y1k7FH" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导入python-office，简写为：office</span>
<span class="token keyword">import</span> office 

path <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>  <span class="token comment"># path这里，填写你存放word文件的位置，例如：C:/app/workbook</span>
office<span class="token punctuation">.</span>word<span class="token punctuation">.</span>docx2pdf<span class="token punctuation">(</span>path<span class="token operator">=</span>path<span class="token punctuation">)</span> <span class="token comment"># 程序就可以自动将该目录下的所有word文档，自动转换成pdf文档了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：这个功能，目前只支持docx格式的文件。</p></blockquote><ul><li>2、doc格式 &amp; docx格式 批量互转</li></ul><p>视频说明：<a href="https://www.bilibili.com/video/BV1so4y1H7rj" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># pip install python-office</span>
<span class="token keyword">import</span> office

<span class="token comment"># docx2docx</span>
office<span class="token punctuation">.</span>word<span class="token punctuation">.</span>doc2docx<span class="token punctuation">(</span>input_path<span class="token operator">=</span><span class="token string">r&#39;D:\\workplace\\code\\github\\poword\\demo\\doc_docx\\word_file\\aa.doc&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># docx2doc</span>
office<span class="token punctuation">.</span>word<span class="token punctuation">.</span>docx2doc<span class="token punctuation">(</span>input_path<span class="token operator">=</span><span class="token string">r&#39;C:\\Users\\Lenovo\\Desktop\\temp\\test&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3、Word 批量合并</li></ul><p>视频说明：<a href="https://mp.weixin.qq.com/s/PjQJ3s4Arr872NDfcr-7YA" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 下载方式：pip install python-office</span>
<span class="token keyword">import</span> office

office<span class="token punctuation">.</span>word<span class="token punctuation">.</span>merge4docx<span class="token punctuation">(</span>input_path<span class="token operator">=</span><span class="token string">r&#39;D:\\程序员晚枫的文件夹\\word-in&#39;</span><span class="token punctuation">,</span> 
                        output_path<span class="token operator">=</span><span class="token string">r&#39;D:\\程序员晚枫的文件夹\\word-out&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/office/word.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const word_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "word.html.vue"]]);
export {
  word_html as default
};
