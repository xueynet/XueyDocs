<template><h1 id="获取栏目列表-api"><a class="header-anchor" href="#获取栏目列表-api">#</a> 获取栏目列表 API</h1>
<p>获取栏目列表使用 GET 发起请求，请求地址为 <code>/api/v1/channels/{siteId}</code>。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/channels/{siteId} HTTP/1.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="请求-uri"><a class="header-anchor" href="#请求-uri">#</a> 请求 URI</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">位置</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">siteId</td>
<td style="text-align:left">path</td>
<td style="text-align:left">整数</td>
<td style="text-align:left">是</td>
<td style="text-align:left">站点Id</td>
</tr>
<tr>
<td style="text-align:left">apiKey</td>
<td style="text-align:left">query</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">API 密钥，请参考身份认证</td>
</tr>
</tbody>
</table>
<h3 id="返回-body"><a class="header-anchor" href="#返回-body">#</a> 返回 Body</h3>
<table>
<thead>
<tr>
<th style="text-align:left">名称</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">200 OK</td>
<td style="text-align:left">Channels</td>
<td style="text-align:left">内容</td>
</tr>
<tr>
<td style="text-align:left">401 Unauthorized</td>
<td style="text-align:left">Error</td>
<td style="text-align:left">认证错误</td>
</tr>
<tr>
<td style="text-align:left">404 NotFound</td>
<td style="text-align:left">Error</td>
<td style="text-align:left">资源不存在错误</td>
</tr>
<tr>
<td style="text-align:left">400 BadRequest</td>
<td style="text-align:left">Error</td>
<td style="text-align:left">参数错误</td>
</tr>
</tbody>
</table>
<h3 id="请求示例"><a class="header-anchor" href="#请求示例">#</a> 请求示例</h3>
<p>以下请求将返回站点Id为1476的栏目列表。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>GET /api/v1/channels/<span class="token number">1476</span> HTTP/<span class="token number">1.1</span>
Content-Type<span class="token operator">:</span> application/json
X-SS-API-KEY<span class="token operator">:</span> 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

