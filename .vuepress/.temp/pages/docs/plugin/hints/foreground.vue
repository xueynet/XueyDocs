<template><h1 id="前台显示内容点击量"><a class="header-anchor" href="#前台显示内容点击量">#</a> 前台显示内容点击量</h1>
<p>内容点击量存储在内容表中，具体字段解释如下：</p>
<ul>
<li><code>点击量(Hits)</code>：内容总点击量</li>
<li><code>日点击(HitsByDay)</code>：内容今天的点击量</li>
<li><code>周点击(HitsByWeek)</code>：内容本周的总点击量</li>
<li><code>月点击(HitsByMonth)</code>：内容本月的总点击量</li>
<li><code>最后点击时间(LastHitsDate)</code>：内容最后一次被访问的时间</li>
</ul>
<p>在内容模板中添加如下标签：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>点击量：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Hits<span class="token punctuation">"</span></span> <span class="token attr-name">isDynamic</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>isDynamic</code> 属性用于让前台页面动态刷新点击量。</p>
<p>重新生成内容页，看到点击量显示在页面中，刷新页面将可以看到数字变化。</p>
</template>