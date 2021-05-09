<template><h1 id="siteserver-administrator"><a class="header-anchor" href="#siteserver-administrator">#</a> siteserver_Administrator</h1>
<p>管理员表，存储管理员信息。</p>
<table>
<thead>
<tr>
<th style="text-align:left">字段</th>
<th style="text-align:left">数据类型</th>
<th style="text-align:left">数据大小</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Id</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">自增长主键</td>
</tr>
<tr>
<td style="text-align:left">UserName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">管理员账号</td>
</tr>
<tr>
<td style="text-align:left">Password</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">管理员密码</td>
</tr>
<tr>
<td style="text-align:left">PasswordFormat</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">密码加密格式，有Clear、Encrypt及Hash三种，分别代表不加密、可逆加密以及不可逆加密。</td>
</tr>
<tr>
<td style="text-align:left">PasswordSalt</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">128</td>
<td style="text-align:left">密钥，当 PasswordFormat 为Encrypt时使用的加密密钥</td>
</tr>
<tr>
<td style="text-align:left">CreationDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">创建时间</td>
</tr>
<tr>
<td style="text-align:left">LastActivityDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">最后活动时间</td>
</tr>
<tr>
<td style="text-align:left">CountOfLogin</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">登录次数</td>
</tr>
<tr>
<td style="text-align:left">CountOfFailedLogin</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">连续登录失败次数</td>
</tr>
<tr>
<td style="text-align:left">CreatorUserName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">管理员创建者</td>
</tr>
<tr>
<td style="text-align:left">IsLockedOut</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否被锁定</td>
</tr>
<tr>
<td style="text-align:left">SiteIdCollection</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">拥有管理权限的站点 Id 列表</td>
</tr>
<tr>
<td style="text-align:left">SiteId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">最后一次管理的站点 Id</td>
</tr>
<tr>
<td style="text-align:left">DepartmentId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">所属部门Id，对应 siteserver_Department 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">AreaId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">所在区域Id，对应 siteserver_Area 表的 <code>Id</code> 字段</td>
</tr>
<tr>
<td style="text-align:left">DisplayName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">管理员显示名称</td>
</tr>
<tr>
<td style="text-align:left">Email</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">电子邮箱</td>
</tr>
<tr>
<td style="text-align:left">Mobile</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">20</td>
<td style="text-align:left">手机号码</td>
</tr>
</tbody>
</table>
</template>