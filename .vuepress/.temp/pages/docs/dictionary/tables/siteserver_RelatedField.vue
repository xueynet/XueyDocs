<template><h1 id="siteserver-relatedfield"><a class="header-anchor" href="#siteserver-relatedfield">#</a> siteserver_RelatedField</h1>
<p>联动字段表，存储联动字段信息。</p>
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
<td style="text-align:left">Title</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">联动字段名称</td>
</tr>
<tr>
<td style="text-align:left">SiteId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">站点Id，对应 siteserver_Site 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">TotalLevel</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">几级联动</td>
</tr>
<tr>
<td style="text-align:left">Prefixes</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">前缀为联动字段在下拉列表之前显示的文字，可以为空</td>
</tr>
<tr>
<td style="text-align:left">Suffixes</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">后缀为联动字段在下拉列表之后显示的文字，可以为空</td>
</tr>
</tbody>
</table>
</template>