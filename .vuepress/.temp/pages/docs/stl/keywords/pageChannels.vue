<template><h1 id="stl-pagechannels-分页栏目列表"><a class="header-anchor" href="#stl-pagechannels-分页栏目列表">#</a> <a href="stl:pageChannels">stl:pageChannels</a> 分页栏目列表</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageChannels</span>
    <span class="token attr-name">pageNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>每页显示的栏目数目<span class="token punctuation">"</span></span>
    <span class="token attr-name">isTotal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>从所有栏目中选择<span class="token punctuation">"</span></span>
    <span class="token attr-name">isAllChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示所有级别的子栏目<span class="token punctuation">"</span></span>
    <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目索引<span class="token punctuation">"</span></span>
    <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span>
    <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上级栏目<span class="token punctuation">"</span></span>
    <span class="token attr-name">upLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上级栏目的级别<span class="token punctuation">"</span></span>
    <span class="token attr-name">topLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>从首页向下的栏目级别<span class="token punctuation">"</span></span>
    <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>范围<span class="token punctuation">"</span></span>
    <span class="token attr-name">groupChannel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定栏目组<span class="token punctuation">"</span></span>
    <span class="token attr-name">groupChannelNot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>排除栏目组<span class="token punctuation">"</span></span>
    <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示信息总数<span class="token punctuation">"</span></span>
    <span class="token attr-name">startNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>从第几条信息开始显示<span class="token punctuation">"</span></span>
    <span class="token attr-name">order</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>排序<span class="token punctuation">"</span></span>
    <span class="token attr-name">where</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>条件判断<span class="token punctuation">"</span></span>
    <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>布局<span class="token punctuation">"</span></span>
    <span class="token attr-name">columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>列数<span class="token punctuation">"</span></span>
    <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>方向<span class="token punctuation">"</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>整体高度<span class="token punctuation">"</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>整体宽度<span class="token punctuation">"</span></span>
    <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>整体对齐<span class="token punctuation">"</span></span>
    <span class="token attr-name">itemHeight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>项高度<span class="token punctuation">"</span></span>
    <span class="token attr-name">itemWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>项宽度<span class="token punctuation">"</span></span>
    <span class="token attr-name">itemAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>项水平对齐<span class="token punctuation">"</span></span>
    <span class="token attr-name">itemVerticalAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>项垂直对齐<span class="token punctuation">"</span></span>
    <span class="token attr-name">itemClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>项Css类<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageChannels</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:pageChannels</code> 标签在模板中显示分页栏目列表</p>
