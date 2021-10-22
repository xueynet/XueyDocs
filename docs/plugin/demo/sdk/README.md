# SDK 参考

支持平台：

.NET Framework 4.0，.NET Framework 4.5，.NET Core 5.0。

| public type | description |
| :----- | :----- |
|class ContentEventArgs|为内容操作事件提供数据|
|class ContentFormLoadEventArgs|为内容编辑（新增）页面的载入事件提供数据|
|delegate ContentFormLoadEventHandler	|表示将用于处理内容编辑（新增）页面的载入事件的方法|
|class ContentFormSubmitEventArgs	|为内容编辑（新增）页面的提交事件提供数据|
|class ContentTranslateEventArgs	|为内容转移事件提供数据|
|static class Context	|封装系统上下文相关信息|
|class DatabaseType	|系统支持的数据库类型|
|class DatabaseTypeConverter	|字符串与DatabaseType转换类|
|class DataType	|系统支持的数据库数据类型|
|class DataTypeConverter	|字符串与DataType转换类|
|interface IAccessToken	|Access Token接口|
|interface IAdminApi	|管理员及权限Api接口|
|interface IAdministratorInfo	|管理员实体接口。 对应数据库中的xycms_Administrator表|
|interface IApiCollection	|插件可调用的Api集合接口|
|interface IAttributes	|可扩展属性的对象接口。 系统以键/值对的方式存储数据，键不区分大小写|
|interface IChannelApi	|栏目Api接口|
|interface IChannelInfo	|栏目实体接口。 对应数据库中的xycms_Channel表|
|interface IConfigApi	|插件及系统配置Api接口|
|interface IContentApi	|内容Api接口|
|interface IContentContext	|内容事件关联的上下文|
|interface IContentInfo	|内容实体接口。 内容表默认名称为model_Content，XYCMS CMS 后台可以新建新的内容表，或者修改现有内容表的字段|
|interface IDatabaseApi	|数据库操作Api接口|
|interface IEnvironment	|插件运行环境接口|
|interface IJobContext	|包含XYCMS Cli命令行执行任务时的上下文信息|
|interface ILogInfo	|日志实体接口|
|interface IMetadata	|插件元数据接口|
|class Initializer	|插件初始化类，此类的方法由系统调用，在插件开发时请勿直接使用|
|class InputListItem	|表示列表中的数据项|
|class InputStyle	|表示表单的输入样式|
|class InputType	|表单的输入类型|
|class InputTypeConverter	|字符串与InputType转换类|
|interface IParseApi	|STL解析Api接口|
|interface IParseContext	|STL解析上下文|
|interface IPermissions	|登录账号的权限|
|interface IPluginApi	|插件Api接口|
|interface IRequest	|访问插件时的认证请求|
|interface IService	|插件服务注册接口。 插件服务注册接口是插件机制的核心，用于定义插件能够提供的各种服务，一个方法对应一个事件或者一个功能|
|interface ISiteApi	|站点Api接口|
|interface ISiteInfo	|站点实体接口。 对应数据库中的xycms_Site表|
|interface IUserApi	|用户Api接口|
|interface IUserInfo	|用户实体接口|
|interface IUtilsApi	|工具类Api接口|
|class Menu	|插件菜单。 插件菜单可显示在系统头部、左侧或者内容列表中|
|class ParseEventArgs	|为STL解析事件提供数据|
|abstract class PluginBase	|插件父类，所有插件必须继承此类并实现Startup方法|
|class RestApiEventArgs	|Rest Api|
|delegate RestApiEventHandler	|表示将用于处理Rest Api请求事件的方法|
|class TableColumn	|数据库表字段信息|
|class TemplateType	|系统支持的模板类型|
|class TemplateTypeConverter	|字符串与TemplateType转换类|
|class ValidateType	|表单输入的验证规则类型|
|class ValidateTypeConverter	|字符串与ValidateType转换类|


