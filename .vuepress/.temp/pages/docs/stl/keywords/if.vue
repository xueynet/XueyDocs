<template><h1 id="stl-if-条件判断"><a class="header-anchor" href="#stl-if-条件判断">#</a> <a href="stl:if">stl:if</a> 条件判断</h1>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>if</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>测试类型<span class="token punctuation">"</span></span>
    <span class="token attr-name">op</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>测试操作<span class="token punctuation">"</span></span>
    <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>测试值<span class="token punctuation">"</span></span>
    <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>所处上下文<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>if</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="说明"><a class="header-anchor" href="#说明">#</a> 说明</h3>
<p>通过 <code>stl:if</code> 标签在模板中根据条件判断显示内容</p>
<p><code>stl:if</code> 通常作为显示的判断条件，如果条件满足则显示，条件不满足则不显示。</p>
<p><code>stl:if</code> 标签内可以嵌入任意代码，当条件满足时将显示嵌入的代码。如果需要根据测试是否成功显示不同的结果，需要使用子标签 <code>&lt;stl:yes&gt;</code> 和 <code>&lt;stl:no&gt;</code> ，测试条件成功时将显示 <code>&lt;stl:yes&gt;</code> 中的内容，测试条件失败时将显示 <code>&lt;stl:no&gt;</code> 中的内容。</p>
<p>type 属性指定测试类型，如测试栏目名称、模板名称、当前栏目是否属于指定栏目级别等。</p>
<p>如果需要判断自定义内容属性&quot;XYZ&quot;，也可以将type 设置为&quot; XYZ&quot;，系统将根据上下文判断栏目或内容的字段&quot;XYZ&quot;的值。</p>
<p>op 属性为测试操作，如是否值等于、不等于、大于、小于、属于等。</p>
<p>value 属性指定测试值，如op=&quot;Equals&quot; value=&quot;123&quot;（判断指定条件的值是否等于123）。</p>
<p>如果type为&quot;AddDate&quot;或&quot;LastEditDate&quot;，value可以采用时间段格式&quot;数字+日期符号&quot;，如&quot;1y&quot;、&quot;3m&quot;或&quot;10d&quot;，分别代表一年、三个月及十天内添加或编辑的内容。</p>
<p><code>&lt;stl:if&gt;</code> 标签对应的实体为<code>{stl:if}</code>。</p>
<h3 id="子标签"><a class="header-anchor" href="#子标签">#</a> 子标签</h3>
<p>下表显示此标签所有的子标签。</p>
<table>
<thead>
<tr>
<th style="text-align:left">子标签</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">stl:yes</td>
<td style="text-align:left">测试成功显示模板，可以省略</td>
</tr>
<tr>
<td style="text-align:left">stl:no</td>
<td style="text-align:left">测试失败显示模板，可以省略</td>
</tr>
</tbody>
</table>
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
<td style="text-align:left">测试类型</td>
</tr>
<tr>
<td style="text-align:left">op</td>
<td style="text-align:left">测试操作</td>
</tr>
<tr>
<td style="text-align:left">value</td>
<td style="text-align:left">测试值</td>
</tr>
<tr>
<td style="text-align:left">context</td>
<td style="text-align:left">所处上下文</td>
</tr>
</tbody>
</table>
<p><strong>type - 测试类型</strong></p>
<p>设置用于 if 测试的类型。</p>
<ul>
<li>&quot;IsUserLoggin&quot; 用户是否已登录</li>
<li>&quot;IsAdministratorLoggin&quot; 管理员是否已登录</li>
<li>&quot;IsUserOrAdministratorLoggin&quot; 用户或管理员是否已登录</li>
<li>&quot;UserGroup&quot; 用户组</li>
<li>&quot;ChannelName&quot; 栏目名称</li>
<li>&quot;ChannelIndex&quot; 栏目索引</li>
<li>&quot;TemplateName&quot; 模板名称</li>
<li>&quot;TemplateType&quot; 模板类型，可能的 value 值：
<ul>
<li>&quot;IndexPageTemplate&quot; 首页模板</li>
<li>&quot;ChannelTemplate&quot; 栏目模板</li>
<li>&quot;ContentTemplate&quot; 内容模板</li>
<li>&quot;FileTemplate&quot; 单页模板</li>
</ul>
</li>
<li>&quot;TopLevel&quot; 栏目级别</li>
<li>&quot;UpChannel&quot; 上级栏目</li>
<li>&quot;UpChannelOrSelf&quot; 当前栏目或上级栏目</li>
<li>&quot;GroupChannel&quot; 栏目组名称</li>
<li>&quot;GroupContent&quot; 内容组名称</li>
<li>&quot;IsTop&quot; 内容属性为置顶</li>
<li>&quot;IsRecommend&quot; 内容属性为推荐</li>
<li>&quot;IsHot&quot; 内容属性为热点</li>
<li>&quot;IsColor&quot; 内容属性为醒目</li>
<li>&quot;CountOfContents&quot; 内容数</li>
<li>&quot;CountOfImageContents&quot; 图片内容数</li>
<li>&quot;CountOfChannels&quot; 子栏目数</li>
<li>&quot;AddDate&quot; 添加时间</li>
<li>&quot;LastEditDate&quot; 最后编辑时间（仅用于判断内容）</li>
<li>&quot;ItemIndex&quot; 当前项序号</li>
<li>&quot;OddItem&quot; 是否为奇数项</li>
<li>&quot;自定义字符串&quot; 栏目或内容的字段名称</li>
</ul>
<p><strong>op - 测试操作</strong></p>
<p>设置用于 if 测试的比较操作。</p>
<ul>
<li>&quot;Empty&quot; 值为空</li>
<li>&quot;NotEmpty&quot; 值不为空</li>
<li>&quot;Equals&quot; 值等于</li>
<li>&quot;NotEquals&quot; 值不等于</li>
<li>&quot;GreatThan&quot; 值大于</li>
<li>&quot;LessThan&quot; 值小于</li>
<li>&quot;In&quot; 值属于</li>
<li>&quot;NotIn&quot; 值不属于</li>
</ul>
<p><strong>value - 测试值</strong></p>
<p>设置用于 if 测试的比较值。</p>
<p><strong>context - 所处上下文</strong></p>
<ul>
<li>&quot;Content&quot; 内容</li>
<li>&quot;Channel&quot; 栏目</li>
<li>&quot;SqlContent&quot; 获取数据库数据</li>
</ul>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<p><strong>判断值是否为空</strong></p>
<p>下面的例子判断内容副标题是否为空，如果不为空将显示带有副标题的行。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>if</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SubTitle<span class="token punctuation">"</span></span> <span class="token attr-name">op</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>NotEmpty<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>副标题：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>content</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SubTitle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>content</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>if</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>判断当前栏目名称</strong></p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>if</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ChannelName<span class="token punctuation">"</span></span> <span class="token attr-name">op</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>In<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>栏目1,栏目2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>yes</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>yes</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>no</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>no</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>if</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>根据模板类型显示不同内容</strong></p>
<p>下面的例子判断当前模板是不是内容模板。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>if</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>TemplateType<span class="token punctuation">"</span></span> <span class="token attr-name">op</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Equals<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ContentTemplate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>yes</span><span class="token punctuation">></span></span>
      这是内容页面
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>yes</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>no</span><span class="token punctuation">></span></span>
      这不是内容页面
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>no</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>if</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>根据模板名称显示不同内容</strong></p>
<p>下面的例子根据当前模板的模板名称显示不同的内容</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>if</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>TemplateName<span class="token punctuation">"</span></span> <span class="token attr-name">op</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Equals<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>系统首页模板<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>yes</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>A</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首 页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>A</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>yes</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>no</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>我不是首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>no</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>if</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>突出显示10天内更新的内容</strong></p>
<p>下面的例子显示整个站点中最新更新的 20 篇内容，并突出显示 10 天内更新的内容。</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>contents</span> <span class="token attr-name">topLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">totalNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">order</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LastEditDate<span class="token punctuation">"</span></span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>All<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>if</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LastEditDate<span class="token punctuation">"</span></span> <span class="token attr-name">op</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LessThan<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10d<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>yes</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">color</span><span class="token punctuation">:</span>#F00<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>yes</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>no</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>no</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>if</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>contents</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>判断用户是否登录</strong></p>
<p>下面的例子根据用户是否登录显示不同的内容</p>
<div class="language-markup ext-html line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>if</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IsUserLoggin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>yes</span><span class="token punctuation">></span></span>
        欢迎"{user.displayName}"
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{stl.HomeUrl}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>用户中心<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{stl.LogoutUrl}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>退出<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>yes</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>no</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{stl.LoginUrl}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>登陆<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">stl:</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{stl.RegisterUrl}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>注册<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>no</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">stl:</span>if</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></template>