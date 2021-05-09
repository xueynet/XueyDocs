<template><h1 id="获取内容列表-api"><a class="header-anchor" href="#获取内容列表-api">#</a> 获取内容列表 API</h1>
<p>获取内容列表使用 <code>POST</code> 发起请求，请求地址为 <code>/api/v1/contents</code>，系统将根据 POST Body 传递过来的筛选参数获取到内容列表并返回。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/contents HTTP/1.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="请求-uri"><a class="header-anchor" href="#请求-uri">#</a> 请求 URI</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">位置</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">apiKey</td>
<td style="text-align:left">query</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">API 密钥，请参考身份认证</td>
</tr>
</tbody>
</table>
<h3 id="请求-body"><a class="header-anchor" href="#请求-body">#</a> 请求 Body</h3>
<p>筛选参数通过 POST Body 传递给 API，可以设置复杂的查询条件，通过类似 SQL 的方式对内容进行筛选，从而获取出需要的内容集合。</p>
<p>向 API 提交的筛选参数说明：</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">必填项</th>
<th style="text-align:left">JSON 类型</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">siteId</td>
<td style="text-align:left">站点 Id</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">指定需要获取内容的所属站点</td>
</tr>
<tr>
<td style="text-align:left">channelId</td>
<td style="text-align:left">栏目 Id</td>
<td style="text-align:left"></td>
<td style="text-align:left">数字</td>
<td style="text-align:left">指定需要获取内容的所属栏目，如果不设置，系统将从整个站点获取内容</td>
</tr>
<tr>
<td style="text-align:left">checked</td>
<td style="text-align:left">审核状态</td>
<td style="text-align:left"></td>
<td style="text-align:left">布尔值</td>
<td style="text-align:left">指定返回内容的审核状态，true 代表返回已审核内容，false 代表返回待审核内容，如果不设置，系统将返回全部内容</td>
</tr>
<tr>
<td style="text-align:left">top</td>
<td style="text-align:left">置顶状态</td>
<td style="text-align:left"></td>
<td style="text-align:left">布尔值</td>
<td style="text-align:left">指定返回内容的置顶状态，true 代表返回已审核内容，false 代表返回待审核内容，如果不设置，系统将返回全部内容</td>
</tr>
<tr>
<td style="text-align:left">recommend</td>
<td style="text-align:left">推荐状态</td>
<td style="text-align:left"></td>
<td style="text-align:left">布尔值</td>
<td style="text-align:left">指定返回内容的推荐状态，true 代表返回推荐内容，false 代表返回非推荐内容，如果不设置，系统将返回全部内容</td>
</tr>
<tr>
<td style="text-align:left">color</td>
<td style="text-align:left">醒目状态</td>
<td style="text-align:left"></td>
<td style="text-align:left">布尔值</td>
<td style="text-align:left">指定返回内容的醒目状态，true 代表返回醒目内容，false 代表返回非醒目内容，如果不设置，系统将返回全部内容</td>
</tr>
<tr>
<td style="text-align:left">hot</td>
<td style="text-align:left">热点状态</td>
<td style="text-align:left"></td>
<td style="text-align:left">布尔值</td>
<td style="text-align:left">指定返回内容的热点状态，true 代表返回热点内容，false 代表返回非热点内容，如果不设置，系统将返回全部内容</td>
</tr>
<tr>
<td style="text-align:left">groupNames</td>
<td style="text-align:left">内容组</td>
<td style="text-align:left"></td>
<td style="text-align:left">字符串数组</td>
<td style="text-align:left">设置内容组后，系统将返回包含在任一内容组中的内容集合</td>
</tr>
<tr>
<td style="text-align:left">tagNames</td>
<td style="text-align:left">标签</td>
<td style="text-align:left"></td>
<td style="text-align:left">字符串数组</td>
<td style="text-align:left">设置标签后，系统将返回包含在任一标签中的内容集合</td>
</tr>
<tr>
<td style="text-align:left">wheres</td>
<td style="text-align:left">筛选规则</td>
<td style="text-align:left"></td>
<td style="text-align:left">Where 对象数组</td>
<td style="text-align:left">内容筛选规则，代表筛选条件，系统将返回满足所有筛选规则的内容集合</td>
</tr>
<tr>
<td style="text-align:left">orders</td>
<td style="text-align:left">排序规则</td>
<td style="text-align:left"></td>
<td style="text-align:left">Order 对象数组</td>
<td style="text-align:left">内容排序规则，系统将按指定的排序规则返回内容集合</td>
</tr>
<tr>
<td style="text-align:left">page</td>
<td style="text-align:left">页数</td>
<td style="text-align:left"></td>
<td style="text-align:left">数字</td>
<td style="text-align:left">需要获取第几页的数据</td>
</tr>
<tr>
<td style="text-align:left">perPage</td>
<td style="text-align:left">每页包含的内容数</td>
<td style="text-align:left"></td>
<td style="text-align:left">数字</td>
<td style="text-align:left">设置每页将返回的内容数</td>
</tr>
</tbody>
</table>
<h3 id="where-对象"><a class="header-anchor" href="#where-对象">#</a> Where 对象</h3>
<p>可以向内容列表 API 传递 Where 对象数组，用于指定内容筛选条件，系统将返回满足所有 Where 条件的内容集合。</p>
<p>Where 对象说明：</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">必填项</th>
<th style="text-align:left">JSON 类型</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">column</td>
<td style="text-align:left">内容字段</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">可以是内容实体Content中存在的任意字段</td>
</tr>
<tr>
<td style="text-align:left">operator</td>
<td style="text-align:left">操作符</td>
<td style="text-align:left"></td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">指定对比操作符，参考 Where Operator 类型</td>
</tr>
<tr>
<td style="text-align:left">value</td>
<td style="text-align:left">值</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">条件对比值</td>
</tr>
</tbody>
</table>
<h3 id="where-operator-类型"><a class="header-anchor" href="#where-operator-类型">#</a> Where Operator 类型</h3>
<p>Where 对象可以设置多种对比操作，如常见的等于、不等于、大于、小于以及 like 模糊查询条件。</p>
<p>Where Operator 类型说明：</p>
<table>
<thead>
<tr>
<th style="text-align:left">operator</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">=</td>
<td style="text-align:left">等于</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">!=</td>
<td style="text-align:left">不等于</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">&gt;</td>
<td style="text-align:left">大于</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">&gt;=</td>
<td style="text-align:left">大于或等于</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">&lt;</td>
<td style="text-align:left">小于</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">&lt;=</td>
<td style="text-align:left">小于或等于</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">In</td>
<td style="text-align:left">包含</td>
<td style="text-align:left">使用英文逗号 , 分割</td>
</tr>
<tr>
<td style="text-align:left">NotIn</td>
<td style="text-align:left">不包含</td>
<td style="text-align:left">使用英文逗号 , 分割</td>
</tr>
<tr>
<td style="text-align:left">Like</td>
<td style="text-align:left">Like 查询</td>
<td style="text-align:left">与 SQL 一致，需要在值中包含百分号 %，代表模糊查询</td>
</tr>
<tr>
<td style="text-align:left">NotLike</td>
<td style="text-align:left">非 Like 查询</td>
<td style="text-align:left">与 SQL 一致，需要在值中包含百分号 %，代表模糊查询</td>
</tr>
</tbody>
</table>
<h3 id="order-对象"><a class="header-anchor" href="#order-对象">#</a> Order 对象</h3>
<p>可以向内容列表 API 传递 Order 对象数组，用于指定内容排序规则，系统将按指定的排序规则返回内容集合。</p>
<p>Order 对象说明：</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">必填项</th>
<th style="text-align:left">JSON 类型</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">column</td>
<td style="text-align:left">内容字段</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">可以是内容实体Content中存在的任意字段</td>
</tr>
<tr>
<td style="text-align:left">desc</td>
<td style="text-align:left">倒叙</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">布尔值</td>
<td style="text-align:left">指定排序规则，true 代表倒叙，false 代表正序</td>
</tr>
</tbody>
</table>
<h3 id="返回-body"><a class="header-anchor" href="#返回-body">#</a> 返回 Body</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">totalCount</td>
<td style="text-align:left">总项</td>
<td style="text-align:left">符合查询条件的内容总数</td>
</tr>
<tr>
<td style="text-align:left">contents</td>
<td style="text-align:left">内容列表</td>
<td style="text-align:left">Content 列表</td>
</tr>
</tbody>
</table>
<h3 id="示例-1"><a class="header-anchor" href="#示例-1">#</a> 示例 1</h3>
<p>以下请求将返回站点Id为1的已审核内容，每页显示30条，返回第一页。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/contents HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  &quot;siteId&quot;: 1,
  &quot;checked&quot;: true,
  &quot;page&quot;: 1,
  &quot;perPage&quot;: 30
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="示例-2"><a class="header-anchor" href="#示例-2">#</a> 示例 2</h3>
<p>搜索内容作者等于“张三”的所有内容并返回结果。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/contents HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  &quot;siteId&quot;: 1,
  &quot;wheres&quot;: [
      {
          &quot;column&quot;: &quot;Author&quot;,
          &quot;operator&quot;: &quot;=&quot;,
          &quot;value&quot;: &quot;张三&quot;
      }
  ]
  &quot;page&quot;: 1,
  &quot;perPage&quot;: 30
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="示例-3"><a class="header-anchor" href="#示例-3">#</a> 示例 3</h3>
<p>搜索栏目Id为10的所有已审核内容。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/contents HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  &quot;siteId&quot;: 1,
  &quot;channelId&quot;: 10,
  &quot;checked&quot;: true,
  &quot;page&quot;: 1,
  &quot;perPage&quot;: 30
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="示例-4"><a class="header-anchor" href="#示例-4">#</a> 示例 4</h3>
<p>按最后编辑时间的倒序排序并返回结果。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/contents HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  &quot;siteId&quot;: 1,
  &quot;checked&quot;: true,
  &quot;orders&quot;: [
      {
          &quot;column&quot;: &quot;LastEditDate&quot;,
          &quot;desc&quot;: true,
      }
  ]
  &quot;page&quot;: 1,
  &quot;perPage&quot;: 30
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="示例-5"><a class="header-anchor" href="#示例-5">#</a> 示例 5</h3>
<p>搜索内容标题包含“中国”的所有内容并返回结果。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/contents HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  &quot;siteId&quot;: 1,
  &quot;wheres&quot;: [
      {
          &quot;column&quot;: &quot;Title&quot;,
          &quot;operator&quot;: &quot;Like&quot;,
          &quot;value&quot;: &quot;%中国%&quot;
      }
  ]
  &quot;page&quot;: 1,
  &quot;perPage&quot;: 30
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>