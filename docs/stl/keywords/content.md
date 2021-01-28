# <stl:content> 获取内容值

```html
<stl:content
    type="显示的类型"
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
    formatString="显示的格式"
    no="显示第几项"
    separator="显示多项时的分割字符串"
    isOriginal="获取所引用内容的值"
    leftText="显示在信息前的文字"
    rightText="显示在信息后的文字">
</stl:content>
```

### 说明

通过 `stl:content` 标签在模板中显示指定内容的属性值。

`<stl:content>` 标签在内容模板中单独使用时，系统默认将显示当前内容的值。

如果 `<stl:content>` 标签嵌套在 `<stl:contents>`以及`<stl:pageContents>` 内容列表标签内，系统将获取内容列表项并解析为相应的值。

stl:content 标签只能放在内容模版中或者作为 `<stl:contents>`以及`<stl:pageContents>` 等内容列表标签的子标签。

type 属性用于明确需要显示内容的具体字段，如果未设置，系统将显示内容标题。

如果需要对返回的文字进行截字或者其他处理，请设置 解析文字 属性。

如果需要显示日期/时间类型的内容字段，可以通过 formatString 属性 格式化日期。

如果希望将内容的属性值放到 HTML 元素或者 STL 元素的属性中使用，请使用`{stl:content}` 实体写法，如：`<a title="{stl:content type=title}">`。

如果需要获取内容正文并分页显示，请设置type属性为 `pageContent`，同时配合 `stl:pageItem` 标签实现分页效果。

### 解析

如果使用 `<stl:content>` 元素，系统将根据内容字段的类型解析为不同的值（通常为字符串，如果字段类型为图片系统将解析为`<img>`标签）。

如果使用 `{stl:content}` 实体，系统将根据是否设置type 属性，解析为不同的结果：

* 设置了type属性，系统将实体解析为内容的具体字段值。
* 未设置type属性，系统将实体解析为内容的JSON对象。

### 属性

| 属性 | 说明 |
|:-----|:-----|
| type | 显示的类型 |
| wordNum | 显示字符的数目 |
| startIndex | 字符开始位置 |
| length | 指定字符长度 |
| ellipsis | 文字超出部分显示的文字 |
| replace | 需要被替换的文字 |
| to | 替换文字 |
| isClearTags | 清除标签 |
| isReturnToBr | 回车改为换行 |
| isLower | 转换为小写 |
| isUpper | 转换为大写 |
| formatString | 显示的格式 |
| no | 显示第几项 |
| separator | 显示多项时的分割字符串 |
| isOriginal | 获取所引用内容的值 |
| leftText | 显示在信息前的文字 |
| rightText | 显示在信息后的文字 |

**type - 显示的类型**

显示内容属性的类型。根据后台内容表字段的不同 type 属性可以有不同的取值。详细字段请参考：[内容表结构](/dictionary/)

* "title" 内容标题
* "id" 内容 Id
* "addUserName" 内容添加者
* "addDate" 内容添加时间
* "lastEditUserName" 最后修改内容的用户名
* "lastEditDate" 内容的最后修改时间
* "subTitle" 内容副标题
* "summary" 内容简介
* "imageUrl" 内容图片
* "linkUrl" 内容链接
* "fileUrl" 内容附件
* "author" 内容作者
* "source" 内容来源
* "content" 内容正文
* "pageContent" 能够翻页显示的内容正文
* "tags" 内容标签
* "hits" 内容总点击量
* "hitsByDay" 日点击量
* "hitsByWeek" 周点击量
* "hitsByMonth" 月点击量
* "lastHitsDate" 最后一次点击时间
* "itemIndex" 项次序数字
* "自定义字段" 在后台内容字段管理中自定义的字段名称。

**wordNum - 显示字符的数目**

设置显示文字的字数，超出部分将用 ellipsis 属性设置的值替代。

::: tip
wordNum 区分中英文，中文汉字算作一个字符，两个英文字母才算作一个字符。 由于在 Web 页面中，两个英文字母的宽度等于一个汉字，所以我们通常使用 wordNum 属性来设置文本的显示数量。
:::

```html
<stl:content wordNum="50"></stl:content>
```

**startIndex - 字符开始位置**

设置文字开始显示的位置，默认值为 0，代表从头显示。

::: tip
startIndex 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。
:::

```html
<stl:content startIndex="10"></stl:content>
```

**length - 指定字符长度**

设置显示文字的字数，超出部分将用 ellipsis 属性设置的值替代。

::: tip
length 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。
:::

```html
<stl:content length="100"></stl:content>
```

**ellipsis - 文字超出部分显示的文字**

设置了 wordNum 属性或者 length 属性时，当文字超出了指定的字数后，超出部分将用 ellipsis 属性设置的值来替代。

ellipsis 的默认值为 ...，你也可以设置空值（ellipsis=""）来让超出部分不使用符号替换。

```html
<stl:content wordNum="100" ellipsis=" -- end --"></stl:content>
```

**replace - 需要被替换的文字**

如果需要将文字中的一部分替换为另一部分，可以使用 replace 属性和 to 属性。

