# ValidateType class

表单输入的验证规则类型。

``` c#
public class ValidateType : IComparable<ValidateType>, IEquatable<ValidateType>
```

## Public Members

| name | description |
| :----- | :----- |
|static readonly Chinese	|中文验证。|
|static readonly Currency	|货币格式验证。|
|static readonly Email	|Email格式验证。|
|static readonly English	|英文验证。|
|static readonly IdCard	|身份证号码验证。|
|static readonly Integer	|整数验证。|
|static readonly Mobile	|手机号码验证。|
|static readonly None	|无验证。|
|static readonly Phone	|电话号码验证。|
|static readonly RegExp	|正则表达式验证。|
|static readonly Url	|网址格式验证。|
|static readonly Zip	|邮政编码验证。|
|Value { get; }	|验证规则的值。|
|CompareTo(…)	|比较两个验证规则是否一致。|
|override Equals(…)	||
|Equals(…)	|比较两个验证规则是否一致。|
|override GetHashCode()	||
|override ToString()	||
|operator ==	|比较两个验证规则是否一致。|
|operator !=	|比较两个验证规则是否不一致。|

