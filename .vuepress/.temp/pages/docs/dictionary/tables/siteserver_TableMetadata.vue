<template><h1 id="siteserver-tablemetadata"><a class="header-anchor" href="#siteserver-tablemetadata">#</a> siteserver_TableMetadata</h1>
<p>内容表字段信息表，存储与站点关联的内容表的详细字段信息。</p>
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
<td style="text-align:left">内容表标识，对应 siteserver_Table 表的 <code>TableName</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">AttributeName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">字段名，只允许包含字母、数字以及下划线</td>
</tr>
<tr>
<td style="text-align:left">DataType</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">数据类型</td>
</tr>
<tr>
<td style="text-align:left">DataLength</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">数据长度</td>
</tr>
<tr>
<td style="text-align:left">Taxis</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">排序</td>
</tr>
<tr>
<td style="text-align:left">IsSystem</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否系统默认字段，默认字段无法删除及修改</td>
</tr>
</tbody>
</table>
</template>