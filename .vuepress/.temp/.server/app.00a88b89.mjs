import { defineAsyncComponent, ref, readonly, reactive, defineComponent, onMounted, computed, h, inject, resolveComponent, unref, mergeProps, useSSRContext, toRefs, onUpdated, provide, onBeforeUnmount, Transition, useSlots, createVNode, resolveDynamicComponent, onBeforeUpdate, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, watch, renderSlot, withDirectives, Fragment, renderList, vShow, onUnmounted, toRef, getCurrentInstance, shallowRef, nextTick, createSSRApp } from "vue";
import { isString, isArray, dedupeHead, resolveLocalePath, isLinkHttp, removeLeadingSlash, removeEndingSlash, isFunction, isPlainObject, isLinkMailto, isLinkTel, isLinkExternal } from "@vuepress/shared";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderVNode, ssrRenderStyle, ssrRenderList, ssrRenderSlotInner, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { Waline as Waline$1 } from "@waline/client/dist/component";
import Giscus$1 from "@giscus/vue";
import { useRoute, useRouter, RouterView, createRouter, START_LOCATION, createMemoryHistory } from "vue-router";
import { pageviewCount } from "@waline/client";
import { debounce } from "ts-debounce";
import * as icons from "@vicons/carbon";
import { convertToPinyin, md5 } from "@vuepress-reco/shared";
import { useMutationObserver, useClipboard, useEventListener, computedEager } from "@vueuse/core";
const pagesData$1 = {
  // path: /timeline/
  "v-01560935": () => import(
    /* webpackChunkName: "v-01560935" */
    "./assets/index.html-9dde457d.mjs"
  ).then(({ data }) => data),
  // path: /posts/
  "v-e1e3da16": () => import(
    /* webpackChunkName: "v-e1e3da16" */
    "./assets/index.html-9f4a035e.mjs"
  ).then(({ data }) => data),
  // path: /friendship-link/
  "v-53355ebb": () => import(
    /* webpackChunkName: "v-53355ebb" */
    "./assets/index.html-807230be.mjs"
  ).then(({ data }) => data),
  // path: /
  "v-8daa1a0e": () => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-108c89d6.mjs"
  ).then(({ data }) => data),
  // path: /contact/contact.html
  "v-7d79a27e": () => import(
    /* webpackChunkName: "v-7d79a27e" */
    "./assets/contact.html-c5b5cd09.mjs"
  ).then(({ data }) => data),
  // path: /contributor/about.html
  "v-4245b959": () => import(
    /* webpackChunkName: "v-4245b959" */
    "./assets/about.html-efe3ac79.mjs"
  ).then(({ data }) => data),
  // path: /contributor/contributor.html
  "v-5943370b": () => import(
    /* webpackChunkName: "v-5943370b" */
    "./assets/contributor.html-b1245922.mjs"
  ).then(({ data }) => data),
  // path: /course/50-python-office.html
  "v-64a735ba": () => import(
    /* webpackChunkName: "v-64a735ba" */
    "./assets/50-python-office.html-9dde9442.mjs"
  ).then(({ data }) => data),
  // path: /guide/allFunc.html
  "v-4c355ae0": () => import(
    /* webpackChunkName: "v-4c355ae0" */
    "./assets/allFunc.html-a0ac280c.mjs"
  ).then(({ data }) => data),
  // path: /guide/init.html
  "v-d6c4d346": () => import(
    /* webpackChunkName: "v-d6c4d346" */
    "./assets/init.html-e7e518d3.mjs"
  ).then(({ data }) => data),
  // path: /guide/introduction.html
  "v-1c7b2593": () => import(
    /* webpackChunkName: "v-1c7b2593" */
    "./assets/introduction.html-090815e9.mjs"
  ).then(({ data }) => data),
  // path: /guide/office.html
  "v-75d71331": () => import(
    /* webpackChunkName: "v-75d71331" */
    "./assets/office.html-f59feaba.mjs"
  ).then(({ data }) => data),
  // path: /guide/requirement.html
  "v-588d113c": () => import(
    /* webpackChunkName: "v-588d113c" */
    "./assets/requirement.html-7749e3a0.mjs"
  ).then(({ data }) => data),
  // path: /office/datav.html
  "v-049ca5a7": () => import(
    /* webpackChunkName: "v-049ca5a7" */
    "./assets/datav.html-827bb0fc.mjs"
  ).then(({ data }) => data),
  // path: /office/email.html
  "v-66f34bd2": () => import(
    /* webpackChunkName: "v-66f34bd2" */
    "./assets/email.html-6f056914.mjs"
  ).then(({ data }) => data),
  // path: /office/excel.html
  "v-27a08bdc": () => import(
    /* webpackChunkName: "v-27a08bdc" */
    "./assets/excel.html-8113cc7c.mjs"
  ).then(({ data }) => data),
  // path: /office/file.html
  "v-4777fb7a": () => import(
    /* webpackChunkName: "v-4777fb7a" */
    "./assets/file.html-e10145df.mjs"
  ).then(({ data }) => data),
  // path: /office/finance.html
  "v-0f0043ce": () => import(
    /* webpackChunkName: "v-0f0043ce" */
    "./assets/finance.html-38dc984c.mjs"
  ).then(({ data }) => data),
  // path: /office/image.html
  "v-27edbbb8": () => import(
    /* webpackChunkName: "v-27edbbb8" */
    "./assets/image.html-ac326911.mjs"
  ).then(({ data }) => data),
  // path: /office/ocr.html
  "v-6faea855": () => import(
    /* webpackChunkName: "v-6faea855" */
    "./assets/ocr.html-d40f9da2.mjs"
  ).then(({ data }) => data),
  // path: /office/pdf.html
  "v-10082dfe": () => import(
    /* webpackChunkName: "v-10082dfe" */
    "./assets/pdf.html-df5d7bda.mjs"
  ).then(({ data }) => data),
  // path: /office/ppt.html
  "v-eaaaee82": () => import(
    /* webpackChunkName: "v-eaaaee82" */
    "./assets/ppt.html-f77617c1.mjs"
  ).then(({ data }) => data),
  // path: /office/robot.html
  "v-0fb74c09": () => import(
    /* webpackChunkName: "v-0fb74c09" */
    "./assets/robot.html-9b151393.mjs"
  ).then(({ data }) => data),
  // path: /office/tools.html
  "v-c35c2990": () => import(
    /* webpackChunkName: "v-c35c2990" */
    "./assets/tools.html-aa68bb7a.mjs"
  ).then(({ data }) => data),
  // path: /office/video.html
  "v-1d7e4498": () => import(
    /* webpackChunkName: "v-1d7e4498" */
    "./assets/video.html-ff322370.mjs"
  ).then(({ data }) => data),
  // path: /office/web.html
  "v-05920842": () => import(
    /* webpackChunkName: "v-05920842" */
    "./assets/web.html-122a8038.mjs"
  ).then(({ data }) => data),
  // path: /office/word.html
  "v-5fc6f975": () => import(
    /* webpackChunkName: "v-5fc6f975" */
    "./assets/word.html-60bf1000.mjs"
  ).then(({ data }) => data),
  // path: /ref/git.html
  "v-239da7bc": () => import(
    /* webpackChunkName: "v-239da7bc" */
    "./assets/git.html-7939db0d.mjs"
  ).then(({ data }) => data),
  // path: /ref/log.html
  "v-5239eb8a": () => import(
    /* webpackChunkName: "v-5239eb8a" */
    "./assets/log.html-89c5f01b.mjs"
  ).then(({ data }) => data),
  // path: /ref/qaq.html
  "v-f3cdf6e6": () => import(
    /* webpackChunkName: "v-f3cdf6e6" */
    "./assets/qaq.html-02c025df.mjs"
  ).then(({ data }) => data),
  // path: /ref/ref.html
  "v-a26460ca": () => import(
    /* webpackChunkName: "v-a26460ca" */
    "./assets/ref.html-a3febf91.mjs"
  ).then(({ data }) => data),
  // path: /video/func-list.html
  "v-2b6c3082": () => import(
    /* webpackChunkName: "v-2b6c3082" */
    "./assets/func-list.html-f2a3d33a.mjs"
  ).then(({ data }) => data),
  // path: /video/poocr.html
  "v-718d4887": () => import(
    /* webpackChunkName: "v-718d4887" */
    "./assets/poocr.html-bb34a1dc.mjs"
  ).then(({ data }) => data),
  // path: /video/video.html
  "v-c0a7576a": () => import(
    /* webpackChunkName: "v-c0a7576a" */
    "./assets/video.html-b8522a12.mjs"
  ).then(({ data }) => data),
  // path: /course/docs/50-01-python.html
  "v-adfe5b2c": () => import(
    /* webpackChunkName: "v-adfe5b2c" */
    "./assets/50-01-python.html-7c7c80ef.mjs"
  ).then(({ data }) => data),
  // path: /course/docs/50-02-pycharm.html
  "v-a4ac4706": () => import(
    /* webpackChunkName: "v-a4ac4706" */
    "./assets/50-02-pycharm.html-99d234fa.mjs"
  ).then(({ data }) => data),
  // path: /course/docs/50-03-pip.html
  "v-80c2a3da": () => import(
    /* webpackChunkName: "v-80c2a3da" */
    "./assets/50-03-pip.html-30f9cc90.mjs"
  ).then(({ data }) => data),
  // path: /course/docs/50-04-docx2pdf.html
  "v-068e88ee": () => import(
    /* webpackChunkName: "v-068e88ee" */
    "./assets/50-04-docx2pdf.html-842c1907.mjs"
  ).then(({ data }) => data),
  // path: /course/docs/50-05-docx2doc.html
  "v-8e67e578": () => import(
    /* webpackChunkName: "v-8e67e578" */
    "./assets/50-05-docx2doc.html-ab38d238.mjs"
  ).then(({ data }) => data),
  // path: /course/docs/50-06-merge4docx.html
  "v-3a18ef8f": () => import(
    /* webpackChunkName: "v-3a18ef8f" */
    "./assets/50-06-merge4docx.html-2c95a314.mjs"
  ).then(({ data }) => data),
  // path: /course/docs/50-07-fake2excel.html
  "v-1def3232": () => import(
    /* webpackChunkName: "v-1def3232" */
    "./assets/50-07-fake2excel.html-8645ff80.mjs"
  ).then(({ data }) => data),
  // path: /po/poword/doc2docx.html
  "v-2f58aad0": () => import(
    /* webpackChunkName: "v-2f58aad0" */
    "./assets/doc2docx.html-9947ef65.mjs"
  ).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-bd7a96c7.mjs"
  ).then(({ data }) => data)
};
const siteData$1 = JSON.parse('{"base":"/","lang":"en-US","title":"python-office","description":"为自动化办公而生","head":[["link",{"rel":"icon","href":"https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/icon2.jpg"}],["script",{},"\\n                    var _hmt = _hmt || [];\\n                    (function() {\\n                    var hm = document.createElement(\\"script\\");\\n                    hm.src = \\"https://hm.baidu.com/hm.js?bd18154a0aff45581049f87f5c644b44\\";\\n                    var s = document.getElementsByTagName(\\"script\\")[0]; \\n                    s.parentNode.insertBefore(hm, s);\\n                    })();\\n                    "]],"locales":{}}');
const pagesComponents = {
  // path: /timeline/
  "v-01560935": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-01560935" */
    "./assets/index.html-f0c151b3.mjs"
  )),
  // path: /posts/
  "v-e1e3da16": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e1e3da16" */
    "./assets/index.html-479e99c9.mjs"
  )),
  // path: /friendship-link/
  "v-53355ebb": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-53355ebb" */
    "./assets/index.html-0db69354.mjs"
  )),
  // path: /
  "v-8daa1a0e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-ec5cf61e.mjs"
  )),
  // path: /contact/contact.html
  "v-7d79a27e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7d79a27e" */
    "./assets/contact.html-c1d1bdc3.mjs"
  )),
  // path: /contributor/about.html
  "v-4245b959": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4245b959" */
    "./assets/about.html-a1f25d66.mjs"
  )),
  // path: /contributor/contributor.html
  "v-5943370b": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5943370b" */
    "./assets/contributor.html-2f0980bb.mjs"
  )),
  // path: /course/50-python-office.html
  "v-64a735ba": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-64a735ba" */
    "./assets/50-python-office.html-e8472e06.mjs"
  )),
  // path: /guide/allFunc.html
  "v-4c355ae0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4c355ae0" */
    "./assets/allFunc.html-61ecfd6f.mjs"
  )),
  // path: /guide/init.html
  "v-d6c4d346": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-d6c4d346" */
    "./assets/init.html-6d5a8a89.mjs"
  )),
  // path: /guide/introduction.html
  "v-1c7b2593": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1c7b2593" */
    "./assets/introduction.html-1341a574.mjs"
  )),
  // path: /guide/office.html
  "v-75d71331": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-75d71331" */
    "./assets/office.html-2413842d.mjs"
  )),
  // path: /guide/requirement.html
  "v-588d113c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-588d113c" */
    "./assets/requirement.html-58f805f7.mjs"
  )),
  // path: /office/datav.html
  "v-049ca5a7": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-049ca5a7" */
    "./assets/datav.html-4ec4501f.mjs"
  )),
  // path: /office/email.html
  "v-66f34bd2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-66f34bd2" */
    "./assets/email.html-15994614.mjs"
  )),
  // path: /office/excel.html
  "v-27a08bdc": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-27a08bdc" */
    "./assets/excel.html-1aa99c5d.mjs"
  )),
  // path: /office/file.html
  "v-4777fb7a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4777fb7a" */
    "./assets/file.html-8be8d4b9.mjs"
  )),
  // path: /office/finance.html
  "v-0f0043ce": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0f0043ce" */
    "./assets/finance.html-22945523.mjs"
  )),
  // path: /office/image.html
  "v-27edbbb8": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-27edbbb8" */
    "./assets/image.html-8cafc8d8.mjs"
  )),
  // path: /office/ocr.html
  "v-6faea855": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6faea855" */
    "./assets/ocr.html-a7d3e2cf.mjs"
  )),
  // path: /office/pdf.html
  "v-10082dfe": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-10082dfe" */
    "./assets/pdf.html-5af860d5.mjs"
  )),
  // path: /office/ppt.html
  "v-eaaaee82": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-eaaaee82" */
    "./assets/ppt.html-cf93473d.mjs"
  )),
  // path: /office/robot.html
  "v-0fb74c09": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0fb74c09" */
    "./assets/robot.html-227ec26e.mjs"
  )),
  // path: /office/tools.html
  "v-c35c2990": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c35c2990" */
    "./assets/tools.html-10e413f7.mjs"
  )),
  // path: /office/video.html
  "v-1d7e4498": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1d7e4498" */
    "./assets/video.html-bb051320.mjs"
  )),
  // path: /office/web.html
  "v-05920842": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-05920842" */
    "./assets/web.html-ae2479fb.mjs"
  )),
  // path: /office/word.html
  "v-5fc6f975": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5fc6f975" */
    "./assets/word.html-898fa11f.mjs"
  )),
  // path: /ref/git.html
  "v-239da7bc": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-239da7bc" */
    "./assets/git.html-f28e23e1.mjs"
  )),
  // path: /ref/log.html
  "v-5239eb8a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5239eb8a" */
    "./assets/log.html-11fd5935.mjs"
  )),
  // path: /ref/qaq.html
  "v-f3cdf6e6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-f3cdf6e6" */
    "./assets/qaq.html-49e47a35.mjs"
  )),
  // path: /ref/ref.html
  "v-a26460ca": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a26460ca" */
    "./assets/ref.html-a6a5905b.mjs"
  )),
  // path: /video/func-list.html
  "v-2b6c3082": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2b6c3082" */
    "./assets/func-list.html-c8f3845a.mjs"
  )),
  // path: /video/poocr.html
  "v-718d4887": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-718d4887" */
    "./assets/poocr.html-7d722ef1.mjs"
  )),
  // path: /video/video.html
  "v-c0a7576a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c0a7576a" */
    "./assets/video.html-73dd1085.mjs"
  )),
  // path: /course/docs/50-01-python.html
  "v-adfe5b2c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-adfe5b2c" */
    "./assets/50-01-python.html-3d6c10d4.mjs"
  )),
  // path: /course/docs/50-02-pycharm.html
  "v-a4ac4706": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a4ac4706" */
    "./assets/50-02-pycharm.html-b0cc12d0.mjs"
  )),
  // path: /course/docs/50-03-pip.html
  "v-80c2a3da": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-80c2a3da" */
    "./assets/50-03-pip.html-3ad7eaa3.mjs"
  )),
  // path: /course/docs/50-04-docx2pdf.html
  "v-068e88ee": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-068e88ee" */
    "./assets/50-04-docx2pdf.html-02db5897.mjs"
  )),
  // path: /course/docs/50-05-docx2doc.html
  "v-8e67e578": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8e67e578" */
    "./assets/50-05-docx2doc.html-3bcceea7.mjs"
  )),
  // path: /course/docs/50-06-merge4docx.html
  "v-3a18ef8f": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3a18ef8f" */
    "./assets/50-06-merge4docx.html-4e0d17f4.mjs"
  )),
  // path: /course/docs/50-07-fake2excel.html
  "v-1def3232": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1def3232" */
    "./assets/50-07-fake2excel.html-53b74493.mjs"
  )),
  // path: /po/poword/doc2docx.html
  "v-2f58aad0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2f58aad0" */
    "./assets/doc2docx.html-6c184834.mjs"
  )),
  // path: /404.html
  "v-3706649a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-dfa27745.mjs"
  ))
};
var layoutsSymbol = Symbol(
  ""
);
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData$1 = () => pageData;
var pageFrontmatterSymbol = Symbol(
  ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol(
  ""
);
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol(
  ""
);
var pageLangSymbol = Symbol(
  ""
);
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var pageLayoutSymbol = Symbol(
  ""
);
var usePageLayout = () => {
  const pageLayout = inject(pageLayoutSymbol);
  if (!pageLayout) {
    throw new Error("usePageLayout() is called without provider.");
  }
  return pageLayout;
};
var routeLocaleSymbol = Symbol(
  ""
);
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var siteLocaleDataSymbol = Symbol(
  ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Resolve page data according to page key
   */
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 ?? pageDataEmpty;
  },
  /**
   * Resolve page frontmatter from page data
   */
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description2 = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description2 }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (page, siteLocale) => [page.title, siteLocale.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (page, siteLocale) => page.lang || siteLocale.lang || "en-US",
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (page, layouts2) => {
    let layoutName;
    if (page.path) {
      const frontmatterLayout = page.frontmatter.layout;
      if (isString(frontmatterLayout)) {
        layoutName = frontmatterLayout;
      } else {
        layoutName = LAYOUT_NAME_DEFAULT;
      }
    } else {
      layoutName = LAYOUT_NAME_NOT_FOUND;
    }
    return layouts2[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page = usePageData$1();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page.value.key]
    );
    return () => pageComponent.value ? (
      // use page component
      h(pageComponent.value)
    ) : (
      // fallback content
      h(
        "div",
        "404 Not Found"
      )
    );
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
const themeData$1 = JSON.parse('{"style":"@vuepress-reco/style-default","logo":"https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/icon2.jpg","author":"程序员晚枫","authorAvatar":"/head.png","docsRepo":"https://gitee.com/CoderWanFeng/python-office.com","docsBranch":"main","docsDir":"docs-pages/vuepress","lastUpdatedText":"本页更新时间：","bulletin":{"body":[{"type":"text","content":"GitHub：python-office","style":"font-size: 12px;"},{"type":"hr"},{"type":"title","content":"读者群"},{"type":"text","content":"\\n          <ul>\\n            <li><a href=\\"http://python4office.cn/wechat-group/\\">微信群<a/></li>\\n            <li><a href=\\" https://python-office-1300615378.cos.ap-chongqing.myqcloud.com/qq-group.jpg\\">QQ群<a/></li>\\n          </ul>","style":"font-size: 12px;"},{"type":"hr"},{"type":"title","content":"精品课程"},{"type":"text","content":"\\n          <ul>\\n            <li><a href=\\"http://gk.link/a/11Put\\">121讲Python基础<a/></li>\\n            <li><a href=\\"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect\\">50讲自动化办公<a/></li>\\n            <li><a href=\\"https://mp.weixin.qq.com/s/9aspEHdCiAdXK17AvHlu9Q\\">8讲微信机器人<a/></li>\\n          </ul>","style":"font-size: 12px;"},{"type":"hr"},{"type":"buttongroup","children":[{"text":"vlog","link":"https://mp.weixin.qq.com/s/NN2pX2bQPpczOeGF4ARNtw"}]}]},"series":{"/":[{"text":"入门指南","children":["/guide/introduction.html","/guide/allFunc.html","/guide/office.html","/guide/requirement.html"]},{"text":"原创课程","children":["/course/50-python-office.html"]},{"text":"核心功能","children":["/office/word.html","/office/excel.html","/office/ppt.html","/office/pdf.html","/office/email.html","/office/file.html","/office/image.html","/office/ocr.html","/office/tools.html","/office/video.html","/office/web.html","/office/robot.html","/office/datav.html","/office/finance.html"]},{"text":"视频课程","children":["/video/video.html","/video/poocr.html"]},{"text":"关于作者","children":["/contributor/contributor.html","/contributor/about.html"]},{"text":"相关文档","children":["/ref/git.html","/ref/log.html","/ref/ref.html","/ref/qaq.html"]}]},"navbar":[{"text":"学习文档","link":"/guide/introduction","icon":"Account"},{"text":"下载资料","icon":"Download","children":[{"text":"软件","link":"http://python4office.cn/python-download/"},{"text":"源码","link":"/contributor/contributor.md"}]},{"text":"学习课程","icon":"Archive","children":[{"text":"121讲Python基础","link":"http://gk.link/a/128fC"},{"text":"50讲自动化办公","link":"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI2Nzg5MjgyNg==&action=getalbum&album_id=3056320585091366915#wechat_redirect"},{"text":"8讲微信机器人","link":"https://mp.weixin.qq.com/s/9aspEHdCiAdXK17AvHlu9Q"}]},{"text":"关于作者","icon":"Chat","children":[{"text":"读者群","link":"https://mp.weixin.qq.com/s/NN2pX2bQPpczOeGF4ARNtw"},{"text":"作者微信","link":"https://mp.weixin.qq.com/s/yFcocJbfS9Hs375NhE8Gbw"}]},{"text":"领取福利","link":"http://python4office.cn/sideline-pro-list/","icon":"Gift"}]}');
const themeData = ref(themeData$1);
const useThemeData = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  const { locales: locales2, ...baseOptions } = theme;
  return {
    ...baseOptions,
    ...locales2 == null ? void 0 : locales2[routeLocale]
  };
};
function useVisible() {
  const themeLocal = useThemeLocaleData$1();
  const bulletin = computed(() => {
    var _a2;
    return (_a2 = themeLocal === null || themeLocal === void 0 ? void 0 : themeLocal.value) === null || _a2 === void 0 ? void 0 : _a2.bulletin;
  });
  const visible = ref(false);
  const bulletinPopoverKey = "__CLOSE_BULLETIN_POPOVER__";
  onMounted(() => {
    var _a2;
    const closeNote = sessionStorage.getItem(bulletinPopoverKey);
    visible.value = closeNote !== "true" && !!((_a2 = bulletin === null || bulletin === void 0 ? void 0 : bulletin.value) === null || _a2 === void 0 ? void 0 : _a2.body);
  });
  const closeBulletinPopover = () => {
    visible.value = false;
    sessionStorage.setItem(bulletinPopoverKey, "true");
  };
  return { visible, bulletin, closeBulletinPopover };
}
const nodeHandler = {
  handleImage(node) {
    return `<img style="${node.style || ""}" src="${node.src}" />`;
  },
  handleText(node) {
    return `<div style="${node.style || ""}">${node.content}</div>`;
  },
  handleTitle(node) {
    return `<h5 style="${node.style || ""}">${node.content}</h5>`;
  },
  handleButton(node) {
    return `<a style="${node.style || ""}" class="btn" href="${node.link}">${node.text}</a>`;
  },
  handleButtongroup(node) {
    const btnChildren = (node.children || []).reduce((total, next) => {
      return total += `<a style="${next.style || node.style || ""}" class="btn" href="${next.link}">${next.text}</a>`;
    }, "");
    return `<div class="btn-group">${btnChildren}</div>`;
  },
  handleHr(node) {
    return `<hr />`;
  }
};
function useHandleNodes() {
  const themeLocal = useThemeLocaleData$1();
  function handleNode(nodes) {
    if (!Array.isArray(nodes)) {
      let type2 = nodes.type;
      type2 = type2.slice(0, 1).toUpperCase() + type2.slice(1);
      return nodeHandler[`handle${type2}`](nodes);
    } else {
      return nodes.map((node) => handleNode(node));
    }
  }
  const bodyNodes = computed(() => {
    var _a2, _b2;
    return handleNode((_b2 = (_a2 = themeLocal === null || themeLocal === void 0 ? void 0 : themeLocal.value) === null || _a2 === void 0 ? void 0 : _a2.bulletin) === null || _b2 === void 0 ? void 0 : _b2.body).join("");
  });
  return { bodyNodes, handleNode };
}
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "Bulletin",
  __ssrInlineRender: true,
  setup(__props) {
    const { visible, bulletin, closeBulletinPopover } = useVisible();
    const { bodyNodes } = useHandleNodes();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      const _component_Xicons = resolveComponent("Xicons");
      if (unref(visible)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "bulletin-wrapper",
          style: { width: ((_a2 = unref(bulletin)) == null ? void 0 : _a2.width) || "300px" }
        }, _attrs))}><div class="bulletin-title">`);
        _push(ssrRenderComponent(_component_Xicons, {
          icon: "VolumeUp",
          "icon-size": "20",
          text: ((_b2 = unref(bulletin)) == null ? void 0 : _b2.title) || "公告",
          color: "#fff",
          "text-size": "16"
        }, null, _parent));
        _push(`<svg class="btn-close icon" t="1573745677073" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4448" width="22" height="22"><path d="M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0" p-id="4449"></path></svg></div><div class="bulletin-content">${unref(bodyNodes)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const Bulletin_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/@vuepress-reco/vuepress-plugin-bulletin-popover/lib/client/components/Bulletin.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const clientConfig0 = defineClientConfig({
  rootComponents: [
    defineComponent(() => {
      return () => null;
    })
  ]
});
function useComment() {
  const themeLocal = useThemeLocaleData$1();
  const solution = computed(() => {
    var _a2;
    switch ((_a2 = themeLocal.value.commentConfig) === null || _a2 === void 0 ? void 0 : _a2.type) {
      case "valine":
        return "valine";
      case "waline":
        return "waline";
      case "giscus":
        return "giscus";
      default:
        return "";
    }
  });
  const options = computed(() => {
    var _a2, _b2;
    return ((_b2 = (_a2 = themeLocal.value) === null || _a2 === void 0 ? void 0 : _a2.commentConfig) === null || _b2 === void 0 ? void 0 : _b2.options) || {};
  });
  return { solution, options };
}
const valine = "";
const Valine = defineComponent({
  name: "Valine",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(props) {
    return;
  },
  render() {
    return h("div", {
      class: "reco-valine-wrapper"
    }, h("div", {
      id: "valine"
    }));
  }
});
const waline$1 = "";
const waline = "";
const Waline = defineComponent({
  name: "Waline",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(props) {
    const { options } = toRefs(props);
    const lang = usePageLang();
    const pageData2 = usePageData$1();
    const walineOption = computed(() => {
      var _a2;
      return {
        lang: lang.value || "zh-CN",
        dark: 'html[class="dark"]',
        path: withBase((_a2 = pageData2.value) === null || _a2 === void 0 ? void 0 : _a2.path),
        ...options.value,
        pageview: false
      };
    });
    return () => h("div", {
      class: "reco-waline-wrapper"
    }, h(Waline$1, walineOption.value));
  }
});
const giscus = "";
const giscusTheme = "";
const giscusThemeDark = "";
const Giscus = defineComponent({
  name: "Giscus",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(props) {
    const { options } = toRefs(props);
    const lang = usePageLang();
    const theme = ref("light_tritanopia");
    onMounted(async () => {
      const fn = function() {
        var _a2;
        const dark = (_a2 = document.documentElement.classList) === null || _a2 === void 0 ? void 0 : _a2.contains("dark");
        {
          const baseUrl = window.location.protocol + "//" + window.location.host;
          theme.value = baseUrl + `/assets/giscus-theme${dark ? "-dark" : ""}.css`;
        }
      };
      const mutationObserver = new MutationObserver(fn);
      mutationObserver.observe(document.documentElement, {
        attributes: true
      });
      fn();
    });
    const giscusOption = computed(() => ({
      lang: lang.value || "zh-CN",
      host: "https://giscus.app",
      theme: theme.value,
      ...options.value
    }));
    return () => h("div", {
      class: "reco-giscus-wrapper"
    }, h(Giscus$1, giscusOption.value));
  }
});
const Comments = defineComponent({
  name: "RecoComments",
  components: { Valine, Waline, Giscus },
  props: {
    hideComments: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const { solution, options } = useComment();
    const { hideComments } = toRefs(props);
    let componentName;
    switch (solution.value) {
      case "valine":
        componentName = Valine;
        break;
      case "waline":
        componentName = Waline;
        break;
      case "giscus":
        componentName = Giscus;
        break;
      default:
        componentName = "";
        break;
    }
    return () => {
      if (componentName) {
        if (hideComments.value) {
          if (solution.value === "valine") {
            return h(componentName, {
              options: options.value,
              style: "display: none"
            });
          }
          return null;
        }
        return h(componentName, {
          options: options.value
        });
      }
      return null;
    };
  }
});
const ValineViews = defineComponent({
  name: "ValineViews",
  props: {
    idVal: String,
    numStyle: {
      type: Object,
      default: () => ({})
    },
    flagTitle: {
      type: String,
      default: "Your Article Title"
    }
  },
  setup(props) {
    const siteLocal = useSiteLocaleData();
    const route = useRoute();
    const { idVal, numStyle, flagTitle } = toRefs(props);
    const getIdVal = (path) => {
      return siteLocal.value.base.slice(0, siteLocal.value.base.length - 1) + path;
    };
    return () => h("span", {
      "id": getIdVal(idVal.value || route.path),
      "class": "leancloud-visitors",
      "data-flag-title": flagTitle.value
    }, h("a", {
      class: "leancloud-visitors-count",
      style: numStyle.value
    }));
  }
});
const WalineViews = defineComponent({
  name: "WalineViews",
  props: {
    path: String
  },
  setup(props) {
    const { path } = toRefs(props);
    const { options } = useComment();
    const route = useRoute();
    const viewFn = function() {
      pageviewCount({
        serverURL: options.value.serverURL,
        path: path.value,
        selector: `[data-path="${path.value}"]`,
        update: route.path === path.value
      });
    };
    onMounted(() => {
      viewFn();
    });
    onUpdated(() => {
      viewFn();
    });
    return () => h("span", {
      "class": "waline-pageview-count",
      "data-path": path.value
    });
  }
});
function applyClientEnhance$1({ app }) {
  app.component("Comments", (props) => h(Comments, { ...props }));
  app.component("ValineViews", (props) => h(ValineViews, { ...props }));
  app.component("WalineViews", (props) => h(WalineViews, { ...props }));
}
const clientConfig1 = defineClientConfig({
  enhance(...args) {
    applyClientEnhance$1(...args);
  }
});
const categoryPaginationPostsSymbol = Symbol("categoryPaginationPostsSymbol");
const categorySummarySymbol = Symbol("categorySummarySymbol");
const postsSymbol = Symbol("postsSymbol");
const seriesSymbol = Symbol("seriesSymbol");
function usePageData() {
  const categorySummary = inject(categorySummarySymbol, null) || {};
  const posts = inject(postsSymbol, null) || [];
  const series = inject(seriesSymbol, null) || {};
  const categoryPaginationPosts = inject(categoryPaginationPostsSymbol, null) || {};
  if (!postsSymbol) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  const { currentRoute } = useRouter();
  const categoryPosts = computed(() => {
    return categoryPaginationPosts[currentRoute.value.path] || {};
  });
  return { categoryPosts, categorySummary, posts, series };
}
async function applyClientSetup$2() {
  const posts = [];
  const series = {};
  const categorySummary = { "categories": { "pageSize": 10, "items": {}, "layout": "Categories" }, "tags": { "pageSize": 10, "items": {}, "layout": "Categories" } };
  const categoryPosts = {};
  provide(postsSymbol, posts);
  provide(seriesSymbol, series);
  provide(categorySummarySymbol, categorySummary);
  provide(categoryPaginationPostsSymbol, categoryPosts);
}
const clientConfig2 = defineClientConfig({
  setup() {
    applyClientSetup$2();
  }
});
const clientConfig3 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const isFocusingTextControl = (target) => {
  if (!(target instanceof Element)) {
    return false;
  }
  return document.activeElement === target && (["TEXTAREA", "SELECT", "INPUT"].includes(target.tagName) || target.hasAttribute("contenteditable"));
};
const isKeyMatched = (event, hotKeys2) => hotKeys2.some((item) => {
  if (isString(item)) {
    return item === event.key;
  }
  const { key, ctrl = false, shift = false, alt = false } = item;
  return key === event.key && ctrl === event.ctrlKey && shift === event.shiftKey && alt === event.altKey;
});
const nonASCIIRegExp = /[^\x00-\x7F]/;
const splitWords = (str) => str.split(/\s+/g).map((str2) => str2.trim()).filter((str2) => !!str2);
const escapeRegExp = (str) => str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
const isQueryMatched = (query, toMatch) => {
  const toMatchStr = toMatch.join(" ");
  const words = splitWords(query);
  if (nonASCIIRegExp.test(query)) {
    return words.some((word) => toMatchStr.toLowerCase().indexOf(word) > -1);
  }
  const hasTrailingSpace = query.endsWith(" ");
  const searchRegex = new RegExp(words.map((word, index2) => {
    if (words.length === index2 + 1 && !hasTrailingSpace) {
      return `(?=.*\\b${escapeRegExp(word)})`;
    }
    return `(?=.*\\b${escapeRegExp(word)}\\b)`;
  }).join("") + ".+", "gi");
  return searchRegex.test(toMatchStr);
};
const useHotKeys = ({ input, hotKeys: hotKeys2 }) => {
  if (hotKeys2.value.length === 0)
    return;
  const onKeydown = (event) => {
    if (!input.value)
      return;
    if (
      // key matches
      isKeyMatched(event, hotKeys2.value) && // event does not come from the search box itself or
      // user isn't focusing (and thus perhaps typing in) a text control
      !isFocusingTextControl(event.target)
    ) {
      event.preventDefault();
      input.value.focus();
    }
  };
  onMounted(() => {
    document.addEventListener("keydown", onKeydown);
  });
  onBeforeUnmount(() => {
    document.removeEventListener("keydown", onKeydown);
  });
};
const searchIndex$1 = [
  {
    "title": "",
    "headers": [],
    "path": "/timeline/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/posts/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/friendship-link/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/contact/contact.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "社区贡献",
    "headers": [],
    "path": "/contributor/about.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "源码下载",
    "headers": [
      {
        "level": 2,
        "title": "联系作者",
        "slug": "联系作者",
        "link": "#联系作者",
        "children": []
      },
      {
        "level": 2,
        "title": "参与开发",
        "slug": "参与开发",
        "link": "#参与开发",
        "children": []
      }
    ],
    "path": "/contributor/contributor.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "视频教程",
    "headers": [
      {
        "level": 2,
        "title": "0、准备工作",
        "slug": "_0、准备工作",
        "link": "#_0、准备工作",
        "children": []
      },
      {
        "level": 2,
        "title": "1、Word + 自动化办公 = poword",
        "slug": "_1、word-自动化办公-poword",
        "link": "#_1、word-自动化办公-poword",
        "children": []
      },
      {
        "level": 2,
        "title": "2、Excel + 自动化办公 = poexcel",
        "slug": "_2、excel-自动化办公-poexcel",
        "link": "#_2、excel-自动化办公-poexcel",
        "children": []
      },
      {
        "level": 2,
        "title": "3、PDF + 自动化办公 = popdf",
        "slug": "_3、pdf-自动化办公-popdf",
        "link": "#_3、pdf-自动化办公-popdf",
        "children": []
      },
      {
        "level": 2,
        "title": "4、PPT + 自动化办公 = poppt",
        "slug": "_4、ppt-自动化办公-poppt",
        "link": "#_4、ppt-自动化办公-poppt",
        "children": []
      },
      {
        "level": 2,
        "title": "5、文件 + 自动化办公 = pofile",
        "slug": "_5、文件-自动化办公-pofile",
        "link": "#_5、文件-自动化办公-pofile",
        "children": []
      },
      {
        "level": 2,
        "title": "6、图片 + 自动化办公 = poimage",
        "slug": "_6、图片-自动化办公-poimage",
        "link": "#_6、图片-自动化办公-poimage",
        "children": []
      },
      {
        "level": 2,
        "title": "7、文字识别 + 自动化办公 = poocr",
        "slug": "_7、文字识别-自动化办公-poocr",
        "link": "#_7、文字识别-自动化办公-poocr",
        "children": []
      },
      {
        "level": 2,
        "title": "8、便捷工具 + 自动化办公 = wftools",
        "slug": "_8、便捷工具-自动化办公-wftools",
        "link": "#_8、便捷工具-自动化办公-wftools",
        "children": []
      },
      {
        "level": 2,
        "title": "9、视频 + 自动化办公 = povideo",
        "slug": "_9、视频-自动化办公-povideo",
        "link": "#_9、视频-自动化办公-povideo",
        "children": []
      },
      {
        "level": 2,
        "title": "10、代码开发 + 自动化办公 = pocode、potime、poprogress",
        "slug": "_10、代码开发-自动化办公-pocode、potime、poprogress",
        "link": "#_10、代码开发-自动化办公-pocode、potime、poprogress",
        "children": []
      },
      {
        "level": 2,
        "title": "11、金融 + 自动化办公 = pofinance",
        "slug": "_11、金融-自动化办公-pofinance",
        "link": "#_11、金融-自动化办公-pofinance",
        "children": []
      },
      {
        "level": 2,
        "title": "12、AI + 自动化办公",
        "slug": "_12、ai-自动化办公",
        "link": "#_12、ai-自动化办公",
        "children": []
      },
      {
        "level": 2,
        "title": "13、中文编程 + 自动化办公 = pohan",
        "slug": "_13、中文编程-自动化办公-pohan",
        "link": "#_13、中文编程-自动化办公-pohan",
        "children": []
      },
      {
        "level": 2,
        "title": "14、微信机器人-PyOfficeRobot",
        "slug": "_14、微信机器人-pyofficerobot",
        "link": "#_14、微信机器人-pyofficerobot",
        "children": []
      },
      {
        "level": 2,
        "title": "文字教程",
        "slug": "文字教程",
        "link": "#文字教程",
        "children": []
      },
      {
        "level": 2,
        "title": "良心建议",
        "slug": "良心建议",
        "link": "#良心建议",
        "children": [
          {
            "level": 3,
            "title": "生活VLOG",
            "slug": "生活vlog",
            "link": "#生活vlog",
            "children": []
          },
          {
            "level": 3,
            "title": "转行咨询",
            "slug": "转行咨询",
            "link": "#转行咨询",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "交流群",
        "slug": "交流群",
        "link": "#交流群",
        "children": []
      },
      {
        "level": 2,
        "title": "学习资源",
        "slug": "学习资源",
        "link": "#学习资源",
        "children": []
      }
    ],
    "path": "/course/50-python-office.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "全部功能",
    "headers": [
      {
        "level": 2,
        "title": "功能列表",
        "slug": "功能列表",
        "link": "#功能列表",
        "children": [
          {
            "level": 3,
            "title": "Excel",
            "slug": "excel",
            "link": "#excel",
            "children": []
          },
          {
            "level": 3,
            "title": "PDF",
            "slug": "pdf",
            "link": "#pdf",
            "children": []
          },
          {
            "level": 3,
            "title": "Word",
            "slug": "word",
            "link": "#word",
            "children": []
          },
          {
            "level": 3,
            "title": "Image",
            "slug": "image",
            "link": "#image",
            "children": []
          },
          {
            "level": 3,
            "title": "Tools",
            "slug": "tools",
            "link": "#tools",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "功能交流",
        "slug": "功能交流",
        "link": "#功能交流",
        "children": []
      }
    ],
    "path": "/guide/allFunc.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "给非程序员的Python入门课，0基础适用（课程资料）",
    "headers": [
      {
        "level": 2,
        "title": "1、课程说明",
        "slug": "_1、课程说明",
        "link": "#_1、课程说明",
        "children": []
      },
      {
        "level": 2,
        "title": "2、课程资料",
        "slug": "_2、课程资料",
        "link": "#_2、课程资料",
        "children": []
      },
      {
        "level": 2,
        "title": "3、课程目录",
        "slug": "_3、课程目录",
        "link": "#_3、课程目录",
        "children": []
      },
      {
        "level": 2,
        "title": "4、学习群",
        "slug": "_4、学习群",
        "link": "#_4、学习群",
        "children": []
      }
    ],
    "path": "/guide/init.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "项目说明",
    "headers": [
      {
        "level": 2,
        "title": "📚简介",
        "slug": "📚简介",
        "link": "#📚简介",
        "children": []
      },
      {
        "level": 2,
        "title": "🍺特点",
        "slug": "🍺特点",
        "link": "#🍺特点",
        "children": []
      }
    ],
    "path": "/guide/introduction.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "下载和安装",
    "headers": [],
    "path": "/guide/office.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "需求反馈",
    "headers": [
      {
        "level": 2,
        "title": "问题反馈 + 需求收集",
        "slug": "问题反馈-需求收集",
        "link": "#问题反馈-需求收集",
        "children": []
      }
    ],
    "path": "/guide/requirement.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "数据可视化",
    "headers": [],
    "path": "/office/datav.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Email",
    "headers": [],
    "path": "/office/email.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Excel",
    "headers": [],
    "path": "/office/excel.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文件管理",
    "headers": [],
    "path": "/office/file.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "金融数据分析",
    "headers": [
      {
        "level": 2,
        "title": "开源项目 - pofinance",
        "slug": "开源项目-pofinance",
        "link": "#开源项目-pofinance",
        "children": []
      },
      {
        "level": 2,
        "title": "学习资料",
        "slug": "学习资料",
        "link": "#学习资料",
        "children": []
      },
      {
        "level": 2,
        "title": "联系作者",
        "slug": "联系作者",
        "link": "#联系作者",
        "children": []
      }
    ],
    "path": "/office/finance.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "图片",
    "headers": [
      {
        "level": 2,
        "title": "1、给图片添加水印",
        "slug": "_1、给图片添加水印",
        "link": "#_1、给图片添加水印",
        "children": []
      },
      {
        "level": 2,
        "title": "2、制作动漫头像",
        "slug": "_2、制作动漫头像",
        "link": "#_2、制作动漫头像",
        "children": [
          {
            "level": 3,
            "title": "重要提醒，如果你的代码报错中含有：image",
            "slug": "重要提醒-如果你的代码报错中含有-image",
            "link": "#重要提醒-如果你的代码报错中含有-image",
            "children": []
          }
        ]
      }
    ],
    "path": "/office/image.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "OCR",
    "headers": [],
    "path": "/office/ocr.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "PDF",
    "headers": [
      {
        "level": 2,
        "title": "1、加密、解密",
        "slug": "_1、加密、解密",
        "link": "#_1、加密、解密",
        "children": []
      },
      {
        "level": 2,
        "title": "2、加水印",
        "slug": "_2、加水印",
        "link": "#_2、加水印",
        "children": []
      },
      {
        "level": 2,
        "title": "3、 合并2个PDF",
        "slug": "_3、-合并2个pdf",
        "link": "#_3、-合并2个pdf",
        "children": []
      },
      {
        "level": 2,
        "title": "4、转 Word",
        "slug": "_4、转-word",
        "link": "#_4、转-word",
        "children": []
      },
      {
        "level": 2,
        "title": "5、 TxT 转成 PDF",
        "slug": "_5、-txt-转成-pdf",
        "link": "#_5、-txt-转成-pdf",
        "children": []
      },
      {
        "level": 2,
        "title": "6、转图片",
        "slug": "_6、转图片",
        "link": "#_6、转图片",
        "children": []
      }
    ],
    "path": "/office/pdf.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "PPT",
    "headers": [
      {
        "level": 2,
        "title": "1、PPT批量转成 PDF",
        "slug": "_1、ppt批量转成-pdf",
        "link": "#_1、ppt批量转成-pdf",
        "children": []
      },
      {
        "level": 2,
        "title": "2、把PPT转为一张长图",
        "slug": "_2、把ppt转为一张长图",
        "link": "#_2、把ppt转为一张长图",
        "children": []
      },
      {
        "level": 2,
        "title": "3、合并PPT",
        "slug": "_3、合并ppt",
        "link": "#_3、合并ppt",
        "children": []
      }
    ],
    "path": "/office/ppt.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "聊天机器人",
    "headers": [
      {
        "level": 2,
        "title": "1.1、微信机器人-PyOfficeRobot实现方式",
        "slug": "_1-1、微信机器人-pyofficerobot实现方式",
        "link": "#_1-1、微信机器人-pyofficerobot实现方式",
        "children": []
      },
      {
        "level": 2,
        "title": "1.2、微信机器人-其它实现方式",
        "slug": "_1-2、微信机器人-其它实现方式",
        "link": "#_1-2、微信机器人-其它实现方式",
        "children": []
      },
      {
        "level": 2,
        "title": "2、常见问题",
        "slug": "_2、常见问题",
        "link": "#_2、常见问题",
        "children": [
          {
            "level": 3,
            "title": "如何实现换行效果？代码如下。👇",
            "slug": "如何实现换行效果-代码如下。👇",
            "link": "#如何实现换行效果-代码如下。👇",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3、交流群",
        "slug": "_3、交流群",
        "link": "#_3、交流群",
        "children": []
      }
    ],
    "path": "/office/robot.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "工具",
    "headers": [],
    "path": "/office/tools.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "视频",
    "headers": [],
    "path": "/office/video.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "网站搭建",
    "headers": [],
    "path": "/office/web.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Word",
    "headers": [],
    "path": "/office/word.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "开源仓库",
    "headers": [],
    "path": "/ref/git.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "重要更新",
    "headers": [],
    "path": "/ref/log.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "常见问题",
    "headers": [
      {
        "level": 2,
        "title": "一、问题合集",
        "slug": "一、问题合集",
        "link": "#一、问题合集",
        "children": [
          {
            "level": 3,
            "title": "1、Python版本问题：",
            "slug": "_1、python版本问题",
            "link": "#_1、python版本问题",
            "children": []
          },
          {
            "level": 3,
            "title": "2、运行代码报错：ModuleNotFoundError: No module named 'office'",
            "slug": "_2、运行代码报错-modulenotfounderror-no-module-named-office",
            "link": "#_2、运行代码报错-modulenotfounderror-no-module-named-office",
            "children": []
          },
          {
            "level": 3,
            "title": "3、运行代码报错：AttributeError: module 'office' has no attribute 'xxx'",
            "slug": "_3、运行代码报错-attributeerror-module-office-has-no-attribute-xxx",
            "link": "#_3、运行代码报错-attributeerror-module-office-has-no-attribute-xxx",
            "children": []
          },
          {
            "level": 3,
            "title": "4、Linux、Mac、Windows，支持哪些系统？",
            "slug": "_4、linux、mac、windows-支持哪些系统",
            "link": "#_4、linux、mac、windows-支持哪些系统",
            "children": []
          },
          {
            "level": 3,
            "title": "5、下载速度太慢",
            "slug": "_5、下载速度太慢",
            "link": "#_5、下载速度太慢",
            "children": []
          },
          {
            "level": 3,
            "title": "6、更多问题",
            "slug": "_6、更多问题",
            "link": "#_6、更多问题",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "二、如何参与项目的开发，给python-office增加自己的方法",
        "slug": "二、如何参与项目的开发-给python-office增加自己的方法",
        "link": "#二、如何参与项目的开发-给python-office增加自己的方法",
        "children": []
      },
      {
        "level": 2,
        "title": "三、交流群",
        "slug": "三、交流群",
        "link": "#三、交流群",
        "children": []
      },
      {
        "level": 2,
        "title": "四、Python自动化办公-课程学习",
        "slug": "四、python自动化办公-课程学习",
        "link": "#四、python自动化办公-课程学习",
        "children": []
      }
    ],
    "path": "/ref/qaq.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "参考资料",
    "headers": [],
    "path": "/ref/ref.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "功能合集",
    "headers": [
      {
        "level": 2,
        "title": "交流群和作者微信",
        "slug": "交流群和作者微信",
        "link": "#交流群和作者微信",
        "children": []
      },
      {
        "level": 2,
        "title": "学习福利",
        "slug": "学习福利",
        "link": "#学习福利",
        "children": []
      }
    ],
    "path": "/video/func-list.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文字识别",
    "headers": [],
    "path": "/video/poocr.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "视频教程",
    "headers": [
      {
        "level": 3,
        "title": "生活VLOG",
        "slug": "生活vlog",
        "link": "#生活vlog",
        "children": []
      },
      {
        "level": 3,
        "title": "转行咨询",
        "slug": "转行咨询",
        "link": "#转行咨询",
        "children": []
      },
      {
        "level": 2,
        "title": "交流群",
        "slug": "交流群",
        "link": "#交流群",
        "children": []
      },
      {
        "level": 2,
        "title": "学习资源",
        "slug": "学习资源",
        "link": "#学习资源",
        "children": []
      }
    ],
    "path": "/video/video.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "【第1讲】Python3.11的下载、安装和卸载，有手就能学会",
    "headers": [
      {
        "level": 2,
        "title": "本讲内容",
        "slug": "本讲内容",
        "link": "#本讲内容",
        "children": []
      },
      {
        "level": 2,
        "title": "安装视频",
        "slug": "安装视频",
        "link": "#安装视频",
        "children": []
      },
      {
        "level": 2,
        "title": "软件下载好了",
        "slug": "软件下载好了",
        "link": "#软件下载好了",
        "children": []
      }
    ],
    "path": "/course/docs/50-01-python.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "【第2讲】正版PyCharm，但是免费！最强Python 编辑器的下载和使用教程，还有中文插件哦~",
    "headers": [
      {
        "level": 2,
        "title": "主要内容",
        "slug": "主要内容",
        "link": "#主要内容",
        "children": []
      },
      {
        "level": 2,
        "title": "付费内容",
        "slug": "付费内容",
        "link": "#付费内容",
        "children": []
      }
    ],
    "path": "/course/docs/50-02-pycharm.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "【第3讲】不要重复造轮子原来是这个意思！pip的下载、安装和使用，编程准备工作最后一站",
    "headers": [
      {
        "level": 2,
        "title": "1、下载",
        "slug": "_1、下载",
        "link": "#_1、下载",
        "children": [
          {
            "level": 3,
            "title": "为了加快速度，可以使用国内镜像",
            "slug": "为了加快速度-可以使用国内镜像",
            "link": "#为了加快速度-可以使用国内镜像",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2、更新",
        "slug": "_2、更新",
        "link": "#_2、更新",
        "children": [
          {
            "level": 3,
            "title": "指定版本号",
            "slug": "指定版本号",
            "link": "#指定版本号",
            "children": []
          },
          {
            "level": 3,
            "title": "查看版本号",
            "slug": "查看版本号",
            "link": "#查看版本号",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3、卸载",
        "slug": "_3、卸载",
        "link": "#_3、卸载",
        "children": [
          {
            "level": 3,
            "title": "批量卸载",
            "slug": "批量卸载",
            "link": "#批量卸载",
            "children": []
          }
        ]
      }
    ],
    "path": "/course/docs/50-03-pip.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "【第4讲】Word文件转PDF文件，用Python怎么做？如果是1000个文件呢？",
    "headers": [
      {
        "level": 2,
        "title": "1行Python代码搞定",
        "slug": "_1行python代码搞定",
        "link": "#_1行python代码搞定",
        "children": []
      }
    ],
    "path": "/course/docs/50-04-docx2pdf.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "【Word】第1讲：100个Word文件批量转PDF，1行代码搞定",
    "headers": [],
    "path": "/course/docs/50-05-docx2doc.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "【Word】第1讲：100个Word文件批量转PDF，1行代码搞定",
    "headers": [],
    "path": "/course/docs/50-06-merge4docx.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/course/docs/50-07-fake2excel.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Test",
    "headers": [],
    "path": "/po/poword/doc2docx.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
];
const searchIndex = ref(searchIndex$1);
const useSearchIndex = () => searchIndex;
const useSearchSuggestions = ({ searchIndex: searchIndex2, routeLocale, query, maxSuggestions: maxSuggestions2 }) => {
  const localeSearchIndex = computed(() => searchIndex2.value.filter((item) => item.pathLocale === routeLocale.value));
  return computed(() => {
    const searchStr = query.value.trim().toLowerCase();
    if (!searchStr)
      return [];
    const suggestions = [];
    const matchPageHeader = (searchIndexItem, header) => {
      if (isQueryMatched(searchStr, [header.title])) {
        suggestions.push({
          link: `${searchIndexItem.path}#${header.slug}`,
          title: searchIndexItem.title,
          header: header.title
        });
      }
      for (const child of header.children) {
        if (suggestions.length >= maxSuggestions2.value) {
          return;
        }
        matchPageHeader(searchIndexItem, child);
      }
    };
    for (const searchIndexItem of localeSearchIndex.value) {
      if (suggestions.length >= maxSuggestions2.value) {
        break;
      }
      if (isQueryMatched(searchStr, [
        searchIndexItem.title,
        ...searchIndexItem.extraFields
      ])) {
        suggestions.push({
          link: searchIndexItem.path,
          title: searchIndexItem.title
        });
        continue;
      }
      for (const header of searchIndexItem.headers) {
        if (suggestions.length >= maxSuggestions2.value) {
          break;
        }
        matchPageHeader(searchIndexItem, header);
      }
    }
    return suggestions;
  });
};
const useSuggestionsFocus = (suggestions) => {
  const focusIndex = ref(0);
  const focusNext = () => {
    if (focusIndex.value < suggestions.value.length - 1) {
      focusIndex.value += 1;
    } else {
      focusIndex.value = 0;
    }
  };
  const focusPrev = () => {
    if (focusIndex.value > 0) {
      focusIndex.value -= 1;
    } else {
      focusIndex.value = suggestions.value.length - 1;
    }
  };
  return {
    focusIndex,
    focusNext,
    focusPrev
  };
};
const SearchBox = defineComponent({
  name: "SearchBox",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    },
    hotKeys: {
      type: Array,
      required: false,
      default: () => []
    },
    maxSuggestions: {
      type: Number,
      required: false,
      default: 5
    }
  },
  setup(props) {
    const { locales: locales2, hotKeys: hotKeys2, maxSuggestions: maxSuggestions2 } = toRefs(props);
    const router = useRouter();
    const routeLocale = useRouteLocale();
    const searchIndex2 = useSearchIndex();
    const input = ref(null);
    const isActive = ref(false);
    const query = ref("");
    const locale = computed(() => locales2.value[routeLocale.value] ?? {});
    const suggestions = useSearchSuggestions({
      searchIndex: searchIndex2,
      routeLocale,
      query,
      maxSuggestions: maxSuggestions2
    });
    const { focusIndex, focusNext, focusPrev } = useSuggestionsFocus(suggestions);
    useHotKeys({ input, hotKeys: hotKeys2 });
    const showSuggestions = computed(() => isActive.value && !!suggestions.value.length);
    const onArrowUp = () => {
      if (!showSuggestions.value) {
        return;
      }
      focusPrev();
    };
    const onArrowDown = () => {
      if (!showSuggestions.value) {
        return;
      }
      focusNext();
    };
    const goTo = (index2) => {
      if (!showSuggestions.value) {
        return;
      }
      const suggestion = suggestions.value[index2];
      if (!suggestion) {
        return;
      }
      router.push(suggestion.link).then(() => {
        query.value = "";
        focusIndex.value = 0;
      });
    };
    return () => h("form", {
      class: "search-box",
      role: "search"
    }, [
      h("input", {
        ref: input,
        type: "search",
        placeholder: locale.value.placeholder,
        autocomplete: "off",
        spellcheck: false,
        value: query.value,
        onFocus: () => isActive.value = true,
        onBlur: () => isActive.value = false,
        onInput: (event) => query.value = event.target.value,
        onKeydown: (event) => {
          switch (event.key) {
            case "ArrowUp": {
              onArrowUp();
              break;
            }
            case "ArrowDown": {
              onArrowDown();
              break;
            }
            case "Enter": {
              event.preventDefault();
              goTo(focusIndex.value);
              break;
            }
          }
        }
      }),
      showSuggestions.value && h("ul", {
        class: "suggestions",
        onMouseleave: () => focusIndex.value = -1
      }, suggestions.value.map(({ link, title, header }, index2) => h("li", {
        class: [
          "suggestion",
          {
            focus: focusIndex.value === index2
          }
        ],
        onMouseenter: () => focusIndex.value = index2,
        onMousedown: () => goTo(index2)
      }, h("a", {
        href: link,
        onClick: (event) => event.preventDefault()
      }, [
        h("span", {
          class: "page-title"
        }, title),
        header && h("span", { class: "page-header" }, `> ${header}`)
      ]))))
    ]);
  }
});
const vars$4 = "";
const search = "";
const locales$1 = {};
const hotKeys = [{ "key": "s", "ctrl": true }];
const maxSuggestions = 5;
const clientConfig4 = defineClientConfig({
  enhance({ app }) {
    app.component("SearchBox", (props) => h(SearchBox, {
      locales: locales$1,
      hotKeys,
      maxSuggestions,
      ...props
    }));
  }
});
const vars$3 = "";
const mediumZoom = "";
const clientConfig5 = defineClientConfig({
  enhance({ app, router }) {
    return;
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress$1.isStarted();
    n2 = clamp(n2, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n2 === 1 ? null : n2;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress$1.status;
    if (!n2) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress$1.set(n2);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name2) {
    const style = document.body.style;
    if (name2 in style)
      return name2;
    let i2 = cssPrefixes.length;
    const capName = name2.charAt(0).toUpperCase() + name2.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name2;
  }
  function getStyleProp(name2) {
    name2 = camelCase(name2);
    return cssProps[name2] ?? (cssProps[name2] = getVendorProp(name2));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name2) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name2 + " ") >= 0;
};
const addClass = (element, name2) => {
  const oldList = classList(element);
  const newList = oldList + name2;
  if (hasClass(oldList, name2))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name2) => {
  const oldList = classList(element);
  if (!hasClass(element, name2))
    return;
  const newList = oldList.replace(" " + name2 + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const vars$2 = "";
const nprogress = "";
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
const clientConfig6 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const clientConfig7 = defineClientConfig({
  setup() {
    return;
  }
});
const vars$1 = "";
const externalLinkIcon = "";
const svg = h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h("span", [
      svg,
      h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = {};
const clientConfig8 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h(ExternalLinkIcon, { locales }));
  }
});
const clientConfig9 = {
  enhance: ({ app }) => {
  }
};
const clientConfig10 = {
  enhance: ({ app }) => {
  }
};
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
const vars = "";
const backToTop = "";
const BackToTop = defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = ref(0);
    const show = computed(() => scrollTop.value > 300);
    const onScroll = debounce(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => h(Transition, {
      name: "back-to-top"
    }, () => show.value ? backToTopEl : null);
  }
});
const clientConfig11 = defineClientConfig({
  rootComponents: [BackToTop]
});
function useInitCopyBtn() {
  const codeNodes = ref([]);
  const addCopyBtnToCodeNode = () => {
    codeNodes.value.forEach((node) => {
      node.style.position = "relative";
      const btn = document.createElement("span");
      btn.className = "code-copy-btn";
      btn.style.position = "absolute";
      btn.style.zIndex = "20";
      btn.style.top = "4px";
      btn.style.right = "10px";
      btn.style.display = "none";
      btn.style.padding = "0 10px 0 10px";
      btn.style.borderRadius = "4px";
      btn.style.cursor = "pointer";
      btn.innerHTML = '<span class="copied">copied</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path></g></svg>';
      const icon = btn.querySelector("svg");
      icon.style.width = "20px";
      icon.style.verticalAlign = "middle";
      const copied = btn.querySelector(".copied");
      copied.style.verticalAlign = "middle";
      copied.style.fontSize = "12px";
      copied.style.display = "none";
      copied.style.marginRight = "4px";
      handleElement(btn);
      node.appendChild(btn);
      node.addEventListener("mouseenter", () => {
        btn.style.display = "block";
      });
      node.addEventListener("mouseleave", () => {
        btn.style.display = "none";
      });
    });
  };
  const initCopyBtn = () => {
    const nodes = document.querySelectorAll('div[class*="language-"]');
    codeNodes.value = nodes;
    addCopyBtnToCodeNode();
  };
  return { codeNodes, initCopyBtn };
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch (_a2) {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function handleElement(el) {
  el.addEventListener("click", () => {
    const parent = el.parentElement;
    if (!parent) {
      return;
    }
    const isShell = parent.classList.contains("language-sh") || parent.classList.contains("language-bash");
    let { innerText: text = "" } = parent;
    if (isShell) {
      text = text.replace(/^ *\$ /gm, "");
    }
    copyToClipboard(text).then(() => {
      const copied = el.querySelector(".copied");
      copied.style.display = "inline-block";
      setTimeout(() => {
        copied.style.display = "none";
      }, 3e3);
    });
  });
}
async function applyClientSetup$1() {
  const { initCopyBtn } = useInitCopyBtn();
  onMounted(() => {
    setTimeout(() => {
      initCopyBtn();
    }, 500);
  });
}
const clientConfig12 = defineClientConfig({
  setup() {
    applyClientSetup$1();
  }
});
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  const repoType = resolveRepoType(docsRepo);
  let pattern;
  if (editLinkPattern) {
    pattern = editLinkPattern;
  } else if (repoType !== null) {
    pattern = editLinkPatterns[repoType];
  }
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
function createOneColor() {
  const tagColorArr = [
    "#e15b64",
    "#f47e60",
    "#f8b26a",
    "#abbd81",
    "#849b87",
    "#e15b64",
    "#f47e60",
    "#f8b26a",
    "#f26d6d",
    "#67cc86",
    "#fb9b5f",
    "#3498db"
  ];
  const index2 = Math.floor(Math.random() * tagColorArr.length);
  return tagColorArr[index2];
}
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: "top"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const Badge_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/global/Badge.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__file", "Badge.vue"]]);
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "Xicons",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: ""
    },
    iconPosition: {
      type: String,
      default: "left"
    },
    iconSize: {
      type: [String, Number],
      default: 18
    },
    color: {
      type: String,
      default: "inherit"
    },
    text: {
      type: String,
      default: ""
    },
    textSize: {
      type: [String, Number],
      default: "14"
    },
    link: {
      type: String,
      default: "javascript:void(0)"
    },
    target: {
      type: String,
      default: "_self"
    }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const slots = useSlots();
    const { icon, iconSize, color, textSize } = toRefs(props);
    const iconStyle = computed(() => {
      const style = {
        width: `${iconSize.value}px`,
        height: `${iconSize.value}px`,
        fontSize: `${iconSize.value}px`,
        color: color.value
      };
      return style;
    });
    const textStyle = computed(() => {
      return { color: color.value, fontSize: `${textSize.value}px` };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.link !== "javascript:void(0)" || (__props.text || unref(slots).default)) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: ["xicon-container", __props.iconPosition]
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(icons[unref(icon)]), {
            class: "xicon-icon",
            style: iconStyle.value
          }, null), _parent);
        }, _push, _parent);
        if (__props.text || unref(slots).default) {
          _push(`<span class="xicon-content" style="${ssrRenderStyle(textStyle.value)}">`);
          ssrRenderSlot(_ctx.$slots, "default", {}, () => {
            _push(`${ssrInterpolate(__props.text)}`);
          }, _push, _parent);
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({ class: "xicon-container" }, _attrs))}>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(icons[unref(icon)]), {
          style: iconStyle.value,
          onClick: ($event) => emits("click")
        }, null), _parent);
        _push(`</span>`);
      }
    };
  }
});
const Xicons_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/global/Xicons.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const Xicons = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__file", "Xicons.vue"]]);
const _sfc_main$F = defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = ref(-1);
    const tabRefs = ref([]);
    onBeforeUpdate(() => {
      tabRefs.value = [];
    });
    const activateNext = (i2 = activeIndex.value) => {
      if (i2 < tabRefs.value.length - 1) {
        activeIndex.value = i2 + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i2 = activeIndex.value) => {
      if (i2 > 0) {
        activeIndex.value = i2 - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i2) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i2;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i2);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i2);
      }
    };
    return () => {
      var _a2;
      const items = (((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex(
          (vnode) => vnode.props.active === "" || vnode.props.active === true
        );
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i2) => {
          vnode.props.active = i2 === activeIndex.value;
        });
      }
      return h("div", { class: "code-group" }, [
        h(
          "div",
          { class: "code-group__nav" },
          h(
            "ul",
            { class: "code-group__ul" },
            items.map((vnode, i2) => {
              const isActive = i2 === activeIndex.value;
              return h(
                "li",
                { class: "code-group__li" },
                h(
                  "button",
                  {
                    ref: (element) => {
                      if (element) {
                        tabRefs.value[i2] = element;
                      }
                    },
                    class: {
                      "code-group__nav-tab": true,
                      "code-group__nav-tab-active": isActive
                    },
                    ariaPressed: isActive,
                    ariaExpanded: isActive,
                    onClick: () => activeIndex.value = i2,
                    onKeydown: (e) => keyboardHandler(e, i2)
                  },
                  h(
                    Xicons,
                    {
                      icon: "Code",
                      text: vnode.props.title
                    }
                  )
                )
              );
            })
          )
        ),
        items
      ]);
    };
  }
});
const CodeGroup_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/global/CodeGroup.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const CodeGroup = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__file", "CodeGroup.vue"]]);
const _sfc_main$E = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "magic-card" }, _attrs))}><span class="magic-card__bg"></span>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/global/MagicCard.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const MagicCard = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$b], ["__file", "MagicCard.vue"]]);
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VuePreview",
  __ssrInlineRender: true,
  props: ["component"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "vue-preview-container" }, _attrs))}>`);
      if (__props.component !== "undefined") {
        _push(`<div class="preview-container">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.component), null, null), _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VuePreview_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/global/VuePreview.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const VuePreview = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__file", "VuePreview.vue"]]);
