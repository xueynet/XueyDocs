<template><h1 id="siteserver-area"><a class="header-anchor" href="#siteserver-area">#</a> siteserver_Area</h1>
<p>区域表，存储所属区域。</p>
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
<td style="text-align:left">AreaName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">区域名称</td>
</tr>
<tr>
<td style="text-align:left">ParentId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">父级区域Id</td>
</tr>
<tr>
<td style="text-align:left">ParentsPath</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">上级区域路径，包含所有上级区域的Id，以逗号分隔</td>
</tr>
<tr>
<td style="text-align:left">ParentsCount</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">上级区域数量</td>
</tr>
<tr>
<td style="text-align:left">ChildrenCount</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">下级区域数量</td>
</tr>
<tr>
<td style="text-align:left">IsLastNode</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否最后一级区域</td>
</tr>
<tr>
<td style="text-align:left">Taxis</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">排序</td>
</tr>
<tr>
<td style="text-align:left">CountOfAdmin</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">所在区域的管理员数量</td>
</tr>
</tbody>
</table>
</template>