replace 代表需要替换的文字，支持纯文本、列表和正则表达式三种写法。

##### 使用纯文本替换

纯文本替换直接输入替换前文字和替换后文字即可：

```html
<stl:content replace="他" to="她"></stl:content>
```

##### 使用列表替换

列表替换适合多个文本替换的情况，将需要替换的文字用英文逗号（,）隔开：

```html
<stl:content replace="他,她" to="he,she"></stl:content>
```

如果多个文本都替换为一个文本，to 属性可以不使用逗号隔开：

```html
<stl:content replace="他,她" to="who"></stl:content>
```

##### 使用正则表达式替换

正则表达式替换需要将 replace 前后添加“/”符号，“/”符号之间的文字为替换需要使用的正则表达式：

```html
<stl:content replace="/(Mr\\.? |Mrs\\.? |Miss |Ms\\.? )/" to=""></stl:content>
```

**to 替换文字**

to 代表替换后的文字。

**isClearTags - 清除标签**

设置是否清除 HTML 标签，仅显示纯文本。

在后台内容编辑器中录入的数据通常会带有大量的 HTML 标签，如果我们只希望显示文字本身，需要使用 isClearTags 属性。

* "true" 清除 HTML 标签。
* "false" 不清除 HTML 标签。此值是默认的，如果没有指定属性的话。

```html
<stl:content type="content" isClearTags="true"></stl:content>
```

**isReturnToBr - 回车改为换行**

设置是否将回车换行符号替换为 HTML <br>换行标签。

由于 HTML 中的换行在页面中显示为空格，所以如果需要显示后台 TextArea 文本框录入的换行时，需要使用 isReturnToBr 属性。

* "true" 替换回车符。
* "false" 不替换回车符。此值是默认的，如果没有指定属性的话。

```html
<stl:content type="description" isReturnToBr="true"></stl:content>
```

**isLower - 转换为小写**

设置是否将文本中的所有英文字母转换为小写字母。

* "true" 转换为小写。
* "false" 不转换为小写。此值是默认的，如果没有指定属性的话。

```html
<stl:content type="title" isLower="true"></stl:content>
```

**isUpper - 转换为大写**

设置是否将文本中的所有英文字母转换为大写字母。

* "true" 转换为大写。
* "false" 不转换为大写。此值是默认的，如果没有指定属性的话。

```html
<stl:content type="title" isUpper="true"></stl:content>
```

**formatString - 显示的格式**

当需要显示日期型的字段值时，可以通过 formatString 属性来设置日期格式。

```html
<stl:content type="AddDate" formatString="yyyy-MM-dd"></stl:content>
```

**no - 显示第几项**

显示第几项。

**separator - 显示多项时的分割字符串**

显示多项时的分割字符串。

**isOriginal - 获取所引用内容的值**

如果是引用内容，是否获取所引用内容的值。

* "true" 显示所引用内容的值。
* "false" 不显示所引用内容的值。此值是默认的，如果没有指定属性的话。

**leftText - 显示在信息前的文字**

显示在文字之前的文字，系统会判断文字是否为空，如果文字为空，文字前缀也将不显示。

```html
<stl:content leftText="标题：" type="title"></stl:content>
```

**rightText - 显示在信息后的文字**

显示在文字之后的文字，系统会判断文字是否为空，如果文字为空，文字后缀也将不显示。

```html
<stl:content leftText="【" rightText="】" type="title"></stl:content>
```


### 示例

**在内容列表中显示内容链接**

下面的例子显示栏目索引为"新闻"的栏目的内容列表前五条，内容链接的提示为内容标题全称。

```html
<stl:contents channelIndex="新闻" totalNum="5" width="80%" border="0">
    <stl:a title="{Content.FullTitle}" target="_blank">
        <stl:content type="Title"></stl:content><br />
    </stl:a>
</stl:contents>
```

解析后的 HTML 代码：

```html
<a href="/news/4.html" title="我是带图片的内容" target="_blank">
    我是带图片的内容<br>
</a>
<a href="/news/3.html" title="我也是带图片的内容" target="_blank">
    我也是带图片的内容<br>
</a>
<a href="/news/2.html" title="我也是带图片的内容" target="_blank">
    我也是带图片的内容<br>
</a>
<a href="/news/1.html" title="我是带图片的内容" target="_blank">
    我是带图片的内容<br>
</a>
```

**显示内容的副标题**

下面的例子在页面中显示内容的副标题。

```html
<stl:content type="SubTitle"></stl:content>
```

解析后的 HTML 代码：

```html
  stl:contents 栏目列表(3)<br>
  stl:content 获取栏目值(3)<br>
```

**显示当前栏目的名称**

下面的例子显示当前栏目的栏目名称。

```html
<stl:content type="Title"></stl:content>
```

解析后的 HTML 代码：

```html
内容副标题
```

**显示内容的添加时间**

下面的例子在页面中显示内容的添加时间，并按照"yyyy-MM-dd"格式显示。

```html
<stl:content type="AddDate" formatString="yyyy-MM-dd"></stl:content>
```

解析后的 HTML 代码

```html
2021-01-28
```
