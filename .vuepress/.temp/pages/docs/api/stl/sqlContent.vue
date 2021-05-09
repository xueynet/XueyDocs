<template><h1 id="获取数据库值-api"><a class="header-anchor" href="#获取数据库值-api">#</a> 获取数据库值 API</h1>
<p>获取数据库值，系统将根据参数计算出对应的数据库值</p>
<p>使用<code>GET</code>发起请求，请求地址为<code>/api/v1/stl/sqlContent</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/stl/sqlContent HTTP/1.1
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
<td style="text-align:left">queryString</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">是</td>
<td style="text-align:left">SQL 语句</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">具体字段名</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">apiKey</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">API 密钥，请参考身份认证</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><code>/api/v1/stl/sqlContent</code>的其他参数与<code>&lt;stl:sqlContent&gt;</code>标签一致。</p>
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
<td style="text-align:left">值或对象</td>
<td style="text-align:left">根据type参数的不同，返回不同的value值，如果不传type参数，将返回整个数据库对象</td>
</tr>
<tr>
<td style="text-align:left">401 Unauthorized</td>
<td style="text-align:left">Error</td>
<td style="text-align:left">认证错误</td>
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/stl/sqlContent?queryString=SELECT * FROM siteserver_Site HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="返回示例"><a class="header-anchor" href="#返回示例">#</a> 返回示例</h4>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1072</span><span class="token punctuation">,</span>
        <span class="token property">"siteName"</span><span class="token operator">:</span> <span class="token string">"test10"</span><span class="token punctuation">,</span>
        <span class="token property">"siteDir"</span><span class="token operator">:</span> <span class="token string">"test10"</span><span class="token punctuation">,</span>
        <span class="token property">"tableName"</span><span class="token operator">:</span> <span class="token string">"model_Content"</span><span class="token punctuation">,</span>
        <span class="token property">"isRoot"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
        <span class="token property">"parentId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"taxis"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">"settingsXml"</span><span class="token operator">:</span> <span class="token string">"charset=utf-8&amp;logo=@/upload/images/2018/1/20164526348.png&amp;configuploadimageistitleimage=False&amp;configuploadimagetitleimagewidth=300&amp;configuploadimagetitleimageheight=&amp;configuploadimageistitleimagelesssizenotthumb=False&amp;configuploadimageisshowimageintexteditor=False&amp;configuploadimageislinktooriginal=False&amp;configuploadimageissmallimage=True&amp;configuploadimagesmallimagewidth=500&amp;configuploadimagesmallimageheight=&amp;configuploadimageissmallimagelesssizenotthumb=False&amp;ismultideployment=False&amp;outerurl=&amp;innerurl=&amp;apiurl=/api&amp;homeurl=/home&amp;isseparatedweb=False&amp;iscreatedoubleclick=False"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>