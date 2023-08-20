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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1><ul><li>教材： <ul><li><a href="https://mp.weixin.qq.com/s/YWNkn366SdF4IWYTczpBAw" target="_blank" rel="noopener noreferrer">278页PDF：《Python数据分析基础》，0基础入门专用~`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://mp.weixin.qq.com/s/yQRSjUliJsdvKW8du9iF6g" target="_blank" rel="noopener noreferrer">409页PDF：《Python：让繁琐工作自动化》`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://mp.weixin.qq.com/s/WEZCqQdNY_KljGeXHgzdtA" target="_blank" rel="noopener noreferrer">715页PDF：《Python数据科学手册》`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul></li><li>文档： <ul><li><a href="https://mp.weixin.qq.com/s/nt38KmPVdiQvdV0q-pW85A" target="_blank" rel="noopener noreferrer">深度盘点 | 史上最全Python网站开发库（37个）`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://mp.weixin.qq.com/s/RsBG_cg8GsB2P-9zmhrA1Q" target="_blank" rel="noopener noreferrer">深度盘点丨史上最全的Python自动化办公库（34个）`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul></li><li>第三方库： <ul><li><a href="https://mp.weixin.qq.com/s/2_qNnsPK6fjEAUu3jf-NFA" target="_blank" rel="noopener noreferrer">xlwings库 | Excel与Python的完美结合（附使用文档）`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://mp.weixin.qq.com/s/tzy7h_qrk_tkK4ojnRSFtQ" target="_blank" rel="noopener noreferrer">系统性的学会 Pandas， 看这一篇就够了！`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://mp.weixin.qq.com/s/_QzBRGeXsqF65-xlzQfFjQ" target="_blank" rel="noopener noreferrer">Python-Docx库 | Word与Python的完美结合（附使用文档）`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://mp.weixin.qq.com/s/dXrveWypcR5S4XGauS4wcg" target="_blank" rel="noopener noreferrer">python-pptx库 | PPT与Python的完美结合（附使用文档）`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://mp.weixin.qq.com/s/M4ARo2SXZcGIjMcv19SVyA" target="_blank" rel="noopener noreferrer">PyPDF2库 | PDF与Python的完美结合（附使用文档）`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul></li><li>打包 <ul><li><a href="https://www.isolves.com/it/cxkf/yy/Python/2019-06-14/741.html" target="_blank" rel="noopener noreferrer">用 Poetry 创建并发布 Python 包`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul></li><li>命令行 <ul><li>typer</li></ul></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/ref/ref.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ref_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "ref.html.vue"]]);
export {
  ref_html as default
};
