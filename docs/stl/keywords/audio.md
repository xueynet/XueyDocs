# <stl:audio> 播放音频

```html
<stl:audio
    type="指定存储音频地址的内容字段，默认为VideoUrl"
    playUrl="音频地址，优先级高于type属性"
    isAutoPlay="是否自动播放"
    isPreload="是否预载入"
    isLoop="是否循环播放">
</stl:audio>
```

### 说明

通过 `stl:audio` 标签在模板中显示并播放音频文件。

`stl:audio` 标签为HTML5标签，最终将解析为HTML5标签`<audio>`，需要兼容 IE8 等低版本浏览器时请谨慎使用此标签。

`stl:audio` 标签的音频地址取自内容的音频字段（videoUrl），可以通过type属性指定其他字段。同时也可以直接使用playUrl属性指定具体的音频播放地址。

标签 `<stl:audio>` 在内容模版中默认显示此内容的音频。

stl:audio 标签能够作为 `<stl:contents>` 等标签的子标签，当作为 `<stl:contents>` 的子标签使用时将显示内容的音频。

### 解析

如果使用 `<stl:audio>` 元素，系统将解析元素为 HTML `<audio>` 元素。

如果使用 `{stl:audio}` 实体，系统将解析实体为音频的URL地址字符串。

### 属性

::: tip
所有属于 HTML 标签`<audio>`的属性均适用于`<stl:audio>`标签。
:::

| 属性 | 	说明 |
|:-----|:-----|
| type | 指定存储音频的字段 | 
| playUrl | 指定音频地址 | 
| isAutoPlay | 是否自动播放 | 
| isPreload | 是否预载入 | 
| isLoop | 是否循环播放 | 

**type - 指定存储音频的字段**

指定音频的字段，可以是自定义字段，默认值为`VideoUrl`。

**playUrl - 指定音频地址**

指定具体的音频地址，可以用"@"开头表示当前网站根目录，用"~"开头表示系统根目录。

**isAutoPlay - 是否自动播放**

设置是否自动播放音频。

**isPreload - 是否预载入**

设置是否预载入音频。

**isLoop - 是否循环播放**

设置是否循环播放音频。

### 示例

**显示当前内容的音频文件**

下面的例子显示当前内容的音频文件。

```html
<stl:audio></stl:audio>
```

解析后的 HTML 代码：

```html
<audio src="/images/ChasingCorporate.mp3">
    <object width="460" height="40" type="application/x-shockwave-flash" data="http://help.xuey.net/sitefiles/assets/flashes/mediaelement/flashmediaelement.swf">
        <param name="movie" value="http://help.xuey.net/sitefiles/assets/flashes/mediaelement/flashmediaelement.swf">
        <param name="flashvars" value="controls=true&amp;file=/images/ChasingCorporate.mp3">
    </object>
</audio>
<script>$('audio').mediaelementplayer();</script>
```

**显示指定地址的音频文件**

下面的例子显示文件名为“ChasingCorporate.mp3”的音频文件。

```html
<stl:audio playUrl="@/images/ChasingCorporate.mp3"></stl:audio>
```

解析后的 HTML 代码：

```html
<audio src="/images/ChasingCorporate.mp3">
    <object width="460" height="40" type="application/x-shockwave-flash" data="http://help.xuey.net/sitefiles/assets/flashes/mediaelement/flashmediaelement.swf">
        <param name="movie" value="http://help.xuey.net/sitefiles/assets/flashes/mediaelement/flashmediaelement.swf">
        <param name="flashvars" value="controls=true&amp;file=/images/ChasingCorporate.mp3">
    </object>
</audio>
<script>$('audio').mediaelementplayer();</script>
```
