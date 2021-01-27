# 内容解析

### 解析文字

当模板中需要使用`<stl:content>`、`<stl:channel>`、`<stl:value>`等标签解析文字时，我们可以通过属性来控制文字解析的格式。

**wordNum 文字字数**

设置解析文字的字数，超出部分将用 ellipsis 属性设置的值替代。

::: tip
wordNum 区分中英文，中文汉字算作一个字符，两个英文字母才算作一个字符。
:::

由于在 Web 页面中，两个英文字母的宽度等于一个汉字，所以我们通常使用 wordNum 属性来设置文本的解析数量。

```html
<stl:content wordNum="50"></stl:content>
```

**startIndex 文字开始位置**

设置文字开始解析的位置，默认值为 0，代表从头解析。

::: tip
startIndex 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。
:::

```html
<stl:content startIndex="10"></stl:content>
```

**length 文字字数**

设置解析文字的字数，超出部分将用 ellipsis 属性设置的值替代。

::: tip
length 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。
:::

```html
<stl:content length="100"></stl:content>
```

**ellipsis 省略符号**

设置了 wordNum 属性或者 length 属性时，当文字超出了指定的字数后，超出部分将用 ellipsis 属性设置的值来替代。

ellipsis 的默认值为 ...，你也可以设置空值（ellipsis=""）来让超出部分不使用符号替换。

```html
<stl:content wordNum="100" ellipsis=" -- end --"></stl:content>
```

**replace 替换前文字**

如果需要将文字中的一部分替换为另一部分，可以使用 replace 属性和 to 属性。

replace 代表需要替换的文字，支持纯文本、列表和正则表达式三种写法。

**使用纯文本替换**

纯文本替换直接输入替换前文字和替换后文字即可：

```html
<stl:content replace="他" to="她"></stl:content>
```

**使用列表替换**

列表替换适合多个文本替换的情况，将需要替换的文字用英文逗号（,）隔开：

```html
<stl:content replace="他,她" to="he,she"></stl:content>
```

如果多个文本都替换为一个文本，to 属性可以不使用逗号隔开：

```html
<stl:content replace="他,她" to="who"></stl:content>
```

**使用正则表达式替换**

正则表达式替换需要将 replace 前后添加“/”符号，“/”符号之间的文字为替换需要使用的正则表达式：

```html
<stl:content replace="/(Mr\\.? |Mrs\\.? |Miss |Ms\\.? )/" to=""></stl:content>
```

**to 替换后文字**

to 代表替换后的文字

**isClearTags 是否清除 HTML 标签**

设置是否清除 HTML 标签，仅解析纯文本。

在后台内容编辑器中录入的数据通常会带有大量的 HTML 标签，如果我们只希望解析文字本身，需要使用 isClearTags 属性。

* "true" 清除 HTML 标签。
* "false" 不清除 HTML 标签。此值是默认的，如果没有指定属性的话。

```html
<stl:content type="content" isClearTags="true"></stl:content>
```

**isReturnToBr 是否转换换行符**

设置是否将回车换行符号替换为 HTML <br>换行标签。

由于 HTML 中的换行在页面中解析为空格，所以如果需要解析后台 TextArea 文本框录入的换行时，需要使用 isReturnToBr 属性。

* "true" 替换回车符。
* "false" 不替换回车符。此值是默认的，如果没有指定属性的话。

```html
<stl:content type="summary" isReturnToBr="true"></stl:content>
```

**isLower 是否转换为小写**

设置是否将文本中的所有英文字母转换为小写字母。

* "true" 转换为小写。
* "false" 不转换为小写。此值是默认的，如果没有指定属性的话。

```html
<stl:content type="title" isLower="true"></stl:content>
```

**isUpper 是否转换为大写**

设置是否将文本中的所有英文字母转换为大写字母。

* "true" 转换为大写。
* "false" 不转换为大写。此值是默认的，如果没有指定属性的话。

```html
<stl:content type="title" isUpper="true"></stl:content>
```

**leftText 文字前缀**

