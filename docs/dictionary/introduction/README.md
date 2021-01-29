# XYCMS 数据结构参考手册

XYCMS 在数据库中创建的表主要由三部分组成：

* XYCMS 系统数据表
* XYCMS 内容表
* XYCMS 插件表

下面是 XYCMS 安装期间创建的数据库表的概要和描述，数据库结构和下面的图表最后更新于6.2版本。

### 系统数据表

| 表 | 概述 |
| :----- | :----- |
|siteserver_AccessToken	|API密钥表，存储访问REST API的密钥|
|siteserver_Administrator	|管理员表，存储管理员信息|
|siteserver_AdministratorsInRoles	|管理员角色表，存储管理员与角色的关系|
|siteserver_Area	|区域表，存储所属区域|
|siteserver_Channel|	栏目表，存储站点下的栏目信息|
|siteserver_ChannelGroup	|栏目组表，存储栏目组信息|
|siteserver_Config	|系统配置表，存储系统配置信息|
|siteserver_ContentCheck	|内容审核表，存储内容审核信息|
|siteserver_ContentGroup	|内容组表，存储内容组信息|
|siteserver_Count	|数字统计表，存储统计信息|
|siteserver_DbCache	|数据缓存表，存储缓存信息|
|siteserver_Department	|部门表，存储所有部门|
|siteserver_ErrorLog	|错误日志表，存储所有报错信息|
|siteserver_Keyword	|敏感词表，存储敏感词信息|
|siteserver_Log	|管理员操作日志表，存储管理员所执行的动作日志|
|siteserver_PermissionsInRoles	|权限角色表，存储权限与角色的关系|
|siteserver_PluginConfig	|插件配置表，存储插件配置信息|
|siteserver_Plugin	|插件表，存储插件信息|
|siteserver_RelatedField	|联动字段表，存储联动字段信息|
|siteserver_RelatedFieldItem	|联动字段选项表，存储联动字段的选择项列表|
|siteserver_Role	|角色表，存储管理员角色信息|
|siteserver_Site	|站点表，存储站点信息|
|siteserver_SiteLog|	站点日志表，存储对站点的所有操作日志信息|
|siteserver_SitePermissions	|站点权限表，存储分配给管理员的站点权限|
|siteserver_Special	|专题表，存储站点下的专题信息|
|siteserver_Table	|内容表基本信息表，存储与站点关联的内容表的基本信息|
|siteserver_TableMetadata	|内容表字段信息表，存储与站点关联的内容表的详细字段信息|
|siteserver_TableStyle	|提交样式表，存储内容编辑界面中每项的提交样式|
|siteserver_TableStyleItem	|提交样式选项表，存储提交样式的选择项列表|
|siteserver_Tag	|内容标签表，存储内容的关联标签|
|siteserver_Template	|模板表，存储站点的模板信息|
|siteserver_TemplateLog	|模板日志表，存储模板的版本信息|
|siteserver_TemplateMatch	|模板匹配表，存储模板与栏目之间的匹配关系|
|siteserver_User	|用户表，存储用户信息|
|siteserver_UserLog	|用户日志表，存储用户的操作日志|

### 内容表

内容表用于存储站点内容数据，每个站点可以自定义自己的内容表，也可以与其他站点使用同一个内容表。

内容表默认名称为`model_Content`，XYCMS 后台可以新建新的内容表，或者修改现有内容表的字段。

### 插件表

插件表是XYCMS插件所使用的表，每个插件都可以有自己的表结构，插件表通常以插件Id作为开头。

<style>
table th:first-of-type {
    width: 20%;
}
table th:nth-of-type(2) {
    width: 80%;
}
</style>
