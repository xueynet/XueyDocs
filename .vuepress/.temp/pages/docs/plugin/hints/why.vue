<template><h1 id="为什么内容点击量不起作用"><a class="header-anchor" href="#为什么内容点击量不起作用">#</a> 为什么内容点击量不起作用</h1>
<p>内容点击量由统计代码和显示代码两部分组成，如果内容点击量不增长，请按步骤确认：</p>
<h3 id="_1、查看内容点击量设置"><a class="header-anchor" href="#_1、查看内容点击量设置">#</a> 1、查看内容点击量设置</h3>
<p>首先，需要确认是否已正常安装内容点击量插件并设置为启动状态：</p>
<p><img src="/assets/img/plugin/hints/01.png" alt="01"></p>
<h3 id="_2、查看是否生成页面"><a class="header-anchor" href="#_2、查看是否生成页面">#</a> 2、查看是否生成页面</h3>
<p>内容点击量启用后需要重新生成内容页，请打开任意内容页，右键页面点击查看源代码，可以在源代码最底部看到类似代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/api/hits/135/310/285<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果没有看到类似代码，说明内容页未生成，或者由于浏览器缓存原因，新的内容页面未正常显示。</p>
<p>请到后台重新生成页面并刷新浏览器，确保以上代码已经在页面源码中。</p>
<h3 id="_3、查看内容模板是否添加相关标签"><a class="header-anchor" href="#_3、查看内容模板是否添加相关标签">#</a> 3、查看内容模板是否添加相关标签</h3>
<p>如果希望在前台显示内容点击量数据，需要添加显示标签：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>点击量：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Hits<span class="token punctuation">"</span></span> <span class="token attr-name">isDynamic</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>特别需要强调的是需要加上isDynamic属性，这样才能每次从数据库中获取最新数据。</p>
</template>