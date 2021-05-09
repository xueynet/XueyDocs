<template><h1 id="表单字段"><a class="header-anchor" href="#表单字段">#</a> 表单字段</h1>
<p>表单可以创建多种类型的提交字段，下面我们分别加以介绍。</p>
<h3 id="文本输入框-text"><a class="header-anchor" href="#文本输入框-text">#</a> 文本输入框（Text）</h3>
<p>文本输入字段是表单中最常见的类型，对应 HTML 文本单行输入： <code>&lt;input type=&quot;text&quot;&gt;</code> 。</p>
<p><img src="/assets/img/plugin/form/styles01.png" alt="styles01.png"></p>
<h3 id="数字输入框-number"><a class="header-anchor" href="#数字输入框-number">#</a> 数字输入框（Number）</h3>
<p>数字输入框与文本输入框类似，对应 HTML 数字单行输入： <code>&lt;input type=&quot;number&quot;&gt;</code> 。</p>
<p><img src="/assets/img/plugin/form/styles01.png" alt="styles01.png"></p>
<p>数字输入框与文本输入框的区别为数字输入框只允许用户输入数字。</p>
<h3 id="多行文本输入框-textarea"><a class="header-anchor" href="#多行文本输入框-textarea">#</a> 多行文本输入框（TextArea）</h3>
<p>多行文本输入框允许用户输入多行内容，对应 HTML 文本多行输入： <code>&lt;textarea&gt;</code> 。</p>
<p><img src="/assets/img/plugin/form/styles02.png" alt="styles02.png"></p>
<p>多行文本输入框可以进一步设置输入框显示高度。</p>
<h3 id="多选项-checkbox"><a class="header-anchor" href="#多选项-checkbox">#</a> 多选项（CheckBox）</h3>
<p>多选项允许用户从指定的选项中选择一个或多个，对应 HTML 多选项输入： <code>&lt;input type=&quot;checkbox&quot;&gt;</code> 。</p>
<p><img src="/assets/img/plugin/form/styles03.png" alt="styles03.png"></p>
<p>多选择在表单管理中可以设置一个或多个默认选中项。</p>
<h3 id="单选项-radio"><a class="header-anchor" href="#单选项-radio">#</a> 单选项（Radio）</h3>
<p>单选项允许用户从指定的选项中选择一个，对应 HTML 单选项输入： <code>&lt;input type=&quot;radio&quot;&gt;</code> 。</p>
<p><img src="/assets/img/plugin/form/styles04.png" alt="styles04.png"></p>
<p>单选项在表单管理中可以设置一个默认选中项。</p>
<h3 id="单选下拉框-selectone"><a class="header-anchor" href="#单选下拉框-selectone">#</a> 单选下拉框（SelectOne）</h3>
<p>单选下拉框允许用户从指定的选项中选择一个，对应 HTML 单选下拉框输入： <code>&lt;select&gt;</code> 。</p>
<p><img src="/assets/img/plugin/form/styles05.png" alt="styles05.png"></p>
<p>单选下拉框在表单管理中可以设置一个默认选中项。</p>
<h3 id="多选下拉框-selectmultiple"><a class="header-anchor" href="#多选下拉框-selectmultiple">#</a> 多选下拉框（SelectMultiple）</h3>
<p>多选下拉框允许用户从指定的选项中选择一个或多个。</p>
<p><img src="/assets/img/plugin/form/styles06.png" alt="styles06.png"></p>
<p>多选下拉框在表单管理中可以设置一个或多个默认选中项。</p>
<h3 id="日期选择框-date"><a class="header-anchor" href="#日期选择框-date">#</a> 日期选择框（Date）</h3>
<p>日期选择框允许用户输入或选择日期。</p>
<p><img src="/assets/img/plugin/form/styles07.png" alt="styles07.png"></p>
<h3 id="日期及时间选择框-datetime"><a class="header-anchor" href="#日期及时间选择框-datetime">#</a> 日期及时间选择框（DateTime）</h3>
<p>日期及时间选择框允许用户输入或选择日期及时间。</p>
<p><img src="/assets/img/plugin/form/styles08.png" alt="styles08.png"></p>
<h3 id="隐藏项-hidden"><a class="header-anchor" href="#隐藏项-hidden">#</a> 隐藏项（Hidden）</h3>
<p>隐藏项字段在表单提交界面不会显示，隐藏项的值将默认提交至表单中。</p>
<p>通常添加隐藏项字段的同时，会设置隐藏项默认值，提交表单时默认值将作为隐藏项提交至后台数据库。</p>
</template>