# <stl:site> 获取站点值

```html
<stl:site
    siteName="站点名称"
    siteDir="站点文件夹"
    type="类型"
    formatString="显示的格式"
    separator="显示多项时的分割字符串"
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
</stl:site>
```

### 说明

通过 `stl:site` 标签在模板中显示站点值

`<stl:site>` 必须包含 siteName 或 siteDir 属性，用于指定站点并显示内容。

`<stl:site>` 必须包含子标签，否则将不起作用，系统将找到对应的站点并在对应站点下解析子标签。子标签可以是任意STL标签或HTML标签。

`<stl:site>` 标签对应的实体为`{stl:site}`。

### 属性
