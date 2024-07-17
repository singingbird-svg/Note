<template><div><h1 id="np问题" tabindex="-1"><a class="header-anchor" href="#np问题"><span>NP问题</span></a></h1>
<h2 id="np英文" tabindex="-1"><a class="header-anchor" href="#np英文"><span>NP英文</span></a></h2>
<p>Non-deterministic Polynomial</p>
<h2 id="np英文释义" tabindex="-1"><a class="header-anchor" href="#np英文释义"><span>NP英文释义</span></a></h2>
<p>暂无</p>
<h2 id="np中文释义" tabindex="-1"><a class="header-anchor" href="#np中文释义"><span>NP中文释义</span></a></h2>
<p>NP问题（Non-deterministic Polynomial Problem，非确定性多项式问题），指问题只能通过验证给定的猜测是否正确来求解。所谓多项式指的是验证猜测可在多项式时间内完成，所谓非确定性指的是问题只能通过验证猜测来解，而不能直接求解。</p>
<h1 id="npc问题" tabindex="-1"><a class="header-anchor" href="#npc问题"><span>NPC问题</span></a></h1>
<h2 id="npc英文" tabindex="-1"><a class="header-anchor" href="#npc英文"><span>NPC英文</span></a></h2>
<p>Non-deterministic Polynomial Complete Problem</p>
<h2 id="npc英文释义" tabindex="-1"><a class="header-anchor" href="#npc英文释义"><span>NPC英文释义</span></a></h2>
<p>暂无</p>
<h2 id="npc中文释义" tabindex="-1"><a class="header-anchor" href="#npc中文释义"><span>NPC中文释义</span></a></h2>
<p>NP完全问题。满足以下两个条件：</p>
<p>（1）它是一个NP问题；</p>
<p>（2）所有的NP问题都可以用多项式时间约化到它</p>
<p>它可以在多项式时间内求解，当且仅当所有的其他的NP完全问题也可以在多项式时间内求解。这样一来,只要我们找到一个NPC问题的多项式解，所有的NP问题都可以多项式时间内约化成这个NPC问题，再用多项式时间解决，这样NP就等于P了。NPC问题目前没有多项式时间复杂度的有效算法，只能用指数级甚至阶乘级复杂度的搜索。</p>
<h1 id="nph问题" tabindex="-1"><a class="header-anchor" href="#nph问题"><span>NPH问题</span></a></h1>
<h2 id="nph英文" tabindex="-1"><a class="header-anchor" href="#nph英文"><span>NPH英文</span></a></h2>
<p>Non-deterministic Polynomial Hard Problem</p>
<h2 id="nph英文释义" tabindex="-1"><a class="header-anchor" href="#nph英文释义"><span>NPH英文释义</span></a></h2>
<p>暂无</p>
<h2 id="nph中文释义" tabindex="-1"><a class="header-anchor" href="#nph中文释义"><span>NPH中文释义</span></a></h2>
<p>NPH问题（NP难问题，NP-hard问题），其满足NPC问题定义的第二条但不一定要满足第一条（就是说，NP-Hard问题要比NPC问题的范围广，但不一定是NP问题）。</p>
<p>NP-Hard问题同样难以找到多项式时间复杂度的算法，它不一定是NP问题。即使NPC问题发现了多项式级的算法，NP-Hard问题有可能仍然无法得到多项式级的算法。事实上，由于NP-Hard放宽了限定条件，它将有可能比所有的NPC问题的时间复杂度更高从而更难以解决。</p>
</div></template>


