# <stl:navigation> 显示导航

```html
<stl:navigation
    type="导航类型"
    emptyText="当无内容时显示的信息"
    tipText="导航提示信息"
    wordNum="显示字数"
    isKeyboard="是否开启键盘">
</stl:navigation>
```

### 说明

通过 `stl:navigation` 标签在模板中显示链接导航

显示当前页的前/后一条内容或前/后一条栏目的链接导航。

标签 `<stl:navigation>` 用于显示上一条内容/栏目或者下一条内容/栏目的链接。

stl:navigation 标签内可以嵌入任意代码，当条件满足时将显示嵌入的代码。如果需要根据测试是否成功显示不同的结果，需要使用子标签 `<stl:yes>` 和 `<stl:no>` ，测试条件成功时将显示 `<stl:yes>` 中的内容，测试条件失败时将显示 `<stl:no>` 中的内容。

标签 `<stl:navigation>` 默认类型为下一条内容。可以通过type属性修改导航类型。

`<stl:navigation>` 标签对应的实体为`{stl:navigation}`。

### 子标签列表

| 子标签 | 说明 |
|:------|:-----|
| stl:yes | 链接存在时显示的模板，可以省略 |
| stl:no | 链接不存在时显示的模板，可以省略 |

### 属性

::: tip
所有属于HTML 标签`<a>`的属性均适用于`<stl:navigation>`标签。
:::

| 属性 | 说明 |
|:------|:-----|
| type | 导航类型 |
| emptyText | 当无内容时显示的信息 |
| tipText | 导航提示信息 |
| wordNum | 显示字数 |
| isKeyboard | 是否开启键盘 |

**type - 导航类型**

导航的类型

* "PreviousContent" 上一内容链接
* "NextContent" 下一内容链接
* "PreviousChannel" 上一栏目链接
* "NextChannel" 下一栏目链接

**emptyText - 当无内容时显示的信息**

当无内容时显示的信息

**tipText - 导航提示信息**

导航提示信息

**wordNum - 显示字数**

显示字符的数目，0 代表不限制字数。

**isKeyboard - 是否开启键盘**

键盘左右键实现上一篇下一篇

* "true" 开启
* "false" 关闭

::: tip
上下左右键分别为↑↓←→
:::

### 示例

**显示上一篇内容和下一篇内容的导航**

下面的例子显示上一篇内容和下一篇内容的导航。

```html
<table cellpadding="0" width="95%" cellspacing="0" height="40" align="center">
  <tr>
    <td align="left" width="50%">
      <stl:navigation tipText="上一篇:" emptyText="无" type="PreviousContent"></stl:navigation>
    </td>
    <td width="50%">
      <stl:navigation tipText="下一篇:" emptyText="无" type="NextContent"></stl:navigation>
    </td>
  </tr>
</table>
```

解析后的 HTML 代码：

```html
<table cellpadding="0" width="95%" cellspacing="0" height="40" align="center">
  <tbody><tr>
    <td align="left" width="50%">
     上一篇:<a href="/navigation/index.html">stl:navigation 标签用法</a>
    </td>
    <td width="50%">
     下一篇:<a href="/navigation/1.html">stl:navigation 标签示例（高级）</a>
    </td>
  </tr>
 </tbody></table>
 ```

 **显示上一个栏目和下一个栏目的导航**

 下面的例子显示上一个栏目和下一个栏目的导航。

 ```html
 <table cellpadding="0" width="95%" cellspacing="0" height="40" align="center">
  <tr>
    <td align="left" width="50%">
      <stl:navigation tipText="上一篇:" emptyText="无" type="PreviousChannel"></stl:navigation>
    </td>
    <td width="50%">
      <stl:navigation tipText="下一篇:" emptyText="无" type="NextChannel"></stl:navigation>
    </td>
  </tr>
</table>
```

解析后的 HTML 代码：

```html
<table cellpadding="0" width="95%" cellspacing="0" height="40" align="center">
  <tbody>
    <tr>
      <td align="left" width="50%">
        上一篇:<a href="/location/index.html">stl:location 当前位置</a>
      </td>
      <td width="50%">
        下一篇:<a href="/tree/index.html">stl:tree 树状导航</a>
      </td>
    </tr>
  </tbody>
</table>
```

**仅当上一篇/下一篇内容存在时显示**

下面的例子仅当上一篇/下一篇内容存在时显示对应链接，否则不显示。

```html
<stl:navigation type="PreviousContent">
  <p>
    上一篇： <stl:a></stl:a>
  </p>
</stl:navigation>
<stl:navigation type="NextContent">
  <p>
    下一篇： <stl:a></stl:a>
  </p>
</stl:navigation>
```

解析后的 HTML 代码：

```html
<p>
  上一篇： <a href="/navigation/2.html">stl:navigation 标签示例（简单）</a>
</p>
```
