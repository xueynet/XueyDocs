<template><h1 id="xycms-rest-api"><a class="header-anchor" href="#xycms-rest-api">#</a> XYCMS REST API</h1>
<p>XYCMS REST API 为 XYCMS 提供了一个基于 HTTP 的 API 调用，允许开发者通过发送和接收 JSON 对象来远程与站点进行交互。JSON 是一种开放的标准数据格式，它是轻量级的，而且是人类可读的。</p>
<p>当向 API 发送内容或请求时，响应将以 JSON 形式返回，这使开发人员能够从客户端 JavaScript 或外部应用程序创建、读取和更新 XYCMS 内容，REST API 可以使用任何编程语言进行调用。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>可以通过 <code>http://&lt;example.com&gt;/api/docs/</code>（需要将 example.com 替换为真实域名或IP地址）访问 XYCMS 生成的 Swagger API 文档。</p>
</div>
<h3 id="为什么使用-rest-api"><a class="header-anchor" href="#为什么使用-rest-api">#</a> 为什么使用 REST API ?</h3>
<p>XYCMS REST API 提供了一组易于使用的 HTTP 端点，可以让您以简单的 JSON 格式访问站点的数据，包括站点、栏目、内容等等。检索或更新数据就像发送 HTTP 请求一样简单。</p>
<p>XYCMS REST API 使开发者比以往更容易获取站点数据，通过使用 REST API，您可以更容易地构造您想要从 XYCMS 中获取数据的方式。使用 REST API 可以极大地简化 AJAX 调用，使您能够更少地花时间访问所需的数据，并花更多时间创建更好的用户体验。</p>
<p>你可以创建一个应用来为 XYCMS 提供一个全新的管理界面，或创造一个全新的交互式前端体验，任何能够生成 HTTP 请求和解释 JSON 的编程语言都可以通过 REST API 与 XYCMS 交互。</p>
<h3 id="如何访问-rest-api"><a class="header-anchor" href="#如何访问-rest-api">#</a> 如何访问 REST API ?</h3>
<p>XYCMS REST API 通过 URL 地址提供访问接口，为了测试是否能够访问 XYCMS REST API，你可以简单地用浏览器打开地址：</p>
<p><code>http://&lt;example.com&gt;/api/ping/</code>（需要将 example.com 替换为真实域名或IP地址）</p>
<p>如果请求成功，XYCMS REST API 将从服务器返回字符串 pong。</p>
<h3 id="内容-api"><a class="header-anchor" href="#内容-api">#</a> 内容 API</h3>
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
<td style="text-align:left">获取内容列表 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/contents</td>
</tr>
<tr>
<td style="text-align:left">获取内容 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/contents/{siteId}/{channelId}/{id}</td>
</tr>
<tr>
<td style="text-align:left">新增内容 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/contents/{siteId}/{channelId}</td>
</tr>
<tr>
<td style="text-align:left">修改内容 API</td>
<td style="text-align:left">PUT</td>
<td style="text-align:left">/api/v1/contents/{siteId}/{channelId}/{id}</td>
</tr>
<tr>
<td style="text-align:left">删除内容 API</td>
<td style="text-align:left">DELETE</td>
<td style="text-align:left">/api/v1/contents/{siteId}/{channelId}/{id}</td>
</tr>
<tr>
<td style="text-align:left">审核内容 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/contents/check</td>
</tr>
</tbody>
</table>
<h3 id="内容-api-1"><a class="header-anchor" href="#内容-api-1">#</a> 内容 API</h3>
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
<td style="text-align:left">获取栏目列表 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/channels</td>
</tr>
<tr>
<td style="text-align:left">获取栏目 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/channels/{siteId}/{channelId}</td>
</tr>
<tr>
<td style="text-align:left">新增栏目 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/channels/{siteId}</td>
</tr>
<tr>
<td style="text-align:left">修改栏目 API</td>
<td style="text-align:left">PUT</td>
<td style="text-align:left">/api/v1/channels/{siteId}/{channelId}</td>
</tr>
<tr>
<td style="text-align:left">删除栏目 API</td>
<td style="text-align:left">DELETE</td>
<td style="text-align:left">/api/v1/channels/{siteId}/{channelId}</td>
</tr>
</tbody>
</table>
<h3 id="管理员-api"><a class="header-anchor" href="#管理员-api">#</a> 管理员 API</h3>
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
<td style="text-align:left">新增管理员 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/administrators</td>
</tr>
<tr>
<td style="text-align:left">修改管理员 API</td>
<td style="text-align:left">PUT</td>
<td style="text-align:left">/api/v1/administrators/{id}</td>
</tr>
<tr>
<td style="text-align:left">删除管理员 API</td>
<td style="text-align:left">DELETE</td>
<td style="text-align:left">/api/v1/administrators/{id}</td>
</tr>
<tr>
<td style="text-align:left">获取管理员 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/administrators/{id}</td>
</tr>
<tr>
<td style="text-align:left">获取管理员列表 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/administrators</td>
</tr>
<tr>
<td style="text-align:left">管理员登录 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/administrators/actions/login</td>
</tr>
<tr>
<td style="text-align:left">管理员退出登录 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/administrators/actions/logout</td>
</tr>
<tr>
<td style="text-align:left">修改管理员密码 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/administrators/actions/resetPassword</td>
</tr>
</tbody>
</table>
<h3 id="用户-api"><a class="header-anchor" href="#用户-api">#</a> 用户 API</h3>
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
<td style="text-align:left">新增用户 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/users</td>
</tr>
<tr>
<td style="text-align:left">修改用户 API</td>
<td style="text-align:left">PUT</td>
<td style="text-align:left">/api/v1/users/{id}</td>
</tr>
<tr>
<td style="text-align:left">删除用户 API</td>
<td style="text-align:left">DELETE</td>
<td style="text-align:left">/api/v1/users/{id}</td>
</tr>
<tr>
<td style="text-align:left">获取用户 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/users/{id}</td>
</tr>
<tr>
<td style="text-align:left">获取用户头像 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/users/{id}/avatar</td>
</tr>
<tr>
<td style="text-align:left">上传用户头像 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/users/{id}/avatar</td>
</tr>
<tr>
<td style="text-align:left">获取用户列表 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/users</td>
</tr>
<tr>
<td style="text-align:left">用户登录 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/users/actions/login</td>
</tr>
<tr>
<td style="text-align:left">用户退出登录 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/users/actions/logout</td>
</tr>
<tr>
<td style="text-align:left">修改用户密码 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/users/actions/resetPassword</td>
</tr>
<tr>
<td style="text-align:left">新增用户操作日志 API</td>
<td style="text-align:left">POST</td>
<td style="text-align:left">/api/v1/users/{id}/logs</td>
</tr>
<tr>
<td style="text-align:left">获取用户操作日志 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/users/{id}/logs</td>
</tr>
</tbody>
</table>
<h3 id="stl-模板语言-api"><a class="header-anchor" href="#stl-模板语言-api">#</a> STL 模板语言 API</h3>
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
<td style="text-align:left">获取链接 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/stl/a</td>
</tr>
<tr>
<td style="text-align:left">获取栏目值 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/stl/channel</td>
</tr>
<tr>
<td style="text-align:left">获取栏目列表 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/stl/channels</td>
</tr>
<tr>
<td style="text-align:left">获取内容值 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/stl/content</td>
</tr>
<tr>
<td style="text-align:left">获取内容列表 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/stl/contents</td>
</tr>
<tr>
<td style="text-align:left">获取站点值 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/stl/site</td>
</tr>
<tr>
<td style="text-align:left">获取站点列表 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/stl/sites</td>
</tr>
<tr>
<td style="text-align:left">获取数据库值 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/stl/sqlContent</td>
</tr>
<tr>
<td style="text-align:left">获取数据库列表 API</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">/api/v1/stl/sqlContents</td>
</tr>
</tbody>
</table>
<h3 id="其他-api"><a class="header-anchor" href="#其他-api">#</a> 其他 API</h3>
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