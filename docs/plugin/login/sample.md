# 组合示例

## 判断状态并分别显示

下面我们使用 stl:if 标签判断用户登录状态，并根据登录状态分别显示：
```html
<stl:if type="IsUserLoggin">
    <stl:yes>
        <span><img src="{user.avatarUrl}" width="61" height="61"></span>
        {user.DisplayName}
        <a href="{stl:login url=logout}">退出</a>
    </stl:yes>
    <stl:no>
        <a href="#" onclick="onLogin()">登录</a>
        <a href="#" onclick="onRegister()">注册</a>
    </stl:no>
</stl:if>

<stl:layer funcName="onRegister" title="用户注册" width="550" offset="100px">
    <stl:login type="register"></stl:login>
</stl:layer>

<stl:layer funcName="onLogin" title="用户登录" width="500" offset="100px">
    <stl:login type="login"></stl:login>
</stl:layer>
```
