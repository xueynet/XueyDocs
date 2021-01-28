# <stl:image> 显示图片

```html
<stl:image
    channelIndex="栏目索引"
    channelName="栏目名称"
    parent="显示父栏目"
    upLevel="上级栏目的级别"
    topLevel="从首页向下的栏目级别"
    type="指定存储图片的字段"
    context="所处上下文"
    no="显示第几幅图片"
    isOriginal="获取所引用内容的图片"
    src="指定图片地址"
    altSrc="备选图片地址">
</stl:image>
```

### 说明

通过 `stl:image` 标签在模板中显示栏目或内容的图片

`stl:image` 标签的地址取自栏目或内容的图片地址，当图片地址为SWF结尾时自动转成 `<stl:flash>` 标签。

标签 `<stl:image>` 在栏目模版中默认显示此栏目的图片，在内容模版中默认显示此内容的图片。

stl:image 标签能够作为 `<stl:channels>` 等标签的子标签，当作为 的子标签使用时将显示栏目的图片。 `stl:image` 标签能够作为 `<stl:contents>` 等标签的子标签，当作为 的子标签使用时将显示内容的图片。

`stl:image` 标签默认显示内容的图片字段，如果希望显示自定义的图片字段，则需要设置 type 属性。

`<stl:image>` 标签对应的实体为`{stl:image}`。

### 属性

::: tip
所有属于 Html 标签 `<img>` 的成员均适用于 `<stl:image>` 标签。
:::

| 属性 | 说明 |
|:------|:-----|
| channelIndex | 栏目索引 |
| channelName | 栏目名称 |
| parent | 显示父栏目 |
| upLevel | 上级栏目的级别 |
| topLevel | 从首页向下的栏目级别 |
| type | 指定存储图片的字段 |
| context | 所处上下文 |
| no | 显示第几幅图片 |
| isOriginal | 获取所引用内容的图片 |
| src | 指定图片地址 |
| altSrc | 备选图片地址 |

**channelIndex - 栏目索引**

栏目索引是一个站点中栏目的标识，具有唯一性。

如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。

```html
<!-- 链接到首页 -->
<stl:image channelIndex="首页"></stl:image>
```

**channelName - 栏目名称**

栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。

```html
<!-- 链接到当前栏目下的名称为“栏目名称”的栏目 -->
<stl:image channelName="栏目名称"></stl:image>
```

```html
<!-- 链接到“栏目索引”下的名称为“栏目名称”的栏目 -->
<stl:image channelIndex="栏目索引" channelName="栏目名称"></stl:image>
```

**parent - 显示父栏目**

将上下文切换到当前栏目的上一级栏目。

* "true" 表示切换到当前栏目的上一级栏目，等价于 upLevel="1"。
* "false" 表示不切换到当前栏目的上一级栏目。

如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。

```html
<!-- 链接到当前栏目的上一级栏目 -->
<stl:image parent="true"></stl:image>
```

**upLevel - 上级栏目的级别**

切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。

如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。

```html
<!-- 链接到当前栏目的上两级栏目 -->
<stl:image upLevel="2"></stl:image>
```

**topLevel - 从首页向下的栏目级别**

切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。

```html
<!-- 链接到一级栏目 -->
<stl:image topLevel="1"></stl:image>
```

**type - 指定存储图片的字段**

指定存储图片的字段，可以是自定义字段，默认为 ImageUrl

**context - 所处上下文**

通常如果标签被嵌套在列表元素中时，系统会设置上下文为当前的列表类型，同时对标签进行解析时也将根据列表类型进行判断，如将 `<stl:image></stl:image>` 放到内容列表以及栏目列表中时，`stl:image` 标签的链接会分别显示内容的连接以及栏目的连接。

如果希望`<stl:image></stl:image>`标签无论在内容列表还是栏目列表都只显示栏目链接，可以设置 context 属性为 Channel:`<stl:image context="channel"></stl:image>`

* "default" 默认，即当前所处上下文。
* "content" 内容上下文。
* "channel" 栏目上下文。
* "sqlContent" Sql 内容上下文。
* "site" 站点上下文。

```html
<!-- 分别显示栏目与内容链接 -->
<stl:channels>
  <stl:contents>
    栏目：<stl:image context="channel"></stl:image>
    内容：<stl:image></stl:image>
  </stl:contents>
</stl:channels>
```

**no - 显示第几幅图片**

显示字段存储的第几个图片，默认为 1

**isOriginal - 获取所引用内容的图片**

如果是引用内容，是否获取所引用内容的图片

**src - 指定图片地址**

图片文件地址，可以用"@"开头表示当前网站根目录，用"~"开头表示系统根目录。

**altSrc - 备选图片地址**

指定的图片不存在时的显示地址，可以用"@"开头表示当前网站根目录，用"~"开头表示系统根目录。

### 示例

**在内容列表中显示内容图片**

下面的例子显示栏目索引为"新闻"的栏目的内容图片列表，点击图片后新窗口打开内容页。

```html
<stl:contents channelIndex="新闻" totalNum="3" isImage="true" width="80%">
    <stl:a target="_blank">
        <stl:image width="200" height="100"></stl:image>
    </stl:a>
</stl:contents>
```

解析后的 HTML 代码：

```html
<a href="/news/4.html" target="_blank">
    <img src="/upload/images/2013/6/t_7164418763.jpg" width="200" height="100">
</a>
<a href="/news/3.html" target="_blank">
    <img src="/upload/images/2013/6/t_7164446419.jpg" width="200" height="100">
</a>
<a href="/news/2.html" target="_blank">
    <img src="/upload/images/2013/6/t_7164446419.jpg" width="200" height="100">
</a>
```

**显示指定的图片文件**

下面的例子显示文件名称为"banner.jpg"的图片文件。

```html
<stl:image src="@/images/banner.jpg" height="100"></stl:image>
```

解析后的 HTML 代码：

```html
<img src="/images/banner.jpg" height="100">
```

**显示当前栏目的图片**

下面的例子显示当前栏目的图片，如果栏目没有图片显示，则不显示任何信息。

```html
<stl:container context="Channel">
    <stl:image></stl:image>
</stl:container>
```

解析后的 HTML 代码：

```html
<img src="/assets/img/bootstrap-mdo-sfmoma-01.jpg">
```
