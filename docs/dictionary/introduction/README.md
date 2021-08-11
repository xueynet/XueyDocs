# XYCMS 数据结构参考手册

XYCMS 在数据库中创建的表主要由三部分组成：

* XYCMS 系统数据表
* XYCMS 内容表
* XYCMS 插件表

下面是 XYCMS 安装期间创建的数据库表的概要和描述，数据库结构和下面的图表最后更新于7.0.12版本。

### 系统数据表

| 表 | 概述 |
| :----- | :----- |
|siteserver_AccessToken	|API密钥表，存储访问REST API的密钥|
|siteserver_Administrator	|管理员表，存储管理员信息|
|siteserver_AdministratorsInRoles	|管理员角色表，存储管理员与角色的关系|
|siteserver_Area	|区域表，存储所属区域|
|siteserver_Channel|	栏目表，存储站点下的栏目信息|
|siteserver_ChannelGroup	|栏目组表，存储栏目组信息|
|siteserver_Config	|系统配置表，存储系统配置信息|
|siteserver_ContentCheck	|内容审核表，存储内容审核信息|
|siteserver_ContentGroup	|内容组表，存储内容组信息|
|siteserver_Count	|数字统计表，存储统计信息|
|siteserver_DbCache	|数据缓存表，存储缓存信息|
|siteserver_Department	|部门表，存储所有部门|
|siteserver_ErrorLog	|错误日志表，存储所有报错信息|
|siteserver_Keyword	|敏感词表，存储敏感词信息|
|siteserver_Log	|管理员操作日志表，存储管理员所执行的动作日志|
|siteserver_PermissionsInRoles	|权限角色表，存储权限与角色的关系|
|siteserver_PluginConfig	|插件配置表，存储插件配置信息|
|siteserver_Plugin	|插件表，存储插件信息|
|siteserver_RelatedField	|联动字段表，存储联动字段信息|
|siteserver_RelatedFieldItem	|联动字段选项表，存储联动字段的选择项列表|
|siteserver_Role	|角色表，存储管理员角色信息|
|siteserver_Site	|站点表，存储站点信息|
|siteserver_SiteLog|	站点日志表，存储对站点的所有操作日志信息|
|siteserver_SitePermissions	|站点权限表，存储分配给管理员的站点权限|
|siteserver_Special	|专题表，存储站点下的专题信息|
|siteserver_Table	|内容表基本信息表，存储与站点关联的内容表的基本信息|
|siteserver_TableMetadata	|内容表字段信息表，存储与站点关联的内容表的详细字段信息|
|siteserver_TableStyle	|提交样式表，存储内容编辑界面中每项的提交样式|
|siteserver_TableStyleItem	|提交样式选项表，存储提交样式的选择项列表|
|siteserver_Tag	|内容标签表，存储内容的关联标签|
|siteserver_Template	|模板表，存储站点的模板信息|
|siteserver_TemplateLog	|模板日志表，存储模板的版本信息|
|siteserver_TemplateMatch	|模板匹配表，存储模板与栏目之间的匹配关系|
|siteserver_User	|用户表，存储用户信息|
|siteserver_UserLog	|用户日志表，存储用户的操作日志|

### 内容表

内容表用于存储站点内容数据，每个站点可以自定义自己的内容表，也可以与其他站点使用同一个内容表。

内容表默认名称为`model_Content`，XYCMS 后台可以新建新的内容表，或者修改现有内容表的字段。

内容表数据结构:

