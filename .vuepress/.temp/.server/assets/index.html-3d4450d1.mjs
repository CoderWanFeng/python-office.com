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
  const _component_VPCard = resolveComponent("VPCard");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="vp-card-container">`);
  _push(ssrRenderComponent(_component_VPCard, { "title": "专注一个领域", "desc": "Python-office 是一个 Python 自动化办公第三方库，能解决大部分自动化办公的问题", "logo": "/logo/python.svg", "color": "rgba(32, 32, 34)" }, null, _parent));
  _push(ssrRenderComponent(_component_VPCard, { "title": "降低学习门槛", "desc": "不用学习Python编程知识，会电脑操作就行", "logo": "/logo/laptop.svg", "color": "rgba(32, 32, 34)" }, null, _parent));
  _push(ssrRenderComponent(_component_VPCard, { "title": "一行代码", "desc": "实现自动化办公，做到开箱即用", "logo": "/logo/terminal.svg", "color": "rgba(32, 32, 34)" }, null, _parent));
  _push(ssrRenderComponent(_component_VPCard, { "title": "免费学习", "desc": "B站账号：Python自动化办公社区 、 GitHub：python-office", "logo": "/logo/certificate.svg", "color": "rgba(32, 32, 34)" }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
