<template><h1 id="stl实体"><a class="header-anchor" href="#stl实体">#</a> STL实体</h1>
<p>STL实体包裹在开始和结束大括号 {} 中，属性用空格隔开，无法包含其他标签作为子标签；例如</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>stl<span class="token operator">:</span>a channelIndex<span class="token operator">=</span><span class="token string">"首页"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>STL实体通常解析为 JSON 对象或者纯文字。</p>
<p>一般来说，大部分功能都可以通过STL元素来实现，但是有些情况下STL元素不适合：</p>
<ul>
<li>需要在属性中设置数据</li>
<li>需要在 JavaScript 代码中设置数据</li>
</ul>
<p>由于STL元素最终将解析为 HTML 标签，将 HTML 标签放到 HTML 属性中或者 JavaScript 代码中都将引起混乱，所以一般这两种情况下需要使用STL实体。</p>
<p>STL实体的属性可以使用英文双引号、英文单引号或者无标识，例如以下三种写法均为正确写法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>stl<span class="token operator">:</span>content type<span class="token operator">=</span><span class="token string">"title"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>stl<span class="token operator">:</span>content type<span class="token operator">=</span><span class="token string">'title'</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>stl<span class="token operator">:</span>content type<span class="token operator">=</span>title<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="stl实体简写"><a class="header-anchor" href="#stl实体简写">#</a> STL实体简写</h3>
<p>为了方便，STL实体可以使用简写方式，简写方式不需要包含前缀 stl:，且无法设置属性。</p>
<h5 id="stl-xyz"><a class="header-anchor" href="#stl-xyz">#</a> {stl.xyz}</h5>
<p>{stl:value type='xyz'} 的简写。</p>
<p>{stl.} 代表 {stl:value} 元素的简写，{stl:value type=siteUrl} 等价于{stl.siteUrl}。</p>
<h5 id="channel-xyz"><a class="header-anchor" href="#channel-xyz">#</a> {channel.xyz}</h5>
<p>{stl:channel type='xyz'} 的简写。</p>
<p>{channel.} 代表 {stl:channel} 元素的简写，{stl:channel type=title} 等价于{channel.title}。</p>
<h5 id="content-xyz"><a class="header-anchor" href="#content-xyz">#</a> {content.xyz}</h5>
<p>{stl:content type='xyz'} 的简写。</p>
<p>{content.} 代表 {stl:content} 元素的简写，{stl:content type=title} 等价于{content.title}。</p>
<h5 id="sql-xyz"><a class="header-anchor" href="#sql-xyz">#</a> {sql.xyz}</h5>
<p>{stl:sqlContent type='xyz'} 的简写。</p>
<p>{sql.} 代表 {stl:sqlContent} 元素的简写，{stl:sqlContent type=xyz} 等价于{sql.xyz}。</p>
<h3 id="在属性中使用实体"><a class="header-anchor" href="#在属性中使用实体">#</a> 在属性中使用实体</h3>
<p>通常在 HTML 属性或者STL属性中获取数据通常使用实体标签，例如：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{stl:content type=<span class="token punctuation">'</span>summary<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>或者</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{stl:content type=<span class="token punctuation">'</span>title<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="在-javascript-代码中使用实体"><a class="header-anchor" href="#在-javascript-代码中使用实体">#</a> 在 JavaScript 代码中使用实体</h3>
<p>JS 代码处理的对象主要是不带格式的纯数据，所以使用STL实体返回纯文本或者JSON对象非常关键，例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span><span class="token operator">></span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span>stl<span class="token operator">:</span>contents<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>解析后的代码为：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span><span class="token operator">></span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">10935</span><span class="token punctuation">,</span>
    channelId<span class="token operator">:</span> <span class="token number">1746</span><span class="token punctuation">,</span>
    siteId<span class="token operator">:</span> <span class="token number">1739</span><span class="token punctuation">,</span>
    addUserName<span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
    lastEditUserName<span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
    writingUserName<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    lastEditDate<span class="token operator">:</span> <span class="token string">"2018-06-13 12:27:00"</span><span class="token punctuation">,</span>
    taxis<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    groupNameCollection<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    tags<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    sourceId<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    referenceId<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    isChecked<span class="token operator">:</span> <span class="token string">"True"</span><span class="token punctuation">,</span>
    checkedLevel<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    hits<span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
    hitsByDay<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    hitsByWeek<span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
    hitsByMonth<span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
    lastHitsDate<span class="token operator">:</span> <span class="token string">"2018-06-14 00:00:00"</span><span class="token punctuation">,</span>
    settingsXml<span class="token operator">:</span>
      <span class="token string">"titleformatstring=False_False_False_&amp;translatecontenttype=Copy"</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">"第九届国际发明展览会集团荣获 “发明创业&amp;#8226;项目奖”"</span><span class="token punctuation">,</span>
    isTop<span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
    isRecommend<span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
    isHot<span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
    isColor<span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
    linkUrl<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    addDate<span class="token operator">:</span> <span class="token string">"2015-09-30 13:52:00"</span><span class="token punctuation">,</span>
    subTitle<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    imageUrl<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    videoUrl<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    fileUrl<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span>
      <span class="token string">"&lt;div>近日，第九届国际发明展览会在昆山国际会展中心圆满落幕。作为我国发明创新领域对外开放的重要窗口、创新思想交流和发明成果产业化的重要平台，国际发明展览会自1988年创办以来，在国内外发明界、产业界产生了广泛影响。在上千个参展的创新发明项目中，集团荣获三项“发明创业•项目奖”。&lt;/div>&lt;div>电梯研发部&lt;br/>一种用于高速电梯钢丝绳补偿及涨紧装置&lt;br/>&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp; 本发明研究轿厢、对重各使用一部分缓冲器时的布置情况，并确保电梯运行过程中补偿绳不对轿厢及对重产生偏载力。高速电梯钢丝绳补偿及涨紧装置的研发对整个曳引式电梯市场补偿绳系统设计具有重大意义。按照国家质检要求，2m/s以上的曳引式电梯均应安装此产品，故钢丝绳补偿及涨紧装置具有较大的市场，能够产生一定的生产效益和社会效益。&lt;/div>&lt;div>扶梯研发部&lt;br/>一种具有安全隔离控制柜的自动扶梯&lt;br/>&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp; 本发明目的在于解决自动扶梯的客户电源布置不合理的问题，提供一种采用客户电源与控制柜一体式布置，内部隔离技术的安全隔离型主控制柜的自动扶梯。本项目在2009年初设计完成，同年首次使用在“辽宁省沈阳市鞍山西柳中国商贸城”项目上，完成了本系统的初次试验并取得成功。同年申请发明专利。现在依然成功的应用在我司所有项目共计2055台自动扶梯上，并取得“零”触电事故的安全效果。该发明有效地提高了企业在行业内的竞争优势，也符合国家对安全扶梯的倡导，具有积极推广的意义。&lt;/div>&lt;div>车库研发部&lt;br/>多台共柱安装的双层倾斜式停车装置（停车宝）&lt;br/>&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp; 本项目的研究主要降低了对建筑空间层高和柱网间距的要求，实现了在较低的空间内双层停车，实现了多车位连续、多台共柱安装，大大提升了停车空间利用率。俯仰式简易升降布置灵活，规模大到上百车位，小到几个车位，外观漂亮、结构简单。&lt;br/>实用性：&lt;br/>1、此产品能广泛应用在层高仅为2800mm的空间，比原3600mm的层高要求降低了800mm，应用范围更广；&lt;br/>2、此产品多台共柱，减少了并排安装时立柱之间预留空间的需求，相同空间可增加更多停车位，提高停车空间利用率。&lt;/div>&lt;p>&lt;br/>&lt;/p>"</span><span class="token punctuation">,</span>
    summary<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    author<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    source<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    titleformatstring<span class="token operator">:</span> <span class="token string">"False_False_False_"</span><span class="token punctuation">,</span>
    translatecontenttype<span class="token operator">:</span> <span class="token string">"Copy"</span><span class="token punctuation">,</span>
    navigationUrl<span class="token operator">:</span> <span class="token string">"/test19/contents/1746/10935.html"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h3 id="stl标签转换为stl实体"><a class="header-anchor" href="#stl标签转换为stl实体">#</a> STL标签转换为STL实体</h3>
<p>大部分STL元素均有对应的STL实体，将元素的尖括号替换为大括号，去掉闭合标签即为对应实体，实体中属性采用双引号、单引号或者不带引号均可。如内容值元素：</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span> <span class="token attr-name">wordNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>对应实体为</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code>{stl:content type='Title' wordNum='20'}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>