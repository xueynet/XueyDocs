<template><h1 id="字段说明"><a class="header-anchor" href="#字段说明">#</a> 字段说明</h1>
<h3 id="content-内容对象"><a class="header-anchor" href="#content-内容对象">#</a> Content 内容对象</h3>
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
<td style="text-align:left">ChannelId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">栏目 Id</td>
</tr>
<tr>
<td style="text-align:left">SiteId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">站点 Id</td>
</tr>
<tr>
<td style="text-align:left">AddUserName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">添加人</td>
</tr>
<tr>
<td style="text-align:left">LastEditUserName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">修改人</td>
</tr>
<tr>
<td style="text-align:left">WritingUserName</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">投稿人</td>
</tr>
<tr>
<td style="text-align:left">LastEditDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">修改时间</td>
</tr>
<tr>
<td style="text-align:left">Taxis</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">排序</td>
</tr>
<tr>
<td style="text-align:left">GroupNameCollection</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">内容组</td>
</tr>
<tr>
<td style="text-align:left">Tags</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">标签</td>
</tr>
<tr>
<td style="text-align:left">SourceId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">来源内容 Id，对应内容表的 Id 字段</td>
</tr>
<tr>
<td style="text-align:left">ReferenceId</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">引用内容 Id，对应内容表的 Id 字段</td>
</tr>
<tr>
<td style="text-align:left">IsChecked</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否终审通过通过</td>
</tr>
<tr>
<td style="text-align:left">CheckedLevel</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">未终审通过情况下，处于第几级审核状态</td>
</tr>
<tr>
<td style="text-align:left">Hits</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">总点击量</td>
</tr>
<tr>
<td style="text-align:left">HitsByDay</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">日点击</td>
</tr>
<tr>
<td style="text-align:left">HitsByWeek</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">周点击</td>
</tr>
<tr>
<td style="text-align:left">HitsByMonth</td>
<td style="text-align:left">Integer</td>
<td style="text-align:left"></td>
<td style="text-align:left">月点击</td>
</tr>
<tr>
<td style="text-align:left">LastHitsDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">最后点击时间</td>
</tr>
<tr>
<td style="text-align:left">SettingsXml</td>
<td style="text-align:left">Text</td>
<td style="text-align:left"></td>
<td style="text-align:left">内容附加字段，用于存储内容在表字段之外的信息</td>
</tr>
<tr>
<td style="text-align:left">Title</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">内容标题</td>
</tr>
<tr>
<td style="text-align:left">IsTop</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否置顶内容</td>
</tr>
<tr>
<td style="text-align:left">IsRecommend</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否推荐内容</td>
</tr>
<tr>
<td style="text-align:left">IsHot</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否热点内容</td>
</tr>
<tr>
<td style="text-align:left">IsColor</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">18</td>
<td style="text-align:left">是否醒目内容</td>
</tr>
<tr>
<td style="text-align:left">LinkUrl</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">外部链接，设置后链接将指向此地址</td>
</tr>
<tr>
<td style="text-align:left">AddDate</td>
<td style="text-align:left">DateTime</td>
<td style="text-align:left"></td>
<td style="text-align:left">添加时间</td>
</tr>
</tbody>
</table>
<p>下表中的字段为 XYCMS 默认创建的内容表中包含的额外字段：</p>
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
<td style="text-align:left">SubTitle</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">内容副标题</td>
</tr>
<tr>
<td style="text-align:left">ImageUrl</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">内容图片，存储图片地址</td>
</tr>
<tr>
<td style="text-align:left">VideoUrl</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">内容视频，存储视频地址</td>
</tr>
<tr>
<td style="text-align:left">FileUrl</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">200</td>
<td style="text-align:left">内容附件，存储附件地址</td>
</tr>
<tr>
<td style="text-align:left">Content</td>
<td style="text-align:left">Text</td>
<td style="text-align:left"></td>
<td style="text-align:left">内容正文，以编辑器提交信息</td>
</tr>
<tr>
<td style="text-align:left">Summary</td>
<td style="text-align:left">Text</td>
<td style="text-align:left"></td>
<td style="text-align:left">内容摘要</td>
</tr>
<tr>
<td style="text-align:left">Author</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">作者</td>
</tr>
<tr>
<td style="text-align:left">Source</td>
<td style="text-align:left">VarChar</td>
<td style="text-align:left">255</td>
<td style="text-align:left">来源</td>
</tr>
</tbody>
</table>
</template>