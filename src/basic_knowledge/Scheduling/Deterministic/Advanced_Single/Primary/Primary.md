---
# 当前页面内容标题
title: Maxium Lateness
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
## 表达式

single machine |优先约束|最小化最大延迟

$$1|prec|h_{max}$$

$$h_{max} = max(h_1(C_1),...,h_n(C_n))$$

$h_j$不减

## 相关定义

$C_{max}$：最后的工作完成时间

$J$：已经规划好的工作，在时间间隔[$C_{max}-\sum_{j \in J}p_j$, $C_{max}$] 执行

$J^c$：$J$的补集

$J'$：$J^c$中当前可以调度的



## 算法 3.2.1 (Lowest Cost Last)

可用后向算法解决
* step1： 
$$J=\empty, J^c = {1,...,n}$$
$J'$为所有没有后继的工作的集合

* step2：选择$j^*$使得
$$h_{j^*}(\sum_{k \in J^c}p_k) = min_{j \in J'}(h_{j}(\sum_{k \in J^c}p_k))$$
$\quad$ $\quad$ 将$j^*$加入$J$，从$J^c$删除$j^*$，更新$J'$。(即选择延迟最小的)
* step3

$\quad$ $\quad$如果$J^c = \empty$，停止

## Theorem 3.2.2

LCL算法为$1|prec|h_{max}$求得的解为最优解

## Theorem 3.2.4 

$1|r_j|L_{max}$是NP-hard问题

## 分支定界

分支定界求解$1|r_j|L_{max}$见书p43-p44