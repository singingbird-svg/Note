---
# 当前页面内容标题
title: Framework
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
## 主要变量和概念
|变量|含义|
----|---|
n|工作（job）数量|
m|机器数量|
j（下标）|工作的编号|
i（下标）|机器的编号|
(i，j)|工作j在机器i上的步骤或操作|
$C_{ij}$|机器 i 完成工作$j$的时间|
$C_j$|工作 j exit系统的时间

### 工作的相关概念
Processing Time( $p_{ij}$ )：工作j在机器i上的加工时间  

Release data( $r_j$ )：提交日期，工作j可以开始被处理的时间（the earliest time at which job j can start its processing）

Due date( $d_j$ )：工期，工作j的完成时间

Weight( $w_j$ )：权重，工作j相比于其它工作的重要程度

* 一个调度问题可以用一个三元组描述： $\alpha$|$\beta$|$\gamma$，其中，$\alpha$表示机器<font color=BlueViolet>环境</font>，$\beta$表示过程的<font color=BlueViolet>特征和约束</font>，， $\gamma$ 表示<font color=BlueViolet>目标</font>
### 机器环境（$\alpha$）

Single machine ( 1 )：一个机器，最简单

Identical machines in parallel ( $P_m$ )：并行同速机，$m$个一样的机器进行一个工作j。工作j所需要的机器为m个机器的子集$M_j$

Machines in parallel with diffrent speeds ( $Q_m$ )：并行异速机，$m$个不同的机器进行一个工作。第i个机器的速度为$v_i$，机器i进行工作$j$的时间$p_{ij}=\frac{p_j}{v_i}$，速度只和机器有关，和工作无关。

Unrelated machines in parallel ( $R_m$ )：$m$个不同的机器，机器$i$在工作$j$上的速度为$v_{ij}$，即，机器速度和工作有关。

Flow shop ($F_m$)：流水车间，$m$个机器串行，每个工作被每一个机器加工，先入先出（FIFO）

Flexible flow shop ( $FFc$ )：柔性调度车间。工作被分为被分为$c$个阶段，每个阶段需要一定数量的$P_m$，每个工作的每个阶段只需要一个机器，遵循先到先得（FCFS）。简单来说，在一组机器上面完成一组工件的加工，每个工件的加工包含多道工序，工序之间需满足一定的顺序约束，每道工序只需要一台机器进行加工。

Job shop ($J_m$)：加工车间。$m$个机器遵循各自设定的加工路线。分为一台机器最多加工某个工作一次和多次两种

Flexible job shop ($FJc$)：柔性加工车间。有$c$个工作中心。每个工作有多道工序。工序要在工作中心加工，每个工作中心有多个$P_m$，每道工序只需要工作中心的一个机器加工，工作可以访问一个工作中心多次。

Open shop ( $O_m$ )：对工序顺序等没什么要求

### 特征与约束($\beta$)
Release dates ( $ r_j$ )：工作j不能再$r_j$之前开始

Preemptions ( $prmp$ )：中断。

Precedence constrains ( $prec$ )：优先约束。一个或多个工作需要优先完成

Sequence dependent setup times ( $s_{jk}$ )：顺序决定的准备时间。工作j和工作k之间的准备时间。$s_{0k}$表示工作k的准备时间，如果k是第一个工作；$s_{j0}$表示工作j的clean up 时间，如果它是最后一件工作。

Job families ( $fmls$ )：同一个工作组的工作彼此之间不需要准备时间

Batch processing ( $batch(b)$ )：一个机器可以同时执行$b$个工作。

Breakdowns ( $brkdwn$ )：故障。

Machine eligibility restrictions ( $M_j$ )：可以进行工作j的机器，当$\alpha$为$P_m$时出现。

Permutation ( $prmu$ )：排列，FIFO，在流水车间可能会出现的约束。

Blocking ( $block$ )：阻塞，在流水车间可能发生。

No-wait ( $nwt$ )：在流水车间，工序之间不允许等待。

Recirculation ( $rcrc$ )：再循环。在加工车间或者柔性加工车间发生。A job may visit a machine or work center more than once.

### 目标函数（$\gamma$）

工作j的延迟时间：
$$ L_j = C_j-d_j$$

工作j的滞后时间：
$$T_j = max(C_j-d_j, 0) = max(L_j, 0)$$

滞后时间不会为负数，延迟时间可以为负。  工作j的单位惩罚为：

$$U_j=\begin{cases}
1 , \quad   C_j > d_j\\
0, \quad otherwise 
\end{cases}$$

提前惩罚:

$$E_j = max(d_j-C_j, 0)$$

#### 常用目标函数
 Makespan ( $C_{max}$ ): 最小化工期

 Maximum Lateness ( $L_{max}$ )：最小化最大延迟

 Total weighted completion time ($ \sum \omega_jC_j$)：最小化加权完成时间

 Discounted total weighted completion time ($\sum \omega_j(1-e^{-rC_j})$)：最小化折扣加权完成时间。$0<r<1$

 Total weighted tardiness( $\sum \omega_jT_j$)：加权延迟时间

 Weighted number of tardy jobs ($\sum \omega_jU_j$)

 Total earliness plus total tardiness ($\sum T_j + \sum E_j$)

 Weighted total earliness plus weighted total tardiness ($\sum \omega_j^{''}T_j + \sum \omega_j^{'}E_j$)