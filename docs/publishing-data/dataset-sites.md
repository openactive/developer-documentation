# Dataset Sites

Dataset Sites help data users to find your data, and interact with you if they find any issues. They are both human and machine readable, and allow your data to appear everywhere from the [OpenActive Status Page](https://status.openactive.io) to the [Google Dataset Search](https://toolbox.google.com/datasetsearch/search?query=openactive).

Example dataset sites: [GLL](http://data.better.org.uk), [Fusion Lifestyle](https://opendata.fusion-lifestyle.com/OpenActive)

## Overview

* In order for data users to find your data feeds, and for your dataset to be featured on the [OpenActive status page](https://status.openactive.io/), you must deploy the [Dataset Site Template](dataset-sites.md#dataset-site-template) \(a simple mustache template\) within your codebase.
* For booking systems or bespoke websites with a **single database** and one set of OpenActive data feeds, a single Dataset Site is likely to be sufficient for your organisation. This can be achieved by simply hard-coding the JSON passed into the mustache template.
* If you are a large booking system with **multiple databases**, each of which has their own set of OpenActive data feeds, a Dataset Site is required for each customer. This can be achieved using customer configuration to drive the mustache template.
* You need to create a [GitHub issues board](dataset-sites.md#step-2-github-issues-board-creation) for each Dataset Site.
* If you are publishing multiple dataset sites you also need to provide a [Data Catalogue](dataset-sites.md#step-3-providing-a-data-catalog-multiple-databases-only).
* Data publishers should be encouraged to provide links to their Dataset Site from their own website.

### What is a Dataset Site?

* A web page that can be referenced when discussing the dataset.
* A human and machine readable licence associated with the data \(the Dataset Site contains invisible metadata which allows its details to be read automatically\).
* A human and machine readable rights statement to specify how dataset users \(innovators who want to build on top of/use your data\) should attribute your data.
* An accessible "single point of truth" that explains where the data can be found.
* Links to documentation relating to the format of the data, including the specifications it follows, and the data fields it contains.
* A place where the community can contribute with comments, and raise issues - all Dataset Sites are linked to a GitHub issues board \(e.g. [this one](https://github.com/gll-better/opendata/issues)\) that allows data users to raise issues in the open.

## Step 1: Build Dataset Sites into your system

The Dataset Site Template is very easy to use and quick to apply - it's essentially a single mustache template and associated JSON structure. It is designed to work with minimal effort with an extremely [wide range of platforms and languages](https://mustache.github.io/).

The[ dataset site template repository](https://github.com/openactive/dataset-site-template) contains a [mustache template](https://www.openactive.io/dataset-site-template/datasetsite.mustache) for creating an OpenActive dataset site.

### Getting Started

The [Dataset Site Template](https://github.com/openactive/dataset-site-template/) is a single self-contained mustache template of an HTML page that contains embedded CSS, an embedded encoded image, and references to CDNs of [Font Awesome](https://fontawesome.com/) and [Google Fonts](https://fonts.google.com/). It works across all browsers, and includes fully compliant DCAT and schema.org machine-readable metadata to ensure it is compatible with [Google Dataset Search](https://toolbox.google.com/datasetsearch/search?query=openactive).

Steps to render the template:

1. Construct the JSON-LD found in [example.json](https://www.openactive.io/dataset-site-template/example.json).
2. Find a [mustache library](https://mustache.github.io/) for your platform or language.
3. Write code to do the following:
   * Stringify the input JSON, and place the contents of the string within the "json" property at the root of the JSON itself \(i.e. serialised JSON embedded in the original deserialised object\).
   * Use the resulting JSON with the [mustache template](https://www.openactive.io/dataset-site-template/datasetsite.mustache) to render the dataset site.
   * Keep in mind that OpenActive will be providing updates to the mustache template in the future, so it is best to write code that anticipates this.

### Personalising the Dataset Site

The Dataset Site Template is designed to carry the customer's brand with minimal configuration.

#### Single database

For booking systems or bespoke websites with a **single database** and one set of OpenActive data feeds, a single Dataset Site is likely to be sufficient for your organisation. This can be achieved by simply hard-coding the JSON passed into the mustache template.

#### Multiple databases

For large booking systems with **multiple databases**, usually a separate database for each customer, the list below illustrates the minimal number of configurable properties that can be used to generate the whole dataset site in a way that is personalised to each customer. See the example [here](https://github.com/openactive/dataset-site-template-example-dotnet/blob/master/DatasetSiteTemplateExample/Program.cs#L39) for how these map into the JSON data structure.

* `organisationName` e.g. "Better",
* `datasetSiteUrl` e.g. "https://halo-odi.legendonlineservices.co.uk/openactive/",
* `discussionUrl` e.g. "https://github.com/gll-better/opendata",
* `documentation` e.g. "https://docs.acmebooker.example.com/",
* `legalEntity` e.g. "GLL",
* `plainTextDescription` e.g. "Established in 1993, GLL is the largest UK-based charitable social enterprise delivering leisure, health and community services. Under the consumer facing brand Better, we operate 258 public Sports and Leisure facilities, 88 libraries, 10 children’s centres and 5 adventure playgrounds in partnership with 50 local councils, public agencies and sporting organisations. Better leisure facilities enjoy 46 million visitors a year and have more than 650,000 members.",
* `email` e.g. "info@better.org.uk",
* `url` e.g. "https://www.better.org.uk/",
* `logoUrl` e.g. "http://data.better.org.uk/images/logo.png",
* `backgroundImageUrl` e.g. "https://data.better.org.uk/images/bg.jpg",
* `baseUrl` e.g. "https://halo-odi.legendonlineservices.co.uk/api/"

We suggest if you can provide the customer with a means of customising the logo and background image \(e.g. via uploading an image to the [cloudinary.com](https://cloudinary.com) CDN, using [their widget](https://jsfiddle.net/nickevansuk/ugpnxmby/), which is free at low volume\), these have the largest effect on the brand feel of the page.

Although the customer will likely be able to fill in most properties specific to them, there are two where they will require guidance:

* `discussionUrl` - the URL of the [GitHub issues board](dataset-sites.md#step-2-github-issues-board-creation) for the dataset.
* `documentation` - as a booking system you should provide at least a single page on your website that explains the OpenActive feeds. Each customer will have the option of providing their own documentation for their dataset site that links to this, or just linking to your documentation direct.

### .NET Example

This [simple console app](https://github.com/openactive/dataset-site-template-example-dotnet) demonstrates the Dataset Site Template render steps outlined above using [OpenActive.NET](https://www.nuget.org/packages/OpenActive.NET/).

{% embed url="https://github.com/openactive/dataset-site-template-example-dotnet" caption="" %}

### JavaScript Example

This [JSFiddle](https://jsfiddle.net/nickevansuk/msby0vqg/) demonstrates the Dataset Site Template render steps outlined above using plain JavaScript.

Please note this is only an example to demonstrate the logic and is not intended for production. The mustache template **must** be rendered server-side as one of its primary purposes is SEO.

Click the **Result** tab below to see the result of a template render.

{% embed url="https://jsfiddle.net/nickevansuk/msby0vqg/" caption="" %}

## Step 2: GitHub Issues Board creation

The `discussionUrl` is the url of the GitHub issues board for that dataset site.

We recommend that you create each repository within your own GitHub organisation either [manually](dataset-sites.md#manually) or via an [API call](dataset-sites.md#automatically). If you "follow" these repositories using a new GitHub account created with your support e-mail address then you will receive notifications for each query, and be able to reply via e-mail to the notifications from your support e-mail address - these replies then appear directly in GitHub. Note that any administrator accounts automatically follow newly created GitHub repositories within your organisation.

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

## Step 3: Providing a Data Catalog \(multiple databases only\)

For large booking systems with **multiple databases**, a Data Catalog must also be provided to allow the many Dataset Sites that are created to be easily indexed by the [OpenActive Status Page](https://status.openactive.io) and other data users.

A Data Catalog is very simply an array of the URLs of all your Dataset Sites \(the `dataset` array\), presented within a `DataCatalog` wrapper following a [specific format](https://schema.org/DataCatalog). An example of a live Data Catalog from the Gladstone system can be found [here](https://opendata.leisurecloud.live/api/datacatalog).



