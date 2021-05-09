<template><h1 id="siteserver-relatedfielditem"><a class="header-anchor" href="#siteserver-relatedfielditem">#</a> siteserver_RelatedFieldItem</h1>
<p>联动字段选项表，存储联动字段的选择项列表。</p>
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
<td style="text-align:left">RelatedFieldId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">联动字段Id，对应 siteserver_RelatedField 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">ItemName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">字段项名</td>
</tr>
<tr>
<td style="text-align:left">ItemValue</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">字段项值</td>
</tr>
<tr>
<td style="text-align:left">ParentId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">上级字段项Id</td>
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