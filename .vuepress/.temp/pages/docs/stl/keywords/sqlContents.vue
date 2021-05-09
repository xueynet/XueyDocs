<template><h1 id="stl-sqlcontents-数据列表"><a class="header-anchor" href="#stl-sqlcontents-数据列表">#</a> <a href="stl:sqlContents">stl:sqlContents</a> 数据列表</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContents</span>
  <span class="token attr-name">databaseTypeName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据库类型名称<span class="token punctuation">"</span></span>
  <span class="token attr-name">databaseType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据库类型<span class="token punctuation">"</span></span>
  <span class="token attr-name">connectionStringName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据库链接字符串名称<span class="token punctuation">"</span></span>
  <span class="token attr-name">connectionString</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据库链接字符串<span class="token punctuation">"</span></span>
  <span class="token attr-name">queryString</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据库查询语句<span class="token punctuation">"</span></span>
  <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>显示数据总数<span class="token punctuation">"</span></span>
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
  <span class="token attr-name">itemClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>项Css类<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>&lt;stl:sqlContents&gt;</code> 标签在模板中显示任意数据库中的数据列表。</p>
<h3 id="数据库连接"><a class="header-anchor" href="#数据库连接">#</a> 数据库连接</h3>
<p>如果未设置 databaseTypeName，databaseType，connectionStringName，connectionString 属性，标签 <code>&lt;stl:sqlContents&gt;</code> 默认从当前 XYCMS 所在的数据库中获取数据，否则将从指定的数据库中获取数据。</p>
<p>属性 databaseTypeName 以及 connectionStringName 将从 XYCMS 配置文件 xycms.json 中获取数据库类型以及数据库连接字符串的值。</p>
<p>属性 databaseType 以及 connectionString 将直接设置数据库类型以及数据库连接字符串。</p>
<p>在正式环境中使用需要通过配置文件的方式设置数据库连接，以避免数据库信息暴露在外部，例如我们 xycms.json 文件中设置了远程数据库信息 RemoteDatabase：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"IsProtectData"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"SecurityKey"</span><span class="token operator">:</span> <span class="token string">"574929ebfff02fb61f85129150ec2e176da3c7b64792dc71"</span><span class="token punctuation">,</span>
  <span class="token property">"Database"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"Type"</span><span class="token operator">:</span> <span class="token string">"SQLite"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"RemoteDatabase"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"Type"</span><span class="token operator">:</span> <span class="token string">"MySql"</span><span class="token punctuation">,</span>
    <span class="token property">"ConnectionString"</span><span class="token operator">:</span> <span class="token string">"Server=143.235.23.134;Uid=root;Pwd=databasepassword8;Database=new;"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"Redis"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ConnectionString"</span><span class="token operator">:</span> <span class="token string">""</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>我们可以这样设置 databaseTypeName 以及 connectionStringName ：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContents</span>
  <span class="token attr-name">databaseTypeName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RemoteDatabase:Type<span class="token punctuation">"</span></span>
  <span class="token attr-name">connectionStringName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RemoteDatabase:ConnectionString<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="数据库查询"><a class="header-anchor" href="#数据库查询">#</a> 数据库查询</h3>
<p>数据库查询有两种方式：</p>
<p><strong>queryString 查询</strong></p>
<p>第一种方式是通过属性 <code>queryString</code> 或者子标签 <code>&lt;stl:queryString&gt;</code> 直接输入 SQL 语句进行查询，如：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageSqlContents</span>
  <span class="token attr-name">databaseTypeName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RemoteDatabase:Type<span class="token punctuation">"</span></span>
  <span class="token attr-name">connectionStringName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RemoteDatabase:ConnectionString<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>queryString</span><span class="token punctuation">></span></span>select * from siteserver_Administrator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>queryString</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageSqlContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如果在动态标签中使用，可能出现 SQL 注入风险，所以不推荐使用直接输入 SQL 语句的方式进行数据库查询。</p>
<p><strong>query 查询</strong></p>
<p>第二种方式是通过 <code>&lt;stl:query&gt;</code> 子标签的方式查询，如：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageSqlContents</span>
  <span class="token attr-name">databaseTypeName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RemoteDatabase:Type<span class="token punctuation">"</span></span>
  <span class="token attr-name">connectionStringName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RemoteDatabase:ConnectionString<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>query</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>*<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>query</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>query</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>from<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>siteserver_Administrator<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>query</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UserName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageSqlContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>&lt;stl:query&gt;</code> 方式查询必须包含有 <code>type=&quot;from&quot;</code> 的值，用于设置查询表名称。</p>
