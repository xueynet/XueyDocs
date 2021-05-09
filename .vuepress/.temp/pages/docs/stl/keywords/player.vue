<template><h1 id="stl-player-播放视频"><a class="header-anchor" href="#stl-player-播放视频">#</a> <a href="stl:player">stl:player</a> 播放视频</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>player</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定存储媒体的字段<span class="token punctuation">"</span></span>
    <span class="token attr-name">playUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>视频地址<span class="token punctuation">"</span></span>
    <span class="token attr-name">imageUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>封面图片地址<span class="token punctuation">"</span></span>
    <span class="token attr-name">playBy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定播放器<span class="token punctuation">"</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>宽度<span class="token punctuation">"</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>高度<span class="token punctuation">"</span></span>
    <span class="token attr-name">isAutoPlay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否自动播放<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>player</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:player</code> 标签在模板中播放视频</p>
<p>标签 <code>&lt;stl:player&gt;</code> 在栏目模版中默认显示此栏目的视频/音频，在内容模版中默认显示此内容的视频/音频。</p>
<p><code>stl:player</code> 标签能够作为 <code>&lt;stl:channels&gt;</code> 等标签的子标签，当作为 <code>&lt;stl:channels&gt;</code> 的子标签使用时将显示栏目的视频/音频。 <code>stl:player</code> 标签能够作为 <code>&lt;stl:contents&gt;</code> 等标签的子标签，当作为 <code>&lt;stl:contents&gt;</code> 的子标签使用时将显示内容的视频/音频。</p>
<p><code>&lt;stl:player&gt;</code> 标签对应的实体为<code>{stl:player}</code>。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p><code>&lt;stl:player&gt;</code> 标签需要使用Flash，如果希望兼容HTML5 标准，请使用<code>&lt;stl:video&gt;</code> 标签。</p>
</div>
<h3 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h3>
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
<td style="text-align:left">指定存储媒体的字段</td>
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
<td style="text-align:left">playBy</td>
<td style="text-align:left">指定播放器</td>
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
</tbody>
</table>
<p><strong>type - 指定存储媒体的字段</strong></p>
<p>VideoUrl 指定存储音视频的字段，可以是自定义字段</p>
<p><strong>playUrl - 视频地址</strong></p>
<p>多媒体文件地址，可以用&quot;@&quot;开头表示当前网站根目录，用&quot;~&quot;开头表示系统根目录。</p>
<p><strong>imageUrl - 封面图片地址</strong></p>
<p>开始播放前显示的图片地址，可以用&quot;@&quot;开头表示当前网站根目录，用&quot;~&quot;开头表示系统根目录。</p>
<p><strong>playBy - 指定播放器</strong>
指定播放器</p>
<ul>
<li>&quot;Html5&quot; 系统默认采用的播放器</li>
<li>&quot;FlowPlayer&quot; FlowPlayer 播放器</li>
<li>&quot;JWPlayer&quot; JWPlayer 播放器</li>
</ul>
<p><strong>width - 宽度</strong></p>
<p>播放器的宽度</p>
<p><strong>height - 高度</strong></p>
<p>播放器的高度</p>
<p><strong>isAutoPlay - 是否自动播放</strong></p>
<p>是否自动播放</p>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>播放指定的视频文件</strong></p>
<p>下面的例子播放文件名称为&quot;oceans-clip.mp4&quot;的视频文件。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>player</span> <span class="token attr-name">playUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/images/oceans-clip.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">imageUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/images/oceans-clip.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>640<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>264<span class="token punctuation">"</span></span> <span class="token attr-name">isAutoPlay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>player</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>显示当前内容的视频文件</strong></p>
<p>下面的例子显示当前内容的视频文件。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>player</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>640<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>264<span class="token punctuation">"</span></span> <span class="token attr-name">isAutoPlay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>player</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>