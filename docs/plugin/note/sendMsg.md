# 短信设置/测试

完成阿里云短信服务开通及签名申请后，就可以进入短信发送插件进行参数设置了，设置完毕参数后短信发送插件才能够正常工作。

## 获取AccessKey ID以及AccessKey Secret

获取阿里云的AccessKey ID和AccessKey Secret，请执行以下步骤：

1、登录阿里云管理控制台

2、如下图所示，将鼠标移至右上方的账号管理图标，然后单击accesskeys。

![alt 图片](/assets/img/plugin/note/20210730165122.jpg)

除此之外，也可以通过创建 RAM 用户获取对应的AccessKey ID以及AccessKey Secret，详情请参考 阿里云帮助文档 (opens new window)。

## 获取阿里云短信控制台模版CODE

开通阿里云短信服务后，进入阿里云短信服务控制台 (opens new window)，在左侧菜单点击 国内消息，接下来进入 模板管理 界面

![alt 图片](/assets/img/plugin/note/20210730170955.png)

在此，我能需要获取到阿里云自动配置的 模版CODE 值。


## 短信设置

在 SSCMS 后台进入短信设置界面：

![alt 图片](/assets/img/plugin/note/20210730172756.png)

在此填写的AccessKey ID以及AccessKey Secret，同时填写对应的模版CODE即可。

## 短信测试

设置完成后进入短信发送测试菜单，填入手机号码，选择模板名称和填写参数值即可点击发送。

![alt 图片](/assets/img/plugin/note/20210730172448.png)

如果收到短信信息，说明配置正常。
