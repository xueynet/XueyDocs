<template><h1 id="stl-layer-页面弹层"><a class="header-anchor" href="#stl-layer-页面弹层">#</a> <a href="stl:layer">stl:layer</a> 页面弹层</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>layer</span>
  <span class="token attr-name">funcName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>触发函数名称<span class="token punctuation">"</span></span>
  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span>
  <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Url地址<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>宽度<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>高度<span class="token punctuation">"</span></span>
  <span class="token attr-name">shadeClose</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>开启遮罩关闭<span class="token punctuation">"</span></span>
  <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>坐标<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>layer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p><code>&lt;stl:layer&gt;</code> 标签需要使用 XYCMS 7.0.1 及以上版本。</p>
</div>
<h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:layer</code> 标签在模板中显示弹层组件。</p>
<p><code>stl:layer</code> 标签底层采用 <a href="https://github.com/sentsin/layer" target="_blank" rel="noopener noreferrer">layer 弹层组件<OutboundLink/></a>，可以参考 <a href="https://layer.layui.com/" target="_blank" rel="noopener noreferrer">layer 官方文档<OutboundLink/></a></p>
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
<td style="text-align:left">funcName</td>
<td style="text-align:left">触发函数名称</td>
</tr>
<tr>
<td style="text-align:left">title</td>
<td style="text-align:left">标题</td>
</tr>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left">Url 地址</td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">宽度</td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">高度</td>
</tr>
<tr>
<td style="text-align:left">shadeClose</td>
<td style="text-align:left">开启遮罩关闭</td>
</tr>
<tr>
<td style="text-align:left">offset</td>
<td style="text-align:left">坐标</td>
</tr>
</tbody>
</table>
<p><strong>funcName - 触发函数名称</strong></p>
<p>设置触发函数名称，调用函数将显示弹层组件。</p>
<p>如果不设置 funcName 属性，页面将在加载完毕后自动显示弹层组件。</p>
<p><strong>title - 标题</strong></p>
<p>弹出窗口的标题。</p>
<p><strong>url - Url 地址</strong></p>
<p>指定弹出层的 Url 地址，如果不设置 url 属性，标签默认将在弹出层中显示 stl:layer 内嵌套的 HTML。</p>
<p>#width - 宽度
在默认状态下，弹出层宽高都是自适应的，可以设置 width 宽度为固定值，如 width=&quot;500px&quot;，高度仍然是自适应的。</p>
<p>可以按窗口的百分比设置宽度，如 width=&quot;50%&quot;。</p>
<p><strong>height - 高度</strong></p>
<p>当需要指定弹出层的高度是，可以设置 height 高度为固定值，如 height=&quot;400px&quot;，或者按窗口的百分比设置高度，如 height=&quot;50%&quot;。</p>
<p><strong>shadeClose - 开启遮罩关闭</strong></p>
<p>可以设定 shadeClose 来控制是否点击弹层外区域关闭，默认为 true。</p>
<p><strong>offset - 坐标</strong></p>
<p>弹出层默认是垂直水平居中的，可以设置 offset 坐标自定义弹出层位置。</p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">auto</td>
<td style="text-align:left">默认坐标，即垂直水平居中</td>
</tr>
<tr>
<td style="text-align:left">100px</td>
<td style="text-align:left">只定义 top 坐标，水平保持居中</td>
</tr>
<tr>
<td style="text-align:left">['100px', '50px']</td>
<td style="text-align:left">同时定义 top、left 坐标</td>
</tr>
<tr>
<td style="text-align:left">t</td>
<td style="text-align:left">快捷设置顶部坐标</td>
</tr>
<tr>
<td style="text-align:left">r</td>
<td style="text-align:left">只定义 top 坐标，水平保持居中</td>
</tr>
<tr>
<td style="text-align:left">b</td>
<td style="text-align:left">快捷设置底部坐标</td>
</tr>
<tr>
<td style="text-align:left">l</td>
<td style="text-align:left">快捷设置左边缘坐标</td>
</tr>
<tr>
<td style="text-align:left">lt</td>
<td style="text-align:left">快捷设置左上角</td>
</tr>
<tr>
<td style="text-align:left">lb</td>
<td style="text-align:left">快捷设置左下角</td>
</tr>
<tr>
<td style="text-align:left">rt</td>
<td style="text-align:left">快捷设置右上角</td>
</tr>
<tr>
<td style="text-align:left">rb</td>
<td style="text-align:left">快捷设置右下角</td>
</tr>
</tbody>
</table>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>点击按钮弹出内容正文</strong></p>
<p>下面的例子在内容模板中添加链接，点击后弹出内容正文：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onButtonClick()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>弹出内容正文<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>layer</span> <span class="token attr-name">funcName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onButtonClick<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>内容正文<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50%<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>80%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">padding</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>layer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>点击按钮弹出指定地址</strong></p>
<p>下面的例子在内容模板中添加链接，点击后弹出指定Url地址：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onButtonClick()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>弹出Url<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>layer</span> <span class="token attr-name">funcName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onButtonClick<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定Url<span class="token punctuation">"</span></span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://docs.xuey.net<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50%<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>80%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>layer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>页面载入后自动弹出窗口</strong></p>
<p>下面的例子不设置funcName，stl:layer标签将在页面载入后自动弹出窗口</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>layer</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定Url<span class="token punctuation">"</span></span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://docs.xuey.net<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50%<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>80%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>layer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>