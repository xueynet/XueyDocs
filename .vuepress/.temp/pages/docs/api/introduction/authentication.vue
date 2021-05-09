<template><h1 id="api-身份认证"><a class="header-anchor" href="#api-身份认证">#</a> API 身份认证</h1>
<p>除少数接口外，对 REST API 发起的任何请求都必须通过身份验证，未验证的请求将返回 401 Unauthorized 错误。</p>
<h3 id="获取-api-密钥"><a class="header-anchor" href="#获取-api-密钥">#</a> 获取 API 密钥</h3>
<p>所有的 REST API 调用均通过专门的 API 密钥完成，该密钥是一串字符串，XYCMS 后台能够对密钥进行管理，设置此密钥的访问权限、替换或让此密钥失效。</p>
<p>使用最高权限的管理员登录 XYCMS 管理后台，进入菜单 <strong>系统管理 -&gt; 实用工具 -&gt; API 密钥</strong>：</p>
<p>在此可以新增密钥，设置授权范围以及删除密钥。新增密钥并设置好授权范围后点击 API 密钥名称，进入密钥查看界面：</p>
<p>建议定期更换 API 密钥以确保安全，可以点击 <strong>重设 Token</strong> 按钮更换 API 密钥。</p>
<h3 id="如何访问-rest-api"><a class="header-anchor" href="#如何访问-rest-api">#</a> 如何访问 REST API ?</h3>
<p>XYCMS REST API 通过 URL 地址提供访问接口，为了测试是否能够访问 XYCMS REST API，你可以简单地用浏览器打开地址：</p>
<p><code>http://&lt;example.com&gt;/api/ping/</code>（需要将 example.com 替换为真实域名或IP地址）</p>
<p>如果请求成功，XYCMS REST API 将从服务器返回字符串 pong。</p>
<h3 id="使用-api-密钥进行身份认证"><a class="header-anchor" href="#使用-api-密钥进行身份认证">#</a> 使用 API 密钥进行身份认证</h3>
<p>获取 API 密钥之后需要在调用 REST API 时将密钥通过请求发送给服务器，目前系统支持两种方式发送 API 密钥：</p>
<ul>
<li>通过 Header 发送 API 密钥</li>
<li>通过传参发送 API 密钥</li>
</ul>
<p>如果身份认证成功，返回 HTTP 200，如果身份验证失败，返回 HTTP 401。</p>
<h3 id="通过-header-发送-api-密钥"><a class="header-anchor" href="#通过-header-发送-api-密钥">#</a> 通过 Header 发送 API 密钥</h3>
<p>使用 Header 方法送 API 密钥需要在发起请求时将密钥放到 <strong>X-SS-API-KEY</strong> Header 中：</p>
<p>请求</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST https://example.com/api/v1/contents HTTP/1.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>请求 Header</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>响应</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>200
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="通过传参发送-api-密钥"><a class="header-anchor" href="#通过传参发送-api-密钥">#</a> 通过传参发送 API 密钥</h3>
<p>使用传参方法送 API 密钥需要在发起请求时将密钥放到 <strong>apiKey</strong> 的请求参数中：</p>
<p>请求</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST https://example.com/api/v1/contents?apiKey=7cd22002-27a7-4c5d-ba4d-a1c108a20eaf HTTP/1.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>响应</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>200
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="无需认证的-api-接口"><a class="header-anchor" href="#无需认证的-api-接口">#</a> 无需认证的 API 接口</h3>
<table>
<thead>
<tr>
<th style="text-align:left">操作</th>
<th style="text-align:left">请求</th>
<th style="text-align:left">地址</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">获取用户头像 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">v1/users/{id}/avatar</td>
</tr>
<tr>
<td style="text-align:left">用户登录 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">v1/users/actions/login</td>
</tr>
<tr>
<td style="text-align:left">管理员登录 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">v1/administrators/actions/login</td>
</tr>
<tr>
<td style="text-align:left">获取验证码图片 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/captcha/{name}</td>
</tr>
<tr>
<td style="text-align:left">验证验证码 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/captcha/{name}/actions/check</td>
</tr>
<tr>
<td style="text-align:left">Ping 可用性 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/ping</td>
</tr>
</tbody>
</table>
</template>