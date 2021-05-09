<template><h1 id="stl-channel-获取栏目值"><a class="header-anchor" href="#stl-channel-获取栏目值">#</a> <a href="stl:channel">stl:channel</a> 获取栏目值</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示的类型<span class="token punctuation">"</span></span>
    <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目索引<span class="token punctuation">"</span></span>
    <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span>
    <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示父栏目属性<span class="token punctuation">"</span></span>
    <span class="token attr-name">upLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上级栏目的级别<span class="token punctuation">"</span></span>
    <span class="token attr-name">topLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>从首页向下的栏目级别<span class="token punctuation">"</span></span>
    <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示在信息前的文字<span class="token punctuation">"</span></span>
    <span class="token attr-name">rightText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示在信息后的文字<span class="token punctuation">"</span></span>
    <span class="token attr-name">formatString</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示的格式<span class="token punctuation">"</span></span>
    <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示多项时的分割字符串<span class="token punctuation">"</span></span>
    <span class="token attr-name">wordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示字符的数目<span class="token punctuation">"</span></span>
    <span class="token attr-name">startIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>字符开始位置<span class="token punctuation">"</span></span>
    <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定字符长度<span class="token punctuation">"</span></span>
    <span class="token attr-name">ellipsis</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>文字超出部分显示的文字<span class="token punctuation">"</span></span>
    <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>需要被替换的文字<span class="token punctuation">"</span></span>
    <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>替换文字<span class="token punctuation">"</span></span>
    <span class="token attr-name">isClearTags</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>清除标签<span class="token punctuation">"</span></span>
    <span class="token attr-name">isReturnToBr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>回车改为换行<span class="token punctuation">"</span></span>
    <span class="token attr-name">isLower</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>转换为小写<span class="token punctuation">"</span></span>
    <span class="token attr-name">isUpper</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>转换为大写<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:channel</code> 标签在模板中显示指定栏目的属性值。</p>
