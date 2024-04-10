export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"y":"h","t":"个人主页","i":"home"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "disable.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"y":"a","t":"布局与功能禁用","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "encrypt.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"y":"a","t":"密码加密的文章","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "layout.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"y":"a","t":"布局","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "markdown.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"y":"a","t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "page.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"y":"a","t":"页面配置","i":"file","O":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"y":"a","t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/basic_knowledge/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/index.html.js"), meta: {"y":"p","t":"基础知识","i":"note"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"y":"a","t":"指南","i":"lightbulb"} }],
  ["/codenotes/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/codenotes/index.html.js"), meta: {"y":"p","t":"代码存储","i":"code"} }],
  ["/others/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/others/index.html.js"), meta: {"y":"p","t":"课外杂学","i":"note"} }],
  ["/resources/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/resources/index.html.js"), meta: {"y":"p","t":"资源目录页","i":"advance"} }],
  ["/basic_knowledge/concept/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/index.html.js"), meta: {"y":"p","t":"基本概念整理","i":"linter"} }],
  ["/basic_knowledge/smart/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/smart/index.html.js"), meta: {"y":"p","t":"智能算法整理","i":"linter"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "baz.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"y":"a","t":"Baz","i":"circle-info"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"y":"a","t":"Bar 功能","i":"lightbulb"} }],
  ["/codenotes/uav_race/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/codenotes/uav_race/index.html.js"), meta: {"y":"p","t":"无人机比赛","i":"code"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "ray.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"y":"a","t":"Ray","i":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"y":"a","t":"Foo 功能","i":"lightbulb"} }],
  ["/others/websafe/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/others/websafe/index.html.js"), meta: {"y":"p","t":"智能算法整理","i":"linter"} }],
  ["/resources/books/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/resources/books/index.html.js"), meta: {"y":"a","t":"书籍资源","i":"animation"} }],
  ["/resources/papers/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/resources/papers/index.html.js"), meta: {"y":"a","t":"影音资源","i":"play"} }],
  ["/resources/videos/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/resources/videos/index.html.js"), meta: {"y":"a","t":"影音资源","i":"play"} }],
  ["/basic_knowledge/concept/gap/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/gap/index.html.js"), meta: {"y":"p","t":"VBS-SBS间隙","i":"linter"} }],
  ["/basic_knowledge/concept/per_instance/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/per_instance/index.html.js"), meta: {"y":"p","t":"每实例算法选择问题","i":"linter"} }],
  ["/basic_knowledge/concept/SBS/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/SBS/index.html.js"), meta: {"y":"p","t":"单次最佳求解器","i":"linter"} }],
  ["/basic_knowledge/concept/meta_h/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/meta_h/index.html.js"), meta: {"y":"p","t":"元启发式","i":"linter"} }],
  ["/basic_knowledge/concept/VBS/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/VBS/index.html.js"), meta: {"y":"p","t":"虚拟最佳求解器","i":"linter"} }],
  ["/others/websafe/info_collect/info.html", { loader: () => import(/* webpackChunkName: "info.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/others/websafe/info_collect/info.html.js"), meta: {"y":"p","t":"信息收集","i":"linter"} }],
  ["/basic_knowledge/smart/GA/ga.html", { loader: () => import(/* webpackChunkName: "ga.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/smart/GA/ga.html.js"), meta: {"y":"p","t":"智能算法整理","i":"linter"} }],
  ["/codenotes/uav_race/ascup_race/ascup_race.html", { loader: () => import(/* webpackChunkName: "ascup_race.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/codenotes/uav_race/ascup_race/ascup_race.html.js"), meta: {"y":"p","t":"ascup race","i":"code"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"y":"p","t":""} }],
  ["/others/websafe/info_collect/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/others/websafe/info_collect/index.html.js"), meta: {"y":"p","t":"Info Collect"} }],
  ["/basic_knowledge/smart/GA/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/smart/GA/index.html.js"), meta: {"y":"p","t":"GA"} }],
  ["/codenotes/uav_race/ascup_race/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/codenotes/uav_race/ascup_race/index.html.js"), meta: {"y":"p","t":"Ascup Race"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
