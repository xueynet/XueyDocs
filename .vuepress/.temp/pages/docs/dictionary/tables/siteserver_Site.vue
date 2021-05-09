<template><h1 id="siteserver-site"><a class="header-anchor" href="#siteserver-site">#</a> siteserver_Site</h1>
<p>站点表，存储站点信息。</p>
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
<td style="text-align:left">SiteName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">站点名称</td>
</tr>
<tr>
<td style="text-align:left">SiteDir</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">站点文件夹</td>
</tr>
<tr>
<td style="text-align:left">TableName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">站点内容表</td>
</tr>
<tr>
<td style="text-align:left">IsRoot</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否主站</td>
</tr>
<tr>
<td style="text-align:left">ParentId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">上级站点Id</td>
</tr>
<tr>
<td style="text-align:left">Taxis</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">排序</td>
</tr>
<tr>
<td style="text-align:left">SettingsXml</td>
<td style="text-align:left">Text</td>
<td style="text-align:left"></td>
<td style="text-align:left">站点设置</td>
</tr>
</tbody>
</table>
</template>