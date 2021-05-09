<template><h1 id="siteserver-dbcache"><a class="header-anchor" href="#siteserver-dbcache">#</a> siteserver_DbCache</h1>
<p>数据缓存表，存储缓存信息。</p>
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
<td style="text-align:left">CacheKey</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">数据库缓存键</td>
</tr>
<tr>
<td style="text-align:left">CacheValue</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">500</td>
<td style="text-align:left">数据库缓存值</td>
</tr>
<tr>
<td style="text-align:left">AddDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">添加时间</td>
</tr>
</tbody>
</table>
</template>