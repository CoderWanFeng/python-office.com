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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="金融数据分析" tabindex="-1"><a class="header-anchor" href="#金融数据分析" aria-hidden="true">#</a> 金融数据分析</h1><blockquote><p>Python金融交流群👉<a href="https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/5-finance-group.jpg" target="_blank" rel="noopener noreferrer">点我直达`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></blockquote><h2 id="开源项目-pofinance" tabindex="-1"><a class="header-anchor" href="#开源项目-pofinance" aria-hidden="true">#</a> 开源项目 - pofinance</h2><ul><li><p><a href="https://mp.weixin.qq.com/s/6keTzBI8CWnUbuXCaYhkMQ" target="_blank" rel="noopener noreferrer">单次做T`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p><a href="https://blog.csdn.net/weixin_42321517/article/details/131097917?spm=1001.2014.3001.5501" target="_blank" rel="noopener noreferrer">批量做T`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li></ul><h2 id="学习资料" tabindex="-1"><a class="header-anchor" href="#学习资料" aria-hidden="true">#</a> 学习资料</h2><ul><li><p>电子书：<a href="https://mp.weixin.qq.com/s/9Nmk2OfTiWaMsidR55uvLw" target="_blank" rel="noopener noreferrer">《580页PDF：《Python金融大数据分析》》`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p>视频：<a href="https://www.bilibili.com/video/BV1Ut4y1i7wS/?spm_id_from=333.999.0.0&amp;vd_source=ca20bb8763fcb18660aa74d7a87234fa" target="_blank" rel="noopener noreferrer">Python金融数据分析高级训练营（完结）`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p>视频：<a href="https://www.bilibili.com/video/BV1p54y1m75J/?spm_id_from=333.999.0.0&amp;vd_source=ca20bb8763fcb18660aa74d7a87234fa" target="_blank" rel="noopener noreferrer">Python金融实务从入门到精通（综合运用，案例实战）`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p>视频：<a href="https://www.bilibili.com/video/BV1rK4y1a76X/?spm_id_from=333.999.0.0&amp;vd_source=ca20bb8763fcb18660aa74d7a87234fa" target="_blank" rel="noopener noreferrer">Python编程在金融中的应用（极简版）`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p>视频：<a href="https://www.bilibili.com/video/BV1bK4y1a7Rb/?spm_id_from=333.999.0.0&amp;vd_source=ca20bb8763fcb18660aa74d7a87234fa" target="_blank" rel="noopener noreferrer">Python金融应用编程 (数据分析、定价与量化投资，有源代码)`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li></ul><h2 id="联系作者" tabindex="-1"><a class="header-anchor" href="#联系作者" aria-hidden="true">#</a> 联系作者</h2><p><img src="https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/qr-code.jpg" alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/office/finance.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const finance_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "finance.html.vue"]]);
export {
  finance_html as default
};
