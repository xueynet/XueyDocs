<template><h1 id="stl-printer-打印"><a class="header-anchor" href="#stl-printer-打印">#</a> <a href="stl:printer">stl:printer</a> 打印</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>printer</span>
    <span class="token attr-name">titleId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题的Id<span class="token punctuation">"</span></span>
    <span class="token attr-name">bodyId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>正文的Id<span class="token punctuation">"</span></span>
    <span class="token attr-name">logoId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Logo的Id<span class="token punctuation">"</span></span>
    <span class="token attr-name">locationId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>当前位置的Id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>printer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p><code>stl:printer</code> 用于显示打印链接，点击后弹出打印窗口</p>
<p><code>stl:printer</code> 标签将显示打印链接，点击此链接后将弹出打印窗口，需打印的标题、内容、LOGO及页面当前文字在 <code>&lt;stl:printer&gt;</code> 的属性中指定。</p>
<p><code>&lt;stl:printer&gt;</code> 标签对应的实体为<code>{stl:printer}</code>。</p>
<h3 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>所有属于HTML 标签<code>&lt;a&gt;</code>的属性均适用于<code>&lt;stl:printer&gt;</code>标签。</p>
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
<td style="text-align:left">titleId</td>
<td style="text-align:left">标题的Id</td>
</tr>
<tr>
<td style="text-align:left">bodyId</td>
<td style="text-align:left">正文的Id</td>
</tr>
<tr>
<td style="text-align:left">logoId</td>
<td style="text-align:left">Logo的Id</td>
</tr>
<tr>
<td style="text-align:left">locationId</td>
<td style="text-align:left">当前位置的Id</td>
</tr>
</tbody>
</table>
<p><strong>titleId - 标题的Id</strong></p>
<p>页面 HTML 中打印标题的 Id 属性</p>
<p><strong>bodyId - 正文的Id</strong></p>
<p>页面 HTML 中打印正文的 Id 属性</p>
<p><strong>logoId - Logo的Id</strong></p>
<p>页面 LOGO 的 Id 属性</p>
<p><strong>locationId - 当前位置的Id</strong></p>
<p>页面当前位置的 Id 属性</p>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>显示打印链接</strong></p>
<p>下面的例子实现页面打印功能，点击打印链接后浏览器将弹出打印提示框。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>printer</span> <span class="token attr-name">titleId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">bodyId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>打印<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>printer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>