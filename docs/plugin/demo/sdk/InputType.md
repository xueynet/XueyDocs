# InputType class

表单的输入类型。

``` c#
public class InputType : IComparable<InputType>, IEquatable<InputType>
```

## Public Members

| name | description |
| :----- | :----- |
|static readonly CheckBox	|多选项。|
|static readonly Customize	|自定义输入控件。|
|static readonly Date	|日期选择框。|
|static readonly DateTime	|日期及时间选择框。|
|static readonly File	|文件上传控件。|
|static readonly Hidden	|隐藏项。|
|static readonly Image	|图片上传控件。|
|static readonly Radio	|单选项。|
|static readonly SelectCascading	|级联选择下拉框。|
|static readonly SelectMultiple	|多选下拉框。|
|static readonly SelectOne	|单选下拉框。|
|static readonly Text	|文本输入框。|
|static readonly TextArea	|多行文本输入框。|
|static readonly TextEditor	|富文本编辑器。|
|static readonly Video	|音视频上传控件。|
|Value { get; }	|输入类型的值。|
|CompareTo(…)	|比较两个输入类型是否一致。|
|Equals(…)	|比较两个输入类型是否一致。|
|override Equals(…)	||
|override GetHashCode()	||
|override ToString()	||
|operator ==	|比较两个输入类型是否一致。|
|operator !=	|比较两个输入类型是否不一致。|

