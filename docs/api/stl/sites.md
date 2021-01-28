# 获取站点列表 API

获取站点列表接口

使用`GET`发起请求，请求地址为`/api/v1/stl/sites`

```
GET /api/v1/stl/sites HTTP/1.1
```

### 请求 URI

| 参数名 | 位置 | 类型 | 必填 | 说明 |
| :----- | :----- | :----- | :----- | :----- |
|siteId	|字符串|	否	|站点Id|
|siteDir|	字符串|	否	|站点文件夹|
|channelId|	字符串|	否	|栏目Id|
|channelIndex|	字符串|	否	|栏目索引|
|channelName	|字符串|	否	|栏目名称|
| apiKey | 字符串 | 否 | API 密钥，请参考身份认证 |

`/api/v1/stl/sites`的其他参数与`<stl:sites>`标签一致。

### 返回

| 名称 | 类型 | 说明 |
| :----- | :----- | :----- |
|200 OK	|Site 列表	|站点列表|
|401 Unauthorized	|Error	|认证错误|
|400 BadRequest	|Error	|参数错误|

### 示例

#### 请求示例

```
GET /api/v1/stl/sites HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

#### 返回示例

```json
{
  "value": [
    {
      "id": 1116,
      "siteDir": "test2",
      "siteName": "我的站点",
      "tableName": "model_Content",
      "isRoot": false,
      "parentId": 0,
      "taxis": 7,
      "attributes": {
        "charset": "utf-8",
        "pageSize": 3,
        "isCheckContentLevel": false,
        "checkContentLevel": 1,
        "isCountDownload": true,
        "isCountHits": false,
        "isCountHitsByDay": false,
        "isSaveImageInTextEditor": true,
        "isAutoPageInTextEditor": false,
        "autoPageWordNum": 1500,
        "isContentTitleBreakLine": false,
        "isAutoCheckKeywords": false,
        "photoSmallWidth": 70,
        "photoMiddleWidth": 400,
        "isWaterMark": false,
        "isImageWaterMark": false,
        "waterMarkPosition": 9,
        "waterMarkTransparency": 5,
        "waterMarkMinWidth": 200,
        "waterMarkMinHeight": 200,
        "waterMarkFormatString": "",
        "waterMarkFontName": "",
        "waterMarkFontSize": 12,
        "waterMarkImagePath": "",
        "isSeparatedWeb": false,
        "separatedWebUrl": "http://web.chinacampus.org",
        "webUrl": "/test2",
        "isSeparatedAssets": false,
        "separatedAssetsUrl": "",
        "assetsDir": "upload",
        "assetsUrl": "/test2/upload/",
        "channelFilePathRule": "/channels/{@ChannelID}.html",
        "contentFilePathRule": "/contents/{@ChannelID}/{@ContentID}.html",
        "isCreateContentIfContentChanged": true,
        "isCreateChannelIfChannelChanged": true,
        "isCreateShowPageInfo": false,
        "isCreateIe8Compatible": false,
        "isCreateBrowserNoCache": false,
        "isCreateJsIgnoreError": false,
        "isCreateWithJQuery": true,
        "isCreateDoubleClick": true,
        "createStaticMaxPage": 10,
        "isCreateStaticContentByAddDate": false,
        "createStaticContentAddDate": "0001-01-01 00:00:00",
        "isCrossSiteTransChecked": false,
        "configTemplateIsCodeMirror": true,
        "configVideoContentInsertWidth": 420,
        "configVideoContentInsertHeight": 280,
        "configExportType": "ContentExcel",
        "configExportPeriods": "0",
        "configExportDisplayAttributes": "Id,Title,LinkUrl,AddDate,Hits,GroupNameCollection,Tags,FreeReadings,FullReadingPrice,PaidReadings,PaperPrice,SubTitle,ImageUrl,VideoUrl,FileUrl,Content,Summary,Author,Source",
        "configExportIsChecked": "All",
        "configSelectImageCurrentUrl": "upload/images",
        "configSelectVideoCurrentUrl": "@/upload/videos",
        "configSelectFileCurrentUrl": "@/upload/files",
        "configUploadImageIsTitleImage": "False",
        "configUploadImageTitleImageWidth": "152",
        "configUploadImageTitleImageHeight": "109",
        "configUploadImageIsShowImageInTextEditor": "False",
        "configUploadImageIsLinkToOriginal": "False",
        "configUploadImageIsSmallImage": "False",
        "configUploadImageSmallImageWidth": "500",
        "configUploadImageSmallImageHeight": "",
        "siteSettingsCollection": "",
        "imageUploadDirectoryName": "upload/images",
        "imageUploadDateFormatString": "Month",
        "isImageUploadChangeFileName": true,
        "imageUploadTypeCollection": "gif|jpg|jpeg|bmp|png|pneg|swf",
        "imageUploadTypeMaxSize": 15360,
        "videoUploadDirectoryName": "upload/videos",
        "videoUploadDateFormatString": "Month",
        "isVideoUploadChangeFileName": true,
        "videoUploadTypeCollection": "asf|asx|avi|flv|mid|midi|mov|mp3|mp4|mpg|mpeg|ogg|ra|rm|rmb|rmvb|rp|rt|smi|swf|wav|webm|wma|wmv|viv",
        "videoUploadTypeMaxSize": 307200,
        "fileUploadDirectoryName": "upload/files",
        "fileUploadDateFormatString": "Month",
        "isFileUploadChangeFileName": true,
        "fileUploadTypeCollection": "zip,rar,7z,js,css,txt,doc,docx,ppt,pptx,xls,xlsx,pdf",
        "fileUploadTypeMaxSize": 307200
      }
    },
    {
      "id": 1082,
      "siteDir": "test1",
      "siteName": "test1",
      "tableName": "model_Content",
      "isRoot": false,
      "parentId": 0,
      "taxis": 6,
      "attributes": {
        "charset": "utf-8",
        "pageSize": 30,
        "isCheckContentLevel": false,
        "checkContentLevel": 1,
        "isCountDownload": true,
        "isCountHits": true,
        "isCountHitsByDay": true,
        "isSaveImageInTextEditor": true,
        "isAutoPageInTextEditor": false,
        "autoPageWordNum": 1500,
        "isContentTitleBreakLine": false,
        "isAutoCheckKeywords": false,
        "photoSmallWidth": 70,
        "photoMiddleWidth": 400,
        "isWaterMark": false,
        "isImageWaterMark": false,
        "waterMarkPosition": 9,
        "waterMarkTransparency": 5,
        "waterMarkMinWidth": 200,
        "waterMarkMinHeight": 200,
        "waterMarkFormatString": "",
        "waterMarkFontName": "",
        "waterMarkFontSize": 12,
        "waterMarkImagePath": "",
        "isSeparatedWeb": false,
        "separatedWebUrl": "",
        "webUrl": "/test1",
        "isSeparatedAssets": false,
        "separatedAssetsUrl": "",
        "assetsDir": "upload",
        "assetsUrl": "/test1/upload/",
        "channelFilePathRule": "/channels/{@ChannelID}.html",
        "contentFilePathRule": "/contents/{@ChannelID}/{@ContentID}.html",
        "isCreateContentIfContentChanged": true,
        "isCreateChannelIfChannelChanged": true,
        "isCreateShowPageInfo": false,
        "isCreateIe8Compatible": false,
        "isCreateBrowserNoCache": false,
        "isCreateJsIgnoreError": false,
        "isCreateWithJQuery": true,
        "isCreateDoubleClick": false,
        "createStaticMaxPage": 10,
        "isCreateStaticContentByAddDate": false,
        "createStaticContentAddDate": "0001-01-01 00:00:00",
        "isCrossSiteTransChecked": false,
        "configTemplateIsCodeMirror": true,
        "configVideoContentInsertWidth": 420,
        "configVideoContentInsertHeight": 280,
        "configExportType": "",
        "configExportPeriods": "",
        "configExportDisplayAttributes": "",
        "configExportIsChecked": "",
        "configSelectImageCurrentUrl": "upload/images",
        "configSelectVideoCurrentUrl": "@/upload/videos",
        "configSelectFileCurrentUrl": "@/upload/files",
        "configUploadImageIsTitleImage": "False",
        "configUploadImageTitleImageWidth": "300",
        "configUploadImageTitleImageHeight": "",
        "configUploadImageIsShowImageInTextEditor": "False",
        "configUploadImageIsLinkToOriginal": "False",
        "configUploadImageIsSmallImage": "True",
        "configUploadImageSmallImageWidth": "500",
        "configUploadImageSmallImageHeight": "",
        "siteSettingsCollection": "",
        "imageUploadDirectoryName": "upload/images",
        "imageUploadDateFormatString": "Month",
        "isImageUploadChangeFileName": true,
        "imageUploadTypeCollection": "gif|jpg|jpeg|bmp|png|pneg|swf",
        "imageUploadTypeMaxSize": 15360,
        "videoUploadDirectoryName": "upload/videos",
        "videoUploadDateFormatString": "Month",
        "isVideoUploadChangeFileName": true,
        "videoUploadTypeCollection": "asf|asx|avi|flv|mid|midi|mov|mp3|mp4|mpg|mpeg|ogg|ra|rm|rmb|rmvb|rp|rt|smi|swf|wav|webm|wma|wmv|viv",
        "videoUploadTypeMaxSize": 307200,
        "fileUploadDirectoryName": "upload/files",
        "fileUploadDateFormatString": "Month",
        "isFileUploadChangeFileName": true,
        "fileUploadTypeCollection": "zip,rar,7z,js,css,txt,doc,docx,ppt,pptx,xls,xlsx,pdf",
        "fileUploadTypeMaxSize": 307200
      }
    }
  ]
}
```