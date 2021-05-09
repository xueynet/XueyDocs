<template><h1 id="plugin-show-插件展示命令"><a class="header-anchor" href="#plugin-show-插件展示命令">#</a> plugin show 插件展示命令</h1>
<p>数据库恢复命令，用于从备份文件中恢复数据结构及数据至指定数据库。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>数据库恢复命令不仅可以用于恢复 XYCMS 系统数据，还可用于任何需要恢复数据文件至数据库的场合。</p>
</div>
<h3 id="用法"><a class="header-anchor" href="#用法">#</a> 用法</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>xycms plugin show
    -h, --help
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>数据库恢复命令必须包含从指定的文件夹中恢复数据 <code>--directory</code> 参数。</p>
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
<td style="text-align:left">--help</td>
<td style="text-align:left">-h</td>
<td style="text-align:left">命令说明</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>恢复命令默认将检测数据库结构并将数据库结构设置为当前版本的XYCMS数据结构，如果此命令用于非XYCMS场合，请设置 <strong>--data-only</strong> 参数，命令将不再检测并同步XYCMS数据库结构。</p>
</div>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<h4 id="基本使用"><a class="header-anchor" href="#基本使用">#</a> 基本使用</h4>
<p>恢复命令默认读取当前目录下的 Web.config 文件，从中获取数据库连接字符串（ConnectionString），进而将指定的备份文件夹内的备份数据恢复到数据库中。</p>
<p>需要注意的是，SiteServer 恢复命令目前还不支持增量恢复，只能将备份的数据一次性恢复到指定数据库中，故建议恢复命令使用新建的空数据库。</p>
<p>在使用数据库恢复命令前，需要确保 Web.config中的连接字符串（ConnectionString）为需要恢复的新建数据库。</p>
<p>数据库恢复命令需要通过<code>-d</code>或<code>--directory=</code>加文件夹名称的方式指定需要恢复的备份存储文件夹，如：</p>
<p><code>xycms restore -d mydir</code></p>
<p>此命令将从mydir文件夹中获取备份数据并恢复到数据库中，恢复命令将逐一遍历备份文件夹中的文件，将文件内容完整导入至恢复数据库中，结束后，打开数据库，将看到数据库中已包含了需要恢复的数据库表及数据，数据恢复成功。</p>
<h3 id="指定web-config文件"><a class="header-anchor" href="#指定web-config文件">#</a> 指定Web.config文件</h3>
<p>如果需要恢复的数据库信息存储在其他文件中，可以通过<code>-c</code>或<code>--config-file=</code>加文件名的方式指定config文件。</p>
<p>下图显示的文件夹中有两个config文件，backup.config以及restore.config，分别存储了希望备份数据的数据库连接字符串以及希望恢复数据的数据库连接字符串：</p>
<p><img src="/assets/img/cli/commands/04.png" alt="04"></p>
<p>打开restore.config，可以看到里面存在连接 XYCMS 所用到的数据库类型 DatabaseType 以及连接字符串 ConnectionString。</p>
<p>将命令行切换到此文件夹，运行：</p>
<p><code>xycms restore -c backup.config -d 'backup/2019-01-20'</code></p>
<p>命令结束后打开数据库，可以看到数据恢复成功。</p>
</template>