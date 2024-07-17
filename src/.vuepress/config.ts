import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
// import { vuepress-plugin-mathjax } from "@vuepress/plugin-mathjax";
// import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";
import theme from "./theme.js";


export default defineUserConfig({
  base: "/Note/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",

  // extendsMarkdown: md => {
  //   md.use(require('markdown-it-mathjax3'))
  //   md.linkify.set({ fuzzyEmail: false })
  // },
//   extendsMarkdown: (md) => {
//     md.use(katex);
//     md.linkify.set({ fuzzyEmail: false });
// },
  theme,
  plugins: [
    // // 注册全局组件的插件
    // registerComponentsPlugin({
    //   componentsDir: path.resolve(__dirname, "./components"),
    // }),
    // 搜索插件

        // [
        //   'vuepress-plugin-mathjax',
        //   {
        //     target: 'svg',
        //     macros: {
        //       '*': '\\times',
        //     },
        //   },
        // ],
       mdEnhancePlugin({
          // 使用 KaTeX 启用 TeX 支持
          katex: true,
          // 使用 mathjax 启用 TeX 支持
          mathjax: true,
        }),
    searchPlugin({
      //多语言支持
      locales: {
        "/": {
          placeholder: "搜索本站",
        },
      },
      // 热键支持
      hotKeys: ["command", "k"],
      // 最大推荐个数
      maxSuggestions: 7,
      // 排除首页
      isSearchable: (page) => page.path !== "/",
    }),
  ],
  shouldPrefetch: false,
});
