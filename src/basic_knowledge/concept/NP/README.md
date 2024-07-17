---
# 当前页面内容标题
title: NP
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




# NP问题


## NP英文
 
 Non-deterministic Polynomial 

## NP英文释义

暂无

## NP中文释义

 NP问题（Non-deterministic Polynomial Problem，非确定性多项式问题），指问题只能通过验证给定的猜测是否正确来求解。所谓多项式指的是验证猜测可在多项式时间内完成，所谓非确定性指的是问题只能通过验证猜测来解，而不能直接求解。

# NPC问题

## NPC英文
 
 Non-deterministic Polynomial Complete Problem

## NPC英文释义

暂无

## NPC中文释义

NP完全问题。满足以下两个条件：

 （1）它是一个NP问题； 

 （2）所有的NP问题都可以用多项式时间约化到它

它可以在多项式时间内求解，当且仅当所有的其他的NP完全问题也可以在多项式时间内求解。这样一来,只要我们找到一个NPC问题的多项式解，所有的NP问题都可以多项式时间内约化成这个NPC问题，再用多项式时间解决，这样NP就等于P了。NPC问题目前没有多项式时间复杂度的有效算法，只能用指数级甚至阶乘级复杂度的搜索。

# NPH问题

## NPH英文
 
 Non-deterministic Polynomial Hard Problem

## NPH英文释义

暂无

## NPH中文释义

NPH问题（NP难问题，NP-hard问题），其满足NPC问题定义的第二条但不一定要满足第一条（就是说，NP-Hard问题要比NPC问题的范围广，但不一定是NP问题）。

NP-Hard问题同样难以找到多项式时间复杂度的算法，它不一定是NP问题。即使NPC问题发现了多项式级的算法，NP-Hard问题有可能仍然无法得到多项式级的算法。事实上，由于NP-Hard放宽了限定条件，它将有可能比所有的NPC问题的时间复杂度更高从而更难以解决。



