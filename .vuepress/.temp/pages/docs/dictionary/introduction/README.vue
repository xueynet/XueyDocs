<template><h1 id="xycms-数据结构参考手册"><a class="header-anchor" href="#xycms-数据结构参考手册">#</a> XYCMS 数据结构参考手册</h1>
<p>XYCMS 在数据库中创建的表主要由三部分组成：</p>
<ul>
<li>XYCMS 系统数据表</li>
<li>XYCMS 内容表</li>
<li>XYCMS 插件表</li>
</ul>
<p>下面是 XYCMS 安装期间创建的数据库表的概要和描述，数据库结构和下面的图表最后更新于6.2版本。</p>
<h3 id="系统数据表"><a class="header-anchor" href="#系统数据表">#</a> 系统数据表</h3>
<table>
<thead>
<tr>
<th style="text-align:left">表</th>
<th style="text-align:left">概述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">siteserver_AccessToken</td>
<td style="text-align:left">API密钥表，存储访问REST API的密钥</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Administrator</td>
<td style="text-align:left">管理员表，存储管理员信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_AdministratorsInRoles</td>
<td style="text-align:left">管理员角色表，存储管理员与角色的关系</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Area</td>
<td style="text-align:left">区域表，存储所属区域</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Channel</td>
<td style="text-align:left">栏目表，存储站点下的栏目信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_ChannelGroup</td>
<td style="text-align:left">栏目组表，存储栏目组信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Config</td>
<td style="text-align:left">系统配置表，存储系统配置信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_ContentCheck</td>
<td style="text-align:left">内容审核表，存储内容审核信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_ContentGroup</td>
<td style="text-align:left">内容组表，存储内容组信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Count</td>
<td style="text-align:left">数字统计表，存储统计信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_DbCache</td>
<td style="text-align:left">数据缓存表，存储缓存信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Department</td>
<td style="text-align:left">部门表，存储所有部门</td>
</tr>
<tr>
<td style="text-align:left">siteserver_ErrorLog</td>
<td style="text-align:left">错误日志表，存储所有报错信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Keyword</td>
<td style="text-align:left">敏感词表，存储敏感词信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Log</td>
<td style="text-align:left">管理员操作日志表，存储管理员所执行的动作日志</td>
</tr>
<tr>
<td style="text-align:left">siteserver_PermissionsInRoles</td>
<td style="text-align:left">权限角色表，存储权限与角色的关系</td>
</tr>
<tr>
<td style="text-align:left">siteserver_PluginConfig</td>
<td style="text-align:left">插件配置表，存储插件配置信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Plugin</td>
<td style="text-align:left">插件表，存储插件信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_RelatedField</td>
<td style="text-align:left">联动字段表，存储联动字段信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_RelatedFieldItem</td>
<td style="text-align:left">联动字段选项表，存储联动字段的选择项列表</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Role</td>
<td style="text-align:left">角色表，存储管理员角色信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Site</td>
<td style="text-align:left">站点表，存储站点信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_SiteLog</td>
<td style="text-align:left">站点日志表，存储对站点的所有操作日志信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_SitePermissions</td>
<td style="text-align:left">站点权限表，存储分配给管理员的站点权限</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Special</td>
<td style="text-align:left">专题表，存储站点下的专题信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Table</td>
<td style="text-align:left">内容表基本信息表，存储与站点关联的内容表的基本信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_TableMetadata</td>
<td style="text-align:left">内容表字段信息表，存储与站点关联的内容表的详细字段信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_TableStyle</td>
<td style="text-align:left">提交样式表，存储内容编辑界面中每项的提交样式</td>
</tr>
<tr>
<td style="text-align:left">siteserver_TableStyleItem</td>
<td style="text-align:left">提交样式选项表，存储提交样式的选择项列表</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Tag</td>
<td style="text-align:left">内容标签表，存储内容的关联标签</td>
</tr>
<tr>
<td style="text-align:left">siteserver_Template</td>
<td style="text-align:left">模板表，存储站点的模板信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_TemplateLog</td>
<td style="text-align:left">模板日志表，存储模板的版本信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_TemplateMatch</td>
<td style="text-align:left">模板匹配表，存储模板与栏目之间的匹配关系</td>
</tr>
<tr>
<td style="text-align:left">siteserver_User</td>
<td style="text-align:left">用户表，存储用户信息</td>
</tr>
<tr>
<td style="text-align:left">siteserver_UserLog</td>
<td style="text-align:left">用户日志表，存储用户的操作日志</td>
</tr>
</tbody>
</table>
<h3 id="内容表"><a class="header-anchor" href="#内容表">#</a> 内容表</h3>
<p>内容表用于存储站点内容数据，每个站点可以自定义自己的内容表，也可以与其他站点使用同一个内容表。</p>
<p>内容表默认名称为<code>model_Content</code>，XYCMS 后台可以新建新的内容表，或者修改现有内容表的字段。</p>
<h3 id="插件表"><a class="header-anchor" href="#插件表">#</a> 插件表</h3>
<p>插件表是XYCMS插件所使用的表，每个插件都可以有自己的表结构，插件表通常以插件Id作为开头。</p>
</template>

<style>
table th:first-of-type {
    width: 20%;
}
table th:nth-of-type(2) {
    width: 80%;
}
</style>
