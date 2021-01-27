# 表单字段

表单可以创建多种类型的提交字段，下面我们分别加以介绍。

###文本输入框（Text）

文本输入字段是表单中最常见的类型，对应 HTML 文本单行输入： `<input type="text">` 。

![styles01.png](/assets/img/plugin/form/styles01.png)

###数字输入框（Number）

数字输入框与文本输入框类似，对应 HTML 数字单行输入： `<input type="number">` 。

![styles01.png](/assets/img/plugin/form/styles01.png)

数字输入框与文本输入框的区别为数字输入框只允许用户输入数字。

###多行文本输入框（TextArea）

多行文本输入框允许用户输入多行内容，对应 HTML 文本多行输入： `<textarea>` 。

![styles02.png](/assets/img/plugin/form/styles02.png)

多行文本输入框可以进一步设置输入框显示高度。

###多选项（CheckBox）

多选项允许用户从指定的选项中选择一个或多个，对应 HTML 多选项输入： `<input type="checkbox">` 。

![styles03.png](/assets/img/plugin/form/styles03.png)

多选择在表单管理中可以设置一个或多个默认选中项。

###单选项（Radio）

单选项允许用户从指定的选项中选择一个，对应 HTML 单选项输入： `<input type="radio">` 。

![styles04.png](/assets/img/plugin/form/styles04.png)

单选项在表单管理中可以设置一个默认选中项。

###单选下拉框（SelectOne）

单选下拉框允许用户从指定的选项中选择一个，对应 HTML 单选下拉框输入： `<select>` 。

![styles05.png](/assets/img/plugin/form/styles05.png)

单选下拉框在表单管理中可以设置一个默认选中项。

###多选下拉框（SelectMultiple）

多选下拉框允许用户从指定的选项中选择一个或多个。

![styles06.png](/assets/img/plugin/form/styles06.png)

多选下拉框在表单管理中可以设置一个或多个默认选中项。

###日期选择框（Date）

日期选择框允许用户输入或选择日期。

![styles07.png](/assets/img/plugin/form/styles07.png)

###日期及时间选择框（DateTime）

日期及时间选择框允许用户输入或选择日期及时间。

![styles08.png](/assets/img/plugin/form/styles08.png)

###隐藏项（Hidden）

隐藏项字段在表单提交界面不会显示，隐藏项的值将默认提交至表单中。

通常添加隐藏项字段的同时，会设置隐藏项默认值，提交表单时默认值将作为隐藏项提交至后台数据库。