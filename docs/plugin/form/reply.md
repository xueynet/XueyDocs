# 启用表单回复

当前台用户提交的表单需要通过管理员进行回复并将数据显示到前台时，我们将需要启用表单回复功能。

### 开启表单回复

默认表单禁用了表单回复功能，我们需要进入表单 选项设置 界面，在表单回复选项中选择启用表单回复功能：

![reply01.png](/assets/img/plugin/form/reply01.png)

### 后台回复表单

启用表单回复功能后切换到 `数据列表` 界面，列表右侧将显示本条数据的回复状态，同时显示列中将新增可选项 `回复时间` 以及 `回复内容`。

![reply02.png](/assets/img/plugin/form/reply02.png)

点击表单数据右侧的 回复 链接，系统将弹出回复界面：

![reply03.png](/assets/img/plugin/form/reply03.png)

在回复界面中输入内容即可完成内容回复。

### 前台显示已回复列表

接下来我们要做的就是在前台页面显示已回复的表单数据。

进入 `表单` -> `表单模板` 界面，切换至 `数据显示模板`

![reply04.png](/assets/img/plugin/form/reply04.png)

在预览下拉框中选择表单，系统将弹出数据显示预览窗口：

![reply05.png](/assets/img/plugin/form/reply05.png)

可以看到，只有已回复的数据才会显示在数据列表中。

最后，我们需要将数据列表显示在前台页面中，通常的做法是单独创建一个单页模板，用来显示表单列表界面。

我们为单页模板设置模板名称及生成文件名，并添加如下代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>联系我们</title>
</head>
<body>
    <stl:form name="联系我们" type="list1"></stl:form>
</body>
</html>
```

其中 `name` 属性指定表单名称，`type` 属性指定表单显示样式。

保存模板后，访问单页模板页面，我们将看到页面中显示已回复表单数据了。