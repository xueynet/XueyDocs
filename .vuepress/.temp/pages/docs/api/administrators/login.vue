<template><h1 id="管理员登录-api"><a class="header-anchor" href="#管理员登录-api">#</a> 管理员登录 API</h1>
<p>注册新管理员，使用<code>POST</code>发起请求，请求地址为<code>/api/v1/administrators/actions/login</code>，此接口可以直接访问，无需通过身份验证。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/administrators/actions/login HTTP/1.1
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
<td style="text-align:left">account</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">是</td>
<td style="text-align:left">管理员账号，可以是管理员名、邮箱或者手机号</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">password</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">是</td>
<td style="text-align:left">管理员密码，需要 MD5 加密后传输</td>
<td style="text-align:left"></td>
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
<td style="text-align:left">Administrator</td>
<td style="text-align:left">管理员</td>
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/administrators/actions/login HTTP/1.1
Content-Type: application/json

{
  &quot;account&quot;: &quot;demo&quot;,
  &quot;password&quot;: &quot;7d683abba984a7804078471700c39fb9&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="返回示例"><a class="header-anchor" href="#返回示例">#</a> 返回示例</h4>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
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
  <span class="token property">"accessToken"</span><span class="token operator">:</span> <span class="token string">"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBZG1pbmlzdHJhdG9yTmFtZSI6ImFkbWluIiwiQWRkRGF0ZSI6IlwvRGF0ZSgxNTMwMzMzNDQxMDA0KVwvIn0.ESBKKb4YcOqLoPn0Y_aeVoZYDINZ_7xSwQr0bwnct7I"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></template>