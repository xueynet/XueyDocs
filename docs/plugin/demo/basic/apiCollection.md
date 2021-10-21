# XYCMS CMS 接口调用

XYCMS CMS 共提供了十种Api调用接口，为插件调用系统功能与数据提供支持：

| Api调用接口 | 说明 |
| :----- | :----- |
|AdminApi|管理员及权限Api接口|
|ChannelApi|栏目Api接口|
|ConfigApi|插件及系统配置Api接口|
|ContentApi|内容Api接口|
|DatabaseApi|数据库操作Api接口|
|ParseApi|STL解析Api接口|
|PluginApi|插件Api接口|
|SiteApi|站点Api接口|
|UserApi|用户Api接口|
|UtilsApi|工具类Api接口|

## AdminApi

管理员及权限Api接口。

| 名称 | 说明 |
| :----- | :----- |
|AdminName|表示当前登录系统的管理员用户名。 此字段为只读|
|HasChannelPermissions|表示当前管理员是否有指定的栏目权限|
|HasSitePermissions|表示当前管理员是否有指定的站点权限|
|HasSystemPermissions|表示当前管理员是否有指定的系统权限|
|IsAdminNameExists|查看管理员是否存在|

## ChannelApi

栏目Api接口。

| 名称 | 说明 |
| :----- | :----- |
|Delete|删除栏目|
|GetChannelId|通过站点Id以及栏目索引获取栏目Id|
|GetChannelIdList|通过站点Id获取此站点下的所有栏目Id的列表。 (2 methods)|
|GetChannelIdListByAdminName|通过站点Id以及管理员用户名获取此管理员拥有权限的栏目Id的列表|
|GetChannelInfo|通过站点Id以及栏目Id获取对应的栏目实例|
|GetChannelName|通过站点Id以及栏目Id获取栏目名称|
|GetChannelUrl|获取栏目Url访问地址|
|Insert|新增栏目|
|NewInstance|实例化指定站点Id的栏目对象|
|Update|修改栏目|

## ConfigApi

插件及系统配置Api接口。

| 名称 | 说明 |
| :----- | :----- |
|SystemConfig|获取 XYCMS CMS 的系统配置字典|
|GetConfig|获取当前插件的配置信息|
|RemoveConfig|删除当前插件的配置信息|
|SetConfig|存储当前插件的配置信息。 (2 methods)|

## ContentApi

内容Api接口。

| 名称 | 说明 |
| :----- | :----- |
|Delete|删除内容|
|GetContentIdList|获取指定栏目的所有内容Id的列表|
|GetContentInfo|获取内容实例|
|GetContentInfoList|获取满足条件的翻页内容列表。 配合GetCount方法，能够实现内容的翻页效果|
|GetContentUrl|获取内容Url访问地址|
|GetContentValue|获取内容的属性值|
|GetCount|获取满足条件的内容总数|
|GetTableColumns|通过站点Id以及栏目Id获取此栏目关联的内容表字段列表|
|GetTableName|通过站点Id以及栏目Id获取此栏目关联的内容表名称|
|Insert|新增内容|
|NewInstance|实例化内容对象|
|Update|修改内容|

## DatabaseApi

数据库操作Api接口。

