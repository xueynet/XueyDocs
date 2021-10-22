# Docker本地运行测试环境

在此，我们将从零开始进行项目模板Docker本地运行。

## 建立Git仓库
第一步：cd到你的本地项目根目录下，执行git命令
```
git init
```
第二步：将项目的所有文件添加到仓库中
```
git add
```
第三步：将add的文件commit到仓库
```
git commit -m "注释语句"
```
第四步：去github上创建自己的repository,拿到创建的仓库的https地址

第五步：将本地的仓库关联到github上
```
git remote add origin 自己的仓库url地址
```
第六步，上传代码到github远程仓库
```
git push -u origin master
```
>第一次上传有可能会遇到push失败的情况，那是因为跟SVN一样，github上有一个README.md 文件没有下载下来 。我们得先
```
git pull --rebase origin master
```

## 使用Visual Studio Code或Git克隆远程仓库

1.Visual Studio Code 克隆远程仓库

![01](/assets/img/stl/demo/2021102101.jpg)

2.Git 克隆远程仓库

![02](/assets/img/stl/demo/2021102102.jpg)

## 运行模板项目

在 Visual Studio Code 中运行项目

![03](/assets/img/stl/demo/2021102103.jpg)

>在项目列表中 README.md 文件找到Docker命令

```
docker run -e TZ="Asia/Shanghai2" -d --name kingwelson-xycmss -p 8004:80 --restart=always -v D:\Work\T_kingwelson\wwwroot:/app/wwwroot -e XYCMS_SECURITY_KEY=e2a3d303-ac9b-41ff-9154-930710af0845 -e XYCMS_DATABASE_TYPE=SQLite xueynet/xycms:latest
```
## 运行Windows WT

**依次运行以下代码**
```
docker --version
```
```
docker pull xueynet/xycms:latest
```
```
docker -image ls
```
```
docker ps -a
```
```
docker run -e TZ="Asia/Shanghai2" -d --name kingwelson-xycmss -p 8004:80 --restart=always -v D:\Work\T_kingwelson\wwwroot:/app/wwwroot -e XYCMS_SECURITY_KEY=e2a3d303-ac9b-41ff-9154-930710af0845 -e XYCMS_DATABASE_TYPE=SQLite xueynet/xycms:latest
```
>运行完成后我们可以看到已在docker中创建了实例 kingwelson-xycmss RUNNING PORT:8004

![04](/assets/img/stl/demo/2021102104.jpg)

## 模板组成

介绍模板如何组成

**wwwroot: 根目录**
- css: 样式表
- en: 英文项目
- images: 图片库
- include: 引用文件
- js: 脚本
- Template: 模板
- upload: 后台上传内容
- T_系统首页模板: 首页

>**模板使用示例**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<stl:include file="/include/head.html"></stl:include>
</head>
<body>
    <stl:include file="/include/header.html"></stl:include>
    <stl:include file="/include/colbanner.html"></stl:include>
    <stl:include file="/include/breadcrumb.html"></stl:include>
    <Template name="你的模板">
    <stl:include file="/include/footer.html"></stl:include>
    <stl:include file="/include/side.html"></stl:include>
</body>
    <stl:include file="/include/foot.html"></stl:include>
</html>
```

## 编辑模板项目

以上步骤完成后我们就可以进行模板的本地开发与测试

**示例：修改首页文字**
```html
<div class="home-title wow animated fadeInUp">
    <h2 class="h-h2-white"> 效果图-测试 </h2>
    <p class="m-sm-white"> case </p>
</div>
```
ctrl + s保存后打开后台 http://localhost:8004/xy-admin 生成首页

![05](/assets/img/stl/demo/2021102105.jpg)

刷新后我们看到首页已经改变

![06](/assets/img/stl/demo/2021102106.jpg)

## 源代码管理

下面介绍源代码管理

**版本组成**

![07](/assets/img/stl/demo/2021102107.jpg)

亮色：版本管理的项。暗色：未加入版本管理的项。

>如何管理是否加入版本,项目中找到.gitignore文件中 # Project ignore 修改忽视名单

```
# Project ignore
wwwroot/home
wwwroot/xy-admin
wwwroot/sitefiles/assets
wwwroot/sitefiles/resources

channels
contents
wwwroot/index.html
wwwroot/sitefiles/
```

**版本提交**

![08](/assets/img/stl/demo/2021102108.jpg)

改变的项会在源代码管理中出现，可以查看对比。在消息中输入当前版本名提交进行版本提交
