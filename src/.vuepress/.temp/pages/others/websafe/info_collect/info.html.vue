<template><div><h2 id="信息收集包含内容" tabindex="-1"><a class="header-anchor" href="#信息收集包含内容"><span>信息收集包含内容</span></a></h2>
<p>域名信息、IP段、开放的端口、网站架构、软件版本、WAF、旁站、文件目录架构、C段...</p>
<h2 id="域名信息" tabindex="-1"><a class="header-anchor" href="#域名信息"><span>域名信息</span></a></h2>
<h3 id="域名是什么" tabindex="-1"><a class="header-anchor" href="#域名是什么"><span>域名是什么</span></a></h3>
<p>Domain name</p>
<p>eg. IP地址为192.168.1.110，难以记忆，因此用域名来代替。如baidu.com用来代替IP</p>
<h3 id="域名的分类" tabindex="-1"><a class="header-anchor" href="#域名的分类"><span>域名的分类</span></a></h3>
<h4 id="国际域名" tabindex="-1"><a class="header-anchor" href="#国际域名"><span>国际域名</span></a></h4>
<table>
<thead>
<tr>
<th>域名</th>
<th>范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>.com</td>
<td>商业公司</td>
</tr>
<tr>
<td>.net</td>
<td>网络服务</td>
</tr>
<tr>
<td>.org</td>
<td>组织协会</td>
</tr>
<tr>
<td>.edu</td>
<td>教育机构</td>
</tr>
<tr>
<td>.gov</td>
<td>政府部门</td>
</tr>
<tr>
<td>.mil</td>
<td>军事领域</td>
</tr>
<tr>
<td>.int</td>
<td>国际组织</td>
</tr>
</tbody>
</table>
<h4 id="国别域名" tabindex="-1"><a class="header-anchor" href="#国别域名"><span>国别域名</span></a></h4>
<table>
<thead>
<tr>
<th>域名</th>
<th>范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>.cn</td>
<td>商中国</td>
</tr>
<tr>
<td>.UK</td>
<td>英国</td>
</tr>
<tr>
<td>.US</td>
<td>美国</td>
</tr>
</tbody>
</table>
<h4 id="新顶级域名" tabindex="-1"><a class="header-anchor" href="#新顶级域名"><span>新顶级域名</span></a></h4>
<p>biz, info, name, pro,aero...</p>
<h3 id="域名与ip" tabindex="-1"><a class="header-anchor" href="#域名与ip"><span>域名与IP</span></a></h3>
<p><img src="@source/others/websafe/info_collect/image.png" alt="alt text"></p>
<h3 id="查询域名" tabindex="-1"><a class="header-anchor" href="#查询域名"><span>查询域名</span></a></h3>
<h4 id="域名联系人信息" tabindex="-1"><a class="header-anchor" href="#域名联系人信息"><span>域名联系人信息</span></a></h4>
<p>所属人、邮箱、电话、地址...</p>
<ul>
<li>WHOIS 查询</li>
</ul>
<p><a href="https://whois.aliyun.com/?spm=5176.27906258.J_9945901770.functions-listName1-cardsRight6.5d90575aeeRYQM" target="_blank" rel="noopener noreferrer">阿里云<ExternalLinkIcon/></a></p>
<p>不同域名由不同组织管理</p>
<ul>
<li>
<p>chinaz
<a href="https://www.chinaz.com/" target="_blank" rel="noopener noreferrer">chinaz<ExternalLinkIcon/></a></p>
</li>
<li>
<p>whois soft</p>
</li>
</ul>
<p>貌似无了</p>
<ul>
<li>cnnic</li>
</ul>
<p><a href="https://webwhois.cnnic.cn/WelcomeServlet" target="_blank" rel="noopener noreferrer">cnnic<ExternalLinkIcon/></a></p>
<ul>
<li>kali</li>
</ul>
<p>kali中自带了whois 的命令</p>
<p>eg.</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>whois coolshell.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="域名反查" tabindex="-1"><a class="header-anchor" href="#域名反查"><span>域名反查</span></a></h4>
<ul>
<li>chinaz域名反查</li>
</ul>
<p><a href="https://whois.chinaz.com/reverse/register" target="_blank" rel="noopener noreferrer">注册人反查<ExternalLinkIcon/></a></p>
<ul>
<li>ICP备案查询</li>
</ul>
<p><a href="https://beian.miit.gov.cn/state/outPortal/loginPortal.action/#/Integrated/index" target="_blank" rel="noopener noreferrer">ICP备案<ExternalLinkIcon/></a></p>
<p>chinaz也可以查询ICP备案</p>
<ul>
<li>备案巴巴</li>
</ul>
<p><a href="https://www.beian88.com/" target="_blank" rel="noopener noreferrer">备案巴巴<ExternalLinkIcon/></a></p>
<p>（天眼查查询公司信息）</p>
<h3 id="子域名" tabindex="-1"><a class="header-anchor" href="#子域名"><span>子域名</span></a></h3>
<h4 id="子域名的作用" tabindex="-1"><a class="header-anchor" href="#子域名的作用"><span>子域名的作用</span></a></h4>
<p>eg.</p>
<p>百度搜索 www.baidu.com</p>
<pre><code>  百度还有其他产品，百度地图、百度贴吧、百度xx...

  这个时候，可以给其他产品创建一个子目录。例如，www.baidu.com/map

  但是，这容易导致服务器资源的竞争，因此可以创建子域名。

  www.baidu.com.map
</code></pre>
<h4 id="查询子域名" tabindex="-1"><a class="header-anchor" href="#查询子域名"><span>查询子域名</span></a></h4>
<ul>
<li>
<p>Layer子域名挖掘机</p>
</li>
<li>
<p>在线子域名查询</p>
<p>phpinfo.me   好像无了</p>
<ul>
<li>git上</li>
</ul>
<p>https://github.com/lijiejie/subDomainsBrute</p>
</li>
</ul>
<h3 id="域名解析信息" tabindex="-1"><a class="header-anchor" href="#域名解析信息"><span>域名解析信息</span></a></h3>
<p>DNS --域名解析服务</p>
<p><img src="https://img-blog.csdnimg.cn/direct/2e041629e90340f88aabc7ec59e11276.png" alt="在这里插入图片描述"></p>
<p><img src="https://img-blog.csdnimg.cn/direct/5c5c1838485b431598edb47219d7d0f9.png" alt="在这里插入图片描述"></p>
<h4 id="查询方式" tabindex="-1"><a class="header-anchor" href="#查询方式"><span>查询方式</span></a></h4>
<ul>
<li>
<p>dbcha.com</p>
<p>没打开</p>
</li>
<li>
<p>netcraft</p>
</li>
</ul>
<p>https://www.netcraft.com/</p>
<p>好难打开</p>
<ul>
<li>jsons</li>
</ul>
<p>http://www.jsons.cn/nslookup/</p>
<p>-kali中的maltigo</p>
<h2 id="ip信息获得" tabindex="-1"><a class="header-anchor" href="#ip信息获得"><span>IP信息获得</span></a></h2>
<h3 id="dns服务器的类型" tabindex="-1"><a class="header-anchor" href="#dns服务器的类型"><span>DNS服务器的类型</span></a></h3>
<ul>
<li>
<p><strong>DNS服务器的作用</strong></p>
<p>把域名转换为IP</p>
</li>
<li>
<p><strong>类型</strong></p>
<p>4种：本地、根、顶级、三级</p>
<p><img src="@source/others/websafe/info_collect/image-1.png" alt="alt text"></p>
</li>
</ul>
<p>本地域名服务器：可以理解为缓存的服务器</p>
</div></template>


