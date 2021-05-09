<template><h1 id="stl-select-下拉列表"><a class="header-anchor" href="#stl-select-下拉列表">#</a> <a href="stl:select">stl:select</a> 下拉列表</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>select</span>
    <span class="token attr-name">isChannel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示栏目下拉列表<span class="token punctuation">"</span></span>
    <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目索引<span class="token punctuation">"</span></span>
    <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span>
    <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上级栏目<span class="token punctuation">"</span></span>
    <span class="token attr-name">upLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上级栏目的级别<span class="token punctuation">"</span></span>
    <span class="token attr-name">topLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>从首页向下的栏目级别<span class="token punctuation">"</span></span>
    <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上下文<span class="token punctuation">"</span></span>
    <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择的范围<span class="token punctuation">"</span></span>
    <span class="token attr-name">groupChannel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定栏目组<span class="token punctuation">"</span></span>
    <span class="token attr-name">groupChannelNot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>排除栏目组<span class="token punctuation">"</span></span>
    <span class="token attr-name">groupContent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定内容组<span class="token punctuation">"</span></span>
    <span class="token attr-name">groupContentNot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>排除内容组<span class="token punctuation">"</span></span>
    <span class="token attr-name">tags</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定标签<span class="token punctuation">"</span></span>
    <span class="token attr-name">order</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>排序<span class="token punctuation">"</span></span>
    <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示数目<span class="token punctuation">"</span></span>
    <span class="token attr-name">titleWordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题文字数量<span class="token punctuation">"</span></span>
    <span class="token attr-name">where</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>条件判断<span class="token punctuation">"</span></span>
    <span class="token attr-name">queryString</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>链接参数<span class="token punctuation">"</span></span>
    <span class="token attr-name">isTop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>仅显示置顶内容<span class="token punctuation">"</span></span>
    <span class="token attr-name">isRecommend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>仅显示推荐内容<span class="token punctuation">"</span></span>
    <span class="token attr-name">isHot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>仅显示热点内容<span class="token punctuation">"</span></span>
    <span class="token attr-name">isColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>仅显示醒目内容<span class="token punctuation">"</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>下拉列表提示标题<span class="token punctuation">"</span></span>
    <span class="token attr-name">openWin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>新窗口打开链接<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:select</code> 标签在模板中显示栏目或内容下拉列表</p>
