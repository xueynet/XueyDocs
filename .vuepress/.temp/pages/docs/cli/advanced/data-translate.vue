<template><h1 id="数据迁移"><a class="header-anchor" href="#数据迁移">#</a> 数据迁移</h1>
<p>SiteServer CLI 命令行可以作为通用的工具使用，实现数据库数据迁移功能。</p>
<p>使用 SiteServer CLI 作为数据迁移的好处是能够跨数据库类型，首先通过数据库备份命令 xycms backup 将数据保存至文件夹中，然后通过数据库恢复命令 <code>xycms resore</code> 将数据恢复至指定数据库中。</p>
<p><code>xycms backup</code> 及 <code>xycms resore</code> 命令经过专门优化，能够实现快速的批量数据导出和导入，同时命令能够通过 <code>--includes</code> 及 <code>--excludes</code> 参数指定需要迁移的数据表。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p><code>xycms resore</code> 命令需要包含 <code>--data-only</code> 参数，否则命令将检测数据库结构并将数据库结构设置为当前版本的XYCMS数据结构。</p>
</div>
</template>