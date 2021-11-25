# 数据库操作

插件通常拥有自己的表结构，用于存储插件相关的数据，本节将说明如何创建数据库表，以及如何在代码中对数据进行操作。

## 配置数据库表结构

为了让 XYCMS 系统自动创建我们所需要的数据库表，我们需要在插件的 package.json 文件中对数据库表结构进行配置。

为了让 XYCMS 系统自动创建我们所需要的数据库表，我们需要对插件 package.json 配置文件的 extensions -> tables 节点进行设置，在此，我们以XYCMS 内容相册插件 (opens new window)的package.json (opens new window)作为示例说明表结构的配置：

``` json
"tables": {
  "xycms_photos": {
    "columns": [
      {
        "attributeName": "SiteId",
        "dataType": "Integer"
      },
      {
        "attributeName": "ChannelId",
        "dataType": "Integer"
      },
      {
        "attributeName": "ContentId",
        "dataType": "Integer"
      },
      {
        "attributeName": "SmallUrl",
        "dataType": "VarChar"
      },
      {
        "attributeName": "MiddleUrl",
        "dataType": "VarChar"
      },
      {
        "attributeName": "LargeUrl",
        "dataType": "VarChar"
      },
      {
        "attributeName": "Taxis",
        "dataType": "Integer"
      },
      {
        "attributeName": "Description",
        "dataType": "VarChar",
        "dataLength": 2000
      }
    ]
  }
}
```

- xycms_photos：表名称，可以任意取值，需要确保唯一性，插件启动时 XYCMS 系统将为插件创建对应的数据库表。
- columns：表字段集合。
- attributeName：字段名称。
- dataType：字段类型。
- dataLength：字段长度，如果是字符串类型字段，不设置的话默认长度为500。

系统支持的字段类型有一下几种：

| 属性 | 类型 |
| :----- | :----- |
|Boolean	|布尔值|
|DateTime	|日期|
|Decimal	|小数|
|Integer	|整数|
|Text	|备注|
|VarChar	|字符串|

由于 XYCMS 系统支持多种数据库，不同数据库类型的实际字段类型名称与 dataType 的名称可能有区别。

如果插件版本更新的同时更新了数据库表结构，XYCMS 系统将负责把更新的表结构同步到实际数据库中。

需要注意的是，XYCMS 系统在创建和同步表结构的同时，将默认创建以下字段：

| 属性 | 类型 | 说明 |
| :----- | :----- | :----- |
|Id	|Integer	|自增长Id字段|
|Guid	|VarChar	|字符串类型的全局唯一标识符，XYCMS系统负责为此字段赋值并保持唯一性|
|ExtendValues	|Text	|扩展字段|
|CreatedDate	|DateTime	|数据创建时间，XYCMS系统负责为此字段赋值|
|LastModifiedDate	|DateTime	|数据修改时间，XYCMS系统负责为此字段赋值|

## 数据操作框架

XYCMS 系统将在插件第一次加载的时候核对表字段并创建或者同步表结构到数据库，我们接下来需要做的就是编写代码操作数据库，对数据进行增删改查的操作。

实现数据的操作方式有很多，没有必须遵守的规则，XYCMS 系统使用的数据操作类库是我们自行开发的 Datory 框架，Datory 框架是我们在流行的 Dapper 框架基础上封装了一些操作接口而成，如果熟悉 Dapper 框架会发现操作接口非常类似。

我们以 XYCMS 自带的 Datory 框架作为演示并不是推荐使用此框架，大家在实际开发过程中应该尽量使用自己熟悉的数据库操作类库进行数据操作。

## 定义表实体类

我们首先定义一个实体类，作为操作数据的实体模型，我们以 XYCMS 内容相册插件 (opens new window)的 Photo (opens new window)类作为示例：

``` C#
using Datory;
using Datory.Annotations;

namespace XYCMS.Photos.Models
{
    [DataTable("xycms_photos")]
    public class Photo : Entity
    {
        [DataColumn]
        public int SiteId { get; set; }

        [DataColumn]
        public int ChannelId { get; set; }

        [DataColumn]
        public int ContentId { get; set; }

        [DataColumn]
        public string SmallUrl { get; set; }

        [DataColumn]
        public string MiddleUrl { get; set; }

        [DataColumn]
        public string LargeUrl { get; set; }

        [DataColumn]
        public int Taxis { get; set; }

        [DataColumn(Length = 2000)]
        public string Description { get; set; }
    }
}
```

可以看到，Photo 实体类继承了 Datory 框架的 Entity 类，然后我们需要使用 [DataTable] 标识表名，同时使用 [DataColumn] 标识出字段。

