<template><h1 id="stl-each-列表项循环"><a class="header-anchor" href="#stl-each-列表项循环">#</a> <a href="stl:each">stl:each</a> 列表项循环</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>each</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>循环类型<span class="token punctuation">"</span></span>
    <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示信息总数<span class="token punctuation">"</span></span>
    <span class="token attr-name">startNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>从第几条信息开始显示<span class="token punctuation">"</span></span>
    <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>布局<span class="token punctuation">"</span></span>
    <span class="token attr-name">columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>列数<span class="token punctuation">"</span></span>
    <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>方向<span class="token punctuation">"</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>整体高度<span class="token punctuation">"</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>整体宽度<span class="token punctuation">"</span></span>
    <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>整体对齐<span class="token punctuation">"</span></span>
    <span class="token attr-name">itemHeight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>项高度<span class="token punctuation">"</span></span>
    <span class="token attr-name">itemWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>项宽度<span class="token punctuation">"</span></span>
    <span class="token attr-name">itemAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>项水平对齐<span class="token punctuation">"</span></span>
    <span class="token attr-name">itemVerticalAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>项垂直对齐<span class="token punctuation">"</span></span>
    <span class="token attr-name">itemClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>项Css类<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>each</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:each</code> 标签在模板中遍历指定的列表项</p>
