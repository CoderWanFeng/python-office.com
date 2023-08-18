export const data = JSON.parse("{\"key\":\"v-2f58aad0\",\"path\":\"/po/poword/doc2docx.html\",\"title\":\"Test\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"po/poword/doc2docx.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
