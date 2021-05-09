<template><h1 id="siteserver-sitelog"><a class="header-anchor" href="#siteserver-sitelog">#</a> siteserver_SiteLog</h1>
<p>站点日志表，存储对站点的所有操作日志信息。</p>
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
<td style="text-align:left">ChannelId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">栏目Id，对应 siteserver_Channel 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">ContentId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">内容Id，对应 内容表 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">UserName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">操作人，对应 siteserver_Administrator 表的 <code>UserName</code> 字段</td>
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
<td style="text-align:left">操作时间</td>
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