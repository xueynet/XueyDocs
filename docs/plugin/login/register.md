# 注册示例

## 显示注册表单

可以使用默认模板 register 显示注册表单：

```html
<stl:login type="register"></stl:login>
```
标签解析后将在页面中显示如下界面：

![alt 图片](/assets/img/plugin/login/20211026012422.png)  

## 弹出注册表单

配合 stl:layer 标签能实现在当前页面中弹出注册窗口：

```html
<a href="#" onclick="onRegister()">注册</a>

<stl:layer funcName="onRegister" title="用户注册" width="550" offset="100px">
    <stl:login type="register"></stl:login>
</stl:layer>

```
