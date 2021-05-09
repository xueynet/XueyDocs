<template><h1 id="stl-request-url-地址请求"><a class="header-anchor" href="#stl-request-url-地址请求">#</a> <a href="stl:request">stl:request</a> URL 地址请求</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>request</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>地址参数名称<span class="token punctuation">"</span></span>
  <span class="token attr-name">elementId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定需要显示URL请求值的HTML元素Id<span class="token punctuation">"</span></span>
  <span class="token attr-name">callback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>回调函数名称<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>request</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:request</code> 实体在模板中显示地址栏请求参数。</p>
<p><code>&lt;stl:request&gt;</code> 标签可以使用简写 <code>{request.}</code>。</p>
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
<td style="text-align:left">地址参数名称</td>
</tr>
<tr>
<td style="text-align:left">elementId</td>
<td style="text-align:left">指定需要显示地址参数值的HTML元素Id</td>
</tr>
<tr>
<td style="text-align:left">callback</td>
<td style="text-align:left">回调函数名称</td>
</tr>
</tbody>
</table>
<p><strong>type - 地址参数名称</strong></p>
<p>Url 地址参数的名称。</p>
<p><strong>elementId - 指定需要显示地址参数值的HTML元素Id</strong></p>
<p>如果设置了elementId属性，标签将会把地址参数值设置到对应HTML元素中。</p>
<p><strong>callback - 回调函数名称</strong></p>
<p>回调函数名称，如果设置了callback属性，标签将在页面载入后调用函数，并将地址参数的值作为函数的传参。</p>
</template>