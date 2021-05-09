<template><h1 id="siteserver-templatematch"><a class="header-anchor" href="#siteserver-templatematch">#</a> siteserver_TemplateMatch</h1>
<p>模板匹配表，存储模板与栏目之间的匹配关系。</p>
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
<td style="text-align:left">ChannelId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">栏目Id，对应 siteserver_Channel 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">SiteId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">站点Id，对应 siteserver_Site 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">ChannelTemplateId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">栏目模板Id，对应 siteserver_Template 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">ContentTemplateId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">内容模板Id，对应 siteserver_Template 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">FilePath</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">生成页面路径</td>
</tr>
<tr>
<td style="text-align:left">ChannelFilePathRule</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">栏目页面命名规则</td>
</tr>
<tr>
<td style="text-align:left">ContentFilePathRule</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">内容页面命名规则</td>
</tr>
</tbody>
</table>
</template>