继承 Entity 类之后，实体类将自动拥有Id（自增长Id字段）、Guid（全局唯一标识符）、ExtendValues（扩展字段）、CreatedDate（数据创建时间）、LastModifiedDate（数据修改时间）这五个字段，并且这五个字段的值是由系统进行维护的。

## 数据操作接口

定义好实体类后，我们需要定义数据操作接口，此接口定义了我们所需要用到的增删改查等操作，我们以 XYCMS 内容相册插件 (opens new window)的 IPhotoRepository (opens new window)作为示例：

``` C#
using System.Collections.Generic;
using System.Threading.Tasks;
using XYCMS.Photos.Models;

namespace XYCMS.Photos.Abstractions
{
    public interface IPhotoRepository
    {
        Task<int> InsertAsync(Photo photoInfo);

        Task UpdateAsync(Photo photo);

        Task UpdateDescriptionAsync(int photoId, string description);

        Task UpdateTaxisAsync(List<int> photoIds);

        Task DeleteAsync(int photoId);

        Task DeleteAsync(int siteId, int channelId, int contentId);

        Task<Photo> GetFirstPhotoAsync(int siteId, int channelId, int contentId);

        Task<int> GetCountAsync(int siteId, int channelId, int contentId);

        Task<List<int>> GetPhotoContentIdListAsync(int siteId, int channelId, int contentId);

        Task<List<Photo>> GetPhotosAsync(int siteId, int channelId, int contentId);

        Task<Photo> GetAsync(int photoId);
    }
}
```

## 数据操作实现

定义好接口之后，我们需要编写此接口的具体实现，我们以 XYCMS 内容相册插件 (opens new window)的 PhotoRepository (opens new window)作为示例：

``` C#
using System.Collections.Generic;
using System.Threading.Tasks;
using Datory;
using XYCMS.Photos.Abstractions;
using XYCMS.Photos.Models;
using XYCMS.Services;

namespace XYCMS.Photos.Core
{
    public class PhotoRepository : IPhotoRepository
    {
        private readonly Repository<Photo> _repository;

        public PhotoRepository(ISettingsManager settingsManager)
        {
            _repository = new Repository<Photo>(settingsManager.Database);
        }

        public async Task<int> InsertAsync(Photo photoInfo)
        {
            var maxTaxis = await GetMaxTaxisAsync(photoInfo.SiteId, photoInfo.ChannelId, photoInfo.ContentId);
            photoInfo.Taxis = maxTaxis + 1;
            photoInfo.Id = await _repository.InsertAsync(photoInfo);

            return photoInfo.Id;
        }

        public async Task UpdateAsync(Photo photo)
        {
            await _repository.UpdateAsync(photo);
        }

        public async Task UpdateDescriptionAsync(int photoId, string description)
        {
            await _repository.UpdateAsync(Q
                .Set(nameof(Photo.Description), description)
                .Where(nameof(Photo.Id), photoId)
            );
        }

        public async Task UpdateTaxisAsync(List<int> photoIds)
        {
            var taxis = 1;
            foreach (var photoId in photoIds)
            {
                await SetTaxisAsync(photoId, taxis);
                taxis++;
            }
        }

        public async Task DeleteAsync(int photoId)
        {
            await _repository.DeleteAsync(photoId);
        }

        public async Task DeleteAsync(int siteId, int channelId, int contentId)
        {
            await _repository.DeleteAsync(Q
                .Where(nameof(Photo.SiteId), siteId)
                .Where(nameof(Photo.ChannelId), channelId)
                .Where(nameof(Photo.ContentId), contentId)
            );
        }

        public async Task<Photo> GetFirstPhotoAsync(int siteId, int channelId, int contentId)
        {
            return await _repository.GetAsync(Q
                .Where(nameof(Photo.SiteId), siteId)
                .Where(nameof(Photo.ChannelId), channelId)
                .Where(nameof(Photo.ContentId), contentId)
                .OrderBy(nameof(Photo.Taxis))
            );
        }

        public async Task<int> GetCountAsync(int siteId, int channelId, int contentId)
        {
            return await _repository.CountAsync(Q
                .Where(nameof(Photo.SiteId), siteId)
                .Where(nameof(Photo.ChannelId), channelId)
                .Where(nameof(Photo.ContentId), contentId)
            );
        }

        public async Task<List<int>> GetPhotoContentIdListAsync(int siteId, int channelId, int contentId)
        {
            return await _repository.GetAllAsync<int>(Q
                .Select(nameof(Photo.Id))
                .Where(nameof(Photo.SiteId), siteId)
                .Where(nameof(Photo.ChannelId), channelId)
                .Where(nameof(Photo.ContentId), contentId)
                .OrderBy(nameof(Photo.Taxis))
            );
        }

        public async Task<List<Photo>> GetPhotosAsync(int siteId, int channelId, int contentId)
        {
            return await _repository.GetAllAsync(Q
                .Where(nameof(Photo.SiteId), siteId)
                .Where(nameof(Photo.ChannelId), channelId)
                .Where(nameof(Photo.ContentId), contentId)
                .OrderBy(nameof(Photo.Taxis))
            );
        }

        public async Task<Photo> GetAsync(int photoId)
        {
            return await _repository.GetAsync(photoId);
        }

        private async Task SetTaxisAsync(int id, int taxis)
        {
            await _repository.UpdateAsync(Q
                .Set(nameof(Photo.Taxis), taxis)
                .Where(nameof(Photo.Id), id)
            );
        }

        private async Task<int> GetMaxTaxisAsync(int siteId, int channelId, int contentId)
        {
            return await _repository.MaxAsync(nameof(Photo.Taxis), Q
                       .Where(nameof(Photo.SiteId), siteId)
                       .Where(nameof(Photo.ChannelId), channelId)
                       .Where(nameof(Photo.ContentId), contentId)
                   ) ?? 0;
        }
    }
}
```

