<template><h1 id="修改内容-api"><a class="header-anchor" href="#修改内容-api">#</a> 修改内容 API</h1>
<p>修改内容，使用PUT发起请求，请求地址为<code>/api/v1/contents/{siteId}/{channelId}/{id}</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PUT /api/v1/contents/{siteId}/{channelId}/{id} HTTP/1.1
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
<h3 id="请求-body"><a class="header-anchor" href="#请求-body">#</a> 请求 Body</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">AddUserName</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">添加人</td>
</tr>
<tr>
<td style="text-align:left">LastEditUserName</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">修改人</td>
</tr>
<tr>
<td style="text-align:left">WritingUserName</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">投稿人</td>
</tr>
<tr>
<td style="text-align:left">LastEditDate</td>
<td style="text-align:left">日期</td>
<td style="text-align:left">否</td>
<td style="text-align:left">修改时间</td>
</tr>
<tr>
<td style="text-align:left">Taxis</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">否</td>
<td style="text-align:left">排序</td>
</tr>
<tr>
<td style="text-align:left">GroupNameCollection</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">内容组</td>
</tr>
<tr>
<td style="text-align:left">Tags</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">标签</td>
</tr>
<tr>
<td style="text-align:left">SourceId</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">否</td>
<td style="text-align:left">来源内容Id，对应内容表的 Id 字段</td>
</tr>
<tr>
<td style="text-align:left">ReferenceId</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">否</td>
<td style="text-align:left">引用内容Id，对应内容表的 Id 字段</td>
</tr>
<tr>
<td style="text-align:left">IsChecked</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否终审通过通过</td>
</tr>
<tr>
<td style="text-align:left">CheckedLevel</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">否</td>
<td style="text-align:left">未终审通过情况下，处于第几级审核状态</td>
</tr>
<tr>
<td style="text-align:left">Hits</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">否</td>
<td style="text-align:left">总点击量</td>
</tr>
<tr>
<td style="text-align:left">HitsByDay</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">否</td>
<td style="text-align:left">日点击</td>
</tr>
<tr>
<td style="text-align:left">HitsByWeek</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">否</td>
<td style="text-align:left">周点击</td>
</tr>
<tr>
<td style="text-align:left">HitsByMonth</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">否</td>
<td style="text-align:left">月点击</td>
</tr>
<tr>
<td style="text-align:left">LastHitsDate</td>
<td style="text-align:left">日期</td>
<td style="text-align:left">否</td>
<td style="text-align:left">最后点击时间</td>
</tr>
<tr>
<td style="text-align:left">Title</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">是</td>
<td style="text-align:left">内容标题</td>
</tr>
<tr>
<td style="text-align:left">IsTop</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否置顶内容</td>
</tr>
<tr>
<td style="text-align:left">IsRecommend</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否推荐内容</td>
</tr>
<tr>
<td style="text-align:left">IsHot</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否热点内容</td>
</tr>
<tr>
<td style="text-align:left">IsColor</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否醒目内容</td>
</tr>
<tr>
<td style="text-align:left">LinkUrl</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">外部链接，设置后链接将指向此地址</td>
</tr>
<tr>
<td style="text-align:left">AddDate</td>
<td style="text-align:left">日期</td>
<td style="text-align:left">否</td>
<td style="text-align:left">添加时间</td>
</tr>
<tr>
<td style="text-align:left">SubTitle</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">内容副标题</td>
</tr>
<tr>
<td style="text-align:left">ImageUrl</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">内容图片，存储图片地址</td>
</tr>
<tr>
<td style="text-align:left">VideoUrl</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">内容视频，存储视频地址</td>
</tr>
<tr>
<td style="text-align:left">FileUrl</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">内容附件，存储附件地址</td>
</tr>
<tr>
<td style="text-align:left">Content</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">内容正文，以编辑器提交信息</td>
</tr>
<tr>
<td style="text-align:left">Summary</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">内容摘要</td>
</tr>
<tr>
<td style="text-align:left">Author</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">作者</td>
</tr>
<tr>
<td style="text-align:left">Source</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">来源</td>
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PUT /api/v1/contents/1325/1344/11001 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  &quot;title&quot;: &quot;标题2&quot;,
  &quot;content&quot;: &quot;内容正文2&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="返回示例"><a class="header-anchor" href="#返回示例">#</a> 返回示例</h4>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"标题2"</span><span class="token punctuation">,</span>
        <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"内容正文2"</span><span class="token punctuation">,</span>
        <span class="token property">"siteId"</span><span class="token operator">:</span> <span class="token number">1325</span><span class="token punctuation">,</span>
        <span class="token property">"channelId"</span><span class="token operator">:</span> <span class="token number">1344</span><span class="token punctuation">,</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">11001</span><span class="token punctuation">,</span>
        <span class="token property">"lastEditDate"</span><span class="token operator">:</span> <span class="token string">"2018-08-15 11:46:17"</span><span class="token punctuation">,</span>
        <span class="token property">"navigationUrl"</span><span class="token operator">:</span> <span class="token string">"http://127.0.0.1/test17/news/201808/11001.html"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></template>