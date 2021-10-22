# Context class

封装系统上下文相关信息

``` c#
public static class Context
```

## Public Members

| name | description |
| :----- | :----- |
|static AdminApi { get; }	|管理员及权限Api接口。|
|static AdminDirectory { get; }	|系统后台文件夹名称，默认为XYCMS。|
|static ChannelApi { get; }	|栏目Api接口。|
|static ConfigApi { get; }	|插件及系统配置Api接口。|
|static ConnectionString { get; }	|系统使用的数据库连接字符串。|
|static ContentApi { get; }	|内容Api接口。|
|static DatabaseApi { get; }	|数据库操作Api接口。|
|static DatabaseType { get; }	|系统使用的数据库类型。|
|static ParseApi { get; }	|STL解析Api接口。|
|static PhysicalApplicationPath { get; }	|网站根目录文件夹地址。|
|static PluginApi { get; }	|插件Api接口。|
|static Request { get; }	|获取插件Url访问请求IRequest。 当存在对插件的HTTP访问请求时（REST Api访问、页面访问等），返回IRequest实例；否则返回 null。|
|static SiteApi { get; }	|站点Api接口。|
|static UserApi { get; }	|用户Api接口。|
|static UtilsApi { get; }	|工具类Api接口。|
|static Initialize(…)	|初始化上下文|

