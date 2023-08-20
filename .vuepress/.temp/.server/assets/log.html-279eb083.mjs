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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="重要更新" tabindex="-1"><a class="header-anchor" href="#重要更新" aria-hidden="true">#</a> 重要更新</h1><p>本文档，只记录比较重要的版本发布，以及相关说明。</p><table><thead><tr><th>版本号</th><th>更新信息</th><th>发布日期</th><th>⭐详细说明（点击直达）</th></tr></thead><tbody><tr><td>0.0.1</td><td>init：项目初始化</td><td>2022-4-19</td><td><a href="https://mp.weixin.qq.com/s/v2n0DTVTZUaw7QOnA0Zlow" target="_blank" rel="noopener noreferrer">重磅！官网发布第三方库：python-office，为Python自动化办公而生`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td>0.0.5</td><td>init：发布wheel文件</td><td>2022-4-24</td><td></td></tr><tr><td></td><td>获得开源中国推荐</td><td>2022-5-13</td><td><a href="https://mp.weixin.qq.com/s/d2m7xYCLXF8QUlr-5sSuPA" target="_blank" rel="noopener noreferrer">开源中国推荐：python-office自动化办公，每个功能只需一行代码，做到了真正的开箱即用。`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td></td><td>有了第一位contributor</td><td>2022-5-16</td><td><a href="https://github.com/CoderWanFeng/python-office/commit/66fc1a06ca3cabdfcd1fb11ad33845126dbc8c73" target="_blank" rel="noopener noreferrer">Github - PR - 001`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td>0.1.0</td><td>初始化：项目目录</td><td>2022-6-16</td><td><a href="https://mp.weixin.qq.com/s/W1oq05aC6WIaFDcJZ8zhkw" target="_blank" rel="noopener noreferrer">新人必看：python-office自动化办公，开源项目的目录结构`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td></td><td>上线：自动化生成测试报告-unittest</td><td>2022-9-8</td><td></td></tr></tbody></table><blockquote><p>欢迎有学习/定制功能/加入项目需求的同学，直接加入我们的项目交流群👇</p></blockquote><p><img src="https://www.python-office.com/api/img-cdn/python-office/find_excel_data/group.jpg" alt=""></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/ref/log.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const log_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "log.html.vue"]]);
export {
  log_html as default
};
