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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="开源仓库" tabindex="-1"><a class="header-anchor" href="#开源仓库" aria-hidden="true">#</a> 开源仓库</h1><p>欢迎感兴趣的朋友，通过提交PR的方式，参与该项目的更新与维护。 我每天下午merge一次。源码地址如下</p><ul><li><p>Gitee地址：<a href="https://gitee.com/CoderWanFeng/python-office" target="_blank" rel="noopener noreferrer">https://gitee.com/CoderWanFeng/python-office`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p>GitHub地址：<a href="https://github.com/CoderWanFeng/python-office" target="_blank" rel="noopener noreferrer">https://github.com/CoderWanFeng/python-office`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li></ul><p><a href="https://gitee.com/CoderWanFeng/python-office" target="_blank" rel="noopener noreferrer"><img src="https://gitee.com/CoderWanFeng/python-office/widgets/widget_card.svg?colors=4183c4,ffffff,ffffff,e3e9ed,666666,9b9b9b" alt="程序员晚枫/python-office">`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/ref/git.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const git_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "git.html.vue"]]);
export {
  git_html as default
};
