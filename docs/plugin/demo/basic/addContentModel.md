# 添加插件内容模型

插件可以添加插件内容模型，用于存储内容。

参考 IService、TableColumn、DataType。

``` c#
public IService AddContentModel(string tableName, List<TableColumn> tableColumns)
```

tableName 代表内容表在数据库中的名称，请设置唯一的表名；tableColumns 代表内容表在数据库中的字段信息。

下面的例子来自招聘插件，为系统添加招聘需要的内容模型：

``` c#
public class Main : PluginBase
{
    public override void Startup(IService service)
    {
        service.AddContentModel("ss_jobs", new List<TableColumn>
        {
            new TableColumn
            {
                AttributeName = "Department",
                DataType = DataType.VarChar,
                DataLength = 200,
                InputStyle = new InputStyle
                {
                    InputType = InputType.Text,
                    DisplayName = "所属部门",
                    IsRequired = true
                }
            },
            new TableColumn
            {
                AttributeName = "Location",
                DataType = DataType.VarChar,
                DataLength = 200,
                InputStyle = new InputStyle
                {
                    InputType = InputType.Text,
                    DisplayName = "工作地点",
                    IsRequired = true
                }
            },
            new TableColumn
            {
                AttributeName = "NumberOfPeople",
                DataType = DataType.VarChar,
                DataLength = 200,
                InputStyle = new InputStyle
                {
                    InputType = InputType.Text,
                    DisplayName = "招聘人数",
                    IsRequired = true,
                    DefaultValue = "不限"
                }
            },
            new TableColumn
            {
                AttributeName = "Responsibility",
                DataType = DataType.Text,
                InputStyle = new InputStyle
                {
                    InputType = InputType.TextEditor,
                    DisplayName = "工作职责",
                    IsRequired = true
                }
            },
            new TableColumn
            {
                AttributeName = "Requirement",
                DataType = DataType.Text,
                InputStyle = new InputStyle
                {
                    InputType = InputType.TextEditor,
                    DisplayName = "工作要求",
                    IsRequired = true
                }
            }
        });
    }
}
```

需要说明的是，在内容模型字段中必须包含InputStyle属性，用于设置此字段在内容编辑页面中的提交方式，请参考InputStyle。