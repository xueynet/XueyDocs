<template><h1 id="siteserver-contentcheck"><a class="header-anchor" href="#siteserver-contentcheck">#</a> siteserver_ContentCheck</h1>
<p>内容审核表，存储内容审核信息。</p>
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
<td style="text-align:left">TableName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">SiteId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">站点Id，对应 siteserver_Site 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">ChannelId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">栏目Id，对应 siteserver_Channel 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">ContentId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">内容Id，对应 内容表 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">UserName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">审核人，对应 siteserver_Administrator 表的 <code>UserName</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">IsChecked</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否终审通过</td>
</tr>
<tr>
<td style="text-align:left">CheckedLevel</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">当前审核级别</td>
</tr>
<tr>
<td style="text-align:left">CheckDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">审核时间</td>
</tr>
<tr>
<td style="text-align:left">Reasons</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">审核原因</td>
</tr>
</tbody>
</table>
</template>