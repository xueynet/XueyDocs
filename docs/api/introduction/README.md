# XYCMS REST API

XYCMS REST API 为 XYCMS 提供了一个基于 HTTP 的 API 调用，允许开发者通过发送和接收 JSON 对象来远程与站点进行交互。JSON 是一种开放的标准数据格式，它是轻量级的，而且是人类可读的。

当向 API 发送内容或请求时，响应将以 JSON 形式返回，这使开发人员能够从客户端 JavaScript 或外部应用程序创建、读取和更新 XYCMS 内容，REST API 可以使用任何编程语言进行调用。

::: tip
可以通过 `http://<example.com>/api/docs/`（需要将 example.com 替换为真实域名或IP地址）访问 XYCMS 生成的 Swagger API 文档。
:::

### 为什么使用 REST API ?

XYCMS REST API 提供了一组易于使用的 HTTP 端点，可以让您以简单的 JSON 格式访问站点的数据，包括站点、栏目、内容等等。检索或更新数据就像发送 HTTP 请求一样简单。

XYCMS REST API 使开发者比以往更容易获取站点数据，通过使用 REST API，您可以更容易地构造您想要从 XYCMS 中获取数据的方式。使用 REST API 可以极大地简化 AJAX 调用，使您能够更少地花时间访问所需的数据，并花更多时间创建更好的用户体验。

你可以创建一个应用来为 XYCMS 提供一个全新的管理界面，或创造一个全新的交互式前端体验，任何能够生成 HTTP 请求和解释 JSON 的编程语言都可以通过 REST API 与 XYCMS 交互。

### 如何访问 REST API ?

XYCMS REST API 通过 URL 地址提供访问接口，为了测试是否能够访问 XYCMS REST API，你可以简单地用浏览器打开地址：

`http://<example.com>/api/ping/`（需要将 example.com 替换为真实域名或IP地址）

如果请求成功，XYCMS REST API 将从服务器返回字符串 pong。

### 内容 API

| 操作 | 请求 | 地址 |
| :----- | :----- | :----- |
| 获取内容列表 API | POST | /api/v1/contents |
| 获取内容 API | GET | /api/v1/contents/{siteId}/{channelId}/{id} |
| 新增内容 API | POST | /api/v1/contents/{siteId}/{channelId} |
| 修改内容 API | PUT | /api/v1/contents/{siteId}/{channelId}/{id} |
| 删除内容 API | DELETE | /api/v1/contents/{siteId}/{channelId}/{id} |
| 审核内容 API | POST | /api/v1/contents/check |

### 内容 API

| 操作 | 请求 | 地址 |
| :----- | :----- | :----- |
| 获取栏目列表 API | POST | /api/v1/channels |
| 获取栏目 API | GET | /api/v1/channels/{siteId}/{channelId} |
| 新增栏目 API | POST | /api/v1/channels/{siteId} |
| 修改栏目 API | PUT | /api/v1/channels/{siteId}/{channelId} |
| 删除栏目 API | DELETE | /api/v1/channels/{siteId}/{channelId} |

### 管理员 API

| 操作 | 请求 | 地址 |
| :----- | :----- | :----- |
| 新增管理员 API | POST | /api/v1/administrators |
| 修改管理员 API | PUT | /api/v1/administrators/{id} |
| 删除管理员 API | DELETE | /api/v1/administrators/{id} |
| 获取管理员 API | GET | /api/v1/administrators/{id} |
| 获取管理员列表 API | GET | /api/v1/administrators |
| 管理员登录 API | POST | /api/v1/administrators/actions/login |
| 管理员退出登录 API | POST | /api/v1/administrators/actions/logout |
| 修改管理员密码 API | POST | /api/v1/administrators/actions/resetPassword |

### 用户 API

| 操作 | 请求 | 地址 |
| :----- | :----- | :----- |
| 新增用户 API | POST | /api/v1/users |
| 修改用户 API | PUT | /api/v1/users/{id} |
| 删除用户 API | DELETE | /api/v1/users/{id} |
| 获取用户 API | GET | /api/v1/users/{id} |
| 获取用户头像 API | GET | /api/v1/users/{id}/avatar |
| 上传用户头像 API | POST | /api/v1/users/{id}/avatar |
| 获取用户列表 API | GET | /api/v1/users |
| 用户登录 API | POST | /api/v1/users/actions/login |
| 用户退出登录 API | POST | /api/v1/users/actions/logout |
| 修改用户密码 API | POST | /api/v1/users/actions/resetPassword |
| 新增用户操作日志 API | POST | /api/v1/users/{id}/logs |
| 获取用户操作日志 API | GET | /api/v1/users/{id}/logs |

### STL 模板语言 API

| 操作 | 请求 | 地址 |
| :----- | :----- | :----- |
| 获取链接 API | GET | /api/v1/stl/a |
| 获取栏目值 API | GET | /api/v1/stl/channel |
| 获取栏目列表 API | GET | /api/v1/stl/channels |
| 获取内容值 API | GET | /api/v1/stl/content |
| 获取内容列表 API | GET | /api/v1/stl/contents |
| 获取站点值 API | GET | /api/v1/stl/site |
| 获取站点列表 API | GET | /api/v1/stl/sites |
| 获取数据库值 API | GET | /api/v1/stl/sqlContent |
| 获取数据库列表 API | GET | /api/v1/stl/sqlContents |

### 其他 API

| 操作 | 请求 | 地址 |
| :----- | :----- | :----- |
| 获取验证码图片 API | GET | /api/v1/captcha/{name} |
| 验证验证码 API | POST | /api/v1/captcha/{name}/actions/check |
| Ping 可用性 API | GET | /api/v1/ping |