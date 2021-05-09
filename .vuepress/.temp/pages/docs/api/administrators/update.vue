<template><h1 id="修改管理员-api"><a class="header-anchor" href="#修改管理员-api">#</a> 修改管理员 API</h1>
<p>修改管理员属性，使用PUT发起请求，请求地址为<code>/api/v1/administrators/{id}</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PUT /api/v1/administrators/{id} HTTP/1.1
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
<td style="text-align:left">管理员 Id</td>
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
<td style="text-align:left">userName</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">是</td>
<td style="text-align:left">管理员账号</td>
</tr>
<tr>
<td style="text-align:left">password</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">是</td>
<td style="text-align:left">管理员密码</td>
</tr>
<tr>
<td style="text-align:left">passwordFormat</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">密码加密格式，有Clear及Encrypt两种，分别代表不加密以及可逆加密。</td>
</tr>
<tr>
<td style="text-align:left">CreationDate</td>
<td style="text-align:left">日期</td>
<td style="text-align:left">否</td>
<td style="text-align:left">创建日期</td>
</tr>
<tr>
<td style="text-align:left">LastActivityDate</td>
<td style="text-align:left">日期</td>
<td style="text-align:left">否</td>
<td style="text-align:left">最后活动时间</td>
</tr>
<tr>
<td style="text-align:left">CountOfLogin</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">否</td>
<td style="text-align:left">登录次数</td>
</tr>
<tr>
<td style="text-align:left">CreatorUserName</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">创建者</td>
</tr>
<tr>
<td style="text-align:left">isLockedOut</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否被锁定</td>
</tr>
<tr>
<td style="text-align:left">departmentId</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">否</td>
<td style="text-align:left">管理员所属部门 Id</td>
</tr>
<tr>
<td style="text-align:left">areaId</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">否</td>
<td style="text-align:left">管理员所属区域 Id</td>
</tr>
<tr>
<td style="text-align:left">displayName</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">管理员姓名</td>
</tr>
<tr>
<td style="text-align:left">email</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">邮箱</td>
</tr>
<tr>
<td style="text-align:left">mobile</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">手机号</td>
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PUT /api/v1/administrators/1 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  &quot;userName&quot;: &quot;demo2&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="返回示例"><a class="header-anchor" href="#返回示例">#</a> 返回示例</h4>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">"userName"</span><span class="token operator">:</span> <span class="token string">"demo2"</span><span class="token punctuation">,</span>
    <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"xv+60l2H7TE="</span><span class="token punctuation">,</span>
    <span class="token property">"passwordFormat"</span><span class="token operator">:</span> <span class="token string">"Encrypted"</span><span class="token punctuation">,</span>
    <span class="token property">"passwordSalt"</span><span class="token operator">:</span> <span class="token string">"PjWkOQmRT/KSKgz5LLnWrQ=="</span><span class="token punctuation">,</span>
    <span class="token property">"creationDate"</span><span class="token operator">:</span> <span class="token string">"2018-06-29 18:22:51"</span><span class="token punctuation">,</span>
    <span class="token property">"lastActivityDate"</span><span class="token operator">:</span> <span class="token string">"2018-06-29 18:22:51"</span><span class="token punctuation">,</span>
    <span class="token property">"countOfLogin"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"countOfFailedLogin"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"creatorUserName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"isLockedOut"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"siteIdCollection"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"siteId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"departmentId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"areaId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"displayName"</span><span class="token operator">:</span> <span class="token string">"demo2"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"test5@sample.com"</span><span class="token punctuation">,</span>
    <span class="token property">"mobile"</span><span class="token operator">:</span> <span class="token string">"13599999989"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></template>