# <stl:file> 文件下载链接

```html
<stl:file
    type="指定存储附件的字段"
    no="显示第几个附件"
    src="需要下载的文件地址"
    isFileName="仅显示文件名称"
    isFileType="仅显示文件类型"
    isFileSize="仅显示文件大小"
    isCount="仅显示下载次数"
    isLower="是否转换为小写"
    isUpper="是否转换为大写"
    leftText="显示在信息前的文字"
    rightText="显示在信息后的文字">
</stl:file>
```

### 说明

通过 `stl:file` 标签在模板中显示文件下载链接。

`stl:file` 通常在内容模板中使用或者作为 `<stl:contents>` 内容列表标签的子标签使用，用于显示内容附件的下载链接。

如果指定 src 属性，页面将显示指定文件的下载链接。

`stl:file` 标签默认显示内容附件 FileUrl 字段，如果希望显示自定义的附件字段，则需要设置 type 属性。

`stl:file` 标签内可以嵌入任意代码，用于提示下载，如果没有子标签，系统默认将显示文件的文件名。

可以通过 isFileName、isFileType、isFileSize 或者 isCount 来显示下载文件的文件名称、文件类型、文件大小以及下载次数。 stl:file 标签内可以嵌入包含以上属性的 stl:file 标签，用于显示下载文件的详情。

若附件字段有多个值，可以使用 `<stl:each>` 遍历所有的附件，或者使用 no 属性指定显示第几个附件。

`<stl:file>` 标签对应的实体为`{stl:file}`。
