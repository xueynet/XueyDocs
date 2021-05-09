<template><h1 id="logout-退出登录命令"><a class="header-anchor" href="#logout-退出登录命令">#</a> logout 退出登录命令</h1>
<p>数据库备份命令，用于备份数据库结构以及数据至指定文件夹中。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>数据库备份命令支持MySQL、SQLSERVER、PostgreSQL 以及 Sqlite数据库。</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>数据库恢复命令不仅可以用于恢复 XYCMS 系统数据，还可用于任何需要恢复数据文件至数据库的场合。</p>
</div>
<h3 id="用法"><a class="header-anchor" href="#用法">#</a> 用法</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>xycms <span class="token builtin class-name">logout</span>
    -h, --help
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可以设置可选参数控制备份选项。</p>
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
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<h4 id="基本使用"><a class="header-anchor" href="#基本使用">#</a> 基本使用</h4>
<p>备份命令默认读取当前目录下的 Web.config 文件，从中获取数据库连接字符串，进而将数据库备份到 backup 文件夹中。</p>
<p>备份命令目前还不支持增量备份，只支持完全备份，即备份命令将把数据库中所存的所有数据备份至文件夹中，如果数据库中数据量太大，请不要频繁使用备份命令，以免影响数据库性能。</p>
<p>例如我们希望备份指定的 XYCMS 系统，找到系统所在文件夹路径，将命令行切换到此文件夹，并运行备份命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>PS C:<span class="token punctuation">\</span>Windows<span class="token punctuation">\</span>system3<span class="token operator"><span class="token file-descriptor important">2</span>></span> <span class="token builtin class-name">cd</span> E:<span class="token punctuation">\</span>wwwroot<span class="token punctuation">\</span>
PS E:<span class="token punctuation">\</span>wwwroot<span class="token operator">></span> xycms backup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可以看命令开始执行数据库备份操作，界面将显示备份进度：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>PS E:<span class="token punctuation">\</span>wwwroot<span class="token operator">></span> xycms backup
欢迎使用 SiteServer Cli 命令行工具

