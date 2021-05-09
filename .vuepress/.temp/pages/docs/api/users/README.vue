<template><h1 id="字段说明"><a class="header-anchor" href="#字段说明">#</a> 字段说明</h1>
<h3 id="user-用户对象"><a class="header-anchor" href="#user-用户对象">#</a> User 用户对象</h3>
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
<td style="text-align:left">LastResetPasswordDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">最后一次重设密码时间</td>
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
<td style="text-align:left">CountOfWriting</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">投稿次数</td>
</tr>
<tr>
<td style="text-align:left">IsChecked</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否已审核用户</td>
</tr>
<tr>
<td style="text-align:left">IsLockedOut</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否被锁定</td>
</tr>
<tr>
<td style="text-align:left">DisplayName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">用户姓名</td>
</tr>
<tr>
<td style="text-align:left">Email</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">邮箱</td>
</tr>
<tr>
<td style="text-align:left">Mobile</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">20</td>
<td style="text-align:left">手机号</td>
</tr>
<tr>
<td style="text-align:left">AvatarUrl</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">头像图片路径</td>
</tr>
<tr>
<td style="text-align:left">Organization</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">组织</td>
</tr>
<tr>
<td style="text-align:left">Department</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">部门</td>
</tr>
<tr>
<td style="text-align:left">Position</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">职位</td>
</tr>
<tr>
<td style="text-align:left">Gender</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">性别</td>
</tr>
<tr>
<td style="text-align:left">Birthday</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">出生日期</td>
</tr>
<tr>
<td style="text-align:left">Education</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">毕业院校</td>
</tr>
<tr>
<td style="text-align:left">Graduation</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">学历</td>
</tr>
<tr>
<td style="text-align:left">Address</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">地址</td>
</tr>
<tr>
<td style="text-align:left">WeiXin</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">微信</td>
</tr>
<tr>
<td style="text-align:left">Qq</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">QQ</td>
</tr>
<tr>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">微博</td>
</tr>
<tr>
<td style="text-align:left">Interests</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">兴趣</td>
</tr>
<tr>
<td style="text-align:left">Signature</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">签名</td>
</tr>
</tbody>
</table>
<h3 id="userlog-用户日志对象"><a class="header-anchor" href="#userlog-用户日志对象">#</a> UserLog 用户日志对象</h3>
<p>用户操作日志</p>
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
<td style="text-align:left">用户账号</td>
</tr>
<tr>
<td style="text-align:left">IpAddress</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">50</td>
<td style="text-align:left">Ip 地址</td>
</tr>
<tr>
<td style="text-align:left">AddDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">添加时间</td>
</tr>
<tr>
<td style="text-align:left">Action</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">动作</td>
</tr>
<tr>
<td style="text-align:left">Summary</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">描述</td>
</tr>
</tbody>
</table>
</template>