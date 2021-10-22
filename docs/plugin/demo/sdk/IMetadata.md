# IMetadata interface

插件元数据接口。

``` c#
public interface IMetadata
```

## Members

| name | description |
| :----- | :----- |
|Authors { get; }	|插件作者列表。|
|Copyright { get; }	|插件版权。|
|Description { get; }	|插件说明。|
|IconUrl { get; }	|插件图标访问地址。|
|Id { get; }	|插件Id，作为插件的唯一标识。|
|Language { get; }	|插件使用的语言。|
|LicenseUrl { get; }	|插件授权许可说明地址。|
|Owners { get; }	|插件拥有者。|
|ProjectUrl { get; }	|插件官网地址。|
|ReleaseNotes { get; }	|插件版本发行说明。|
|RequireLicenseAcceptance { get; }	|使用插件前是否需要用户阅读并确认同意授权许可说明。|
|Summary { get; }	|插件概要。|
|Tags { get; }	|插件标签。|
|Title { get; }	|插件名称。|
|Version { get; }	|插件版本号。|

