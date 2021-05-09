<template><h1 id="stl-tabs-页签切换"><a class="header-anchor" href="#stl-tabs-页签切换">#</a> <a href="stl:tabs">stl:tabs</a> 页签切换</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>tabs</span>
    <span class="token attr-name">tabName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>页签名称<span class="token punctuation">"</span></span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>页签类型<span class="token punctuation">"</span></span>
    <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>页签切换方式<span class="token punctuation">"</span></span>
    <span class="token attr-name">classActive</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示页签Css类<span class="token punctuation">"</span></span>
    <span class="token attr-name">classNormal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>隐藏页签Css类<span class="token punctuation">"</span></span>
    <span class="token attr-name">current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>当前页签<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>tabs</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>以页签（Tab）的方式切换显示内容区域。</p>
<p>一个完整的页签由页签头部和页签主体组成，通过点击或者鼠标移动到页签头部可以切换显示页签主体。</p>
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
<td style="text-align:left">tabName</td>
<td style="text-align:left">页签名称</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">页签类型</td>
</tr>
<tr>
<td style="text-align:left">action</td>
<td style="text-align:left">页签切换方式</td>
</tr>
<tr>
<td style="text-align:left">classActive</td>
<td style="text-align:left">显示页签Css类</td>
</tr>
<tr>
<td style="text-align:left">classNormal</td>
<td style="text-align:left">隐藏页签Css类</td>
</tr>
<tr>
<td style="text-align:left">current</td>
<td style="text-align:left">当前页签</td>
</tr>
</tbody>
</table>
<p><strong>tabName - 页签名称</strong></p>
<p>页签名称，当一个页面中有多个页签时需要设置不同的页签名称，系统通过页签名称寻找对应的页签头部和主体进行切换。</p>
<p><strong>type - 页签类型</strong></p>
<p>设置当前区域是页签头部还是页签主体，默认为 Body，即页签主体。</p>
<ul>
<li>&quot;Head&quot; 页签头部</li>
<li>&quot;Body&quot; 页签主体</li>
</ul>
<p><strong>action - 页签切换方式</strong></p>
<p>设置页签主体的切换方式，默认为 MouseOver，及鼠标移动到页签头部时自动切换。</p>
<ul>
<li>&quot;Click&quot; 鼠标点击切换内容</li>
<li>&quot;MouseOver&quot; 鼠标移动切换内容</li>
</ul>
<p><strong>classActive - 显示页签Css类</strong></p>
<p>当前显示页签头部的CSS类，默认为 active。</p>
<p><strong>classNormal - 隐藏页签Css类</strong></p>
<p>当前隐藏页签头部的CSS类。</p>
<p><strong>current - 当前页签</strong></p>
<p>设置默认显示第几个页签，默认为 0。</p>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>显示包含三个区域的页签</strong></p>
<p>下面的例子显示显示包含三个区域的页签，默认显示第一个，鼠标移动时切换页签。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.active</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>tabs</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>head<span class="token punctuation">"</span></span> <span class="token attr-name">current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>header1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>header2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>header3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>tabs</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>tabs</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span> <span class="token attr-name">current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>body1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>body2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>body3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>tabs</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></template>