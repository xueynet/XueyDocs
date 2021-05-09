<template><h1 id="data-restore-数据库恢复命令"><a class="header-anchor" href="#data-restore-数据库恢复命令">#</a> data restore 数据库恢复命令</h1>
<p>数据库恢复命令，用于从备份文件中恢复数据结构及数据至指定数据库。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>数据库恢复命令不仅可以用于恢复 XYCMS 系统数据，还可用于任何需要恢复数据文件至数据库的场合。</p>
</div>
<h3 id="用法"><a class="header-anchor" href="#用法">#</a> 用法</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>xycms data restore
    -d, --directory<span class="token operator">=</span>VALUE
    --includes<span class="token operator">=</span>VALUE
    --excludes<span class="token operator">=</span>VALUE
    --data-only
    -h, --help
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>数据库恢复命令必须包含从指定的文件夹中恢复数据 <code>--directory</code> 参数。</p>
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
<td style="text-align:left">--directory</td>
<td style="text-align:left">-d</td>
<td style="text-align:left">从指定的文件夹中恢复数据</td>
</tr>
<tr>
<td style="text-align:left">--includes</td>
<td style="text-align:left"></td>
<td style="text-align:left">指定需要还原的表，多个表用英文逗号隔开，默认还原所有表</td>
</tr>
<tr>
<td style="text-align:left">--excludes</td>
<td style="text-align:left"></td>
<td style="text-align:left">指定需要排除的表，多个表用英文逗号隔开</td>
</tr>
<tr>
<td style="text-align:left">--data-only</td>
<td style="text-align:left"></td>
<td style="text-align:left">仅恢复数据</td>
</tr>
<tr>
<td style="text-align:left">--help</td>
<td style="text-align:left">-h</td>
<td style="text-align:left">命令说明</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>恢复命令默认将检测数据库结构并将数据库结构设置为当前版本的 XYCMS 数据结构，如果此命令用于非 XYCMS 场合，请设置 <strong>--data-only</strong> 参数，命令将不再检测并同步 XYCMS 数据库结构。</p>
</div>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<h4 id="基本使用"><a class="header-anchor" href="#基本使用">#</a> 基本使用</h4>
<p>恢复命令将读取当前目录下的 xycms.json 文件，从中获取数据库连接字符串（ConnectionString），进而将指定的备份文件夹内的备份数据恢复到数据库中。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>恢复命令目前还不支持增量恢复，只能将备份的数据一次性恢复到指定数据库中，故建议恢复命令使用新建的空数据库。</p>
</div>
<p>在使用数据库恢复命令前，需要确保 xycms.json 文件中的连接字符串（ConnectionString）为需要恢复的新建数据库。</p>
<p>数据库恢复命令需要通过 <code>-d</code> 或 <code>--directory</code> 加文件夹名称的方式指定需要恢复的备份存储文件夹，如：</p>
<p><code>xycms restore -d mydir</code></p>
<p>此命令将从 mydir 文件夹中获取备份数据并恢复到数据库中，恢复命令将逐一遍历备份文件夹中的文件，将文件内容完整导入至恢复数据库中，结束后，打开数据库，将看到数据库中已包含了需要恢复的数据库表及数据，数据恢复成功。</p>
</template>