const __default__$1 = defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const CodeGroupItem_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const CodeGroupItem = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__file", "CodeGroupItem.vue"]]);
const GlobalComponents = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Badge,
  CodeGroup,
  CodeGroupItem,
  MagicCard,
  VuePreview,
  Xicons
}, Symbol.toStringTag, { value: "Module" }));
function registerGlobalComponents(app) {
  Object.keys(GlobalComponents).forEach((key) => {
    app.component(key, GlobalComponents[key]);
  });
}
function resolveSearchComponent(app) {
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    return SearchComponent ? h(SearchComponent) : null;
  });
}
const throttle = (func, wait = 500) => {
  let timer;
  return (...args) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      func.apply(func, args);
      timer = null;
    }, wait);
  };
};
class MouseMove {
  constructor() {
    this.cards = [];
  }
  init() {
    this.getCardNodes();
    this.initMouseMoveObserver();
  }
  initMouseMoveObserver() {
    window.removeEventListener("mousemove", () => {
    });
    window.addEventListener("mousemove", throttle((event) => {
      const x = event.pageX;
      const y2 = event.pageY;
      this._setMouseLocationToCard(x, y2);
    }, 50));
  }
  getCardNodes() {
    const cards = document.querySelectorAll(".magic-card");
    this.cards = cards;
    cards.forEach((card) => {
      card.setAttribute("data-x", card.offsetLeft);
      card.setAttribute("data-y", card.offsetTop);
      card.setAttribute("data-width", card.clientWidth);
      card.setAttribute("data-height", card.clientHeight);
    });
  }
  _setMouseLocationToCard(mouseX, mouseY) {
    this.cards.forEach((card) => {
      const { x: cardX, y: cardY, width, height } = card.dataset;
      const x = Math.floor(mouseX - cardX);
      const y2 = Math.floor(mouseY - cardY);
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y2}px`);
    });
  }
}
const mouseMove = new MouseMove();
function useMagicCard() {
  const initMagicCard = () => {
    mouseMove.init();
  };
  return { initMagicCard };
}
ref(false);
const useMobileMenus = () => {
  const isOpenMobileMenus = ref(false);
  const toggleMobileMenus = (to) => {
    isOpenMobileMenus.value = typeof to === "boolean" ? to : !isOpenMobileMenus.value;
  };
  return { isOpenMobileMenus, toggleMobileMenus };
};
const useResolveRouteWithRedirect = (...args) => {
  const router = useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect({
    hash: route.hash,
    query: route.query,
    params: route.params,
    ...resolvedRedirectObj
  });
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
const catalogSymbol = Symbol("catalog");
const usePageCatalog = () => {
  const catalog = inject(catalogSymbol);
  if (!catalog) {
    throw new Error("usePageCatalog() is called without provider.");
  }
  return catalog;
};
function resolveCatalog() {
  const page = usePageData$1();
  return headersToCatalog(page.value.headers);
}
const headerToCatalogItem = (header) => ({
  text: header.title,
  link: `#${header.slug}`,
  level: header.level,
  children: headersToCatalog(header.children)
});
const headersToCatalog = (headers) => headers.map((header) => headerToCatalogItem(header));
const direction = ref("");
function useScrollDirection() {
  let startY = 0, endY = 0;
  onMounted(() => {
    window.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      startY = Number(touch.pageY);
    });
    window.addEventListener("touchmove", throttle((e) => {
      const touch = e.touches[0];
      endY = touch.pageY;
      if (endY - startY < 0) {
        direction.value = "top";
      } else if (endY - startY > 0) {
        direction.value = "bottom";
      } else {
        direction.value = "";
      }
      startY = endY;
    }, 300));
  });
  return { direction };
}
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const useSeriesData = () => {
  const isOpenSeries = ref(false);
  const frontmatter = usePageFrontmatter();
  const seriesItems = useSeriesItems();
  const catalog = usePageCatalog();
  const isShowSeries = computed(() => seriesItems.value.length > 0 && isOpenSeries);
  const isShowCatalog = computed(() => catalog.value.length > 0 && frontmatter.value.home !== true);
  const toggleSeries = (to) => {
    isOpenSeries.value = typeof to === "boolean" ? to : !isOpenSeries.value;
    document.body.style.overflowY = isOpenSeries.value ? "hidden" : "auto";
  };
  return { isOpenSeries, isShowSeries, isShowCatalog, toggleSeries };
};
const seriesItemsSymbol = Symbol("seriesItems");
const useSeriesItems = () => {
  const seriesItems = inject(seriesItemsSymbol);
  if (!seriesItems) {
    throw new Error("useSeriesItems() is called without provider.");
  }
  return seriesItems;
};
const resolveSeriesItems = (frontmatter, themeLocal, series) => {
  var _a2;
  const { series: autoSeries } = usePageData();
  let seriesConfig = (_a2 = themeLocal.series) !== null && _a2 !== void 0 ? _a2 : {};
  seriesConfig = {
    ...autoSeries,
    ...seriesConfig
  };
  if (frontmatter.home) {
    return [];
  }
  if (isPlainObject(seriesConfig)) {
    return resolveMultiSeriesItems(seriesConfig);
  }
  return [];
};
const resolveArraySeriesItems = (seriesConfig) => {
  const handleChildItem = (item) => {
    let childItem;
    if (isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    return childItem;
  };
  return seriesConfig.map((item) => {
    if (isString(item)) {
      return useNavLink(item);
    }
    return {
      ...item,
      children: item.children.map(handleChildItem)
    };
  });
};
const resolveMultiSeriesItems = (seriesConfig) => {
  var _a2;
  const route = useRoute();
  const seriesPath = resolveLocalePath(seriesConfig, decodeURIComponent(route.path));
  const matchedSeriesConfig = (_a2 = seriesConfig[seriesPath]) !== null && _a2 !== void 0 ? _a2 : [];
  return resolveArraySeriesItems(matchedSeriesConfig);
};
const isLetterOrNumberReg = (str) => {
  return /^[0-9a-zA-Z]+$/.test(str);
};
const isAllChineseStr = (str) => {
  return /^[\u4E00-\u9FA5]+$/.test(str);
};
const splitStringByNumber = (str, sortByNumericalSize = false) => {
  let strArr = [];
  const REG_STRING_NUMBER_PARTS = /\d+|\D+/g;
  const arr = str.match(REG_STRING_NUMBER_PARTS);
  for (let i2 = 0; i2 < arr.length; i2++) {
    const splitStr = arr[i2];
    if (isNaN(splitStr)) {
      strArr = strArr.concat(splitStr.split(""));
    } else {
      if (!sortByNumericalSize) {
        strArr = strArr.concat(splitStr.split(""));
      } else {
        strArr.push(splitStr);
      }
    }
  }
  return strArr;
};
const compare = (a, b, sortByNumericalSize = true) => {
  if (isLetterOrNumberReg(a) && isLetterOrNumberReg(b)) {
    return a.localeCompare(b, "zh-Hans-CN", { numeric: true });
  }
  if (isAllChineseStr(a) && isAllChineseStr(b)) {
    return a.localeCompare(b, "zh-Hans-CN", { numeric: true });
  }
  const arrA = splitStringByNumber(a, sortByNumericalSize);
  const arrB = splitStringByNumber(b, sortByNumericalSize);
  let result = 0;
  const length = Math.min(arrA.length, arrB.length);
  for (let i2 = 0; i2 < length; i2++) {
    const charA = arrA[i2];
    const charB = arrB[i2];
    if (!isAllChineseStr(charA) && isAllChineseStr(charB)) {
      return -1;
    }
    if (isAllChineseStr(charA) && !isAllChineseStr(charB)) {
      return 1;
    }
    if (isAllChineseStr(charA) && isAllChineseStr(charB)) {
      result = charA.localeCompare(charB, "zh-Hans-CN");
    } else {
      result = charA.localeCompare(charB, "zh-Hans-CN", { numeric: true });
    }
    if (result !== 0) {
      return result;
    }
  }
  if (arrA.length > arrB.length)
    return 1;
  if (arrA.length < arrB.length)
    return -1;
  return 0;
};
function sortSeries(arr) {
  const a = arr.sort((a2, b) => {
    if (a2.children)
      sortSeries(a2.children);
    if (b.children)
      sortSeries(b.children);
    return compare(a2.text, b.text, true);
  });
  return a;
}
function useSortSeries() {
  return { sortSeries };
}
const useThemeLocaleData = () => useThemeLocaleData$1();
function applyClientSetup() {
  const themeLocal = useThemeLocaleData();
  usePageData();
  const frontmatter = usePageFrontmatter();
  const seriesItems = computed(() => resolveSeriesItems(frontmatter.value, themeLocal.value));
  provide(seriesItemsSymbol, seriesItems);
  const catalog = computed(() => resolveCatalog());
  provide(catalogSymbol, catalog);
}
const index$1 = "";
const index = "";
function applyClientEnhance({ app }) {
  registerGlobalComponents(app);
  resolveSearchComponent(app);
}
function formatISODate(ISODate) {
  const dateStr = ISODate.replace("T", " ").replace("Z", "").split(".")[0];
  const formatDateStr = dateStr.replace(/(\s00:00:00)$/, "");
  return formatDateStr;
}
const _sfc_main$B = defineComponent({
  name: "PageInfo",
  props: {
    pageData: {
      type: Object,
      default: () => ({})
    },
    currentCategory: {
      type: String,
      default: ""
    },
    currentTag: {
      type: String,
      default: ""
    },
    hideViews: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { pageData: pageData2, hideViews } = toRefs(props);
    const { solution, options } = useComment();
    const themeData2 = useThemeLocaleData$1();
    const author2 = computed(
      () => {
        var _a2, _b2;
        return ((_b2 = (_a2 = pageData2 == null ? void 0 : pageData2.value) == null ? void 0 : _a2.frontmatter) == null ? void 0 : _b2.author) || themeData2.value.author || "";
      }
    );
    const date = computed(() => {
      var _a2, _b2;
      const d = (_b2 = (_a2 = pageData2 == null ? void 0 : pageData2.value) == null ? void 0 : _a2.frontmatter) == null ? void 0 : _b2.date;
      return d ? formatISODate(d) : "";
    });
    const categories = computed(
      () => {
        var _a2, _b2;
        return ((_b2 = (_a2 = pageData2 == null ? void 0 : pageData2.value) == null ? void 0 : _a2.frontmatter) == null ? void 0 : _b2.categories) || [];
      }
    );
    const tags = computed(() => {
      var _a2, _b2;
      return ((_b2 = (_a2 = pageData2 == null ? void 0 : pageData2.value) == null ? void 0 : _a2.frontmatter) == null ? void 0 : _b2.tags) || [];
    });
    const showPageInfo = computed(
      () => !!author2.value || !!date.value || !!(categories.value && categories.value.length > 0) || !!(tags.value && tags.value.length > 0)
    );
    const showValineViews = computed(() => {
      return solution.value === "valine" && options.value.visitor != false && !hideViews.value;
    });
    const showWalineViews = computed(() => {
      return solution.value === "waline" && options.value.pageview != false && !hideViews.value;
    });
    return {
      author: author2,
      date,
      categories,
      tags,
      showPageInfo,
      solution,
      showValineViews,
      showWalineViews,
      convertToPinyin
    };
  }
});
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Xicons = resolveComponent("Xicons");
  const _component_ValineViews = resolveComponent("ValineViews");
  const _component_WalineViews = resolveComponent("WalineViews");
  if (_ctx.showPageInfo) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-info" }, _attrs))}>`);
    if (!!_ctx.author) {
      _push(ssrRenderComponent(_component_Xicons, {
        icon: "User",
        text: _ctx.author
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if (!!_ctx.date) {
      _push(ssrRenderComponent(_component_Xicons, {
        icon: "Calendar",
        text: _ctx.date
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if (!!_ctx.categories && _ctx.categories.length > 0) {
      _push(ssrRenderComponent(_component_Xicons, { icon: "Folder" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.categories.join(" "))}`);
          } else {
            return [
              createTextVNode(
                toDisplayString(_ctx.categories.join(" ")),
                1
                /* TEXT */
              )
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    if (!!_ctx.tags && _ctx.tags.length > 0) {
      _push(ssrRenderComponent(_component_Xicons, { icon: "Tag" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.tags.join(" "))}`);
          } else {
            return [
              createTextVNode(
                toDisplayString(_ctx.tags.join(" ")),
                1
                /* TEXT */
              )
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    if (_ctx.showValineViews || _ctx.showWalineViews) {
      _push(ssrRenderComponent(_component_Xicons, null, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="xicon-icon" style="${ssrRenderStyle({ "width": "18px", "height": "18px", "font-size": "18px", "color": "inherit" })}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"${_scopeId}><g fill="none"${_scopeId}><path d="M1.974 6.659a.5.5 0 0 1-.948-.317c-.01.03 0-.001 0-.001a1.633 1.633 0 0 1 .062-.162c.04-.095.099-.226.18-.381c.165-.31.422-.723.801-1.136C2.834 3.827 4.087 3 6 3c1.913 0 3.166.827 3.931 1.662a5.479 5.479 0 0 1 .98 1.517l.046.113c.003.008.013.06.023.11L11 6.5s.084.333-.342.474a.5.5 0 0 1-.632-.314v-.003l-.006-.016a3.678 3.678 0 0 0-.172-.376a4.477 4.477 0 0 0-.654-.927C8.584 4.673 7.587 4 6 4s-2.584.673-3.194 1.338a4.477 4.477 0 0 0-.795 1.225a2.209 2.209 0 0 0-.03.078l-.007.018zM6 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4zM5 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0z" fill="currentColor"${_scopeId}></path></g></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "xicon-icon",
                style: { "width": "18px", "height": "18px", "font-size": "18px", "color": "inherit" },
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                viewBox: "0 0 12 12"
              }, [
                createVNode("g", { fill: "none" }, [
                  createVNode("path", {
                    d: "M1.974 6.659a.5.5 0 0 1-.948-.317c-.01.03 0-.001 0-.001a1.633 1.633 0 0 1 .062-.162c.04-.095.099-.226.18-.381c.165-.31.422-.723.801-1.136C2.834 3.827 4.087 3 6 3c1.913 0 3.166.827 3.931 1.662a5.479 5.479 0 0 1 .98 1.517l.046.113c.003.008.013.06.023.11L11 6.5s.084.333-.342.474a.5.5 0 0 1-.632-.314v-.003l-.006-.016a3.678 3.678 0 0 0-.172-.376a4.477 4.477 0 0 0-.654-.927C8.584 4.673 7.587 4 6 4s-2.584.673-3.194 1.338a4.477 4.477 0 0 0-.795 1.225a2.209 2.209 0 0 0-.03.078l-.007.018zM6 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4zM5 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0z",
                    fill: "currentColor"
                  })
                ])
              ]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.showValineViews) {
              _push2(ssrRenderComponent(_component_ValineViews, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.showWalineViews) {
              _push2(ssrRenderComponent(_component_WalineViews, {
                path: _ctx.pageData.path
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.showValineViews ? (openBlock(), createBlock(_component_ValineViews, { key: 0 })) : createCommentVNode("v-if", true),
              _ctx.showWalineViews ? (openBlock(), createBlock(_component_WalineViews, {
                key: 1,
                path: _ctx.pageData.path
              }, null, 8, ["path"])) : createCommentVNode("v-if", true)
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/PageInfo.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const PageInfo = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$a], ["__file", "PageInfo.vue"]]);
const _sfc_main$A = defineComponent({
  components: { PageInfo },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const { solution } = useComment();
    return { solution };
  }
});
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MagicCard = resolveComponent("MagicCard");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_PageInfo = resolveComponent("PageInfo");
  _push(ssrRenderComponent(_component_MagicCard, mergeProps({ class: "post-item-container" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="title"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_RouterLink, {
          to: _ctx.data.path
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.data.title)}`);
            } else {
              return [
                createTextVNode(
                  toDisplayString(_ctx.data.title),
                  1
                  /* TEXT */
                )
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_PageInfo, {
          "page-data": _ctx.data,
          "hide-views": _ctx.solution === "valine"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "title" }, [
            createVNode(_component_RouterLink, {
              to: _ctx.data.path
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString(_ctx.data.title),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["to"])
          ]),
          createVNode(_component_PageInfo, {
            "page-data": _ctx.data,
            "hide-views": _ctx.solution === "valine"
          }, null, 8, ["page-data", "hide-views"])
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/PostItem.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const PostItem = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$9], ["__file", "PostItem.vue"]]);
const _sfc_main$z = defineComponent({
  components: { PostItem },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    return {};
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PostItem = resolveComponent("PostItem");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "post-list-container" }, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.data, (item, index2) => {
    _push(ssrRenderComponent(_component_PostItem, {
      key: index2,
      data: item
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/PostList.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const PostList = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$8], ["__file", "PostList.vue"]]);
var ModeIcon = /* @__PURE__ */ ((ModeIcon2) => {
  ModeIcon2["auto"] = "BrightnessContrast";
  ModeIcon2["dark"] = "Moon";
  ModeIcon2["light"] = "Sun";
  return ModeIcon2;
})(ModeIcon || {});
var EMode = /* @__PURE__ */ ((EMode2) => {
  EMode2[EMode2["auto"] = 0] = "auto";
  EMode2[EMode2["dark"] = 1] = "dark";
  EMode2[EMode2["light"] = 2] = "light";
  return EMode2;
})(EMode || {});
const APPEARANCE_KEY = "vuepress-reco-color-scheme";
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "ToggleDarkModeButton",
  __ssrInlineRender: true,
  setup(__props) {
    const themeConfig = useThemeLocaleData();
    const mode = ref(themeConfig.value.colorMode || "auto");
    const icon = computed(() => {
      return ModeIcon[mode.value];
    });
    let toggleMode = () => {
      const currModeIndex = EMode[mode.value];
      const nextModeIndex = currModeIndex === 2 ? 0 : currModeIndex + 1;
      mode.value = EMode[nextModeIndex];
    };
    onMounted(() => {
      const userPreference = localStorage[APPEARANCE_KEY];
      if (userPreference) {
        mode.value = userPreference;
      }
      const classList2 = document.documentElement.classList;
      function setDarkClass(dark) {
        classList2.toggle("dark", dark);
      }
      function handleModeChange(m2) {
        if (m2 === "auto") {
          setDarkClass(darkMedia.matches);
          localStorage.removeItem(APPEARANCE_KEY);
        } else {
          setDarkClass(m2 === "dark");
          localStorage[APPEARANCE_KEY] = m2;
        }
      }
      const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
      darkMedia.onchange = (e) => {
        if (mode.value === "auto") {
          setDarkClass(e.matches);
        }
      };
      watch(mode, handleModeChange);
      handleModeChange(mode.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Xicons = resolveComponent("Xicons");
      _push(ssrRenderComponent(_component_Xicons, mergeProps({
        icon: icon.value,
        "icon-size": "20",
        class: "btn-toggle-dark-mode",
        onClick: ($event) => unref(toggleMode)()
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const ToggleDarkModeButton = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__file", "ToggleDarkModeButton.vue"]]);
const _sfc_main$x = defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const routeLocale = useRouteLocale();
    const siteLocal = useSiteLocaleData();
    const themeLocal = useThemeLocaleData();
    const { item } = toRefs(props);
    const hasHttpProtocol = computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocal = computed(
      () => isLinkMailto(item.value.link) || isLinkTel(item.value.link)
    );
    const linkTarget = computed(() => {
      if (hasNonHttpProtocal.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const isRouterLink = computed(
      () => !hasHttpProtocol.value && !hasNonHttpProtocal.value && !isBlankTarget.value
    );
    const linkRel = computed(() => {
      if (hasNonHttpProtocal.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = computed(
      () => item.value.ariaLabel || item.value.text
    );
    const shouldBeActiveInSubpath = computed(() => {
      const localeKeys = Object.keys(siteLocal.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== themeLocal.value.home || routeLocale.value;
    });
    const isActiveInSubpath = computed(() => {
      if (!isRouterLink.value || !shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    return {
      isActiveInSubpath,
      isBlankTarget,
      isRouterLink,
      linkRel,
      linkTarget,
      linkAriaLabel
    };
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_Xicons = resolveComponent("Xicons");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  if (_ctx.isRouterLink) {
    _push(ssrRenderComponent(_component_RouterLink, mergeProps({
      class: ["link", { "router-link-active": _ctx.isActiveInSubpath }],
      to: _ctx.item.link,
      "aria-label": _ctx.linkAriaLabel
    }, _ctx.$attrs, {
      key: `${_ctx.item.link}-router`
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
          _push2(ssrRenderComponent(_component_Xicons, {
            icon: _ctx.item.icon,
            text: _ctx.item.text
          }, null, _parent2, _scopeId));
          ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "before"),
            createVNode(_component_Xicons, {
              icon: _ctx.item.icon,
              text: _ctx.item.text
            }, null, 8, ["icon", "text"]),
            renderSlot(_ctx.$slots, "after")
          ];
        }
      }),
      _: 3
      /* FORWARDED */
    }, _parent));
  } else {
    _push(`<a${ssrRenderAttrs(mergeProps({
      class: "link",
      href: _ctx.item.link,
      target: _ctx.linkTarget,
      rel: _ctx.linkRel,
      "aria-label": _ctx.linkAriaLabel
    }, _ctx.$attrs, {
      key: `${_ctx.item.link}-a`
    }, _attrs))}>`);
    ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
    _push(ssrRenderComponent(_component_Xicons, {
      icon: _ctx.item.icon,
      text: _ctx.item.text
    }, null, _parent));
    if (_ctx.isBlankTarget) {
      _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
    } else {
      _push(`<!---->`);
    }
    ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
    _push(`</a>`);
  }
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Link.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const Link = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$7], ["__file", "Link.vue"]]);
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "DropdownTransition",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
    };
  }
});
const DropdownTransition_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const DropdownTransition = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__file", "DropdownTransition.vue"]]);
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = toRefs(props);
    const dropdownAriaLabel = computed(
      () => item.value.ariaLabel || item.value.text
    );
    const open = ref(false);
    const route = useRoute();
    watch(
      () => route.path,
      () => {
        open.value = false;
      }
    );
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    const inButton = ref(false);
    const inDropdown = ref(false);
    const handleDropdownMouseEnter = () => {
      if (isMobile.value)
        return;
      inDropdown.value = true;
    };
    const handleDropdownMouseLeave = () => {
      if (isMobile.value)
        return;
      inDropdown.value = false;
      setTimeout(() => {
        if (inButton.value || inDropdown.value) {
          open.value = true;
        } else {
          open.value = false;
        }
      }, 200);
    };
    const isMobile = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Xicons = resolveComponent("Xicons");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["dropdown-link", { open: open.value }]
      }, _attrs))}><button class="dropdown-link__title" type="button"${ssrRenderAttr("aria-label", dropdownAriaLabel.value)}>`);
      _push(ssrRenderComponent(_component_Xicons, {
        class: "title",
        icon: unref(item).icon,
        text: unref(item).text
      }, null, _parent));
      if (unref(item).text) {
        _push(`<span class="arrow down"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button><button class="dropdown-link--mobile__title" type="button"${ssrRenderAttr("aria-label", dropdownAriaLabel.value)}><span class="title">`);
      _push(ssrRenderComponent(_component_Xicons, {
        icon: unref(item).icon,
        text: unref(item).text
      }, null, _parent));
      _push(`</span>`);
      if (unref(item).text) {
        _push(`<span class="${ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
      _push(ssrRenderComponent(DropdownTransition, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="dropdown-link__container"${_scopeId}><!--[-->`);
            ssrRenderList(unref(item).children, (child, index2) => {
              _push2(`<li class="dropdown-link__item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h5 class="dropdown-link__subtitle"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Xicons, {
                  icon: child.icon,
                  text: child.text
                }, null, _parent2, _scopeId));
                _push2(`</h5><ul class="dropdown-link__subcontainer"${_scopeId}><!--[-->`);
                ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="dropdown-link__subitem"${_scopeId}>`);
                  _push2(ssrRenderComponent(Link, {
                    item: grandchild,
                    onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, unref(item).children) && (open.value = false)
                  }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(ssrRenderComponent(Link, {
                  item: child,
                  onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && (open.value = false)
                }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              withDirectives(createVNode(
                "ul",
                {
                  class: "dropdown-link__container",
                  onMouseenter: handleDropdownMouseEnter,
                  onMouseleave: handleDropdownMouseLeave
                },
                [
                  (openBlock(true), createBlock(
                    Fragment,
                    null,
                    renderList(unref(item).children, (child, index2) => {
                      return openBlock(), createBlock("li", {
                        key: child.link || index2,
                        class: "dropdown-link__item"
                      }, [
                        child.children ? (openBlock(), createBlock(
                          Fragment,
                          { key: 0 },
                          [
                            createVNode("h5", { class: "dropdown-link__subtitle" }, [
                              createVNode(_component_Xicons, {
                                icon: child.icon,
                                text: child.text
                              }, null, 8, ["icon", "text"])
                            ]),
                            createVNode("ul", { class: "dropdown-link__subcontainer" }, [
                              (openBlock(true), createBlock(
                                Fragment,
                                null,
                                renderList(child.children, (grandchild) => {
                                  return openBlock(), createBlock("li", {
                                    key: grandchild.link,
                                    class: "dropdown-link__subitem"
                                  }, [
                                    createVNode(Link, {
                                      item: grandchild,
                                      onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, unref(item).children) && (open.value = false)
                                    }, null, 8, ["item", "onFocusout"])
                                  ]);
                                }),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        )) : (openBlock(), createBlock(Link, {
                          key: 1,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && (open.value = false)
                        }, null, 8, ["item", "onFocusout"]))
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                544
                /* HYDRATE_EVENTS, NEED_PATCH */
              ), [
                [vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/DropdownLink.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const DropdownLink = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__file", "DropdownLink.vue"]]);
const useNavbarSelectLanguage = () => {
  const router = useRouter();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const themeLocal = useThemeLocaleData$1();
  return computed(() => {
    const localePaths = Object.keys(siteLocale.value.locales);
    if (localePaths.length < 2) {
      return [];
    }
    const currentPath = router.currentRoute.value.path;
    const currentFullPath = router.currentRoute.value.fullPath;
    const selectLanguageText = computed(() => {
      return themeLocal.value.selectLanguageText || "选择语言";
    });
    const languageDropdown = {
      icon: "EarthFilled",
      text: selectLanguageText.value,
      children: localePaths.map((targetLocalePath) => {
        var _a2, _b2;
        const targetSiteLocale = ((_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) ?? {};
        const targetThemeLocale = ((_b2 = themeLocal.value.locales) == null ? void 0 : _b2[targetLocalePath]) ?? {};
        const targetLang = `${targetSiteLocale.lang}`;
        const text = targetThemeLocale.selectLanguageName ?? targetLang;
        let link;
        if (targetLang === siteLocale.value.lang) {
          link = currentFullPath;
        } else {
          const targetLocalePage = currentPath.replace(
            routeLocale.value,
            targetLocalePath
          );
          if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
            link = targetLocalePage;
          } else {
            link = targetThemeLocale.home ?? targetLocalePath;
          }
        }
        return {
          text,
          link
        };
      })
    };
    return [languageDropdown];
  });
};
const useNavbarRepo = () => {
  const themeLocal = useThemeLocaleData$1();
  const repo = computed(() => themeLocal.value.repo);
  const repoType = computed(
    () => repo.value ? resolveRepoType(repo.value) : null
  );
  const repoLink = computed(() => {
    if (repoType.value === "GitHub") {
      return `https://github.com/${repo.value}`;
    }
    return repo.value;
  });
  const repoLabel = computed(() => {
    if (!repoLink.value)
      return null;
    if (themeLocal.value.repoLabel)
      return themeLocal.value.repoLabel;
    if (repoType.value === null)
      return "Source";
    return repoType.value;
  });
  return computed(() => {
    if (!repoLink.value || !repoLabel.value) {
      return [];
    }
    return [
      {
        text: repoLabel.value,
        link: repoLink.value
      }
    ];
  });
};
const resolveNavbarItem = (item) => {
  if (isString(item)) {
    return useNavLink(item);
  }
  if (item.children) {
    return {
      ...item,
      children: item.children.map(resolveNavbarItem)
    };
  }
  return item;
};
const useNavbarConfig = () => {
  const themeLocal = useThemeLocaleData$1();
  const { categorySummary } = usePageData();
  const parseCategories = computed(() => {
    var _a2, _b2, _c, _d;
    return [
      {
        text: ((_a2 = themeLocal.value.autoAddCategoryToNavbar) == null ? void 0 : _a2.categoryText) || "Categories",
        children: Object.values(((_b2 = categorySummary == null ? void 0 : categorySummary.categories) == null ? void 0 : _b2.items) || {}).map((c) => ({
          // @ts-ignore
          text: c.label,
          // @ts-ignore
          link: `/categories/${convertToPinyin(c.label)}/1/`
        }))
      },
      {
        text: ((_c = themeLocal.value.autoAddCategoryToNavbar) == null ? void 0 : _c.tagText) || "Tags",
        children: Object.values(((_d = categorySummary == null ? void 0 : categorySummary.tags) == null ? void 0 : _d.items) || {}).map((t2) => ({
          // @ts-ignore
          text: t2.label,
          // @ts-ignore
          link: `/tags/${convertToPinyin(t2.label)}/1/`
        }))
      }
    ];
  });
  return computed(() => {
    var _a2;
    let navItems = [...themeLocal.value.navbar || []];
    if (themeLocal.value.autoAddCategoryToNavbar) {
      navItems.splice(
        ((_a2 = themeLocal.value.autoAddCategoryToNavbar) == null ? void 0 : _a2.location) || 0,
        0,
        ...parseCategories.value
      );
    }
    return navItems.map(resolveNavbarItem);
  });
};
const _sfc_main$u = defineComponent({
  name: "NavbarLinks",
  components: {
    Link,
    DropdownLink
  },
  setup() {
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return {
      navbarLinks
    };
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_DropdownLink = resolveComponent("DropdownLink");
  const _component_Link = resolveComponent("Link");
  if (_ctx.navbarLinks.length) {
    _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar-links" }, _attrs))}><!--[-->`);
    ssrRenderList(_ctx.navbarLinks, (item) => {
      _push(`<div class="navbar-links__item">`);
      if (item.children) {
        _push(ssrRenderComponent(_component_DropdownLink, { item }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Link, { item }, null, _parent));
      }
      _push(`</div>`);
    });
    _push(`<!--]--></nav>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/NavbarLinks.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const NavbarLinks = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$6], ["__file", "NavbarLinks.vue"]]);
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "SiteBrand",
  __ssrInlineRender: true,
  setup(__props) {
    const siteLocale = useSiteLocaleData();
    const routeLocale = useRouteLocale();
    const themeLocal = useThemeLocaleData();
    const siteBrandLink = computed(
      () => themeLocal.value.home || routeLocale.value
    );
    const siteBrandLogo = computed(() => themeLocal.value.logo);
    const siteBrandTitle = computed(() => siteLocale.value.title);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "site-brand" }, _attrs))}>`);
      if (siteBrandLogo.value) {
        _push(`<img class="logo"${ssrRenderAttr("src", unref(withBase)(siteBrandLogo.value))}${ssrRenderAttr("alt", siteBrandTitle.value)}>`);
      } else {
        _push(`<!---->`);
      }
      if (siteBrandTitle.value) {
        _push(ssrRenderComponent(_component_RouterLink, {
          to: siteBrandLink.value,
          class: ["site-name", { "can-hide": siteBrandLogo.value }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(siteBrandTitle.value)}`);
            } else {
              return [
                createTextVNode(
                  toDisplayString(siteBrandTitle.value),
                  1
                  /* TEXT */
                )
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const SiteBrand_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/SiteBrand.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const SiteBrand = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__file", "SiteBrand.vue"]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  emits: ["toggle-menus"],
  setup(__props, { emit: emits }) {
    const seriesItems = useSeriesItems();
    const siteLocale = useSiteLocaleData();
    const routeLocale = useRouteLocale();
    const themeLocal = useThemeLocaleData();
    computed(
      () => themeLocal.value.home || routeLocale.value
    );
    computed(() => themeLocal.value.logo);
    computed(() => siteLocale.value.title);
    const navbar = ref(null);
    const siteBrand = ref(null);
    const linksWrapperMaxWidth = ref(0);
    const linksWrapperStyle = computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const toggleMenus = (bool) => {
      emits("toggle-menus", bool);
    };
    const isMobile = ref(false);
    onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 768;
      const handleLinksWrapWidth = () => {
        var _a2, _b2;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          isMobile.value = true;
          linksWrapperMaxWidth.value = 0;
        } else {
          isMobile.value = false;
          linksWrapperMaxWidth.value = ((_a2 = navbar.value) == null ? void 0 : _a2.offsetWidth) - (((_b2 = siteBrand.value) == null ? void 0 : _b2.offsetWidth) || 0) - 50;
          toggleMenus(false);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", throttle(handleLinksWrapWidth), false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavbarSearch = resolveComponent("NavbarSearch");
      _push(`<header${ssrRenderAttrs(mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar-container",
        style: { top: unref(seriesItems).length > 0 && isMobile.value ? "-4rem" : "0" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(SiteBrand, { class: "nav-item" }, null, _parent));
      _push(`<div class="nav-item navbar-links-wrapper" style="${ssrRenderStyle(linksWrapperStyle.value)}"><div>`);
      _push(ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(NavbarLinks, null, null, _parent));
      _push(ssrRenderComponent(ToggleDarkModeButton, { class: "btn--dark-mode" }, null, _parent));
      _push(ssrRenderComponent(Xicons, {
        class: "btn-toggle-menus",
        icon: "OverflowMenuVertical",
        iconSize: 20,
        onClick: toggleMenus
      }, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Navbar.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__file", "Navbar.vue"]]);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "ToggleSeriesButton",
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props, { emit: emits }) {
    const themeLocal = useThemeLocaleData$1();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "toggle-series-button",
        title: unref(themeLocal).toggleSeries,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/ToggleSeriesButton.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const ToggleSeriesButton = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__file", "ToggleSeriesButton.vue"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "SubNavbar",
  __ssrInlineRender: true,
  emits: ["toggle-series"],
  setup(__props, { emit: emits }) {
    const toggleSeries = () => {
      emits("toggle-series");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        ref: "subnavbar",
        class: "sub-navbar-container"
      }, _attrs))}><span class="nav-item">`);
      _push(ssrRenderComponent(ToggleSeriesButton, { onToggle: toggleSeries }, null, _parent));
      _push(` Series </span></header>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/SubNavbar.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const SubNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__file", "SubNavbar.vue"]]);
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (route, link) => {
  if (link === void 0) {
    return false;
  }
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveItem$1 = (route, item) => {
  if (isActiveLink(route, item.link)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveItem$1(route, child));
  }
  return false;
};
const togglecollapsible = (e, item) => {
  item.collapsible = !!!item.collapsible;
  const currentNode = e.target.querySelector(".arrow");
  const nextNode = e.target.nextElementSibling;
  if (item.collapsible) {
    currentNode.classList.remove("down");
    currentNode.classList.add("right");
    nextNode.style.display = "none";
  } else {
    currentNode.classList.remove("right");
    currentNode.classList.add("down");
    nextNode.style.display = "block";
  }
};
const renderItem$1 = (item, props) => {
  if (item.link) {
    return h(Link, {
      ...props,
      item
    });
  }
  return h("h5", { ...props, onClick: (e) => togglecollapsible(e, item) }, [
    item.text,
    h("span", {
      class: !!item.collapsible ? "arrow right" : "arrow down"
    })
  ]);
};
const renderChildren$1 = (item) => {
  var _a2;
  if (!((_a2 = item.children) === null || _a2 === void 0 ? void 0 : _a2.length)) {
    return null;
  }
  return h("ul", {
    style: {
      display: !!item.collapsible ? "none" : "block"
    }
  }, item.children.map((child) => h("li", h(SeriesItem, {
    item: child
  }))));
};
const SeriesItem = ({ item }) => {
  const route = useRoute();
  const active = isActiveItem$1(route, item);
  if (item.children) {
    return [
      h("section", {
        class: "series-group series-item"
      }, [
        renderItem$1(item, {
          class: {
            "series-heading": true,
            active
          }
        }),
        renderChildren$1(item)
      ])
    ];
  }
  return [
    renderItem$1(item, {
      class: {
        "series-item": true,
        active
      }
    })
  ];
};
SeriesItem.displayName = "SeriesItem";
SeriesItem.props = {
  item: {
    type: Object,
    required: true
  }
};
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "Series",
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocal = useThemeLocaleData$1();
    const { sortSeries: sortSeries2 } = useSortSeries();
    const seriesItems = useSeriesItems();
    const sortedSeries = computed(() => {
      if (!themeLocal.value.autoSetSeries) {
        return seriesItems.value;
      }
      const series = sortSeries2(seriesItems.value);
      return series;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "series-container" }, _attrs))}>`);
      _push(ssrRenderComponent(SiteBrand, null, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(sortedSeries.value, (item) => {
        _push(ssrRenderComponent(unref(SeriesItem), {
          item,
          key: item.link || item.text
        }, null, _parent));
      });
      _push(`<!--]--></aside>`);
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Series.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const Series = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__file", "Series.vue"]]);
const isActiveItem = (route, item) => {
  if (route.hash === item.link) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveItem(route, child));
  }
  return false;
};
const renderItem = (item, props) => {
  return h("li", {
    ...props
  }, h(Link, {
    class: "page-catalog-item",
    item
  }));
};
const renderChildren = (item) => {
  var _a2;
  if (!((_a2 = item.children) === null || _a2 === void 0 ? void 0 : _a2.length)) {
    return [null];
  }
  return item.children.map((child) => h(CatalogItem, {
    item: child
  }));
};
const CatalogItem = ({ item }) => {
  const route = useRoute();
  const active = isActiveItem(route, item);
  if (item.children && item.children.length > 0) {
    return [
      renderItem(item, {
        class: {
          [`page-catalog-menu-depth_${item.level || 2}`]: true,
          active
        }
      }),
      ...renderChildren(item)
    ];
  }
  return [
    renderItem(item, {
      class: {
        [`page-catalog-menu-depth_${item.level || 2}`]: true,
        active
      }
    })
  ];
};
CatalogItem.displayName = "CatalogItem";
CatalogItem.props = {
  item: {
    type: Object,
    required: true
  }
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "Catalog",
  __ssrInlineRender: true,
  setup(__props) {
    const catalog = usePageCatalog();
    const themeConfig = useThemeLocaleData();
    const catalogTitle = computed(() => {
      return themeConfig.value.catalogTitle || "ON THIS PAGE";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-catalog-container" }, _attrs))}><h5 class="tip">${ssrInterpolate(catalogTitle.value)}</h5><ul><!--[-->`);
      ssrRenderList(unref(catalog), (item) => {
        _push(ssrRenderComponent(unref(CatalogItem), { item }, null, _parent));
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Catalog.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Catalog = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__file", "Catalog.vue"]]);
function useSiteInfo() {
  const siteLocale = useSiteLocaleData();
  const themeLocal = useThemeLocaleData();
  const siteBrandLogo = computed(() => themeLocal.value.logo);
  const siteBrandTitle = computed(() => siteLocale.value.title);
  const sitePassword = computed(() => {
    const _password = themeLocal.value.password;
    if (!_password)
      return [];
    return Array.isArray(_password) ? _password : [_password];
  });
  return { siteBrandLogo, siteBrandTitle, sitePassword };
}
function useHandlePassword$1(sitePassword, emit) {
  const password = ref("");
  const passwordRef = ref(null);
  const lockIcon = ref("Locked");
  const lockText = ref("请输入密码");
  watch(password, (newVal) => {
    if (newVal.length !== 6)
      return;
    if (sitePassword.value.includes(md5(md5(newVal)))) {
      lockIcon.value = "Unlocked";
      lockText.value = "密码正确，请重稍后！";
      setTimeout(() => {
        emit("pass");
      }, 600);
    } else {
      password.value = "";
      lockText.value = "密码错误，请重新输入！";
    }
  });
  const focus = () => {
    passwordRef.value.focus();
  };
  return { password, passwordRef, lockIcon, lockText, focus };
}
const _imports_0$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUxpcfjxsuzNbOC3gOCzcezbl/PWkvnpveKrTPXMmtmTRu/ljumwSdq1geSbP+a8ae+zSurBV/LjrO7Yb+bNlfrrrtmNP/PgdenEWurKhenFdt2rYt/EjPXnu+e9faFjNbWReNq8fdi1hZ1xTuOtVVxBUlIxSGFPX+jGXvHgmu/hn/Hfj96tYe7Yqea7XfXimPLghP334+Cwbvr32N3CiN/Bd+K5fui0Wt2fUeS2U+zOeuO1Y/bmiuPEiuG0bqyKduG5hfvOWaBuWk8sPa6DW++jROfFZfLkl86JV/nuyOzZfvjVY9qkYd20dJ9yXL+YWWxSWcmjbpyQdoyHee7ZfOGsVuTBau3WeOW7V92nUdCSRee3UcaEQuOwVufJk4deQfPOgIpsTt2fR6R/Vtyzd86keNqsab6SX8GYdPWlPPy/VZySeevMYufDeenMZtqkT9KRU/LNYP3aj8imfLCMbdQsG+m+Xem4UurDXtYgF+e2Weq+VRgWb+/KXui7WOWzUxESfO3BWQ8JatIWEduVQdcKCw8PcttQJ+GjSenIZNZfLhcHX9dKKNqXUOnBaN+fR8pEIuO4YdOEPOm0T+/GXNdBJNS6c96jUNIeEsZRJOhyNPbKaedoLeR2OelcJG9wehkaeIN9etQ1HvDOYqqkhdhzNNg6H/jCUv3VWNEIBRUeidl+OPG+UtmjW+GQP9x0OsdeLMsLCPfFXSMOXfAsEcEOEaqBUaWOZU0GRM+wax81jbOgboeFf8izeu6uWaSbfb2ve+OtV9RqMt1rNN2DQt6IN49aOOaiQ7slGmlgblBMb8ovF91YKMcfEF9ujex/M2FkfYeMjJKNfnl3d5wGHpJ7Xu2NQuKxTNBZLseoWb9oOfY7GcE7LWUZSGYEOPevRp+AXDVGinSAi4ZvW60TFUcmU7Cbe7ipdNBGJv7oapJsSV8nUa81NL9GI/R6LbORVbJQOCgueogKJ3ZjXuNCHK4HGn1oYDMfXLp7Pi8LVmsuUKM7LkFXknNiZHtdUdwjFSsuVN8AAAB1dFJOUwAE/hMaDRsI/gH+FPw6/L/+9GT+cS/+7vyP0M0kQbD5w1uI/uf5+v7sTHyU3FvVPLgXvyRJ/aPk1fyq66Vn2NEt/Nv85/7eh2FLzPfvsvX9+N7m8trP7+ntyafrm/OH+Jz59+3Pn3/Mq+qq+NHq5MF4+InD117Lt0kAAAU3SURBVDjLbdV3VJNnFAdgE8gkCQkJS9nInspQRGSIu+496qhard3tySAkIYuEbCBkAAFCwpCN7CkgKGUvBffee1S7z+kXUiL2cP9+zu97733Pe79582YXaFFIAMHFJdqFEBCyCDRv7kLAYGbmMegoN5fo6Gg3AjrG3AwGQ8wBYdaObsfj4pydDx06cuTo0bi4427rHGFzBEJ8ok66bHJ3dr5w4enThoZNm1xOEgIgcwQ6nIj3XHnB+epVobC7qqK5tdHTM/6Ew/8jQTAoOv72SgBWVw/marIkFQboHo+GghCfdmt9eOMWj3tPCzVqjk7B56uJk6qOca8t4T9BZ2eCINahG7d6eLg3ZOVyknU6saKEMzLZWeDl9XM4GgozzQkUEmS51cPTa8v5kSJiQgJRp1CoOUMDZ9MmRj08jjkBnzdBxxWbH/zm9W7kJVENQKKiSM2pH1p1ti3vgefWY6EOINMEQ7fla7WXGjS5yclEIJPDIRLPnMnNedRBo+VvC40BzZwwyHVbPpN5qSHXBHUA5GvaC2i8ie2uQZBpiVgUc8ry63wmzf13/q/JyQkJuqIiXUJCSUkRX9lJ4+VtD15uPX3vIAf0qUAjHDRAokLMF+uIABw0wvXBjiEGCHH98qtVD9uYzNubRzTJJamX023g8J4qtTo3p/kRjZff8eOGNVYQExwHzvhq8iXnTGZ1OndqqrKHSMyabG6l8do6MmL9fA3QzC0cg2nvKC3tu4e6lfkiNfVcYVlZVVVZTyz90j88bUE7Fut00GwabsRgmh+Wlva/g6+qzkxNFQoLC7u7e5A1lA9eTG2BEotysjdA88X+NpVS5Z0WWu3r6pwc8ePUx0KhWNydU3X1N1rpHSW4F+O/2NwAF3xmYyNV/t3CE/31IiuLLzZkisUazeXXteyWO2FgDNcE09Nvnb07zGRfrK+7NijMzDxXmJN1ra7+vYg9fJdUzLWJtJwFx+4C8H1dHf8yAM9Nw4si3vAYq5iLDDTC8MVfyGqy2wtamE0379cPDQ0MDOj4fMX1tzd52o727Oykz43NmAEwpSY7rLOltKnp7cX7938B6vr1589vNtHePFIa4DJj107HkNwuajZ4bJjGFolEtU03btz4o1YkYvNGJwQbSFQ4fP4ycyOUIFVdNdKCsTdaNpstevDsz2e1Ijabp80bp8dSu2YgdH5YhUQiwfRKwzpb730YzWts3Pyqr7+/fzSvOQ3VK5PBk3avh07DbysAWYkhScOUjbfb2lqvXLkykdfXlz+eRu3FyGRTETuCDRBi5bsnQqVC2pSdL6/R6+n08nIslkTB4+msyvNIJHzKzpvgY3iKsHVWgXvgKiSysAxbfBqo4mIsNvb0kyexxQCUdEV4f+NjDZteTlAr39W4iKn0dK6Mrmex5HIGQ6/foE+RISVp0l2rCT4W/71tIHO1t10E0obLpdBJjKQkBomu1wtSZCqVFLxrfkDQzA6AOQasiLSzM5BEFoVComRksBhweBJVABZIF/q7zoJWKyIFAgqFSjVACoWewSCnpFAZYABG+kf5zEALv2BbPB6flkalMoBUEolBlslS4FQqiSQA422Xr7EwweW2tnjwR0iWA2OGUxkkEhhsOwuCoNZ+y7xxZDIro7xcLieTUSgyg8VKTKQIdu/w83WwQJi2N5RgHxi4fz8OlwgguRyFYuDs7HA47+/WB/taQT5uSAQIYhGDXvvDvn17dy5dunDhkiU7F1haHraPcnWAWkA+XfgIM/O1aw8c+H6vES4AoP3BUPTH38K/OmNBlhC2jIMAAAAASUVORK5CYII=";
const name = "vuepress-theme-reco";
const version = "2.0.0-beta.67";
const description = "> TODO: description";
const homepage = "https://github.com/recoluan/vuepress-theme-reco#readme";
const bugs = {
  url: "https://github.com/recoluan/vuepress-theme-reco/issues"
};
const repository = {
  type: "git",
  url: "git+https://github.com/recoluan/vuepress-theme-reco.git"
};
const license = "MIT";
const author = "reco_luan <recoluan@qq.com>";
const main = "lib/node/index.js";
const types = "lib/node/index.d.ts";
const type = "module";
const directories = {
  lib: "lib",
  test: "__tests__"
};
const files = [
  "lib",
  "templates"
];
const publishConfig = {
  access: "public"
};
const dependencies = {
  "@vicons/carbon": "^0.12.0",
  "@vuepress/bundler-vite": "2.0.0-beta.66",
  "@vuepress/bundler-webpack": "2.0.0-beta.66",
  "@vuepress/client": "2.0.0-beta.66",
  "@vuepress/core": "2.0.0-beta.66",
  "@vuepress/plugin-active-header-links": "2.0.0-beta.66",
  "@vuepress/plugin-back-to-top": "2.0.0-beta.66",
  "@vuepress/plugin-container": "2.0.0-beta.66",
  "@vuepress/plugin-external-link-icon": "2.0.0-beta.66",
  "@vuepress/plugin-git": "2.0.0-beta.66",
  "@vuepress/plugin-medium-zoom": "2.0.0-beta.66",
  "@vuepress/plugin-nprogress": "2.0.0-beta.66",
  "@vuepress/plugin-palette": "2.0.0-beta.66",
  "@vuepress/plugin-prismjs": "2.0.0-beta.66",
  "@vuepress/plugin-register-components": "2.0.0-beta.66",
  "@vuepress/plugin-search": "2.0.0-beta.66",
  "@vuepress/plugin-docsearch": "2.0.0-beta.66",
  "@vuepress/plugin-theme-data": "2.0.0-beta.66",
  "@vuepress/shared": "2.0.0-beta.66",
  "@vuepress/utils": "2.0.0-beta.66",
  autoprefixer: "10.4.7",
  postcss: "8.4.14",
  "postcss-each": "1.1.0",
  "postcss-import": "14.0.2",
  tailwindcss: "3.1.6",
  vue: "^3.3.4",
  "vue-router": "^4.2.2",
  "@vuepress-reco/shared": "2.0.0-beta.67",
  "@vuepress-reco/tailwindcss-config": "2.0.0-beta.67",
  "@vuepress-reco/vuepress-plugin-comments": "2.0.0-beta.67",
  "@vuepress-reco/vuepress-plugin-bulletin-popover": "2.0.0-beta.67",
  "@vuepress-reco/vuepress-plugin-code-copy": "2.0.0-beta.67",
  "@vuepress-reco/vuepress-plugin-markdown-task": "2.0.0-beta.67",
  "@vuepress-reco/vuepress-plugin-vue-preview": "2.0.0-beta.67",
  "@vuepress-reco/vuepress-plugin-page": "2.0.0-beta.67"
};
const devDependencies = {
  "eslint-config-vuepress": "3.2.1",
  "eslint-config-vuepress-typescript": "2.2.1",
  prettier: "2.2.1",
  "sort-package-json": "1.44.0"
};
const scripts = {
  test: 'echo "Error: run tests from root" && exit 1',
  build: "tsc --build tsconfig.build.json",
  clean: "rimraf lib *.tsbuildinfo",
  copy: 'cpx "src/**/*.{d.ts,vue,scss,css,svg,png,jpg}" lib'
};
const packageInfo = {
  name,
  version,
  description,
  homepage,
  bugs,
  repository,
  license,
  author,
  main,
  types,
  type,
  directories,
  files,
  publishConfig,
  dependencies,
  devDependencies,
  scripts
};
const _sfc_main$n = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const themeLocal = useThemeLocaleData$1();
    const frontmatter = usePageFrontmatter();
    const { solution, options } = useComment();
    const { version: version2 } = packageInfo;
    const showAccessNumber = computed(() => {
      if (solution.value === "valine")
        return options.value.visitor != false;
      if (solution.value === "waline")
        return options.value.pageview != false;
      return false;
    });
    const copyRight = computed(() => {
      var _a2, _b2;
      let text = "";
      if (themeLocal.value.author) {
        text += `${themeLocal.value.author} `;
      }
      const startYear = (_b2 = (_a2 = frontmatter.value) == null ? void 0 : _a2.footer) == null ? void 0 : _b2.startYear;
      const currYear = (/* @__PURE__ */ new Date()).getFullYear();
      if (startYear && startYear != currYear) {
        text += `${startYear} - `;
      }
      text += currYear;
      return text;
    });
    const homeLink = computed(() => themeLocal.value.home || routeLocale.value);
    const isShowCommentAtHomePage = computed(() => {
      var _a2;
      return (_a2 = frontmatter.value.modules || []) == null ? void 0 : _a2.includes("Comment");
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const _component_Xicons = resolveComponent("Xicons");
      const _component_ValineViews = resolveComponent("ValineViews");
      const _component_WalineViews = resolveComponent("WalineViews");
      const _component_Comments = resolveComponent("Comments");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-wrapper" }, _attrs))}><span>`);
      _push(ssrRenderComponent(_component_Xicons, {
        icon: "ColorPalette",
        link: "https://vuepress-theme-reco.recoluan.com",
        target: "_blank",
        text: `vuepress-theme-reco@${unref(version2)}`
      }, null, _parent));
      _push(`</span><span style="${ssrRenderStyle(((_b2 = (_a2 = unref(frontmatter)) == null ? void 0 : _a2.footer) == null ? void 0 : _b2.record) ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_component_Xicons, {
        icon: "Security",
        link: (_d = (_c = unref(frontmatter)) == null ? void 0 : _c.footer) == null ? void 0 : _d.recordLink,
        text: (_f = (_e = unref(frontmatter)) == null ? void 0 : _e.footer) == null ? void 0 : _f.record,
        target: "_blank"
      }, null, _parent));
      _push(`</span><span>`);
      _push(ssrRenderComponent(_component_Xicons, { text: copyRight.value }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="xicon-icon" style="${ssrRenderStyle({ "width": "18px", "height": "18px", "font-size": "18px", "color": "inherit" })}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"${_scopeId}><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><circle cx="12" cy="12" r="9"${_scopeId}></circle><path d="M14 9.75a3.016 3.016 0 0 0-4.163.173a2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25"${_scopeId}></path></g></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "xicon-icon",
                style: { "width": "18px", "height": "18px", "font-size": "18px", "color": "inherit" },
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                viewBox: "0 0 24 24"
              }, [
                createVNode("g", {
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("circle", {
                    cx: "12",
                    cy: "12",
                    r: "9"
                  }),
                  createVNode("path", { d: "M14 9.75a3.016 3.016 0 0 0-4.163.173a2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25" })
                ])
              ]))
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</span>`);
      if (showAccessNumber.value) {
        _push(`<span>`);
        _push(ssrRenderComponent(_component_Xicons, null, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="xicon-icon" style="${ssrRenderStyle({ "width": "18px", "height": "18px", "font-size": "18px", "color": "inherit" })}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"${_scopeId}><g fill="none"${_scopeId}><path d="M1.974 6.659a.5.5 0 0 1-.948-.317c-.01.03 0-.001 0-.001a1.633 1.633 0 0 1 .062-.162c.04-.095.099-.226.18-.381c.165-.31.422-.723.801-1.136C2.834 3.827 4.087 3 6 3c1.913 0 3.166.827 3.931 1.662a5.479 5.479 0 0 1 .98 1.517l.046.113c.003.008.013.06.023.11L11 6.5s.084.333-.342.474a.5.5 0 0 1-.632-.314v-.003l-.006-.016a3.678 3.678 0 0 0-.172-.376a4.477 4.477 0 0 0-.654-.927C8.584 4.673 7.587 4 6 4s-2.584.673-3.194 1.338a4.477 4.477 0 0 0-.795 1.225a2.209 2.209 0 0 0-.03.078l-.007.018zM6 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4zM5 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0z" fill="currentColor"${_scopeId}></path></g></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "xicon-icon",
                  style: { "width": "18px", "height": "18px", "font-size": "18px", "color": "inherit" },
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: "0 0 12 12"
                }, [
                  createVNode("g", { fill: "none" }, [
                    createVNode("path", {
                      d: "M1.974 6.659a.5.5 0 0 1-.948-.317c-.01.03 0-.001 0-.001a1.633 1.633 0 0 1 .062-.162c.04-.095.099-.226.18-.381c.165-.31.422-.723.801-1.136C2.834 3.827 4.087 3 6 3c1.913 0 3.166.827 3.931 1.662a5.479 5.479 0 0 1 .98 1.517l.046.113c.003.008.013.06.023.11L11 6.5s.084.333-.342.474a.5.5 0 0 1-.632-.314v-.003l-.006-.016a3.678 3.678 0 0 0-.172-.376a4.477 4.477 0 0 0-.654-.927C8.584 4.673 7.587 4 6 4s-2.584.673-3.194 1.338a4.477 4.477 0 0 0-.795 1.225a2.209 2.209 0 0 0-.03.078l-.007.018zM6 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4zM5 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0z",
                      fill: "currentColor"
                    })
                  ])
                ]))
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(solution) === "valine") {
                _push2(ssrRenderComponent(_component_ValineViews, { idVal: homeLink.value }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(solution) === "waline") {
                _push2(ssrRenderComponent(_component_WalineViews, { path: homeLink.value }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(solution) === "valine" ? (openBlock(), createBlock(_component_ValineViews, {
                  key: 0,
                  idVal: homeLink.value
                }, null, 8, ["idVal"])) : createCommentVNode("v-if", true),
                unref(solution) === "waline" ? (openBlock(), createBlock(_component_WalineViews, {
                  key: 1,
                  path: homeLink.value
                }, null, 8, ["path"])) : createCommentVNode("v-if", true)
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if ((_h = (_g = unref(frontmatter)) == null ? void 0 : _g.footer) == null ? void 0 : _h.cyberSecurityRecord) {
        _push(`<span class="cyber-security"><img${ssrRenderAttr("src", _imports_0$1)} alt=""><a${ssrRenderAttr("href", ((_j = (_i = unref(frontmatter)) == null ? void 0 : _i.footer) == null ? void 0 : _j.cyberSecurityLink) || "#")} target="_blank">${ssrInterpolate((_l = (_k = unref(frontmatter)) == null ? void 0 : _k.footer) == null ? void 0 : _l.cyberSecurityRecord)}</a></span>`);
      } else {
        _push(`<!---->`);
      }
      if (!isShowCommentAtHomePage.value) {
        _push(ssrRenderComponent(_component_Comments, { "hide-comments": true }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Home/Footer.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__file", "Footer.vue"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  emits: ["pass"],
  setup(__props, { emit }) {
    const { siteBrandLogo, siteBrandTitle, sitePassword } = useSiteInfo();
    const { password, passwordRef, lockIcon, lockText, focus } = useHandlePassword$1(
      sitePassword,
      emit
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Xicons = resolveComponent("Xicons");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "password-wrapper" }, _attrs))}><input maxlength="6" type="password"${ssrRenderAttr("value", unref(password))}><div class="site-info">`);
      if (unref(siteBrandLogo)) {
        _push(`<img class="logo"${ssrRenderAttr("src", unref(withBase)(unref(siteBrandLogo)))}${ssrRenderAttr("alt", unref(siteBrandTitle))}>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(siteBrandTitle)) {
        _push(`<h1 class="site-name">${ssrInterpolate(unref(siteBrandTitle))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_Xicons, {
        icon: unref(lockIcon),
        text: unref(lockText)
      }, null, _parent));
      _push(`</div><ul class="password-show"><li>`);
      if (unref(password).length > 0) {
        _push(`<i></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      if (unref(password).length > 1) {
        _push(`<i></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      if (unref(password).length > 2) {
        _push(`<i></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      if (unref(password).length > 3) {
        _push(`<i></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      if (unref(password).length > 4) {
        _push(`<i></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      if (unref(password).length > 5) {
        _push(`<i></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Password/index.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const Password$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "index.vue"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "NavbarDropdownNemu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile-menus-container" }, _attrs))}>`);
      _push(ssrRenderComponent(NavbarLinks, { class: "mobile" }, null, _parent));
      _push(`<div class="appearance"><span>Appearance</span>`);
      _push(ssrRenderComponent(ToggleDarkModeButton, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/NavbarDropdownNemu.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const NavbarDropdownNemu = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "NavbarDropdownNemu.vue"]]);
function useSeries(toggleSeries, toggleMobileMenus) {
  let unregisterRouterHook;
  onMounted(() => {
    const router = useRouter();
    const { direction: direction2 } = useScrollDirection();
    unregisterRouterHook = router.afterEach((to, from) => {
      if (to.path !== from.path) {
        toggleSeries(false);
        toggleMobileMenus(false);
        direction2.value = "";
      }
    });
  });
  onUnmounted(() => {
    unregisterRouterHook();
  });
}
function usePassword$1() {
  const themeLocal = useThemeLocaleData();
  const siteLoaded = ref(false);
  const sitePasswordPass = ref(true);
  onMounted(() => {
    let sitePasswordPassCache = "true";
    if (themeLocal.value.password && sitePasswordPassCache !== "true") {
      sitePasswordPass.value = false;
    }
    siteLoaded.value = true;
  });
  const handlePass = () => {
    sitePasswordPass.value = true;
  };
  return { siteLoaded, sitePasswordPass, handlePass };
}
function useInitCodeCopy() {
  const route = useRoute();
  const { path } = toRefs(route);
  const { initCopyBtn } = useInitCopyBtn();
  watch(path, () => {
    setTimeout(() => {
      initCopyBtn();
    }, 1e3);
  });
}
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const {
      isOpenSeries,
      isShowSeries,
      isShowCatalog,
      toggleSeries
    } = useSeriesData();
    const { isOpenMobileMenus, toggleMobileMenus } = useMobileMenus();
    const { siteLoaded, sitePasswordPass, handlePass } = usePassword$1();
    const containerClass = computed(() => [
      {
        "series--open": isOpenSeries.value,
        "series--no": !isShowSeries.value,
        "show-series": isShowSeries.value,
        "show-catalog": isShowCatalog.value,
        "mobile-menus--active": isOpenMobileMenus.value
      },
      frontmatter.value.pageClass
    ]);
    const seriesItems = useSeriesItems();
    onMounted(() => {
      useInitCodeCopy();
    });
    useSeries(toggleSeries, toggleMobileMenus);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["common-wrapper", containerClass.value]
      }, _attrs))}>`);
      if (unref(siteLoaded) && !unref(sitePasswordPass)) {
        _push(ssrRenderComponent(Password$1, {
          class: "out",
          key: "out",
          onPass: unref(handlePass)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(siteLoaded) && unref(sitePasswordPass)) {
        _push(`<div>`);
        _push(ssrRenderComponent(Navbar, { onToggleMenus: unref(toggleMobileMenus) }, null, _parent));
        if (unref(seriesItems).length > 0) {
          _push(ssrRenderComponent(SubNavbar, { onToggleSeries: unref(toggleSeries) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(NavbarDropdownNemu, null, null, _parent));
        _push(`<div class="series-mask"></div>`);
        _push(ssrRenderComponent(Series, null, null, _parent));
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        if (unref(isShowCatalog)) {
          _push(ssrRenderComponent(Catalog, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Common/index.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Common = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "index.vue"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "Pagation",
  __ssrInlineRender: true,
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    totalPage: {
      type: Number,
      default: 0
    }
  },
  emits: ["change"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const targetPage = ref(null);
    const tp = computed(() => {
      return Math.ceil(props.total / props.pageSize);
    });
    const showStartFakePageNum = computed(() => {
      return efont.value && !indexes.value.includes(1);
    });
    const showLastFakePageNum = computed(() => {
      return efont.value && !indexes.value.includes(tp.value);
    });
    const efont = computed(() => {
      return tp.value > 7;
    });
    const indexes = computed(() => {
      const ar = [];
      let left = 1;
      let right = tp.value;
      if (tp.value >= 7) {
        if (props.currentPage > 5 && props.currentPage < tp.value - 4) {
          left = Number(props.currentPage) - 3;
          right = Number(props.currentPage) + 3;
        } else {
          if (props.currentPage <= 5) {
            left = 1;
            right = 7;
          } else {
            right = tp.value;
            left = tp.value - 6;
          }
        }
      }
      while (left <= right) {
        ar.push(left);
        left++;
      }
      return ar;
    });
    const goPrev = () => {
      let currentPage = props.currentPage;
      if (currentPage > 1) {
        emits("change", --currentPage);
      }
    };
    const goNext = () => {
      let currentPage = props.currentPage;
      if (currentPage < tp.value) {
        emits("change", ++currentPage);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Xicons = resolveComponent("Xicons");
      if (tp.value > 1) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagation-container" }, _attrs))}>`);
        if (__props.currentPage > 1) {
          _push(ssrRenderComponent(_component_Xicons, {
            class: "jump",
            icon: "ChevronLeft",
            iconSize: 16,
            unselectable: "on",
            key: "left",
            onClick: goPrev
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (showStartFakePageNum.value) {
          _push(`<span class="jump">1</span>`);
        } else {
          _push(`<!---->`);
        }
        if (showStartFakePageNum.value && indexes.value[0] > 2) {
          _push(`<span class="ellipsis">...</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(indexes.value, (num) => {
          _push(`<span class="${ssrRenderClass([{ active: __props.currentPage == num }, "jump"])}">${ssrInterpolate(num)}</span>`);
        });
        _push(`<!--]-->`);
        if (showLastFakePageNum.value && tp.value - indexes.value.at(-1) > 1) {
          _push(`<span class="ellipsis">...</span>`);
        } else {
          _push(`<!---->`);
        }
        if (showLastFakePageNum.value) {
          _push(`<span class="jump">${ssrInterpolate(tp.value)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.currentPage < tp.value) {
          _push(ssrRenderComponent(_component_Xicons, {
            class: "jump",
            key: "right",
            icon: "ChevronRight",
            iconSize: 16,
            onClick: goNext
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="jumpinput"><input type="text"${ssrRenderAttr("value", targetPage.value)}></span><span class="jump go">Go</span></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Pagation.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Pagation = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "Pagation.vue"]]);
const _sfc_main$i = defineComponent({
  components: { Common, PostList, Pagation },
  setup() {
    const {
      categoryPosts,
      categorySummary
    } = usePageData();
    const router = useRouter();
    const categoryList = computed(() => {
      let list = [];
      const currentCategoryKey = categoryPosts.value.currentCategoryKey;
      if (currentCategoryKey) {
        const { items = [] } = categorySummary[currentCategoryKey];
        list = Object.values(items);
      }
      return list;
    });
    const handlePagation = (page) => {
      const {
        currentCategoryKey,
        currentCategoryValue
      } = categoryPosts.value;
      router.push(`/${currentCategoryKey}/${currentCategoryValue}/${page}/`);
    };
    const { initMagicCard } = useMagicCard();
    onMounted(() => {
      initMagicCard();
    });
    const route = useRoute();
    watch(route, () => {
      initMagicCard();
    });
    return {
      categoryList,
      categoryPosts,
      handlePagation,
      convertToPinyin
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Common = resolveComponent("Common");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_PostList = resolveComponent("PostList");
  const _component_Pagation = resolveComponent("Pagation");
  _push(ssrRenderComponent(_component_Common, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="categories-container"${_scopeId}><ul class="category-list"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.categoryList, ({ label, length }, index2) => {
          _push2(`<li class="${ssrRenderClass([
            "category-item",
            {
              active: _ctx.categoryPosts.currentCategoryValue === _ctx.convertToPinyin(label)
            }
          ])}"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_RouterLink, {
            class: "category-link",
            to: `/${_ctx.categoryPosts.currentCategoryKey}/${_ctx.convertToPinyin(label)}/1/`
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<span class="text"${_scopeId2}>${ssrInterpolate(label)}</span>`);
              } else {
                return [
                  createVNode(
                    "span",
                    { class: "text" },
                    toDisplayString(label),
                    1
                    /* TEXT */
                  )
                ];
              }
            }),
            _: 2
            /* DYNAMIC */
          }, _parent2, _scopeId));
          _push2(`</li>`);
        });
        _push2(`<!--]--></ul>`);
        _push2(ssrRenderComponent(_component_PostList, {
          data: _ctx.categoryPosts.pages
        }, null, _parent2, _scopeId));
        if (_ctx.categoryPosts.totalPage > 10) {
          _push2(ssrRenderComponent(_component_Pagation, {
            currentPage: _ctx.categoryPosts.currentPage,
            total: _ctx.categoryPosts.totalPage,
            onChange: _ctx.handlePagation
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "categories-container" }, [
            createVNode("ul", { class: "category-list" }, [
              (openBlock(true), createBlock(
                Fragment,
                null,
                renderList(_ctx.categoryList, ({ label, length }, index2) => {
                  return openBlock(), createBlock(
                    "li",
                    {
                      key: index2,
                      class: [
                        "category-item",
                        {
                          active: _ctx.categoryPosts.currentCategoryValue === _ctx.convertToPinyin(label)
                        }
                      ]
                    },
                    [
                      createVNode(_component_RouterLink, {
                        class: "category-link",
                        to: `/${_ctx.categoryPosts.currentCategoryKey}/${_ctx.convertToPinyin(label)}/1/`
                      }, {
                        default: withCtx(() => [
                          createVNode(
                            "span",
                            { class: "text" },
                            toDisplayString(label),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["to"])
                    ],
                    2
                    /* CLASS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            createVNode(_component_PostList, {
              data: _ctx.categoryPosts.pages
            }, null, 8, ["data"]),
            _ctx.categoryPosts.totalPage > 10 ? (openBlock(), createBlock(_component_Pagation, {
              key: 0,
              currentPage: _ctx.categoryPosts.currentPage,
              total: _ctx.categoryPosts.totalPage,
              onChange: _ctx.handlePagation
            }, null, 8, ["currentPage", "total", "onChange"])) : createCommentVNode("v-if", true)
          ])
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/layouts/Categories.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Categories = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$5], ["__file", "Categories.vue"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const heroImage = computed(() => {
      var _a2, _b2, _c, _d;
      return ((_b2 = (_a2 = frontmatter.value) == null ? void 0 : _a2.banner) == null ? void 0 : _b2.heroImage) ? withBase((_d = (_c = frontmatter.value) == null ? void 0 : _c.banner) == null ? void 0 : _d.heroImage) : null;
    });
    const heroImageStyle = computed(
      () => frontmatter.value.banner.heroImageStyle || {}
    );
    const bgImageStyle = computed(() => {
      var _a2;
      const { bgImageStyle: bgImageStyle2, bgImage } = ((_a2 = frontmatter.value) == null ? void 0 : _a2.banner) || {};
      const initBgImageStyle = bgImage ? {
        textAlign: "center",
        overflow: "hidden",
        background: `url(${withBase(bgImage)}) center/cover no-repeat`
      } : {};
      return bgImageStyle2 ? { ...initBgImageStyle, ...bgImageStyle2 } : initBgImageStyle;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c, _d, _e, _f, _g, _h;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "banner-wrapper",
        style: { ...bgImageStyle.value }
      }, _attrs))}><div class="banner-brand__content">`);
      if (heroImage.value) {
        _push(`<img${ssrRenderAttr("src", heroImage.value)} style="${ssrRenderStyle({
          heroImageStyle: heroImageStyle.value
        })}" alt="heroImage">`);
      } else {
        _push(`<!---->`);
      }
      if ((_b2 = (_a2 = unref(frontmatter)) == null ? void 0 : _a2.banner) == null ? void 0 : _b2.heroText) {
        _push(`<h1>${ssrInterpolate((_d = (_c = unref(frontmatter)) == null ? void 0 : _c.banner) == null ? void 0 : _d.heroText)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if ((_f = (_e = unref(frontmatter)) == null ? void 0 : _e.banner) == null ? void 0 : _f.tagline) {
        _push(`<p>${ssrInterpolate((_h = (_g = unref(frontmatter)) == null ? void 0 : _g.banner) == null ? void 0 : _h.tagline)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Home/Banner.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "Banner.vue"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "BannerBrand",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    computed(() => {
      var _a2, _b2, _c, _d;
      return ((_b2 = (_a2 = frontmatter.value) == null ? void 0 : _a2.bannerBrand) == null ? void 0 : _b2.heroImage) ? withBase((_d = (_c = frontmatter.value) == null ? void 0 : _c.bannerBrand) == null ? void 0 : _d.heroImage) : null;
    });
    const buttons = computed(() => {
      var _a2, _b2;
      return ((_b2 = (_a2 = frontmatter.value) == null ? void 0 : _a2.bannerBrand) == null ? void 0 : _b2.buttons) || [];
    });
    const socialLinks = computed(() => {
      var _a2, _b2;
      return (((_b2 = (_a2 = frontmatter.value) == null ? void 0 : _a2.bannerBrand) == null ? void 0 : _b2.socialLinks) || []).map((item) => {
        if (!item.color)
          item.color = createOneColor();
        return item;
      });
    });
    computed(
      () => frontmatter.value.bannerBrand.heroImageStyle || {}
    );
    const bgImageStyle = computed(() => {
      var _a2;
      const { bgImageStyle: bgImageStyle2, bgImage } = ((_a2 = frontmatter.value) == null ? void 0 : _a2.bannerBrand) || {};
      const initBgImageStyle = bgImage ? {
        overflow: "hidden",
        background: `url(${withBase(bgImage)}) center/cover no-repeat`
      } : {};
      return bgImageStyle2 ? { ...initBgImageStyle, ...bgImageStyle2 } : initBgImageStyle;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const _component_Xicons = resolveComponent("Xicons");
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "banner-brand__wrapper",
        style: { ...bgImageStyle.value }
      }, _attrs))}><div class="banner-brand__content">`);
      if ((_b2 = (_a2 = unref(frontmatter)) == null ? void 0 : _a2.bannerBrand) == null ? void 0 : _b2.title) {
        _push(`<h1 class="title">${ssrInterpolate((_d = (_c = unref(frontmatter)) == null ? void 0 : _c.bannerBrand) == null ? void 0 : _d.title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if ((_f = (_e = unref(frontmatter)) == null ? void 0 : _e.bannerBrand) == null ? void 0 : _f.description) {
        _push(`<p class="description">${ssrInterpolate((_h = (_g = unref(frontmatter)) == null ? void 0 : _g.bannerBrand) == null ? void 0 : _h.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if ((_j = (_i = unref(frontmatter)) == null ? void 0 : _i.bannerBrand) == null ? void 0 : _j.tagline) {
        _push(`<p class="tagline">${ssrInterpolate((_l = (_k = unref(frontmatter)) == null ? void 0 : _k.bannerBrand) == null ? void 0 : _l.tagline)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (buttons.value.length > 0) {
        _push(`<div class="btn-group"><!--[-->`);
        ssrRenderList(buttons.value, (btn, index2) => {
          _push(ssrRenderComponent(_component_Xicons, {
            class: btn.type,
            key: index2,
            icon: btn.icon,
            text: btn.text,
            link: btn.link,
            "icon-size": "18",
            "text-size": "14"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (socialLinks.value.length > 0) {
        _push(`<ul class="social-links"><!--[-->`);
        ssrRenderList(socialLinks.value, (item, index2) => {
          _push(`<li class="social-item">`);
          _push(ssrRenderComponent(_component_Xicons, {
            icon: item.icon,
            link: item.link,
            style: { color: item.color },
            target: "_blank"
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Home/BannerBrand.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const BannerBrand = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "BannerBrand.vue"]]);
const _sfc_main$f = defineComponent({
  setup(props, ctx) {
    const themeLocal = useThemeLocaleData$1();
    const frontmatter = usePageFrontmatter();
    const socialLinks = computed(() => {
      var _a2, _b2;
      return (((_b2 = (_a2 = frontmatter.value) == null ? void 0 : _a2.blog) == null ? void 0 : _b2.socialLinks) || []).map((item) => {
        if (!item.color)
          item.color = createOneColor();
        return item;
      });
    });
    return { themeLocal, socialLinks };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Xicons = resolveComponent("Xicons");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "personal-info-wrapper" }, _attrs))}>`);
  if (_ctx.themeLocal.authorAvatar) {
    _push(`<img class="personal-img"${ssrRenderAttr("src", _ctx.$withBase(_ctx.themeLocal.authorAvatar))} alt="author-avatar">`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.themeLocal.author) {
    _push(`<p class="name">${ssrInterpolate(_ctx.themeLocal.author)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!-- 支持 hover 展示文案、图片 --><ul class="social-links"><!--[-->`);
  ssrRenderList(_ctx.socialLinks, (item, index2) => {
    _push(`<li class="social-item">`);
    _push(ssrRenderComponent(_component_Xicons, {
      icon: item.icon,
      link: item.link,
      style: { color: item.color },
      target: "_blank"
    }, null, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul><hr></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/PersonalInfo.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const PersonalInfo = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$4], ["__file", "PersonalInfo.vue"]]);
const perPage$1 = 10;
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    const { posts, categorySummary } = usePageData();
    const currentPage = ref(1);
    ref(0);
    const categories = computed(() => {
      var _a2;
      return ((_a2 = categorySummary == null ? void 0 : categorySummary.categories) == null ? void 0 : _a2.items) || [];
    });
    const tags = computed(() => {
      var _a2;
      return ((_a2 = categorySummary == null ? void 0 : categorySummary.tags) == null ? void 0 : _a2.items) || [];
    });
    const postsOfCurrentPage = computed(() => {
      const start = (currentPage.value - 1) * perPage$1;
      const end = currentPage.value * perPage$1;
      return (posts || []).slice(start, end);
    });
    let handlePagation = (page) => {
    };
    const route = useRoute();
    useRouter();
    useRouteLocale();
    useThemeLocaleData();
    computed(() => route.query.page);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MagicCard = resolveComponent("MagicCard");
      const _component_Xicons = resolveComponent("Xicons");
      const _component_router_link = resolveComponent("router-link");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "home-blog-content" }, _attrs))}><section class="blog-list">`);
      _push(ssrRenderComponent(PostList, { data: postsOfCurrentPage.value }, null, _parent));
      _push(ssrRenderComponent(Pagation, {
        currentPage: currentPage.value,
        total: unref(posts).length,
        onChange: unref(handlePagation)
      }, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_MagicCard, { class: "info-wrapper" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PersonalInfo, null, null, _parent2, _scopeId));
            _push2(`<h4 class="module-title"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Xicons, {
              icon: "Folder",
              text: "Categories"
            }, null, _parent2, _scopeId));
            _push2(`</h4><ul class="category-wrapper"${_scopeId}><!--[-->`);
            ssrRenderList(categories.value, (value, key, index2) => {
              _push2(`<li class="category-item"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, {
                class: "category-link",
                to: `/categories/${key}/1/`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text"${_scopeId2}>${ssrInterpolate(value.label)}</span><span class="num"${_scopeId2}>${ssrInterpolate(value.length)}</span>`);
                  } else {
                    return [
                      createVNode(
                        "span",
                        { class: "text" },
                        toDisplayString(value.label),
                        1
                        /* TEXT */
                      ),
                      createVNode(
                        "span",
                        { class: "num" },
                        toDisplayString(value.length),
                        1
                        /* TEXT */
                      )
                    ];
                  }
                }),
                _: 2
                /* DYNAMIC */
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul><h4 class="module-title"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Xicons, {
              icon: "Tag",
              text: "Tags"
            }, null, _parent2, _scopeId));
            _push2(`</h4><ul class="tag-wrapper"${_scopeId}><!--[-->`);
            ssrRenderList(tags.value, (value, key, index2) => {
              _push2(`<li class="tag-item" style="${ssrRenderStyle({ borderColor: unref(createOneColor)() })}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_router_link, {
                class: "tag-link",
                to: `/tags/${key}/1/`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(value.label)}`);
                  } else {
                    return [
                      createTextVNode(
                        toDisplayString(value.label),
                        1
                        /* TEXT */
                      )
                    ];
                  }
                }),
                _: 2
                /* DYNAMIC */
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode(PersonalInfo),
              createVNode("h4", { class: "module-title" }, [
                createVNode(_component_Xicons, {
                  icon: "Folder",
                  text: "Categories"
                })
              ]),
              createVNode("ul", { class: "category-wrapper" }, [
                (openBlock(true), createBlock(
                  Fragment,
                  null,
                  renderList(categories.value, (value, key, index2) => {
                    return openBlock(), createBlock("li", {
                      class: "category-item",
                      key: index2
                    }, [
                      createVNode(_component_router_link, {
                        class: "category-link",
                        to: `/categories/${key}/1/`
                      }, {
                        default: withCtx(() => [
                          createVNode(
                            "span",
                            { class: "text" },
                            toDisplayString(value.label),
                            1
                            /* TEXT */
                          ),
                          createVNode(
                            "span",
                            { class: "num" },
                            toDisplayString(value.length),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["to"])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              createVNode("h4", { class: "module-title" }, [
                createVNode(_component_Xicons, {
                  icon: "Tag",
                  text: "Tags"
                })
              ]),
              createVNode("ul", { class: "tag-wrapper" }, [
                (openBlock(true), createBlock(
                  Fragment,
                  null,
                  renderList(tags.value, (value, key, index2) => {
                    return openBlock(), createBlock(
                      "li",
                      {
                        class: "tag-item",
                        key: index2,
                        style: { borderColor: unref(createOneColor)() }
                      },
                      [
                        createVNode(_component_router_link, {
                          class: "tag-link",
                          to: `/tags/${key}/1/`
                        }, {
                          default: withCtx(() => [
                            createTextVNode(
                              toDisplayString(value.label),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["to"])
                      ],
                      4
                      /* STYLE */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Home/Blog.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "Blog.vue"]]);
const _sfc_main$d = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<!--[--><!-- content --><section${ssrRenderAttrs(mergeProps({ class: "theme-reco-default-content" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</section><!--]-->`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Home/MdContent.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const MdContent = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$3], ["__file", "MdContent.vue"]]);
const _sfc_main$c = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Comments = resolveComponent("Comments");
  _push(ssrRenderComponent(_component_Comments, mergeProps({ "hide-comments": false }, _attrs), null, _parent));
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Home/Comment.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Comment = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$2], ["__file", "Comment.vue"]]);
const __default__ = defineComponent({
  name: "HomeWrapper",
  components: {
    Banner,
    BannerBrand,
    Blog,
    MdContent,
    Comment,
    Footer
  }
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-wrapper" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(frontmatter).modules || ["Banner", "Blog", "Footer"], (key) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(key), { key }, null), _parent);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Home/index.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "index.vue"]]);
const resolveFromFrontmatterConfig = (conf) => {
  if (conf === false) {
    return null;
  }
  if (isString(conf)) {
    return useNavLink(conf);
  }
  if (isPlainObject(conf)) {
    return conf;
  }
  return false;
};
const resolveFromSeriesItems = (seriesItems, currentPath, offset) => {
  const index2 = seriesItems.findIndex((item) => item.link === currentPath);
  if (index2 !== -1) {
    const targetItem = seriesItems[index2 + offset];
    if (!(targetItem == null ? void 0 : targetItem.link)) {
      return null;
    }
    return targetItem;
  }
  for (const item of seriesItems) {
    if (item.children) {
      const childResult = resolveFromSeriesItems(
        item.children,
        currentPath,
        offset
      );
      if (childResult) {
        return childResult;
      }
    }
  }
  return null;
};
const _sfc_main$a = defineComponent({
  name: "PageNav",
  components: { Link },
  setup() {
    const frontmatter = usePageFrontmatter();
    const seriesItems = useSeriesItems();
    const route = useRoute();
    const router = useRouter();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSeriesItems(seriesItems.value, route.path, -1);
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSeriesItems(seriesItems.value, route.path, 1);
    });
    const go = (link) => {
      router.push(link);
    };
    return {
      prevNavLink,
      nextNavLink,
      go
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.prevNavLink || _ctx.nextNavLink) {
    _push(`<nav${ssrRenderAttrs(mergeProps({ class: "page-nav" }, _attrs))}><p class="${ssrRenderClass([{ hasPrev: !!_ctx.prevNavLink, hasNext: !!_ctx.nextNavLink }, "inner"])}">`);
    if (_ctx.prevNavLink) {
      _push(`<span class="page-nav-item prev"> ← ${ssrInterpolate(_ctx.prevNavLink.text)}</span>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.nextNavLink) {
      _push(`<span class="page-nav-item next">${ssrInterpolate(_ctx.nextNavLink.text)} → </span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</p></nav>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/PageNav.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const PageNav = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$1], ["__file", "PageNav.vue"]]);
const useEditNavLink = () => {
  const themeLocal = useThemeLocaleData$1();
  const page = usePageData$1();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const showEditLink = frontmatter.value.editLink ?? themeLocal.value.editLink ?? true;
    if (!showEditLink) {
      return null;
    }
    const {
      repo,
      docsRepo = repo,
      docsBranch = "main",
      docsDir = "",
      editLinkText
    } = themeLocal.value;
    if (!docsRepo)
      return null;
    const editLink = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      filePathRelative: page.value.filePathRelative,
      editLinkPattern: themeLocal.value.editLinkPattern
    });
    if (!editLink)
      return null;
    return {
      text: editLinkText ?? "Edit this page",
      link: editLink,
      icon: "Edit",
      hideExternalLinkIcon: true
    };
  });
};
const useLastUpdated = () => {
  useSiteLocaleData();
  const themeLocal = useThemeLocaleData$1();
  const page = usePageData$1();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2, _b2;
    const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocal.value.lastUpdated ?? true;
    if (!showLastUpdated)
      return null;
    if (!((_a2 = page.value.git) == null ? void 0 : _a2.updatedTime))
      return null;
    const updatedDate = new Date((_b2 = page.value.git) == null ? void 0 : _b2.updatedTime);
    return updatedDate.toLocaleString();
  });
};
const _sfc_main$9 = defineComponent({
  name: "PageMeta",
  components: { Link },
  setup() {
    const themeLocal = useThemeLocaleData$1();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    return {
      themeLocal,
      editNavLink,
      lastUpdated
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Xicons = resolveComponent("Xicons");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "page-meta" }, _attrs))}>`);
  if (_ctx.editNavLink) {
    _push(`<div class="meta-item edit-link">`);
    _push(ssrRenderComponent(_component_Xicons, {
      class: "meta-item-label",
      icon: _ctx.editNavLink.icon,
      text: _ctx.editNavLink.text,
      link: _ctx.editNavLink.link,
      target: "_blank",
      "icon-size": "20",
      "text-size": "14"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.lastUpdated) {
    _push(`<div class="meta-item last-updated">`);
    _push(ssrRenderComponent(_component_Xicons, {
      class: "meta-item-label",
      icon: "Calendar",
      text: `${_ctx.themeLocal.lastUpdatedText || "Last Updated"} ${_ctx.lastUpdated}`,
      "icon-size": "20",
      "text-size": "14"
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</footer>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/PageMeta.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const PageMeta = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender], ["__file", "PageMeta.vue"]]);
function usePageInfo() {
  const frontmatter = usePageFrontmatter();
  const pagePassword = computed(() => {
    const _password = frontmatter.value.password;
    if (!_password)
      return [];
    return Array.isArray(_password) ? _password : [_password];
  });
  return { pagePassword };
}
function useHandlePassword(pagePassword, emit) {
  const password = ref("");
  const passwordRef = ref(null);
  const lockIcon = ref("Locked");
  const lockText = ref("请输入密码");
  watch(password, (newVal) => {
    if (newVal.length !== 6)
      return;
    if (pagePassword.value.includes(md5(md5(newVal)))) {
      lockIcon.value = "Unlocked";
      lockText.value = "密码正确，请重稍后！";
      setTimeout(() => {
        emit("pass");
      }, 600);
    } else {
      password.value = "";
      lockText.value = "密码错误，请重新输入！";
    }
  });
  const focus = () => {
    passwordRef.value.focus();
  };
  return { password, passwordRef, lockIcon, lockText, focus };
}
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  emits: ["pass"],
  setup(__props, { emit }) {
    const { pagePassword } = usePageInfo();
    const { password, passwordRef, lockIcon, lockText, focus } = useHandlePassword(
      pagePassword,
      emit
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Xicons = resolveComponent("Xicons");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-password-wrapper" }, _attrs))}><input maxlength="6" type="password"${ssrRenderAttr("value", unref(password))}><div>`);
      _push(ssrRenderComponent(_component_Xicons, {
        icon: unref(lockIcon),
        text: unref(lockText)
      }, null, _parent));
      _push(`</div><ul class="password-show"><li>`);
      if (unref(password).length > 0) {
        _push(`<i></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      if (unref(password).length > 1) {
        _push(`<i></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      if (unref(password).length > 2) {
        _push(`<i></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      if (unref(password).length > 3) {
        _push(`<i></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      if (unref(password).length > 4) {
        _push(`<i></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      if (unref(password).length > 5) {
        _push(`<i></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/PagePassword/index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Password = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "index.vue"]]);
let PAGE_PASSWORD_PASS = "PAGE_PASSWORD_PASS";
function usePassword() {
  const route = useRoute();
  PAGE_PASSWORD_PASS = `${PAGE_PASSWORD_PASS}:${route.path}`;
  const frontmatter = usePageFrontmatter();
  const pageLoaded = ref(false);
  const pagePasswordPass = ref(true);
  onMounted(() => {
    let pagePasswordPassCache = "true";
    if (frontmatter.value.password && pagePasswordPassCache !== "true") {
      pagePasswordPass.value = false;
    }
    pageLoaded.value = true;
  });
  const handlePass = () => {
    pagePasswordPass.value = true;
  };
  return { pageLoaded, pagePasswordPass, handlePass };
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const pageData2 = usePageData$1();
    const { options } = useComment();
    const { pageLoaded, pagePasswordPass, handlePass } = usePassword();
    const title = computed(
      () => {
        var _a2, _b2, _c;
        return ((_b2 = (_a2 = pageData2 == null ? void 0 : pageData2.value) == null ? void 0 : _a2.frontmatter) == null ? void 0 : _b2.title) || ((_c = pageData2 == null ? void 0 : pageData2.value) == null ? void 0 : _c.title) || "";
      }
    );
    const shouldHideComments = computed(() => {
      var _a2;
      const { hideComments: hideCommentsInSinglePage } = (_a2 = pageData2 == null ? void 0 : pageData2.value) == null ? void 0 : _a2.frontmatter;
      const { hideComments: hideCommentsInAllPage } = options.value;
      return hideCommentsInSinglePage === true || hideCommentsInSinglePage !== false && hideCommentsInAllPage === true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      const _component_Comments = resolveComponent("Comments");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))}>`);
      if (!!title.value) {
        _push(`<h1 class="page-title">${ssrInterpolate(title.value)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(PageInfo, { "page-data": unref(pageData2) }, null, _parent));
      _push(`<div class="theme-reco-default-content">`);
      if (unref(pageLoaded) && !unref(pagePasswordPass)) {
        _push(ssrRenderComponent(Password, { onPass: unref(handlePass) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(pageLoaded) && unref(pagePasswordPass)) {
        _push(ssrRenderComponent(_component_Content, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(PageMeta, null, null, _parent));
      _push(ssrRenderComponent(PageNav, null, null, _parent));
      _push(ssrRenderComponent(_component_Comments, { "hide-comments": shouldHideComments.value }, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Page/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Page = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "index.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData$1();
    const frontmatter = usePageFrontmatter();
    const scrollPromise2 = useScrollPromise();
    const onBeforeEnter = scrollPromise2.resolve;
    const onBeforeLeave = scrollPromise2.pending;
    const { initMagicCard } = useMagicCard();
    onMounted(() => {
      initMagicCard();
    });
    const route = useRoute();
    watch(route, () => {
      initMagicCard();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "theme-container" }, _attrs))}>`);
      _push(ssrRenderComponent(Common, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(frontmatter).home === true) {
              _push2(ssrRenderComponent(Home, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(Page, {
                key: unref(page).path
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(frontmatter).home === true ? (openBlock(), createBlock(Home, { key: 0 })) : (openBlock(), createBlock(Transition, {
                key: 1,
                name: "fade-slide-y",
                mode: "out-in",
                onBeforeEnter: unref(onBeforeEnter),
                onBeforeLeave: unref(onBeforeLeave)
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Page, {
                    key: unref(page).path
                  }))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onBeforeEnter", "onBeforeLeave"]))
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/layouts/Layout.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "Layout.vue"]]);
const _imports_0 = "/assets/taken-42974550.svg";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const routeLocale = useRouteLocale();
    const themeLocal = useThemeLocaleData();
    const goHome = () => {
      router.push(withBase(themeLocal.value.home || routeLocale.value));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Common, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="page-404-wrapper"${_scopeId}><div class="content"${_scopeId}><h1${_scopeId}>404</h1><p${_scopeId}>Oops! Page does not exist.</p><div class="xicon-container"${_scopeId}>Go Home</div></div><img${ssrRenderAttr("src", _imports_0)}${_scopeId}></section>`);
          } else {
            return [
              createVNode("section", { class: "page-404-wrapper" }, [
                createVNode("div", { class: "content" }, [
                  createVNode("h1", null, "404"),
                  createVNode("p", null, "Oops! Page does not exist."),
                  createVNode("div", {
                    class: "xicon-container",
                    onClick: goHome
                  }, "Go Home")
                ]),
                createVNode("img", { src: _imports_0 })
              ])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/layouts/NotFound.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "NotFound.vue"]]);
const perPage = 10;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Posts",
  __ssrInlineRender: true,
  setup(__props) {
    const { posts } = usePageData();
    const currentPage = ref(1);
    ref(0);
    const postsOfCurrentPage = computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = currentPage.value * perPage;
      return (posts || []).slice(start, end);
    });
    let handlePagation = (page) => {
    };
    const route = useRoute();
    useRouter();
    useRouteLocale();
    useThemeLocaleData();
    computed(() => route.query.page);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "posts-container" }, _attrs))}>`);
      _push(ssrRenderComponent(PostList, { data: postsOfCurrentPage.value }, null, _parent));
      _push(ssrRenderComponent(Pagation, {
        currentPage: currentPage.value,
        total: unref(posts).length,
        onChange: unref(handlePagation)
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/Posts.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Posts$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "Posts.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Posts",
  __ssrInlineRender: true,
  setup(__props) {
    const { initMagicCard } = useMagicCard();
    onMounted(() => {
      initMagicCard();
    });
    const route = useRoute();
    watch(route, () => {
      initMagicCard();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Common, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Posts$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Posts$1)
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/layouts/Posts.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Posts = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "Posts.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Timeline",
  __ssrInlineRender: true,
  setup(__props) {
    const { posts } = usePageData();
    const dataMap = {};
    posts.forEach((post) => {
      const [year, mounth, day] = formatISODate(post.frontmatter.date).split("-") || [];
      if (!year || !mounth || !day)
        return;
      if (!dataMap[year]) {
        dataMap[year] = [{
          ...post,
          date: `${mounth}-${day}`
        }];
        return;
      }
      dataMap[year].push({
        ...post,
        date: `${mounth}-${day}`
      });
    });
    const timelineData = Object.keys(dataMap).reduce(
      (all, next) => {
        all.push({
          year: next,
          data: dataMap[next]
        });
        return all;
      },
      []
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(Common, mergeProps({ class: "timeline-wrapper" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="timeline-content"${_scopeId}><!--[-->`);
            ssrRenderList(unref(timelineData), (item, index2) => {
              _push2(`<li${_scopeId}><h2 class="year"${_scopeId}>${ssrInterpolate(item.year)}</h2><ul class="year-wrapper"${_scopeId}><!--[-->`);
              ssrRenderList(item.data, (subItem, subIndex) => {
                _push2(`<li class="item"${_scopeId}><span class="date"${_scopeId}>${ssrInterpolate(subItem.date)}</span>`);
                _push2(ssrRenderComponent(_component_RouterLink, {
                  class: "title",
                  to: subItem.path
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(subItem.title)}`);
                    } else {
                      return [
                        createTextVNode(
                          toDisplayString(subItem.title),
                          1
                          /* TEXT */
                        )
                      ];
                    }
                  }),
                  _: 2
                  /* DYNAMIC */
                }, _parent2, _scopeId));
                _push2(`</li>`);
              });
              _push2(`<!--]--></ul></li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              createVNode("ul", { class: "timeline-content" }, [
                (openBlock(true), createBlock(
                  Fragment,
                  null,
                  renderList(unref(timelineData), (item, index2) => {
                    return openBlock(), createBlock("li", { key: index2 }, [
                      createVNode(
                        "h2",
                        { class: "year" },
                        toDisplayString(item.year),
                        1
                        /* TEXT */
                      ),
                      createVNode("ul", { class: "year-wrapper" }, [
                        (openBlock(true), createBlock(
                          Fragment,
                          null,
                          renderList(item.data, (subItem, subIndex) => {
                            return openBlock(), createBlock("li", {
                              key: subIndex,
                              class: "item"
                            }, [
                              createVNode(
                                "span",
                                { class: "date" },
                                toDisplayString(subItem.date),
                                1
                                /* TEXT */
                              ),
                              createVNode(_component_RouterLink, {
                                class: "title",
                                to: subItem.path
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(
                                    toDisplayString(subItem.title),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["to"])
                            ]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/layouts/Timeline.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Timeline = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "Timeline.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FriendshipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocal = useThemeLocaleData$1();
    const friendshipLinks = computed(() => {
      return themeLocal.value.friendshipLinks || [];
    });
    const handlClick = (link) => {
      window.open(link, "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "friendship-link-container" }, _attrs))}><!--[-->`);
      ssrRenderList(friendshipLinks.value, (item, index2) => {
        _push(ssrRenderComponent(unref(MagicCard), {
          class: "friendship-link-item",
          key: index2,
          onClick: () => handlClick(item.link)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="logo"${_scopeId}><img${ssrRenderAttr("src", item.logo)}${_scopeId}></div><span class="title"${_scopeId}>${ssrInterpolate(item.title)}</span>`);
            } else {
              return [
                createVNode("div", { class: "logo" }, [
                  createVNode("img", {
                    src: item.logo
                  }, null, 8, ["src"])
                ]),
                createVNode(
                  "span",
                  { class: "title" },
                  toDisplayString(item.title),
                  1
                  /* TEXT */
                )
              ];
            }
          }),
          _: 2
          /* DYNAMIC */
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/components/FriendshipLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FriendshipLink$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "FriendshipLink.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FriendshipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const { initMagicCard } = useMagicCard();
    onMounted(() => {
      initMagicCard();
    });
    const route = useRoute();
    watch(route, () => {
      initMagicCard();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Common, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(FriendshipLink$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(FriendshipLink$1)
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/vuepress-theme-reco/lib/client/layouts/FriendshipLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FriendshipLink = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "FriendshipLink.vue"]]);
const layouts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Categories,
  FriendshipLink,
  Layout,
  NotFound,
  Posts,
  Timeline
}, Symbol.toStringTag, { value: "Module" }));
const clientConfig13 = defineClientConfig({
  enhance(...args) {
    applyClientEnhance(...args);
  },
  setup() {
    applyClientSetup();
  },
  layouts
});
const hopeInject = "";
const clientConfig14 = {};
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new i32(b[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j2 = b[i2]; j2 < b[i2 + 1]; ++j2) {
      r2[j2] = j2 - b[i2] << 5 | i2;
    }
  }
  return { b, r: r2 };
};
var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b.b;
var rev = new u16(32768);
for (var i$1 = 0; i$1 < 32768; ++i$1) {
  var x = (i$1 & 43690) >> 1 | (i$1 & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i$1] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var hMap = function(cd, mb, r2) {
  var s = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 1; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v = le[cd[i2] - 1]++ << r_1;
        for (var m2 = v | (1 << r_1) - 1; v <= m2; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i2 = 0; i2 < s; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$1 = 0; i$1 < 144; ++i$1)
  flt[i$1] = 8;
for (var i$1 = 144; i$1 < 256; ++i$1)
  flt[i$1] = 9;
for (var i$1 = 256; i$1 < 280; ++i$1)
  flt[i$1] = 7;
for (var i$1 = 280; i$1 < 288; ++i$1)
  flt[i$1] = 8;
var fdt = new u8(32);
for (var i$1 = 0; i$1 < 32; ++i$1)
  fdt[i$1] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
  var m2 = a[0];
  for (var i2 = 1; i2 < a.length; ++i2) {
    if (a[i2] > m2)
      m2 = a[i2];
  }
  return m2;
};
var bits = function(d, p, m2) {
  var o2 = p / 8 | 0;
  return (d[o2] | d[o2 + 1] << 8) >> (p & 7) & m2;
};
var bits16 = function(d, p) {
  var o2 = p / 8 | 0;
  return (d[o2] | d[o2 + 1] << 8 | d[o2 + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  var n2 = new u8(e - s);
  n2.set(v.subarray(s, e));
  return n2;
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf || st.i != 2;
  var noSt = st.i;
  if (!buf)
    buf = new u8(sl * 3);
  var cbuf = function(l3) {
    var bl = buf.length;
    if (l3 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type2 = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type2) {
        var s = shft(pos) + 4, l2 = dat[s - 4] | dat[s - 3] << 8, t2 = s + l2;
        if (t2 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + l2);
        buf.set(dat.subarray(s, t2), bt);
        st.b = bt += l2, st.p = pos = t2 * 8, st.f = final;
        continue;
      } else if (type2 == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type2 == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s = r2 >> 4;
          if (s < 16) {
            ldt[i2++] = s;
          } else {
            var c = 0, n2 = 0;
            if (s == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i2 - 1];
            else if (s == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (noBuf)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b = fleb[i2];
          add = bits(dat, pos, (1 << b) - 1) + fl[i2];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; bt += 4) {
          buf[bt] = buf[bt - dt];
          buf[bt + 1] = buf[bt + 1 - dt];
          buf[bt + 2] = buf[bt + 2 - dt];
          buf[bt + 3] = buf[bt + 3 - dt];
        }
        bt = end;
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt == buf.length ? buf : slc(buf, 0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var zls = function(d, dict) {
  if ((d[0] & 15) != 8 || d[0] >> 4 > 7 || (d[0] << 8 | d[1]) % 31)
    err(6, "invalid zlib data");
  if ((d[1] >> 5 & 1) == +!dict)
    err(6, "invalid zlib data: " + (d[1] & 32 ? "need" : "unexpected") + " dictionary");
  return (d[1] >> 3 & 4) + 2;
};
function unzlibSync(data, opts) {
  return inflt(data.subarray(zls(data, opts && opts.dictionary), -4), { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var dutf8 = function(d) {
  for (var r2 = "", i2 = 0; ; ) {
    var c = d[i2++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i2 + eb > d.length)
      return { s: r2, r: slc(d, i2 - 1) };
    if (!eb)
      r2 += String.fromCharCode(c);
    else if (eb == 3) {
      c = ((c & 15) << 18 | (d[i2++] & 63) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c & 31) << 6 | d[i2++] & 63);
    else
      r2 += String.fromCharCode((c & 15) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l2 = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w2 = function(v) {
    ar[ai++] = v;
  };
  for (var i2 = 0; i2 < l2; ++i2) {
    if (ai + 5 > ar.length) {
      var n2 = new u8(ai + 8 + (l2 - i2 << 1));
      n2.set(ar);
      ar = n2;
    }
    var c = str.charCodeAt(i2);
    if (c < 128 || latin1)
      w2(c);
    else if (c < 2048)
      w2(192 | c >> 6), w2(128 | c & 63);
    else if (c > 55295 && c < 57344)
      c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i2) & 1023, w2(240 | c >> 18), w2(128 | c >> 12 & 63), w2(128 | c >> 6 & 63), w2(128 | c & 63);
    else
      w2(224 | c >> 12), w2(128 | c >> 6 & 63), w2(128 | c & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r2 = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r2 += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r2;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s = _a2.s, r2 = _a2.r;
    if (r2.length)
      err(8);
    return s;
  }
}
const C = ({ size: e = 48, stroke: t2 = 4, wrapper: n2 = true, height: o2 = 2 * e }) => {
  const i2 = h("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, preserveAspectRatio: "xMidYMid", viewBox: "25 25 50 50" }, [h("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", keyTimes: "0;1", repeatCount: "indefinite", values: "0;360" }), h("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": t2, "stroke-linecap": "round" }, [h("animate", { attributeName: "stroke-dasharray", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "1,200;90,200;1,200" }), h("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "0;-35px;-125px" })])]);
  return n2 ? h("div", { class: "loading-icon-wrapper", style: `display:flex;align-items:center;justify-content:center;height:${o2}px` }, i2) : i2;
};
C.displayName = "LoadingIcon";
const fe = (e) => typeof e == "function", ve = (e) => typeof e == "string";
function $e() {
  const e = ref(false);
  return getCurrentInstance() && onMounted(() => {
    e.value = true;
  }), e;
}
function ze(e) {
  return $e(), computed(() => !!e());
}
const Re = (e) => typeof e == "function", R = (e) => (e.endsWith(".md") && (e = `${e.slice(0, -3)}.html`), !e.endsWith("/") && !e.endsWith(".html") && (e = `${e}.html`), e = e.replace(/(^|\/)(?:README|index).html$/i, "$1"), e), A = (e) => {
  const [t2, n2 = ""] = e.split("#");
  return t2 ? `${R(t2)}${n2 ? `#${n2}` : ""}` : e;
};
const Fe = (e) => {
  const t2 = Buffer.from(e, "base64").toString("binary");
  return strFromU8(unzlibSync(strToU8(t2, true)));
}, w = (e, ...t2) => {
  const n2 = e.resolve(...t2), o2 = n2.matched[n2.matched.length - 1];
  if (!(o2 != null && o2.redirect))
    return n2;
  const { redirect: i2 } = o2, r2 = fe(i2) ? i2(n2) : i2, c = ve(r2) ? { path: r2 } : r2;
  return w(e, { hash: n2.hash, query: n2.query, params: n2.params, ...c });
}, y = (e) => {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget) {
      const t2 = e.currentTarget.getAttribute("target");
      if (t2 != null && t2.match(/\b_blank\b/i))
        return;
    }
    return e.preventDefault(), true;
  }
}, T$1 = (e) => {
  const t2 = useRouter(), n2 = useRoute(), o2 = computed(() => w(t2, unref(e))), i2 = computed(() => o2.value.fullPath === n2.fullPath), r2 = (c = {}) => y(c) ? t2.push(unref(e)).catch() : Promise.resolve();
  return { route: o2, href: computed(() => o2.value.href), isActive: i2, navigate: r2 };
};
defineComponent({ name: "RouterLink", props: { to: { type: String, required: true } }, slots: Object, setup(e, { slots: t2 }) {
  const n2 = toRef(e, "to"), o2 = T$1(n2);
  return () => {
    var i2;
    return h("a", { class: ["vp-link", { "vp-active": o2.isActive.value }], href: o2.href.value, onClick: o2.navigate }, (i2 = t2.default) == null ? void 0 : i2.call(t2, o2));
  };
} });
const j = ({ to: e = "" }, { slots: t2 }) => {
  var n2;
  const o2 = useRouter(), i2 = (r2 = {}) => y(r2) ? o2.push(e).catch() : Promise.resolve();
  return h("a", { class: "vp-link", href: withBase(A(e)), onClick: i2 }, (n2 = t2.default) == null ? void 0 : n2.call(t2));
};
j.displayName = "VPLink";
const V = () => ze(() => typeof window < "u" && window.navigator && "userAgent" in window.navigator), Xe = () => {
  const e = V();
  return computed(() => e.value && /\b(?:Android|iPhone)/i.test(navigator.userAgent));
}, Ze = (e) => {
  const t2 = useRouteLocale();
  return computed(() => e[t2.value]);
};
const vpCard = "";
const t$1 = ({ title: c, desc: e = "", logo: l2 = "", color: s = "", link: o2 = "" }) => {
  const i2 = [h("img", { class: "vp-card-logo", src: withBase(l2) }), h("div", { class: "vp-card-content" }, [h("div", { class: "vp-card-title", innerHTML: c }), h("hr"), h("div", { class: "vp-card-desc", innerHTML: e })])], a = { class: "vp-card" };
  return s && (a.style = { background: s }), isLinkExternal(o2) ? h("a", { href: o2, target: "_blank", ...a }, i2) : h(j, { to: o2, ...a }, () => i2);
};
t$1.displayName = "VPCard";
const mermaid = "";
let i = {};
const o$1 = Symbol(""), r = () => inject(o$1), t = (e) => {
  e.provide(o$1, i);
};
const o = { useMaxWidth: false }, L = (e) => ({ dark: e, background: e ? "#1e1e1e" : "#fff", primaryColor: e ? "#389d70" : "#4abf8a", primaryBorderColor: e ? "#389d70" : "#4abf8a", primaryTextColor: "#fff", secondaryColor: "#ffb500", secondaryBorderColor: e ? "#fff" : "#000", secondaryTextColor: e ? "#ddd" : "#333", tertiaryColor: e ? "#282828" : "#efeef4", tertiaryBorderColor: e ? "#bbb" : "#242424", tertiaryTextColor: e ? "#ddd" : "#333", noteBkgColor: e ? "#f6d365" : "#fff5ad", noteTextColor: "#242424", noteBorderColor: e ? "#f6d365" : "#333", lineColor: e ? "#d3d3d3" : "#333", textColor: e ? "#fff" : "#242424", mainBkg: e ? "#389d70" : "#4abf8a", errorBkgColor: "#eb4d5d", errorTextColor: "#fff", nodeBorder: e ? "#389d70" : "#4abf8a", nodeTextColor: e ? "#fff" : "#242424", signalTextColor: e ? "#9e9e9e" : "#242424", classText: "#fff", labelColor: "#fff", fillType0: e ? "#cf1322" : "#f1636e", fillType1: "#f39c12", fillType2: "#2ecc71", fillType3: "#fa541c", fillType4: "#25a55b", fillType5: "#13c2c2", fillType6: "#096dd9", fillType7: "#aa6fe9" });
var k = defineComponent({ name: "Mermaid", props: { id: { type: String, required: true }, code: { type: String, required: true } }, setup(e) {
  const { themeVariables: d, ...s } = r(), f = shallowRef(), m2 = computed(() => Fe(e.code)), l2 = ref(""), i2 = ref(false), c = async () => {
    const [{ default: t2 }] = await Promise.all([import("mermaid"), new Promise((r2) => setTimeout(r2, 800))]);
    t2.initialize({ theme: "base", themeVariables: { ...L(i2.value), ...Re(d) ? d(i2.value) : d }, flowchart: o, sequence: o, journey: o, gantt: o, er: o, pie: o, ...s, startOnLoad: false }), l2.value = (await t2.render(e.id, m2.value)).svg;
  }, p = () => {
    const { body: t2 } = document, r2 = document.createElement("div");
    r2.classList.add("mermaid-preview"), r2.innerHTML = l2.value, t2.appendChild(r2), r2.addEventListener("click", () => {
      t2.removeChild(r2);
    });
  }, u2 = () => {
    const t2 = `data:image/svg+xml;charset=utf8,${l2.value.replace(/<br>/g, "<br />").replace(/%/g, "%25").replace(/"/g, "%22").replace(/'/g, "%27").replace(/&/g, "%26").replace(/#/g, "%23").replace(/{/g, "%7B").replace(/}/g, "%7D").replace(/</g, "%3C").replace(/>/g, "%3E")}`, r2 = document.createElement("a");
    r2.setAttribute("href", t2), r2.setAttribute("download", `${e.id}.svg`), r2.click();
  };
  return onMounted(() => {
    const t2 = document.documentElement, r2 = () => t2.classList.contains("dark") || t2.getAttribute("data-theme") === "dark";
    i2.value = r2(), c(), useMutationObserver(t2, () => {
      i2.value = r2();
    }, { attributeFilter: ["class", "data-theme"], attributes: true }), watch(i2, () => c());
  }), () => [h("div", { class: "mermaid-actions" }, [h("button", { class: "preview-button", onClick: () => p(), title: "preview", innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>' }), h("button", { class: "download-button", onClick: () => u2(), title: "download", innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>' })]), h("div", { ref: f, class: "mermaid-wrapper" }, l2.value ? h("div", { class: "mermaid-content", innerHTML: l2.value }) : h(C, { class: "mermaid-loading", height: 96 }))];
} });
const clientConfig15 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("VPCard", t$1);
    t(app);
    app.component("Mermaid", k);
  },
  setup: () => {
  }
});
const balloon = "";
const button = "";
const S = 800, u = 2e3, M = { "/": { "copy": "复制代码", "copied": "Copied", "hint": "Copied successfully" } }, n = false, P = ['.theme-default-content div[class*="language-"] pre'], m = false;
const l = /* @__PURE__ */ new Map(), T = () => {
  const { copy: C2 } = useClipboard({ legacy: true }), a = Ze(M), g = usePageData$1(), i2 = Xe();
  const y2 = (o2) => {
    if (!o2.hasAttribute("copy-code-registered")) {
      const e = document.createElement("button");
      e.type = "button", e.classList.add("copy-code-button"), e.innerHTML = '<div class="copy-icon" />', e.setAttribute("aria-label", a.value.copy), e.setAttribute("data-copied", a.value.copied), o2.parentElement && o2.parentElement.insertBefore(e, o2), o2.setAttribute("copy-code-registered", "");
    }
  }, p = () => nextTick().then(() => new Promise((o2) => {
    setTimeout(() => {
      P.forEach((e) => {
        document.querySelectorAll(e).forEach(y2);
      }), o2();
    }, S);
  })), d = (o2, e, t2) => {
    let { innerText: s = "" } = e;
    /language-(shellscript|shell|bash|sh|zsh)/.test(o2.classList.toString()) && (s = s.replace(/^ *(\$|>) /gm, "")), C2(s).then(() => {
      t2.classList.add("copied"), clearTimeout(l.get(t2));
      const c = setTimeout(() => {
        t2.classList.remove("copied"), t2.blur(), l.delete(t2);
      }, u);
      if (l.set(t2, c), n)
        ;
    });
  };
  onMounted(() => {
    (!i2.value || m) && p(), useEventListener("click", (o2) => {
      const e = o2.target;
      if (e.matches('div[class*="language-"] > button.copy')) {
        const t2 = e.parentElement, s = e.nextElementSibling;
        s && d(t2, s, e);
      } else if (e.matches('div[class*="language-"] div.copy-icon')) {
        const t2 = e.parentElement, s = t2.parentElement, c = t2.nextElementSibling;
        c && d(s, c, t2);
      }
    }), watch(() => g.value.path, () => {
      (!i2.value || m) && p();
    });
  });
};
var Y = defineClientConfig({ setup: () => {
  T();
} });
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7,
  clientConfig8,
  clientConfig9,
  clientConfig10,
  clientConfig11,
  clientConfig12,
  clientConfig13,
  clientConfig14,
  clientConfig15,
  Y
];
const pagesRoutes = [
  ["v-01560935", "/timeline/", { "title": "" }, []],
  ["v-e1e3da16", "/posts/", { "title": "" }, []],
  ["v-53355ebb", "/friendship-link/", { "title": "" }, []],
  ["v-8daa1a0e", "/", { "title": "" }, ["/README.md"]],
  ["v-7d79a27e", "/contact/contact.html", { "title": "" }, [":md"]],
  ["v-4245b959", "/contributor/about.html", { "title": "社区贡献" }, [":md"]],
  ["v-5943370b", "/contributor/contributor.html", { "title": "源码下载" }, [":md"]],
  ["v-64a735ba", "/course/50-python-office.html", { "title": "视频教程" }, [":md"]],
  ["v-4c355ae0", "/guide/allFunc.html", { "title": "全部功能" }, [":md"]],
  ["v-d6c4d346", "/guide/init.html", { "title": "给非程序员的Python入门课，0基础适用（课程资料）" }, [":md"]],
  ["v-1c7b2593", "/guide/introduction.html", { "title": "项目说明" }, [":md"]],
  ["v-75d71331", "/guide/office.html", { "title": "下载和安装" }, [":md"]],
  ["v-588d113c", "/guide/requirement.html", { "title": "需求反馈" }, [":md"]],
  ["v-049ca5a7", "/office/datav.html", { "title": "数据可视化" }, [":md"]],
  ["v-66f34bd2", "/office/email.html", { "title": "Email" }, [":md"]],
  ["v-27a08bdc", "/office/excel.html", { "title": "Excel" }, [":md"]],
  ["v-4777fb7a", "/office/file.html", { "title": "文件管理" }, [":md"]],
  ["v-0f0043ce", "/office/finance.html", { "title": "金融数据分析" }, [":md"]],
  ["v-27edbbb8", "/office/image.html", { "title": "图片" }, [":md"]],
  ["v-6faea855", "/office/ocr.html", { "title": "OCR" }, [":md"]],
  ["v-10082dfe", "/office/pdf.html", { "title": "PDF" }, [":md"]],
  ["v-eaaaee82", "/office/ppt.html", { "title": "PPT" }, [":md"]],
  ["v-0fb74c09", "/office/robot.html", { "title": "聊天机器人" }, [":md"]],
  ["v-c35c2990", "/office/tools.html", { "title": "工具" }, [":md"]],
  ["v-1d7e4498", "/office/video.html", { "title": "视频" }, [":md"]],
  ["v-05920842", "/office/web.html", { "title": "网站搭建" }, [":md"]],
  ["v-5fc6f975", "/office/word.html", { "title": "Word" }, [":md"]],
  ["v-239da7bc", "/ref/git.html", { "title": "开源仓库" }, [":md"]],
  ["v-5239eb8a", "/ref/log.html", { "title": "重要更新" }, [":md"]],
  ["v-f3cdf6e6", "/ref/qaq.html", { "title": "常见问题" }, [":md"]],
  ["v-a26460ca", "/ref/ref.html", { "title": "参考资料" }, [":md"]],
  ["v-2b6c3082", "/video/func-list.html", { "title": "功能合集" }, [":md"]],
  ["v-718d4887", "/video/poocr.html", { "title": "文字识别" }, [":md"]],
  ["v-c0a7576a", "/video/video.html", { "title": "视频教程" }, [":md"]],
  ["v-adfe5b2c", "/course/docs/50-01-python.html", { "title": "【第1讲】Python3.11的下载、安装和卸载，有手就能学会" }, [":md"]],
  ["v-a4ac4706", "/course/docs/50-02-pycharm.html", { "title": "【第2讲】正版PyCharm，但是免费！最强Python 编辑器的下载和使用教程，还有中文插件哦~" }, [":md"]],
  ["v-80c2a3da", "/course/docs/50-03-pip.html", { "title": "【第3讲】不要重复造轮子原来是这个意思！pip的下载、安装和使用，编程准备工作最后一站" }, [":md"]],
  ["v-068e88ee", "/course/docs/50-04-docx2pdf.html", { "title": "【第4讲】Word文件转PDF文件，用Python怎么做？如果是1000个文件呢？" }, [":md"]],
  ["v-8e67e578", "/course/docs/50-05-docx2doc.html", { "title": "【Word】第1讲：100个Word文件批量转PDF，1行代码搞定" }, [":md"]],
  ["v-3a18ef8f", "/course/docs/50-06-merge4docx.html", { "title": "【Word】第1讲：100个Word文件批量转PDF，1行代码搞定" }, [":md"]],
  ["v-1def3232", "/course/docs/50-07-fake2excel.html", { "title": "" }, [":md"]],
  ["v-2f58aad0", "/po/poword/doc2docx.html", { "title": "Test" }, [":md"]],
  ["v-3706649a", "/404.html", { "title": "" }, []]
];
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const layout = usePageLayout();
    return () => h(layout.value);
  }
});
var createRoutes = () => pagesRoutes.reduce(
  (result, [name2, path, meta, redirects]) => {
    result.push(
      {
        name: name2,
        path,
        component: Vuepress,
        meta
      },
      {
        path: path.endsWith("/") ? (
          // redirect from `/index.html` to `/`
          path + "index.html"
        ) : (
          // redirect from `/foo` to `/foo.html`
          path.substring(0, path.length - 5)
        ),
        redirect: path
      },
      ...redirects.map((item) => ({
        path: item === ":md" ? (
          // redirect from `/foo.md` to `/foo.html`
          path.substring(0, path.length - 5) + ".md"
        ) : item,
        redirect: path
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress
    }
  ]
);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const layouts2 = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routePath = computedEager(() => router.currentRoute.value.path);
  const routeLocale = computedEager(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageFrontmatter = computed(
    () => resolvers.resolvePageFrontmatter(pageData.value)
  );
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(
    () => resolvers.resolvePageLang(pageData.value, siteLocaleData.value)
  );
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts2.value)
  );
  app.provide(layoutsSymbol, layouts2);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  app.provide(pageLayoutSymbol, pageLayout);
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    layouts: layouts2,
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h(RouterView),
        ...clientConfigs.flatMap(
          ({ rootComponents = [] }) => rootComponents.map((component) => h(component))
        )
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  _export_sfc as _,
  createVueApp
};
