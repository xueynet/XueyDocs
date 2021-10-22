# ISiteInfo interface

站点实体接口。 对应数据库中的xycms_Site表。

``` c#
public interface ISiteInfo
```

## Members

| name | description |
| :----- | :----- |
|Attributes { get; }	|站点可扩展属性，以键/值对的方式存储站点数据，键不区分大小写。 除了存储站点本身数据，还将用于存储站点的自定义字段数据。|
|Id { get; set; }	|站点Id。|
|IsRoot { get; set; }	|是否主站。|
|ParentId { get; set; }	|如果没有上级站点，则返回 0，否则返回上级站点Id。|
|SiteDir { get; set; }	|站点文件夹。|
|SiteName { get; set; }	|站点名称。|
|TableName { get; set; }	|站点内容表。|
|Taxis { get; set; }	|排序。|

