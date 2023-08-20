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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="需求反馈" tabindex="-1"><a class="header-anchor" href="#需求反馈" aria-hidden="true">#</a> 需求反馈</h1><p>该项目目前开发中，如果你有需求需要反馈，请填写在以下需求收集表格中，我们会尽力完成。</p><h2 id="问题反馈-需求收集" tabindex="-1"><a class="header-anchor" href="#问题反馈-需求收集" aria-hidden="true">#</a> 问题反馈 + 需求收集</h2><ul><li><p>不会开发的同学：<a href="https://docs.qq.com/sheet/DYVNvUUhlZUFHeXVY" target="_blank" rel="noopener noreferrer">【腾讯文档】Python自动化办公-需求收集`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p>会开发的同学 可以直接GitHub，提交：<a href="https://github.com/CoderWanFeng/python-office/issues" target="_blank" rel="noopener noreferrer">issues`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/requirement.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const requirement_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "requirement.html.vue"]]);
export {
  requirement_html as default
};