<p><code>stl:select</code> 用于显示由栏目或内容标题组成的下拉列表，选择下拉列表中的项后页面转到对应的页面。</p>
<p>所有属于 HTML 标签 <code>&lt;select&gt;</code> 的成员均适用于 <code>&lt;stl:select&gt;</code> 标签。</p>
<p>title 属性代表下拉列表中的第一项，如果未设置此属性，第一项为内容列表第一项的标题。</p>
<p>如果设置了 channelIndex 属性，系统将寻找对应此栏目索引的栏目并显示此栏目的内容列表。 如果设置了 channelName 属性，系统将寻找对应此栏目名称的栏目并显示此栏目的内容列表。</p>
<p><code>&lt;stl:select&gt;</code> 标签对应的实体为<code>{stl:select}</code>。</p>
<h3 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>所有属于 HTML 标签<code>&lt;select&gt;</code>的属性均适用于<code>&lt;stl:select&gt;</code>标签。</p>
</div>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">isChannel</td>
<td style="text-align:left">显示栏目下拉列表</td>
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
<td style="text-align:left">parent</td>
<td style="text-align:left">上级栏目</td>
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
<td style="text-align:left">context</td>
<td style="text-align:left">上下文</td>
</tr>
<tr>
<td style="text-align:left">scope</td>
<td style="text-align:left">选择的范围</td>
</tr>
<tr>
<td style="text-align:left">groupChannel</td>
<td style="text-align:left">指定栏目组</td>
</tr>
<tr>
<td style="text-align:left">groupChannelNot</td>
<td style="text-align:left">排除栏目组</td>
</tr>
<tr>
<td style="text-align:left">groupContent</td>
<td style="text-align:left">指定内容组</td>
</tr>
<tr>
<td style="text-align:left">groupContentNot</td>
<td style="text-align:left">排除内容组</td>
</tr>
<tr>
<td style="text-align:left">tags</td>
<td style="text-align:left">指定标签</td>
</tr>
<tr>
<td style="text-align:left">order</td>
<td style="text-align:left">排序</td>
</tr>
<tr>
<td style="text-align:left">totalNum</td>
<td style="text-align:left">显示数目</td>
</tr>
<tr>
<td style="text-align:left">titleWordNum</td>
<td style="text-align:left">标题文字数量</td>
</tr>
<tr>
<td style="text-align:left">where</td>
<td style="text-align:left">条件判断</td>
</tr>
<tr>
<td style="text-align:left">queryString</td>
<td style="text-align:left">链接参数</td>
</tr>
<tr>
<td style="text-align:left">isTop</td>
<td style="text-align:left">仅显示置顶内容</td>
</tr>
<tr>
<td style="text-align:left">isRecommend</td>
<td style="text-align:left">仅显示推荐内容</td>
</tr>
<tr>
<td style="text-align:left">isHot</td>
<td style="text-align:left">仅显示热点内容</td>
</tr>
<tr>
<td style="text-align:left">isColor</td>
<td style="text-align:left">仅显示醒目内容</td>
</tr>
<tr>
<td style="text-align:left">title</td>
<td style="text-align:left">下拉列表提示标题</td>
</tr>
<tr>
<td style="text-align:left">openWin</td>
<td style="text-align:left">新窗口打开链接</td>
</tr>
</tbody>
</table>
<p><strong>isChannel - 显示栏目下拉列表</strong></p>
<p>是否显示栏目下拉列表</p>
<ul>
<li>&quot;true&quot; 不从所有栏目总选择</li>
<li>&quot;false&quot; 从网站的所有栏目中选择合适的栏目进行显示</li>
</ul>
<p><strong>channelIndex - 栏目索引</strong></p>
<p>栏目索引是一个站点中栏目的标识，具有唯一性。</p>
<p>如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 链接到首页 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>select</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>channelName - 栏目名称</strong></p>
<p>栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 链接到当前栏目下的名称为“栏目名称”的栏目 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>select</span> <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 链接到“栏目索引”下的名称为“栏目名称”的栏目 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>select</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目索引<span class="token punctuation">"</span></span> <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>parent - 上级栏目</strong></p>
<p>将上下文切换到当前栏目的上一级栏目。</p>
<ul>
<li>&quot;true&quot; 表示切换到当前栏目的上一级栏目，等价于 upLevel=&quot;1&quot;。</li>
<li>&quot;false&quot; 表示不切换到当前栏目的上一级栏目。</li>
</ul>
<p>如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 链接到当前栏目的上一级栏目 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>select</span> <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>upLevel - 上级栏目的级别</strong></p>
<p>切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。</p>
<p>如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 链接到当前栏目的上两级栏目 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>select</span> <span class="token attr-name">upLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>topLevel - 从首页向下的栏目级别</strong></p>
<p>切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 链接到一级栏目 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>select</span> <span class="token attr-name">topLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>context - 上下文
通常如果标签被嵌套在列表元素中时，系统会设置上下文为当前的列表类型，同时对标签进行解析时也将根据列表类型进行判断，如将 <code>&lt;stl:select&gt;&lt;/stl:select&gt;</code> 放到内容列表以及栏目列表中时，stl:select 标签的链接会分别显示内容的连接以及栏目的连接。</p>
<p>如果希望<code>&lt;stl:select&gt;&lt;/stl:select&gt;</code>标签无论在内容列表还是栏目列表都只显示栏目链接，可以设置 context 属性为 Channel:<code>&lt;stl:select context=&quot;channel&quot;&gt;&lt;/stl:select&gt;</code></p>
<ul>
<li>&quot;default&quot; 默认，即当前所处上下文。</li>
<li>&quot;content&quot; 内容上下文。</li>
<li>&quot;channel&quot; 栏目上下文。</li>
<li>&quot;sqlContent&quot; Sql 内容上下文。</li>
<li>&quot;site&quot; 站点上下文。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 分别显示栏目与内容链接 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channels</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
    栏目：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>select</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>channel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>select</span><span class="token punctuation">></span></span>
    内容：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>select</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>select</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channels</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>scope - 选择的范围</strong></p>
