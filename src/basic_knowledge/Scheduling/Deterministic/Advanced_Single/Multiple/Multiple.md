---
# 当前页面内容标题
title: Total Weighted Completion Time
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

$$1||\sum\omega_jC_j$$

## Theorem 3.1.1.(WSPT)

简单来说，就是以Total weighted Completion Time 为目标函数的Single Machine调度问题，它的最优解必然满足WSPT（Weighted Shortest Processing Time first），即$\omega_j/p_j$为降序，即按单位时间收益进行排序（算法复杂度$O(nlogn)$）

## Lemma 3.1.2

在有约束的情况下，对Theorem 3.1.1.进行了扩展。

### 约束

以两条约束链为例。

chain1：

1->2->3...->k

chain2:

k+1->k+2->...->n

只能先将chain1完成再完成chain2， 或将chain2完成再完成chain1 

### 引理内容

实际上，是将chain的内容视为一个整体。

即， 如果
$$\frac{\sum_{j=1}^{k} \omega_j}{\sum_{j=1}^{k} p_j} > \frac{\sum_{j=k+1}^{n} \omega_j}{\sum_{j=k+1}^{n} p_j}$$

则，chain1需要再chain2之前完成

## Lemma 3.1.3

对Lemma 3.1.2的情况进行了扩展。

### 约束

以两条约束链为例，不需要再把一条chain完成再去完成另一条。

chain1：

1->2->3...->k

chain2:

k+1->k+2->...->n

允许先完成一部分chain1，之后去完成一部分或全部chain2，再来完成chain1。即，只要chain中的先后顺序得到保持即可。

### 引理内容

首先引入$\rho$的概念。

假设函数$f(l) =\frac{\sum_{j=1}^{l} \omega_j}{\sum_{j=1}^{l} p_j}$，$l^{*}$为$f(l)$的最大值点。

$f(l^*)$的值为$\rho$因子（$\rho-factor$），被记为$\rho(1,2,...,k)$，其中，1,2,..,k为chain中的工作。

引理具体内容如下：

对于现在的约束情况，最优解包含以下连续的序列：$1,2,...,l^{*}$。

## 算法 3.1.4
Total Weighted Completion Time and Chains

对于空闲的机器：

1）挑选所有chain中$\rho-factor$最大的

2）执行这条chain，直到这条chian中的$l^*$

如此循环

## Theorem 3.1.6 (WDSPT)

对于目标函数是加权折扣完成时间的single machine 调度问题，它的最优解必然满足WDSPT（Weighted Discounted Shortest Processing Time first），即$\frac{\omega_j e^{-rp_j}}{1-e^{-rp_j}}$为降序
