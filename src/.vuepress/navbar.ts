import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "快速导航", icon: "navigation", link: "/quicknav/" },
  { text: "代码存储", icon: "code", link: "/codenotes/" },
  { text: "基础知识", icon: "note", link: "/basic_knowledge/" },
  { text: "论文整理", icon: "note", link: "/floatinglife/" },
  {
    text: "资源宝库",
    icon: "advance",
    prefix: "/resources/",
    children: [
      {
        text: "书籍资源",
        icon: "animation",
        link: "books/",
      },
      {
        text: "论文资源",
        icon: "paper",
        link: "papers/",
      },
      {
        text: "视频资源",
        icon: "play",
        link: "videos/",
      },
    ],
  },
  { text: "课外杂学", icon: "note", link: "/others/" },
]);

