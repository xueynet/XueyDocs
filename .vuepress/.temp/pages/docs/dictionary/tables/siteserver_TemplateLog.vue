<template><h1 id="siteserver-templatelog"><a class="header-anchor" href="#siteserver-templatelog">#</a> siteserver_TemplateLog</h1>
<p>模板操作日志表，存储模板的版本信息。</p>
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
<td style="text-align:left">TemplateId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">模板Id，对应 siteserver_Template 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">SiteId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">站点Id，对应 siteserver_Site 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">AddDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">操作时间</td>
</tr>
<tr>
<td style="text-align:left">AddUserName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">操作人，对应 siteserver_Administrator 表的 <code>UserName</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">ContentLength</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">模板内容字数</td>
</tr>
<tr>
<td style="text-align:left">TemplateContent</td>
<td style="text-align:left">Text</td>
<td style="text-align:left"></td>
<td style="text-align:left">模板内容</td>
</tr>
</tbody>
</table>
</template>