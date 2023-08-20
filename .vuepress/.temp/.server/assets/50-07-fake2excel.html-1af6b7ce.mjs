import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
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
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import officeoffice.excel.fake2excel(columns=[&#39;name&#39;, &#39;text&#39;], rows=20)# 参数说明
# columns:list，每列的数据名称，默认是名称
# rows：多少行，默认是1
# language：什么语言，可以填english，默认是中文
# path：输出excel的位置，有默认值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/course/docs/50-07-fake2excel.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _5007Fake2excel_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "50-07-fake2excel.html.vue"]]);
export {
  _5007Fake2excel_html as default
};
