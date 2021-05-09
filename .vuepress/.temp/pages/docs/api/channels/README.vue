<template><h1 id="字段说明"><a class="header-anchor" href="#字段说明">#</a> 字段说明</h1>
<h3 id="channel-栏目对象"><a class="header-anchor" href="#channel-栏目对象">#</a> Channel 栏目对象</h3>
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
<td style="text-align:left">ChannelName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">栏目名称</td>
</tr>
<tr>
<td style="text-align:left">SiteId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">站点 Id</td>
</tr>
<tr>
<td style="text-align:left">ContentModelPluginId</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">内容模型插件设置，只能设置一个内容模型插件，设置后此栏目下的内容表将由插件定义</td>
</tr>
<tr>
<td style="text-align:left">ContentRelatedPluginIds</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">内容关联插件设置，可以设置多个关联插件</td>
</tr>
<tr>
<td style="text-align:left">ParentId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">父栏目 Id</td>
</tr>
<tr>
<td style="text-align:left">ParentsPath</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">上级栏目路径，包含所有上级栏目的 Id，以逗号分隔</td>
</tr>
<tr>
<td style="text-align:left">ParentsCount</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">上级栏目数量</td>
</tr>
<tr>
<td style="text-align:left">ChildrenCount</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">下级栏目数量</td>
</tr>
<tr>
<td style="text-align:left">IsLastNode</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否最后一级栏目</td>
</tr>
<tr>
<td style="text-align:left">IndexName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">栏目索引</td>
</tr>
<tr>
<td style="text-align:left">GroupNameCollection</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">栏目组</td>
</tr>
<tr>
<td style="text-align:left">Taxis</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">排序</td>
</tr>
<tr>
<td style="text-align:left">AddDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">栏目添加时间</td>
</tr>
<tr>
<td style="text-align:left">ImageUrl</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">栏目图片，存储图片地址</td>
</tr>
<tr>
<td style="text-align:left">Content</td>
<td style="text-align:left">Text</td>
<td style="text-align:left"></td>
<td style="text-align:left">栏目正文，以编辑器提交信息</td>
</tr>
<tr>
<td style="text-align:left">ContentNum</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">栏目下的内容总数，不包含下级栏目的内容数</td>
</tr>
<tr>
<td style="text-align:left">FilePath</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">栏目生成页面路径</td>
</tr>
<tr>
<td style="text-align:left">ChannelFilePathRule</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">下级栏目的页面命名规则</td>
</tr>
<tr>
<td style="text-align:left">ContentFilePathRule</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">栏目下内容的页面命名规则</td>
</tr>
<tr>
<td style="text-align:left">LinkUrl</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">外部链接，设置后链接将指向此地址</td>
</tr>
<tr>
<td style="text-align:left">LinkType</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">链接类型，设置此栏目的链接与子栏目及内容的关系</td>
</tr>
<tr>
<td style="text-align:left">ChannelTemplateId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">栏目模板 Id</td>
</tr>
<tr>
<td style="text-align:left">ContentTemplateId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">内容模板 Id</td>
</tr>
<tr>
<td style="text-align:left">Keywords</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">关键字列表，各关键词间用英文逗号“,”分割。</td>
</tr>
<tr>
<td style="text-align:left">Description</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">页面描述</td>
</tr>
<tr>
<td style="text-align:left">Children</td>
<td style="text-align:left">Array</td>
<td style="text-align:left"></td>
<td style="text-align:left">下级栏目数组</td>
</tr>
</tbody>
</table>
</template>