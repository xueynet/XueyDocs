<template><h1 id="删除内容-api"><a class="header-anchor" href="#删除内容-api">#</a> 删除内容 API</h1>
<p>删除内容，使用DELETE发起请求，请求地址为<code>/api/v1/contents/{siteId}/{channelId}/{id}</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>DELETE /api/v1/contents/{siteId}/{channelId}/{id} HTTP/1.1
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
<td style="text-align:left">siteId</td>
<td style="text-align:left">path</td>
<td style="text-align:left">整数</td>
<td style="text-align:left">是</td>
<td style="text-align:left">站点Id</td>
</tr>
<tr>
<td style="text-align:left">channelId</td>
<td style="text-align:left">path</td>
<td style="text-align:left">整数</td>
<td style="text-align:left">是</td>
<td style="text-align:left">栏目Id</td>
</tr>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">path</td>
<td style="text-align:left">整数</td>
<td style="text-align:left">是</td>
<td style="text-align:left">内容Id</td>
</tr>
<tr>
<td style="text-align:left">apiKey</td>
<td style="text-align:left">query</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">API 密钥，请参考身份认证</td>
</tr>
</tbody>
</table>
<h3 id="返回"><a class="header-anchor" href="#返回">#</a> 返回</h3>
<table>
<thead>
<tr>
<th style="text-align:left">名称</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">200 OK</td>
<td style="text-align:left">Content</td>
<td style="text-align:left">内容</td>
</tr>
<tr>
<td style="text-align:left">401 Unauthorized</td>
<td style="text-align:left">Error</td>
<td style="text-align:left">认证错误</td>
</tr>
<tr>
<td style="text-align:left">404 NotFound</td>
<td style="text-align:left">Error</td>
<td style="text-align:left">资源不存在错误</td>
</tr>
<tr>
<td style="text-align:left">400 BadRequest</td>
<td style="text-align:left">Error</td>
<td style="text-align:left">参数错误</td>
</tr>
</tbody>
</table>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<h4 id="请求示例"><a class="header-anchor" href="#请求示例">#</a> 请求示例</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>DELETE /api/v1/contents/1325/1344/11001 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="返回示例"><a class="header-anchor" href="#返回示例">#</a> 返回示例</h4>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">11001</span><span class="token punctuation">,</span>
    <span class="token property">"channelId"</span><span class="token operator">:</span> <span class="token number">1344</span><span class="token punctuation">,</span>
    <span class="token property">"siteId"</span><span class="token operator">:</span> <span class="token number">1325</span><span class="token punctuation">,</span>
    <span class="token property">"addUserName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"lastEditUserName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"writingUserName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"lastEditDate"</span><span class="token operator">:</span> <span class="token string">"2018-08-15 11:46:17"</span><span class="token punctuation">,</span>
    <span class="token property">"taxis"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"groupNameCollection"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"sourceId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"referenceId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"isChecked"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
    <span class="token property">"checkedLevel"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"hits"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"hitsByDay"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"hitsByWeek"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"hitsByMonth"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"lastHitsDate"</span><span class="token operator">:</span> <span class="token string">"2018-08-15 11:46:17"</span><span class="token punctuation">,</span>
    <span class="token property">"settingsXml"</span><span class="token operator">:</span> <span class="token string">"{}"</span><span class="token punctuation">,</span>
    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"标题2"</span><span class="token punctuation">,</span>
    <span class="token property">"isTop"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
    <span class="token property">"isRecommend"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
    <span class="token property">"isHot"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
    <span class="token property">"isColor"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
    <span class="token property">"linkUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"addDate"</span><span class="token operator">:</span> <span class="token string">"2018-08-15 11:46:17"</span><span class="token punctuation">,</span>
    <span class="token property">"subTitle"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"imageUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"videoUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"fileUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"内容正文2"</span><span class="token punctuation">,</span>
    <span class="token property">"summary"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"navigationUrl"</span><span class="token operator">:</span> <span class="token string">"http://127.0.0.1/test17/news/201808/11001.html"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div></template>