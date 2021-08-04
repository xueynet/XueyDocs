#   &lt;stl:login&gt; 标签

&lt;stl:login&gt; 标签用于在页面中实现插件功能。

```html
<stl:login
    type="模板文件夹"
    url="地址类型"
    redirectUrl="操作成功后的转向地址">
</stl:login>
```
或者
```html
{stl:login type=模板文件夹 url=地址类型 redirectUrl=操作成功后的转向地址}
```

## 说明

设置 type 属性，可以在页面中实现登录、注册以及退出登录等操作；

设置 url 属性，可以获取微信、QQ、微博第三方登录地址或者退出登录地址；

设置 redirectUrl 属性，可以设置操作成功后的返回页面，默认为当前页；

&lt;stl:login&gt; 标签配合 &lt;stl:layer&gt; 标签可以实现在弹出层中显示注册/登录窗口；

&lt;stl:login&gt; 标签配合 &lt;stl:if&gt; 标签可以实现切换登录状态并显示当前登录用户。

## 属性

|  属性   | 说明  |
|  ----  | ----  |
| type  | 模板文件夹 |
| url  | 地址类型 |
| redirectUrl	| 操作成功后的转向地址 |

### type

type 属性用于设置模板文件夹，可以在后台 用户登录插件 -> 显示模板 中创建自定义模板。

type 有如下取值：

* "login" 使用默认登录模板，标签将在页面中显示登录表单。
* "register" 使用默认注册模板，标签将在页面中显示注册表单。
* "logout" 使用默认退出登录模板，标签将使用户退出登录状态。
* "自定义" 可以使用自定义模板，用以自定义显示样式及功能。

### url

url 属性用获取微信、QQ、微博第三方登录地址或者退出登录地址。

url 属性有如下取值：

* "weixin" 返回微信登录URL地址。
* "qq" 返回 QQ 登录URL地址。
* "weibo" 返回新浪微博登录URL地址。
* "logout" 返回退出登录URL地址。

### redirectUrl

设置注册、登录或者退出登录成功之后的页面转向地址，不设置默认为当前页面的地址。

## 嵌套使用

可以将登录标签嵌套在其他标签内部，作为其他标签的属性使用，例如：

```html
<a href="{stl:login url=weixin}">微信登录</a>
<a href="{stl:login url=qq}">QQ登录</a>
<a href="{stl:login url=weibo}">微博登录</a>
<a href="{stl:login url=logout}">退出登录</a>

```
## 与&lt;stl:if&gt;标签配合使用

如果希望显示登录状态并根据登录状态显示不同的内容，我们需要与&lt;stl:if&gt;标签配合使用。

用户登录状态的判断类型为IsUserLoggin，关于&lt;stl:if&gt;标签的详细说明，请参考：STL &lt;if&gt; 元素。

```html
<stl:if type="IsUserLoggin">
    <stl:yes>
        已登录
    </stl:yes>
    <stl:no>
        未登录
    </stl:no>
</stl:if>

```

## 与&lt;stl:user&gt;标签配合使用

如果用户处于登录状态，可以通过&lt;stl:user&gt;或者简写{user}获取用户相关信息。

关于&lt;stl:user&gt;标签的详细说明，请参考：STL&lt;user&gt; 元素。

与&lt;stl:layer&gt;标签配合使用

## 与&lt;stl:layer&gt;标签配合使用

如果希望登录窗口与注册窗口在当前窗口弹出显示，可以配合&lt;stl:layer&gt;标签实现。

关于&lt;stl:layer&gt;标签的详细说明，请参考：STL &lt;layer&gt; 元素。
