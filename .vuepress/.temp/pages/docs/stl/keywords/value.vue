<template><h1 id="stl-value-获取值"><a class="header-anchor" href="#stl-value-获取值">#</a> <a href="stl:value">stl:value</a> 获取值</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>类型<span class="token punctuation">"</span></span>
    <span class="token attr-name">formatString</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示的格式<span class="token punctuation">"</span></span>
    <span class="token attr-name">wordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示字符的数目<span class="token punctuation">"</span></span>
    <span class="token attr-name">startIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>字符开始位置<span class="token punctuation">"</span></span>
    <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定字符长度<span class="token punctuation">"</span></span>
    <span class="token attr-name">ellipsis</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>文字超出部分显示的文字<span class="token punctuation">"</span></span>
    <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>需要被替换的文字<span class="token punctuation">"</span></span>
    <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>替换文字<span class="token punctuation">"</span></span>
    <span class="token attr-name">isClearTags</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>清除标签<span class="token punctuation">"</span></span>
    <span class="token attr-name">isReturnToBr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>回车改为换行<span class="token punctuation">"</span></span>
    <span class="token attr-name">isLower</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>转换为小写<span class="token punctuation">"</span></span>
    <span class="token attr-name">isUpper</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>转换为大写<span class="token punctuation">"</span></span>
    <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示在信息前的文字<span class="token punctuation">"</span></span>
    <span class="token attr-name">rightText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示在信息后的文字<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:value</code> 标签在模板中获取值</p>
<p>type 属性可以是指定的字符串，代表&quot;自定义模板语言&quot;中定义的标签名称，系统将解析对应的自定义模板标签。</p>
<p><code>&lt;stl:value&gt;</code> 标签对应的实体为<code>{stl:value}</code>。</p>
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
<td style="text-align:left">类型</td>
</tr>
<tr>
<td style="text-align:left">formatString</td>
<td style="text-align:left">显示的格式</td>
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
<tr>
<td style="text-align:left">leftText</td>
<td style="text-align:left">显示在信息前的文字</td>
</tr>
<tr>
<td style="text-align:left">rightText</td>
<td style="text-align:left">显示在信息后的文字</td>
</tr>
</tbody>
</table>
<p><strong>type - 类型</strong></p>
<p>需要获取值的类型。此属性只可属于以下可能的取值的一种。</p>
<p>&quot;siteName&quot; 站点名称
&quot;siteUrl&quot; 站点的域名地址
&quot;date&quot; 当前日期（不支持 isDynamic 属性）
&quot;dateOfTraditional&quot; 带农历的当前日期（不支持 isDynamic 属性）
“seoTitle&quot; seo标题
&quot;keywords&quot; seo关键字
&quot;description&quot; seo描述</p>
<p><strong>formatString - 显示的格式</strong></p>
<p>当需要显示日期型的字段值时，可以通过 formatString 属性来设置日期格式。</p>
<p><strong>wordNum - 显示字符的数目</strong></p>
<p>设置显示文字的字数，超出部分将用 ellipsis 属性设置的值替代。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>wordNum 区分中英文，中文汉字算作一个字符，两个英文字母才算作一个字符。由于在 Web 页面中，两个英文字母的宽度等于一个汉字，所以我们通常使用 wordNum 属性来设置文本的显示数量。</p>
</div>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">wordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>startIndex - 字符开始位置</strong></p>
<p>设置文字开始显示的位置，默认值为 0，代表从头显示。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>startIndex 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。</p>
</div>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">startIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>length - 指定字符长度</strong></p>
<p>设置显示文字的字数，超出部分将用 ellipsis 属性设置的值替代。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>length 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。</p>
</div>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>ellipsis - 文字超出部分显示的文字</strong></p>
<p>设置了 wordNum 属性或者 length 属性时，当文字超出了指定的字数后，超出部分将用 ellipsis 属性设置的值来替代。</p>
<p>ellipsis 的默认值为 ...，你也可以设置空值（ellipsis=&quot;&quot;）来让超出部分不使用符号替换。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">wordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">ellipsis</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span> -- end --<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>replace - 需要被替换的文字</strong></p>
<p>如果需要将文字中的一部分替换为另一部分，可以使用 replace 属性和 to 属性。</p>
<p>replace 代表需要替换的文字，支持纯文本、列表和正则表达式三种写法。</p>
<h5 id="使用纯文本替换"><a class="header-anchor" href="#使用纯文本替换">#</a> 使用纯文本替换</h5>
<p>纯文本替换直接输入替换前文字和替换后文字即可：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>他<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>她<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="使用列表替换"><a class="header-anchor" href="#使用列表替换">#</a> 使用列表替换</h5>
<p>列表替换适合多个文本替换的情况，将需要替换的文字用英文逗号（,）隔开：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>他,她<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>he,she<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果多个文本都替换为一个文本，to 属性可以不使用逗号隔开：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>他,她<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>who<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="使用正则表达式替换"><a class="header-anchor" href="#使用正则表达式替换">#</a> 使用正则表达式替换</h5>
<p>正则表达式替换需要将 replace 前后添加“/”符号，“/”符号之间的文字为替换需要使用的正则表达式：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/(Mr\\.? |Mrs\\.? |Miss |Ms\\.? )/<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>to 替换文字</strong></p>
<p>to 代表替换后的文字。</p>
<p><strong>isClearTags - 清除标签</strong></p>
<p>设置是否清除 HTML 标签，仅显示纯文本。</p>
<p>在后台内容编辑器中录入的数据通常会带有大量的 HTML 标签，如果我们只希望显示文字本身，需要使用 isClearTags 属性。</p>
<ul>
<li>&quot;true&quot; 清除 HTML 标签。</li>
<li>&quot;false&quot; 不清除 HTML 标签。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span> <span class="token attr-name">isClearTags</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isReturnToBr - 回车改为换行</strong></p>
<p>设置是否将回车换行符号替换为 HTML <br>换行标签。</p>
<p>由于 HTML 中的换行在页面中显示为空格，所以如果需要显示后台 TextArea 文本框录入的换行时，需要使用 isReturnToBr 属性。</p>
<ul>
<li>&quot;true&quot; 替换回车符。</li>
<li>&quot;false&quot; 不替换回车符。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">isReturnToBr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isLower - 转换为小写</strong></p>
<p>设置是否将文本中的所有英文字母转换为小写字母。</p>
<ul>
<li>&quot;true&quot; 转换为小写。</li>
<li>&quot;false&quot; 不转换为小写。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">isLower</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isUpper - 转换为大写</strong></p>
<p>设置是否将文本中的所有英文字母转换为大写字母。</p>
<ul>
<li>&quot;true&quot; 转换为大写。</li>
<li>&quot;false&quot; 不转换为大写。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">isUpper</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>leftText - 显示在信息前的文字</strong></p>
<p>显示在文字之前的文字，系统会判断文字是否为空，如果文字为空，文字前缀也将不显示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题：<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>siteName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>rightText - 显示在信息后的文字</strong></p>
<p>显示在文字之后的文字，系统会判断文字是否为空，如果文字为空，文字后缀也将不显示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>【<span class="token punctuation">"</span></span> <span class="token attr-name">rightText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>】<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>siteName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>显示站点名称</strong></p>
<p>下面的例子显示站点名称。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>value</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SiteName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>value</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>显示关键字</strong></p>
<p>下面的例子显示站点名称。(注意：seoTitle、keywords、description会自动根据当前上下文（首页、栏目、内容页、专题页)获取当前所设置的实体属性</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>{stl.keywords}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>