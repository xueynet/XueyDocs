# `<stl:a>` 获取链接

```html
<stl:a
    channelIndex="栏目索引"
    channelName="栏目名称"
    parent="显示父栏目"
    upLevel="上级栏目的级别"
    topLevel="从首页向下的栏目级别"
    context="所处上下文"
    href="链接地址"
    host="链接域名"
    queryString="链接参数">
</stl:a>
```

### 说明

`<stl:a>` 元素可以创建一个到其他站点、栏目以及内容页或任何其他URL地址的超链接。

标签 `<stl:a>` 在栏目模版中默认显示此栏目的链接，在内容模版中默认显示此内容的链接，如果希望显示指定栏目的链接，请设置 上下文切换 属性。

如果标签嵌入在列表标签内，则默认链接地址当前列表项的链接：

* `<stl:a>` 标签能够作为 `<stl:channels>` 等标签的子标签，当作为 `<stl:channels>` 的子标签使用时将显示栏目链接。
* `<stl:a>` 标签能够作为 `<stl:contents>` 等标签的子标签，当作为 `<stl:contents>` 的子标签使用时将显示内容链接。

可以把任何 STL 标签或者 HTML 标签嵌套在 `<stl:a>` 元素内，如果`<stl:a>` 元素内没有嵌套任何标签，系统将把对应的栏目或者内容的名称作为嵌套文本显示出来。

### 解析

如果使用 `<stl:a>` 元素，系统将解析元素为 HTML `<a>` 元素。

如果使用 {stl:a} 实体，系统将解析实体为 URL地址字符串。

### 属性

::: tip
所有属于HTML 标签`<a>`的属性均适用于`<stl:a>`标签。
:::

| 属性 | 说明 |
|:-----|:-----|
| channelIndex | 	栏目索引 |
| channelName	 | 栏目名称 |
| parent | 	显示父栏目 |
| upLevel | 	上级栏目的级别 |
| topLevel | 	从首页向下的栏目级别 |
| context	 | 所处上下文 |
| href | 	链接地址 |
| host | 	链接域名 |
| queryString | 	链接参数 |

**channelIndex 栏目索引**

栏目索引是一个站点中栏目的标识，具有唯一性。

如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。

```html
<!-- 链接到首页 -->
<stl:a channelIndex="首页"></stl:a>
```

**channelName - 栏目名称**

栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。

```html
<!-- 链接到当前栏目下的名称为“栏目名称”的栏目 -->
<stl:a channelName="栏目名称"></stl:a>
```

```html
<!-- 链接到“栏目索引”下的名称为“栏目名称”的栏目 -->
<stl:a channelIndex="栏目索引" channelName="栏目名称"></stl:a>
```

**parent - 显示父栏目**

将上下文切换到当前栏目的上一级栏目。

* "true" 表示切换到当前栏目的上一级栏目，等价于 upLevel="1"。
* "false" 表示不切换到当前栏目的上一级栏目。

如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。

```html
<!-- 链接到当前栏目的上一级栏目 -->
<stl:a parent="true"></stl:a>
```

**upLevel - 上级栏目的级别**

切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。

如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。

```html
<!-- 链接到当前栏目的上两级栏目 -->
<stl:a upLevel="2"></stl:a>
```

**topLevel - 从首页向下的栏目级别**

切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。

```html
<!-- 链接到一级栏目 -->
<stl:a topLevel="1"></stl:a>
```

**context - 所处上下文**

通常如果标签被嵌套在列表元素中时，系统会设置上下文为当前的列表类型，同时对标签进行解析时也将根据列表类型进行判断，如将 `<stl:a>`</stl:a> 放到内容列表以及栏目列表中时，stl:a 标签的链接会分别显示内容的连接以及栏目的连接。

如果希望`<stl:a>`</stl:a>标签无论在内容列表还是栏目列表都只显示栏目链接，可以设置 context 属性为 Channel:<stl:a context="channel"></stl:a>

* "default" 默认，即当前所处上下文。
* "content" 内容上下文。
* "channel" 栏目上下文。
* "sqlContent" Sql 内容上下文。
* "site" 站点上下文。

```html
<!-- 分别显示栏目与内容链接 -->
<stl:channels>
  <stl:contents>
    栏目：<stl:a context="channel"></stl:a>
    内容：`<stl:a>`</stl:a>
  </stl:contents>
</stl:channels>
```

**href - 链接地址**

指定具体的链接地址，可以用“@”开头表示当前网站根目录，用“~”开头表示系统根目录。

**host - 链接域名**

如设置链接地址将以此开头

**queryString - 链接参数**

链接地址后的参数

### 示例

**显示内容列表链接**

下面的例子显示当前栏目的内容列表，内容链接为内容标题。

```html
<stl:contents>
  <stl:a target="_blank"></stl:a><br>
</stl:contents>
```

解析后的 HTML 代码：

```html
  <a href="/a/index.html" target="_blank">stl:a 标签用法</a><br>
  <a href="/a/2.html" target="_blank">stl:a 标签示例（单独使用）</a><br>
  <a href="/a/1.html" target="_blank">stl:a 标签示例（嵌套使用）</a><br>
```

**显示栏目列表链接**

下面的例子显示栏目索引为"首页"的下级栏目列表。

下面的例子显示当前栏目的内容列表，内容链接为内容标题。

```html
<stl:channels channelIndex="首页" groupChannel="主导航">
  <stl:a target="_blank"></stl:a><br>
</stl:channels>
```

解析后的 HTML 代码：

```html
  <a href="/getting-started/index.html" target="_blank">起 步</a><br>
  <a href="/channels/4.html" target="_blank">STL标签</a><br>
  <a href="/channels/79.html" target="_blank">STL实体</a><br>
```

**显示指定的栏目链接**

下面的例子显示栏目索引为"首页"的栏目链接，点击链接后在新窗口打开。

```html
<stl:a channelIndex="首页" target="_blank"></stl:a>
```

解析后的 HTML 代码：

```html
<a href="http://docs.xuey.net/" target="_blank">首 页</a>
```

**在栏目链接中显示指定的文字**

下面的例子显示栏目索引为"首页"的栏目链接，链接文字为"转到首页"。

```html
<stl:a channelIndex="首页" target="\_blank"> 转到首页 </stl:a>
```

解析后的 HTML 代码：

```html
<a href="http://docs.xuey.net/" target="_blank"> 转到首页 </a>
```

**根据栏目索引与栏目名称显示栏目的链接**

下面的例子显示栏目索引为"首页"的子栏目名称为“起步”的链接，链接文字为"转到起步页"。

```html
<stl:a channelIndex="首页" channelName="起步" target="_blank"> 转到起步页 </stl:a>
```

解析后的 HTML 代码：

```html
<a href="http://docs.xuey.net/" target="_blank"> 转到起步页 </a>
```
