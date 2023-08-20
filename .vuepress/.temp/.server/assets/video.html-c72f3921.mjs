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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="视频" tabindex="-1"><a class="header-anchor" href="#视频" aria-hidden="true">#</a> 视频</h1><ul><li><p>Video</p><ul><li><a href="https://mp.weixin.qq.com/s/4Pt0YWakkPhfEWVMHwXe8g" target="_blank" rel="noopener noreferrer">代码`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul></li><li><p>1、从视频里提取音频 文字说明：<a href="https://mp.weixin.qq.com/s/cT8lcUwd3UayTfLGddjfJw" target="_blank" rel="noopener noreferrer">传送门`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li></ul><p>这个代码，可以从任意常见格式的视频中，提取出MP3文件。 这里以MP4举例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 导入这个库：python-office，简写为office
import office

#1行代码，提取mp3文件
office.video.video2mp3(path=&#39;d://程序员晚枫的文件夹//最伟大的作品.mp4&#39;, mp3_name=&#39;《最伟大的作品》&#39;)

# 参数作用：
# path = 这里填写你本地的MV文件
# mp3_name = 这里填写你生成的mp3文件名，这里不用改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行以上代码，就会出现MP3格式的《最伟大的作品》了。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/office/video.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const video_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "video.html.vue"]]);
export {
  video_html as default
};
