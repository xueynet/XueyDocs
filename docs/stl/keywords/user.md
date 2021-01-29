# <stl:user> 显示用户信息

```html
<stl:user
    type="用户属性名称">
</stl:user>
```

### 说明

通过 `stl:user` 标签在模板中显示用户信息。

`<stl:user>` 标签可以使用简写 `{user.}`。

### 属性

| 属性 | 说明 |
|:------|:-----|
| type | 用户属性名称 |

**type - 用户属性名称**

用户属性名称，可以使用以下值：

* "id" 用户Id
* "userName" 用户账号
* "createdDate" 用户注册时间
* "lastActivityDate" 用户最后活跃时间
* "countOfLogin" 用户登录次数
* "displayName" 用户显示名称
* "email" 用户邮箱
* "mobile" 用户手机号码
* "avatarUrl" 用户头像
* "自定义" 获取自定义的用户字段值
