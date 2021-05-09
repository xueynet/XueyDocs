<template><h1 id="siteserver-template"><a class="header-anchor" href="#siteserver-template">#</a> siteserver_Template</h1>
<p>模板表，存储站点的模板信息。</p>
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
<td style="text-align:left">SiteId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">站点Id，对应 siteserver_Site 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">TemplateName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">模板名称</td>
</tr>
<tr>
<td style="text-align:left">TemplateType</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">模板类型</td>
</tr>
<tr>
<td style="text-align:left">RelatedFileName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">模板文件名（不带文件扩展名）</td>
</tr>
<tr>
<td style="text-align:left">CreatedFileFullName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">模板文件全名</td>
</tr>
<tr>
<td style="text-align:left">CreatedFileExtName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">模板文件扩展名</td>
</tr>
<tr>
<td style="text-align:left">Charset</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">文件编码</td>
</tr>
<tr>
<td style="text-align:left">IsDefault</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否默认模板</td>
</tr>
</tbody>
</table>
</template>