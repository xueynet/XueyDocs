<template><h1 id="上传用户头像-api"><a class="header-anchor" href="#上传用户头像-api">#</a> 上传用户头像 API</h1>
<p>上传用户头像，使用<code>POST</code>发起请求，请求地址为<code>/api/v1/users/{id}/avatar</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/users/{id}/avatar HTTP/1.1
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
<td style="text-align:left">id</td>
<td style="text-align:left">path</td>
<td style="text-align:left">整数</td>
<td style="text-align:left">是</td>
<td style="text-align:left">用户Id</td>
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
<td style="text-align:left">User</td>
<td style="text-align:left">用户</td>
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/users/1008/avatar HTTP/1.1
Content-Type: multipart/form-data
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="返回示例"><a class="header-anchor" href="#返回示例">#</a> 返回示例</h4>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"userName"</span><span class="token operator">:</span> <span class="token string">"demo2"</span><span class="token punctuation">,</span>
    <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"3CPlhZ8UAus="</span><span class="token punctuation">,</span>
    <span class="token property">"passwordFormat"</span><span class="token operator">:</span> <span class="token string">"Encrypted"</span><span class="token punctuation">,</span>
    <span class="token property">"passwordSalt"</span><span class="token operator">:</span> <span class="token string">"VohMFwNz4s006ZytezfUxg=="</span><span class="token punctuation">,</span>
    <span class="token property">"createDate"</span><span class="token operator">:</span> <span class="token string">"2018-06-17 14:18:45"</span><span class="token punctuation">,</span>
    <span class="token property">"lastResetPasswordDate"</span><span class="token operator">:</span> <span class="token string">"2018-06-17 14:18:45"</span><span class="token punctuation">,</span>
    <span class="token property">"lastActivityDate"</span><span class="token operator">:</span> <span class="token string">"2018-06-17 14:18:45"</span><span class="token punctuation">,</span>
    <span class="token property">"countOfLogin"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"countOfFailedLogin"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"countOfWriting"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"isChecked"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"isLockedOut"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"displayName"</span><span class="token operator">:</span> <span class="token string">"演示"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"demo@sample.com"</span><span class="token punctuation">,</span>
    <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">"13888888888"</span><span class="token punctuation">,</span>
    <span class="token property">"avatarUrl"</span><span class="token operator">:</span> <span class="token string">"http://localhost/SiteFiles/UserFiles/demo/1717231727.png"</span><span class="token punctuation">,</span>
    <span class="token property">"organization"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"department"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"position"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"gender"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"birthday"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"education"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"graduation"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"weiXin"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"qq"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"weiBo"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"interests"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"signature"</span><span class="token operator">:</span> <span class="token string">""</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></template>