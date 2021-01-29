# <stl:tabs> 页签切换

```html
<stl:tabs
    tabName="页签名称"
    type="页签类型"
    action="页签切换方式"
    classActive="显示页签Css类"
    classNormal="隐藏页签Css类"
    current="当前页签">
</stl:tabs>
```

### 说明

以页签（Tab）的方式切换显示内容区域。

一个完整的页签由页签头部和页签主体组成，通过点击或者鼠标移动到页签头部可以切换显示页签主体。

### 属性

| 属性 | 说明 |
|:------|:-----|
| tabName | 页签名称 |
| type | 页签类型 |
| action | 页签切换方式 |
| classActive | 显示页签Css类 |
| classNormal | 隐藏页签Css类 |
| current | 当前页签 |

**tabName - 页签名称**

页签名称，当一个页面中有多个页签时需要设置不同的页签名称，系统通过页签名称寻找对应的页签头部和主体进行切换。

**type - 页签类型**

设置当前区域是页签头部还是页签主体，默认为 Body，即页签主体。

* "Head" 页签头部
* "Body" 页签主体

**action - 页签切换方式**

设置页签主体的切换方式，默认为 MouseOver，及鼠标移动到页签头部时自动切换。

* "Click" 鼠标点击切换内容
* "MouseOver" 鼠标移动切换内容

**classActive - 显示页签Css类**

当前显示页签头部的CSS类，默认为 active。

**classNormal - 隐藏页签Css类**

当前隐藏页签头部的CSS类。

**current - 当前页签**

设置默认显示第几个页签，默认为 0。

### 示例

**显示包含三个区域的页签**

下面的例子显示显示包含三个区域的页签，默认显示第一个，鼠标移动时切换页签。

```html
<style>
.active {
  color: red;
}
</style>

<stl:tabs type="head" current="1">
  <div>header1</div>
  <div>header2</div>
  <div>header3</div>
</stl:tabs>

<hr />

<stl:tabs type="body" current="1">
  <div>body1</div>
  <div>body2</div>
  <div>body3</div>
</stl:tabs>
```
