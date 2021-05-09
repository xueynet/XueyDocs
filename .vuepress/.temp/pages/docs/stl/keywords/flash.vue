<template><h1 id="stl-flash-显示flash"><a class="header-anchor" href="#stl-flash-显示flash">#</a> <a href="stl:flash">stl:flash</a> 显示Flash</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>flash</span>
    <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目索引<span class="token punctuation">"</span></span>
    <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span>
    <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示父栏目<span class="token punctuation">"</span></span>
    <span class="token attr-name">upLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上级栏目的级别<span class="token punctuation">"</span></span>
    <span class="token attr-name">topLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>从首页向下的栏目级别<span class="token punctuation">"</span></span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定存储flash文件的字段<span class="token punctuation">"</span></span>
    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示的flash地址<span class="token punctuation">"</span></span>
    <span class="token attr-name">altSrc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>备选flash文件地址<span class="token punctuation">"</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>宽度<span class="token punctuation">"</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>高度<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>flash</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:flash</code> 标签在模板中获取并显示栏目或内容的Flash</p>
<p><code>stl:flash</code> 标签的地址取自栏目或内容的图片地址，当图片地址为SWF结尾的flash文件时显示此标签，否则自动转成 <code>&lt;stl:image&gt;</code> 标签。</p>
<p>标签 在栏目模版中默认显示此栏目的flash，在内容模版中默认显示此内容的flash。</p>
<p><code>stl:flash</code> 标签能够作为 <code>&lt;stl:channels&gt;</code> 等标签的子标签，当作为 的子标签使用时将显示栏目的flash。 <code>stl:flash</code> 标签能够作为 <code>&lt;stl:contents&gt;</code> 等标签的子标签，当作为 的子标签使用时将显示内容的flash。</p>
<p><code>&lt;stl:flash&gt;</code> 标签对应的实体为<code>{stl:flash}</code>。</p>
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
<td style="text-align:left">parent</td>
<td style="text-align:left">显示父栏目</td>
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
<td style="text-align:left">type</td>
<td style="text-align:left">指定存储flash文件的字段</td>
</tr>
<tr>
<td style="text-align:left">src</td>
<td style="text-align:left">显示的flash文件地址</td>
</tr>
<tr>
<td style="text-align:left">altSrc</td>
<td style="text-align:left">备选flash文件地址</td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">宽度</td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">高度</td>
</tr>
</tbody>
</table>
<p><strong>channelIndex - 栏目索引</strong></p>
<p>栏目索引</p>
<p><strong>channelName - 栏目名称</strong></p>
<p>栏目名称</p>
<p><strong>parent - 显示父栏目</strong></p>
<p>是否显示父栏目的 flash。此属性只可属于以下可能的取值的一种。</p>
<ul>
<li>&quot;true&quot; 显示父栏目的 flash，等价于 upLevel=&quot;1&quot;</li>
<li>&quot;false&quot; 不显示父栏目的 flash</li>
</ul>
<p><strong>upLevel - 上级栏目的级别</strong></p>
<p>显示上几级栏目的 flash，0 为本级，1 为父栏目，以此类推。</p>
<p><strong>topLevel - 从首页向下的栏目级别</strong></p>
<p>显示从首页向下某个级别栏目的 flash，0 代表网站首页，1 代表一级栏目，以此类推。</p>
<p><strong>type - 指定存储flash文件的字段</strong></p>
<p>ImageUrl 指定存储 Flash 的字段，可以是自定义字段</p>
<p><strong>src - 显示的flash文件地址</strong></p>
<p>flash 文件地址，可以用&quot;@&quot;开头表示当前网站根目录，用&quot;~&quot;开头表示系统根目录。</p>
<p><strong>altSrc - 备选flash文件地址</strong></p>
<p>指定的 flash 不存在时的显示地址，可以用&quot;@&quot;开头表示当前网站根目录，用&quot;~&quot;开头表示系统根目录。</p>
<p><strong>width - 宽度</strong></p>
<p>flash 的宽度</p>
<p><strong>height - 宽度</strong></p>
<p>flash 的高度</p>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>显示指定的 flash 文件</strong></p>
<p>下面的例子显示文件名称为&quot;hot.swf&quot;的 flash 文件。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>flash</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/images/hot.swf<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>flash</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>显示指定栏目的 flash</strong></p>
<p>下面的例子显示栏目&quot;新闻&quot;的 flash。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>flash</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>新闻<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>flash</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>