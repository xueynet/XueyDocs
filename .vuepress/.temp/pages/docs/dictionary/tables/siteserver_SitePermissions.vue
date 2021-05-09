<template><h1 id="siteserver-sitepermissions"><a class="header-anchor" href="#siteserver-sitepermissions">#</a> siteserver_SitePermissions</h1>
<p>站点权限表，存储分配给管理员的站点权限。</p>
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
<td style="text-align:left">角色名称，对应 siteserver_Role 表的 <code>RoleName</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">SiteId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">站点Id，对应 siteserver_Site 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">ChannelIdCollection</td>
<td style="text-align:left">Text</td>
<td style="text-align:left"></td>
<td style="text-align:left">栏目Id集合，以逗号分隔，对应 siteserver_Channel 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">ChannelPermissions</td>
<td style="text-align:left">Text</td>
<td style="text-align:left">栏目权限集合，以逗号分隔</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">WebsitePermissions</td>
<td style="text-align:left">Text</td>
<td style="text-align:left"></td>
<td style="text-align:left">站点权限集合，以逗号分隔</td>
</tr>
</tbody>
</table>
</template>