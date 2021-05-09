<template><h1 id="siteserver-config"><a class="header-anchor" href="#siteserver-config">#</a> siteserver_Config</h1>
<p>系统配置表，存储系统配置信息。</p>
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
<td style="text-align:left">IsInitialized</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">系统是否安装</td>
</tr>
<tr>
<td style="text-align:left">DatabaseVersion</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">当前系统的版本号</td>
</tr>
<tr>
<td style="text-align:left">UpdateDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">系统升级时间</td>
</tr>
<tr>
<td style="text-align:left">SystemConfig</td>
<td style="text-align:left">Text</td>
<td style="text-align:left"></td>
<td style="text-align:left">系统配置</td>
</tr>
</tbody>
</table>
</template>