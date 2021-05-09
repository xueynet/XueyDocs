<template><h1 id="siteserver-errorlog"><a class="header-anchor" href="#siteserver-errorlog">#</a> siteserver_ErrorLog</h1>
<p>错误日志表，存储所有报错信息。</p>
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
<td style="text-align:left">200</td>
<td style="text-align:left">错误来源插件Id，代表报错所属插件</td>
</tr>
<tr>
<td style="text-align:left">Message</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">错误消息</td>
</tr>
<tr>
<td style="text-align:left">Stacktrace</td>
<td style="text-align:left">Text</td>
<td style="text-align:left"></td>
<td style="text-align:left">堆栈踪迹</td>
</tr>
<tr>
<td style="text-align:left">Summary</td>
<td style="text-align:left">Text</td>
<td style="text-align:left"></td>
<td style="text-align:left">错误摘要</td>
</tr>
<tr>
<td style="text-align:left">AddDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">错误发生时间</td>
</tr>
</tbody>
</table>
</template>