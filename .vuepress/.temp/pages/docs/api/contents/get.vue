<template><h1 id="获取内容-api"><a class="header-anchor" href="#获取内容-api">#</a> 获取内容 API</h1>
<p>获取内容，使用GET发起请求，请求地址为<code>/api/v1/contents/{siteId}/{channelId}/{id}</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/contents/{siteId}/{channelId}/{id} HTTP/1.1
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/contents/1767/1776/11000 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="返回示例"><a class="header-anchor" href="#返回示例">#</a> 返回示例</h4>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">11000</span><span class="token punctuation">,</span>
    <span class="token property">"channelId"</span><span class="token operator">:</span> <span class="token number">1776</span><span class="token punctuation">,</span>
    <span class="token property">"siteId"</span><span class="token operator">:</span> <span class="token number">1767</span><span class="token punctuation">,</span>
    <span class="token property">"addUserName"</span><span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
    <span class="token property">"lastEditUserName"</span><span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
    <span class="token property">"writingUserName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"lastEditDate"</span><span class="token operator">:</span> <span class="token string">"2018-07-11 11:18:39"</span><span class="token punctuation">,</span>
    <span class="token property">"taxis"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">"groupNameCollection"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"sourceId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"referenceId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"isChecked"</span><span class="token operator">:</span> <span class="token string">"True"</span><span class="token punctuation">,</span>
    <span class="token property">"checkedLevel"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"hits"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"hitsByDay"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"hitsByWeek"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"hitsByMonth"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"lastHitsDate"</span><span class="token operator">:</span> <span class="token string">"2018-01-20 13:48:00"</span><span class="token punctuation">,</span>
    <span class="token property">"settingsXml"</span><span class="token operator">:</span> <span class="token string">"{\"titleformatstring\":\"False_False_False_\",\"check_isadmin\":\"True\",\"check_username\":\"siteserver\",\"check_checkdate\":\"2018-01-20 13:48\"}"</span><span class="token punctuation">,</span>
    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"简化租房流程，公寓租赁网站 Apartment List 获C轮5000万美元融资"</span><span class="token punctuation">,</span>
    <span class="token property">"isTop"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
    <span class="token property">"isRecommend"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
    <span class="token property">"isHot"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
    <span class="token property">"isColor"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
    <span class="token property">"linkUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"addDate"</span><span class="token operator">:</span> <span class="token string">"2018-01-20 13:47:46"</span><span class="token punctuation">,</span>
    <span class="token property">"subTitle"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"imageUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"videoUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"fileUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"&lt;p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; word-wrap: break-word; color: rgb(61, 70, 77); font-family: &amp;quot;PingFang SC&amp;quot;, &amp;quot;Lantinghei SC&amp;quot;, &amp;quot;Helvetica Neue&amp;quot;, Helvetica, Arial, &amp;quot;Microsoft YaHei&amp;quot;, &amp;quot;\\\\5FAE软雅黑&amp;quot;, STHeitiSC-Light, simsun, &amp;quot;\\\\5B8B体&amp;quot;, &amp;quot;WenQuanYi Zen Hei&amp;quot;, &amp;quot;WenQuanYi Micro Hei&amp;quot;, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);\">&lt;span style=\"box-sizing: border-box; font-weight: 600;\">36氪获悉，公寓租赁网站「Apartment List」近日C轮获5000万美元融资，由Passport Capital领投，Allen &amp;amp; Company LLC、Canaan Partners、Matrix Partners、Industry Ventures、Quantum Partners LP、Tenaya Capital和WTI联合投资。&lt;/span>此前，36氪也对这家公司进行过&lt;a href=\"http://36kr.com/p/5055809.html\" target=\"_blank\" style=\"box-sizing: border-box; background-color: transparent; text-decoration-line: none; color: rgb(61, 70, 77); transition: all 0.2s ease; border-style: solid; border-width: 0px 0px 1px; border-color: rgb(153, 153, 153); padding: 0px 0px 1px; word-wrap: break-word;\">报道&lt;/a>。&lt;/p>&lt;p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; word-wrap: break-word; color: rgb(61, 70, 77); font-family: &amp;quot;PingFang SC&amp;quot;, &amp;quot;Lantinghei SC&amp;quot;, &amp;quot;Helvetica Neue&amp;quot;, Helvetica, Arial, &amp;quot;Microsoft YaHei&amp;quot;, &amp;quot;\\\\5FAE软雅黑&amp;quot;, STHeitiSC-Light, simsun, &amp;quot;\\\\5B8B体&amp;quot;, &amp;quot;WenQuanYi Zen Hei&amp;quot;, &amp;quot;WenQuanYi Micro Hei&amp;quot;, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);\">Apartment List成立于2011年，位于加州旧金山，由约翰·科布斯（John Kobs）创立。它为租户提供一个跨平台的app，将租户和全美国的出租房源连接起来，利用多种类型的问题、手动筛选器和可视化地图及图像为用户选择合适的房源。Apartment List的业务不仅仅局限于公寓搜索，还涉及后期的相关业务，包括租赁合同签订和每月租金支付等。&lt;/p>&lt;p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; word-wrap: break-word; color: rgb(61, 70, 77); font-family: &amp;quot;PingFang SC&amp;quot;, &amp;quot;Lantinghei SC&amp;quot;, &amp;quot;Helvetica Neue&amp;quot;, Helvetica, Arial, &amp;quot;Microsoft YaHei&amp;quot;, &amp;quot;\\\\5FAE软雅黑&amp;quot;, STHeitiSC-Light, simsun, &amp;quot;\\\\5B8B体&amp;quot;, &amp;quot;WenQuanYi Zen Hei&amp;quot;, &amp;quot;WenQuanYi Micro Hei&amp;quot;, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);\">据&lt;a href=\"http://www.nmhc.org/Content.aspx?id=4708#large_cities\" target=\"_blank\" style=\"box-sizing: border-box; background-color: transparent; text-decoration-line: none; color: rgb(61, 70, 77); transition: all 0.2s ease; border-style: solid; border-width: 0px 0px 1px; border-color: rgb(153, 153, 153); padding: 0px 0px 1px; word-wrap: break-word;\">美国国家共享住房委员会&lt;/a>（National Multifamily Housing Council）估计，目前美国大约有4300万户家庭，37%是租户。在房源紧张的大城市，共享住房是家庭租赁的重要选择。因此，租赁网站的竞争十分激烈，而Apartment List成为一直站稳脚跟的公司之一。&lt;/p>&lt;p>&lt;br/>&lt;/p>"</span><span class="token punctuation">,</span>
    <span class="token property">"summary"</span><span class="token operator">:</span> <span class="token string">"科布斯表示，“我们是唯一一个这么收费的公司。”"</span><span class="token punctuation">,</span>
    <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"titleformatstring"</span><span class="token operator">:</span> <span class="token string">"False_False_False_"</span><span class="token punctuation">,</span>
    <span class="token property">"check_isadmin"</span><span class="token operator">:</span> <span class="token string">"True"</span><span class="token punctuation">,</span>
    <span class="token property">"check_username"</span><span class="token operator">:</span> <span class="token string">"siteserver"</span><span class="token punctuation">,</span>
    <span class="token property">"check_checkdate"</span><span class="token operator">:</span> <span class="token string">"2018-01-20 13:48"</span><span class="token punctuation">,</span>
    <span class="token property">"navigationUrl"</span><span class="token operator">:</span> <span class="token string">"/test16/contents/1776/11000.html"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div></template>