| 名称 | 说明 |
| :----- | :----- |
|ExecuteCurrentId|获取当前数据库类型INSERT SQL语句执行后表生成的自增长Id。 (3 methods)|
|ExecuteDataset|对连接字符串中指定的数据库执行命令并返回DataSet。 (6 methods)|
|ExecuteNonQuery|对连接字符串中指定的数据库执行命令。 (6 methods)|
|ExecuteNonQueryAndReturnId|执行INSERT SQL命令并返回自增长Id的值。 (2 methods)|
|ExecuteReader|对连接字符串中指定的数据库执行SQL 命令并返回IDataReader。 (6 methods)|
|ExecuteScalar|对连接字符串中指定的数据库执行SQL 命令并返回值。 (6 methods)|
|GetBoolean|获取数据库布尔类型值。 (2 methods)|
|GetConnection|返回给定连接字符串的IDbConnection对象|
|GetDateTime|获取数据库日期/时间类型值。 (2 methods)|
|GetDecimal|获取数据库小数类型值。 (2 methods)|
|GetInt|获取数据库整数类型值。 (2 methods)|
|GetPageSqlString|获取当前数据库类型的能够分页的SQL语句|
|GetParameter|获取用于SQL命令的IDataParameter|
|GetString|获取数据库字符串类型值。 (2 methods)|
|ToBooleanSqlString|将布尔值转换为当前数据库类型能够识别的布尔SQL语句|
|ToDateSqlString|将日期/时间值转换为当前数据库类型能够识别的日期SQL语句|
|ToDateTimeSqlString|将日期/时间值转换为当前数据库类型能够识别的时间SQL语句|
|ToMinusSqlString|获取当前数据库类型的减操作符SQL语句|
|ToNowSqlString|获取当前数据库类型代表当前时间的SQL语句|
|ToPlusSqlString|获取当前数据库类型的加操作符SQL语句|

## ParseApi

STL解析Api接口。

| 名称 | 说明 |
| :----- | :----- |
|GetCurrentUrl|获取当前生成的静态页面的地址|
|GetStlElements|获取html中的指定STL标签|
|Parse|解析HTML中的STL标签|
|ParseAttributeValue|解析Html标签属性中的STL实体|

## PluginApi

插件Api接口。

| 名称 | 说明 |
| :----- | :----- |
|PluginApiUrl|当前插件的Rest Api访问Url地址|
|GetPlugin|通过插件Id获取插件实例|
|GetPluginPath|获取当前插件文件夹下的目录/文件路径|
|GetPluginUrl|获取当前插件文件夹下的目录/文件访问Url地址|

## SiteApi

站点Api接口。

| 名称 | 说明 |
| :----- | :----- |
|GetSiteIdByFilePath|通过目录/文件的绝对路径获取站点Id|
|GetSiteIdList|获取系统中的所有站点的Id列表|
|GetSiteIdListByAdminName|返回指定管理员有权限管理的站点的Id列表|
|GetSiteInfo|通过站点Id获取指定站点的对象实体|
|GetSitePath|获取站点文件夹绝对路径。 (2 methods)|
|GetSiteUrl|获取站点访问Url地址。 (2 methods)|
|GetSiteUrlByFilePath|根据文件的绝对地址计算此文件的访问Url地址|

## UserApi

用户Api接口。

| 名称 | 说明 |
| :----- | :----- |
|AddLog|添加用户日志|
|ChangePassword|修改用户密码|
|GetLogs|获取用户日志列表|
|GetUserInfoByAccount|通过用户账号获取用户对象实例|
|GetUserInfoByEmail|通过用户邮箱获取用户对象实例|
|GetUserInfoByMobile|通过用户手机获取用户对象实例|
|GetUserInfoByUserId|通过用户Id获取用户对象实例|
|GetUserInfoByUserName|通过用户名获取用户对象实例|
|Insert|添加新用户|
|IsEmailExists|判断用户邮箱是否存在|
|IsMobileExists|判断用户手机是否存在|
|IsPasswordCorrect|判断用户密码是否正确|
|IsUserNameExists|判断用户名是否存在|
|NewInstance|初始化 IUserInfo 类的新实例|
|Update|修改用户属性|
|Validate|验证|

## UtilsApi

工具类Api接口。

| 名称 | 说明 |
| :----- | :----- |
|AddWaterMark|根据后台设置为图片添加水印|
|CreateZip|压缩文件夹|
|Decrypt|根据Web.config中设置的SecretKey解密字符串|
|Encrypt|根据Web.config中设置的SecretKey加密字符串|
|ExtractZip|解压缩文件夹|
|FilterSql|防Sql注入过滤|
|FilterXss|防XSS攻击过滤|
|GetAdminDirectoryUrl|获取管理后台文件访问Url地址|
|GetRootUrl|获取系统根目录访问Url地址|
|GetTemporaryFilesPath|获取系统临时文件夹的绝对路径|
|GetUploadFilePath|根据后台设置获取指定文件名的上传路径|
|MoveFiles|跨站转移文件|
