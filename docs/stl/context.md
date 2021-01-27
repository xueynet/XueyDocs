# 上下文

系统生成页面时将根据上下文来解析 STL 标签，例如，内容模板中使用标签 `<stl:content type="title"></stl:content>` 获取内容的标题，系统在解析这段代码的时候会使用当前内容作为上下文，从而解析出正确的数据。

通常，根据默认的上下文能获取到正确的结果，但有些情况下，需要通过属性重新定义上下文。例如，我们希望在内容中获取栏目名称，可以使用标签 `<stl:channel type="title"></stl:channel>` 获得数据，但如果我们希望显示的不是内容所属的栏目名称，而是特定的栏目名称时，通过默认的上下文就无法实现了，这时我们需要通过属性 channelIndex 来指定栏目：`<stl:channel channelIndex="栏目索引" type="title"></stl:channel>`。

我们可以通过属性来指定上下文，也可以通过容器标签来指定上下文，我们甚至能通过站点标签在切换站点；同时我们还可以通过条件判断标签来获取当前所处的上下文，下面分别进行说明。

### 切换上下文

**channelIndex 栏目索引**

栏目索引是一个站点中栏目的标识，具有唯一性。

如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。

```html
<!-- 链接到首页 -->
<stl:a channelIndex="首页"></stl:a>
```

**channelName 栏目名称**

栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。

```html
<!-- 链接到当前栏目下的名称为“栏目名称”的栏目 -->
<stl:a channelName="栏目名称"></stl:a>
```

```html
<!-- 链接到“栏目索引”下的名称为“栏目名称”的栏目 -->
<stl:a channelIndex="栏目索引" channelName="栏目名称"></stl:a>
```

**parent 父栏目**

将上下文切换到当前栏目的上一级栏目。

* "true" 表示切换到当前栏目的上一级栏目，等价于 upLevel="1"。
* "false" 表示不切换到当前栏目的上一级栏目。

如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。

```html
<!-- 链接到当前栏目的上一级栏目 -->
<stl:a parent="true"></stl:a>
```

**upLevel 上 N 级栏目**

切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。

如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。

```html
<!-- 链接到当前栏目的上两级栏目 -->
<stl:a upLevel="2"></stl:a>
```

**topLevel 第 N 级栏目**

切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。

```html
<!-- 链接到一级栏目 -->
<stl:a topLevel="1"></stl:a>
```

**context 列表上下文**

通常如果标签被嵌套在列表元素中时，系统会设置上下文为当前的列表类型，同时对标签进行解析时也将根据列表类型进行判断，如将 `<stl:a></stl:a>` 放到内容列表以及栏目列表中时，stl:a 标签的链接会分别显示内容的连接以及栏目的连接。

如果希望`<stl:a></stl:a>`标签无论在内容列表还是栏目列表都只显示栏目链接，可以设置 context 属性为 Channel:`<stl:a context="channel"></stl:a>`

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
    内容：<stl:a></stl:a>
  </stl:contents>
</stl:channels>
```

**通过容器指定上下文**

如果希望一段代码无论放到什么位置，都解析为同样的结果，可以使用 `<stl:container>`将这段代码嵌套进来并设置属性指定的上下文。请参考：`<stl:container>` 容器元素

```html
<stl:container channelIndex="栏目索引">
  栏目：<stl:channel type="title"></stl:channel>
  此栏目下的内容：
  <stl:contents>
    <stl:a></stl:a>
  </stl:contents>
</stl:container>
```

### 切换网站

如果在本站点的模板中显示其他站点的数据，可以通过`<stl:site>` 元素切换站点，此元素中嵌套的标签都将解析为指定站点的数据。请参考：`<stl:site>` 站点元素

```html
<stl:site siteDir="MySite">
  ...
</stl:site>
```

### 判断上下文

如果希望对上下文进行判断，从而使用不同的标签，可以通过`<stl:if>` 元素判断上下文，根据判断结果嵌套不同的标签。请参考：`<stl:if>` 判断元素

**判断当前栏目名称是否为"栏目名称"**

```html
<stl:if type="ChannelName" op="Equals" value="栏目名称">
  <stl:yes> <p>true</p> </stl:yes>
  <stl:no> <p>false</p> </stl:no>
</stl:if>
```

**根据模板类型显示不同内容**

下面的例子判断当前模板是不是内容模板。

```html
<stl:if type="TemplateType" op="Equals" value="ContentTemplate">
  <stl:yes>
      这是内容页面
  </stl:yes>
  <stl:no>
      这不是内容页面
  </stl:no>
</stl:if>
```

**根据模板名称显示不同内容**

下面的例子根据当前模板的模板名称显示不同的内容。

```html
<stl:if type="TemplateName" op="Equals" value="系统首页模板">
  <stl:yes>
      <li><A href="/" class="current">首 页</A></li>
  </stl:yes>
  <stl:no>
      <li>我不是首页</li>
  </stl:no>
</stl:if>
```