| 表 | 概述 |
| :----- | :----- |
| id |内容id,自增长主键 |
| Guid | 随机生成的唯一标识 |
| ExtendValues | 扩展值 |
| CreatedDate | 内容的创建时间 |
| LastModifiedDate | 最后修改内容的时间 |
| ChannelId | 内容所属的栏目id|
| SiteId | 站点id |
| AdminId | 管理员id |
| LastEditAdminId | 最后修改人的id |
| UserId | 用户id |
| Taxis | 排序 |
| GroupNames | 内容组名 |
| TagNames | 标签名 |
| SourceId | 内容来源id |
| ReferenceId | 引用内容 Id |
| Checked | 是否通过审核 |
| CheckedLevel | 未通过审核的情况下，处于第几级审核状态 |
| Hits | 内容的总点击量 |
| HitsByDay | 日点击量 |
| HitsByWeek| 周点击量 |
| HitsByMonth | 月点击量 |
| LastHitsDate | 最后点击时间 |
| Downloads | 下载 |
| TItle | 内容标题 |
| SeoTitle |  Seo标题 |
| SubTitele | 内容副标题 |
| ImageUrl | 图片地址 |
| VideoUrl | 视频路径 |
| FileUrl | 文件路径 |
| Keywords | 文章关键字 |
| Description | 内容描述信息  |
| Body | 内容主体部分 |
| Summary |内容摘要|
| Author | 内容作者  |
| Source | 内容来源 |
| Top | 内容是否置顶 |
| Recommend | 是否推荐内容 |
| hpt | 是否热点内容 |
| Color |是否为醒目内容|
| LinkUrl | 外部链接，设置后链接将指向此地址 |
| AddDate | 内容添加时间 |
| TemplateId | 内容模板id |
| Price | 单价 |
| OldPrice | 原价 |
| StockQuan | 库存 |
### 插件表

插件表是XYCMS插件所使用的表，每个插件都可以有自己的表结构，插件表通常以插件Id作为开头。

xycms_comments  评论插件表数据结构:

| 表 | 概述 |
| :----- | :----- |
| id | 评论id,自增长 |
| Guid | 随机生成的唯一标识 |
| CreatedDate | 评论创建时间 |
| LastModifiedDate | 评论最后修改时间 |
| ExtendValues | 扩展值 |
| siteId | 站点id |
| CHannelId | 栏目id |
| ContentId | 内容id |
| UserId | 用户id |
| ipAddress | 评论IP地址 |
| Status | 状态 |
| ParentId | 父级id |
| Content | 评论内容 |

xycms_comments_settings  评论插件相关数据表:

| 表 | 描述 |
|:----- | :----- |
| id | 自增长id |
| Guid | 随机生成的唯一标识 |
| CreatedDate | 创建时间 |
| LastModifiedDate | 最后修改时间 |
| ExtendValues | 扩展值 |
| SiteId | 站点id |

xycms_form 表单插件数据结构表:

| 表 | 概述 |
| :----- | :----- |
| id | 自增长id |
| Guid | 随机生成的唯一标识 |
| CreatedDate | 创建时间 |
| LastModifiedDate | 最后修改时间 |
| ExtendValues | 扩展值 |
| SiteId | 站点id |
| Title | 标题 |
| Description | 描述 |
| Taxis | 排序 |
| isReply | 是否答复  |
| RepliedCount | 答复数量 |
| TotalCount | 答复总数 |

xycms_form_data 表单插件数据结构表

| 表 | 概述 |
|:-----|:-----|
| id | 自增长id |
| Guid | 随机生成的唯一标识 |
| CreatedDate | 创建时间 |
| LastModifiedDate | 最后修改时间 |
| ExtendValues | 扩展值 |
| FormId | 表单id |
| isReplied | 是否答复 |
| ReplyDate | 答复时间 |
| ReplyContent | 答复内容 |
| isRead | 是否已读 |
| followUser | 跟进人 |

xycms_login_oauth 登录插件  身份验证表:

| 表 | 概述 |
|:-----|:-----|
| id | 自增长id |
| Guid | 随机生成的唯一标识 |
| CreatedDate | 创建时间 |
| LastModifiedDate | 修改时间 |
| ExtendValues | 扩展值 |
| UserName | 用户名 |
| Source | 来源 |
| UniqueId | 唯一标识id |

xycms_shopping_cart 购物车数据表:

