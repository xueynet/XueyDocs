<template><h1 id="stl-query-高级查询"><a class="header-anchor" href="#stl-query-高级查询">#</a> <a href="stl:query">stl:query</a> 高级查询</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>query</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>类型<span class="token punctuation">"</span></span>
  <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>字段<span class="token punctuation">"</span></span>
  <span class="token attr-name">op</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>操作<span class="token punctuation">"</span></span>
  <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>值<span class="token punctuation">"</span></span>
  <span class="token attr-name">dataType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据类型<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>query</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>&lt;stl:query&gt;</code> 标签可以设置各种查询条件，使用方式模拟 SQL 语法，能够实现各种高级搜索与筛选。</p>
<p><code>&lt;stl:query&gt;</code> 标签通常作为 <code>&lt;stl:contents&gt;</code> 或者 <code>&lt;stl:pageContents&gt;</code> 的子标签使用，用于设置内容列表的筛选条件。</p>
<p><code>&lt;stl:query&gt;</code> 还可以不断嵌套 <code>&lt;stl:query&gt;</code> 标签，实现 AND 与 OR 组合。</p>
<h3 id="父标签"><a class="header-anchor" href="#父标签">#</a> 父标签</h3>
<p><code>&lt;stl:query&gt;</code> 标签需要在以下标签内部使用。</p>
<table>
<thead>
<tr>
<th style="text-align:left">父标签</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">stl:contents</td>
<td style="text-align:left">内容列表</td>
</tr>
<tr>
<td style="text-align:left">stl:pageContents</td>
<td style="text-align:left">分页内容列表</td>
</tr>
<tr>
<td style="text-align:left">stl:sqlContents</td>
<td style="text-align:left">数据列表</td>
</tr>
<tr>
<td style="text-align:left">stl:pageSqlContents</td>
<td style="text-align:left">分页数据列表</td>
</tr>
</tbody>
</table>
<h3 id="子标签"><a class="header-anchor" href="#子标签">#</a> 子标签</h3>
<table>
<thead>
<tr>
<th style="text-align:left">子标签</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">stl:query</td>
<td style="text-align:left">实现 AND 与 OR 组合</td>
</tr>
</tbody>
</table>
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
<td style="text-align:left">类型</td>
</tr>
<tr>
<td style="text-align:left">column</td>
<td style="text-align:left">字段</td>
</tr>
<tr>
<td style="text-align:left">op</td>
<td style="text-align:left">操作</td>
</tr>
<tr>
<td style="text-align:left">value</td>
<td style="text-align:left">值</td>
</tr>
<tr>
<td style="text-align:left">dataType</td>
<td style="text-align:left">数据类型</td>
</tr>
</tbody>
</table>
<p><strong>type - 类型</strong></p>
<p>查询类型，此属性只可属于以下可能的取值的一种。</p>
<ul>
<li>&quot;Where&quot;</li>
<li>&quot;WhereNot&quot;</li>
<li>&quot;OrWhere&quot;</li>
<li>&quot;OrWhereNot&quot;</li>
<li>&quot;WhereColumns&quot;</li>
<li>&quot;OrWhereColumns&quot;</li>
<li>&quot;WhereNull&quot;</li>
<li>&quot;WhereNotNull&quot;</li>
<li>&quot;OrWhereNull&quot;</li>
<li>&quot;OrWhereNotNull&quot;</li>
<li>&quot;WhereTrue&quot;</li>
<li>&quot;OrWhereTrue&quot;</li>
<li>&quot;WhereFalse&quot;</li>
<li>&quot;OrWhereFalse&quot;</li>
<li>&quot;WhereLike&quot;</li>
<li>&quot;WhereNotLike&quot;</li>
<li>&quot;OrWhereLike&quot;</li>
<li>&quot;OrWhereNotLike&quot;</li>
<li>&quot;WhereStarts&quot;</li>
<li>&quot;WhereNotStarts&quot;</li>
<li>&quot;OrWhereStarts&quot;</li>
<li>&quot;OrWhereNotStarts&quot;</li>
<li>&quot;WhereEnds&quot;</li>
<li>&quot;WhereNotEnds&quot;</li>
<li>&quot;OrWhereEnds&quot;</li>
<li>&quot;OrWhereNotEnds&quot;</li>
<li>&quot;WhereContains&quot;</li>
<li>&quot;WhereNotContains&quot;</li>
<li>&quot;OrWhereContains&quot;</li>
<li>&quot;OrWhereNotContains&quot;</li>
<li>&quot;WhereBetween&quot;</li>
<li>&quot;OrWhereBetween&quot;</li>
<li>&quot;WhereNotBetween&quot;</li>
<li>&quot;OrWhereNotBetween&quot;</li>
<li>&quot;WhereIn&quot;</li>
<li>&quot;OrWhereIn&quot;</li>
<li>&quot;WhereNotIn&quot;</li>
<li>&quot;OrWhereNotIn&quot;</li>
<li>&quot;WhereDate&quot;</li>
<li>&quot;WhereNotDate&quot;</li>
<li>&quot;OrWhereDate&quot;</li>
<li>&quot;OrWhereNotDate&quot;</li>
<li>&quot;WhereTime&quot;</li>
<li>&quot;WhereNotTime&quot;</li>
<li>&quot;OrWhereTime&quot;</li>
<li>&quot;OrWhereNotTime&quot;</li>
<li>&quot;Select&quot;</li>
<li>&quot;From&quot;</li>
<li>&quot;Limit&quot;</li>
<li>&quot;Offset&quot;</li>
<li>&quot;Take&quot;</li>
<li>&quot;Skip&quot;</li>
<li>&quot;ForPage&quot;</li>
<li>&quot;Distinct&quot;</li>
<li>&quot;OrderBy&quot;</li>
<li>&quot;OrderByDesc&quot;</li>
<li>&quot;OrderByRandom&quot;</li>
</ul>
<p><strong>column - 字段</strong></p>
<p>设置需要进行查询的数据库字段。</p>
<p><strong>op - 操作</strong>
查询操作，默认为 =。</p>
<p>此属性只可属于以下可能的取值的一种。</p>
<ul>
<li>&quot;=&quot; 等于</li>
<li>&quot;!=&quot; 不等于</li>
<li>&quot;&gt;&quot; 大于</li>
<li>&quot;&gt;=&quot; 大于等于</li>
<li>&quot;&lt;&quot; 小于</li>
<li>&quot;&lt;=&quot; 小于等于</li>
</ul>
<p><strong>value - 值</strong></p>
<p>查询操作值。</p>
<p><strong>dataType - 数据类型</strong></p>
<p>column 字段的数据类型，默认为字符串类型。</p>
<p>此属性只可属于以下可能的取值的一种。</p>
<ul>
<li>&quot;string&quot; 字符串</li>
<li>&quot;int&quot; 整数</li>
<li>&quot;bool&quot; 布尔值</li>
<li>&quot;datetime&quot; 时间/日期</li>
<li>&quot;decimal&quot; 小数</li>
</ul>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>单个查询条件</strong></p>
<p>下面的例子获取整站内容并筛选出指定作者的内容列表。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageContents</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>all<span class="token punctuation">"</span></span> <span class="token attr-name">pageNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>query</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>where<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>李白<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>query</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>多个AND查询条件</strong></p>
<p>下面的例子获取整站内容并筛选出标题中包含北京以及上海的内容列表。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageContents</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>all<span class="token punctuation">"</span></span> <span class="token attr-name">pageNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>query</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>WhereLike<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>%北京%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>query</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>query</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>WhereLike<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>%上海%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>query</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>多个OR查询条件</strong></p>
<p>下面的例子获取整站内容并筛选出标题中包含北京或者上海的内容列表。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageContents</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>all<span class="token punctuation">"</span></span> <span class="token attr-name">pageNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>query</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>orWhereLike<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>%北京%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>query</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>query</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>orWhereLike<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>%上海%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>query</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>组合查询条件</strong></p>
<p><code>&lt;stl:query&gt;</code> 可以嵌套下级 <code>&lt;stl:query&gt;</code> 标签，实现AND与OR组合：</p>
<p>下面的例子获取整站内容并筛选出指定的栏目中内容标题包含北京或上海的内容显示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageContents</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>首页<span class="token punctuation">"</span></span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>all<span class="token punctuation">"</span></span> <span class="token attr-name">pageNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>query</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>whereIn<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>channelId<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>23,24<span class="token punctuation">"</span></span> <span class="token attr-name">dataType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>int<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>query</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>query</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>where<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>query</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>orWhereLike<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>%北京%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>query</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>query</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>orWhereLike<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>%上海%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>query</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>query</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>