<template><h1 id="stl-count-显示数值"><a class="header-anchor" href="#stl-count-显示数值">#</a> <a href="stl:count">stl:count</a> 显示数值</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>count</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>需要获取值的类型<span class="token punctuation">"</span></span>
    <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目索引<span class="token punctuation">"</span></span>
    <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span>
    <span class="token attr-name">upLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上级栏目的级别<span class="token punctuation">"</span></span>
    <span class="token attr-name">topLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>从首页向下的栏目级别<span class="token punctuation">"</span></span>
    <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>内容范围<span class="token punctuation">"</span></span>
    <span class="token attr-name">since</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>时间段<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>count</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:count</code> 标签在模板中显示统计数字</p>
<p>标签 <code>&lt;stl:count&gt;</code> 用于显示相关数值，如栏目数目、内容数目等。</p>
<p>属性 channelIndex、channelName、upLevel 以及 topLevel 用于指定统计的栏目，如果不设置默认将统计当前栏目或内容的数据。 属性 scope 用于指定统计范围，默认为仅统计当前栏目或内容的相关数据。 属性 type 用于设置显示数值的类型。 属性 since 用于指定时间段，系统将只显示这段时间内的统计数据。since 属性格式为&quot;数字+日期符号&quot;，如&quot;1y&quot;、&quot;3m&quot;、&quot;10d&quot;或&quot;16h&quot;，分别代表一年、三个月、十天及十六个小时。</p>
<p><code>&lt;stl:count&gt;</code> 标签对应的实体为<code>{stl:count}</code>。</p>
<h3 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">需要获取值的类型</td>
</tr>
<tr>
<td style="text-align:left">channelIndex</td>
<td style="text-align:left">栏目索引</td>
</tr>
<tr>
<td style="text-align:left">channelName</td>
<td style="text-align:left">栏目名称</td>
</tr>
<tr>
<td style="text-align:left">upLevel</td>
<td style="text-align:left">上级栏目的级别</td>
</tr>
<tr>
<td style="text-align:left">topLevel</td>
<td style="text-align:left">从首页向下的栏目级别</td>
</tr>
<tr>
<td style="text-align:left">scope</td>
<td style="text-align:left">内容范围</td>
</tr>
<tr>
<td style="text-align:left">since</td>
<td style="text-align:left">时间段</td>
</tr>
</tbody>
</table>
<p><strong>type - 需要获取值的类型</strong></p>
<p>显示类型：</p>
<ul>
<li>&quot;Channels&quot; 统计栏目数</li>
<li>&quot;Contents&quot; 统计内容数</li>
<li>&quot;Downloads&quot; 统计下载次数、下载量</li>
</ul>
<p><strong>channelIndex - 栏目索引</strong></p>
<p>栏目索引</p>
<p><strong>channelName - 栏目名称</strong></p>
<p>栏目名称</p>
<p><strong>upLevel - 上级栏目的级别</strong></p>
<p>指定统计上几级栏目的数据，0 为本级，1 为父栏目，以此类推。</p>
<p><strong>topLevel - 从首页向下的栏目级别</strong></p>
<p>指定统计从首页向下某个级别栏目的数据，0 代表网站首页，1 代表一级栏目，以此类推。</p>
<p><strong>scope - 内容范围</strong></p>
<p>统计范围。此属性只可属于以下可能的取值的一种。</p>
<ul>
<li>&quot;Self&quot; 仅统计当前栏目或内容下的数据</li>
<li>&quot;Children&quot; 统计下级栏目的数据</li>
<li>&quot;SelfAndChildren&quot; 统计本级栏目及下一极子栏目下的数据</li>
<li>&quot;Descendant&quot; 统计所有级别的子栏目下的数据</li>
<li>&quot;All&quot; 统计所有栏目的数据</li>
</ul>
<p><strong>since - 时间段</strong></p>
<p>时间段，格式为&quot;数字+日期符号&quot;，日期符号有&quot;y&quot;、&quot;m&quot;、&quot;d&quot;及&quot;h&quot;，分别代表年、月、天及小时。</p>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>显示当前栏目的内容数。</strong></p>
<p>下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>内容数：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>count</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Contents<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>count</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>内容数：30
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>显示指定栏目三个月内添加的内容数，包括本栏目及所有下级栏目</strong></p>
<p>下面的例子在页面中显示指定栏目三个月内添加的内容数，包括本栏目及所有下级栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>内容数：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>count</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Contents<span class="token punctuation">"</span></span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>新闻<span class="token punctuation">"</span></span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>All<span class="token punctuation">"</span></span> <span class="token attr-name">since</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3m<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>count</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>内容数：12
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>