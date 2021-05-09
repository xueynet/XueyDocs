<template><h1 id="siteserver-count"><a class="header-anchor" href="#siteserver-count">#</a> siteserver_Count</h1>
<p>数字统计表，存储统计信息。</p>
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
<td style="text-align:left">RelatedTableName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">统计对应的表名</td>
</tr>
<tr>
<td style="text-align:left">RelatedIdentity</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">统计对应的表主键</td>
</tr>
<tr>
<td style="text-align:left">CountType</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">统计类型</td>
</tr>
<tr>
<td style="text-align:left">CountNum</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">统计值</td>
</tr>
</tbody>
</table>
</template>