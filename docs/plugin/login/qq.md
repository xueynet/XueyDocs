# QQ登录设置

## 进入设置界面

集成QQ一键登录需要在登录插件中设置QQ登录参数，进入用户登录插件 -> 第三方登录设置 -> QQ登录设置：

![alt 图片](/assets/img/plugin/login/20210804110023.png)

我们需要获取 App ID 以及 App Key 值。

## 获取参数值

App ID 以及 App Key 值需要从 QQ互联 (opens new window)获取，进入QQ互联，找到应用管理，点击网站应用：

![alt 图片](/assets/img/plugin/login/20210804110222.png)

点击右侧查看链接：

![alt 图片](/assets/img/plugin/login/20210804110566.png)

## 网站回调域

请确保应用详情页面中最底部的网站回调域为正式的域名地址（如果网站API为独立部署，请设置为API的访问域名） + “/api/SS.Login/auth/Qq/redirect”，否则QQ登录页面将报错。
如：http://www.domain.com/api/SS.Login/auth/Qq/redirect

![alt 图片](/assets/img/plugin/login/20210804110777.png)

如果网站回调域不正确，可以点击修改链接，进行修改。

## 测试

设置完成后点击测试按钮，如果按钮地址为QQ登录界面，说明设置成功。

![alt 图片](/assets/img/plugin/login/20210804110927.png)

注意：必须在正式域名下进行测试，否则可能无法成功。
