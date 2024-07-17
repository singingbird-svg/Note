<template><div><h2 id="英文" tabindex="-1"><a class="header-anchor" href="#英文"><span>英文</span></a></h2>
<p>meta-optimization problem</p>
<h2 id="英文释义" tabindex="-1"><a class="header-anchor" href="#英文释义"><span>英文释义</span></a></h2>
<p>Metaheuristic optimization methods attempt to find good solutions to a problem by iteratively trying to improve a (set of) candidate solution(s)</p>
<h2 id="中文释义" tabindex="-1"><a class="header-anchor" href="#中文释义"><span>中文释义</span></a></h2>
<p>元启发式优化方法试图通过迭代地尝试改进一个(集合)候选解来找到问题的良好解决方案。</p>
<h2 id="形式" tabindex="-1"><a class="header-anchor" href="#形式"><span>形式</span></a></h2>
<p>一般来说，优化问题可以被建模为以下形式：</p>
<p>Find x ∈ S such that any y ∈ S：f(x) ≤ f(y)</p>
<p>S是候选解的集合，即搜索空间，f是要最小化的目标函数</p>
<h2 id="搜索空间" tabindex="-1"><a class="header-anchor" href="#搜索空间"><span>搜索空间</span></a></h2>
<p>元启发式的可能设计</p>
<p>pi  (1 ≤ i ≤ n )：设计元启发式时的不同决策，每个都有一组可供选的Di</p>
<p>配置（configuration）：一个配置是这种选择(每个设计决策一个)的组合，每个配置对应一个具体的实现。</p>
<p>设计空间：配置的集合</p>
<p>搜索空间：我们认为有趣的(即修剪后)的设计空间的子集。</p>
<p>值得注意的是，设计决策可以是有条件的，例如对pj的选择只有当pi = a时才是相关的。</p>
<h2 id="目标函数" tabindex="-1"><a class="header-anchor" href="#目标函数"><span>目标函数</span></a></h2>
<p>目标函数用来量化一个方法的好坏程度。</p>
<p>为此，通常在一组基准实例上评估其性能。</p>
<p>虽然在一组基准实例上优化性能可以被认为是一个多目标优化问题，但通常目标函数是标量化的，将所有基准实例上的平均性能作为单目标。</p>
<h2 id="来源" tabindex="-1"><a class="header-anchor" href="#来源"><span>来源</span></a></h2>
<p>Designing Reusable Metaheuristic Methods: A Semi-automated Approach</p>
</div></template>


