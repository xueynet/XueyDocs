<template><h1 id="获取站点值-api"><a class="header-anchor" href="#获取站点值-api">#</a> 获取站点值 API</h1>
<p>获取站点值，系统将根据参数计算出对应的站点值</p>
<p>使用<code>GET</code>发起请求，请求地址为<code>/api/v1/stl/site</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/stl/site HTTP/1.1
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
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">站点Id</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">siteDir</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">站点文件夹</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">apiKey</td>
<td style="text-align:left">字符串</td>
<td style="text-align:left">否</td>
<td style="text-align:left">API 密钥，请参考身份认证</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><code>/api/v1/stl/site</code>的其他参数与<code>&lt;stl:site&gt;</code>标签一致。</p>
<h3 id="返回"><a class="header-anchor" href="#返回">#</a> 返回</h3>
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
<td style="text-align:left">Site</td>
<td style="text-align:left">站点</td>
</tr>
<tr>
<td style="text-align:left">401 Unauthorized</td>
<td style="text-align:left">Error</td>
<td style="text-align:left">认证错误</td>
</tr>
<tr>
<td style="text-align:left">400 BadRequest</td>
<td style="text-align:left">Error</td>
<td style="text-align:left">参数错误</td>
</tr>
</tbody>
</table>
<h3 id="示例"><a class="header-anchor" href="#示例">#</a> 示例</h3>
<h4 id="请求示例"><a class="header-anchor" href="#请求示例">#</a> 请求示例</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /api/v1/stl/site?siteId=1 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="返回示例"><a class="header-anchor" href="#返回示例">#</a> 返回示例</h4>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">"siteDir"</span><span class="token operator">:</span> <span class="token string">"test2"</span><span class="token punctuation">,</span>
    <span class="token property">"siteName"</span><span class="token operator">:</span> <span class="token string">"我的站点"</span><span class="token punctuation">,</span>
    <span class="token property">"tableName"</span><span class="token operator">:</span> <span class="token string">"model_Content"</span><span class="token punctuation">,</span>
    <span class="token property">"isRoot"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"parentId"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"taxis"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">"attributes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"charset"</span><span class="token operator">:</span> <span class="token string">"utf-8"</span><span class="token punctuation">,</span>
      <span class="token property">"pageSize"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">"isCheckContentLevel"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"checkContentLevel"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"isCountDownload"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"isCountHits"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"isCountHitsByDay"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"isSaveImageInTextEditor"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"isAutoPageInTextEditor"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"autoPageWordNum"</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span>
      <span class="token property">"isContentTitleBreakLine"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"isAutoCheckKeywords"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"photoSmallWidth"</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span>
      <span class="token property">"photoMiddleWidth"</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
      <span class="token property">"isWaterMark"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"isImageWaterMark"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"waterMarkPosition"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
      <span class="token property">"waterMarkTransparency"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">"waterMarkMinWidth"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token property">"waterMarkMinHeight"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token property">"waterMarkFormatString"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"waterMarkFontName"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"waterMarkFontSize"</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
      <span class="token property">"waterMarkImagePath"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"isSeparatedWeb"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"separatedWebUrl"</span><span class="token operator">:</span> <span class="token string">"http://web.chinacampus.org"</span><span class="token punctuation">,</span>
      <span class="token property">"webUrl"</span><span class="token operator">:</span> <span class="token string">"/test2"</span><span class="token punctuation">,</span>
      <span class="token property">"isSeparatedAssets"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"separatedAssetsUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"assetsDir"</span><span class="token operator">:</span> <span class="token string">"upload"</span><span class="token punctuation">,</span>
      <span class="token property">"assetsUrl"</span><span class="token operator">:</span> <span class="token string">"/test2/upload/"</span><span class="token punctuation">,</span>
      <span class="token property">"channelFilePathRule"</span><span class="token operator">:</span> <span class="token string">"/channels/{@ChannelID}.html"</span><span class="token punctuation">,</span>
      <span class="token property">"contentFilePathRule"</span><span class="token operator">:</span> <span class="token string">"/contents/{@ChannelID}/{@ContentID}.html"</span><span class="token punctuation">,</span>
      <span class="token property">"isCreateContentIfContentChanged"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"isCreateChannelIfChannelChanged"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"isCreateShowPageInfo"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"isCreateIe8Compatible"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"isCreateBrowserNoCache"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"isCreateJsIgnoreError"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"isCreateWithJQuery"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"isCreateDoubleClick"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"createStaticMaxPage"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token property">"isCreateStaticContentByAddDate"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"createStaticContentAddDate"</span><span class="token operator">:</span> <span class="token string">"0001-01-01 00:00:00"</span><span class="token punctuation">,</span>
      <span class="token property">"isCrossSiteTransChecked"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">"configTemplateIsCodeMirror"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"configVideoContentInsertWidth"</span><span class="token operator">:</span> <span class="token number">420</span><span class="token punctuation">,</span>
      <span class="token property">"configVideoContentInsertHeight"</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
      <span class="token property">"configExportType"</span><span class="token operator">:</span> <span class="token string">"ContentExcel"</span><span class="token punctuation">,</span>
      <span class="token property">"configExportPeriods"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
      <span class="token property">"configExportDisplayAttributes"</span><span class="token operator">:</span> <span class="token string">"Id,Title,LinkUrl,AddDate,Hits,GroupNameCollection,Tags,FreeReadings,FullReadingPrice,PaidReadings,PaperPrice,SubTitle,ImageUrl,VideoUrl,FileUrl,Content,Summary,Author,Source"</span><span class="token punctuation">,</span>
      <span class="token property">"configExportIsChecked"</span><span class="token operator">:</span> <span class="token string">"All"</span><span class="token punctuation">,</span>
      <span class="token property">"configSelectImageCurrentUrl"</span><span class="token operator">:</span> <span class="token string">"upload/images"</span><span class="token punctuation">,</span>
      <span class="token property">"configSelectVideoCurrentUrl"</span><span class="token operator">:</span> <span class="token string">"@/upload/videos"</span><span class="token punctuation">,</span>
      <span class="token property">"configSelectFileCurrentUrl"</span><span class="token operator">:</span> <span class="token string">"@/upload/files"</span><span class="token punctuation">,</span>
      <span class="token property">"configUploadImageIsTitleImage"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
      <span class="token property">"configUploadImageTitleImageWidth"</span><span class="token operator">:</span> <span class="token string">"152"</span><span class="token punctuation">,</span>
      <span class="token property">"configUploadImageTitleImageHeight"</span><span class="token operator">:</span> <span class="token string">"109"</span><span class="token punctuation">,</span>
      <span class="token property">"configUploadImageIsShowImageInTextEditor"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
      <span class="token property">"configUploadImageIsLinkToOriginal"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
      <span class="token property">"configUploadImageIsSmallImage"</span><span class="token operator">:</span> <span class="token string">"False"</span><span class="token punctuation">,</span>
      <span class="token property">"configUploadImageSmallImageWidth"</span><span class="token operator">:</span> <span class="token string">"500"</span><span class="token punctuation">,</span>
      <span class="token property">"configUploadImageSmallImageHeight"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"siteSettingsCollection"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token property">"imageUploadDirectoryName"</span><span class="token operator">:</span> <span class="token string">"upload/images"</span><span class="token punctuation">,</span>
      <span class="token property">"imageUploadDateFormatString"</span><span class="token operator">:</span> <span class="token string">"Month"</span><span class="token punctuation">,</span>
      <span class="token property">"isImageUploadChangeFileName"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"imageUploadTypeCollection"</span><span class="token operator">:</span> <span class="token string">"gif|jpg|jpeg|bmp|png|pneg|swf"</span><span class="token punctuation">,</span>
      <span class="token property">"imageUploadTypeMaxSize"</span><span class="token operator">:</span> <span class="token number">15360</span><span class="token punctuation">,</span>
      <span class="token property">"videoUploadDirectoryName"</span><span class="token operator">:</span> <span class="token string">"upload/videos"</span><span class="token punctuation">,</span>
      <span class="token property">"videoUploadDateFormatString"</span><span class="token operator">:</span> <span class="token string">"Month"</span><span class="token punctuation">,</span>
      <span class="token property">"isVideoUploadChangeFileName"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"videoUploadTypeCollection"</span><span class="token operator">:</span> <span class="token string">"asf|asx|avi|flv|mid|midi|mov|mp3|mp4|mpg|mpeg|ogg|ra|rm|rmb|rmvb|rp|rt|smi|swf|wav|webm|wma|wmv|viv"</span><span class="token punctuation">,</span>
      <span class="token property">"videoUploadTypeMaxSize"</span><span class="token operator">:</span> <span class="token number">307200</span><span class="token punctuation">,</span>
      <span class="token property">"fileUploadDirectoryName"</span><span class="token operator">:</span> <span class="token string">"upload/files"</span><span class="token punctuation">,</span>
      <span class="token property">"fileUploadDateFormatString"</span><span class="token operator">:</span> <span class="token string">"Month"</span><span class="token punctuation">,</span>
      <span class="token property">"isFileUploadChangeFileName"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"fileUploadTypeCollection"</span><span class="token operator">:</span> <span class="token string">"zip,rar,7z,js,css,txt,doc,docx,ppt,pptx,xls,xlsx,pdf"</span><span class="token punctuation">,</span>
      <span class="token property">"fileUploadTypeMaxSize"</span><span class="token operator">:</span> <span class="token number">307200</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br></div></div></template>