| 表 | 概述 |
|:-----|:-----|
| id | 自增长id |
| Guid | 随机生成的唯一标识 |
| CreatedDate | 创建时间 |
| LastModifiedDate | 修改时间 |
| ExtendValues | 扩展值 |
| SiteId | 站点id |
| TypeId | 类型id |
| UserId | 用户Id |
| SessionId | 用户SessionId |
| ChannelId | 栏目id |
| ProductId | 商品Id |
| ProductName | 商品名称 |
| ImageUrl | 商品图片 |
| LinkUrl | 商品外部链接，设置后链接将指向此地址 |
| Fee | 商品费用 |
| IsDelivery | 是否支付 |
| Count | 商品数量 |
| AddDate | 添加时间 |

xycms_shopping_order  商品订单表:

| 表 | 概述 |
|:-----|:-----|
| id | 自增长id |
| Guid | 随机生成的唯一标识 |
| CreatedDate | 创建时间 |
| LastModifiedDate | 修改时间 |
| ExtendValues | 扩展值 |
| OrderNumber | 订单数量 |
| SiteId | 站点Id |
| UserId | 购买商品的用户id |
| SessionId | 购买商品的用户SessionId |
| RealName | 真实姓名 |
| Mobile | 用户移动电话 |
| Tel | 用户手机号码 |
| Location | 位置 |
| Address | 地址 |
| ZipCode | 邮政编码 |
| Message | 消息 |
| Channel | 栏目 |
| SubType | 子类型 |
| TotalFee | 订单总价 |
| ExpressCost | 快递费用 |
| TotalCount | 订单总数 |
| IsPayed | 是否支付 |
| State | 状态 |
| FollowUser | 订单跟进人 |
| AddDate | 添加时间 |
| IsDeleted | 订单是否删除 |

xycms_order_cart_mapping 订单映射表:


| 表 | 概述 |
|:-----|:-----|
| id | 自增长id |
| Guid | 随机生成的唯一标识 |
| CreatedDate | 创建时间 |
| LastModifiedDate | 修改时间 |
| ExtendValues | 扩展值 |
| OrderId | 订单Id |
| CartId | 购物车Id |


xycms_payment_record 支付记录表:

| 表 | 概述 |
|:-----|:-----|
| id | 自增长id |
| Guid | 随机生成的唯一标识 |
| CreatedDate | 创建时间 |
| LastModifiedDate | 修改时间 |
| ExtendValues | 扩展值 |
| SiteId | 站点Id |
| Message | 消息 |
| ProductId | 商品Id |
| ProductName | 商品名称 |
| Fee | 商品费用 |
| OrderNo | 订单号 |
| Channel | 商品所属栏目 |
| SubType | 子类型 |
| IsPayed | 是否支付 |
| UserId | 用户Id |
| AddDate | 添加时间 |
| TransactionId | 交易id |
| PayDate | 支付时间 |
| IsDeleted | 是否删除 |

xycms_photos  内容相册插件表:

| 表 | 概述 |
|:-----|:-----|
| id | 自增长id |
| Guid | 随机生成的唯一标识 |
| CreatedDate | 创建时间 |
| LastModifiedDate | 修改时间 |
| ExtendValues | 扩展值 |
| SiteId | 站点Id |
| channelId | 栏目id |
| Content | 内容Id |
| SamllUrl | 小图地址 |
| MiddleUrl | 中图地址 |
| LargeUrl | 大图地址 |
| Taxis | 排序 |
| Description | 内容描述 |

xycms_sms_send 短信发送插件表:

| 表 | 概述 |
|:-----|:-----|
| id | 自增长id |
| Guid | 随机生成的唯一标识 |
| CreatedDate | 创建时间 |
| LastModifiedDate | 修改时间 |
| ExtendValues | 扩展值 |
| Phone | 电话 |
| Content | 内容 |
| Source | 来源 |

<style>
table th:first-of-type {
    width: 20%;
}
table th:nth-of-type(2) {
    width: 80%;
}
</style>
