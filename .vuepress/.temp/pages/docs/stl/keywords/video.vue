<template><h1 id="stl-video-播放视频"><a class="header-anchor" href="#stl-video-播放视频">#</a> <a href="stl:video">stl:video</a> 播放视频</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>video</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定视频的字段<span class="token punctuation">"</span></span>
    <span class="token attr-name">playUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>视频地址<span class="token punctuation">"</span></span>
    <span class="token attr-name">imageUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>封面图片地址<span class="token punctuation">"</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>宽度<span class="token punctuation">"</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>高度<span class="token punctuation">"</span></span>
    <span class="token attr-name">isAutoPlay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否自动播放<span class="token punctuation">"</span></span>
    <span class="token attr-name">isControls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否显示播放控件<span class="token punctuation">"</span></span>
    <span class="token attr-name">isLoop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否循环播放<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:video</code> 标签在模板中显示视频播放器</p>
<p><code>stl:video</code> 标签为HTML5标签，最终将解析为HTML5标签 <code>&lt;video&gt;</code>，需要兼容IE8等低版本浏览器时请谨慎使用此标签。</p>
<p><code>stl:video</code> 标签的视频地址取自内容的视频字段（VideoUrl），可以通过type属性指定其他字段。同时也可以直接使用playUrl属性指定具体的视频播放地址。</p>
<p>标签 <code>&lt;stl:video&gt;</code> 在内容模版中默认显示此内容的视频，在内容列表中将显示对应内容的视频。</p>
<p>stl:video 标签能够作为 <code>&lt;stl:contents&gt;</code> 等标签的子标签，当作为<code> &lt;stl:contents&gt;</code> 的子标签使用时将显示内容的视频。</p>
<p><code>&lt;stl:video&gt;</code> 标签对应的实体为<code>{stl:video}</code>。</p>
<h3 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>所有属于 HTML 标签<code>&lt;video&gt;</code>的成员均适用于<code>&lt;stl:video&gt;</code>标签。</p>
</div>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">指定视频的字段</td>
</tr>
<tr>
<td style="text-align:left">playUrl</td>
<td style="text-align:left">视频地址</td>
</tr>
<tr>
<td style="text-align:left">imageUrl</td>
<td style="text-align:left">封面图片地址</td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">宽度</td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">高度</td>
</tr>
<tr>
<td style="text-align:left">isAutoPlay</td>
<td style="text-align:left">是否自动播放</td>
</tr>
<tr>
<td style="text-align:left">isControls</td>
<td style="text-align:left">是否显示播放控件</td>
</tr>
<tr>
<td style="text-align:left">isLoop</td>
<td style="text-align:left">是否循环播放</td>
</tr>
</tbody>
</table>
<p><strong>type - 指定视频的字段</strong></p>
<p>VideoUrl 指定视频的字段，可以是自定义字段</p>
<p><strong>playUrl - 视频地址</strong></p>
<p>指定具体的视频地址，可以用&quot;@&quot;开头表示当前网站根目录，用&quot;~&quot;开头表示系统根目录。</p>
<p><strong>imageUrl - 封面图片地址</strong></p>
<p>视频播放前显示的封面图片地址，可以用&quot;@&quot;开头表示当前网站根目录，用&quot;~&quot;开头表示系统根目录。</p>
<p><strong>width - 宽度</strong></p>
<p>播放器的宽度</p>
<p><strong>height - 高度</strong></p>
<p>播放器的高度</p>
<p><strong>isAutoPlay - 是否自动播放</strong></p>
<p>是否自动播放</p>
<p><strong>isControls - 是否显示播放控件</strong></p>
<p>是否显示播放控件</p>
<p><strong>isLoop - 是否循环播放</strong></p>
<p>是否循环播放</p>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>显示当前内容的视频文件</strong></p>
<p>下面的例子显示当前内容的视频文件。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>video</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>640<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>264<span class="token punctuation">"</span></span> <span class="token attr-name">isAutoPlay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>显示指定地址的视频文件</strong></p>
<p>下面的例子显示文件名为“oceans-clip.mp4”的视频文件，同时设置不自动播放。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>video</span> <span class="token attr-name">playUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/images/oceans-clip.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">imageUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/images/oceans-clip.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>640<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>264<span class="token punctuation">"</span></span> <span class="token attr-name">isAutoPlay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>