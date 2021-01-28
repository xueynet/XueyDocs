# <stl:player> 播放视频

```html
<stl:player
    type="指定存储媒体的字段"
    playUrl="视频地址"
    imageUrl="封面图片地址"
    playBy="指定播放器"
    width="宽度"
    height="高度"
    isAutoPlay="是否自动播放">
</stl:player>
```

### 说明

通过 `stl:player` 标签在模板中播放视频

标签 `<stl:player>` 在栏目模版中默认显示此栏目的视频/音频，在内容模版中默认显示此内容的视频/音频。

`stl:player` 标签能够作为 `<stl:channels>` 等标签的子标签，当作为 `<stl:channels>` 的子标签使用时将显示栏目的视频/音频。 `stl:player` 标签能够作为 `<stl:contents>` 等标签的子标签，当作为 `<stl:contents>` 的子标签使用时将显示内容的视频/音频。

`<stl:player>` 标签对应的实体为`{stl:player}`。

::: warning
`<stl:player>` 标签需要使用Flash，如果希望兼容HTML5 标准，请使用`<stl:video>` 标签。
:::

### 属性
