<template><h1 id="siteserver-accesstoken"><a class="header-anchor" href="#siteserver-accesstoken">#</a> siteserver_AccessToken</h1>
<p>API密钥表，存储访问REST API的密钥。</p>
<table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">数据类型</th>
<th style="text-align:left">数据大小</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Id</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">自增长主键</td>
</tr>
<tr>
<td style="text-align:left">Title</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">密钥名称</td>
</tr>
<tr>
<td style="text-align:left">Token</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">密钥</td>
</tr>
<tr>
<td style="text-align:left">Scopes</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">授权范围</td>
</tr>
<tr>
<td style="text-align:left">RateLimit</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">访问频率限制</td>
</tr>
<tr>
<td style="text-align:left">AddDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">添加时间</td>
</tr>
<tr>
<td style="text-align:left">UpdatedDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">更新时间</td>
</tr>
</tbody>
</table>
</template>

<style>
@@import url("/assets/css/table_four_col.css");
</style>
