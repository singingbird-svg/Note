import comp from "D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"个人主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"个人主页\",\"heroImage\":\"/logo.png\",\"heroText\":\"唱歌鸟的小木屋\",\"tagline\":\"🐟摸鱼的有一天🐟\",\"actions\":[{\"text\":\"【快速导航】\",\"link\":\"/quicknav/\",\"type\":\"primary\"},{\"text\":\"【代码存储】\",\"link\":\"/codenotes/\"},{\"text\":\"【基础知识】\",\"link\":\"/basic_knowledge/\"},{\"text\":\"【论文整理】\",\"link\":\"/paper/\"}],\"features\":[{\"title\":\"github\",\"icon\":\"/othericon/douyin.svg\",\"details\":\"github\",\"link\":\"https://www.douyin.com/user/MS4wLjABAAAAk77SKAU4RV-_N9gURY59Bbbg82Wlbw7QQVftHhMdRPM\"}],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/singingbird-svg/mydocs/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"文档演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"个人主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"singingbird\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"个人主页\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.23,\"words\":68},\"filePathRelative\":\"README.md\"}")
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
