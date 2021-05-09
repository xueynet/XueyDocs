<template><h1 id="siteserver-tablestyleitem"><a class="header-anchor" href="#siteserver-tablestyleitem">#</a> siteserver_TableStyleItem</h1>
<p>提交样式选项表，存储提交样式的选择项列表。</p>
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
<td style="text-align:left">TableStyleId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">提交样式Id，对应 siteserver_TableStyle 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">ItemTitle</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">选项标题</td>
</tr>
<tr>
<td style="text-align:left">ItemValue</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">选项值</td>
</tr>
<tr>
<td style="text-align:left">IsSelected</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否默认选择</td>
</tr>
</tbody>
</table>
</template>