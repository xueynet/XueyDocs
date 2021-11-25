# 数据实体

使用 Datory 首先需要定义数据库实体类：

``` c#
using System.Collections.Generic;
using Datory;
using Datory.Annotations;

namespace XYCMS.Models
{
    [DataTable("siteserver_AccessToken")]
    public class AccessToken : Entity
    {
        [DataColumn]
        public string Title { get; set; }

        [DataColumn]
        public string Token { get; set; }

        [DataColumn]
        public string AdminName { get; set; }

        [DataColumn]
        public List<string> Scopes { get; set; }
    }
```

以上代码首先从 settingsManager 中获取数据库链接信息并创建数据仓库 repository，仓库的数据源映射至 DataModel 实体类，然后设置 Where 查询条件，按 Id 字段倒序排序并限制最高获取10条数据，最后返回 Name 字段的列表值。

- 实体类需要集成 Entity 类，继承 Entity 类之后，实体类将自动拥有Id（自增长Id字段）、Guid（全局唯一标识符）、ExtendValues（扩展字段）、CreatedDate（数据创建时间）、LastModifiedDate（数据修改时间）这五个字段，并且这五个字段的值是由系统进行维护的

- 实体类需要通过 [DataTable] 定义表名称

- 实体类需要通过 [DataColumn] 定义表字段