<p><code>&lt;stl:channel&gt;</code> 标签单独使用时，系统默认将显示当前栏目的值，如果希望显示指定栏目的值，请设置 上下文切换 属性。</p>
<p>如果 <code>&lt;stl:channel&gt;</code> 标签嵌套在 <code>&lt;stl:channels&gt;</code>以及<code>&lt;stl:pageChannels&gt;</code> 栏目列表标签内，系统将获取栏目列表项并解析为相应的值。</p>
<p>type 属性用于明确需要显示栏目的具体字段，如果未设置，系统将显示栏目名称。</p>
<p>如果需要对返回的文字进行截字或者其他处理，请设置 解析文字 属性。</p>
<p>如果需要显示日期/时间类型的栏目字段，可以通过 formatString 属性 格式化日期。</p>
<p>如果希望将栏目的属性值放到 HTML 元素或者 STL 元素的属性中使用，请使用<code>{stl:channel}</code> 实体写法，如：<code>&lt;a title=&quot;{stl:channel type=title}&quot;&gt;</code>。</p>
<p>如果需要获取栏目正文并分页显示，请设置type属性为 pageContent，同时配合 <code>stl:pageItem</code> 标签实现分页效果。</p>
<h3 id="解析"><a class="header-anchor" href="#解析">#</a> 解析</h3>
<p>如果使用 <code>&lt;stl:channel&gt;</code> 元素，系统将根据栏目字段的类型解析为不同的值（通常为字符串，如果字段类型为图片系统将解析为<code>&lt;img&gt;</code>标签）。</p>
<p>如果使用 <code>{stl:channel}</code> 实体，系统将根据是否设置type 属性，解析为不同的结果：</p>
<ul>
<li>设置了type属性，系统将实体解析为栏目的具体字段值。</li>
<li>未设置type属性，系统将实体解析为栏目的JSON对象。</li>
</ul>
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
<td style="text-align:left">显示的类型</td>
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
<td style="text-align:left">显示父栏目属性</td>
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
<td style="text-align:left">leftText</td>
<td style="text-align:left">显示在信息前的文字</td>
</tr>
<tr>
<td style="text-align:left">rightText</td>
<td style="text-align:left">显示在信息后的文字</td>
</tr>
<tr>
<td style="text-align:left">formatString</td>
<td style="text-align:left">显示的格式</td>
</tr>
<tr>
<td style="text-align:left">separator</td>
<td style="text-align:left">显示多项时的分割字符串</td>
</tr>
<tr>
<td style="text-align:left">wordNum</td>
<td style="text-align:left">显示字符的数目</td>
</tr>
<tr>
<td style="text-align:left">startIndex</td>
<td style="text-align:left">字符开始位置</td>
</tr>
<tr>
<td style="text-align:left">length</td>
<td style="text-align:left">指定字符长度</td>
</tr>
<tr>
<td style="text-align:left">ellipsis</td>
<td style="text-align:left">文字超出部分显示的文字</td>
</tr>
<tr>
<td style="text-align:left">replace</td>
<td style="text-align:left">需要被替换的文字</td>
</tr>
<tr>
<td style="text-align:left">to</td>
<td style="text-align:left">替换文字</td>
</tr>
<tr>
<td style="text-align:left">isClearTags</td>
<td style="text-align:left">清除标签</td>
</tr>
<tr>
<td style="text-align:left">isReturnToBr</td>
<td style="text-align:left">回车改为换行</td>
</tr>
<tr>
<td style="text-align:left">isLower</td>
<td style="text-align:left">转换为小写</td>
</tr>
<tr>
<td style="text-align:left">isUpper</td>
<td style="text-align:left">转换为大写</td>
</tr>
</tbody>
</table>
<p><strong>type - 显示的类型</strong></p>
<p>显示栏目属性的类型。根据后台栏目字段的不同 type 属性可以有不同的取值。详细字段请参考：<RouterLink to="/dictionary/">栏目表结构</RouterLink></p>
<ul>
<li>&quot;title&quot; 显示栏目的名称。此值是默认的，如果没有指定属性的话。</li>
<li>&quot;id&quot; 栏目 Id。</li>
<li>&quot;channelIndex&quot; 栏目索引。</li>
<li>&quot;content&quot; Content。</li>
<li>&quot;pageContent&quot; 能够分页显示的栏目正文。</li>
<li>&quot;addDate&quot; 显示栏目添加日期。</li>
<li>&quot;imageUrl&quot; 显示栏目图片。</li>
<li>&quot;itemIndex&quot; 项次序数字。</li>
<li>&quot;countOfChannels&quot; 子栏目数。</li>
<li>&quot;countOfContents&quot; 内容数。</li>
<li>&quot;countOfImageContents&quot; 图片内容数。</li>
<li>&quot;keywords&quot; 关键字。</li>
<li>&quot;description&quot; 页面描述。</li>
<li>&quot;自定义字段&quot; 在后台栏目字段管理中自定义的字段名称。</li>
</ul>
<p><strong>channelIndex - 栏目索引</strong></p>
<p>栏目索引是一个站点中栏目的标识，具有唯一性。</p>
<p>如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 显示首页栏目的正文 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>channelName - 栏目名称</strong></p>
<p>栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 显示当前栏目下的名称为“栏目名称”的栏目的正文 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 显示“栏目索引”下的名称为“栏目名称”的栏目的正文 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目索引<span class="token punctuation">"</span></span> <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>parent - 显示父栏目属性</strong></p>
<p>将上下文切换到当前栏目的上一级栏目。</p>
<ul>
<li>&quot;true&quot; 表示切换到当前栏目的上一级栏目，等价于 upLevel=&quot;1&quot;。</li>
<li>&quot;false&quot; 表示不切换到当前栏目的上一级栏目。</li>
</ul>
<p>如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 显示当前栏目的上一级栏目的正文 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>upLevel - 上级栏目的级别</strong></p>
<p>切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。</p>
<p>如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 显示当前栏目的上两级栏目的正文 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">upLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>topLevel - 从首页向下的栏目级别</strong></p>
<p>切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 显示一级栏目的正文 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">topLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>leftText - 显示在信息前的文字</strong></p>
<p>显示在文字之前的文字，系统会判断文字是否为空，如果文字为空，文字前缀也将不显示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题：<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>rightText - 显示在信息后的文字</strong></p>
<p>显示在文字之后的文字，系统会判断文字是否为空，如果文字为空，文字后缀也将不显示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>【<span class="token punctuation">"</span></span> <span class="token attr-name">rightText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>】<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>formatString - 显示的格式</strong></p>
<p>当需要显示日期型的字段值时，可以通过 formatString 属性来设置日期格式。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AddDate<span class="token punctuation">"</span></span> <span class="token attr-name">formatString</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yyyy-MM-dd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>separator - 显示多项时的分割字符串</strong></p>
<p>显示多项时的分割字符串。</p>
<p><strong>wordNum - 显示字符的数目</strong></p>
<p>设置显示文字的字数，超出部分将用 ellipsis 属性设置的值替代。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>wordNum 区分中英文，中文汉字算作一个字符，两个英文字母才算作一个字符。 由于在 Web 页面中，两个英文字母的宽度等于一个汉字，所以我们通常使用 wordNum 属性来设置文本的显示数量。</p>
</div>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">wordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>startIndex - 字符开始位置</strong></p>
<p>设置文字开始显示的位置，默认值为 0，代表从头显示。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>startIndex 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。</p>
</div>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">startIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>length - 指定字符长度</strong></p>
<p>设置显示文字的字数，超出部分将用 ellipsis 属性设置的值替代。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>length 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。</p>
</div>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>ellipsis - 文字超出部分显示的文字</strong></p>
<p>设置了 wordNum 属性或者 length 属性时，当文字超出了指定的字数后，超出部分将用 ellipsis 属性设置的值来替代。</p>
<p>ellipsis 的默认值为 ...，你也可以设置空值（ellipsis=&quot;&quot;）来让超出部分不使用符号替换。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">wordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">ellipsis</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span> -- end --<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>replace - 需要被替换的文字</strong></p>
<p>如果需要将文字中的一部分替换为另一部分，可以使用 replace 属性和 to 属性。</p>
<p>replace 代表需要替换的文字，支持纯文本、列表和正则表达式三种写法。</p>
<h5 id="使用纯文本替换"><a class="header-anchor" href="#使用纯文本替换">#</a> 使用纯文本替换</h5>
<p>纯文本替换直接输入替换前文字和替换后文字即可：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>他<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>她<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="使用列表替换"><a class="header-anchor" href="#使用列表替换">#</a> 使用列表替换</h5>
<p>列表替换适合多个文本替换的情况，将需要替换的文字用英文逗号（,）隔开：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>他,她<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>he,she<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果多个文本都替换为一个文本，to 属性可以不使用逗号隔开：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>他,她<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>who<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="使用正则表达式替换"><a class="header-anchor" href="#使用正则表达式替换">#</a> 使用正则表达式替换</h5>
<p>正则表达式替换需要将 replace 前后添加“/”符号，“/”符号之间的文字为替换需要使用的正则表达式：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/(Mr\\.? |Mrs\\.? |Miss |Ms\\.? )/<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>to 替换文字</strong></p>
<p>to 代表替换后的文字。</p>
<p><strong>isClearTags - 清除标签</strong></p>
<p>设置是否清除 HTML 标签，仅显示纯文本。</p>
<p>在后台内容编辑器中录入的数据通常会带有大量的 HTML 标签，如果我们只希望显示文字本身，需要使用 isClearTags 属性。</p>
<ul>
<li>&quot;true&quot; 清除 HTML 标签。</li>
<li>&quot;false&quot; 不清除 HTML 标签。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span> <span class="token attr-name">isClearTags</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isReturnToBr - 回车改为换行</strong></p>
<p>设置是否将回车换行符号替换为 HTML <br>换行标签。</p>
<p>由于 HTML 中的换行在页面中显示为空格，所以如果需要显示后台 TextArea 文本框录入的换行时，需要使用 isReturnToBr 属性。</p>
<ul>
<li>&quot;true&quot; 替换回车符。</li>
<li>&quot;false&quot; 不替换回车符。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">isReturnToBr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isLower - 转换为小写</strong></p>
<p>设置是否将文本中的所有英文字母转换为小写字母。</p>
<ul>
<li>&quot;true&quot; 转换为小写。</li>
<li>&quot;false&quot; 不转换为小写。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">isLower</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isUpper - 转换为大写</strong></p>
<p>设置是否将文本中的所有英文字母转换为大写字母。</p>
<ul>
<li>&quot;true&quot; 转换为大写。</li>
<li>&quot;false&quot; 不转换为大写。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">isUpper</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>指定栏目的子栏目名称列表</strong></p>
<p>下面的例子显示栏目“首页”的所有子栏目名称。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channels</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channels</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>  新闻<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
  人才招聘<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
  互动交流<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
  信息公开<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>在栏目列表中显示栏目名称以及内容数</strong></p>
