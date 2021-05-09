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

| 属性 | 说明 |
|:------|:-----|
| type | 类型 |
| formatString | 显示的格式 |
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
| leftText | 显示在信息前的文字 |
| rightText | 显示在信息后的文字 |

**type - 类型**

需要获取值的类型。此属性只可属于以下可能的取值的一种。

* "siteName" 站点名称
* "siteUrl" 站点的域名地址
* "date" 当前日期（不支持 isDynamic 属性）
* "dateOfTraditional" 带农历的当前日期（不支持 isDynamic 属性）
* “seoTitle" seo标题
* "keywords" seo关键字
* "description" seo描述

**formatString - 显示的格式**

当需要显示日期型的字段值时，可以通过 formatString 属性来设置日期格式。

**wordNum - 显示字符的数目**

设置显示文字的字数，超出部分将用 ellipsis 属性设置的值替代。

::: tip
wordNum 区分中英文，中文汉字算作一个字符，两个英文字母才算作一个字符。由于在 Web 页面中，两个英文字母的宽度等于一个汉字，所以我们通常使用 wordNum 属性来设置文本的显示数量。
:::

```html
<stl:value wordNum="50"></stl:value>
```

**startIndex - 字符开始位置**

设置文字开始显示的位置，默认值为 0，代表从头显示。

::: tip
startIndex 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。
:::

```html
<stl:value startIndex="10"></stl:value>
```

**length - 指定字符长度**

设置显示文字的字数，超出部分将用 ellipsis 属性设置的值替代。

::: tip
length 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。
:::

```html
<stl:value length="100"></stl:value>
```

**ellipsis - 文字超出部分显示的文字**

设置了 wordNum 属性或者 length 属性时，当文字超出了指定的字数后，超出部分将用 ellipsis 属性设置的值来替代。

ellipsis 的默认值为 ...，你也可以设置空值（ellipsis=""）来让超出部分不使用符号替换。

```html
<stl:value wordNum="100" ellipsis=" -- end --"></stl:value>
```

**replace - 需要被替换的文字**

如果需要将文字中的一部分替换为另一部分，可以使用 replace 属性和 to 属性。

replace 代表需要替换的文字，支持纯文本、列表和正则表达式三种写法。

##### 使用纯文本替换

纯文本替换直接输入替换前文字和替换后文字即可：

```html
<stl:value replace="他" to="她"></stl:value>
```

##### 使用列表替换

列表替换适合多个文本替换的情况，将需要替换的文字用英文逗号（,）隔开：

```html
<stl:value replace="他,她" to="he,she"></stl:value>
```

如果多个文本都替换为一个文本，to 属性可以不使用逗号隔开：

```html
<stl:value replace="他,她" to="who"></stl:value>
```

##### 使用正则表达式替换

正则表达式替换需要将 replace 前后添加“/”符号，“/”符号之间的文字为替换需要使用的正则表达式：

```html
<stl:value replace="/(Mr\\.? |Mrs\\.? |Miss |Ms\\.? )/" to=""></stl:value>
```

**to 替换文字**

to 代表替换后的文字。

**isClearTags - 清除标签**

设置是否清除 HTML 标签，仅显示纯文本。

在后台内容编辑器中录入的数据通常会带有大量的 HTML 标签，如果我们只希望显示文字本身，需要使用 isClearTags 属性。

* "true" 清除 HTML 标签。
* "false" 不清除 HTML 标签。此值是默认的，如果没有指定属性的话。

```html
<stl:value type="content" isClearTags="true"></stl:value>
```

**isReturnToBr - 回车改为换行**

设置是否将回车换行符号替换为 HTML <br>换行标签。

由于 HTML 中的换行在页面中显示为空格，所以如果需要显示后台 TextArea 文本框录入的换行时，需要使用 isReturnToBr 属性。

* "true" 替换回车符。
* "false" 不替换回车符。此值是默认的，如果没有指定属性的话。

```html
<stl:value type="description" isReturnToBr="true"></stl:value>
```

**isLower - 转换为小写**

设置是否将文本中的所有英文字母转换为小写字母。

* "true" 转换为小写。
* "false" 不转换为小写。此值是默认的，如果没有指定属性的话。

```html
<stl:value type="title" isLower="true"></stl:value>
```

**isUpper - 转换为大写**

设置是否将文本中的所有英文字母转换为大写字母。

* "true" 转换为大写。
* "false" 不转换为大写。此值是默认的，如果没有指定属性的话。

```html
<stl:value type="title" isUpper="true"></stl:value>
```

**leftText - 显示在信息前的文字**

显示在文字之前的文字，系统会判断文字是否为空，如果文字为空，文字前缀也将不显示。

```html
<stl:value leftText="标题：" type="siteName"></stl:value>
```

**rightText - 显示在信息后的文字**

显示在文字之后的文字，系统会判断文字是否为空，如果文字为空，文字后缀也将不显示。

```html
<stl:value leftText="【" rightText="】" type="siteName"></stl:value>
```

### 示例

**显示站点名称**

下面的例子显示站点名称。

```html
<stl:value type="SiteName"></stl:value>
```

**显示关键字**

下面的例子显示站点名称。(注意：seoTitle、keywords、description会自动根据当前上下文（首页、栏目、内容页、专题页)获取当前所设置的实体属性

```html
{stl.keywords}
```