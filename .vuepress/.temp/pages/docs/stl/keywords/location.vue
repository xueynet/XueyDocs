<template><h1 id="stl-location-当前位置"><a class="header-anchor" href="#stl-location-当前位置">#</a> <a href="stl:location">stl:location</a> 当前位置</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>location</span>
    <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>当前位置分隔符<span class="token punctuation">"</span></span>
    <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>打开窗口的目标<span class="token punctuation">"</span></span>
    <span class="token attr-name">linkClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>链接CSS样式<span class="token punctuation">"</span></span>
    <span class="token attr-name">wordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>链接字数<span class="token punctuation">"</span></span>
    <span class="token attr-name">isContainSelf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否包含当前栏目<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>location</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:location</code> 标签在模板中插入页面的当前位置。</p>
<p>标签 <code>&lt;stl:location&gt;</code> 是以分隔符分隔的栏目链接，表示当前页所处的位置。</p>
<p>separator 属性为栏目之间的分隔符，您也可以把分割字符串放在 <code>&lt;stl:location&gt;</code> 标签之间，作为子标签。</p>
<p><code>&lt;stl:location&gt;</code> 标签对应的实体为<code>{stl:location}</code>。</p>
<h3 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>所有属于 HTML 标签<code>&lt;a&gt;</code>的属性均适用于<code>&lt;stl:location&gt;</code>标签。</p>
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
<td style="text-align:left">separator</td>
<td style="text-align:left">当前位置分隔符</td>
</tr>
<tr>
<td style="text-align:left">target</td>
<td style="text-align:left">打开窗口的目标</td>
</tr>
<tr>
<td style="text-align:left">linkClass</td>
<td style="text-align:left">链接CSS样式</td>
</tr>
<tr>
<td style="text-align:left">wordNum</td>
<td style="text-align:left">链接字数</td>
</tr>
<tr>
<td style="text-align:left">isContainSelf</td>
<td style="text-align:left">是否包含当前栏目</td>
</tr>
</tbody>
</table>
<p><strong>separator - 当前位置分隔符</strong></p>
<p>不设置系统默认使用 &quot; - &quot; 栏目分隔符。</p>
<p><strong>target - 打开窗口的目标</strong></p>
<p>点击链接时弹出窗口的目标</p>
<p><strong>linkClass - 链接CSS样式</strong></p>
<p>当前位置中包含链接的显示样式</p>
<p><strong>wordNum - 链接字数</strong></p>
<p>字数限制</p>
<p><strong>isContainSelf - 是否包含当前栏目</strong></p>
<p>是否包含当前栏目</p>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>采用属性作为分隔符</strong></p>
<p>下面的例子显示页面的当前位置，分隔符用属性表示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>location</span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span> - <span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>location</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://sscms.com/docs/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首 页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
 -
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/channels/4.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>STL标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
 -
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/channels/19.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>导航标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
 -
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/location/index.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>stl:location 当前位置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>采用子标签作为分隔符</strong></p>
<p>下面的例子显示页面的当前位置，分隔符用子标签表示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>location</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">color</span><span class="token punctuation">:</span>#ff0000</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span> >> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>location</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://docs.xuey.net/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首 页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">color</span><span class="token punctuation">:</span>#ff0000</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span> <span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token entity named-entity" title="&gt;">&amp;gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/channels/4.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>STL标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">color</span><span class="token punctuation">:</span>#ff0000</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span> <span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token entity named-entity" title="&gt;">&amp;gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/channels/19.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>导航标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">color</span><span class="token punctuation">:</span>#ff0000</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span> <span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token entity named-entity" title="&gt;">&amp;gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/location/index.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>stl:location 当前位置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>