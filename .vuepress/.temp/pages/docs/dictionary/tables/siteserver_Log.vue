<template><h1 id="siteserver-log"><a class="header-anchor" href="#siteserver-log">#</a> siteserver_Log</h1>
<p>管理员操作日志表，存储管理员所执行的动作日志。</p>
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
<td style="text-align:left">50</td>
<td style="text-align:left">管理员账号，对应 siteserver_Administrator 表的 <code>UserName</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">IpAddress</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">Ip地址</td>
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