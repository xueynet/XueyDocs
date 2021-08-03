# 二维码插件

二维码显示插件（sscms.qrcode）用于在模板中通过标签将 URL 地址生成二维码图片并展示在页面中。

## 基本用法

二维码插件使用 <stl:qrCode> 标签生成二维码，二维码的地址为当前页面地址：

```html
<stl:qrCode></stl:qrCode>
```

## 指定二维码地址

可以使用 url 属性指定二维码地址：
```html
<stl:qrCode url="https://docs.xuey.net/"></stl:qrCode>
```

url属性支持STL实体解析，如显示当前栏目的二维码地址：

```html
<stl:qrCode url="{channel.navigationUrl}"></stl:qrCode>
```
 ## 指定二维码图片尺寸

可以使用 size 属性指定二维码图片尺寸：
```html
<stl:qrCode size="128"></stl:qrCode>
```