import comp from "D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/resources/index.html.vue"
const data = JSON.parse("{\"path\":\"/resources/\",\"title\":\"资源目录页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"资源目录页\",\"icon\":\"advance\",\"category\":[\"目录\",\"导航\"],\"tag\":[\"目录\",\"导航\"],\"sticky\":false,\"star\":false,\"article\":false,\"timeline\":false,\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/singingbird-svg/mydocs/resources/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"文档演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"资源目录页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"singingbird\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"目录\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"导航\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"资源目录页\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.34,\"words\":101},\"filePathRelative\":\"resources/README.md\"}")
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
