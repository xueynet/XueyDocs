# <stl:sqlContent> 数据库值

```html
<stl:sqlContent
    connectionStringName="数据库链接字符串名称"
    connectionString="数据库链接字符串"
    queryString="数据库查询语句"
    type="显示的类型"
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
</stl:sqlContent>
```

### 说明

通过 `stl:sqlContent` 标签在模板中显示数据库值。

`stl:sqlContent` 标签可以单独使用或者作为 `<stl:sqlContents>` 等内容列表标签的子标签。

`stl:sqlContent` 单独使用时需要指定 connectionString 或 connectionStringName 及 queryString 属性。

`stl:sqlContent` 标签与 STL 数据库实体的作用基本相同，`stl:sqlContent` 可以控制显示的字数及格式。

`<stl:sqlContent>`标签对应的实体为`{stl:sqlContent}`。
