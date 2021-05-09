<template><h1 id="siteserver-tag"><a class="header-anchor" href="#siteserver-tag">#</a> siteserver_Tag</h1>
<p>内容标签表，存储内容的关联标签。</p>
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
<td style="text-align:left">SiteId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">站点Id，对应 siteserver_Site 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">ContentIdCollection</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">内容Id集合，对应 内容表 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">Tag</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">标签</td>
</tr>
<tr>
<td style="text-align:left">UseNum</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">使用次数</td>
</tr>
</tbody>
</table>
</template>