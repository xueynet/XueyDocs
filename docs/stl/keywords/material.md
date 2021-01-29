# <stl:material> 获取素材

```html
<stl:material
    type="类型"
    name="素材标题"
    id="素材Id"
    startIndex="字符开始位置"
    length="指定字符长度"
    wordNum="显示字符的数目"
    ellipsis="文字超出部分显示的文字"
    replace="需要被替换的文字"
    to="替换文字"
    isClearTags="清除标签"
    isReturnToBr="回车改为换行"
    isLower="转换为小写"
    isUpper="转换为大写">
</stl:material>
```

### 说明

通过 `stl:material` 标签在模板中获取素材。

`<stl:material>` 标签对应的实体为`{stl:material}`。

### 属性

| 属性 | 说明 |
|:----|:-----|
| type | 类型 |
| name | 	素材标题 |
| id | 	素材Id |
| startIndex	 | 字符开始位置 |
| length	 | 指定字符长度 |
| wordNum | 显示字符的数目 |
| ellipsis	 | 文字超出部分显示的文字 |
| replace	 | 需要被替换的文字 |
| to | 	替换文字 |
| isClearTags	 | 清除标签 |
| isReturnToBr	 | 回车改为换行 |
| isLower	 | 转换为小写 |
| isUpper	 | 转换为大写 |

**type - 类型**

设置需要显示的素材类型。

* "Article" 图文素材。
* "Image" 图片素材。
* "Audio" 音频素材。
* "Video" 视频素材。
* "File" 文件素材。

**name - 素材标题**

设置需要显示的素材标题，系统将查到并显示指定标题的素材。

**id - 素材Id**

设置需要显示的素材Id，系统将查到并显示指定Id的素材。

**startIndex - 字符开始位置**

设置文字开始显示的位置，默认值为 0，代表从头显示。

::: tip
startIndex 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。
:::

**length - 指定字符长度**

设置显示文字的字数，超出部分将用 ellipsis 属性设置的值替代。

::: tip
length 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。
:::

**wordNum - 显示字符的数目**

设置显示文字的字数，超出部分将用 ellipsis 属性设置的值替代。

::: tip
wordNum 区分中英文，中文汉字算作一个字符，两个英文字母才算作一个字符。由于在 Web 页面中，两个英文字母的宽度等于一个汉字，所以我们通常使用 wordNum 属性来设置文本的显示数量。
:::

**ellipsis - 文字超出部分显示的文字**

设置了 wordNum 属性或者 length 属性时，当文字超出了指定的字数后，超出部分将用 ellipsis 属性设置的值来替代。

ellipsis 的默认值为 ...，你也可以设置空值（ellipsis=""）来让超出部分不使用符号替换。

**replace - 需要被替换的文字**

如果需要将文字中的一部分替换为另一部分，可以使用 replace 属性和 to 属性。

**to - 替换文字**

to 代表替换后的文字。

**isClearTags - 清除标签**

设置是否清除 HTML 标签，仅显示纯文本。

在后台内容编辑器中录入的数据通常会带有大量的 HTML 标签，如果我们只希望显示文字本身，需要使用 isClearTags 属性。

* "true" 清除 HTML 标签。
* "false" 不清除 HTML 标签。此值是默认的，如果没有指定属性的话。

**isReturnToBr - 回车改为换行**

设置是否将回车换行符号替换为 HTML `<br>`换行标签。

由于 HTML 中的换行在页面中显示为空格，所以如果需要显示后台 TextArea 文本框录入的换行时，需要使用 isReturnToBr 属性。

* "true" 替换回车符。
* "false" 不替换回车符。此值是默认的，如果没有指定属性的话。

**isLower - 转换为小写**

设置是否将文本中的所有英文字母转换为小写字母。

* "true" 转换为小写。
* "false" 不转换为小写。此值是默认的，如果没有指定属性的话。

**isUpper - 转换为大写**

设置是否将文本中的所有英文字母转换为大写字母。

* "true" 转换为大写。
* "false" 不转换为大写。此值是默认的，如果没有指定属性的话。
