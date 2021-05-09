<template><h1 id="siteserver-department"><a class="header-anchor" href="#siteserver-department">#</a> siteserver_Department</h1>
<p>部门表，存储所有部门。</p>
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
<td style="text-align:left">DepartmentName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">部门名称</td>
</tr>
<tr>
<td style="text-align:left">Code</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">部门编码</td>
</tr>
<tr>
<td style="text-align:left">ParentId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">上级部门Id</td>
</tr>
<tr>
<td style="text-align:left">ParentsPath</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">上级部门路径，包含所有上级部门的Id，以逗号分隔</td>
</tr>
<tr>
<td style="text-align:left">ParentsCount</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">上级部门数量</td>
</tr>
<tr>
<td style="text-align:left">ChildrenCount</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">下级部门数量</td>
</tr>
<tr>
<td style="text-align:left">IsLastNode</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否最后一级部门</td>
</tr>
<tr>
<td style="text-align:left">Taxis</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">排序</td>
</tr>
<tr>
<td style="text-align:left">AddDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">添加时间</td>
</tr>
<tr>
<td style="text-align:left">Summary</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">部门简介</td>
</tr>
<tr>
<td style="text-align:left">CountOfAdmin</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">所属部门管理员总数</td>
</tr>
</tbody>
</table>
</template>