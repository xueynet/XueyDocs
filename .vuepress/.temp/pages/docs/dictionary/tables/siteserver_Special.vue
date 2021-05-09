<template><h1 id="siteserver-special"><a class="header-anchor" href="#siteserver-special">#</a> siteserver_Special</h1>
<p>专题表，存储站点下的专题信息。</p>
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
<td style="text-align:left">Title</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">专题名称</td>
</tr>
<tr>
<td style="text-align:left">Url</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">访问地址</td>
</tr>
<tr>
<td style="text-align:left">AddDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">导入时间</td>
</tr>
</tbody>
</table>
</template>