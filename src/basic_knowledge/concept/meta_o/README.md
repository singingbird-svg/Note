---
# 当前页面内容标题
title: 元优化问题
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
 
meta-optimization problem

## 英文释义

Metaheuristic optimization methods attempt to find good solutions to a problem by iteratively trying to improve a (set of) candidate solution(s)


## 中文释义

元启发式优化方法试图通过迭代地尝试改进一个(集合)候选解来找到问题的良好解决方案。

## 形式

一般来说，优化问题可以被建模为以下形式：

  Find x ∈ S such that any y ∈ S：f(x) ≤ f(y)

S是候选解的集合，即搜索空间，f是要最小化的目标函数

## 搜索空间

元启发式的可能设计

pi  (1 ≤ i ≤ n )：设计元启发式时的不同决策，每个都有一组可供选的Di

配置（configuration）：一个配置是这种选择(每个设计决策一个)的组合，每个配置对应一个具体的实现。

设计空间：配置的集合

搜索空间：我们认为有趣的(即修剪后)的设计空间的子集。

值得注意的是，设计决策可以是有条件的，例如对pj的选择只有当pi = a时才是相关的。

## 目标函数

目标函数用来量化一个方法的好坏程度。

为此，通常在一组基准实例上评估其性能。

虽然在一组基准实例上优化性能可以被认为是一个多目标优化问题，但通常目标函数是标量化的，将所有基准实例上的平均性能作为单目标。

## 来源

Designing Reusable Metaheuristic Methods: A Semi-automated Approach
