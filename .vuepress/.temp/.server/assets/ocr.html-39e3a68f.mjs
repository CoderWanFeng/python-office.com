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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ocr" tabindex="-1"><a class="header-anchor" href="#ocr" aria-hidden="true">#</a> OCR</h1><ul><li><p><a href="https://mp.weixin.qq.com/s/WxICBZZSgkm-OrvXB82hbg" target="_blank" rel="noopener noreferrer">全部100+功能的说明`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p>批量识别发票：<a href="https://www.bilibili.com/video/BV1eM411V7kL" target="_blank" rel="noopener noreferrer">视频`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> 、 <a href="https://mp.weixin.qq.com/s/agsF8ttwxOiZyizsTKBxMQ" target="_blank" rel="noopener noreferrer">代码和文档`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p>识别身份证：<a href="https://www.bilibili.com/video/BV133411d7XF" target="_blank" rel="noopener noreferrer">视频`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> 、 <a href="https://mp.weixin.qq.com/s/4PNhYZ1k2au5XoZOBdUM6A" target="_blank" rel="noopener noreferrer">代码和文档`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p>识别银行卡：<a href="https://www.bilibili.com/video/BV1QY4y1o7qc/?spm_id_from=333.999.0.0" target="_blank" rel="noopener noreferrer">视频`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> 、 <a href="https://mp.weixin.qq.com/s/QQ1cepAISH0PKWfc5v6G6w" target="_blank" rel="noopener noreferrer">代码和文档`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p><a href="https://mp.weixin.qq.com/s/owXyC5DjbOwrcHpTGjMbJA" target="_blank" rel="noopener noreferrer">识别车牌`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li></ul><p><img src="https://article-1300615378.cos.ap-nanjing.myqcloud.com/potencent%2Fapi-doc%2Fshare.jpg" alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/office/ocr.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ocr_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "ocr.html.vue"]]);
export {
  ocr_html as default
};