<span class="token punctuation">{</span>
  <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1477</span><span class="token punctuation">,</span>
      <span class="token property">"channelName"</span><span class="token operator">:</span> <span class="token string">"关于我们"</span><span class="token punctuation">,</span>
      <span class="token property">"siteId"</span><span class="token operator">:</span> <span class="token number">1476</span><span class="token punctuation">,</span>
      <span class="token property">"contentModelPluginId"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"contentRelatedPluginIds"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"parentId"</span><span class="token operator">:</span> <span class="token number">1476</span><span class="token punctuation">,</span>
      <span class="token property">"parentsPath"</span><span class="token operator">:</span> <span class="token string">"1476"</span><span class="token punctuation">,</span>
      <span class="token property">"parentsCount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"childrenCount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"lastNode"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"isLastNode"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"indexName"</span><span class="token operator">:</span> <span class="token string">"关于我们"</span><span class="token punctuation">,</span>
      <span class="token property">"groupNameCollection"</span><span class="token operator">:</span> <span class="token string">"not,nav"</span><span class="token punctuation">,</span>
      <span class="token property">"taxis"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"addDate"</span><span class="token operator">:</span> <span class="token string">"2020-05-28 18:04:39"</span><span class="token punctuation">,</span>
      <span class="token property">"imageUrl"</span><span class="token operator">:</span> <span class="token string">"/test24/upload/images/2017/9/t_281545114.png"</span><span class="token punctuation">,</span>
      <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"filePath"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"channelFilePathRule"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"contentFilePathRule"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"linkUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"linkType"</span><span class="token operator">:</span> <span class="token string">"LinkToFirstChannel"</span><span class="token punctuation">,</span>
      <span class="token property">"channelTemplateId"</span><span class="token operator">:</span> <span class="token number">362</span><span class="token punctuation">,</span>
      <span class="token property">"contentTemplateId"</span><span class="token operator">:</span> <span class="token number">360</span><span class="token punctuation">,</span>
      <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1478</span><span class="token punctuation">,</span>
          <span class="token property">"channelName"</span><span class="token operator">:</span> <span class="token string">"公司简介"</span><span class="token punctuation">,</span>
          <span class="token property">"siteId"</span><span class="token operator">:</span> <span class="token number">1476</span><span class="token punctuation">,</span>
          <span class="token property">"contentModelPluginId"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"contentRelatedPluginIds"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"parentId"</span><span class="token operator">:</span> <span class="token number">1477</span><span class="token punctuation">,</span>
          <span class="token property">"parentsPath"</span><span class="token operator">:</span> <span class="token string">"1476,1477"</span><span class="token punctuation">,</span>
          <span class="token property">"parentsCount"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">"childrenCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"lastNode"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token property">"isLastNode"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">"indexName"</span><span class="token operator">:</span> <span class="token string">"公司简介"</span><span class="token punctuation">,</span>
          <span class="token property">"groupNameCollection"</span><span class="token operator">:</span> <span class="token string">"not"</span><span class="token punctuation">,</span>
          <span class="token property">"taxis"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">"addDate"</span><span class="token operator">:</span> <span class="token string">"2020-05-28 18:04:40"</span><span class="token punctuation">,</span>
          <span class="token property">"imageUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"filePath"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"channelFilePathRule"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"contentFilePathRule"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"linkUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"linkType"</span><span class="token operator">:</span> <span class="token string">"None"</span><span class="token punctuation">,</span>
          <span class="token property">"channelTemplateId"</span><span class="token operator">:</span> <span class="token number">362</span><span class="token punctuation">,</span>
          <span class="token property">"contentTemplateId"</span><span class="token operator">:</span> <span class="token number">360</span><span class="token punctuation">,</span>
          <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
          <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">"navigationUrl"</span><span class="token operator">:</span> <span class="token string">"/test24/channels/1478.html"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"navigationUrl"</span><span class="token operator">:</span> <span class="token string">"/test24/channels/1478.html"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1487</span><span class="token punctuation">,</span>
      <span class="token property">"channelName"</span><span class="token operator">:</span> <span class="token string">"通知公告"</span><span class="token punctuation">,</span>
      <span class="token property">"siteId"</span><span class="token operator">:</span> <span class="token number">1476</span><span class="token punctuation">,</span>
      <span class="token property">"contentModelPluginId"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"contentRelatedPluginIds"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"parentId"</span><span class="token operator">:</span> <span class="token number">1476</span><span class="token punctuation">,</span>
      <span class="token property">"parentsPath"</span><span class="token operator">:</span> <span class="token string">"1476"</span><span class="token punctuation">,</span>
      <span class="token property">"parentsCount"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"childrenCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"lastNode"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"isLastNode"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"indexName"</span><span class="token operator">:</span> <span class="token string">"通知公告"</span><span class="token punctuation">,</span>
      <span class="token property">"groupNameCollection"</span><span class="token operator">:</span> <span class="token string">"nav"</span><span class="token punctuation">,</span>
      <span class="token property">"taxis"</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
      <span class="token property">"addDate"</span><span class="token operator">:</span> <span class="token string">"2020-05-28 18:05:08"</span><span class="token punctuation">,</span>
      <span class="token property">"imageUrl"</span><span class="token operator">:</span> <span class="token string">"/test24/upload/images/2017/9/t_2816630859.png"</span><span class="token punctuation">,</span>
      <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"filePath"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"channelFilePathRule"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"contentFilePathRule"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"linkUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"linkType"</span><span class="token operator">:</span> <span class="token string">"None"</span><span class="token punctuation">,</span>
      <span class="token property">"channelTemplateId"</span><span class="token operator">:</span> <span class="token number">359</span><span class="token punctuation">,</span>
      <span class="token property">"contentTemplateId"</span><span class="token operator">:</span> <span class="token number">360</span><span class="token punctuation">,</span>
      <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"children"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"navigationUrl"</span><span class="token operator">:</span> <span class="token string">"/test24/channels/1487.html"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br></div></div></template>