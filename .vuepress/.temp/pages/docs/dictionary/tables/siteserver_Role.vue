<template><h1 id="siteserver-role"><a class="header-anchor" href="#siteserver-role">#</a> siteserver_Role</h1>
<p>角色表，存储管理员角色信息。</p>
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
<td style="text-align:left">RoleName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">角色名称</td>
</tr>
<tr>
<td style="text-align:left">CreatorUserName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">角色创建人，对应 siteserver_Administrator 表的 <code>UserName</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">Description</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">备注</td>
</tr>
</tbody>
</table>
</template>