import comp from "D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/index.html.vue"
const data = JSON.parse("{\"path\":\"/basic_knowledge/\",\"title\":\"基础知识\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"基础知识\",\"icon\":\"note\",\"category\":[\"目录\",\"导航\"],\"tag\":[\"目录\",\"导航\"],\"sticky\":false,\"star\":false,\"article\":false,\"timeline\":false,\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/singingbird-svg/Note/basic_knowledge/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"文档演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"基础知识\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"singingbird\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"目录\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"导航\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"基础知识\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.48,\"words\":145},\"filePathRelative\":\"basic_knowledge/README.md\"}")
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
