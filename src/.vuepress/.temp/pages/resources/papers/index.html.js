import comp from "D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/resources/papers/index.html.vue"
const data = JSON.parse("{\"path\":\"/resources/papers/\",\"title\":\"影音资源\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"影音资源\",\"icon\":\"play\",\"category\":[\"影视\",\"音乐\"],\"tag\":[\"影视\",\"音乐\"],\"sticky\":false,\"star\":false,\"article\":true,\"timeline\":true,\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/singingbird-svg/mydocs/resources/papers/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"文档演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"影音资源\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"singingbird\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"影视\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"音乐\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"影音资源\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"singingbird\\\",\\\"url\\\":\\\"https://github.com/singingbird-svg\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.33,\"words\":100},\"filePathRelative\":\"resources/papers/README.md\"}")
export { comp, data }

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
