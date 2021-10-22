# IEnvironment interface

插件运行环境接口。

``` c#
public interface IEnvironment
```

## Members

| name | description |
| :----- | :----- |
|AdminDirectory { get; }	|系统后台文件夹名称，默认为XYCMS。|
|ConnectionString { get; }	|系统使用的数据库连接字符串。|
|DatabaseType { get; }	|系统使用的数据库类型。|
|PhysicalApplicationPath { get; }	|网站根目录文件夹地址。|
|Request { get; }	|获取插件Url访问请求IRequest。 当存在对插件的HTTP访问请求时（REST Api访问、aspx页面访问等），返回IRequest实例；否则返回 null。|

