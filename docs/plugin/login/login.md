# 登录示例

## 显示登录表单
可以使用默认模板 login 显示登录表单：
```html
<stl:login type="login"></stl:login>
```
标签解析后将在页面中显示如下界面：

![alt 图片](/assets/img/plugin/login/20210804100616.png)

## 弹出登录表单

配合 &lt;stl:layer&gt; 标签能实现在当前页面中弹出登录窗口：

```html
<a href="#" onclick="onLogin()">登录</a>
<stl:layer funcName="onLogin" title="用户登录" width="500" offset="100px">
    <stl:login type="login"></stl:login>
</stl:layer>	

```
## 微信登录

微信登录首先需要配置第三方登录参数，请参考：

采用微信登录需要将type属性设置为weixin：
```html
<!-- 微信登录 -->
<stl:login url="weixin">
    <img src="images/weixin.gif" />
    微信登录
</stl:login>
```
标签将解析为：![alt 图片](/assets/img/plugin/login/202110120424.png)  

点击链接后将转至微信登录界面：

![alt 图片](/assets/img/plugin/login/2021101415023.png)  

## QQ登录

QQ登录首先需要配置第三方登录参数，请参考：

采用QQ登录需要将type属性设置为qq：

```html
!-- QQ登录 -->
<stl:login url="qq">
    <img src="images/qq.gif" />
    QQ登录
</stl:login>
```
标签将解析为： ![alt 图片](/assets/img/plugin/login/2021101605213.png)  

点击链接后将转至QQ登录界面：

![alt 图片](/assets/img/plugin/login/2021101803674.png)  

## 新浪微博登录

新浪微博登录首先需要配置第三方登录参数，请参考：

采用新浪微博登录需要将type属性设置为weibo：

```html
<!-- 新浪微博登录 -->
<stl:login url="weibo">
    <img src="images/weibo.gif" />
    微博登录
</stl:login>
```
标签将解析为：![alt 图片](/assets/img/plugin/login/2021102007421.png)

点击链接后将转至新浪微博登录界面：

![alt 图片](/assets/img/plugin/login/2021102201231.png)
