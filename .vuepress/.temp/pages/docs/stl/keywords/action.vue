<template><h1 id="stl-action-执行动作"><a class="header-anchor" href="#stl-action-执行动作">#</a> <a href="stl:action">stl:action</a> 执行动作</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>action</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>动作类型<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>action</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>&lt;stl:action&gt;</code> 标签在模板中创建链接，点击链接后页面将执行相应的动作。</p>
<p>标签 <code>&lt;stl:action&gt;</code> 所执行的动作由属性 type 指定：</p>
<ul>
<li>&quot;Close&quot; 执行关闭本页功能。</li>
<li>&quot;Translate&quot; 执行整个站点的简体/繁体文字转换功能。</li>
</ul>
<p>可以把任何 STL 标签或者 HTML 标签嵌套在 <code>&lt;stl:action&gt;</code> 元素内。</p>
<h3 id="解析"><a class="header-anchor" href="#解析">#</a> 解析</h3>
<p>如果使用 <code>&lt;stl:action&gt;</code> 元素，系统将解析元素为 HTML <code>&lt;a&gt;</code> 元素。</p>
<p>如果使用 <code>{stl:action}</code> 实体，系统将解析实体为 URL地址字符串。</p>
<h3 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>所有属于 HTML 标签<code>&lt;a&gt;</code>的属性均适用于<code>&lt;stl:action&gt;</code>标签。</p>
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
<td style="text-align:left">动作类型</td>
</tr>
</tbody>
</table>
<p><strong>type - 动作类型</strong></p>
<p>指定动作类型：</p>
<ul>
<li>&quot;Close&quot; 执行关闭本页功能。</li>
<li>&quot;Translate&quot; 执行整个站点的简体/繁体文字转换功能。</li>
</ul>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>简体/繁体转换</strong></p>
<p>下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>action</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Translate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>繁体<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>action</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>translateLink<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>繁体<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>