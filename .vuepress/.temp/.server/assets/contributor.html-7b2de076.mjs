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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="源码下载" tabindex="-1"><a class="header-anchor" href="#源码下载" aria-hidden="true">#</a> 源码下载</h1><ul><li><p>⭐源码下载，推荐使用GitHub：<a href="https://github.com/CoderWanFeng/python-office" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p>因为某些原因，打不开Github的朋友，可以使用Gitee：<a href="https://gitee.com/CoderWanFeng/python-office" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p>Python官网中，本项目的介绍👉<a href="https://pypi.org/project/python-office/" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li></ul><blockquote><p>GitHub和Gitee 2个库都是同样的内容，大家根据自己的网络情况，选择参与的方式即可。</p></blockquote><p>也欢迎大家参与项目的开发，开发或者提交PR之前，可以先联系一下晚枫，微信👉<a href="https://mp.weixin.qq.com/s/yFcocJbfS9Hs375NhE8Gbw" target="_blank" rel="noopener noreferrer">CoderWanFeng`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>如果是不会用Git，但是想贡献自己代码的朋友，可以学习👉<a href="https://www.bilibili.com/video/BV1EP411d7Np/" target="_blank" rel="noopener noreferrer">视频教程`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> 或者 联系项目开发者：<a href="https://mp.weixin.qq.com/s/yFcocJbfS9Hs375NhE8Gbw" target="_blank" rel="noopener noreferrer">程序员晚枫`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>来手动添加。</p><h2 id="联系作者" tabindex="-1"><a class="header-anchor" href="#联系作者" aria-hidden="true">#</a> 联系作者</h2><p>你好，我是python-office的开发者：程序员晚枫。</p><p>微信号是：👉<a href="https://mp.weixin.qq.com/s/yFcocJbfS9Hs375NhE8Gbw" target="_blank" rel="noopener noreferrer">CoderWanFeng`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>B站账号：<a href="https://space.bilibili.com/1989702333" target="_blank" rel="noopener noreferrer">程序员晚枫`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p>福利资料：<a href="http://python4office.cn/%E8%B5%84%E6%BA%90%E5%90%88%E9%9B%86-1/" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h2 id="参与开发" tabindex="-1"><a class="header-anchor" href="#参与开发" aria-hidden="true">#</a> 参与开发</h2><p>如何参与项目的开发？视频教程👉<a href="https://www.bilibili.com/video/BV1EP411d7Np" target="_blank" rel="noopener noreferrer">点我直达`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><img src="https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/qr-code.jpg" alt="CoderWanFeng"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/contributor/contributor.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contributor_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "contributor.html.vue"]]);
export {
  contributor_html as default
};
