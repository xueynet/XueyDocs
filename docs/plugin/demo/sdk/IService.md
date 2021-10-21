# IService interface

插件服务注册接口。 插件服务注册接口是插件机制的核心，用于定义插件能够提供的各种服务，一个方法对应一个事件或者一个功能。

``` c#
public interface IService
```

## Members

| name | description |
| :----- | :----- |
|event AfterStlParse	|STL解析后的触发事件。|
|event BeforeStlParse	|STL解析前的触发事件。|
|event ContentAddCompleted	|内容添加完成后的触发事件。|
|event ContentDeleteCompleted	|内容删除完成后的触发事件。|
|event ContentFormLoad	|内容表单载入时的触发事件。|
|event ContentFormSubmit	|内容表单提交时的触发事件。|
|event ContentTranslateCompleted	|内容转移完成后的触发事件。|
|event RestApiDelete	|以DELETE方式对当前插件的REST Api访问的触发事件。|
|event RestApiGet	|以GET方式对当前插件的REST Api访问的触发事件。|
|event RestApiPost	|以POST方式对当前插件的REST Api访问的触发事件。|
|event RestApiPut	|以PUT方式对当前插件的REST Api访问的触发事件。|
|AddApiAuthorization()	|添加REST Api插件授权。|
|AddContentColumn(…)	|添加插件的内容列表显示项。|
|AddContentMenu(…)	|添加内容菜单。 内容菜单位于内容管理的内容列表中。|
|AddContentModel(…)	|添加插件的内容模型，包含内容存储的表名称以及内容表的字段列表。|
|AddDatabaseTable(…)	|添加插件的数据库表，包含表名称以及表字段列表。 此方法可以多次调用，系统将为此插件创建指定的数据库表结构。|
|AddJob(…)	|添加XYCMS Cli命令行可以执行的任务。 实现此方法的插件将能够在XYCMS Cli命令行中运行任务。|
|AddSiteMenu(…)	|添加站点菜单。 站点菜单位于系统左侧的插件管理菜单中。 此菜单的Url地址将自动加上对应的站点Id。|
|AddStlElementParser(…)	|添加STL元素解析器。|
|AddSystemMenu(…)	|添加系统菜单。 系统菜单位于系统头部的插件管理下拉菜单中。|

