<template><h1 id="列表循环"><a class="header-anchor" href="#列表循环">#</a> 列表循环</h1>
<p>在页面中循环显示列表数据是频繁使用的功能，如获取某个栏目下的内容列表，或者在导航栏显示栏目列表等等。</p>
<p>主要的列表循环标签有以下几种：</p>
<table>
<thead>
<tr>
<th style="text-align:left">列表标签</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>stl:contents</code></td>
<td style="text-align:left">内容列表</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:pageContents</code></td>
<td style="text-align:left">分页内容列表</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:channels</code></td>
<td style="text-align:left">栏目列表</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:pageChannels</code></td>
<td style="text-align:left">分页栏目列表</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:sites</code></td>
<td style="text-align:left">站点列表</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:each</code></td>
<td style="text-align:left">字段遍历列表</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:sqlContents</code></td>
<td style="text-align:left">数据库列表</td>
</tr>
<tr>
<td style="text-align:left"><code>stl:pageSqlContents</code></td>
<td style="text-align:left">分页数据库列表</td>
</tr>
</tbody>
</table>
<h3 id="元素与实体"><a class="header-anchor" href="#元素与实体">#</a> 元素与实体</h3>
<p>列表标签使用元素的写法时，标签内必须嵌套 HTML 或者 STL 标签，列表标签会逐项解析嵌套的标签并循环显示，如果列表标签内没有嵌套内容，系统将忽略此标签。例如<code>&lt;stl:contents&gt;&lt;/stl:contents&gt;</code>是无效的。</p>
<p>列表标签使用实体的写法时，标签将解析为JSON数组，数组内的项为列表项的JSON对象，例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span>stl<span class="token operator">:</span>contents<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的代码为：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"id"</span><span class="token operator">:</span><span class="token number">10935</span><span class="token punctuation">,</span><span class="token string">"channelId"</span><span class="token operator">:</span><span class="token number">1746</span><span class="token punctuation">,</span><span class="token string">"siteId"</span><span class="token operator">:</span><span class="token number">1739</span><span class="token punctuation">,</span><span class="token string">"addUserName"</span><span class="token operator">:</span><span class="token string">"admin"</span><span class="token punctuation">,</span><span class="token string">"lastEditUserName"</span><span class="token operator">:</span><span class="token string">"admin"</span><span class="token punctuation">,</span><span class="token string">"writingUserName"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"lastEditDate"</span><span class="token operator">:</span><span class="token string">"2018-06-13 12:27:00"</span><span class="token punctuation">,</span><span class="token string">"taxis"</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">"groupNameCollection"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"tags"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"sourceId"</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">"referenceId"</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">"isChecked"</span><span class="token operator">:</span><span class="token string">"True"</span><span class="token punctuation">,</span><span class="token string">"checkedLevel"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"hits"</span><span class="token operator">:</span><span class="token number">28</span><span class="token punctuation">,</span><span class="token string">"hitsByDay"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"hitsByWeek"</span><span class="token operator">:</span><span class="token number">28</span><span class="token punctuation">,</span><span class="token string">"hitsByMonth"</span><span class="token operator">:</span><span class="token number">28</span><span class="token punctuation">,</span><span class="token string">"lastHitsDate"</span><span class="token operator">:</span><span class="token string">"2018-06-14 00:00:00"</span><span class="token punctuation">,</span><span class="token string">"settingsXml"</span><span class="token operator">:</span><span class="token string">"titleformatstring=False_False_False_&amp;translatecontenttype=Copy"</span><span class="token punctuation">,</span><span class="token string">"title"</span><span class="token operator">:</span><span class="token string">"第九届国际发明展览会爱登堡电梯集团荣获 “发明创业&amp;#8226;项目奖”"</span><span class="token punctuation">,</span><span class="token string">"isTop"</span><span class="token operator">:</span><span class="token string">"False"</span><span class="token punctuation">,</span><span class="token string">"isRecommend"</span><span class="token operator">:</span><span class="token string">"False"</span><span class="token punctuation">,</span><span class="token string">"isHot"</span><span class="token operator">:</span><span class="token string">"False"</span><span class="token punctuation">,</span><span class="token string">"isColor"</span><span class="token operator">:</span><span class="token string">"False"</span><span class="token punctuation">,</span><span class="token string">"linkUrl"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"addDate"</span><span class="token operator">:</span><span class="token string">"2015-09-30 13:52:00"</span><span class="token punctuation">,</span><span class="token string">"subTitle"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"imageUrl"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"videoUrl"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"fileUrl"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"content"</span><span class="token operator">:</span><span class="token string">"&lt;div>近日，第九届国际发明展览会在昆山国际会展中心圆满落幕。作为我国发明创新领域对外开放的重要窗口、创新思想交流和发明成果产业化的重要平台，国际发明展览会自1988年创办以来，在国内外发明界、产业界产生了广泛影响。在上千个参展的创新发明项目中，爱登堡电梯集团荣获三项“发明创业•项目奖”。&lt;/div>&lt;div>电梯研发部&lt;br/>一种用于高速电梯钢丝绳补偿及涨紧装置&lt;br/>&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp; 本发明研究轿厢、对重各使用一部分缓冲器时的布置情况，并确保电梯运行过程中补偿绳不对轿厢及对重产生偏载力。高速电梯钢丝绳补偿及涨紧装置的研发对整个曳引式电梯市场补偿绳系统设计具有重大意义。按照国家质检要求，2m/s以上的曳引式电梯均应安装此产品，故钢丝绳补偿及涨紧装置具有较大的市场，能够产生一定的生产效益和社会效益。&lt;/div>&lt;div>扶梯研发部&lt;br/>一种具有安全隔离控制柜的自动扶梯&lt;br/>&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp; 本发明目的在于解决自动扶梯的客户电源布置不合理的问题，提供一种采用客户电源与控制柜一体式布置，内部隔离技术的安全隔离型主控制柜的自动扶梯。本项目在2009年初设计完成，同年首次使用在“辽宁省沈阳市鞍山西柳中国商贸城”项目上，完成了本系统的初次试验并取得成功。同年申请发明专利。现在依然成功的应用在我司所有项目共计2055台自动扶梯上，并取得“零”触电事故的安全效果。该发明有效地提高了企业在行业内的竞争优势，也符合国家对安全扶梯的倡导，具有积极推广的意义。&lt;/div>&lt;div>车库研发部&lt;br/>多台共柱安装的双层倾斜式停车装置（停车宝）&lt;br/>&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp; 本项目的研究主要降低了对建筑空间层高和柱网间距的要求，实现了在较低的空间内双层停车，实现了多车位连续、多台共柱安装，大大提升了停车空间利用率。俯仰式简易升降布置灵活，规模大到上百车位，小到几个车位，外观漂亮、结构简单。&lt;br/>实用性：&lt;br/>1、此产品能广泛应用在层高仅为2800mm的空间，比原3600mm的层高要求降低了800mm，应用范围更广；&lt;br/>2、此产品多台共柱，减少了并排安装时立柱之间预留空间的需求，相同空间可增加更多停车位，提高停车空间利用率。&lt;/div>&lt;p>&lt;br/>&lt;/p>"</span><span class="token punctuation">,</span><span class="token string">"summary"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"author"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"source"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"titleformatstring"</span><span class="token operator">:</span><span class="token string">"False_False_False_"</span><span class="token punctuation">,</span><span class="token string">"translatecontenttype"</span><span class="token operator">:</span><span class="token string">"Copy"</span><span class="token punctuation">,</span><span class="token string">"navigationUrl"</span><span class="token operator">:</span><span class="token string">"/test19/contents/1746/10935.html"</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>列表标签可以通过设置属性来控制所有列表项的显示方式，同时列表标签还可以通过<code>&lt;stl:itemTemplate&gt;</code> 子元素控制具体某一项的显示方式，下面依次加以说明。</p>
<h3 id="通过属性控制列表"><a class="header-anchor" href="#通过属性控制列表">#</a> 通过属性控制列表</h3>
<p><strong>totalNum 一共显示多少项</strong></p>
<p>设置列表一共显示多少条信息，默认值为 0，代表显示所有信息。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>contents</span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>startNum 从第几项开始显示</strong></p>
<p>设置列表从第几条信息开始显示，默认值为 1，代表从第一条信息开始显示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>contents</span> <span class="token attr-name">startNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>pageNum 每页显示多少项</strong></p>
<p>设置分页列表每一页显示的列表项数目，默认值为 25。</p>
<p>此属性仅针对分页列表标签起作用： <code>stl:pageContents</code>、<code>stl:pageChannels</code> 及 <code>stl:pageSqlContents</code> 。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageContents</span> <span class="token attr-name">pageNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>maxPage 最多显示多少页</strong></p>
<p>设置分页列表最多显示多少页，默认值为 0，代表不控制显示页数。</p>
<p>此属性在列表分页特别多的时候可以用来控制总页数，比如只列出前30页的内容，从而提高生成页面速度。</p>
<p>此属性仅针对分页列表标签起作用： <code>stl:pageContents</code>、<code>stl:pageChannels</code> 及 <code>stl:pageSqlContents</code> 。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageContents</span> <span class="token attr-name">pageNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">maxPage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>layout 列表布局</strong></p>
<p>列表布局属性用于控制列表循环中每一项的显示方式，默认值为 none，即直接循环，不控制列表项显示。</p>
<ul>
<li>&quot;none&quot; 列表不使用布局，仅循环列表项，不控制列表项显示。此值是默认的，如果没有指定属性的话。</li>
<li>&quot;table&quot; 列表使用表格布局，系统将把列表标签解析为 HTML <code>&lt;table&gt;</code> 元素，table 标签的所有属性（class、style、cellPadding、cellSpacing等）均可用在列表标签中。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>contents</span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table<span class="token punctuation">"</span></span> <span class="token attr-name">columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>90%<span class="token punctuation">"</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>columns 列数</strong></p>
<p>columns 属性决定要显示的列的数量。比如，如果要在列表中显示四列的项，那么可以把这个属性设为4。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>contents</span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table<span class="token punctuation">"</span></span> <span class="token attr-name">columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>90%<span class="token punctuation">"</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>columns 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>direction 方向</strong></p>
<p>direction属性用于确定列表是按水平方向还是或垂直方向来重复。</p>
<ul>
<li>&quot;vertical&quot; 垂直</li>
<li>&quot;horizontal&quot; 水平</li>
</ul>
<p>如果将此属性设置为vertical，列表中的项显示在从上到下加载的列中，然后从左到右，直到呈现所有项。例如，如果将columns属性设置为3，列表中的项显示在三列中，如下表所示。</p>
<table>
<thead>
<tr>
<th>1</th>
<th>4</th>
<th>7</th>
</tr>
</thead>
<tbody>
<tr>
<td>2</td>
<td>5</td>
<td>8</td>
</tr>
<tr>
<td>3</td>
<td>6</td>
<td>9</td>
</tr>
</tbody>
</table>
<p>如果将此属性设置为horizontal，列表中的项以从左到右加载的行显示，然后从上到下，直到呈现所有项。例如，如果将columns属性设置为3，列表的项将以每行三项的形式显示，如下表所示。</p>
<table>
<thead>
<tr>
<th>1</th>
<th>2</th>
<th>3</th>
</tr>
</thead>
<tbody>
<tr>
<td>4</td>
<td>5</td>
<td>6</td>
</tr>
<tr>
<td>7</td>
<td>8</td>
<td>9</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>即使 direction 值为 vertical，还是显示为 4 个列。columns 永远是指重复的列的数量，而不是行的数量。</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>irection 属性只有当列表布局为表格 layout=&quot;table&quot; 且设置了列数 columns 时才起作用。</p>
</div>
<p><strong>height - 整体高度</strong></p>
<p>设置列表的整体高度。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>height 属性只有当列表布局为表格 layout=&quot;table&quot; 时才起作用。</p>
</div>
<p><strong>width - 整体宽度</strong></p>
<p>设置列表的整体宽度。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>width 属性只有当列表布局为表格 layout=&quot;table&quot; 时才起作用。</p>
</div>
<p><strong>align - 整体对齐</strong></p>
<p>设置列表的整体对齐方式。</p>
<ul>
<li>&quot;center&quot; 居中对齐。</li>
<li>&quot;left&quot; 居左对齐。</li>
<li>&quot;right&quot; 居右对齐。</li>
<li>&quot;justify&quot; 向页面的左右边缘对齐。</li>
<li>&quot;notSet&quot; 不设置。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>align 属性只有当列表布局为表格 layout=&quot;table&quot; 时才起作用。</p>
</div>
<p><strong>itemHeight - 项高度</strong></p>
<p>列表中每一项的高度。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>itemHeight 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>itemWidth 项宽度</strong></p>
<p>列表中每一项的宽度。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>itemWidth 属性只有当列表布局为表格 layout=&quot;table&quot; 时才起作用。</p>
</div>
<p><strong>itemAlign 项水平对齐</strong></p>
<p>列表中每一项的水平对齐方式。</p>
<ul>
<li>&quot;center&quot; 居中对齐。</li>
<li>&quot;left&quot; 居左对齐。</li>
<li>&quot;right&quot; 居右对齐。</li>
<li>&quot;justify&quot; 向页面的左右边缘对齐。</li>
<li>&quot;notSet&quot; 不设置。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>itemAlign 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>itemVerticalAlign 项垂直对齐</strong></p>
<p>列表中每一项的垂直对齐方式。</p>
<ul>
<li>&quot;top&quot; 顶端对齐。</li>
<li>&quot;middle&quot; 居中对齐。</li>
<li>&quot;bottom&quot; 底端对齐。</li>
<li>&quot;notSet&quot; 不设置。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>itemVerticalAlign 属性只有当列表布局为表格 layout=&quot;table&quot; 时才起作用。</p>
</div>
<p><strong>itemClass 项Css类</strong></p>
<p>列表中每一项的 Css 类</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>itemClass 属性只有当列表布局为表格 layout=&quot;table&quot; 时才起作用。</p>
</div>
<h3 id="通过列表子元素项控制列表"><a class="header-anchor" href="#通过列表子元素项控制列表">#</a> 通过列表子元素项控制列表</h3>
<p>在列表标签中设置属性可以控制列表中每一项的显示方式，但如果我们需要控制列表中具体某一项的显示方式，就要用到<code>&lt;itemTemplate&gt;</code> 列表项子元素标签了。请参考：<code>&lt;stl:itemTemplate&gt;</code> 列表项元素。</p>
<p>下面的例子显示的内容列表采用不同的颜色交替显示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>itemTemplate</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>itemTemplate</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>itemTemplate</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AlternatingItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">color</span><span class="token punctuation">:</span>red</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>itemTemplate</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>