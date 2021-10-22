# IApiCollection interface

插件可调用的Api集合接口。

``` c#
public interface IApiCollection
```

## Members

| name | description |
| :----- | :----- |
|AdminApi { get; }	|管理员及权限Api接口。|
|ChannelApi { get; }	|栏目Api接口。|
|ConfigApi { get; }	|插件及系统配置Api接口。|
|ContentApi { get; }	|内容Api接口。|
|DatabaseApi { get; }	|数据库操作Api接口。|
|ParseApi { get; }	|STL解析Api接口。|
|PluginApi { get; }	|插件Api接口。|
|SiteApi { get; }	|站点Api接口。|
|UserApi { get; }	|用户Api接口。|
|UtilsApi { get; }	|工具类Api接口。|

