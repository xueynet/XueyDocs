# InputStyle class

表示表单的输入样式。

``` c#
public class InputStyle
```

## Public Members

| name | description |
| :----- | :----- |
|InputStyle()	|The default constructor.|
|DefaultValue { get; set; }	|表单输入的默认值。|
|DisplayName { get; set; }	|表单输入的显示名称。|
|Height { get; set; }	|表单输入的显示高度。|
|HelpText { get; set; }	|表单输入的提示信息。|
|InputType { get; set; }	|表单的输入类型。|
|IsRequired { get; set; }	|表单输入是否必填项。|
|ListItems { get; set; }	|表单输入的列表项。 当表单的输入类型（InputType）为列表项（Checkbox、Radio、Select）时启用。|
|MaxNum { get; set; }	|表单输入的最大字符数。 0 代表不限制。|
|MinNum { get; set; }	|表单输入的最小字符数。 0 代表不限制。|
|RegExp { get; set; }	|表单输入验证的正则表达式。 当表单输入的验证规则（ValidateType）为正则表达式验证（RegExp）时启用。|
|ValidateType { get; set; }	|表单输入的验证规则。|
|Width { get; set; }	|表单输入的显示宽度。|

