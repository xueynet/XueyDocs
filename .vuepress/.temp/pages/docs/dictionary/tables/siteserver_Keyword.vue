<template><h1 id="siteserver-keyword"><a class="header-anchor" href="#siteserver-keyword">#</a> siteserver_Keyword</h1>
<p>敏感词表，存储敏感词信息。</p>
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
<td style="text-align:left">Keyword</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">敏感词</td>
</tr>
<tr>
<td style="text-align:left">Alternative</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">替换词</td>
</tr>
<tr>
<td style="text-align:left">Grade</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">级别</td>
</tr>
</tbody>
</table>
</template>