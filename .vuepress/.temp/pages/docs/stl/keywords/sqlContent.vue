<template><h1 id="stl-sqlcontent-数据库值"><a class="header-anchor" href="#stl-sqlcontent-数据库值">#</a> <a href="stl:sqlContent">stl:sqlContent</a> 数据库值</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span>
    <span class="token attr-name">connectionStringName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据库链接字符串名称<span class="token punctuation">"</span></span>
    <span class="token attr-name">connectionString</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据库链接字符串<span class="token punctuation">"</span></span>
    <span class="token attr-name">queryString</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据库查询语句<span class="token punctuation">"</span></span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示的类型<span class="token punctuation">"</span></span>
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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:sqlContent</code> 标签在模板中显示数据库值。</p>
<p><code>stl:sqlContent</code> 标签可以单独使用或者作为 <code>&lt;stl:sqlContents&gt;</code> 等内容列表标签的子标签。</p>
<p><code>stl:sqlContent</code> 单独使用时需要指定 connectionString 或 connectionStringName 及 queryString 属性。</p>
<p><code>stl:sqlContent</code> 标签与 STL 数据库实体的作用基本相同，<code>stl:sqlContent</code> 可以控制显示的字数及格式。</p>
<p><code>&lt;stl:sqlContent&gt;</code>标签对应的实体为<code>{stl:sqlContent}</code>。</p>
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
<td style="text-align:left">connectionStringName</td>
<td style="text-align:left">数据库链接字符串名称</td>
</tr>
<tr>
<td style="text-align:left">connectionString</td>
<td style="text-align:left">数据库链接字符串</td>
</tr>
<tr>
<td style="text-align:left">queryString</td>
<td style="text-align:left">数据库查询语句</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">显示的类型</td>
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
<p><strong>connectionStringName - 数据库链接字符串名称</strong></p>
<p>存储在系统根目录的Web.config文件中的数据库链接字符串名称，默认为系统使用的数据库 ConnectionString。</p>
<p><strong>connectionString - 数据库链接字符串</strong></p>
<p>直接设置数据库链接字符串。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>connectionString属性将在模板文件中暴露数据库链接字符串，如果网站部署在外网，必须使用connectionStringName替代connectionString属性，防止数据库链接被暴露。</p>
</div>
<p><strong>queryString - 数据库查询语句</strong></p>
<p>数据库查询 SQL 语句</p>
<p><strong>type - 显示的类型</strong></p>
<p>显示数据库的字段名称。根据 queryString 表字段的不同 type 属性有不同的取值。</p>
<p><strong>formatString - 显示的格式</strong></p>
<p>当需要显示日期型的字段值时，可以通过 formatString 属性来设置日期格式。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AddDate<span class="token punctuation">"</span></span> <span class="token attr-name">formatString</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yyyy-MM-dd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>wordNum - 显示字符的数目</strong></p>
<p>设置显示文字的字数，超出部分将用 ellipsis 属性设置的值替代。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>wordNum 区分中英文，中文汉字算作一个字符，两个英文字母才算作一个字符。 由于在 Web 页面中，两个英文字母的宽度等于一个汉字，所以我们通常使用 wordNum 属性来设置文本的显示数量。</p>
</div>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">wordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>startIndex - 字符开始位置</strong></p>
<p>设置文字开始显示的位置，默认值为 0，代表从头显示。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>startIndex 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。</p>
</div>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">startIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>length - 指定字符长度</strong></p>
<p>设置显示文字的字数，超出部分将用 ellipsis 属性设置的值替代。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>length 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。</p>
</div>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>ellipsis - 文字超出部分显示的文字</strong></p>
<p>设置了 wordNum 属性或者 length 属性时，当文字超出了指定的字数后，超出部分将用 ellipsis 属性设置的值来替代。</p>
<p>ellipsis 的默认值为 ...，你也可以设置空值（ellipsis=&quot;&quot;）来让超出部分不使用符号替换。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">wordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">ellipsis</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span> -- end --<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>replace - 需要被替换的文字</strong></p>
<p>如果需要将文字中的一部分替换为另一部分，可以使用 replace 属性和 to 属性。</p>
<p>replace 代表需要替换的文字，支持纯文本、列表和正则表达式三种写法。</p>
<h5 id="使用纯文本替换"><a class="header-anchor" href="#使用纯文本替换">#</a> 使用纯文本替换</h5>
<p>纯文本替换直接输入替换前文字和替换后文字即可：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span>  <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>他<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>她<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="使用列表替换"><a class="header-anchor" href="#使用列表替换">#</a> 使用列表替换</h5>
<p>列表替换适合多个文本替换的情况，将需要替换的文字用英文逗号（,）隔开：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span>  <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>他,她<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>he,she<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果多个文本都替换为一个文本，to 属性可以不使用逗号隔开：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span>  <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>他,她<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>who<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="使用正则表达式替换"><a class="header-anchor" href="#使用正则表达式替换">#</a> 使用正则表达式替换</h5>
<p>正则表达式替换需要将 replace 前后添加“/”符号，“/”符号之间的文字为替换需要使用的正则表达式：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span>  <span class="token attr-name">replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/(Mr\\.? |Mrs\\.? |Miss |Ms\\.? )/<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>to 替换文字</strong></p>
<p>to 代表替换后的文字。</p>
<p><strong>isClearTags - 清除标签</strong></p>
<p>设置是否清除 HTML 标签，仅显示纯文本。</p>
<p>在后台内容编辑器中录入的数据通常会带有大量的 HTML 标签，如果我们只希望显示文字本身，需要使用 isClearTags 属性。</p>
<ul>
<li>&quot;true&quot; 清除 HTML 标签。</li>
<li>&quot;false&quot; 不清除 HTML 标签。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span> <span class="token attr-name">isClearTags</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isReturnToBr - 回车改为换行</strong></p>
<p>设置是否将回车换行符号替换为 HTML <br>换行标签。</p>
<p>由于 HTML 中的换行在页面中显示为空格，所以如果需要显示后台 TextArea 文本框录入的换行时，需要使用 isReturnToBr 属性。</p>
<ul>
<li>&quot;true&quot; 替换回车符。</li>
<li>&quot;false&quot; 不替换回车符。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">isReturnToBr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isLower - 转换为小写</strong></p>
<p>设置是否将文本中的所有英文字母转换为小写字母。</p>
<ul>
<li>&quot;true&quot; 转换为小写。</li>
<li>&quot;false&quot; 不转换为小写。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">isLower</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isUpper - 转换为大写</strong></p>
<p>设置是否将文本中的所有英文字母转换为大写字母。</p>
<ul>
<li>&quot;true&quot; 转换为大写。</li>
<li>&quot;false&quot; 不转换为大写。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">isUpper</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>leftText - 显示在信息前的文字</strong></p>
<p>显示在文字之前的文字，系统会判断文字是否为空，如果文字为空，文字前缀也将不显示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题：<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>rightText - 显示在信息后的文字</strong></p>
<p>显示在文字之后的文字，系统会判断文字是否为空，如果文字为空，文字后缀也将不显示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>【<span class="token punctuation">"</span></span> <span class="token attr-name">rightText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>】<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>显示最新添加的内容列表</strong></p>
<p>下面的例子显示按最新添加时间获取内容列表。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContents</span> <span class="token attr-name">connectionStringName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ConnectionString<span class="token punctuation">"</span></span> <span class="token attr-name">pageNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>queryString</span><span class="token punctuation">></span></span>
    SELECT TOP 6 * FROM {stl.tableName} WHERE siteId = {Stl.SiteId} ORDER BY AddDate DESC
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>queryString</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">wordnum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>
  (<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AddDate<span class="token punctuation">"</span></span> <span class="token attr-name">formatString</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yyyy-MM-dd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>)
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>