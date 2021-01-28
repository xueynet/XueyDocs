# <stl:dynamic> 动态显示

```html
<stl:dynamic
    context="所处上下文"
    inline="是否在行内显示"
    onBeforeSend="动态请求发送前执行的JS代码"
    onSuccess="动态请求成功后执行的JS代码"
    onComplete="动态请求结束后执行的JS代码"
    onError="动态请求失败后执行的JS代码">
</stl:dynamic>
```

### 说明

通过 `stl:dynamic` 标签在模板中实现动态显示功能

`<stl:dynamic>` 使用 AJAX 技术使页面中部分区域能够及时反应出变化内容，而不必生成页面后才能显示。

`<stl:dynamic>` 标签用于需要即时反应出变化的页面区域，可以将任何代码放置在 `<stl:dynamic>` 中，页面将显示出最新的内容。

大部分 STL 标签拥有 `isDynamic` 属性，如：`<stl:contents isDynamic="true"></stl:contents>`。设置此属性的结果与以下代码一致：`<stl:dynamic><stl:contents></stl:contents><stl:dynamic>`

`<stl:dynamic>` 中可以包含任何 STL 标签或 HTML 标签。

### Js脚本事件

`<stl:dynamic>` 标签是由Ajax来实现的，页面通过Js发起动态请求，服务器返回请求结果并显示在页面中。

动态内容由于通过Ajax加载，会有一定的延迟，我们可以通过定义Ajax事件来进行精确控制。

这是Ajax事件的完整列表，以及它们被触发的顺序。每个动态请求都会触发事件。

::: tip
Js脚本事件可以是一段可运行的Js代码，也可以是一个Js函数，如果是函数，请在函数名后加()以确保函数能够运行。
:::

**onBeforeSend**

这个事件是在Ajax请求启动之前触发的，它允许你再动态访问之前进行预处理操作。

在此事件中可以直接调用以下参数：

* containerId：动态加载完毕后将更新的HTML 元素的Id

**onSuccess**

此事件仅在请求成功时调用(服务器没有错误，数据没有错误)。

在此事件执行完毕后，页面才会更新数据，可以通过 onSuccess 事件对返回的数据进行调整。

在此事件中可以直接调用以下参数：

* containerId：动态加载完毕后将更新的HTML 元素的Id
* data：返回的结果数据
* status：返回的 HTTP 状态码

**onError**

此事件仅在请求发生错误时调用(对于请求，永远不能同时有错误和成功回调)。

在此事件中可以直接调用以下参数：

* containerId：动态加载完毕后将更新的HTML 元素的Id
* err：错误信息
* status：返回的 HTTP 状态码

**onComplete**

不管请求是否成功，都会调用此事件。这个事件是最后触发的，可以通过 onComplete 事件对已更新的页面元素进行调整。

* containerId：动态加载完毕后将更新的HTML 元素的Id
* err：错误信息
* data：返回的结果数据
* status：返回的 HTTP 状态码

### 属性

| 属性 | 说明 |
|:-----|:-----|
| context	| 所处上下文 |
| inline	| 是否在行内显示 |
| onBeforeSend	| 请求前触发事件 |
| onSuccess	| 请求成功后触发事件 |
| onComplete	| 请求结束后触发事件 |
| onError	| 请求失败后触发事件 |

**context - 所处上下文**

所处上下文

* "Content" 内容
* "Channel" 栏目
* "SqlContent" 获取数据库数据

**inline - 是否在行内显示**

设置动态内容是否在行内显示，默认为false。

* "true" 动态内容在行内显示
* "false" 动态内容另起一行显示

**onBeforeSend - 请求前触发事件**

这个事件是在 Ajax 请求启动之前触发的，它允许你再动态访问之前进行预处理操作。

在此事件中可以直接调用以下参数：

* containerId：动态加载完毕后将更新的 HTML 元素的 Id

**onSuccess - 请求成功后触发事件**

此事件仅在请求成功时调用(服务器没有错误，数据没有错误)。

在此事件执行完毕后，页面才会更新数据，可以通过 onSuccess 事件对返回的数据进行调整。

在此事件中可以直接调用以下参数：

* containerId：动态加载完毕后将更新的 HTML 元素的 Id
* data：返回的结果数据
* status：返回的 HTTP 状态码

**onComplete - 请求结束后触发事件**

不管请求是否成功，都会调用此事件。这个事件是最后触发的，可以通过 onComplete 事件对已更新的页面元素进行调整。

* containerId：动态加载完毕后将更新的 HTML 元素的 Id
* err：错误信息
* data：返回的结果数据
* status：返回的 HTTP 状态码

**onError - 请求失败后触发事件**

此事件仅在请求发生错误时调用(对于请求，永远不能同时有错误和成功回调)。

在此事件中可以直接调用以下参数：

* containerId：动态加载完毕后将更新的 HTML 元素的 Id
* err：错误信息
* status：返回的 HTTP 状态码

### 示例

**显示当前栏目的内容数**

下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。

```html
<stl:dynamic>
    <stl:count type="Contents"></stl:count>
</stl:dynamic>
```

**显示栏目"新闻"的内容列表**

下面例子在页面中显示"新闻"栏目的前 10 篇内容列表。

```html
<stl:dynamic>
  <stl:contents channelIndex="新闻" totalNum="10">
      <stl:a target="_blank"></stl:a> <br />
  </stl:contents>
</stl:dynamic>
```
