---
# 当前页面内容标题
title: Online Scheduling
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
## 概念

不提前知道工作的数量和加工时间(运行时有新任务加入)

## Theorem 3.7.1

### 相关概念

clairvouyant（透视）：当decision-maker接到工作时，它收到的是工作的所有信息：加工时间、工期、权重

non-clairvouyant：当decision-maker接到工作时，它不知道工作信息，只有当工作完成时，它才能知道加工时间

partially-clairvouyant：当decision-maker接到工作时，它知道工作的工期

fully-clairvouyant：当decision-maker接到工作时，知道工作的工期和加工时间

Shortest Remaining Processing Time First：SRPT

### 内容

对于形式为 $1|r_j, prmp|\sum C_j$ 的clairvouyant online-over-time 问题，它的可中段SRPT规则的Competitive ratio是1.

## Theorem 3.7.2

对于形式为 $1|r_j, prmp|L_{max}$ 的fully-clairvouyant 以及partially-clairvouyant online-over-time 问题，它的可中段EDD规则的Competitive ratio是1.

## Theorem 3.7.3

### 相关概念

Round Robin algorithmn (RR算法)

### 内容

对于形式为 $1| prmp|\sum C_j$ 的non-clairvouyant online-over-time 问题，它的RR算法的Competitive ratio是2.

## Theorem 3.7.5

对于形式为 $1| prmp|\sum \omega_jC_j$ 的partially-clairvouyant online-over-time 问题，它的WRR(Weighted Round Robin)算法的Competitive ratio是2.