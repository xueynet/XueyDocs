<template><h1 id="新增栏目-api"><a class="header-anchor" href="#新增栏目-api">#</a> 新增栏目 API</h1>
<p>新增栏目，使用POST发起请求，请求地址为<code>/api/v1/channels/{siteId}</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/channels/{siteId} HTTP/1.1
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
<td style="text-align:left">ParentId</td>
<td style="text-align:left">整数</td>
<td style="text-align:left">否</td>
<td style="text-align:left">父栏目 Id</td>
</tr>
<tr>
<td style="text-align:left">ChannelName</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">是</td>
<td style="text-align:left">栏目名称</td>
</tr>
<tr>
<td style="text-align:left">IndexName</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">栏目索引</td>
</tr>
<tr>
<td style="text-align:left">FilePath</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">生成页面地址</td>
</tr>
<tr>
<td style="text-align:left">ChannelFilePathRule</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">下级栏目的页面命名规则</td>
</tr>
<tr>
<td style="text-align:left">ContentFilePathRule</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">栏目下内容的页面命名规则</td>
</tr>
<tr>
<td style="text-align:left">GroupNameCollection</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">栏目组</td>
</tr>
<tr>
<td style="text-align:left">ImageUrl</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">栏目图片，存储图片地址</td>
</tr>
<tr>
<td style="text-align:left">Content</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">栏目正文，以编辑器提交信息</td>
</tr>
<tr>
<td style="text-align:left">Keywords</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">关键字列表，各关键词间用英文逗号“,”分割</td>
</tr>
<tr>
<td style="text-align:left">Description</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">页面描述</td>
</tr>
<tr>
<td style="text-align:left">LinkUrl</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">外部链接，设置后链接将指向此地址</td>
</tr>
<tr>
<td style="text-align:left">LinkType</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">链接类型，设置此栏目的链接与子栏目及内容的关系</td>
</tr>
<tr>
<td style="text-align:left">ChannelTemplateId</td>
<td style="text-align:left">整数</td>
<td style="text-align:left">否</td>
<td style="text-align:left">栏目模板 Id</td>
</tr>
<tr>
<td style="text-align:left">ContentTemplateId</td>
<td style="text-align:left">整数</td>
<td style="text-align:left">否</td>
<td style="text-align:left">内容模板 Id</td>
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
<td style="text-align:left">Channel</td>
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
<h3 id="示例-1"><a class="header-anchor" href="#示例-1">#</a> 示例 1</h3>
<p>以下请求将在站点首页下创建新栏目。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/channels/1476 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  &quot;channelName&quot;: &quot;栏目标题&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="示例-2"><a class="header-anchor" href="#示例-2">#</a> 示例 2</h3>
<p>以下请求将在站点指定栏目下创建新栏目，同时设置栏目索引。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/channels/1476 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  &quot;parentId&quot;: 1481,
  &quot;channelName&quot;: &quot;栏目标题&quot;,
  &quot;channelIndex&quot;: &quot;栏目索引&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>