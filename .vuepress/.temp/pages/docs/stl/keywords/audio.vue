<template><h1 id="stl-audio-播放音频"><a class="header-anchor" href="#stl-audio-播放音频">#</a> <a href="stl:audio">stl:audio</a> 播放音频</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>audio</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>指定存储音频地址的内容字段，默认为VideoUrl<span class="token punctuation">"</span></span>
    <span class="token attr-name">playUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>音频地址，优先级高于type属性<span class="token punctuation">"</span></span>
    <span class="token attr-name">isAutoPlay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否自动播放<span class="token punctuation">"</span></span>
    <span class="token attr-name">isPreload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否预载入<span class="token punctuation">"</span></span>
    <span class="token attr-name">isLoop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否循环播放<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:audio</code> 标签在模板中显示并播放音频文件。</p>
<p><code>stl:audio</code> 标签为HTML5标签，最终将解析为HTML5标签<code>&lt;audio&gt;</code>，需要兼容 IE8 等低版本浏览器时请谨慎使用此标签。</p>
<p><code>stl:audio</code> 标签的音频地址取自内容的音频字段（videoUrl），可以通过type属性指定其他字段。同时也可以直接使用playUrl属性指定具体的音频播放地址。</p>
<p>标签 <code>&lt;stl:audio&gt;</code> 在内容模版中默认显示此内容的音频。</p>
<p>stl:audio 标签能够作为 <code>&lt;stl:contents&gt;</code> 等标签的子标签，当作为 <code>&lt;stl:contents&gt;</code> 的子标签使用时将显示内容的音频。</p>
<h3 id="解析"><a class="header-anchor" href="#解析">#</a> 解析</h3>
<p>如果使用 <code>&lt;stl:audio&gt;</code> 元素，系统将解析元素为 HTML <code>&lt;audio&gt;</code> 元素。</p>
<p>如果使用 <code>{stl:audio}</code> 实体，系统将解析实体为音频的URL地址字符串。</p>
<h3 id="属性"><a class="header-anchor" href="#属性">#</a> 属性</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>所有属于 HTML 标签<code>&lt;audio&gt;</code>的属性均适用于<code>&lt;stl:audio&gt;</code>标签。</p>
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
<td style="text-align:left">指定存储音频的字段</td>
</tr>
<tr>
<td style="text-align:left">playUrl</td>
<td style="text-align:left">指定音频地址</td>
</tr>
<tr>
<td style="text-align:left">isAutoPlay</td>
<td style="text-align:left">是否自动播放</td>
</tr>
<tr>
<td style="text-align:left">isPreload</td>
<td style="text-align:left">是否预载入</td>
</tr>
<tr>
<td style="text-align:left">isLoop</td>
<td style="text-align:left">是否循环播放</td>
</tr>
</tbody>
</table>
<p><strong>type - 指定存储音频的字段</strong></p>
<p>指定音频的字段，可以是自定义字段，默认值为<code>VideoUrl</code>。</p>
<p><strong>playUrl - 指定音频地址</strong></p>
<p>指定具体的音频地址，可以用&quot;@&quot;开头表示当前网站根目录，用&quot;~&quot;开头表示系统根目录。</p>
<p><strong>isAutoPlay - 是否自动播放</strong></p>
<p>设置是否自动播放音频。</p>
<p><strong>isPreload - 是否预载入</strong></p>
<p>设置是否预载入音频。</p>
<p><strong>isLoop - 是否循环播放</strong></p>
<p>设置是否循环播放音频。</p>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>显示当前内容的音频文件</strong></p>
<p>下面的例子显示当前内容的音频文件。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>audio</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/images/ChasingCorporate.mp3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>object</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>460<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>application/x-shockwave-flash<span class="token punctuation">"</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://help.xuey.net/sitefiles/assets/flashes/mediaelement/flashmediaelement.swf<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>movie<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://help.xuey.net/sitefiles/assets/flashes/mediaelement/flashmediaelement.swf<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flashvars<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>controls=true<span class="token entity named-entity" title="&amp;">&amp;amp;</span>file=/images/ChasingCorporate.mp3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>object</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'audio'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mediaelementplayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>显示指定地址的音频文件</strong></p>
<p>下面的例子显示文件名为“ChasingCorporate.mp3”的音频文件。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>audio</span> <span class="token attr-name">playUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@/images/ChasingCorporate.mp3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解析后的 HTML 代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/images/ChasingCorporate.mp3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>object</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>460<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>application/x-shockwave-flash<span class="token punctuation">"</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://help.xuey.net/sitefiles/assets/flashes/mediaelement/flashmediaelement.swf<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>movie<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://help.xuey.net/sitefiles/assets/flashes/mediaelement/flashmediaelement.swf<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flashvars<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>controls=true<span class="token entity named-entity" title="&amp;">&amp;amp;</span>file=/images/ChasingCorporate.mp3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>object</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'audio'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mediaelementplayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>