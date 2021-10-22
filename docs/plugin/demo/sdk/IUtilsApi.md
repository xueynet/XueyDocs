# IUtilsApi interface

工具类Api接口。

``` c#
public interface IUtilsApi
```

## Members

| name | description |
| :----- | :----- |
|AddWaterMark(…)	|根据后台设置为图片添加水印。|
|CreateZip(…)	|压缩文件夹。|
|Decrypt(…)	|根据Web.config中设置的SecretKey解密字符串。|
|Encrypt(…)	|根据Web.config中设置的SecretKey加密字符串。|
|ExtractZip(…)	|解压缩文件夹。|
|FilterSql(…)	|防Sql注入过滤。|
|FilterXss(…)	|防XSS攻击过滤。|
|GetAdminDirectoryUrl(…)	|获取管理后台文件访问Url地址。|
|GetRootUrl(…)	|获取系统根目录访问Url地址。|
|GetTemporaryFilesPath(…)	|获取系统临时文件夹的绝对路径。|
|GetUploadFilePath(…)	|根据后台设置获取指定文件名的上传路径。|
|MoveFiles(…)	|跨站转移文件。|

