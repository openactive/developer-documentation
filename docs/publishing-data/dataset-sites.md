# Dataset Sites

Dataset Sites help data users to find your data, and interact with you if they find any issues. They are both human and machine readable, and allow your data to appear everywhere from the [OpenActive Status Page](https://status.openactive.io) to the [Google Dataset Search](https://toolbox.google.com/datasetsearch/search?query=openactive).

Example dataset sites: [GLL](http://data.better.org.uk), [Fusion Lifestyle](https://opendata.fusion-lifestyle.com/OpenActive)

## Overview

* In order for data users to find your data feeds, and for your dataset to be featured on the [OpenActive status page](https://status.openactive.io/), you must deploy the [Dataset Site Template](dataset-sites.md#dataset-site-template) \(a simple mustache template\) within your codebase.
* For booking systems or bespoke websites with a **single database** and one set of OpenActive data feeds, a single Dataset Site is likely to be sufficient for your organisation. This can be achieved by simply hard-coding the JSON passed into the mustache template.
* If you are a booking system with **multiple databases**, each of which has their own set of OpenActive data feeds, a Dataset Site is required for each customer. This can be achieved using customer configuration to drive the mustache template.
* You need to create a [GitHub issues board](dataset-sites.md#step-2-github-issues-board-creation) for each Dataset Site.
* If you are publishing multiple dataset sites you also need to provide a [Data Catalog](dataset-sites.md#step-3-providing-a-data-catalog-multiple-databases-only).
* Data publishers should be encouraged to provide links to their Dataset Site from their own website.

### What is a Dataset Site?

* A web page that can be referenced when discussing the dataset.
* A human and machine readable licence associated with the data \(the Dataset Site contains invisible metadata which allows its details to be read automatically\).
* A human and machine readable rights statement to specify how dataset users \(innovators who want to build on top of/use your data\) should attribute your data.
* An accessible "single point of truth" that explains where the data can be found.
* Links to documentation relating to the format of the data, including the specifications it follows, and the data fields it contains.
* A place where the community can contribute with comments, and raise issues - all Dataset Sites are linked to a GitHub issues board \(e.g. [this one](https://github.com/gll-better/opendata/issues)\) that allows data users to raise issues in the open.

{% hint style="warning" %}
A machine-readable dataset site is essential when publishing open data, and every dataset published within the OpenActive community to date has had one. Despite this, the specification that describes a standard OpenActive dataset site is still yet to be formally defined, and has instead evolved as a de facto standard.

As such, this documentation is still based on a [draft model](../data-model/types/dataset.md) that is designed to inform the OpenActive specification work with implementation feedback. It is mostly stable and has been largely unchanged for 2 years. However, it is still **subject to change**, as the [Dataset API Discovery specification](https://www.openactive.io/dataset-api-discovery/EditorsDraft/) is yet to be formally released.

To minimise any uplift work required to conform to the formal specification when it is released, it is **strongly recommended** that you use [one of the libraries below](dataset-sites.md#net-php-and-ruby-libraries) if possible. These libraries will be updated to meet the latest specification, and when used in their simplest mode \([RenderSimpleDatasetSite](https://github.com/openactive/OpenActive.DatasetSite.NET/#simple-implementation), [renderSimpleDatasetSite](https://packagist.org/packages/openactive/dataset-site#user-content-rendersimpledatasetsitesettings-supportedfeedtypes) or [TemplateRenderer.new](https://www.rubydoc.info/gems/openactive-dataset_site/0.1.1#Usage)\) will only require a simple dependency update from you to do so.
{% endhint %}

## Step 1: Build Dataset Sites into your system

The Dataset Site Template is very easy to use and quick to apply - it's essentially a single mustache template and associated JSON structure. It is designed to work with minimal effort with an extremely [wide range of platforms and languages](https://mustache.github.io/).

The[ dataset site template repository](https://github.com/openactive/dataset-site-template) contains a [mustache template](https://www.openactive.io/dataset-site-template/datasetsite.mustache) for creating an OpenActive dataset site.

### .NET, PHP and Ruby Libraries

Several libraries are available that make it really easy to render the dataset site template, accepting basic settings to configure your dataset site automatically.

The table below lists the available OpenActive libraries:

| Library | [.NET](https://docs.microsoft.com/en-us/dotnet/standard/net-standard) | [PHP](https://www.php.net/releases/5_4_0.php) | [Ruby](https://www.ruby-lang.org/en/) |
| :--- | :--- | :--- | :--- |
| Open Opportunity Data Feeds | [OpenActive.NET](https://www.nuget.org/packages/OpenActive.NET/) | [openactive/models](https://packagist.org/packages/openactive/models) | [openactive](https://rubygems.org/gems/openactive) |
| Dataset Site | [OpenActive.DatasetSite.NET](https://www.nuget.org/packages/OpenActive.DatasetSite.NET/) | [openactive/dataset-site](https://packagist.org/packages/openactive/dataset-site) | [openactive-dataset\_site](https://rubygems.org/gems/openactive-dataset_site) |

### Other Languages

A basic example of following the below render steps can be found [here](https://github.com/openactive/dataset-site-template-example-dotnet/blob/master/DatasetSiteTemplateExample/Program.cs), and can be readily ported into other languages. An explanation of how this works is included below.

The [Dataset Site Template](https://github.com/openactive/dataset-site-template/) is a single self-contained mustache template of an HTML page that contains embedded CSS, an embedded encoded image, and references to CDNs of [Font Awesome](https://fontawesome.com/) and [Google Fonts](https://fonts.google.com/). It works across all browsers, and includes fully compliant DCAT and schema.org machine-readable metadata to ensure it is compatible with [Google Dataset Search](https://toolbox.google.com/datasetsearch/search?query=openactive).

Steps to render the template:

1. Construct the JSON-LD to match the format found in [this example](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdataset-site-template%2Fexample.json&version=2.x&validationMode=DatasetSite), following [this documentation](../data-model/types/dataset.md).
2. Find a [mustache library](https://mustache.github.io/) for your platform or language.
3. Write code to do the following:
   * Stringify the input JSON, and place the contents of the string within the "json" property at the root of the JSON itself \(i.e. serialised JSON embedded in the original deserialised object\).
   * Use the resulting JSON with the [mustache template](https://www.openactive.io/dataset-site-template/datasetsite.mustache) to render the dataset site.
   * Keep in mind that OpenActive will be providing updates to the mustache template in the future, so it is best to write code that anticipates this.

#### JavaScript Example

This [JSFiddle](https://jsfiddle.net/nickevansuk/msby0vqg/) demonstrates the Dataset Site Template render steps outlined above using plain JavaScript.

Please note this is only an example to demonstrate the logic and is not intended for production. The mustache template **must** be copied locally and rendered server-side for security - to prevent XSS attacks and as one of its primary purposes is SEO.

Click the **Result** tab below to see the result of a template render.

{% embed url="https://jsfiddle.net/nickevansuk/msby0vqg/" caption="" %}

## Step 2: Personalising the Dataset Site

The Dataset Site Template is designed to carry the customer's brand with minimal configuration.

### Single database

For booking systems or bespoke websites with a **single database** and one set of OpenActive data feeds, a **single Dataset Site** is likely to be sufficient for your organisation. This can be achieved by simply hard-coding the JSON passed into the mustache template \(see [documentation](../data-model/types/dataset.md) and [example](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdataset-site-template%2Fexample.json&version=2.x&validationMode=DatasetSite)\), or hard-coding the settings passed to the library \(see the [relevant library documentation](dataset-sites.md#net-php-and-ruby-libraries)\).

Note a single Dataset Site must only be used when all feeds it includes are part of the same dataset - for example a SessionSeries feed and ScheduledSession feed that together constitute the dataset of all providers in the booking system. Where multiple feeds exist that represent distinct datasets \(e.g. SessionSeries feed for Provider A, SessionSeries feed for Provider B\), they must be referenced from distinct Dataset Sites, which can be constructed as per the instructions in [Multiple databases](dataset-sites.md#multiple-databases) below.

### Multiple databases

For large booking systems with **multiple databases**, usually a separate database for each customer, a **separate Dataset Site** may be created for each database. The list below illustrates the minimal number of configurable properties that can be used to generate the whole dataset site in a way that is personalised to each customer. See the example [here](https://github.com/openactive/OpenActive.Server.NET/tree/master/OpenActive.DatasetSite.NET#model-level-customisation) for how these map into the JSON data structure, for your reference - in practice the [libraries](dataset-sites.md#net-php-and-ruby-libraries) supplied above [take care of this mapping for you](https://github.com/openactive/OpenActive.DatasetSite.NET#simple-implementation).

* `organisationName` e.g. "Better",
* `datasetSiteUrl` e.g. "[https://halo-odi.legendonlineservices.co.uk/openactive/](https://halo-odi.legendonlineservices.co.uk/openactive/)",
* `datasetDiscussionUrl` e.g. "[https://github.com/gll-better/opendata](https://github.com/gll-better/opendata)",
* `datasetDocumentationUrl` e.g. "[https://docs.acmebooker.example.com/](https://docs.acmebooker.example.com/)",
* `organisationLegalEntity` e.g. "GLL",
* `organisationPlainTextDescription` e.g. "Established in 1993, GLL is the largest UK-based charitable social enterprise delivering leisure, health and community services. Under the consumer facing brand Better, we operate 258 public Sports and Leisure facilities, 88 libraries, 10 children’s centres and 5 adventure playgrounds in partnership with 50 local councils, public agencies and sporting organisations. Better leisure facilities enjoy 46 million visitors a year and have more than 650,000 members.",
* `organisationEmail` e.g. "info@better.org.uk",
* `organisationUrl` e.g. "[https://www.better.org.uk/](https://www.better.org.uk/)",
* `organisationLogoUrl` e.g. "[http://data.better.org.uk/images/logo.png](http://data.better.org.uk/images/logo.png)",
* `backgroundImageUrl` e.g. "[https://data.better.org.uk/images/bg.jpg](https://data.better.org.uk/images/bg.jpg)",
* `openDataFeedBaseUrl` e.g. "[https://halo-odi.legendonlineservices.co.uk/api/](https://halo-odi.legendonlineservices.co.uk/api/)"

We suggest if you can provide the customer with a means of customising the logo and background image \(e.g. via uploading an image to the [cloudinary.com](https://cloudinary.com) CDN, using [their widget](https://jsfiddle.net/nickevansuk/ugpnxmby/), which is free at low volume\), these have the largest effect on the brand feel of the page.

Although the customer will likely be able to fill in most properties specific to them, there are two where they will require guidance:

* `datasetDiscussionUrl` - the URL of the [GitHub issues board](dataset-sites.md#step-2-github-issues-board-creation) for the dataset. If your customers are sufficiently large, you will need to create a GitHub issues board for each customer, either [manually](dataset-sites.md#manual-issues-board-creation) or [automatically](dataset-sites.md#automatic-issues-board-creation). See [here](https://github.com/gladstonemrm) for an example of Gladstone's GitHub organization containing a GitHub issues board for each customer.
* `datasetDocumentationUrl` - as a booking system you should provide at least a single page on your website that explains the OpenActive feeds. Each customer may have the option of providing their own documentation for their dataset site that links to this, or just linking to your documentation direct. If you do not have your own documentation page, you can just link to "[https://developer.openactive.io/](https://developer.openactive.io/)".

## Step 3: GitHub Issues Board creation

The `discussionUrl` is the url of the GitHub issues board for that specific dataset site.

We recommend that you create each GitHub repository \(that will include a GitHub Issues Board\) within your own GitHub organisation either [manually](dataset-sites.md#manually) or via an [API call](dataset-sites.md#automatically).

If you have multiple databases and customers with large data volumes, you should create one GitHub repository  \(that will include a GitHub Issues Board\) for each customer. Single database systems need only create one GitHub repository \(that will include a GitHub Issues Board\). 

### Helpdesk integration

If you "follow" these GitHub repositories using a new GitHub account created with your support e-mail address then you will receive notifications for each query, and be able to reply via e-mail to the notifications from your support e-mail address - these replies then appear directly in GitHub. Note that any administrator accounts automatically follow newly created GitHub repositories within your organisation.

### GitHub Organisation Creation

You must first [create a parent GitHub organisation](https://help.github.com/en/articles/creating-a-new-organization-from-scratch) on the free tier:

* For booking systems we recommend naming the parent GitHub organisation after your own organisation
* For agencies or in-house tech teams we recommend naming parent GitHub organisation after your data publishing organisation.

### Manual Issues Board Creation

A guide for creating a new GitHub repository for each customer can be found below.

{% embed url="https://docs.google.com/document/d/1GO4HLYgrwpXH\_qxVuaAWXw\_HIr2Hn4KB7cl973Q1M4M/edit" caption="" %}

### Automatic Issues Board Creation

The GitHub API provides a mechanism to [automatically create GitHub repositories](https://developer.github.com/v3/repos/#create). The recommended properties for a new repository are included below:

```javascript
{
  "name": "AshfordLeisureTrust",
  "description": "Issues relating to open data from Ashford Leisure Trust",
  "homepage": "https://ashfordleisuretrust.leisurecloud.net/OpenActive/",
  "private": false,
  "has_issues": true,
  "has_projects": false,
  "has_wiki": false,
  "auto_init": false
}
```

## Step 4: Validating your Dataset Site

Use the [validator](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdataset-site-template%2Fexample.json&version=2.x&validationMode=DatasetSite) to check that the JSON-LD within your Dataset Site is conformant, by using the **Load URL** feature in the menu to load your **Dataset Site URL**, while in the "Dataset Sites" mode. The validator will automatically extract the JSON-LD from your Dataset Site's HTML and validate it.

{% embed url="https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdataset-site-template%2Fexample.json&version=2.x&validationMode=DatasetSite" %}

## Step 5: Providing a Data Catalog \(multiple databases only\)

For booking systems with **multiple databases**, a Data Catalog must also be provided to allow the many Dataset Sites that are created to be easily indexed by the [OpenActive Status Page](https://status.openactive.io) and other data users.

A Data Catalog is very simply an array of the URLs of all your Dataset Sites \(the `dataset` array\), presented within a `DataCatalog` wrapper following a [specific format](../data-model/types/datacatalog.md). An example of a live Data Catalog from the Gladstone system can be found [here](https://opendata.leisurecloud.live/api/datacatalog), and another example [here](https://validator.openactive.io/?url=https%3A%2F%2Fopenactive.io%2Fdata-catalogs%2Fsingular.jsonld&version=2.x&validationMode=DataCatalog).

Please use the [validator](https://validator.openactive.io/?url=https%3A%2F%2Fopenactive.io%2Fdata-catalogs%2Fsingular.jsonld&version=2.x&validationMode=DataCatalog) to check that your `DataCatalog` is conformant, using the "Data Catalog" mode.

## Step 6: Adding your Dataset Site or Data Catalog to the OpenActive Data Catalog Collection

OpenActive Data Catalogs provide a mechanism for registering OpenActive Datasite Sites so that they can be [discovered and harvested](https://www.openactive.io/data-catalogs/) by data users.

### Single database

If you have created a new Dataset Site, simply create a [Pull Request for the OpenActive Data Catalog for Singular Datasets](https://github.com/openactive/data-catalogs/edit/master/singular.jsonld) and add your Dataset Site's production URL to the `dataset` array.

### Multiple databases

If you have created a new Data Catalog that links to your Dataset Sites, simply create a [Pull Request for the OpenActive Data Catalog Collection](https://github.com/openactive/data-catalogs/edit/master/data-catalog-collection.jsonld) and add your Data Catalog's production URL to the `hasPart` array.



