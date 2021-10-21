# IContentApi interface

内容Api接口。

``` c#
public interface IContentApi
```

## Members

| name | description |
| :----- | :----- |
|Delete(…)	|删除内容。|
|GetContentIdList(…)	|获取指定栏目的所有内容Id的列表。|
|GetContentInfo(…)	|获取内容实例。|
|GetContentInfoList(…)	|获取满足条件的翻页内容列表。 配合GetCount方法，能够实现内容的翻页效果。|
|GetContentUrl(…)	|获取内容Url访问地址。|
|GetContentValue(…)	|获取内容的属性值。|
|GetCount(…)	|获取满足条件的内容总数。|
|GetTableColumns(…)	|通过站点Id以及栏目Id获取此栏目关联的内容表字段列表。|
|GetTableName(…)	|通过站点Id以及栏目Id获取此栏目关联的内容表名称。|
|Insert(…)	|新增内容。|
|NewInstance(…)	|实例化内容对象。|
|Update(…)	|修改内容。|

