# PluginBase class

插件父类，所有插件必须继承此类并实现Startup方法。

``` c#
public abstract class PluginBase : Initializer, IMetadata
```

## Public Members

| name | description |
| :----- | :----- |
|Authors { get; }	||
|Copyright { get; }	||
|Description { get; }	||
|IconUrl { get; }	||
|Id { get; }	||
|Language { get; }	||
|LicenseUrl { get; }	||
|Owners { get; }	||
|ProjectUrl { get; }	||
|ReleaseNotes { get; }	||
|RequireLicenseAcceptance { get; }	||
|Summary { get; }	||
|Tags { get; }	||
|Title { get; }	||
|Version { get; }	||
|Initialize(…)	|初始化插件。 此方法将由 XYCMS CMS 系统载入插件时调用。|
|abstract Startup(…)	|Startup方法是插件机制的核心，用于定义插件能够提供的各种服务。|