<p>内容范围。此属性只可属于以下可能的取值的一种。</p>
<ul>
<li>&quot;Self&quot; 显示本栏目下的所有内容(仅内容下拉列表可用)</li>
<li>&quot;Children&quot; 当栏目下拉列表时显示所有下级栏目，当内容下拉列表时显示本栏目下级栏目下的所有内容</li>
<li>&quot;SelfAndChildren&quot; 显示本级栏目及下一极子栏目下的所有内容(仅内容下拉列表可用)</li>
<li>&quot;Descendant&quot; 当栏目下拉列表时显示所有级别的子栏目，当内容下拉列表时显示所有级别的子栏目下的所有内容</li>
<li>&quot;All&quot; 显示本级栏目及所有级别子栏目下的所有内容(仅内容下拉列表可用)</li>
</ul>
<p><strong>groupChannel - 指定栏目组</strong></p>
<p>栏目组别，如设置此属性，则只显示指定栏目组别的内容列表。</p>
<p><strong>groupChannelNot - 排除栏目组</strong></p>
<p>非栏目组别，如设置此属性，则只显示不等于指定栏目组别的内容列表。</p>
<p><strong>groupContent - 指定内容组</strong></p>
<p>内容组别，如设置此属性，则只显示指定内容组别的内容列表。</p>
<p><strong>groupContentNot - 排除内容组</strong></p>
<p>非内容组别，如设置此属性，则只显示不等于内容组别的内容列表。</p>
<p><strong>tags - 指定标签</strong></p>
<p>仅显示指定标签的内容，多个标签用&quot;,&quot;分隔。 (仅内容下拉列表可用)</p>
<p><strong>order - 排序</strong></p>
<p>下拉列表数据排序方式。此属性只可属于以下可能的取值的一种。</p>
<ul>
<li>&quot;default&quot; 默认排序，即 CMS 后台界面中的排序</li>
<li>&quot;back&quot; 默认排序的相反方向</li>
<li>&quot;addDate&quot; 按添加时间排序</li>
<li>&quot;addDateBack&quot; 按添加时间的相反方向排序</li>
<li>&quot;lastEditDate&quot; 按最后更改时间排序(仅内容下拉列表可用)</li>
<li>&quot;lastEditDateBack&quot; 按最后更改时间的相反方向排序(仅内容下拉列表可用)</li>
</ul>
<p><strong>totalNum - 显示数目</strong></p>
<p>设置列表一共显示多少条信息，0 代表显示所有信息。</p>
<p><strong>titleWordNum - 标题文字数量</strong></p>
<p>设置内容标题显示的字数，0 代表不限制字数。</p>
<p><strong>where - 条件判断</strong></p>
<p>获取下拉列表的条件判断</p>
<p><strong>queryString - 链接参数</strong></p>
<p>链接参数</p>
<p><strong>isTop - 仅显示置顶内容</strong></p>
<p>是否只显示置顶（非置顶）内容。</p>
<ul>
<li>&quot;true&quot; 仅显示置顶的内容</li>
<li>&quot;false&quot; 仅显示非置顶的内容</li>
</ul>
<p><strong>isRecommend - 仅显示推荐内容</strong></p>
<p>是否只显示推荐（非推荐）内容。</p>
<ul>
<li>&quot;true&quot; 仅显示推荐的内容</li>
<li>&quot;false&quot; 仅显示非推荐的内容</li>
</ul>
<p><strong>isHot - 仅显示热点内容</strong></p>
<p>是否只显示热点（非热点）内容。</p>
<ul>
<li>&quot;true&quot; 仅显示热点的内容</li>
<li>&quot;false&quot; 仅显示非热点的内容</li>
</ul>
<p><strong>isColor - 仅显示醒目内容</strong></p>
<p>是否只显示醒目（非醒目）内容。</p>
<ul>
<li>&quot;true&quot; 仅显示醒目的内容</li>
<li>&quot;false&quot; 仅显示非醒目的内容</li>
</ul>
<p><strong>title - 下拉列表提示标题</strong></p>
<p>下拉列表中的第一项，作为提示文字</p>
<p><strong>openWin - 新窗口打开链接</strong></p>
<p>选择下拉列表后是否在新窗口打开链接</p>
<ul>
<li>&quot;true&quot; 新窗口打开链接</li>
<li>&quot;false&quot; 原窗口打开链接</li>
</ul>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>显示栏目列表下拉框</strong></p>
<p>下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>select</span> <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span> <span class="token attr-name">isChannel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择标题进入栏目页<span class="token punctuation">"</span></span> <span class="token attr-name">openWin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>显示内容列表下拉框</strong></p>
<p>下面的例子显示由栏目索引为&quot;新闻&quot;的内容组成的下拉框。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>select</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>新闻<span class="token punctuation">"</span></span> <span class="token attr-name">isChannel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择标题进入内容页<span class="token punctuation">"</span></span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">openWin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>