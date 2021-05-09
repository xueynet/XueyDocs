<template><h1 id="获取内容列表-api"><a class="header-anchor" href="#获取内容列表-api">#</a> 获取内容列表 API</h1>
<p>获取内容列表接口</p>
<p>使用<code>GET</code>发起请求，请求地址为<code>/api/v1/stl/contents</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/stl/contents HTTP/1.1
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
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">站点Id</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">siteDir</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">站点文件夹</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">channelId</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">栏目Id</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">channelIndex</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">栏目索引</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">channelName</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">栏目名称</td>
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
<p><code>/api/v1/stl/contents</code>的其他参数与<code>&lt;stl:contents&gt;</code>标签一致。</p>
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
<td style="text-align:left">Content 列表</td>
<td style="text-align:left">内容列表</td>
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/stl/contents?siteId=1&amp;channelId=1118 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="返回示例"><a class="header-anchor" href="#返回示例">#</a> 返回示例</h4>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1525</span><span class="token punctuation">,</span>
      <span class="token property">"channelId"</span><span class="token operator">:</span> <span class="token number">1118</span><span class="token punctuation">,</span>
      <span class="token property">"siteId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"addUserName"</span><span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
      <span class="token property">"lastEditUserName"</span><span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
      <span class="token property">"writingUserName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"lastEditDate"</span><span class="token operator">:</span> <span class="token string">"2018-05-21 10:13:00"</span><span class="token punctuation">,</span>
      <span class="token property">"taxis"</span><span class="token operator">:</span> <span class="token number">2000000001</span><span class="token punctuation">,</span>
      <span class="token property">"groupNameCollection"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"sourceId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"referenceId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"isChecked"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"checkedLevel"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"hits"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
      <span class="token property">"hitsByDay"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"hitsByWeek"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">"hitsByMonth"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
      <span class="token property">"lastHitsDate"</span><span class="token operator">:</span> <span class="token string">"2018-05-23 00:00:00"</span><span class="token punctuation">,</span>
      <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"雪山深处， 永远热泪盈眶的年轻"</span><span class="token punctuation">,</span>
      <span class="token property">"isTop"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"isRecommend"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"isHot"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"isColor"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"addDate"</span><span class="token operator">:</span> <span class="token string">"2018-02-23 10:32:00"</span><span class="token punctuation">,</span>
      <span class="token property">"linkUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"settingsXml"</span><span class="token operator">:</span> <span class="token string">"comments=0&amp;photos=0&amp;freereadings=&amp;paidreadings=&amp;fullreadingprice=&amp;paperprice=&amp;titleformatstring=False_False_False_&amp;check_isadmin=True&amp;check_username=admin&amp;check_checkdate=2018-05-21 10:13&amp;check_reasons="</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1524</span><span class="token punctuation">,</span>
      <span class="token property">"channelId"</span><span class="token operator">:</span> <span class="token number">1118</span><span class="token punctuation">,</span>
      <span class="token property">"siteId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"addUserName"</span><span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
      <span class="token property">"lastEditUserName"</span><span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
      <span class="token property">"writingUserName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"lastEditDate"</span><span class="token operator">:</span> <span class="token string">"2018-02-27 15:45:00"</span><span class="token punctuation">,</span>
      <span class="token property">"taxis"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"groupNameCollection"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"sourceId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"referenceId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"isChecked"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"checkedLevel"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"hits"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"hitsByDay"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"hitsByWeek"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"hitsByMonth"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"lastHitsDate"</span><span class="token operator">:</span> <span class="token string">"2018-05-06 00:00:00"</span><span class="token punctuation">,</span>
      <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"京津冀大学生舞热冰雪白飘带"</span><span class="token punctuation">,</span>
      <span class="token property">"isTop"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"isRecommend"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"isHot"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"isColor"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"addDate"</span><span class="token operator">:</span> <span class="token string">"2018-02-22 10:51:00"</span><span class="token punctuation">,</span>
      <span class="token property">"linkUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"settingsXml"</span><span class="token operator">:</span> <span class="token string">"comments=0&amp;photos=0&amp;freereadings=&amp;paidreadings=&amp;fullreadingprice=&amp;paperprice=&amp;titleformatstring=False_False_False_&amp;check_isadmin=True&amp;check_username=雪之浪漫&amp;check_checkdate=2018-02-22 11:01"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div></template>