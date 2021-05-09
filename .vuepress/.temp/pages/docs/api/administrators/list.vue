<template><h1 id="获取管理员列表-api"><a class="header-anchor" href="#获取管理员列表-api">#</a> 获取管理员列表 API</h1>
<p>获取管理员列表，使用GET发起请求，请求地址为<code>/api/v1/administrators</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/administrators HTTP/1.1
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
<td style="text-align:left">Administrator列表</td>
<td style="text-align:left">管理员列表</td>
</tr>
<tr>
<td style="text-align:left">401 Unauthorized</td>
<td style="text-align:left">Error</td>
<td style="text-align:left">认证错误</td>
</tr>
</tbody>
</table>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<h4 id="请求示例"><a class="header-anchor" href="#请求示例">#</a> 请求示例</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/administrators HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="返回示例"><a class="header-anchor" href="#返回示例">#</a> 返回示例</h4>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"userName"</span><span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
        <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"oMT9l/vib+qpD6yV5NJwdw=="</span><span class="token punctuation">,</span>
        <span class="token property">"passwordFormat"</span><span class="token operator">:</span> <span class="token string">"Encrypted"</span><span class="token punctuation">,</span>
        <span class="token property">"passwordSalt"</span><span class="token operator">:</span> <span class="token string">"tKHgfZWkSRSbT6GKYyaoNA=="</span><span class="token punctuation">,</span>
        <span class="token property">"creationDate"</span><span class="token operator">:</span> <span class="token string">"2018-01-23 13:31:43"</span><span class="token punctuation">,</span>
        <span class="token property">"lastActivityDate"</span><span class="token operator">:</span> <span class="token string">"2018-06-29 14:29:16"</span><span class="token punctuation">,</span>
        <span class="token property">"countOfLogin"</span><span class="token operator">:</span> <span class="token number">87</span><span class="token punctuation">,</span>
        <span class="token property">"countOfFailedLogin"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"creatorUserName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"isLockedOut"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">"siteIdCollection"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"siteId"</span><span class="token operator">:</span> <span class="token number">1325</span><span class="token punctuation">,</span>
        <span class="token property">"departmentId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"areaId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"displayName"</span><span class="token operator">:</span> <span class="token string">"admin2"</span><span class="token punctuation">,</span>
        <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"admin@corp.com"</span><span class="token punctuation">,</span>
        <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">""</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">"userName"</span><span class="token operator">:</span> <span class="token string">"test1"</span><span class="token punctuation">,</span>
        <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"Kn580ZFQAPI="</span><span class="token punctuation">,</span>
        <span class="token property">"passwordFormat"</span><span class="token operator">:</span> <span class="token string">"Encrypted"</span><span class="token punctuation">,</span>
        <span class="token property">"passwordSalt"</span><span class="token operator">:</span> <span class="token string">"3D7VAcdEN3UJ2OWbbT3WvA=="</span><span class="token punctuation">,</span>
        <span class="token property">"creationDate"</span><span class="token operator">:</span> <span class="token string">"2018-02-27 11:49:11"</span><span class="token punctuation">,</span>
        <span class="token property">"lastActivityDate"</span><span class="token operator">:</span> <span class="token string">"2018-06-06 08:10:13"</span><span class="token punctuation">,</span>
        <span class="token property">"countOfLogin"</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
        <span class="token property">"countOfFailedLogin"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"creatorUserName"</span><span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
        <span class="token property">"isLockedOut"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">"siteIdCollection"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"siteId"</span><span class="token operator">:</span> <span class="token number">1072</span><span class="token punctuation">,</span>
        <span class="token property">"departmentId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"areaId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"displayName"</span><span class="token operator">:</span> <span class="token string">"测试1"</span><span class="token punctuation">,</span>
        <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"test1@tst.com"</span><span class="token punctuation">,</span>
        <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">""</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">"userName"</span><span class="token operator">:</span> <span class="token string">"site1"</span><span class="token punctuation">,</span>
        <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"Rg/1cPbsW8k="</span><span class="token punctuation">,</span>
        <span class="token property">"passwordFormat"</span><span class="token operator">:</span> <span class="token string">"Encrypted"</span><span class="token punctuation">,</span>
        <span class="token property">"passwordSalt"</span><span class="token operator">:</span> <span class="token string">"N0lz/kw8TQ3SrQiFdu4/PA=="</span><span class="token punctuation">,</span>
        <span class="token property">"creationDate"</span><span class="token operator">:</span> <span class="token string">"2018-05-27 23:56:23"</span><span class="token punctuation">,</span>
        <span class="token property">"lastActivityDate"</span><span class="token operator">:</span> <span class="token string">"2018-05-27 23:57:03"</span><span class="token punctuation">,</span>
        <span class="token property">"countOfLogin"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"countOfFailedLogin"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"creatorUserName"</span><span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
        <span class="token property">"isLockedOut"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">"siteIdCollection"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"siteId"</span><span class="token operator">:</span> <span class="token number">1072</span><span class="token punctuation">,</span>
        <span class="token property">"departmentId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"areaId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"displayName"</span><span class="token operator">:</span> <span class="token string">"site1"</span><span class="token punctuation">,</span>
        <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">""</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div></template>