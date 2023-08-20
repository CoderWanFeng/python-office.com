import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="【第3讲】不要重复造轮子原来是这个意思-pip的下载、安装和使用-编程准备工作最后一站" tabindex="-1"><a class="header-anchor" href="#【第3讲】不要重复造轮子原来是这个意思-pip的下载、安装和使用-编程准备工作最后一站" aria-hidden="true">#</a> 【第3讲】不要重复造轮子原来是这个意思！pip的下载、安装和使用，编程准备工作最后一站</h1><h2 id="_1、下载" tabindex="-1"><a class="header-anchor" href="#_1、下载" aria-hidden="true">#</a> 1、下载</h2><p>pip install</p><h3 id="为了加快速度-可以使用国内镜像" tabindex="-1"><a class="header-anchor" href="#为了加快速度-可以使用国内镜像" aria-hidden="true">#</a> 为了加快速度，可以使用国内镜像</h3><ul><li>清华镜像：</li><li>阿里镜像：</li></ul><h2 id="_2、更新" tabindex="-1"><a class="header-anchor" href="#_2、更新" aria-hidden="true">#</a> 2、更新</h2><p>pip install python-office -U</p><h3 id="指定版本号" tabindex="-1"><a class="header-anchor" href="#指定版本号" aria-hidden="true">#</a> 指定版本号</h3><p>pip install python-office==0.2.0</p><h3 id="查看版本号" tabindex="-1"><a class="header-anchor" href="#查看版本号" aria-hidden="true">#</a> 查看版本号</h3><p>pip show python-office pypi.org/projects/python-office.com</p><h2 id="_3、卸载" tabindex="-1"><a class="header-anchor" href="#_3、卸载" aria-hidden="true">#</a> 3、卸载</h2><p>pip uninstall python-office</p><h3 id="批量卸载" tabindex="-1"><a class="header-anchor" href="#批量卸载" aria-hidden="true">#</a> 批量卸载</h3></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/course/docs/50-03-pip.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _5003Pip_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "50-03-pip.html.vue"]]);
export {
  _5003Pip_html as default
};
