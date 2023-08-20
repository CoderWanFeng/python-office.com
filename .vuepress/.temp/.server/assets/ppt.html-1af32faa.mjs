import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.1969382e.mjs";
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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ppt" tabindex="-1"><a class="header-anchor" href="#ppt" aria-hidden="true">#</a> PPT</h1><h2 id="_1、ppt批量转成-pdf" tabindex="-1"><a class="header-anchor" href="#_1、ppt批量转成-pdf" aria-hidden="true">#</a> 1、PPT批量转成 PDF</h2><p>文字说明：<a href="https://mp.weixin.qq.com/s/T31F-U5AdDd3D-61b_K5Qg" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导入库：python-office，简写为：office</span>
<span class="token keyword">import</span> office

<span class="token comment"># 填入你的ppt目录</span>
office<span class="token punctuation">.</span>ppt<span class="token punctuation">.</span>ppt2pdf<span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&#39;D:\\\\test\\\\temp\\\\ppt&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、把ppt转为一张长图" tabindex="-1"><a class="header-anchor" href="#_2、把ppt转为一张长图" aria-hidden="true">#</a> 2、把PPT转为一张长图</h2><p>视频说明：<a href="https://www.bilibili.com/video/BV1pu411Y7zz" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> office

office<span class="token punctuation">.</span>ppt<span class="token punctuation">.</span>ppt2img<span class="token punctuation">(</span>input_path<span class="token operator">=</span>ppt_path<span class="token punctuation">,</span>
                   output_path<span class="token operator">=</span>out_dir<span class="token punctuation">,</span>
                   merge<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、合并ppt" tabindex="-1"><a class="header-anchor" href="#_3、合并ppt" aria-hidden="true">#</a> 3、合并PPT</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> office

office<span class="token punctuation">.</span>ppt<span class="token punctuation">.</span>merge4ppt<span class="token punctuation">(</span>input_path<span class="token operator">=</span><span class="token string">r&#39;d:\\\\程序员晚枫的文件夹&#39;</span><span class="token punctuation">,</span> output_path<span class="token operator">=</span><span class="token string">r&#39;./&#39;</span><span class="token punctuation">,</span> output_name<span class="token operator">=</span><span class="token string">&#39;merge4ppt.pptx&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/office/ppt.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppt_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "ppt.html.vue"]]);
export {
  ppt_html as default
};
