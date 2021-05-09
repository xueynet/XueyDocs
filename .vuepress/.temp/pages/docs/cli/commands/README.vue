<template><h1 id="update-系统升级命令"><a class="header-anchor" href="#update-系统升级命令">#</a> update 系统升级命令</h1>
<p>系统升级命令，用于将 XYCMS 系统升级至最新版本。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>系统升级命令仅对备份命令备份的数据库文件进行升级，不会直接对数据库进行操作。</p>
</div>
<h3 id="用法"><a class="header-anchor" href="#用法">#</a> 用法</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>xycms update
    --nightly
    -h, --help
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>系统升级命令必须包含指定需要升级至最新版本的备份数据文件夹 <code>--directory</code> 参数。</p>
<p>系统升级命令完成后，命令将在当前文件夹下生成 update 文件夹，存储升级后的数据库结构以及数据。</p>
<h3 id="选项"><a class="header-anchor" href="#选项">#</a> 选项</h3>
<table>
<thead>
<tr>
<th style="text-align:left">选项</th>
<th style="text-align:left">简写</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">--nightly</td>
<td style="text-align:left"></td>
<td style="text-align:left">升级到最新隔夜版本</td>
</tr>
<tr>
<td style="text-align:left">--help</td>
<td style="text-align:left">-h</td>
<td style="text-align:left">命令说明</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>如果使用 --content-split 拆分内容表参数，升级命令将为每一个站点创建对应的内容表，并把备份数据导入至对应的内容表中；默认升级命令将保持内容表不变。</p>
</div>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<h4 id="基本使用"><a class="header-anchor" href="#基本使用">#</a> 基本使用</h4>
<p>使用升级命令前需要先使用备份命令将老版本的数据库备份至文件夹中：</p>
<p><code>xycms backup -d 'old_version_backup'</code></p>
<p>备份完成后便可以使用升级命令了，升级命令将把备份文件中存储的数据结构改为最新版本的数据结构，升级完成后将生成新的文件夹，用于恢复命令使用。</p>
<p>将命令行切换到运行备份命令的文件夹中，运行升级命令：</p>
<p><code>xycms update -d 'old_version_backup'</code></p>
<p>升级命令执行完毕后，系统根目录将出现一个名为update的文件夹，此文件夹中存储了升级之后的数据文件。</p>
<p>接下来可以新建一个空数据库，修改Web.config为对应的数据库连接字符串并运行数据库恢复命令，将数据回复到指定数据库：</p>
<p><code>xycms restore -d update</code></p>
</template>