解析在文字之前的文字，系统会判断文字是否为空，如果文字为空，文字前缀也将不解析。

```html
<stl:content leftText="标题：" type="title"></stl:content>
```

**rightText 文字后缀**

解析在文字之后的文字，系统会判断文字是否为空，如果文字为空，文字后缀也将不解析。

```html
<stl:content leftText="【" rightText="】" type="title"></stl:content>
```

### 解析日期

当需要解析日期型的字段值时，通常通过 formatString 属性来设置日期格式，具体格式如下：

| 符号 | 说明 |
|:--------|:-------|
| d	| 月中的某一天。一位数的日期没有前导零。 |
| dd	| 月中的某一天。一位数的日期有一个前导零。 |
| ddd	| 周中某天的缩写名称，在 AbbreviatedDayNames 中定义。 |
| dddd	| 周中某天的完整名称，在 DayNames 中定义。 |
| M	| 月份数字。一位数的月份没有前导零。 |
| MM	| 月份数字。一位数的月份有一个前导零。 |
| MMM	| 月份的缩写名称，在 AbbreviatedMonthNames 中定义。 |
| MMMM	| 月份的完整名称，在 MonthNames 中定义。 |
| y	| 不包含纪元的年份。如果不包含纪元的年份小于 10，则解析不具有前导零的年份。 |
| yy	| 不包含纪元的年份。如果不包含纪元的年份小于 10，则解析具有前导零的年份。 |
| yyyy	| 包括纪元的四位数的年份。 |
| gg	| 时期或纪元。如果要设置格式的日期不具有关联的时期或纪元字符串，则忽略该模式。 |
| h		| 12小时制的小时。一位数的小时数没有前导零。 |
| hh	| 	12小时制的小时。一位数的小时数有前导零。 |
| H		| 24小时制的小时。一位数的小时数没有前导零。 |
| HH	| 	24小时制的小时。一位数的小时数有前导零。 |
| m		| 分钟，一位数的分钟数没有前导零。 |
| mm	| 	分钟，一位数的分钟数有一个前导零。 |
| s		| 秒，一位数的秒数没有前导零。 |
| ss	| 	秒，一位数的秒数有一个前导零。 |
| f		| 秒的小数精度为一位。其余数字被截断。 |
| ff		| 秒的小数精度为两位。其余数字被截断。 |
| fff		| 秒的小数精度为三位。其余数字被截断。 |
| ffff		| 秒的小数精度为四位。其余数字被截断。 |
| fffff		| 秒的小数精度为五位。其余数字被截断。 |
| ffffff		| 秒的小数精度为六位。其余数字被截断。 |
| fffffff		| 秒的小数精度为七位。其余数字被截断。 |
| t	| 	在AMDesignator或PMDesignator中定义的AM/PM指示项的第一个字符（如果存在）。 |
| tt	| 	在AMDesignator或PMDesignator中定义的AM/PM指示项（如果存在）。 |
| z		| 时区偏移量（“+”或“-”后面仅跟小时）。一位数的小时数没有前导零。例如，太平洋标准时间是“-8”。 |
| zz	| 	时区偏移量（“+”或“-”后面仅跟小时）。一位数的小时数有前导零。例如，太平洋标准时间是“-08”。 |
| zzz	| 	完整时区偏移量（“+”或“-”后面跟有小时和分钟）。一位数的小时数和分钟数有前导零。例如，太平洋标准时间是“-08:00”。 |
| :		| 在TimeSeparator中定义的默认时间分隔符。 |
| /		| 在DateSeparator中定义的默认日期分隔符。 |
| %c		| 其中c是格式模式（如果单独使用）。如果格式模式与原义字符或其他格式模式合并，则可以省略“%”字符。 |
| c		| 其中c是任意字符。照原义解析字符。若要解析反斜杠字符，请使用“\”。 |

##### 示例

下面的例子在页面中解析内容的添加时间，并按照"yyyy-MM-dd"格式解析。

```html
<stl:content type="AddDate" formatString="yyyy-MM-dd"></stl:content>
```

解析后的 HTML 代码：
```html
2021-01-27
```
