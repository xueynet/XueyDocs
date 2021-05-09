<template><h1 id="获取数据库列表-api"><a class="header-anchor" href="#获取数据库列表-api">#</a> 获取数据库列表 API</h1>
<p>获取数据库列表接口</p>
<p>使用<code>GET</code>发起请求，请求地址为<code>/api/v1/stl/sqlContents</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/stl/sqlContents HTTP/1.1
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
<td style="text-align:left">apiKey</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">API 密钥，请参考身份认证</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><code>/api/v1/stl/sqlContents</code>的其他参数与<code>&lt;stl:sqlContents&gt;</code>标签一致。</p>
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
<td style="text-align:left">对象列表</td>
<td style="text-align:left">返回数据库对象列表</td>
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/stl/sqlContents?queryString=SELECT * FROM siteserver_Site HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="返回示例"><a class="header-anchor" href="#返回示例">#</a> 返回示例</h4>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1116</span><span class="token punctuation">,</span>
            <span class="token property">"siteName"</span><span class="token operator">:</span> <span class="token string">"我的站点"</span><span class="token punctuation">,</span>
            <span class="token property">"siteDir"</span><span class="token operator">:</span> <span class="token string">"test2"</span><span class="token punctuation">,</span>
            <span class="token property">"tableName"</span><span class="token operator">:</span> <span class="token string">"model_Content"</span><span class="token punctuation">,</span>
            <span class="token property">"isRoot"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
            <span class="token property">"parentId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">"taxis"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token property">"settingsXml"</span><span class="token operator">:</span> <span class="token string">"charset=utf-8&amp;configexporttype=ContentExcel&amp;configexportperiods=0&amp;configexportdisplayattributes=Id,Title,LinkUrl,AddDate,Hits,GroupNameCollection,Tags,FreeReadings,FullReadingPrice,PaidReadings,PaperPrice,SubTitle,ImageUrl,VideoUrl,FileUrl,Content,Summary,Author,Source&amp;configexportischecked=All&amp;apiurl=/api&amp;homeurl=/home&amp;ismultideployment=False&amp;iscreatedoubleclick=True&amp;siteurl=/Magazine&amp;outersiteurl=/Magazine&amp;innersiteurl=/Magazine&amp;outerapiurl=/api&amp;innerapiurl=/api&amp;pagesize=3&amp;configselectimagecurrenturl=upload/images&amp;configuploadimageistitleimage=False&amp;configuploadimagetitleimagewidth=152&amp;configuploadimagetitleimageheight=109&amp;configuploadimageistitleimagelesssizenotthumb=False&amp;configuploadimageisshowimageintexteditor=False&amp;configuploadimageislinktooriginal=False&amp;configuploadimageissmallimage=False&amp;configuploadimagesmallimagewidth=500&amp;configuploadimagesmallimageheight=&amp;configuploadimageissmallimagelesssizenotthumb=False&amp;isseparatedweb=False&amp;separatedweburl=http://web.chinacampus.org&amp;issaveimageintexteditor=True&amp;isautopageintexteditor=False&amp;autopagewordnum=1500&amp;iscontenttitlebreakline=False&amp;lisautocheckkeywords=False&amp;ischeckcontentlevel=False"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1288</span><span class="token punctuation">,</span>
            <span class="token property">"siteName"</span><span class="token operator">:</span> <span class="token string">"cc"</span><span class="token punctuation">,</span>
            <span class="token property">"siteDir"</span><span class="token operator">:</span> <span class="token string">"cc"</span><span class="token punctuation">,</span>
            <span class="token property">"tableName"</span><span class="token operator">:</span> <span class="token string">"model_Content"</span><span class="token punctuation">,</span>
            <span class="token property">"isRoot"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
            <span class="token property">"parentId"</span><span class="token operator">:</span> <span class="token number">1219</span><span class="token punctuation">,</span>
            <span class="token property">"taxis"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
            <span class="token property">"settingsXml"</span><span class="token operator">:</span> <span class="token string">"ischeckcontentlevel=False&amp;charset=utf-8"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1292</span><span class="token punctuation">,</span>
            <span class="token property">"siteName"</span><span class="token operator">:</span> <span class="token string">"test11"</span><span class="token punctuation">,</span>
            <span class="token property">"siteDir"</span><span class="token operator">:</span> <span class="token string">"test11"</span><span class="token punctuation">,</span>
            <span class="token property">"tableName"</span><span class="token operator">:</span> <span class="token string">"model_Content"</span><span class="token punctuation">,</span>
            <span class="token property">"isRoot"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
            <span class="token property">"parentId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">"taxis"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token property">"settingsXml"</span><span class="token operator">:</span> <span class="token string">"charset=utf-8&amp;configuploadimageistitleimage=True&amp;configuploadimagetitleimagewidth=300&amp;configuploadimagetitleimageheight=&amp;configuploadimageistitleimagelesssizenotthumb=False&amp;configuploadimageisshowimageintexteditor=True&amp;configuploadimageislinktooriginal=False&amp;configuploadimageissmallimage=True&amp;configuploadimagesmallimagewidth=500&amp;configuploadimagesmallimageheight=&amp;configuploadimageissmallimagelesssizenotthumb=False&amp;mingzi=SiteServer&amp;gongsi=CMS&amp;apiurl=/api&amp;homeurl=/home&amp;ismultideployment=False&amp;iscreatedoubleclick=False&amp;outerurl=&amp;innerurl=&amp;isseparatedweb=False"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></template>