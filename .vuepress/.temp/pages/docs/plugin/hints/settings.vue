<template><h1 id="插件设置"><a class="header-anchor" href="#插件设置">#</a> 插件设置</h1>
<p>插件安装完毕后将默认开启内容点击量统计功能：</p>
<p><img src="/assets/img/plugin/hints/01.png" alt="01"></p>
<p>如果希望关闭内容点击量，进入内容点击量菜单，将&quot;是否启用点击量统计&quot;设置为&quot;禁用点击量统计&quot;。</p>
<p>点击量统计默认为 <code>仅统计总点击量</code>，可以设置为 <code>统计总点击量以及本日、本周、本月点击量</code>，插件将统计更加详细的点击数据。</p>
<p>需要注意的是，每次修改设置之后需要将整站静态页面重新生成，同时清除浏览器缓存才能查看到效果。</p>
<h3 id="查看效果"><a class="header-anchor" href="#查看效果">#</a> 查看效果</h3>
<p>重新生成所有内容页并清除浏览器缓存后，打开任意内容页，右键页面点击查看源代码，可以在源代码最底部看到类似代码：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/api/hits/135/310/285<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>说明系统已经开始统计内容点击量了，每一次刷新页面都将增加内容点击数。</p>
</template>