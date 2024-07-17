---
# 当前页面内容标题
title: Total Tardiness
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

$$1||\sum T_j$$

最小化总滞后时间，NP-hard

## Lemma 3.4.1
如果$p_j\leq p_k$且$d_j \leq d_k$，那么存在一个最有序列，使得工作$j$被安排在工作$k$之前。

常被用来作为$Dominance$ $result$或者$Elimination$ $Criterion$

## Lemma 3.4.2

$C'_k$是工作k在任何最优序列的最迟可能完成时间。

先引入两种情况

* Instance 1（$S'$）：

$\quad$ $\quad$ 1） n个工作的加工时间为：$p_1, p_2,..., p_n$

$\quad$ $\quad$ 1） n个工作的工期为：$d_1, d_2,..., d_n$

* Instance 2（$S''$）：

$\quad$ $\quad$ 1） n个工作的加工时间为：$p_1, p_2,..., p_n$

$\quad$ $\quad$ 1） n个工作的工期为：$d_1, d_2,..., d_{k-1}$, $max(d_k, C'_k)$, $d_{k+1},...,d_n$

$\quad$ $\quad$ $C''_j$为Instance2中工作$j$的完成时间

### 引理内容

任何Instance2的最优序列，同时也是Instance1的最优序列

## Lemma 3.4.3

存在一个整数$\delta$，$0 \leq \delta \leq n-k$，存在一个最优序列$S$，其中，工作$k$在所有工作$j \leq k+\delta$之后执行，在所有工作$j>k+\delta$之前执行。($k$的$p_k$为max)

## 算法3.4.4(动态规划)

### 概念

$l$：动态规划所需要的子序列集${1,2,...,l}$，在t时刻开始

$k$：$l$个工作中，加工时间最长的工作的编号

$C_k(\delta)$：$\sum_{j\leq k+\delta} p_j$

$J(j，l，k)$：加工时间小于工作$k$的加工时间$p_k$的工作集合$\{j,j+1,...,l-1,l\}$

$V(J(j,l,k),t)$：在最优序列下,$J$的总滞后时间

### 算法

**初始化**：
$$V(\phi,t) = 0$$
$$ V({j},t) = max(0,t+p_j-d_j)$$

**递归**

$$ V(J(j,l,k),t) = min_{\delta}(V(J(j,k'+\delta,k'),t)+max(0,C_{k'}(\delta)-d_{k'}))+V(J(k'+\delta+1,l,k'),C_{k'}(\delta))$$
$k'$满足：
$$p(k') = max(p_{j'}|j'\in J(j,l,k))$$

**最优值函数**

$$V({1,...,n},0)$$

## 算法3.5.1 （FPTAS）

### 基础知识

FPTAS:Fully Polynomial Time Approximation Scheme

近似算法(Approximation Scheme) A被称为 fully polynomial，如果它运行时间小于等于n阶和$\frac{1}{\epsilon}$阶的多项式，且满足：
$$\sum T_j(A)\leq (1+\epsilon)\sum T_j(OPT)$$

其中，$\sum T_j(OPT)$是最优算法的目标函数值。

$\sum T_j(EDD)$：在EDD算法下的总滞后时间

$T_{max}(EDD)$：EDD算法下的最大滞后时间

$$ T_{max}(EDD) \leq \sum T_j(OPT) \leq \sum T_j(EDD) \leq nT_{max}(EDD)$$

$J$：$t$时刻开始的工作集

$V(J,t)$：工作集$J$的最小总滞后时间

$t*$：$V(J,t)$的零点。$t>t^*$，$V(J,t)>0$；否则,$V(J,t) \leq 0$

$$V(J, t^*+\delta) \geq \delta$$
$$t^* \leq t \leq nT_{max}(EDD)$$

$d'_j$：缩放后的工期。$d'_j = d_j/K$

$p'_j$：缩放后的加工时间。$p'_j=\lfloor p_j/K \rfloor $

$\sum T^*(S)$：在序列S情况下，以$Kp_j'$作为加工时间的总迟滞时间。

### 算法过程

**step1**
 
 采用EDD算法，获得$T_{max}$

 若$T_{max} = 0$，那么，$\sum T_j = 0$，EDD算法为最优算法，停止。

否则，

$$K = (\frac{2\epsilon}{n(n+1)})T_{max}(EDD)$$

**step2**

缩放

$$p'_j=\lfloor p_j/K \rfloor $$
$$d'_j = d_j/K$$


 **step3**

将第二步数据代入算法3.4.4

## 拓展-- Total Weighted Tardiness

### 表述

$$1||\sum \omega_jT_j$$

### Lemma 3.6.1

如果存在工作$j$和$k$，当$d_j \leq d_k$，$p_j \leq p_k$以及$w_j \geq w_k$ ，那么存在一个最优序列，工作$j$在工作$k$之前。

### Theorem 3.6.2

$1|| \sum \omega_jT_j$是NP-hard问题