数据库类型: SqlServer
连接字符串: <span class="token assign-left variable">Server</span><span class="token operator">=</span><span class="token punctuation">(</span>local<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token assign-left variable">Uid</span><span class="token operator">=</span>sa<span class="token punctuation">;</span><span class="token assign-left variable">Pwd</span><span class="token operator">=</span><span class="token number">123456</span><span class="token punctuation">;</span><span class="token assign-left variable">Database</span><span class="token operator">=</span>cms<span class="token punctuation">;</span>
备份文件夹: E:<span class="token punctuation">\</span>wwwroot<span class="token punctuation">\</span>backup<span class="token punctuation">\</span><span class="token number">2019</span>-01-20
-----------------------------------------------------------------------------
<span class="token operator">|</span>                备份表名称                <span class="token operator">|</span>                 总条数                 <span class="token operator">|</span>
-----------------------------------------------------------------------------
<span class="token operator">|</span>           _model_Content            <span class="token operator">|</span>                 <span class="token number">839</span>                 <span class="token operator">|</span>
<span class="token operator">|</span>       _model_Content_Archive        <span class="token operator">|</span>                  <span class="token number">0</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>       xycms_AccessToken        <span class="token operator">|</span>                 <span class="token number">28</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>            xycms_Ad            <span class="token operator">|</span>                  <span class="token number">1</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>          xycms_AdArea          <span class="token operator">|</span>                  <span class="token number">1</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>        xycms_AdMaterial        <span class="token operator">|</span>                  <span class="token number">1</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>      xycms_Administrator       <span class="token operator">|</span>                  <span class="token number">9</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>  xycms_AdministratorsInRoles   <span class="token operator">|</span>                 <span class="token number">20</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>           xycms_Adv            <span class="token operator">|</span>                  <span class="token number">0</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>          xycms_Advert          <span class="token operator">|</span>                  <span class="token number">1</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>      xycms_Advertisement       <span class="token operator">|</span>                  <span class="token number">1</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>     xycms_AdvImageClassify     <span class="token operator">|</span>                  <span class="token number">0</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>     xycms_AdvImageContent      <span class="token operator">|</span>                  <span class="token number">0</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>           xycms_Area           <span class="token operator">|</span>                  <span class="token number">4</span>                  <span class="token operator">|</span>

<span class="token punctuation">..</span>.

<span class="token operator">|</span>            ss_home_group            <span class="token operator">|</span>                  <span class="token number">0</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>         ss_home_group_user          <span class="token operator">|</span>                  <span class="token number">0</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>            ss_home_menu             <span class="token operator">|</span>                  <span class="token number">1</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>            ss_home_oauth            <span class="token operator">|</span>                 <span class="token number">16</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>              ss_input               <span class="token operator">|</span>                  <span class="token number">4</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>          ss_input_content           <span class="token operator">|</span>                  <span class="token number">6</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>           ss_input_field            <span class="token operator">|</span>                 <span class="token number">19</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>         ss_input_field_item         <span class="token operator">|</span>                 <span class="token number">89</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>               ss_jobs               <span class="token operator">|</span>                  <span class="token number">0</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>             ss_magazine             <span class="token operator">|</span>                 <span class="token number">17</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>         ss_magazine_article         <span class="token operator">|</span>                 <span class="token number">427</span>                 <span class="token operator">|</span>
<span class="token operator">|</span>              ss_oauth               <span class="token operator">|</span>                 <span class="token number">412</span>                 <span class="token operator">|</span>
<span class="token operator">|</span>           ss_oauth_login            <span class="token operator">|</span>                  <span class="token number">0</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>             ss_payment              <span class="token operator">|</span>                 <span class="token number">25</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>          ss_payment_record          <span class="token operator">|</span>                 <span class="token number">107</span>                 <span class="token operator">|</span>
<span class="token operator">|</span>              ss_Photo               <span class="token operator">|</span>                 <span class="token number">10</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>               ss_poll               <span class="token operator">|</span>                 <span class="token number">33</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>            ss_poll_field            <span class="token operator">|</span>                  <span class="token number">9</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>         ss_poll_field_item          <span class="token operator">|</span>                  <span class="token number">0</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>            ss_poll_item             <span class="token operator">|</span>                 <span class="token number">20</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>             ss_poll_log             <span class="token operator">|</span>                 <span class="token number">13</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>             ss_pollitem             <span class="token operator">|</span>                 <span class="token number">80</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>             ss_polllog              <span class="token operator">|</span>                 <span class="token number">24</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>              ss_reward              <span class="token operator">|</span>                 <span class="token number">53</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>          ss_reward_record           <span class="token operator">|</span>                 <span class="token number">202</span>                 <span class="token operator">|</span>
<span class="token operator">|</span>         ss_shopping_address         <span class="token operator">|</span>                 <span class="token number">50</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>          ss_shopping_area           <span class="token operator">|</span>                  <span class="token number">2</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>          ss_shopping_cart           <span class="token operator">|</span>                 <span class="token number">636</span>                 <span class="token operator">|</span>
<span class="token operator">|</span>        ss_shopping_delivery         <span class="token operator">|</span>                  <span class="token number">5</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>          ss_shopping_order          <span class="token operator">|</span>                 <span class="token number">224</span>                 <span class="token operator">|</span>
<span class="token operator">|</span>             ss_special              <span class="token operator">|</span>                  <span class="token number">0</span>                  <span class="token operator">|</span>
<span class="token operator">|</span>          webgamex_comment           <span class="token operator">|</span>                  <span class="token number">0</span>                  <span class="token operator">|</span>
-----------------------------------------------------------------------------
恭喜，成功备份数据库至文件夹：E:<span class="token punctuation">\</span>wwwroot<span class="token punctuation">\</span>backup<span class="token punctuation">\</span><span class="token number">2019</span>-01-20！
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><p>备份命令将逐一遍历数据库中的表，将表中的内容完整导出至文件中，备份结束后，打开文件夹路径，将看到根目录下多了一个 backup 文件夹，可以看到里面的文件夹结构大致如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>backup
└── <span class="token number">2019</span>-01-20
    ├── model_Content
    <span class="token operator">|</span>   ├── _metadata.json
    <span class="token operator">|</span>   ├── <span class="token number">1</span>.json
    <span class="token operator">|</span>   └── <span class="token number">2</span>.json
    ├── xycms_Administrator
    ├── xycms_AdministratorsInRoles
    <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>备份命令默认将备份存储在 backup 文件夹下的一个以当天日期命名的文件夹中，以方便多次备份后找到对应的备份文件。</p>
<p>数据库中的每个表均有一个以表名命名的文件夹，其中**_metadata.json**存储表的结构信息，1.json、2.json等文件存储表数据信息。</p>
<h3 id="指定web-config文件"><a class="header-anchor" href="#指定web-config文件">#</a> 指定Web.config文件</h3>
<p>如果需要备份的数据库信息存储在其他文件中，可以通过<code>-c</code>或<code>--config-file=</code>加文件名的方式指定 config 文件。</p>
<p>下图显示的文件夹中有两个 config 文件，backup.config 以及 restore.config，分别存储了希望备份数据的数据库连接字符串以及希望恢复数据的数据库连接字符串：</p>
<p><img src="/assets/img/cli/commands/01.png" alt="01"></p>
<p>将命令行切换到此文件夹，运行：</p>
<p><code>xycms backup -c backup.config</code></p>
<p>命令结束后打开文件夹，可以看到多出了备份文件夹 backup：</p>
<p><img src="/assets/img/cli/commands/03.png" alt="03"></p>
<h3 id="指定备份存储文件夹"><a class="header-anchor" href="#指定备份存储文件夹">#</a> 指定备份存储文件夹</h3>
<p>如果需要将备份文件存储在其他文件夹中，可以通过<code>-d</code>或<code>--directory=</code>加文件夹名称的方式指定备份存储文件夹。</p>
<p><code>xycms backup -c backup.config -d mydir</code></p>
<p>命令结束后打开文件夹，可以看到多出了备份文件夹 mydir：</p>
<p><img src="/assets/img/cli/commands/02.png" alt="02"></p>
</template>