<template><h1 id="stl-pdf-pdf-展示"><a class="header-anchor" href="#stl-pdf-pdf-展示">#</a> <a href="stl:pdf">stl:pdf</a> PDF 展示</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pdf</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定存储PDF文件的字段<span class="token punctuation">"</span></span>
  <span class="token attr-name">no</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示字段的顺序<span class="token punctuation">"</span></span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>PDF文件地址<span class="token punctuation">"</span></span>
  <span class="token attr-name">fallbackLink</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>浏览器不支持时显示<span class="token punctuation">"</span></span>
  <span class="token attr-name">forceIframe</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>使用iframe显示PDF<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示高度<span class="token punctuation">"</span></span>
  <span class="token attr-name">page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>默认显示指定页<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示宽度<span class="token punctuation">"</span></span>
  <span class="token attr-name">full</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>整屏显示<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pdf</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p><code>&lt;stl:pdf&gt;</code> 标签需要使用 XYCMS 7.0.1 及以上版本。</p>
</div>
<h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:pdf</code> 标签将 PDF 文件嵌入到 HTML 文档中。</p>
<p><code>stl:pdf </code>标签底层采用 <a href="https://pdfobject.com/" target="_blank" rel="noopener noreferrer">PDFObject<OutboundLink/></a></p>
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
<td style="text-align:left">指定存储 PDF 文件的字段</td>
</tr>
<tr>
<td style="text-align:left">no</td>
<td style="text-align:left">显示字段的顺序</td>
</tr>
<tr>
<td style="text-align:left">src</td>
<td style="text-align:left">PDF 文件地址</td>
</tr>
<tr>
<td style="text-align:left">fallbackLink</td>
<td style="text-align:left">浏览器不支持时显示</td>
</tr>
<tr>
<td style="text-align:left">forceIframe</td>
<td style="text-align:left">使用 iframe 显示 PDF</td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">显示高度</td>
</tr>
<tr>
<td style="text-align:left">page</td>
<td style="text-align:left">默认显示指定页</td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">显示宽度</td>
</tr>
<tr>
<td style="text-align:left">full</td>
<td style="text-align:left">整屏显示</td>
</tr>
</tbody>
</table>
<p><strong>type - 指定存储 PDF 文件的字段</strong></p>
<p>指定存储 PDF 文件的字段，可以是自定义的附件字段，默认为 FileUrl。</p>
<p><strong>no - 显示字段的顺序</strong></p>
<p>显示字段存储的第几个PDF文件，默认为 1。</p>
<p><strong>src - PDF 文件地址</strong></p>
<p>可以用&quot;@&quot;开头表示当前网站根目录，用&quot;~&quot;开头表示系统根目录，不设置代表使用内容附件字段作为PDF文件地址。</p>
<p>src属性与type属性通常只会使用其一，如果设置了src的同时设置了type属性，标签将优先使用src属性的值作为PDF文件地址。</p>
<p><strong>fallbackLink - 浏览器不支持时显示</strong></p>
<p>当浏览器不支持嵌入式PDF时，在此输入的任何字符串都将插入到目标元素中。</p>
<p><strong>forceIframe - 使用 iframe 显示 PDF</strong></p>
<p>如果将此布尔值设置为true，并且浏览器支持PDF嵌入，则标签会使用<code>&lt;iframe&gt;</code>而不是<code>&lt;embed&gt;</code>显示PDF。</p>
<p><strong>height - 显示高度</strong></p>
<p>显示PDF窗口的高度，如果未指定，标签将默认为100％。</p>
<p>height是标准CSS，支持所有单位，包括px，％，em和rem。</p>
<p><strong>page - 默认显示指定页</strong></p>
<p>如果浏览器支持，在此输入的任何数字都将使PDF打开到指定的页码。如果未指定，PDF将在第1页上打开。</p>
<p><strong>width - 显示宽度</strong></p>
<p>显示PDF窗口的宽度，如果未指定，标签将默认为100％。</p>
<p>width是标准CSS，支持所有单位，包括px，％，em和rem。</p>
<p><strong>full - 整屏显示</strong></p>
<p>如果将此布尔值设置为true，PDF将在整个页面中显示，页面中原有的内容将无法显示。</p>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>在页面中显示指定PDF地址</strong></p>
<p>下面的例子指定显示的PDF地址并设置显示宽度与高度：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pdf</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/upload/files/2020/10/8b66b20e22ee0f0c.pdf<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500px<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pdf</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>指定附件字段为PDF地址</strong></p>
<p>下面的例子在内容模板中通过附件字段获取PDF地址并显示：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pdf</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fileUrl<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500px<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pdf</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>在页面中全屏显示PDF</strong></p>
<p>下面的例子在内容模板中通过附件字段获取PDF地址并显示：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pdf</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/upload/files/2020/10/8b66b20e22ee0f0c.pdf<span class="token punctuation">"</span></span> <span class="token attr-name">full</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pdf</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>