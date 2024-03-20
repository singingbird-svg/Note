import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 代码存储的侧边栏
  "/codenotes/": [
    {
      text: "无人机比赛",
      icon: "C++",
      collapsible: true,
      link: "/codenotes/uav_race/",
      },
  ],

  // 基础知识的侧边栏
  "/basic_knowledge/": [
    {
      text: "基本概念整理",
      icon: "linter",
      collapsible: true,
      link: "/basic_knowledge/concept/",
    },
    {
      text: "深度学习",
      icon: "computer",
      collapsible: true,
      link: "/basic_knowledge/deeplearning/",
    },
    {
      text: "强化学习",
      icon: "strong",
      collapsible: true,
      link: "/basic_knowledge/rl/",
    },
    {
      text: "智能算法",
      icon: "style",
      collapsible: true,
      link: "/basic_knowledge/smart/",
    },
  ],

  // 论文整理的侧边栏
  "/paper/": [
    {
      text: "自动算法设计",
      icon: "guide",
      collapsible: true,
      link: "/paper/AAD/",
    },
  ],
});
