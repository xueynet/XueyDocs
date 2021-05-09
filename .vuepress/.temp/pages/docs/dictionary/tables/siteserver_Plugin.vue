<template><h1 id="siteserver-plugin"><a class="header-anchor" href="#siteserver-plugin">#</a> siteserver_Plugin</h1>
<p>插件表，存储插件信息。</p>
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
<td style="text-align:left">PluginId</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">插件标识</td>
</tr>
<tr>
<td style="text-align:left">IsDisabled</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否禁用此插件</td>
</tr>
<tr>
<td style="text-align:left">Taxis</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">排序</td>
</tr>
</tbody>
</table>
</template>