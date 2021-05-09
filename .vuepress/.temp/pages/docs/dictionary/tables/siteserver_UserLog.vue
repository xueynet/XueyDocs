<template><h1 id="siteserver-userlog"><a class="header-anchor" href="#siteserver-userlog">#</a> siteserver_UserLog</h1>
<p>用户日志表，存储用户的操作日志。</p>
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
<td style="text-align:left">UserName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">用户账号，对应 siteserver_User 表的 <code>UserName</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">IpAddress</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">Ip 地址</td>
</tr>
<tr>
<td style="text-align:left">AddDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">添加时间</td>
</tr>
<tr>
<td style="text-align:left">Action</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">动作</td>
</tr>
<tr>
<td style="text-align:left">Summary</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">描述</td>
</tr>
</tbody>
</table>
</template>