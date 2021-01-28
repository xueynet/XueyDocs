# <stl:value> 获取值

```html
<stl:value
    type="类型"
    formatString="显示的格式"
    wordNum="显示字符的数目"
    startIndex="字符开始位置"
    length="指定字符长度"
    ellipsis="文字超出部分显示的文字"
    replace="需要被替换的文字"
    to="替换文字"
    isClearTags="清除标签"
    isReturnToBr="回车改为换行"
    isLower="转换为小写"
    isUpper="转换为大写"
    leftText="显示在信息前的文字"
    rightText="显示在信息后的文字">
</stl:value>
```

### 说明

通过 `stl:value` 标签在模板中获取值

type 属性可以是指定的字符串，代表"自定义模板语言"中定义的标签名称，系统将解析对应的自定义模板标签。

`<stl:value>` 标签对应的实体为`{stl:value}`。

### 属性
