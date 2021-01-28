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

### 属性

::: tip
所有属于HTML 标签`<a>`的属性均适用于`<stl:file>`标签。
:::

| 属性 | 说明 |
|:----|:----|
| type |	指定存储附件的字段 |
| no |	显示第几个附件 |
| src |	需要下载的文件地址 |
| isFileName |	仅显示文件名称 |
| isFileType |	仅显示文件类型 |
| isFileSize |	仅显示文件大小 |
| isCount |	仅显示下载次数 |
| isLower |	是否转换为小写 |
| isUpper |	是否转换为大写 |
| leftText |	显示在信息前的文字 |
| rightText |	显示在信息后的文字 |

**type - 指定存储附件的字段**

可以是自定义的附件字段，默认为 FileUrl。

**no - 显示第几个附件**

显示字段存储的第几个附件，默认为 1。

**src - 需要下载的文件地址**

可以用"@"开头表示当前网站根目录，用"~"开头表示系统根目录，不设置代表使用内容附件字段作为下载文件地址。

```html
<stl:file src="@/upload/files/2019/3/说明书.pdf"></stl:file>
```

解析后的 HTML 代码：

```html
<a href="/api/sys/stl/actions/download?siteId=32&channelId=34&contentId=368&fileUrl=QcKhz6Zn74N8UPHoyPH4D7DLpEtsNF1KP5zJATrxYN1DcaDuqdwyeQ0equals00equals00secret0">说明书.pdf</a>
```

**isFileName - 仅显示文件名称**

设置属性 isFileName 为true，<stl:file> 标签将解析为附件对应的文件名称。

```html
<stl:file isFileName="true" src="@/upload/files/2019/3/说明书.pdf"></stl:file>
```

解析后的 HTML 代码：

```html
说明书
```

**isFileType - 仅显示文件类型**

设置isFileType属性为true，`<stl:file>` 标签将解析为附件对应的文件类型，如果希望显示大写文件类型，可以设置属性 isUpper 为 true。

```html
<stl:file isFileType="true" isUpper="true" src="@/upload/files/2019/3/说明书.pdf"></stl:file>
```

解析后的 HTML 代码：

```html
PDF
```

**isFileSize - 仅显示文件大小**

设置属性 isFileSize 为true，`<stl:file>` 标签将解析为附件对应的文件大小。

```html
<stl:file isFileSize="true" src="@/upload/files/2019/3/说明书.pdf"></stl:file>
```

解析后的 HTML 代码：

```html
9MB
```

**isCount - 仅显示下载次数**

仅显示下载次数，设置属性 isFileSize 为true，`<stl:file>` 标签将解析为此附件的总下载次数。

```html
<stl:file isCount="true"></stl:file>
```

解析后的 HTML 代码：

```html
231
```

**isLower - 是否转换为小写**

设置是否将文本中的所有英文字母转换为小写字母。

* "true" 转换为小写。
* "false" 不转换为小写。此值是默认的，如果没有指定属性的话。

```html
<stl:file isLower="true"></stl:file>
```

**isUpper - 是否转换为大写**

设置是否将文本中的所有英文字母转换为大写字母。

* "true" 转换为大写。
* "false" 不转换为大写。此值是默认的，如果没有指定属性的话。

```html
<stl:file isUpper="true"></stl:file>
```

**leftText - 显示在信息前的文字**

系统会判断附件是否存在，如果附件不存在，文字前缀也将不解析。

```html
<stl:file leftText="附件下载："></stl:file>
```

解析后的 HTML 代码：

```html
附件下载：<a href="/api/sys/stl/actions/download?siteId=32&channelId=34&contentId=368&fileUrl=QcKhz6Zn74N8UPHoyPH4D7IuCFtKMnj0uaiJIGcd0yn0add0UOl3dpPDWgLj50add0Z6cagoKLGYjCfaxYdDxYnIzDWhGqlKy2hr0add0inB0secret0">说明书.pdf</a>
```

**rightText - 显示在信息后的文字**

系统会判断附件是否存在，如果附件不存在，文字后缀也将不解析。

```html
<stl:file leftText="【" rightText="】"></stl:file>
```

解析后的 HTML 代码：

```html
【<a href="/api/sys/stl/actions/download?siteId=32&channelId=34&contentId=368&fileUrl=QcKhz6Zn74N8UPHoyPH4D7IuCFtKMnj0uaiJIGcd0yn0add0UOl3dpPDWgLj50add0Z6cagoKLGYjCfaxYdDxYnIzDWhGqlKy2hr0add0inB0secret0">说明书.pdf</a>】
```

### 示例

**显示当前内容的附件下载链接及详情**

下面的例子在页面中显示当前内容的附件下载链接及附件详情。

```html
<stl:file>
  文件名：<stl:file isFileName="true"></stl:file> | 
  文件格式：<stl:file isFileType="true" isUpper="true"></stl:file> | 
  文件大小：<stl:file isFileSize="true" ></stl:file> | 
  下载量：<stl:file isCount="true" ></stl:file>
</stl:file>
```

解析后的 HTML 代码

```html
<a href="/api/sys/stl/actions/download?siteId=32&channelId=34&contentId=368&fileUrl=QcKhz6Zn74N8UPHoyPH4D7IuCFtKMnj0uaiJIGcd0yn0add0UOl3dpPDWgLj50add0Z6cagoKLGYjCfaxYdDxYnIzDWhGqlKy2hr0add0inB0secret0">
  文件名：说明书 |
  文件格式：PDF |
  文件大小：9MB |
  下载量：2
</a>
```

**循环显示内容列表附件下载链接**

下面的例子在内容列表中显示每一篇内容的附件下载链接。

```html
<stl:contents>
  <stl:content type="Title"></stl:content>
  <stl:file>下载</stl:file>
  <hr />
</stl:contents>
```

解析后的 HTML 代码：

```html
造美好生活的治理方向
        
<hr>

短缺之下，每个人都要行动
<a href="/api/sys/stl/actions/download?siteId=32&channelId=34&contentId=368&fileUrl=QcKhz6Zn74N8UPHoyPH4D7IuCFtKMnj0uaiJIGcd0yn0add0UOl3dpPDWgLj50add0Z6cagoKLGYjCfaxYdDxYnIzDWhGqlKy2hr0add0inB0secret0">下载</a>

<hr>

精准脱贫走向整体联动

<hr>
````

**显示指定文件的下载链接**

下面的例子直接指定下载文件地址，显示下载链接。

```html
<stl:file src="@/upload/files/2019/3/说明书.pdf"></stl:file>
```

解析后的 HTML 代码：

```html
<a href="/api/sys/stl/actions/download?siteId=32&channelId=34&contentId=368&fileUrl=QcKhz6Zn74N8UPHoyPH4D7DLpEtsNF1KP5zJATrxYN1DcaDuqdwyeQ0equals00equals00secret0">说明书.pdf</a>
```
