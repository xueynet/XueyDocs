# <stl:video> 播放视频

```html
<stl:video
    type="指定视频的字段"
    playUrl="视频地址"
    imageUrl="封面图片地址"
    width="宽度"
    height="高度"
    isAutoPlay="是否自动播放"
    isControls="是否显示播放控件"
    isLoop="是否循环播放">
</stl:video>
```

### 说明

通过 `stl:video` 标签在模板中显示视频播放器

`stl:video` 标签为HTML5标签，最终将解析为HTML5标签 `<video>`，需要兼容IE8等低版本浏览器时请谨慎使用此标签。

`stl:video` 标签的视频地址取自内容的视频字段（VideoUrl），可以通过type属性指定其他字段。同时也可以直接使用playUrl属性指定具体的视频播放地址。

标签 `<stl:video>` 在内容模版中默认显示此内容的视频，在内容列表中将显示对应内容的视频。

stl:video 标签能够作为 `<stl:contents>` 等标签的子标签，当作为` <stl:contents>` 的子标签使用时将显示内容的视频。

`<stl:video>` 标签对应的实体为`{stl:video}`。

### 属性

::: tip
所有属于 HTML 标签`<video>`的成员均适用于`<stl:video>`标签。
:::

| 属性 | 说明 |
|:------|:-----|
| type | 指定视频的字段 |
| playUrl | 视频地址 |
| imageUrl | 封面图片地址 |
| width | 宽度 |
| height | 高度 |
| isAutoPlay | 是否自动播放 |
| isControls | 是否显示播放控件 |
| isLoop | 是否循环播放 |

**type - 指定视频的字段**

VideoUrl 指定视频的字段，可以是自定义字段

**playUrl - 视频地址**

指定具体的视频地址，可以用"@"开头表示当前网站根目录，用"~"开头表示系统根目录。

**imageUrl - 封面图片地址**

视频播放前显示的封面图片地址，可以用"@"开头表示当前网站根目录，用"~"开头表示系统根目录。

**width - 宽度**

播放器的宽度

**height - 高度**

播放器的高度

**isAutoPlay - 是否自动播放**

是否自动播放

**isControls - 是否显示播放控件**

是否显示播放控件

**isLoop - 是否循环播放**

是否循环播放

### 示例

**显示当前内容的视频文件**

下面的例子显示当前内容的视频文件。

```html
<stl:video width="640" height="264" isAutoPlay="false"></stl:video>
```

**显示指定地址的视频文件**

下面的例子显示文件名为“oceans-clip.mp4”的视频文件，同时设置不自动播放。

```html
<stl:video playUrl="@/images/oceans-clip.mp4" imageUrl="@/images/oceans-clip.png" width="640" height="264" isAutoPlay="false"></stl:video>
```
