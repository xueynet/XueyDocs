<template><h1 id="stl-tags-标签"><a class="header-anchor" href="#stl-tags-标签">#</a> <a href="stl:tags">stl:tags</a> 标签</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>tags</span>
    <span class="token attr-name">tagLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签级别<span class="token punctuation">"</span></span>
    <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示标签数目<span class="token punctuation">"</span></span>
    <span class="token attr-name">isOrderByCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否按引用次数排序<span class="token punctuation">"</span></span>
    <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>主题样式<span class="token punctuation">"</span></span>
    <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>所处上下文<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>tags</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:tags</code> 标签在模板中显示内容标签。</p>
<p><code>stl:tags</code> 标签用于在页面中显示标签，标签的排列顺序依照字典排序，按照热门程度确定字体的大小和颜色。</p>
<p>标签有三个重要属性：标签名、标签使用次数、标签级别（热门程度）。通常标签显示的字体大小和颜色由标签级别决定，标签级别由系统通过标签的使用次数计算而来。</p>
<p><code>&lt;stl:tags&gt;</code> 标签能够包含代码，用于控制每一条标签的显示样式。在<code>&lt;stl:tags&gt;</code>内部可以嵌入任何HTML代码和STL代码，除此以外还能够嵌入以下三种实体：标签名、标签使用次数、标签级别（热门程度）。其中标签名使用<code>{Tag.Name}</code>表示，标签使用次数使用<code>{Tag.Count}</code>表示，标签级别使用<code>{Tag.Level}</code>表示。</p>
<p>如果<code>&lt;stl:tags&gt;</code> 标签内部不包含代码，系统将采用默认的显示样式显示标签。</p>
<p>如果 <code>&lt;stl:tags&gt;</code> 标签置于内容模板中，系统将仅显示当前内容包含的标签，如果希望在内容模板中显示站点内的所有标签，需要设置 context （上下文）属性为 &quot;Channel&quot;。</p>
<p>属性 tagLevel 用于控制显示标签的级别，默认显示所有级别的标签。标签分为四个级别，代表有百分之多少的内容引用了此标签：</p>
<p>级别一的标签引用百分比为0%—20% 级别二的标签引用百分比为20%—50% 级别三的标签引用百分比为50%—70% 级别四的标签引用百分比为70%—100% 属性 totalNum 控制显示标签数量。</p>
<p><code>&lt;stl:tags&gt;</code> 标签对应的实体为<code>{stl:tags}</code>。</p>
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
<td style="text-align:left">tagLevel</td>
<td style="text-align:left">标签级别</td>
</tr>
<tr>
<td style="text-align:left">totalNum</td>
<td style="text-align:left">显示标签数目</td>
</tr>
<tr>
<td style="text-align:left">isOrderByCount</td>
<td style="text-align:left">是否按引用次数排序</td>
</tr>
<tr>
<td style="text-align:left">theme</td>
<td style="text-align:left">主题样式</td>
</tr>
<tr>
<td style="text-align:left">context</td>
<td style="text-align:left">所处上下文</td>
</tr>
</tbody>
</table>
<p><strong>tagLevel - 标签级别</strong></p>
<p>标签的级别，页面将显示等于或大于此级别的标签。</p>
<p><strong>totalNum - 显示标签数目</strong></p>
<p>显示标签数目</p>
<p><strong>isOrderByCount - 是否按引用次数排序</strong></p>
<p>是否按引用次数排序</p>
<p>&quot;true&quot; 是
&quot;false&quot; 否</p>
<p><strong>theme - 主题样式</strong></p>
<p>显示的主题样式</p>
<p>&quot;Default&quot; 默认样式
&quot;Style1&quot; 样式一
&quot;Style2&quot; 样式二</p>
<p><strong>context - 所处上下文</strong></p>
<p>所处上下文</p>
<p>&quot;Content&quot; 仅显示当前内容包含的标签
&quot;Channel&quot; 显示站点内所有标签</p>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>默认方式显示标签</strong></p>
<p>下面的例子显示站点内的所有标签，显示数量为 30。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>tags</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Channel<span class="token punctuation">"</span></span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>tags</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>自定义标签显示样式</strong></p>
<p>下面的例子采用自定义的方式显示标签。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mod<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mBody<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tagHead<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tagCloud<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>tags</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Channel<span class="token punctuation">"</span></span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tag_popularity_{Tag.Level}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/utils/tags.html?tagName={Tag.Name}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{Tag.Name}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>tags</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>