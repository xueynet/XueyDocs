# <stl:container> 容器

```html
<stl:container
    channelIndex="栏目索引"
    channelName="栏目名称"
    parent="父栏目"
    upLevel="上级栏目的级别"
    topLevel="从首页向下的栏目级别"
    context="所处上下文">
</stl:container>
```

### 说明

通过 `stl:container` 标签在模板中定义容器，切换上下文。

上下文是指系统解析 StL 标签时的默认数据，详情请参考[切换上下文](/stl/context.html#切换上下文)。

`<stl:container>` 标签需要嵌套 HTML 标签或者 STL 标签，否则系统将忽略此标签。

### 解析

如果使用 `<stl:container>` 元素，系统将在指定上下文情景下对嵌套的标签进行解析。

`{stl:container}` 实体无效，系统将解析此实体为空字符串。

### 属性

| 属性 | 说明 |
|:-----|:-----|
| channelIndex | 栏目索引 |
| channelName |	栏目名称 |
| parent |	父栏目 |
| upLevel |	上级栏目的级别 |
| topLevel | 从首页向下的栏目级别 |
| context |	所处上下文 |

**channelIndex - 栏目索引**

栏目索引是一个站点中栏目的标识，具有唯一性。

如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。

```html
<!-- 定位到首页 -->
<stl:container channelIndex="首页"></stl:container>
```

**channelName - 栏目名称**

栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。

```html
<!-- 定位到当前栏目下的名称为“栏目名称”的栏目 -->
<stl:container channelName="栏目名称"></stl:container>
```

```html
<!-- 定位到“栏目索引”下的名称为“栏目名称”的栏目 -->
<stl:container channelIndex="栏目索引" channelName="栏目名称"></stl:container>
```

**parent - 父栏目**

将上下文切换到当前栏目的上一级栏目。

* "true" 表示切换到当前栏目的上一级栏目，等价于 upLevel="1"。
* "false" 表示不切换到当前栏目的上一级栏目。

如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。

```html
<!-- 定位到当前栏目的上一级栏目 -->
<stl:container parent="true"></stl:container>
```

**upLevel - 上级栏目的级别**

切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。

如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。

```html
<!-- 定位到当前栏目的上两级栏目 -->
<stl:container upLevel="2"></stl:container>
```

**topLevel - 从首页向下的栏目级别**

切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。

```html
<!-- 定位到一级栏目 -->
<stl:container topLevel="1"></stl:container>
```

**context - 所处上下文**

通常如果标签被嵌套在列表元素中时，系统会设置上下文为当前的列表类型，同时对标签进行解析时也将根据列表类型进行判断，如将 <stl:a></stl:a> 放到内容列表以及栏目列表中时，stl:a 标签的链接会分别显示内容的连接以及栏目的连接。

* "default" 默认，即当前所处上下文。
* "content" 内容上下文。
* "channel" 栏目上下文。
* "sqlContent" Sql 内容上下文。
* "site" 站点上下文。

```html
<stl:container context="channel"></stl:container>
```

### 示例

**使用容器切换上下文**

下面的例子将容器的上下文设置为栏目。

```html
<stl:container context="Channel">
    <stl:channel type="Title"></stl:channel>
</stl:container>
```

解析后的 HTML 代码：

```html
stl:container 容器
```
