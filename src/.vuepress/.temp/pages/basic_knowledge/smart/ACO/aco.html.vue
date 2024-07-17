<template><div><h2 id="蚁群算法-ant-colony-optimization-aco-概述" tabindex="-1"><a class="header-anchor" href="#蚁群算法-ant-colony-optimization-aco-概述"><span>蚁群算法（Ant Colony Optimization，ACO）概述</span></a></h2>
<ul>
<li>
<p>Storn等人1995年提出</p>
</li>
<li>
<p>通过群体内<font color=DarkRed>个体</font>间的<font color=DarkRed>合作与竞争</font>而产生的智能优化搜索</p>
</li>
<li>
<p>保留了<font color=DarkRed>基于种群的全局</font>搜索策略。</p>
<p>ps.来自师姐的解释：</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>QY:
一般而言，无论是DE还是GA  都是属于基于种群的全局搜索策略。

QY:
“基于种群的全局搜索策略”就是一种利用一群“候选解决方案”来共同寻找最佳解决方案的方法。这种策略会模拟自然选择和遗传等生物过程，通过不断的迭代，让整个“种群”向更好的解决方案进化，以此来尝试找到问题的全局最优解。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>降低了进化计算的复杂性</p>
<ul>
<li>采用实数编码</li>
<li>基于差分的简单变异操作</li>
<li>“一对一”的竞争生存策略</li>
</ul>
</li>
<li>
<p>拥有记忆能力</p>
</li>
</ul>
<h2 id="理论基础" tabindex="-1"><a class="header-anchor" href="#理论基础"><span>理论基础</span></a></h2>
<h3 id="算法原理" tabindex="-1"><a class="header-anchor" href="#算法原理"><span>算法原理</span></a></h3>
<ul>
<li>
<p>随机的启发式搜索算法。从数学角度，是一种随机搜索；从工程角度，是一种自适应的迭代寻优过程。</p>
</li>
<li>
<p>自组织最小化方法。</p>
</li>
<li>
<p>利用种群中两个随机选择的不同向量来干扰一个现有向量，种群中的每一个向量都要进行干扰。</p>
</li>
<li>
<p>差分进化算法利用一个向量种群，其中种群向量的随机扰动可独立进行，因此是并行的。</p>
</li>
<li>
<p><strong>变异</strong>：把种群中两个成员之间的加权差向量加到第三个成员上来产生新的参数向量</p>
</li>
<li>
<p><strong>交叉</strong>: 将变异向量的参数与另外预先确定的目标向量参数按一定规则混合来产生试验向量</p>
</li>
<li>
<p><strong>选择</strong>：若试验向量的代价函数比目标向量的代价函数低，试验向量就在下一代中代替目标向量</p>
</li>
</ul>
<p>种群中<font color=Crimson>所有成员</font>必须当作目标向量进行一次这样的操作，以便在下一代中出现相同个数竞争者</p>
<h2 id="差分进化算法特点" tabindex="-1"><a class="header-anchor" href="#差分进化算法特点"><span>差分进化算法特点</span></a></h2>
<p>1） 结构简单，易于使用。算子只涉及向量的加减运算；采用概率转移规则，不需要确定性的规则；控制参数少</p>
<p>2） 对于大空间、非线性和不可求导的连续问题，效率较好。可靠性、高效性、鲁棒性。</p>
<p>3） 自适应性。差分变异算子可以是固定常数，也可以是具有变异步长和搜索方向自适应的能力。</p>
<p>4） 并行性。差分进化算法利用一个向量种群，其中种群向量的随机扰动可独立进行，因此是并行的。</p>
<p>5） 算法通用。</p>
<h2 id="差分进化算法主要参数" tabindex="-1"><a class="header-anchor" href="#差分进化算法主要参数"><span>差分进化算法主要参数</span></a></h2>
<table>
<thead>
<tr>
<th>关键参数</th>
<th>含义</th>
<th>作用</th>
<th>取值范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>D</td>
<td>维数</td>
<td></td>
<td></td>
</tr>
<tr>
<td>NP</td>
<td>群体规模</td>
<td>NP大，多样性好，寻优能力也就越强，但计算复杂度较高</td>
<td>5D~10D之间，必须≥4</td>
</tr>
<tr>
<td>F</td>
<td>变异算子</td>
<td>实常数，F过小，可能造成算法“早熟”。随着F的增大，算法越不容易陷入局部最优；F＞1时，收敛性变得非常差。</td>
<td>0~2，一般在0.4~1有效，通常为0.5</td>
</tr>
<tr>
<td>CR</td>
<td>交叉算子</td>
<td>CR越大，发生交叉可能性越大，CR越大收敛速度越快</td>
<td>0~1，较好选择为0.1</td>
</tr>
<tr>
<td>G</td>
<td>最大进化代数</td>
<td>遗传运算结束条件参数</td>
<td>100~500</td>
</tr>
</tbody>
</table>
<h2 id="差分进化算法运算流程" tabindex="-1"><a class="header-anchor" href="#差分进化算法运算流程"><span>差分进化算法运算流程</span></a></h2>
<p><img src="@source/basic_knowledge/smart/ACO/image-3.png" alt=""></p>
<h3 id="基本差分进化算法" tabindex="-1"><a class="header-anchor" href="#基本差分进化算法"><span>基本差分进化算法</span></a></h3>
<p><strong>初始化</strong>：利用NP个维数为D的实数值参数向量进行初始化，一般在约束边界内随机选择。</p>
<p>个体表示：<br>
<img src="@source/basic_knowledge/smart/ACO/image-4.png" alt=""></p>
<pre><code> 其中，i表示个体在种群中的序列
</code></pre>
<p>变量边界：
<img src="@source/basic_knowledge/smart/ACO/image-6.png" alt=""></p>
<p>随机选择常用方法：</p>
<p><img src="@source/basic_knowledge/smart/ACO/image-7.png" alt=""></p>
<p><strong>变异</strong>：</p>
<p><img src="@source/basic_knowledge/smart/ACO/image-8.png" alt=""></p>
<p><strong>交叉</strong>：</p>
<p><img src="@source/basic_knowledge/smart/ACO/image-9.png" alt=""></p>
<p>即，若编码第j位处按照概率CR(或j=随机选择的某个维度)变成<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>v</mi><mrow><mi>j</mi><mi>i</mi><mo separator="true">,</mo><mi>G</mi><mo>+</mo><mn>1</mn></mrow></msub></mrow><annotation encoding="application/x-tex">v_{ji,G+1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7167em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ji</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight">G</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>。</p>
<p><strong>选择</strong>：按照贪婪准则。</p>
<pre><code>如果目标函数要被最小化，那么具有较小目标函数值的向量将在下一代种群中出现。下一代中的所有个体都比当前种群的对应个体更佳或者至少一样好。注意:在差分进化算法选择程序中，试验向量只与一个个体相比较，而不是与现有种群中的所有个体相比较。
</code></pre>
<p><strong>边界条件的处理</strong>:  必须保证新的解在可行域内</p>
<pre><code>1）将不符合边界约束的新个体用在可行域中随机产生的参数向量代替。

2）边界吸收处理，将超过边界约束的个体值设置为临近的边界值。
</code></pre>
<h3 id="自适应差分进化算法" tabindex="-1"><a class="header-anchor" href="#自适应差分进化算法"><span>自适应差分进化算法</span></a></h3>
<p>在基本差分进化算法中，F为实常数，容易出现早熟现象。</p>
<p>自适应算法中F为：</p>
<p><img src="@source/basic_knowledge/smart/ACO/image-5.png" alt=""></p>
<p>还可以设计一个随机范围的交叉算子CR：</p>
<p><img src="@source/basic_knowledge/smart/ACO/image-10.png" alt=""></p>
<h3 id="离散差分进化算法" tabindex="-1"><a class="header-anchor" href="#离散差分进化算法"><span>离散差分进化算法</span></a></h3>
<p>改进用于整数规划和混合整数规划。</p>
<p><img src="@source/basic_knowledge/smart/ACO/image-11.png" alt="alt text"></p>
<h3 id="其他差分进化算法形式" tabindex="-1"><a class="header-anchor" href="#其他差分进化算法形式"><span>其他差分进化算法形式</span></a></h3>
<p>用符号DE/x/y/z加以区分</p>
<table>
<thead>
<tr>
<th>符号</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>x</td>
<td>限定当前被变异的向量是“随机的”或“最佳的”</td>
</tr>
<tr>
<td>v</td>
<td>所利用差向量的个数</td>
</tr>
<tr>
<td>z</td>
<td>交叉程序操作方法</td>
</tr>
</tbody>
</table>
<p>基本算法的交叉操作为bin，它可以被描述为
DE/rand/1/bin。</p>
</div></template>