<p><code>&lt;stl:pageChannels&gt;</code> 标签需要和STL 标签 <code>&lt;stl:pageItems&gt;</code> 及 <code>&lt;stl:pageItem&gt;</code> 配合使用。</p>
<p><code>&lt;stl:pageChannels&gt;</code> 标签和 <code>&lt;stl:channels&gt;</code> 具有相同的属性，这两个标签的区别在于 <code>&lt;stl:pageChannels&gt;</code> 能够分页，且 <code>&lt;stl:pageChannels&gt;</code> 标签仅能用在栏目模板中。</p>
<p>通常将STL 标签 <code>&lt;stl:pageItems&gt;</code> 及 <code>&lt;stl:pageItem&gt;</code> 置于 <code>&lt;stl:pageChannels&gt;</code> 标签的下方，代表分页按钮。</p>
<p><code>&lt;stl:pageChannels&gt;</code> 只能在栏目模版中使用，如果需要在其他类型的模版中使用必须将 <code>&lt;stl:pageChannels&gt;</code> 标签和对应的 <code>&lt;stl:pageItems&gt;</code> 分页标签放到<code>&lt;stl:dynamic&gt;</code> 动态标签中，否则 <code>&lt;stl:pageChannels&gt;</code> 标签将无法解析。</p>
<p>列表相关介绍请参见列表标签及列表项</p>
<p><code>&lt;stl:pageChannels&gt;</code> 标签对应的实体为<code>{stl:pageChannels}</code>。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>分页列表标签会按分页数生成对应的静态文件，故一个模板中只能有一个分页列表标签。</p>
</div>
<h3 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>所有属于 STL 标签 <code>&lt;stl:channels&gt;</code> 的成员均适用于 <code>&lt;stl:pageChannels&gt;</code> 标签，所有属于 HTML 标签<code>&lt;table&gt;</code>的成员均适用于<code>&lt;stl:pageChannels&gt;</code>标签。</p>
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
<td style="text-align:left">pageNum</td>
<td style="text-align:left">每页显示的栏目数目</td>
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
<td style="text-align:left">scope</td>
<td style="text-align:left">范围</td>
</tr>
<tr>
<td style="text-align:left">isTotal</td>
<td style="text-align:left">从所有栏目中选择</td>
</tr>
<tr>
<td style="text-align:left">isAllChildren</td>
<td style="text-align:left">显示所有级别的子栏目</td>
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
<td style="text-align:left">totalNum</td>
<td style="text-align:left">显示信息总数</td>
</tr>
<tr>
<td style="text-align:left">startNum</td>
<td style="text-align:left">从第几条信息开始显示</td>
</tr>
<tr>
<td style="text-align:left">order</td>
<td style="text-align:left">排序</td>
</tr>
<tr>
<td style="text-align:left">where</td>
<td style="text-align:left">条件判断</td>
</tr>
<tr>
<td style="text-align:left">layout</td>
<td style="text-align:left">布局</td>
</tr>
<tr>
<td style="text-align:left">columns</td>
<td style="text-align:left">列数</td>
</tr>
<tr>
<td style="text-align:left">direction</td>
<td style="text-align:left">方向</td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">整体高度</td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">整体宽度</td>
</tr>
<tr>
<td style="text-align:left">align</td>
<td style="text-align:left">整体对齐</td>
</tr>
<tr>
<td style="text-align:left">itemHeight</td>
<td style="text-align:left">项高度</td>
</tr>
<tr>
<td style="text-align:left">itemWidth</td>
<td style="text-align:left">项宽度</td>
</tr>
<tr>
<td style="text-align:left">itemAlign</td>
<td style="text-align:left">项水平对齐</td>
</tr>
<tr>
<td style="text-align:left">itemVerticalAlign</td>
<td style="text-align:left">项垂直对齐</td>
</tr>
<tr>
<td style="text-align:left">itemClass</td>
<td style="text-align:left">项Css类</td>
</tr>
</tbody>
</table>
<p><strong>pageNum - 每页显示的栏目数目</strong></p>
<p>每一页显示的栏目数目。</p>
<p><strong>channelIndex - 栏目索引</strong></p>
<p>栏目索引是一个站点中栏目的标识，具有唯一性。</p>
<p>如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 显示首页下的子栏目列表 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageChannels</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageChannels</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>channelName - 栏目名称</strong></p>
<p>栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 显示当前栏目下的名称为“栏目名称”的栏目的子栏目列表 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageChannels</span> <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageChannels</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 显示“栏目索引”下的名称为“栏目名称”的栏目的子栏目列表 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageChannels</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目索引<span class="token punctuation">"</span></span> <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageChannels</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>parent - 上级栏目</strong></p>
<p>将上下文切换到当前栏目的上一级栏目。</p>
<ul>
<li>&quot;true&quot; 表示切换到当前栏目的上一级栏目，等价于 upLevel=&quot;1&quot;。</li>
<li>&quot;false&quot; 表示不切换到当前栏目的上一级栏目。</li>
</ul>
<p>如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 显示当前栏目的上一级栏目的子栏目列表 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageChannels</span> <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageChannels</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>upLevel - 上级栏目的级别</strong></p>
<p>切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。</p>
<p>如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 显示当前栏目的上两级栏目的子栏目列表 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageChannels</span> <span class="token attr-name">upLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageChannels</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>topLevel - 从首页向下的栏目级别</strong></p>
<p>切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 显示一级栏目的子栏目列表 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageChannels</span> <span class="token attr-name">topLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageChannels</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>scope - 范围</strong></p>
<p>栏目范围，默认为children。此属性只可属于以下可能的取值的一种。</p>
<ul>
<li>&quot;children&quot; 只显示下一极子栏目下的所有栏目</li>
<li>&quot;descendant&quot; 显示所有级别的子栏目下的所有栏目</li>
<li>&quot;all&quot; 显示全部栏目</li>
</ul>
<p><strong>isTotal - 从所有栏目中选择</strong></p>
<p>是否从所有栏目中选择（包括首页），等价于属性 <code>scope=&quot;all&quot;</code></p>
<ul>
<li>&quot;true&quot; 从网站的所有栏目中选择合适的栏目进行显示。</li>
<li>&quot;false&quot; 不从所有栏目总选择。此值是默认的，如果没有指定属性的话。</li>
</ul>
<p><strong>isAllChildren - 显示所有级别的子栏目</strong></p>
<p>是否显示所有级别的子栏目，等价于属性 <code>scope=&quot;descendant&quot;</code></p>
<ul>
<li>&quot;true&quot; 显示所有级别的子栏目。</li>
<li>&quot;false&quot; 只显示子栏目，不包括子栏目的子栏目。此值是默认的，如果没有指定属性的话。</li>
</ul>
<p><strong>groupChannel - 指定栏目组</strong></p>
<p>栏目组别，如设置此属性，则只显示栏目组别等于 group 的栏目列表。</p>
<p><strong>groupChannelNot - 排除栏目组</strong></p>
<p>非栏目组别，如设置此属性，则只显示栏目组别不等于 group 的栏目列表。</p>
<p><strong>totalNum - 显示信息总数</strong></p>
<p>设置列表一共显示多少条信息，默认值为 0，代表显示所有信息。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageChannels</span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageChannels</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>startNum - 从第几条信息开始显示</strong></p>
<p>设置列表从第几条信息开始显示，默认值为 1，代表从第一条信息开始显示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageChannels</span> <span class="token attr-name">startNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageChannels</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>order - 排序</strong></p>
<p>栏目列表排序方式。此属性只可属于以下可能的取值的一种。</p>
<ul>
<li>&quot;default&quot; 默认排序，即栏目管理界面中的排序。此值是默认的，如果没有指定属性的话。</li>
<li>&quot;back&quot; 默认排序的相反方向。</li>
<li>&quot;addDate&quot; 按添加时间排序。</li>
<li>&quot;addDateBack&quot; 按添加时间的相反方向排序。</li>
<li>&quot;hits&quot; 按点击量排序。</li>
<li>&quot;random&quot; 随机显示栏目。</li>
</ul>
<p><strong>where - 条件判断</strong></p>
<p>获取栏目列表的条件判断</p>
<p><strong>layout - 布局</strong></p>
<p>列表布局属性用于控制列表循环中每一项的显示方式，默认值为 none，即直接循环，不控制列表项显示。</p>
<ul>
<li>&quot;none&quot; 列表不使用布局，仅循环列表项，不控制列表项显示。此值是默认的，如果没有指定属性的话。</li>
<li>&quot;table&quot; 列表使用表格布局，系统将把列表标签解析为 HTML <code>&lt;table&gt;</code> 元素，table 标签的所有属性（class、style、cellPadding、cellSpacing 等）均可用在列表标签中。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageChannels</span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table<span class="token punctuation">"</span></span> <span class="token attr-name">columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>90%<span class="token punctuation">"</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageChannels</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>columns - 列数</strong></p>
<p>columns 属性决定要显示的列的数量。比如，如果要在列表中显示四列的项，那么可以把这个属性设为 4。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageChannels</span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table<span class="token punctuation">"</span></span> <span class="token attr-name">columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>90%<span class="token punctuation">"</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageChannels</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>columns 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>direction - 方向</strong></p>
<p>direction 属性用于确定列表是按水平方向还是或垂直方向来重复。</p>
<ul>
<li>&quot;vertical&quot; 垂直</li>
<li>&quot;horizontal&quot; 水平</li>
</ul>
<p>如果将此属性设置为 vertical，列表中的项显示在从上到下加载的列中，然后从左到右，直到呈现所有项。例如，如果将 columns 属性设置为 3，列表中的项显示在三列中，如下表所示。</p>
<table>
<thead>
<tr>
<th style="text-align:center">1</th>
<th style="text-align:center">4</th>
<th style="text-align:center">7</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">5</td>
<td style="text-align:center">8</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">6</td>
<td style="text-align:center">9</td>
</tr>
</tbody>
</table>
<p>如果将此属性设置为 horizontal，列表中的项以从左到右加载的行显示，然后从上到下，直到呈现所有项。例如，如果将 columns 属性设置为 3，列表的项将以每行三项的形式显示，如下表所示。</p>
<table>
<thead>
<tr>
<th style="text-align:center">1</th>
<th style="text-align:center">2</th>
<th style="text-align:center">3</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">5</td>
<td style="text-align:center">6</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">8</td>
<td style="text-align:center">9</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>即使 direction 值为 vertical，还是显示为 4 个列。columns 永远是指重复的列的数量，而不是行的数量。</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>direction 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 且设置了列数 columns 时才起作用。</p>
</div>
<p><strong>height - 整体高度</strong></p>
<p>设置列表的整体高度。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>height 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>width - 整体宽度</strong></p>
<p>设置列表的整体宽度。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>width 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
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
<p>align 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>itemHeight - 项高度</strong></p>
<p>列表中每一项的高度。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>itemHeight 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>itemWidth - 项宽度</strong></p>
<p>列表中每一项的宽度。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>itemWidth 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>itemAlign - 项水平对齐</strong></p>
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
<p><strong>itemVerticalAlign - 项垂直对齐</strong></p>
<p>列表中每一项的垂直对齐方式。</p>
<ul>
<li>&quot;top&quot; 顶端对齐。</li>
<li>&quot;middle&quot; 居中对齐。</li>
<li>&quot;bottom&quot; 底端对齐。</li>
<li>&quot;notSet&quot; 不设置。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>itemVerticalAlign 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>itemClass - 项Css类</strong></p>
<p>列表中每一项的Css类名称。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>itemClass 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>显示能够分页的栏目列表</strong></p>
<p>下面的例子显示当前栏目下的所有子栏目的列表，每 10 个栏目翻一页，列表下方显示分页导航。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageChannels</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>STL基本标签<span class="token punctuation">"</span></span> <span class="token attr-name">pageNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">cellspacing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageChannels</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageItems</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">cellspacing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>90%<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageItem</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>FirstPage<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageItem</span><span class="token punctuation">></span></span> |
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageItem</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>PreviousPage<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上一页<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageItem</span><span class="token punctuation">></span></span> |
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageItem</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>NextPage<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>下一页<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageItem</span><span class="token punctuation">></span></span> |
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageItem</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LastPage<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>末页<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageItem</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>CurrentPageIndex<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>当前页：<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageItem</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>PageNavigation<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageItems</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>