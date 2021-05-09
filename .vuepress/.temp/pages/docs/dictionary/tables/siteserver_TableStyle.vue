<template><h1 id="siteserver-tablestyle"><a class="header-anchor" href="#siteserver-tablestyle">#</a> siteserver_TableStyle</h1>
<p>提交样式表，存储内容编辑界面中每项的提交样式。</p>
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
<td style="text-align:left">RelatedIdentity</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">提交样式对应字段标识</td>
</tr>
<tr>
<td style="text-align:left">TableName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">提交样式对应表标识</td>
</tr>
<tr>
<td style="text-align:left">AttributeName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">字段名称</td>
</tr>
<tr>
<td style="text-align:left">Taxis</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">排序</td>
</tr>
<tr>
<td style="text-align:left">DisplayName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">显示名称</td>
</tr>
<tr>
<td style="text-align:left">HelpText</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">帮助提示</td>
</tr>
<tr>
<td style="text-align:left">IsVisibleInList</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否在列表中显示</td>
</tr>
<tr>
<td style="text-align:left">InputType</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">表单提交类型</td>
</tr>
<tr>
<td style="text-align:left">DefaultValue</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">默认值</td>
</tr>
<tr>
<td style="text-align:left">IsHorizontal</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否水平排列</td>
</tr>
<tr>
<td style="text-align:left">ExtendValues</td>
<td style="text-align:left">Text</td>
<td style="text-align:left"></td>
<td style="text-align:left">提交样式设置</td>
</tr>
</tbody>
</table>
</template>