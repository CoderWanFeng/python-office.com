import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="【word】第1讲-100个word文件批量转pdf-1行代码搞定" tabindex="-1"><a class="header-anchor" href="#【word】第1讲-100个word文件批量转pdf-1行代码搞定" aria-hidden="true">#</a> 【Word】第1讲：100个Word文件批量转PDF，1行代码搞定</h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/course/docs/50-05-docx2doc.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _5005Docx2doc_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "50-05-docx2doc.html.vue"]]);
export {
  _5005Docx2doc_html as default
};
