<template><h1 id="ping-可用性-api"><a class="header-anchor" href="#ping-可用性-api">#</a> Ping 可用性 API</h1>
<p>Ping用于确定 API 是否可以访问，使用<code>GET</code>发起请求，请求地址为<code>/api/v1/ping</code>，此接口可以直接访问，无需身份验证。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/ping HTTP/1.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="返回"><a class="header-anchor" href="#返回">#</a> 返回</h3>
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
<td style="text-align:left">字符串</td>
<td style="text-align:left">REST API处于正常状态将返回字符串pong</td>
</tr>
</tbody>
</table>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<h4 id="请求示例"><a class="header-anchor" href="#请求示例">#</a> 请求示例</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/ping HTTP/1.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="返回示例"><a class="header-anchor" href="#返回示例">#</a> 返回示例</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pong
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>