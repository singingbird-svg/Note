---
# 当前页面内容标题
title: The Number of Trady Jobs
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

$$1||\sum U_j$$

可以用前向算法解决

## Theorem 3.3.1.(WSPT)

前向算法，工作排序按照工期长短：
$$d_1 \leq d2 \leq ... \leq d_n$$

$J$：代表在最优解中可能会在工期之前完成的工作

$J^d$：在最优解中滞后的工作

$J^c$：在第$k$个迭代中工作$k+1, k+2,...,n$

* step1：

$$J=\empty, J^c = {1,2,...,n}, J^d = \empty$$
$$k = 1$$

* step2:

$\quad$ $\quad$ 将工作$k$加入到$J$

$\quad$ $\quad$ $J^c$删除k

* step3：

$\quad$ $\quad$ 如果
$$\sum_{j \in J} p_j \leq d_k$$

$\quad$ $\quad$ 进行第四步

$\quad$ $\quad$ 否则，令$l$满足：
$$p_l = max_{j \in J}(p_j)$$
$\quad$ $\quad$ $J$中删除$l$，将$l$加入$J^d$

$\quad$ $\quad$  即，当发现在工作序列中加入新工作会延期时，就把之前工作里耗时最长的工作从$J$中删掉

* step4：
 $$J_k = J$$
 $\quad$ $\quad$ 如果$k=n$，则停止；

 $\quad$ $\quad$ 否则 $k = k+1$,前往step2

算法复杂度：$O(nlog(n))$

## Theorem 3.3.2（算法最优性分析）

算法3.3.1可以获得 $1||\sum U_j$ 的最优解

## 扩展

对于问题 
$$1||\sum\omega_jU_j$$
可以用WSPT规则 
$$ \frac{\sum\omega_jU_j(WSPT)}{\sum\omega_jU_j(OPT)}$$