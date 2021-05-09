<template><h1 id="stl-file-文件下载链接"><a class="header-anchor" href="#stl-file-文件下载链接">#</a> <a href="stl:file">stl:file</a> 文件下载链接</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定存储附件的字段<span class="token punctuation">"</span></span>
    <span class="token attr-name">no</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示第几个附件<span class="token punctuation">"</span></span>
    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>需要下载的文件地址<span class="token punctuation">"</span></span>
    <span class="token attr-name">isFileName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>仅显示文件名称<span class="token punctuation">"</span></span>
    <span class="token attr-name">isFileType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>仅显示文件类型<span class="token punctuation">"</span></span>
    <span class="token attr-name">isFileSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>仅显示文件大小<span class="token punctuation">"</span></span>
    <span class="token attr-name">isCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>仅显示下载次数<span class="token punctuation">"</span></span>
    <span class="token attr-name">isLower</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否转换为小写<span class="token punctuation">"</span></span>
    <span class="token attr-name">isUpper</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否转换为大写<span class="token punctuation">"</span></span>
    <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示在信息前的文字<span class="token punctuation">"</span></span>
    <span class="token attr-name">rightText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示在信息后的文字<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:file</code> 标签在模板中显示文件下载链接。</p>
<p><code>stl:file</code> 通常在内容模板中使用或者作为 <code>&lt;stl:contents&gt;</code> 内容列表标签的子标签使用，用于显示内容附件的下载链接。</p>
<p>如果指定 src 属性，页面将显示指定文件的下载链接。</p>
<p><code>stl:file</code> 标签默认显示内容附件 FileUrl 字段，如果希望显示自定义的附件字段，则需要设置 type 属性。</p>
<p><code>stl:file</code> 标签内可以嵌入任意代码，用于提示下载，如果没有子标签，系统默认将显示文件的文件名。</p>
<p>可以通过 isFileName、isFileType、isFileSize 或者 isCount 来显示下载文件的文件名称、文件类型、文件大小以及下载次数。 stl:file 标签内可以嵌入包含以上属性的 stl:file 标签，用于显示下载文件的详情。</p>
<p>若附件字段有多个值，可以使用 <code>&lt;stl:each&gt;</code> 遍历所有的附件，或者使用 no 属性指定显示第几个附件。</p>
<p><code>&lt;stl:file&gt;</code> 标签对应的实体为<code>{stl:file}</code>。</p>
<h3 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>所有属于HTML 标签<code>&lt;a&gt;</code>的属性均适用于<code>&lt;stl:file&gt;</code>标签。</p>
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
<td style="text-align:left">type</td>
<td style="text-align:left">指定存储附件的字段</td>
</tr>
<tr>
<td style="text-align:left">no</td>
<td style="text-align:left">显示第几个附件</td>
</tr>
<tr>
<td style="text-align:left">src</td>
<td style="text-align:left">需要下载的文件地址</td>
</tr>
<tr>
<td style="text-align:left">isFileName</td>
<td style="text-align:left">仅显示文件名称</td>
</tr>
<tr>
<td style="text-align:left">isFileType</td>
<td style="text-align:left">仅显示文件类型</td>
</tr>
<tr>
<td style="text-align:left">isFileSize</td>
<td style="text-align:left">仅显示文件大小</td>
</tr>
<tr>
<td style="text-align:left">isCount</td>
<td style="text-align:left">仅显示下载次数</td>
</tr>
<tr>
<td style="text-align:left">isLower</td>
<td style="text-align:left">是否转换为小写</td>
</tr>
<tr>
<td style="text-align:left">isUpper</td>
<td style="text-align:left">是否转换为大写</td>
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
<p><strong>type - 指定存储附件的字段</strong></p>
<p>可以是自定义的附件字段，默认为 FileUrl。</p>
<p><strong>no - 显示第几个附件</strong></p>
<p>显示字段存储的第几个附件，默认为 1。</p>
<p><strong>src - 需要下载的文件地址</strong></p>
<p>可以用&quot;@&quot;开头表示当前网站根目录，用&quot;~&quot;开头表示系统根目录，不设置代表使用内容附件字段作为下载文件地址。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/upload/files/2019/3/说明书.pdf<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/api/sys/stl/actions/download?siteId=32&amp;channelId=34&amp;contentId=368&amp;fileUrl=QcKhz6Zn74N8UPHoyPH4D7DLpEtsNF1KP5zJATrxYN1DcaDuqdwyeQ0equals00equals00secret0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>说明书.pdf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isFileName - 仅显示文件名称</strong></p>
<p>设置属性 isFileName 为true，<a href="stl:file">stl:file</a> 标签将解析为附件对应的文件名称。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span> <span class="token attr-name">isFileName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/upload/files/2019/3/说明书.pdf<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>说明书
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isFileType - 仅显示文件类型</strong></p>
<p>设置isFileType属性为true，<code>&lt;stl:file&gt;</code> 标签将解析为附件对应的文件类型，如果希望显示大写文件类型，可以设置属性 isUpper 为 true。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span> <span class="token attr-name">isFileType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">isUpper</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/upload/files/2019/3/说明书.pdf<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>PDF
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isFileSize - 仅显示文件大小</strong></p>
<p>设置属性 isFileSize 为true，<code>&lt;stl:file&gt;</code> 标签将解析为附件对应的文件大小。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span> <span class="token attr-name">isFileSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/upload/files/2019/3/说明书.pdf<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>9MB
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isCount - 仅显示下载次数</strong></p>
<p>仅显示下载次数，设置属性 isFileSize 为true，<code>&lt;stl:file&gt;</code> 标签将解析为此附件的总下载次数。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span> <span class="token attr-name">isCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>231
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isLower - 是否转换为小写</strong></p>
<p>设置是否将文本中的所有英文字母转换为小写字母。</p>
<ul>
<li>&quot;true&quot; 转换为小写。</li>
<li>&quot;false&quot; 不转换为小写。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span> <span class="token attr-name">isLower</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>isUpper - 是否转换为大写</strong></p>
<p>设置是否将文本中的所有英文字母转换为大写字母。</p>
<ul>
<li>&quot;true&quot; 转换为大写。</li>
<li>&quot;false&quot; 不转换为大写。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span> <span class="token attr-name">isUpper</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>leftText - 显示在信息前的文字</strong></p>
<p>系统会判断附件是否存在，如果附件不存在，文字前缀也将不解析。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span> <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>附件下载：<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>附件下载：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/api/sys/stl/actions/download?siteId=32&amp;channelId=34&amp;contentId=368&amp;fileUrl=QcKhz6Zn74N8UPHoyPH4D7IuCFtKMnj0uaiJIGcd0yn0add0UOl3dpPDWgLj50add0Z6cagoKLGYjCfaxYdDxYnIzDWhGqlKy2hr0add0inB0secret0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>说明书.pdf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>rightText - 显示在信息后的文字</strong></p>
<p>系统会判断附件是否存在，如果附件不存在，文字后缀也将不解析。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span> <span class="token attr-name">leftText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>【<span class="token punctuation">"</span></span> <span class="token attr-name">rightText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>】<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>【<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/api/sys/stl/actions/download?siteId=32&amp;channelId=34&amp;contentId=368&amp;fileUrl=QcKhz6Zn74N8UPHoyPH4D7IuCFtKMnj0uaiJIGcd0yn0add0UOl3dpPDWgLj50add0Z6cagoKLGYjCfaxYdDxYnIzDWhGqlKy2hr0add0inB0secret0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>说明书.pdf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>】
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>显示当前内容的附件下载链接及详情</strong></p>
<p>下面的例子在页面中显示当前内容的附件下载链接及附件详情。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
  文件名：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span> <span class="token attr-name">isFileName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span> | 
  文件格式：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span> <span class="token attr-name">isFileType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">isUpper</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span> | 
  文件大小：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span> <span class="token attr-name">isFileSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span> | 
  下载量：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span> <span class="token attr-name">isCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>解析后的 HTML 代码</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/api/sys/stl/actions/download?siteId=32&amp;channelId=34&amp;contentId=368&amp;fileUrl=QcKhz6Zn74N8UPHoyPH4D7IuCFtKMnj0uaiJIGcd0yn0add0UOl3dpPDWgLj50add0Z6cagoKLGYjCfaxYdDxYnIzDWhGqlKy2hr0add0inB0secret0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  文件名：说明书 |
  文件格式：PDF |
  文件大小：9MB |
  下载量：2
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>循环显示内容列表附件下载链接</strong></p>
<p>下面的例子在内容列表中显示每一篇内容的附件下载链接。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>下载<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>造美好生活的治理方向
        
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>

短缺之下，每个人都要行动
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/api/sys/stl/actions/download?siteId=32&amp;channelId=34&amp;contentId=368&amp;fileUrl=QcKhz6Zn74N8UPHoyPH4D7IuCFtKMnj0uaiJIGcd0yn0add0UOl3dpPDWgLj50add0Z6cagoKLGYjCfaxYdDxYnIzDWhGqlKy2hr0add0inB0secret0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>下载<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>

精准脱贫走向整体联动

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>显示指定文件的下载链接</strong></p>
<p>下面的例子直接指定下载文件地址，显示下载链接。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>file</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/upload/files/2019/3/说明书.pdf<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>file</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/api/sys/stl/actions/download?siteId=32&amp;channelId=34&amp;contentId=368&amp;fileUrl=QcKhz6Zn74N8UPHoyPH4D7DLpEtsNF1KP5zJATrxYN1DcaDuqdwyeQ0equals00equals00secret0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>说明书.pdf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>