<p>下面的例子显示上级栏目的所有子栏目名称列表，并在名称后显示对应的内容数。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channels</span> <span class="token attr-name">upLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>(<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>CountOfContents<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channels</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>  stl:channels 栏目列表(3)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
  stl:channel 获取栏目值(3)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>显示当前栏目的名称</strong></p>
<p>下面的例子显示当前栏目的栏目名称。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>stl:channel 获取栏目值
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>显示指定栏目的所有下级栏目数量</strong></p>
<p>下面的例子显示栏目索引为&quot;首页&quot;的所有下级栏目数量。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>CountOfChannels<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>110
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>显示父栏目的栏目内容</strong></p>
<p>下面的例子显示父栏目的栏目内容。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">color</span><span class="token punctuation">:</span>#333333<span class="token punctuation">;</span><span class="token property">font-family</span><span class="token punctuation">:</span><span class="token string">'helvetica neue'</span><span class="token punctuation">,</span> helvetica<span class="token punctuation">,</span> arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span>14px<span class="token punctuation">;</span><span class="token property">line-height</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span><span class="token property">margin-top</span><span class="token punctuation">:</span>0px<span class="token punctuation">;</span><span class="token property">margin-bottom</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>栏目标签包含获取栏目列表以及栏目属性的相关标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>