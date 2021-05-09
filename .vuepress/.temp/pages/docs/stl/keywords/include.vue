<template><h1 id="stl-include-包含文件"><a class="header-anchor" href="#stl-include-包含文件">#</a> <a href="stl:include">stl:include</a> 包含文件</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>include</span> <span class="token attr-name">file</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>包含文件路径<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>include</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:include</code> 标签在模板中包含另一个文件，作为模板的一部分。</p>
<p>通常此标签在处理诸如页头、页脚、版权声明等每个页面相同的内容时使用。</p>
<p>被 <code>&lt;stl:include&gt;</code> 标签包含的文件中可以包含其他 STL 标签或实体。</p>
<p><code>stl:include</code> 类似于动态页面中的 <code>&lt;%@ include file=&quot;header.jsp&quot; %&gt;</code>包含。 file是需要包含的文件名，一般以&quot;~&quot;或者&quot;@&quot;开头，代表系统根目录或站点目录下的文件，如 <code>file=&quot;@/include/head.html&quot;</code>，也可以采用 <code>file=&quot;/include/head.html&quot;</code>。</p>
<p><code>stl:include</code> 标签能够解析包含文件中的 STL 标签或实体。 包含文件可以到&quot;显示管理&quot;—&quot;包含文件管理&quot;中管理。</p>
<p><code>&lt;stl:include&gt;</code> 标签对应的实体为<code>{stl:include}</code>。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>包含文件中还可以再嵌套 <code>&lt;stl:include&gt;</code> 包含文件标签，进一步细分代码块。</p>
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
<td style="text-align:left">file</td>
<td style="text-align:left">包含文件路径</td>
</tr>
</tbody>
</table>
<p><strong>file - 包含文件路径</strong></p>
<p>需要包含的文件路径。</p>
<p>包含本站文件时，可以添加或者省略&quot;@&quot;地址通配符，例如：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>include</span> <span class="token attr-name">file</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/include/footer.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>include</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>和</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>include</span> <span class="token attr-name">file</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/include/footer.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>include</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>效果是一样的。</p>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>在模版中包含页脚文件</strong></p>
<p>下面的例子在模版中包含文件名称为&quot;footer.html&quot;的页脚文件。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>include</span> <span class="token attr-name">file</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/include/footer.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>include</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>