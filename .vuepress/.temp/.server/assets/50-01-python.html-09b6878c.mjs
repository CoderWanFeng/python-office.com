import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
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
const _imports_0 = "/assets/50-01-python-15ed6d38.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="【第1讲】python3-11的下载、安装和卸载-有手就能学会" tabindex="-1"><a class="header-anchor" href="#【第1讲】python3-11的下载、安装和卸载-有手就能学会" aria-hidden="true">#</a> 【第1讲】Python3.11的下载、安装和卸载，有手就能学会</h1><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p>课程的开始，我们学习如何安装Python运行环境。</p><h2 id="本讲内容" tabindex="-1"><a class="header-anchor" href="#本讲内容" aria-hidden="true">#</a> 本讲内容</h2><p>对于小白来说，Python运行需要2个软件：代码运行的环境Python（水）和编辑代码的PyCharm（水桶）。</p><p>本讲我们首先学习Python的下载、安装和卸载，它的下载地址是：</p><ul><li>Python：<a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">https://www.python.org/`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>（因为众所周知的原因，国内可能打不开，解决方法👇）</li></ul><blockquote><p>因为Python是国外大佬开发的，网站也在国外。因为众所周知的原因，国内可能打不开，下载不了。<strong>我都已经下载好了，放在了文末的百度云网盘里</strong>，付费了本套合集的同学，可以自己去领取下载。也可以直接加我微信，我微信发给你👉<a href="https://mp.weixin.qq.com/s/yFcocJbfS9Hs375NhE8Gbw" target="_blank" rel="noopener noreferrer">CoderWanFeng`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></blockquote><p>下载和安装时，请大家注意2点：</p><ul><li><p>这些软件都是<strong>完全免费</strong>的，官网就可以下载。不要被付费软件给欺骗了。</p></li><li><p>我了解到很多朋友只是想尝试一下Python，对于小白来说，卸载比安装困难，所以我在这个视频里，加了<strong>卸载的教程</strong>。</p></li></ul><p>下载好了以后，我们开始一步一步的安装，编程是个细活，稍有差错，程序就会运行失败，所以：<strong>请小白务必每一步都和视频中的操作一样。</strong></p><h2 id="安装视频" tabindex="-1"><a class="header-anchor" href="#安装视频" aria-hidden="true">#</a> 安装视频</h2><iframe src="//player.bilibili.com/player.html?bvid=BV118411R7bB" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%," height="500"> </iframe><h2 id="软件下载好了" tabindex="-1"><a class="header-anchor" href="#软件下载好了" aria-hidden="true">#</a> 软件下载好了</h2><p>本套合集的读者，可以直接打开下载地址👇</p><ul><li>百度云，永久有效地址，见文末二维码：<a href="https://mp.weixin.qq.com/s/D5Ki2wgJQKB-uusdjtJDRA" target="_blank" rel="noopener noreferrer">打开`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/course/docs/50-01-python.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _5001Python_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "50-01-python.html.vue"]]);
export {
  _5001Python_html as default
};
