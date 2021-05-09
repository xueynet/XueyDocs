<template><h1 id="stl-focusviewer-滚动焦点图"><a class="header-anchor" href="#stl-focusviewer-滚动焦点图">#</a> <a href="stl:focusViewer">stl:focusViewer</a> 滚动焦点图</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>focusViewer</span>
    <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目索引<span class="token punctuation">"</span></span>
    <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span>
    <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择的范围<span class="token punctuation">"</span></span>
    <span class="token attr-name">groupChannel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定栏目组<span class="token punctuation">"</span></span>
    <span class="token attr-name">groupChannelNot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>排除栏目组<span class="token punctuation">"</span></span>
    <span class="token attr-name">groupContent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定内容组<span class="token punctuation">"</span></span>
    <span class="token attr-name">groupContentNot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>排除内容组<span class="token punctuation">"</span></span>
    <span class="token attr-name">tags</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定标签<span class="token punctuation">"</span></span>
    <span class="token attr-name">order</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>排序<span class="token punctuation">"</span></span>
    <span class="token attr-name">startNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>从第几条信息开始显示<span class="token punctuation">"</span></span>
    <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示数目<span class="token punctuation">"</span></span>
    <span class="token attr-name">titleWordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题文字数量<span class="token punctuation">"</span></span>
    <span class="token attr-name">where</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>条件判断<span class="token punctuation">"</span></span>
    <span class="token attr-name">isTop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>仅显示置顶内容<span class="token punctuation">"</span></span>
    <span class="token attr-name">isRecommend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>仅显示推荐内容<span class="token punctuation">"</span></span>
    <span class="token attr-name">isHot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>仅显示热点内容<span class="token punctuation">"</span></span>
    <span class="token attr-name">isColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>仅显示醒目内容<span class="token punctuation">"</span></span>
    <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示样式<span class="token punctuation">"</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>宽度<span class="token punctuation">"</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>高度<span class="token punctuation">"</span></span>
    <span class="token attr-name">bgColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>背景色<span class="token punctuation">"</span></span>
    <span class="token attr-name">isShowText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示标题<span class="token punctuation">"</span></span>
    <span class="token attr-name">isTopText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题在正上方<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>focusViewer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:focusViewer</code> 标签在模板中实现滚动焦点图</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p><code>&lt;stl:focusViewer&gt;</code> 标签需要使用Flash，如果希望兼容HTML5 标准，请勿使用此标签。</p>
</div>
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
<td style="text-align:left">channelIndex</td>
<td style="text-align:left">栏目索引</td>
</tr>
<tr>
<td style="text-align:left">channelName</td>
<td style="text-align:left">栏目名称</td>
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
<td style="text-align:left">startNum</td>
<td style="text-align:left">第几条信息开始显示</td>
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
<td style="text-align:left">theme</td>
<td style="text-align:left">显示样式</td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">宽度</td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">高度</td>
</tr>
<tr>
<td style="text-align:left">bgColor</td>
<td style="text-align:left">背景色</td>
</tr>
<tr>
<td style="text-align:left">isShowText</td>
<td style="text-align:left">显示标题</td>
</tr>
<tr>
<td style="text-align:left">isTopText</td>
<td style="text-align:left">标题在正上方</td>
</tr>
</tbody>
</table>
<p><strong>channelIndex - 栏目索引</strong></p>
<p>栏目索引是一个站点中栏目的标识，具有唯一性。</p>
<p>如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 链接到首页 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>focusViewer</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>focusViewer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>channelName - 栏目名称</strong></p>
<p>栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 链接到当前栏目下的名称为“栏目名称”的栏目 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>focusViewer</span> <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>focusViewer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 链接到“栏目索引”下的名称为“栏目名称”的栏目 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>focusViewer</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目索引<span class="token punctuation">"</span></span> <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>focusViewer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>scope - 选择的范围</strong></p>
<p>内容范围。此属性只可属于以下可能的取值的一种。</p>
<ul>
<li>&quot;Self&quot; 显示本栏目下的所有内容(仅内容焦点滚动图可用)</li>
<li>&quot;Children&quot; 当栏目焦点滚动图时显示所有下级栏目，当内容焦点滚动图时显示本栏目下级栏目下的所有内容</li>
<li>&quot;SelfAndChildren&quot; 显示本级栏目及下一极子栏目下的所有内容(仅内容焦点滚动图可用)</li>
<li>&quot;Descendant&quot; 当栏目焦点滚动图时显示所有级别的子栏目，当内容焦点滚动图时显示所有级别的子栏目下的所有内容</li>
<li>&quot;All&quot; 显示本级栏目及所有级别子栏目下的所有内容(仅内容焦点滚动图可用)</li>
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
<p>仅显示指定标签的内容，多个标签用&quot;,&quot;分隔。 (仅内容焦点滚动图可用)</p>
<p><strong>order - 排序</strong></p>
<p>焦点滚动图数据排序方式。此属性只可属于以下可能的取值的一种。</p>
<ul>
<li>&quot;default&quot; 默认排序，即 CMS 后台界面中的排序</li>
<li>&quot;back&quot; 默认排序的相反方向</li>
<li>&quot;addDate&quot; 按添加时间排序</li>
<li>&quot;addDateBack&quot; 按添加时间的相反方向排序</li>
<li>&quot;lastEditDate&quot; 按最后更改时间排序(仅内容焦点滚动图可用)</li>
<li>&quot;lastEditDateBack&quot; 按最后更改时间的相反方向排序(仅内容焦点滚动图可用)</li>
</ul>
<p><strong>startNum - 从第几条信息开始显示</strong></p>
<p>1 从第几条信息开始显示，默认从第一条信息开始显示。</p>
<p><strong>totalNum - 显示内容数目</strong></p>
<p>设置一共显示多少条信息，0 代表显示所有信息。</p>
<p><strong>titleWordNum - 标题文字数量</strong></p>
<p>设置内容标题显示的字数，0 代表不限制字数。</p>
<p><strong>where - 条件判断</strong></p>
<p>获取焦点滚动图的条件判断。</p>
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
<p><strong>theme - 显示样式</strong></p>
<p>焦点滚动图显示样式，默认为 style1。</p>
<ul>
<li>&quot;style1&quot; 样式1</li>
<li>&quot;style2&quot; 样式2</li>
<li>&quot;style3&quot; 样式3</li>
<li>&quot;style4&quot; 样式4</li>
</ul>
<p><strong>width - 宽度</strong></p>
<p>焦点滚动图的宽度</p>
<p><strong>height - 高度</strong></p>
<p>焦点滚动图的高度</p>
<p><strong>bgColor - 背景色</strong></p>
<p>焦点滚动图的背景色</p>
<p><strong>isShowText - 显示标题</strong></p>
<p>是否显示标题。</p>
<ul>
<li>&quot;true&quot; 显示标题</li>
<li>&quot;false&quot; 不显示标题，仅显示图片</li>
</ul>
<p><strong>isTopText - 标题在正上方</strong></p>
<p>是否标题显示在正上方，默认标题显示在正下方。</p>
<ul>
<li>&quot;true&quot; 显示在正上方</li>
<li>&quot;false&quot; 显示在正下方</li>
</ul>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>显示当前栏目的焦点滚动图</strong></p>
<p>下面的例子显示当前栏目的焦点滚动图。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>focusViewer</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>focusViewer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>