<p>type类型为ImageUrl时，<code>stl:each</code>的子标签需要包含<code>stl:image</code>标签，以显示图片项。</p>
<p>type类型为VideoUrl时，<code>stl:each</code>的子标签需要包含<code>stl:player</code>标签或者<code>stl:video</code>标签，以显示视频项。</p>
<p>type类型为FileUrl时，<code>stl:each</code>的子标签需要包含<code>stl:file</code>标签，以显示附件项。</p>
<p><code>&lt;stl:each&gt;</code> 标签可以作为 <code>&lt;stl:contents&gt;</code> 标签的子标签,也可以放在内容模板中.</p>
<p><code>&lt;stl:each&gt;</code> 标签对应的实体为<code>{stl:each}</code>。</p>
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
<td style="text-align:left">循环类型</td>
</tr>
<tr>
<td style="text-align:left">totalNum</td>
<td style="text-align:left">显示信息总数</td>
</tr>
<tr>
<td style="text-align:left">startNum</td>
<td style="text-align:left">从第几条信息开始显示</td>
</tr>
<tr>
<td style="text-align:left">layout</td>
<td style="text-align:left">布局</td>
</tr>
<tr>
<td style="text-align:left">columns</td>
<td style="text-align:left">列数</td>
</tr>
<tr>
<td style="text-align:left">direction</td>
<td style="text-align:left">方向</td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">整体高度</td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">整体宽度</td>
</tr>
<tr>
<td style="text-align:left">align</td>
<td style="text-align:left">整体对齐</td>
</tr>
<tr>
<td style="text-align:left">itemHeight</td>
<td style="text-align:left">项高度</td>
</tr>
<tr>
<td style="text-align:left">itemWidth</td>
<td style="text-align:left">项宽度</td>
</tr>
<tr>
<td style="text-align:left">itemAlign</td>
<td style="text-align:left">项水平对齐</td>
</tr>
<tr>
<td style="text-align:left">itemVerticalAlign</td>
<td style="text-align:left">项垂直对齐</td>
</tr>
<tr>
<td style="text-align:left">itemClass</td>
<td style="text-align:left">项Css类</td>
</tr>
</tbody>
</table>
<p><strong>type - 循环类型</strong></p>
<p>列表循环的类型</p>
<ul>
<li>&quot;imageUrl&quot; 遍历内容的图片字段</li>
<li>&quot;videoUrl&quot; 遍历内容的视频字段</li>
<li>&quot;fileUrl&quot; 遍历内容的附件字段</li>
<li>其他对应字段的字段名</li>
</ul>
<p><strong>totalNum - 显示信息总数</strong></p>
<p>设置列表一共显示多少条信息，默认值为 0，代表显示所有信息。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>each</span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>each</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>startNum - 从第几条信息开始显示</strong></p>
<p>设置列表从第几条信息开始显示，默认值为 1，代表从第一条信息开始显示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>each</span> <span class="token attr-name">startNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>each</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>layout - 布局</strong></p>
<p>列表布局属性用于控制列表循环中每一项的显示方式，默认值为 none，即直接循环，不控制列表项显示。</p>
<ul>
<li>&quot;none&quot; 列表不使用布局，仅循环列表项，不控制列表项显示。此值是默认的，如果没有指定属性的话。</li>
<li>&quot;table&quot; 列表使用表格布局，系统将把列表标签解析为 HTML <code>&lt;table&gt;</code> 元素，table 标签的所有属性（class、style、cellPadding、cellSpacing 等）均可用在列表标签中。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>each</span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table<span class="token punctuation">"</span></span> <span class="token attr-name">columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>90%<span class="token punctuation">"</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>each</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>columns - 列数</strong></p>
<p>columns 属性决定要显示的列的数量。比如，如果要在列表中显示四列的项，那么可以把这个属性设为 4。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>each</span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table<span class="token punctuation">"</span></span> <span class="token attr-name">columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>90%<span class="token punctuation">"</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>each</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>columns 属性只有当列表布局为表格 layout=&quot;table&quot; 时才起作用。</p>
</div>
<p><strong>direction - 方向</strong></p>
<p>direction 属性用于确定列表是按水平方向还是或垂直方向来重复。</p>
<ul>
<li>&quot;vertical&quot; 垂直</li>
<li>&quot;horizontal&quot; 水平</li>
</ul>
<p>如果将此属性设置为 vertical，列表中的项显示在从上到下加载的列中，然后从左到右，直到呈现所有项。例如，如果将 columns 属性设置为 3，列表中的项显示在三列中，如下表所示。</p>
<table>
<thead>
<tr>
<th style="text-align:center">1</th>
<th style="text-align:center">4</th>
<th style="text-align:center">7</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">5</td>
<td style="text-align:center">8</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">6</td>
<td style="text-align:center">9</td>
</tr>
</tbody>
</table>
<p>如果将此属性设置为 horizontal，列表中的项以从左到右加载的行显示，然后从上到下，直到呈现所有项。例如，如果将 columns 属性设置为 3，列表的项将以每行三项的形式显示，如下表所示。</p>
<table>
<thead>
<tr>
<th style="text-align:center">1</th>
<th style="text-align:center">2</th>
<th style="text-align:center">3</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">5</td>
<td style="text-align:center">6</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">8</td>
<td style="text-align:center">9</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>即使 direction 值为 vertical，还是显示为 4 个列。columns 永远是指重复的列的数量，而不是行的数量。</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>direction 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 且设置了列数 columns 时才起作用。</p>
</div>
<p><strong>height - 整体高度</strong></p>
<p>设置列表的整体高度。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>height 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>width - 整体宽度</strong></p>
<p>设置列表的整体宽度。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>width 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>align - 整体对齐</strong></p>
<p>设置列表的整体对齐方式。</p>
<ul>
<li>&quot;center&quot; 居中对齐。</li>
<li>&quot;left&quot; 居左对齐。</li>
<li>&quot;right&quot; 居右对齐。</li>
<li>&quot;justify&quot; 向页面的左右边缘对齐。</li>
<li>&quot;notSet&quot; 不设置。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>align 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>itemHeight - 项高度</strong></p>
<p>列表中每一项的高度。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>itemHeight 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>itemWidth - 项宽度</strong></p>
<p>列表中每一项的宽度。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>itemWidth 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>itemAlign - 项水平对齐</strong></p>
<p>列表中每一项的水平对齐方式。</p>
<ul>
<li>&quot;center&quot; 居中对齐。</li>
<li>&quot;left&quot; 居左对齐。</li>
<li>&quot;right&quot; 居右对齐。</li>
<li>&quot;justify&quot; 向页面的左右边缘对齐。</li>
<li>&quot;notSet&quot; 不设置。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>itemAlign 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>itemVerticalAlign - 项垂直对齐</strong></p>
<p>列表中每一项的垂直对齐方式。</p>
<ul>
<li>&quot;top&quot; 顶端对齐。</li>
<li>&quot;middle&quot; 居中对齐。</li>
<li>&quot;bottom&quot; 底端对齐。</li>
<li>&quot;notSet&quot; 不设置。此值是默认的，如果没有指定属性的话。</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>itemVerticalAlign 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<p><strong>itemClass - 项Css类</strong></p>
<p>列表中每一项的Css类名称。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>itemClass 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
</div>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>在内容页面显示图片字段的图片列表</strong></p>
<p>下面的例子显示内容的图片字段列表</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>each</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>imageUrl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>image</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>image</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>each</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/upload/images/2017/5/3152235206.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/upload/images/2017/5/315224668.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/upload/images/2017/5/3152255636.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/upload/images/2017/5/315235662.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>