<p>推荐使用 <code>&lt;stl:query&gt;</code> 子标签的方式对数据库进行查询，从而避免 SQL 注入风险。</p>
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
<td style="text-align:left">定义数据库查询语句</td>
</tr>
<tr>
<td style="text-align:left">stl:queryString</td>
<td style="text-align:left">定义数据库查询语句</td>
</tr>
<tr>
<td style="text-align:left">stl:sqlContent</td>
<td style="text-align:left">数据库值</td>
</tr>
<tr>
<td style="text-align:left">stl:pageItems</td>
<td style="text-align:left">分页项容器</td>
</tr>
<tr>
<td style="text-align:left">stl:pageItem</td>
<td style="text-align:left">分页项</td>
</tr>
</tbody>
</table>
<h3 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>所有属于 STL 标签 <code>&lt;stl:sqlContents&gt;</code> 的成员均适用于 <code>&lt;stl:pageSqlContents&gt;</code> 标签，所有属于 HTML 标签&lt;<code>table&gt;</code>的成员均适用于<code>&lt;stl:pageSqlContents&gt;</code>标签。</p>
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
<td style="text-align:left">pageNum</td>
<td style="text-align:left">每页显示的数据数量</td>
</tr>
<tr>
<td style="text-align:left">databaseTypeName</td>
<td style="text-align:left">数据库类型名称</td>
</tr>
<tr>
<td style="text-align:left">databaseType</td>
<td style="text-align:left">数据库类型</td>
</tr>
<tr>
<td style="text-align:left">connectionStringName</td>
<td style="text-align:left">数据库链接字符串名称</td>
</tr>
<tr>
<td style="text-align:left">connectionString</td>
<td style="text-align:left">数据库链接字符串</td>
</tr>
<tr>
<td style="text-align:left">queryString</td>
<td style="text-align:left">数据库查询语句</td>
</tr>
<tr>
<td style="text-align:left">totalNum</td>
<td style="text-align:left">显示数据总数</td>
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
<td style="text-align:left">项 Css 类</td>
</tr>
</tbody>
</table>
<p><strong>pageNum - 每页显示的数据数量</strong></p>
<p>每一页显示的数据库数据数量。</p>
<p>每页显示 6 条数据，最多显示 5 页：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageSqlContents</span> <span class="token attr-name">pageNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageSqlContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>databaseTypeName - 数据库类型名称</strong></p>
<p>存储在系统根目录的 xycms.json 文件中的数据库类型名称，默认为系统使用的数据库类型。</p>
<p><strong>databaseType - 数据库类型</strong></p>
<p>databaseType 属性用于设置数据库类型。</p>
<ul>
<li>&quot;MySql&quot; MySql 数据库</li>
<li>&quot;SqlServer&quot; SqlServer 数据库</li>
<li>&quot;PostgreSql&quot; PostgreSql 数据库</li>
<li>&quot;SQLite&quot; SQLite 数据库</li>
</ul>
<p><strong>connectionStringName - 数据库链接字符串名称</strong></p>
<p>存储在系统根目录的 xyms.json 文件中的数据库链接字符串名称，默认为系统使用的数据库 ConnectionString。</p>
<p><strong>connectionString - 数据库链接字符串</strong></p>
<p>直接设置数据库链接字符串。</p>
<div class="custom-container danger"><p class="custom-container-title">WARNING</p>
<p>connectionString 属性将在模板文件中暴露数据库链接字符串，如果网站部署在外网，必须使用 connectionStringName 替代 connectionString 属性，防止数据库链接被暴露。</p>
</div>
<p><strong>queryString - 数据库查询语句</strong></p>
<p>设置数据库查询 SQL 语句，如果 SQL 语句需要较长建议使用子标签 <code>&lt;stl:queryString&gt;</code> 代替。</p>
<p><strong>totalNum - 显示数据总数</strong></p>
<p>设置列表一共显示多少条信息，默认值为 0，代表显示所有信息。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageSqlContents</span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageSqlContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>startNum - 从第几条信息开始显示</strong></p>
<p>设置列表从第几条信息开始显示，默认值为 1，代表从第一条信息开始显示。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageSqlContents</span> <span class="token attr-name">startNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageSqlContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>layout - 布局</strong></p>
<p>列表布局属性用于控制列表循环中每一项的显示方式，默认值为 none，即直接循环，不控制列表项显示。</p>
<ul>
<li>&quot;none&quot; 列表不使用布局，仅循环列表项，不控制列表项显示。此值是默认的，如果没有指定属性的话。</li>
<li>&quot;table&quot; 列表使用表格布局，系统将把列表标签解析为 HTML <code>&lt;table&gt;</code> 元素，table 标签的所有属性（class、style、cellPadding、cellSpacing 等）均可用在列表标签中。</li>
</ul>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageSqlContents</span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table<span class="token punctuation">"</span></span>
  <span class="token attr-name">columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>90%<span class="token punctuation">"</span></span>
  <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
  <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageSqlContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>columns - 列数</strong></p>
<p>columns 属性决定要显示的列的数量。比如，如果要在列表中显示四列的项，那么可以把这个属性设为 3。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageSqlContents</span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table<span class="token punctuation">"</span></span>
  <span class="token attr-name">columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>90%<span class="token punctuation">"</span></span>
  <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
  <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageSqlContents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>columns 属性只有当列表布局为表格 <code>layout=&quot;table&quot;</code> 时才起作用。</p>
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
<p><strong>显示最新添加的内容列表</strong></p>
<p>下面的例子显示按最新添加时间获取内容列表。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageSqlContents</span> <span class="token attr-name">pageNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30<span class="token punctuation">"</span></span> <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>queryString</span><span class="token punctuation">></span></span>
    SELECT * FROM siteserver_Content_1 WHERE SiteId = {stl.SiteId} AND ChannelId > 0 ORDER BY AddDate DESC
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>queryString</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">wordnum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>
  (<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>sqlContent</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AddDate<span class="token punctuation">"</span></span> <span class="token attr-name">formatString</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yyyy-MM-dd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>sqlContent</span><span class="token punctuation">></span></span>)
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageSqlContents</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageItems</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pagination<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{PageItem.PreviousPage}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Prev<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>pageItem</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>PageNavigation<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>yes</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{Current.Url}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{Current.Num}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>yes</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>no</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{Current.Num}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>no</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageItem</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{PageItem.NextPage}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Next<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>pageItems</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></template>