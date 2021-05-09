<template><h1 id="审核内容-api"><a class="header-anchor" href="#审核内容-api">#</a> 审核内容 API</h1>
<p>审核内容使用POST发起请求，请求地址为<code>/api/v1/contents/actions/check</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/contents/actions/check HTTP/1.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="请求-body"><a class="header-anchor" href="#请求-body">#</a> 请求 Body</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">必填项</th>
<th style="text-align:left">JSON 类型</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">siteId</td>
<td style="text-align:left">站点 Id</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">指定需要审核内容的所属站点</td>
</tr>
<tr>
<td style="text-align:left">contents</td>
<td style="text-align:left">审核内容 Id</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">ChannelContentId 对象数组</td>
<td style="text-align:left">内容审核数组，系统将把审核数组中包含的内容设置为已审核</td>
</tr>
<tr>
<td style="text-align:left">reasons</td>
<td style="text-align:left">审核理由</td>
<td style="text-align:left"></td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">审核理由，可选填</td>
</tr>
</tbody>
</table>
<h3 id="channelcontentid-对象"><a class="header-anchor" href="#channelcontentid-对象">#</a> ChannelContentId 对象</h3>
<p>可以向内容审核 API 传递 ChannelContentId 对象数组，用于指定内容审核条件，系统将把审核条件中包含的内容设置为已审核。</p>
<p>ChannelContentId 对象说明：</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">必填项</th>
<th style="text-align:left">JSON 类型</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">channelId</td>
<td style="text-align:left">栏目 Id</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">内容所属的栏目 Id 值</td>
</tr>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">内容 Id</td>
<td style="text-align:left">必填</td>
<td style="text-align:left">数字</td>
<td style="text-align:left">内容的 Id 值</td>
</tr>
</tbody>
</table>
<h3 id="返回-body"><a class="header-anchor" href="#返回-body">#</a> 返回 Body</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">contents</td>
<td style="text-align:left"></td>
<td style="text-align:left">内容列表</td>
</tr>
</tbody>
</table>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p>以下请求将审核站点Id为1，栏目Id为10的两条内容。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /api/v1/contents/actions/check HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  &quot;siteId&quot;: 1,
  &quot;contents&quot;: [
      {
          &quot;channelId&quot;: 10,
          &quot;id&quot;: 192
      },
      {
          &quot;channelId&quot;: 10,
          &quot;id&quot;: 193
      }
  ],
  &quot;reasons&quot;: &quot;终审通过&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></template>