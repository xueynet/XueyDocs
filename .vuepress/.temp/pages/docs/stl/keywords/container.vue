<template><h1 id="stl-container-容器"><a class="header-anchor" href="#stl-container-容器">#</a> <a href="stl:container">stl:container</a> 容器</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>container</span>
    <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目索引<span class="token punctuation">"</span></span>
    <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span>
    <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>父栏目<span class="token punctuation">"</span></span>
    <span class="token attr-name">upLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上级栏目的级别<span class="token punctuation">"</span></span>
    <span class="token attr-name">topLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>从首页向下的栏目级别<span class="token punctuation">"</span></span>
    <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>所处上下文<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>container</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:container</code> 标签在模板中定义容器，切换上下文。</p>
<p>上下文是指系统解析 StL 标签时的默认数据，详情请参考<RouterLink to="/stl/context.html#%E5%88%87%E6%8D%A2%E4%B8%8A%E4%B8%8B%E6%96%87">切换上下文</RouterLink>。</p>
<p><code>&lt;stl:container&gt;</code> 标签需要嵌套 HTML 标签或者 STL 标签，否则系统将忽略此标签。</p>
<h3 id="解析"><a class="header-anchor" href="#解析">#</a> 解析</h3>
<p>如果使用 <code>&lt;stl:container&gt;</code> 元素，系统将在指定上下文情景下对嵌套的标签进行解析。</p>
<p><code>{stl:container}</code> 实体无效，系统将解析此实体为空字符串。</p>
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
<td style="text-align:left">channelIndex</td>
<td style="text-align:left">栏目索引</td>
</tr>
<tr>
<td style="text-align:left">channelName</td>
<td style="text-align:left">栏目名称</td>
</tr>
<tr>
<td style="text-align:left">parent</td>
<td style="text-align:left">父栏目</td>
</tr>
<tr>
<td style="text-align:left">upLevel</td>
<td style="text-align:left">上级栏目的级别</td>
</tr>
<tr>
<td style="text-align:left">topLevel</td>
<td style="text-align:left">从首页向下的栏目级别</td>
</tr>
<tr>
<td style="text-align:left">context</td>
<td style="text-align:left">所处上下文</td>
</tr>
</tbody>
</table>
<p><strong>channelIndex - 栏目索引</strong></p>
<p>栏目索引是一个站点中栏目的标识，具有唯一性。</p>
<p>如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 定位到首页 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>container</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>container</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>channelName - 栏目名称</strong></p>
<p>栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 定位到当前栏目下的名称为“栏目名称”的栏目 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>container</span> <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>container</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 定位到“栏目索引”下的名称为“栏目名称”的栏目 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>container</span> <span class="token attr-name">channelIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目索引<span class="token punctuation">"</span></span> <span class="token attr-name">channelName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目名称<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>container</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>parent - 父栏目</strong></p>
<p>将上下文切换到当前栏目的上一级栏目。</p>
<ul>
<li>&quot;true&quot; 表示切换到当前栏目的上一级栏目，等价于 upLevel=&quot;1&quot;。</li>
<li>&quot;false&quot; 表示不切换到当前栏目的上一级栏目。</li>
</ul>
<p>如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 定位到当前栏目的上一级栏目 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>container</span> <span class="token attr-name">parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>container</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>upLevel - 上级栏目的级别</strong></p>
<p>切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。</p>
<p>如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 定位到当前栏目的上两级栏目 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>container</span> <span class="token attr-name">upLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>container</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>topLevel - 从首页向下的栏目级别</strong></p>
<p>切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token comment">&lt;!-- 定位到一级栏目 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>container</span> <span class="token attr-name">topLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>container</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>context - 所处上下文</strong></p>
<p>通常如果标签被嵌套在列表元素中时，系统会设置上下文为当前的列表类型，同时对标签进行解析时也将根据列表类型进行判断，如将 <a href="stl:a">stl:a</a>&lt;/stl:a&gt; 放到内容列表以及栏目列表中时，stl:a 标签的链接会分别显示内容的连接以及栏目的连接。</p>
<ul>
<li>&quot;default&quot; 默认，即当前所处上下文。</li>
<li>&quot;content&quot; 内容上下文。</li>
<li>&quot;channel&quot; 栏目上下文。</li>
<li>&quot;sqlContent&quot; Sql 内容上下文。</li>
<li>&quot;site&quot; 站点上下文。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>container</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>channel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>container</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>使用容器切换上下文</strong></p>
<p>下面的例子将容器的上下文设置为栏目。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>container</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Channel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>channel</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>channel</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>container</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>stl:container 容器
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>