可以看到，PhotoRepository 类继承了 IPhotoRepository 接口，同时在构造函数中注入了 XYCMS 系统的 ISettingsManager 接口，ISettingsManager 接口中将包含数据库连接信息。

由于我们示例使用的是 Datory 框架，所以我们通过 Datory 框架的 Repository\<Photo\> 泛型类封装了 Photo 实体类的所有操作，我们在 PhotoRepository 类中所要做的只是调用数据库操作接口。

## 注入数据操作接口

最后，我们需要将 IPhotoRepository 接口注入到系统中，使 IPhotoRepository 在需要的时候可以直接使用。

我们以 XYCMS 内容相册插件 (opens new window)的 Startup (opens new window)类作为示例：

``` C#
using Microsoft.Extensions.DependencyInjection;
using XYCMS.Photos.Abstractions;
using XYCMS.Photos.Core;
using XYCMS.Plugins;

namespace XYCMS.Photos
{
    public class Startup : IPluginConfigureServices
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IPhotoRepository, PhotoRepository>();
            services.AddScoped<IPhotoManager, PhotoManager>();
        }
    }
}
```

可以看到在插件初始化方法 ConfigureServices 的第一行注入了 IPhotoRepository 接口。

## 使用数据操作接口

现在，我们可以直接使用数据操作接口对数据进行操作了。

我们以 XYCMS 内容相册插件 (opens new window)的 PhotosController (opens new window)类作为示例：

``` C#
public partial class PhotosController : ControllerBase
{
    private const string Route = "photos/photos";
    private const string RouteUpload = "photos/photos/actions/upload";

    private readonly IAuthManager _authManager;
    private readonly IPathManager _pathManager;
    private readonly ISiteRepository _siteRepository;
    private readonly IPhotoManager _photoManager;
    private readonly IPhotoRepository _photoRepository;

    public PhotosController(IAuthManager authManager, IPathManager pathManager, ISiteRepository siteRepository, IPhotoManager photoManager, IPhotoRepository photoRepository)
    {
        _authManager = authManager;
        _pathManager = pathManager;
        _siteRepository = siteRepository;
        _photoManager = photoManager;
        _photoRepository = photoRepository;
    }

    ......

    [HttpGet, Route(Route)]
    public async Task<ActionResult<GetResult>> Get([FromQuery] ContentRequest request)
    {
        if (!await _authManager.HasContentPermissionsAsync(request.SiteId, request.ChannelId, PhotoManager.PermissionsContent))
            return Unauthorized();

        var site = await _siteRepository.GetAsync(request.SiteId);

        var photos = await _photoRepository.GetPhotosAsync(request.SiteId, request.ChannelId, request.ContentId);

        foreach (var photo in photos)
        {
            photo.LargeUrl = await _pathManager.ParseSiteUrlAsync(site, photo.LargeUrl, true);
            photo.MiddleUrl = await _pathManager.ParseSiteUrlAsync(site, photo.MiddleUrl, true);
            photo.SmallUrl = await _pathManager.ParseSiteUrlAsync(site, photo.SmallUrl, true);
        }

        return new GetResult
        {
            Photos = photos
        };
    }
```

可以看到，我们在 Get 方法中调用了 IPhotoRepository 的 GetPhotosAsync 方法，以获取图片实体列表。

