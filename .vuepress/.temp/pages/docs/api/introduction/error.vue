<template><h1 id="错误代码"><a class="header-anchor" href="#错误代码">#</a> 错误代码</h1>
<p>响应是你从REST API返回的数据，响应可以返回所需的数据，也可以用来返回错误。</p>
<p>REST API使用响应代码（Response Code）来代表不同的状态，返回正确的响应代码为200，返回错误的响应代码及意义如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left">Code</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">400</td>
<td style="text-align:left">Bad request</td>
<td style="text-align:left">参数不正确或其他原因导致的请求错误。</td>
</tr>
<tr>
<td style="text-align:left">401</td>
<td style="text-align:left">Unauthorized</td>
<td style="text-align:left">请求认证失败，可能是 API Key 丢失、无效或没有权限。</td>
</tr>
<tr>
<td style="text-align:left">404</td>
<td style="text-align:left">Not found</td>
<td style="text-align:left">未找到所请求的资源。如果URL完全无效(例如/api/v1/asdf)，或者它是一个可能有效的URL，但是引用了不存在的东西(例如/api/v1/site?siteId=12345)，则返回该响应。</td>
</tr>
<tr>
<td style="text-align:left">429</td>
<td style="text-align:left">Too Many Requests</td>
<td style="text-align:left">如果为 API Key 启用了速率限制，则此返回代码表示已到达速率限制，且未处理该请求。</td>
</tr>
</tbody>
</table>
<p><strong>Error 错误对象</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">message</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">错误说明</td>
</tr>
</tbody>
</table>
</template>