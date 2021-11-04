# API 身份认证

除少数接口外，对 REST API 发起的任何请求都必须通过身份验证，未验证的请求将返回 401 Unauthorized 错误。

### 获取 API 密钥

所有的 REST API 调用均通过专门的 API 密钥完成，该密钥是一串字符串，XYCMS 后台能够对密钥进行管理，设置此密钥的访问权限、替换或让此密钥失效。

使用最高权限的管理员登录 XYCMS 管理后台，进入菜单 **系统管理 -> 实用工具 -> API 密钥**：



在此可以新增密钥，设置授权范围以及删除密钥。新增密钥并设置好授权范围后点击 API 密钥名称，进入密钥查看界面：



建议定期更换 API 密钥以确保安全，可以点击 **重设 Token** 按钮更换 API 密钥。

### 如何访问 REST API ?

XYCMS REST API 通过 URL 地址提供访问接口，为了测试是否能够访问 XYCMS REST API，你可以简单地用浏览器打开地址：

`http://<example.com>/api/ping/`（需要将 example.com 替换为真实域名或IP地址）

如果请求成功，XYCMS REST API 将从服务器返回字符串 pong。

### 使用 API 密钥进行身份认证

获取 API 密钥之后需要在调用 REST API 时将密钥通过请求发送给服务器，目前系统支持两种方式发送 API 密钥：

* 通过 Header 发送 API 密钥
* 通过传参发送 API 密钥

如果身份认证成功，返回 HTTP 200，如果身份验证失败，返回 HTTP 401。

### 通过 Header 发送 API 密钥

使用 Header 方法送 API 密钥需要在发起请求时将密钥放到 **X-XY-API-KEY** Header 中：

请求

```
POST https://example.com/api/v1/contents HTTP/1.1
```

请求 Header

```
X-XY-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

响应

```
200
```

### 通过传参发送 API 密钥

使用传参方法送 API 密钥需要在发起请求时将密钥放到 **apiKey** 的请求参数中：

请求

```
POST https://example.com/api/v1/contents?apiKey=7cd22002-27a7-4c5d-ba4d-a1c108a20eaf HTTP/1.1
```

响应

```
200
```

### 无需认证的 API 接口

| 操作 | 请求 | 地址 |
| :----- | :----- | :----- |
| 获取用户头像 API | GET | v1/users/{id}/avatar |
| 用户登录 API | POST | v1/users/actions/login |
| 管理员登录 API | POST | v1/administrators/actions/login |
| 获取验证码图片 API | GET | /api/v1/captcha/{name} |
| 验证验证码 API | POST | /api/v1/captcha/{name}/actions/check |
| Ping 可用性 API | GET | /api/v1/ping |