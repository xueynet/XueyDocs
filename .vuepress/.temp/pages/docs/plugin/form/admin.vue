<template><h1 id="表单管理界面"><a class="header-anchor" href="#表单管理界面">#</a> 表单管理界面</h1>
<p>每个表单均有独立的管理界面，进入 表单 -&gt; 表单管理 菜单，点击表单名称进入表单的管理界面：</p>
<p><img src="/assets/img/plugin/form/05.png" alt="5"></p>
<p>在表单管理界面中，左侧可以切换数据列表、字段管理与选项设置，下面我们分别进行说明：</p>
<h3 id="数据列表"><a class="header-anchor" href="#数据列表">#</a> 数据列表</h3>
<p>数据列表是表单数据的管理界面，在此可以对表单数据进行新增、修改、删除以及导出等操作。</p>
<p>需要注意的是 显示列 功能，点击显示列按钮：</p>
<p><img src="/assets/img/plugin/form/07.png" alt="7"></p>
<p>选中对应的字段，在数据列表中将出现对应字段的值，其中字段 <code>Id</code>、<code>Guid</code>、<code>CreatedDate</code>以及<code>LastModifiedDate</code>为系统字段，分别对应数据的数据库Id、唯一标识、添加时间以及更新时间。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>如果需要前台页面显示表单数据，后台设置的显示列将影响默认表单列表模板（list1）的显示字段。</p>
</div>
<h3 id="字段管理"><a class="header-anchor" href="#字段管理">#</a> 字段管理</h3>
<p>点击左侧字段管理链接，进入表单字段管理界面：</p>
<p><img src="/assets/img/plugin/form/08.png" alt="8"></p>
<p>在此可以编辑表单的字段以及验证规则，表单插件支持字段的导出以及导入，可以通过导出导入快速创建相同字段的表单。</p>
<p>字段管理的详细说明请参考 表单字段 文档。</p>
<h3 id="选项设置"><a class="header-anchor" href="#选项设置">#</a> 选项设置</h3>
<p>点击左侧选项设置链接，进入表单选项设置界面：</p>
<p><img src="/assets/img/plugin/form/09.png" alt="9"></p>
<ul>
<li><strong>表单状态</strong> 如果选择禁用表单，前台页面的表单将提示表单已禁用，禁止用户提交表单；</li>
<li><strong>表单回复</strong> 设置表单是否启用回复功能；</li>
<li><strong>提交时间限制</strong> 设置表单提交时间后，表单只能在指定的时间段内提交数据；</li>
<li><strong>验证码</strong> 设置前台页面提交表单是否开启验证码，开启验证码后能屏蔽机器自动提交数据；</li>
<li><strong>向管理员发送短信通知</strong> 启用短信发送后将自动为每一条新增提交发送短信给指定手机；</li>
<li><strong>向管理员发送邮件通知</strong> 启用邮件发送后将自动为每一条新增提交发送邮件给指定邮箱；</li>
<li><strong>向用户发送短信通知</strong> 启用短信发送后将自动向信息提交人发送提交成功短信；</li>
</ul>
</template>