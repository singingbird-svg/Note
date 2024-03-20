import comp from "D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/resources/books/index.html.vue"
const data = JSON.parse("{\"path\":\"/resources/books/\",\"title\":\"书籍资源\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"书籍资源\",\"icon\":\"animation\",\"category\":[\"书籍\"],\"tag\":[\"书籍\"],\"sticky\":false,\"star\":false,\"article\":true,\"timeline\":true,\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/singingbird-svg/mydocs/resources/books/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"文档演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"书籍资源\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"singingbird\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"书籍\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"书籍资源\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"singingbird\\\",\\\"url\\\":\\\"https://github.com/singingbird-svg\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.84,\"words\":252},\"filePathRelative\":\"resources/books/README.md\"}")
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
