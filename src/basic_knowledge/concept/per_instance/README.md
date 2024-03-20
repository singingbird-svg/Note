---
# 当前页面内容标题
title: 每实例算法选择问题
# 当前页面图标
icon: linter
# 分类
category:
  - 目录
  - 导航
# 标签
tag:
  - 目录
  - 导航
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false
---
## 英文
 
 per-instance algorithm selection problem
## 英文释义

given a computational problem, a set of algorithms for solving this problem, and a specific instance that needs to be solved, determine which of the algorithms can be expected to perform best on that instance

## 中文释义

给定一个计算问题、一组用于解决该问题的算法和一个需要解决的特定实例，确定哪种算法在该实例上的性能最好

## 问题建模

给定问题*P*的一组实例集合*I*，*P*的算法集合*A={A1, A2,..., An}* 以及矩阵 *m*：*A × I ->R* 。其中，*m*用来度量*A*中的每个的算法在*I*中实例上的表现。构建一个选择器(selector)*S*, 将*I*中的每个实例*i*映射为*A*中的算法*S(i)*，使得*S*在*I*上的性能最优（根据度量矩阵*m*）。

## 来源

Automated Algorithm Selection: : Survey and Perspective p4, 第二段； p6, Section2, 第一段
