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
  const _component_VPCard = resolveComponent("VPCard");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="社区贡献" tabindex="-1"><a class="header-anchor" href="#社区贡献" aria-hidden="true">#</a> 社区贡献</h1><div class="vp-card-container">`);
  _push(ssrRenderComponent(_component_VPCard, { "title": "程序员晚枫", "desc": "python-office 开发者", "link": "https://github.com/CoderWanFeng", "logo": "https://avatars.githubusercontent.com/u/40364228?v=4", "color": "rgba(32, 32, 34)" }, null, _parent));
  _push(ssrRenderComponent(_component_VPCard, { "title": "是一只憨猪猪啊", "desc": "参与本网站开发，初中生开发者", "logo": "https://avatars.githubusercontent.com/u/89781739?v=4", "link": "https://github.com/ShiYiZhiHanZhuZhuYa", "color": "rgba(32, 32, 34)" }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/contributor/about.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "about.html.vue"]]);
export {
  about_html as default
};
