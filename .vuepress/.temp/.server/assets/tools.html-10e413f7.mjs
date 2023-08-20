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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h1><ul><li>Tools <ul><li>生成二维码：<a href="https://mp.weixin.qq.com/s/4Pt0YWakkPhfEWVMHwXe8g" target="_blank" rel="noopener noreferrer">代码`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li>翻译：<a href="https://mp.weixin.qq.com/s/4Pt0YWakkPhfEWVMHwXe8g" target="_blank" rel="noopener noreferrer">代码`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li>密码生成器：<a href="https://gitee.com/CoderWanFeng/python-office/blob/master/office/tools.py" target="_blank" rel="noopener noreferrer">代码`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li>查询天气：<a href="https://mp.weixin.qq.com/s/cImgWuTWbILLYT_kTnjQLA" target="_blank" rel="noopener noreferrer">代码`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/office/tools.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tools_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "tools.html.vue"]]);
export {
  tools_html as default
};
