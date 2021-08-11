# 微信登录设置

## 进入设置界面

集成微信一键登录需要在登录插件中设置微信登录参数，进入用户登录插件 -> 第三方登录设置 -> 微信登录设置：

![alt 图片](/assets/img/plugin/login/20210804103459.png)

我们需要获取 AppID、App Secret以及 Scope值。

## 获取参数值

AppID以及 App Secret值需要从 微信开放平台 (opens new window)获取，进入微信开放平台，找到管理中心，点击网站应用：

![alt 图片](/assets/img/plugin/login/20210804104821.png)

点击右侧查看链接：

![alt 图片](/assets/img/plugin/login/20210804104911.png)

## 授权回调域

请确保应用详情页面中最底部的授权回调域为正式的域名地址（如果网站API为独立部署，请设置为API的访问域名），否则微信登录页面将报错。

![alt 图片](/assets/img/plugin/login/20210804105122.png)

如果授权回调域不正确，可以点击修改链接，进行修改。

## 测试

设置完成后点击测试按钮，如果按钮地址为微信登录界面，说明设置成功。

![alt 图片](/assets/img/plugin/login/20210804105420.png)

注意：必须在正式域名下进行测试，否则可能无法成功。
