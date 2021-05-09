<template><h1 id="siteserver-pluginconfig"><a class="header-anchor" href="#siteserver-pluginconfig">#</a> siteserver_PluginConfig</h1>
<p>插件配置表，存储插件配置信息。</p>
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
<td style="text-align:left">SiteId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">站点Id，对应 siteserver_Site 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">ConfigName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">插件配置键</td>
</tr>
<tr>
<td style="text-align:left">ConfigValue</td>
<td style="text-align:left">Text</td>
<td style="text-align:left"></td>
<td style="text-align:left">插件配置值</td>
</tr>
</tbody>
</table>
</template>