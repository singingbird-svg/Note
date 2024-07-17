export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"y":"h","t":"个人主页","i":"home"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "disable.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"y":"a","t":"布局与功能禁用","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "encrypt.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"y":"a","t":"密码加密的文章","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "layout.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"y":"a","t":"布局","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "markdown.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"y":"a","t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "page.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"y":"a","t":"页面配置","i":"file","O":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"y":"a","t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"y":"a","t":"指南","i":"lightbulb"} }],
  ["/codenotes/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/codenotes/index.html.js"), meta: {"y":"p","t":"代码存储","i":"code"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "baz.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"y":"a","t":"Baz","i":"circle-info"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"y":"a","t":"Bar 功能","i":"lightbulb"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "ray.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"y":"a","t":"Ray","i":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"y":"a","t":"Foo 功能","i":"lightbulb"} }],
  ["/codenotes/uav_race/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/codenotes/uav_race/index.html.js"), meta: {"y":"p","t":"无人机比赛","i":"code"} }],
  ["/codenotes/uav_race/ascup_race/ascup_race.html", { loader: () => import(/* webpackChunkName: "ascup_race.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/codenotes/uav_race/ascup_race/ascup_race.html.js"), meta: {"y":"p","t":"ascup race","i":"code"} }],
  ["/resources/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/resources/index.html.js"), meta: {"y":"p","t":"资源目录页","i":"advance"} }],
  ["/resources/books/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/resources/books/index.html.js"), meta: {"y":"a","t":"书籍资源","i":"animation"} }],
  ["/resources/videos/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/resources/videos/index.html.js"), meta: {"y":"a","t":"影音资源","i":"play"} }],
  ["/resources/papers/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/resources/papers/index.html.js"), meta: {"y":"a","t":"影音资源","i":"play"} }],
  ["/others/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/others/index.html.js"), meta: {"y":"p","t":"课外杂学","i":"note"} }],
  ["/others/websafe/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/others/websafe/index.html.js"), meta: {"y":"p","t":"智能算法整理","i":"linter"} }],
  ["/others/websafe/info_collect/info.html", { loader: () => import(/* webpackChunkName: "info.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/others/websafe/info_collect/info.html.js"), meta: {"y":"p","t":"信息收集","i":"linter"} }],
  ["/basic_knowledge/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/index.html.js"), meta: {"y":"p","t":"基础知识","i":"note"} }],
  ["/basic_knowledge/smart/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/smart/index.html.js"), meta: {"y":"p","t":"智能算法整理","i":"linter"} }],
  ["/basic_knowledge/smart/ACO/aco.html", { loader: () => import(/* webpackChunkName: "aco.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/smart/ACO/aco.html.js"), meta: {"y":"p","t":"智能算法整理","i":"linter"} }],
  ["/basic_knowledge/benchmark/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/benchmark/index.html.js"), meta: {"y":"p","t":"基本算例","i":"linter"} }],
  ["/basic_knowledge/concept/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/index.html.js"), meta: {"y":"p","t":"基本概念整理","i":"linter"} }],
  ["/basic_knowledge/Scheduling/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/index.html.js"), meta: {"y":"p","t":"Scheduling","i":"linter"} }],
  ["/basic_knowledge/concept/AAC/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/AAC/index.html.js"), meta: {"y":"p","t":"算法自动组合","i":"linter"} }],
  ["/basic_knowledge/concept/AACON/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/AACON/index.html.js"), meta: {"y":"p","t":"算法自动配置","i":"linter"} }],
  ["/basic_knowledge/concept/AAS/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/AAS/index.html.js"), meta: {"y":"p","t":"算法自动选择","i":"linter"} }],
  ["/basic_knowledge/smart/GA/ga.html", { loader: () => import(/* webpackChunkName: "ga.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/smart/GA/ga.html.js"), meta: {"y":"p","t":"智能算法整理","i":"linter"} }],
  ["/basic_knowledge/concept/gap/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/gap/index.html.js"), meta: {"y":"p","t":"VBS-SBS间隙","i":"linter"} }],
  ["/basic_knowledge/concept/GCOP/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/GCOP/index.html.js"), meta: {"y":"p","t":"一般组合优化问题","i":"linter"} }],
  ["/basic_knowledge/concept/meta_h/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/meta_h/index.html.js"), meta: {"y":"p","t":"元启发式","i":"linter"} }],
  ["/basic_knowledge/smart/IA/ia.html", { loader: () => import(/* webpackChunkName: "ia.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/smart/IA/ia.html.js"), meta: {"y":"p","t":"智能算法整理","i":"linter"} }],
  ["/basic_knowledge/concept/meta_o/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/meta_o/index.html.js"), meta: {"y":"p","t":"元优化问题","i":"linter"} }],
  ["/basic_knowledge/smart/DE/de.html", { loader: () => import(/* webpackChunkName: "de.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/smart/DE/de.html.js"), meta: {"y":"p","t":"智能算法整理","i":"linter"} }],
  ["/basic_knowledge/concept/per_instance/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/per_instance/index.html.js"), meta: {"y":"p","t":"每实例算法选择问题","i":"linter"} }],
  ["/basic_knowledge/concept/SBS/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/SBS/index.html.js"), meta: {"y":"p","t":"单次最佳求解器","i":"linter"} }],
  ["/basic_knowledge/concept/orthogonal_array/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/orthogonal_array/index.html.js"), meta: {"y":"p","t":"正交阵列","i":"linter"} }],
  ["/basic_knowledge/concept/bottom_up/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/bottom_up/index.html.js"), meta: {"y":"p","t":"从下至上","i":"linter"} }],
  ["/basic_knowledge/concept/%E5%A4%9A%E9%A1%B9%E5%BC%8F%E6%97%B6%E9%97%B4/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/多项式时间/index.html.js"), meta: {"y":"p","t":"多项式时间","i":"linter"} }],
  ["/basic_knowledge/concept/top_down/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/top_down/index.html.js"), meta: {"y":"p","t":"从上至下","i":"linter"} }],
  ["/basic_knowledge/concept/NP/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/NP/index.html.js"), meta: {"y":"p","t":"NP","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Deterministic.html", { loader: () => import(/* webpackChunkName: "Deterministic.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Deterministic.html.js"), meta: {"y":"p","t":"Deterministic Models","i":"linter"} }],
  ["/basic_knowledge/concept/VBS/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/concept/VBS/index.html.js"), meta: {"y":"p","t":"虚拟最佳求解器","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Models/Models.html", { loader: () => import(/* webpackChunkName: "Models.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Models/Models.html.js"), meta: {"y":"p","t":"Models","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Models/%E8%B0%83%E5%BA%A6%E7%B1%BB%E5%9E%8B/Classes.html", { loader: () => import(/* webpackChunkName: "Classes.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Models/调度类型/Classes.html.js"), meta: {"y":"p","t":"调度分类","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Models/Framework/Framework.html", { loader: () => import(/* webpackChunkName: "Framework.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Models/Framework/Framework.html.js"), meta: {"y":"p","t":"Framework","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single/Single.html", { loader: () => import(/* webpackChunkName: "Single.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single/Single.html.js"), meta: {"y":"p","t":"Models","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single/online/online.html", { loader: () => import(/* webpackChunkName: "online.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single/online/online.html.js"), meta: {"y":"p","t":"Online Scheduling","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single/Total_weighted/Total_weighted.html", { loader: () => import(/* webpackChunkName: "Total_weighted.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single/Total_weighted/Total_weighted.html.js"), meta: {"y":"p","t":"Total Weighted Completion Time","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single/Maxium_Lateness/Maxium.html", { loader: () => import(/* webpackChunkName: "Maxium.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single/Maxium_Lateness/Maxium.html.js"), meta: {"y":"p","t":"Maxium Lateness","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single/number/number.html", { loader: () => import(/* webpackChunkName: "number.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single/number/number.html.js"), meta: {"y":"p","t":"The Number of Trady Jobs","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single/tardiness/tardiness.html", { loader: () => import(/* webpackChunkName: "tardiness.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single/tardiness/tardiness.html.js"), meta: {"y":"p","t":"Total Tardiness","i":"linter"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"y":"p","t":""} }],
  ["/codenotes/uav_race/ascup_race/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/codenotes/uav_race/ascup_race/index.html.js"), meta: {"y":"p","t":"Ascup Race"} }],
  ["/others/websafe/info_collect/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/others/websafe/info_collect/index.html.js"), meta: {"y":"p","t":"Info Collect"} }],
  ["/basic_knowledge/smart/ACO/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/smart/ACO/index.html.js"), meta: {"y":"p","t":"ACO"} }],
  ["/basic_knowledge/smart/GA/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/smart/GA/index.html.js"), meta: {"y":"p","t":"GA"} }],
  ["/basic_knowledge/smart/IA/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/smart/IA/index.html.js"), meta: {"y":"p","t":"IA"} }],
  ["/basic_knowledge/smart/DE/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/smart/DE/index.html.js"), meta: {"y":"p","t":"DE"} }],
  ["/basic_knowledge/Scheduling/Deterministic/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/index.html.js"), meta: {"y":"p","t":"Deterministic"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Models/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Models/index.html.js"), meta: {"y":"p","t":"Models"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Models/%E8%B0%83%E5%BA%A6%E7%B1%BB%E5%9E%8B/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Models/调度类型/index.html.js"), meta: {"y":"p","t":"调度类型"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Models/Framework/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Models/Framework/index.html.js"), meta: {"y":"p","t":"Framework"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single/index.html.js"), meta: {"y":"p","t":"Single"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single/online/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single/online/index.html.js"), meta: {"y":"p","t":"Online"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single/Total_weighted/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single/Total_weighted/index.html.js"), meta: {"y":"p","t":"Total Weighted"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single/Maxium_Lateness/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single/Maxium_Lateness/index.html.js"), meta: {"y":"p","t":"Maxium Lateness"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single/number/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single/number/index.html.js"), meta: {"y":"p","t":"Number"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single/tardiness/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single/tardiness/index.html.js"), meta: {"y":"p","t":"Tardiness"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single%20-%20%E5%89%AF%E6%9C%AC/Single.html", { loader: () => import(/* webpackChunkName: "Single.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single - 副本/Single.html.js"), meta: {"y":"p","t":"Models","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single%20-%20%E5%89%AF%E6%9C%AC/Maxium_Lateness/Maxium.html", { loader: () => import(/* webpackChunkName: "Maxium.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single - 副本/Maxium_Lateness/Maxium.html.js"), meta: {"y":"p","t":"Maxium Lateness","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single%20-%20%E5%89%AF%E6%9C%AC/number/number.html", { loader: () => import(/* webpackChunkName: "number.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single - 副本/number/number.html.js"), meta: {"y":"p","t":"The Number of Trady Jobs","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single%20-%20%E5%89%AF%E6%9C%AC/online/online.html", { loader: () => import(/* webpackChunkName: "online.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single - 副本/online/online.html.js"), meta: {"y":"p","t":"Online Scheduling","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single%20-%20%E5%89%AF%E6%9C%AC/tardiness/tardiness.html", { loader: () => import(/* webpackChunkName: "tardiness.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single - 副本/tardiness/tardiness.html.js"), meta: {"y":"p","t":"Total Tardiness","i":"linter"} }],
  ["/basic_knowledge/Scheduling/Deterministic/Single%20-%20%E5%89%AF%E6%9C%AC/Total_weighted/Total_weighted.html", { loader: () => import(/* webpackChunkName: "Total_weighted.html" */"D:/projectsvuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/basic_knowledge/Scheduling/Deterministic/Single - 副本/Total_weighted/Total_weighted.html.js"), meta: {"y":"p","t":"Total Weighted Completion Time","i":"linter"} }],
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
