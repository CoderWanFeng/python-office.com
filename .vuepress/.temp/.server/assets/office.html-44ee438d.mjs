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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="下载和安装" tabindex="-1"><a class="header-anchor" href="#下载和安装" aria-hidden="true">#</a> 下载和安装</h1><p>本文会帮助你从头搭建一个运行<code>python-office自动化办公</code>的环境。</p><p><strong>如果你已经安装了Python环境，并且懂得如何使用，可以直接从步骤 2 开始。</strong></p><ol><li>安装Python和Pycharm</li></ol><p>视频教程：<a href="https://www.bilibili.com/video/BV1Q44y1u7rV" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><blockquote><p>注意，这个项目支持的Python版本是3.8+</p></blockquote><ol start="2"><li>安装python-office</li></ol><p>国内用户建议使用阿里镜像</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install <span class="token operator">-</span>i https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>pypi<span class="token operator">/</span>simple python<span class="token operator">-</span>office <span class="token operator">-</span>U
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>验证安装成功</li></ol><p>跟着这个视频：<a href="https://www.bilibili.com/video/BV1wr4y1b7uk?spm_id_from=333.999.0.0" target="_blank" rel="noopener noreferrer">python-office一键生成模拟数据`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>， 运行以下代码，看是否能自动批量模拟Excel数据</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> office

office<span class="token punctuation">.</span>excel<span class="token punctuation">.</span>fake2excel<span class="token punctuation">(</span>columns<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rows<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>

<span class="token comment"># 参数说明</span>
<span class="token comment"># columns:list，每列的数据名称，默认是名称</span>
<span class="token comment"># rows：多少行，默认是1</span>
<span class="token comment"># language：什么语言，可以填english，默认是中文</span>
<span class="token comment"># path：输出excel的位置，有默认值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>常见问题</li></ol><p>如果以上步骤能够运行成功，恭喜你，环境安装完成，可以跟着接下来的文档去使用了~！</p><p>如果不能运行成功，请移步：<a href="https://www.python-office.com/ref/qaq.html" target="_blank" rel="noopener noreferrer">常见问题`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/office.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const office_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "office.html.vue"]]);
export {
  office_html as default
};
