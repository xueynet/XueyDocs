<template><h1 id="siteserver-table"><a class="header-anchor" href="#siteserver-table">#</a> siteserver_Table</h1>
<p>内容表基本信息表，存储与站点关联的内容表的基本信息。</p>
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
<td style="text-align:left">内容表标识</td>
</tr>
<tr>
<td style="text-align:left">DisplayName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">内容表名称</td>
</tr>
<tr>
<td style="text-align:left">AttributeNum</td>
<td style="text-align:left"></td>
<td style="text-align:left">Integer</td>
<td style="text-align:left">字段数量</td>
</tr>
<tr>
<td style="text-align:left">IsCreatedInDb</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否创建</td>
</tr>
<tr>
<td style="text-align:left">IsChangedAfterCreatedInDb</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否创建后修改</td>
</tr>
<tr>
<td style="text-align:left">IsDefault</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否默认内容表</td>
</tr>
<tr>
<td style="text-align:left">Description</td>
<td style="text-align:left">Text</td>
<td style="text-align:left"></td>
<td style="text-align:left">内容表简介</td>
</tr>
</tbody>
</table>
</template>