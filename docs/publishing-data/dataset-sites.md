# Dataset Sites

Dataset Sites help data users to find your data, and interact with you if they find any issues. They are both human and machine readable, and allow your data to appear everywhere from the [OpenActive Status Page](https://status.openactive.io) to the [Google Dataset Search](https://toolbox.google.com/datasetsearch/search?query=openactive).

Example dataset sites: [GLL](http://data.better.org.uk), [Fusion Lifestyle](https://opendata.fusion-lifestyle.com/OpenActive)

## Overview

* In order for data users to find your data feeds, and for your dataset to be featured on the [OpenActive status page](https://status.openactive.io/), you must deploy the [Dataset Site Template](dataset-sites.md#step-1-build-dataset-sites-into-your-system) (a simple mustache template) within your codebase.
* For booking systems or bespoke websites with a **single database** and one set of OpenActive data feeds, a single Dataset Site is likely to be sufficient for your organisation. This can be achieved by simply hard-coding the JSON passed into the mustache template.
* If you are a booking system with **multiple databases**, each of which has their own set of OpenActive data feeds, a Dataset Site is required for each customer. This can be achieved using customer configuration to drive the mustache template.
* You need to create a [GitHub issues board](dataset-sites.md#step-2-github-issues-board-creation) for each Dataset Site.
* If you are publishing multiple dataset sites you also need to provide a [Data Catalog](dataset-sites.md#step-5-providing-a-data-catalog-multiple-databases-only).
* Data publishers should be encouraged to provide links to their Dataset Site from their own website.

### What is a Dataset Site?

* A web page that can be referenced when discussing the dataset.
* A human and machine readable licence associated with the data (the Dataset Site contains invisible metadata which allows its details to be read automatically).
* A human and machine readable rights statement to specify how dataset users (innovators who want to build on top of/use your data) should attribute your data.
* An accessible "single point of truth" that explains where the data can be found.
* Links to documentation relating to the format of the data, including the specifications it follows, and the data fields it contains.
* A place where the community can contribute with comments, and raise issues - all Dataset Sites are linked to a GitHub issues board (e.g. [this one](https://github.com/gll-better/opendata/issues)) that allows data users to raise issues in the open.

{% hint style="warning" %}
A machine-readable dataset site is essential when publishing open data, and every dataset published within the OpenActive community to date has had one. However, the specification that describes a standard OpenActive dataset site is still yet to be formally defined, and has instead evolved as a de facto standard.

As such, this documentation is still based on a [draft model](../data-model/types/dataset.md) that is designed to inform the OpenActive specification work with implementation feedback. It is mostly stable and has been largely unchanged for 2 years. However, it is still **subject to change**, as the [Dataset API Discovery specification](https://www.openactive.io/dataset-api-discovery/EditorsDraft/) is yet to be formally released, and feedback is very welcome, both within the relevant OpenActive [repository](https://github.com/openactive/dataset-api-discovery/issues/) and on the related schema.org [PR](https://github.com/schemaorg/schemaorg/pull/2635) and [issue](https://github.com/schemaorg/schemaorg/issues/1423).

To minimise any uplift work required to conform to the formal specification when it is released, it is **recommended** that you use [one of the libraries below](dataset-sites.md#net-php-and-ruby-libraries) where possible. These libraries will be updated to meet the latest specification, and when used in their simplest mode ([RenderSimpleDatasetSite](https://github.com/openactive/OpenActive.DatasetSite.NET/#simple-implementation), [renderSimpleDatasetSite](https://packagist.org/packages/openactive/dataset-site#user-content-rendersimpledatasetsitesettings-supportedfeedtypes) or [TemplateRenderer.new](https://www.rubydoc.info/gems/openactive-dataset\_site/0.1.1#Usage)) will only require a simple dependency update from you to do so.
{% endhint %}

## Step 1: Build Dataset Sites into your system

The Dataset Site Template is very easy to use and quick to apply - it's essentially one of two mustache templates and an associated JSON structure. It is designed to work with minimal effort with an extremely [wide range of platforms and languages](https://mustache.github.io/).

It works across all browsers, and includes fully compliant DCAT and schema.org machine-readable metadata to ensure it is compatible with [Google Dataset Search](https://toolbox.google.com/datasetsearch/search?query=openactive).

The[ dataset site template repository](https://github.com/openactive/dataset-site-template) contains two mustache template options for creating an OpenActive dataset site.

### Template hosting options

There are two templates available, depending on your use case.

#### Option 1: Single-file template

The [Dataset Site Single-file Template](https://openactive.io/dataset-site-template/datasetsite.mustache) is a self-contained mustache template of an HTML page that contains embedded CSS, two embedded images, and fonts loaded via the CDNs of [Google Fonts](https://fonts.google.com/specimen/Source+Sans+Pro) and [cdnjs (powered by Cloudflare)](https://cdnjs.com/libraries/font-awesome/4.7.0).

1. Use one of the options below to dynamically render the 'single-file template' and output the result at an endpoint, for example `https://example.com/openactive/`.

#### Option 2: CSP compatible template with separate self-hosted static assets

The [Dataset Site CSP Compatible Template](https://openactive.io/dataset-site-template/datasetsite-csp.mustache) is a mustache template of an HTML page that references [self-hosted static assets](https://openactive.io/dataset-site-template/datasetsite-csp.static.zip).  This template must be rendered using a reference to its stylesheet at its self-hosted location. This is useful for implementations that have a [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) in place.

1. Host the [CSP compatible static assets](https://openactive.io/dataset-site-template/datasetsite-csp.static.zip) somewhere on the same domain as your dataset site.
2. Use one of the options below to dynamically render the 'CSP compatible template' ensuring that the `"staticAssetsPathUrl"` references the location of your self-hosted assets, without a trailing slash (`/`) (this can be a relative or absolute URL).
3. Output the result at an endpoint, for example `https://example.com/openactive/`.

### .NET, PHP, Ruby and JavaScript/TypeScript Libraries

Several libraries are available that make it really easy to render either dataset site template, accepting basic settings to configure your dataset site automatically.

The table below lists the available OpenActive libraries:

| Language                | Open Opportunity Data Feeds                                                  | Dataset Site                                                                                                                              |
| ----------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| .NET                    | [OpenActive.NET](https://www.nuget.org/packages/OpenActive.NET/)             | [OpenActive.DatasetSite.NET](https://www.nuget.org/packages/OpenActive.DatasetSite.NET/)                                                  |
| PHP                     | [openactive/models](https://packagist.org/packages/openactive/models)        | [openactive/dataset-site](https://packagist.org/packages/openactive/dataset-site)                                                         |
| Ruby                    | [openactive](https://rubygems.org/gems/openactive)                           | [openactive-dataset\_site](https://rubygems.org/gems/openactive-dataset\_site)                                                            |
| JavaScript / TypeScript | [@openactive/models-ts](https://www.npmjs.com/package/@openactive/models-ts) | [@openactive/dataset-site-template](https://www.npmjs.com/package/@openactive/dataset-site-template)                                      |
| CLI                     | -                                                                            | [npx @openative/dataset-site-template](https://www.npmjs.com/package/@openactive/dataset-site-template#cli-static-dataset-site-generator) |

### Other Languages

A basic example of following the below render steps can be found [here](https://github.com/openactive/dataset-site-template-example-dotnet/blob/master/DatasetSiteTemplateExample/Program.cs), and can be readily ported into other languages. An explanation of how this works is included below.

The [Dataset Site Template](https://github.com/openactive/dataset-site-template/) is one of two mustache templates of an HTML page. It works across all browsers, and includes fully compliant DCAT and schema.org machine-readable metadata to ensure it is compatible with [Google Dataset Search](https://toolbox.google.com/datasetsearch/search?query=openactive).

Steps to render the template:

1. Construct the JSON-LD to match the format found in [this example](https://validator.openactive.io/?url=https%3A%2F%2Fopenactive.io%2Fdataset-site-template%2Fexample.jsonld\&version=2.x\&validationMode=DatasetSite), following [this documentation](../data-model/types/dataset.md).
2. Find a [mustache library](https://mustache.github.io/) for your platform or language.
3. Write code to do the following:
   * Stringify the input JSON, and place the contents of the string within the `"jsonld"` property at the root of the JSON itself (i.e. serialised JSON embedded in the original deserialised object). This is important as it is used to populate the machine-readable `<script type="application/ld+json">` tag within the generated HTML - view the source of [this page](https://reference-implementation.openactive.io/OpenActive) to see an example.
   * If using the [CSP compatible mustache template](dataset-sites.md#option-2-csp-compatible-template-with-separate-static-files), set the `"staticAssetsPathUrl"` property at the root of the JSON to the relative URL of the directory containing your self-hosted assets, without a trailing slash (`/`). Note this must take place **after** the `"jsonld"` property is set above so that this property is not included in the machine-readable JSON-LD.
   * Render the resulting JSON with the [single file mustache template](https://openactive.io/dataset-site-template/datasetsite.mustache) or [CSP compatible mustache template](dataset-sites.md#option-2-csp-compatible-template-with-separate-static-files), to output the HTML of the dataset site.
   * Keep in mind that OpenActive will be providing updates to the mustache templates in the future, so it is best to write code that anticipates this.

#### JavaScript Prototype

The [JSFiddle](https://jsfiddle.net/nickevansuk/msby0vqg/) below **simply demonstrates** the Dataset Site Template render steps outlined above using plain JavaScript - it is **not intended for protection use**.

{% hint style="danger" %}
Please note **this is only an example to demonstrate the logic and is not intended for production use**. The mustache template **must** be **copied locally** and **rendered server-side** for production use, for security (to prevent XSS attacks), and as its primary purposes are SEO and machine readability.
{% endhint %}

Click the **Result** tab below to see the result of a template render.

{% embed url="https://jsfiddle.net/nickevansuk/msby0vqg/" %}

## Step 2: Personalising the Dataset Site

The Dataset Site Template is designed to carry the customer's brand with minimal configuration.

### Single database

For booking systems or bespoke websites with a **single database** and one set of OpenActive data feeds, a **single Dataset Site** is likely to be sufficient for your organisation. This can be achieved by simply hard-coding the JSON passed into the mustache template (see [documentation](../data-model/types/dataset.md) and [example](https://validator.openactive.io/?url=https%3A%2F%2Fopenactive.io%2Fdataset-site-template%2Fexample.jsonld\&version=2.x\&validationMode=DatasetSite)), or hard-coding the settings passed to the library (see the [relevant library documentation](dataset-sites.md#net-php-and-ruby-libraries)).

Note a single Dataset Site must only be used when all feeds it includes are part of the same dataset - for example a SessionSeries feed and ScheduledSession feed that together constitute the dataset of all providers in the booking system. Where multiple feeds exist that represent distinct datasets (e.g. SessionSeries feed for Provider A, SessionSeries feed for Provider B), they must be referenced from distinct Dataset Sites, which can be constructed as per the instructions in [Multiple databases](dataset-sites.md#multiple-databases) below.

### Multiple databases

For large booking systems with **multiple databases**, usually a separate database for each customer, a **separate Dataset Site** may be created for each database. The list below illustrates the minimal number of configurable properties that can be used to generate the whole dataset site in a way that is personalised to each customer. See the example [here](https://github.com/openactive/OpenActive.DatasetSite.NET#model-level-customisation) for how these map into the JSON data structure, for your reference - in practice the [libraries](dataset-sites.md#net-php-and-ruby-libraries) supplied above [take care of this mapping for you](https://github.com/openactive/OpenActive.DatasetSite.NET#simple-implementation).

* `organisationName` e.g. "Better",
* `datasetSiteUrl` e.g. "[https://halo-odi.legendonlineservices.co.uk/openactive/](https://halo-odi.legendonlineservices.co.uk/openactive/)",
* `datasetDiscussionUrl` e.g. "[https://github.com/gll-better/opendata](https://github.com/gll-better/opendata)",
* `datasetDocumentationUrl` e.g. "[https://permalink.openactive.io/dataset-site/open-data-documentation](https://permalink.openactive.io/dataset-site/open-data-documentation)"  (which should be used if no system-specific documentation is available)
* `organisationLegalEntity` e.g. "GLL"
* `organisationPlainTextDescription` e.g. "Established in 1993, GLL is the largest UK-based charitable social enterprise delivering leisure, health and community services. Under the consumer facing brand Better, we operate 258 public Sports and Leisure facilities, 88 libraries, 10 children’s centres and 5 adventure playgrounds in partnership with 50 local councils, public agencies and sporting organisations. Better leisure facilities enjoy 46 million visitors a year and have more than 650,000 members."
* `organisationEmail` e.g. "info@better.org.uk"
* `organisationUrl` e.g. "[https://www.better.org.uk/](https://www.better.org.uk/)",
* `organisationLogoUrl` e.g. "[http://data.better.org.uk/images/logo.png](http://data.better.org.uk/images/logo.png)"
* `backgroundImageUrl` e.g. "[https://data.better.org.uk/images/bg.jpg](https://data.better.org.uk/images/bg.jpg)"
* `openDataFeedBaseUrl` e.g. "[https://halo-odi.legendonlineservices.co.uk/api/](https://halo-odi.legendonlineservices.co.uk/api/)"
* `openBookingAPIBaseUrl` e.g. "[https://reference-implementation.openactive.io/api/openbooking](https://reference-implementation.openactive.io/api/openbooking)"&#x20;
* `openBookingAPIAuthenticationAuthorityUrl` e.g. "[https://auth.reference-implementation.openactive.io](https://auth.reference-implementation.openactive.io)"
* `openBookingAPIDocumentationUrl` e.g. "[https://permalink.openactive.io/dataset-site/open-booking-api-documentation](https://permalink.openactive.io/dataset-site/open-booking-api-documentation)" (which should be used if no system-specific documentation is available)
* `openBookingAPITermsOfServiceUrl` e.g. "[https://example.com/api-terms](https://example.com/api-terms)"
* `openBookingAPIRegistrationUrl` e.g. "[https://example.com/api-landing-page](https://example.com/api-landing-page)"

We suggest if you can provide the customer with a means of customising the logo and background image (e.g. via uploading an image to the [cloudinary.com](https://cloudinary.com) CDN, using [their widget](https://jsfiddle.net/nickevansuk/ugpnxmby/), which is free at low volume), these have the largest effect on the brand feel of the page.

Although the customer will likely be able to fill in most properties specific to them, there are two where they will require guidance:

* `datasetDiscussionUrl` - the URL of the [GitHub issues board](dataset-sites.md#step-2-github-issues-board-creation) for the dataset. If your customers are sufficiently large, you will need to create a GitHub issues board for each customer, either [manually](dataset-sites.md#manual-issues-board-creation) or [automatically](dataset-sites.md#automatic-issues-board-creation). See [here](https://github.com/gladstonemrm) for an example of Gladstone's GitHub organization containing a GitHub issues board for each customer.
* `datasetDocumentationUrl` - as a booking system you should provide at least a single page on your website that explains the OpenActive feeds. Each customer may have the option of providing their own documentation for their dataset site that links to this, or just linking to your documentation direct. If you do not have your own documentation page, you can just link to "[https://developer.openactive.io/](https://developer.openactive.io/)".

## Step 3: Open Booking API configuration

For Open Booking API implementations the following settings warrant additional consideration.

### Registration Landing Page

{% hint style="info" %}
This is set by `openBookingAPIRegistrationUrl` (in library settings) or `accessService.landingPage` (in raw Dataset JSON-LD) &#x20;
{% endhint %}

This must link to a page where developers can request access to your Open Booking API, ideally both to a sandbox and live environment.

{% hint style="info" %}
In addition to access to your live environment, this page should also include a means of accessing a sandbox to support testing of your Open Booking APIs, to ensure that developers have the freedom to test their code in a safe environment. Such a sandbox should include its own Dataset Site akin to that of the live environment.
{% endhint %}

Where the dataset site represents data from multiple Sellers ("multi-seller systems"), the Booking System must offer a mechanism for Broker to provision a new Client ID and Client Secret (see [multi-seller authentication](https://openactive.io/open-booking-api/EditorsDraft/1.0CR3/#openid-connect-booking-partner-authentication-for-multiple-seller-systems)). It is recommended that such a process is automated, with a form similar to the below:

> **Open Booking API Access Request Form (Multi-seller systems)**
>
> Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
>
> Email: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
>
> Organisation name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
>
> ☑️ I understand our data protection obligations, and our technical obligations as a Broker as specified in the [Open Booking API](https://openactive.io/open-booking-api/EditorsDraft/1.0CR3) specification
>
> ☑️ Our organisation holds a valid [Cyber Essentials](https://www.gov.uk/government/publications/cyber-essentials-scheme-overview) (or equivalent) certification and we understand our information security obligations
>
> ☑️ Our organisation has already successfully integrated with the [OpenActive Reference Implementation](https://reference-implementation.openactive.io/), and understands how an OpenActive integration works
>
> ☑️ I agree to integrate with Sellers only with their explicit consent as granted via OpenID Connect, and understand that access to the Booking System does not guarantee access to Sellers, which is at their own individual discretion.
>
> ☑️ I understand that payment reconciliation must be agreed with each seller individually.

Where the dataset site represents data from only a single Seller ("single-seller systems"), the Seller must offer a mechanism for Broker to request a new API key. This could be as simple as a Google Form or TypeForm, or could also be automated, with a form similar to the below:

> **Open Booking API Access Request Form (Single-seller systems)**
>
> Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
>
> Email: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
>
> Phone number: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
>
> Organisation name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
>
> Use case and business case for integration: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
>
> ☑️ I understand our data protection obligations, and our technical obligations as a Broker as specified in the [Open Booking API](https://openactive.io/open-booking-api/EditorsDraft/1.0CR3) specification
>
> ☑️ Our organisation holds a valid [Cyber Essentials](https://www.gov.uk/government/publications/cyber-essentials-scheme-overview) (or equivalent) certification and we understand our information security obligations
>
> ☑️ Our organisation has already successfully integrated with the [OpenActive Reference Implementation](https://reference-implementation.openactive.io/), and understands how an OpenActive integration works

### Terms of Service

{% hint style="info" %}
This is set by `openBookingAPITermsOfServiceUrl` (in library settings) or `accessService.termsOfService` (in raw Dataset JSON-LD)
{% endhint %}

It is important that the terms and conditions and usage restrictions that apply to use of your Open Booking API are well documented so that third-party developers can easily integrate with your platform and understand their rights and responsibilities.

If you have any standard terms of service or usage restrictions that apply to your API, ensure that these are easily accessible from the URL referenced by this property. If not, ensure that this property is omitted entirely.

### Test Suite Certificate

{% hint style="info" %}
This is set by `testSuiteCertificateUrl` (in library settings) or `bookingService.hasCredential` (in raw Dataset JSON-LD)
{% endhint %}

This must be a link to a self-hosted OpenActive Test Suite Certificate that has been generated for the **specific software version** of the Booking System to which the dataset site is associated.

For cloud-based SaaS systems that operate a single version, this is best achieved by running the [OpenActive Test Suite as part of any continuous integration process](../open-booking-api/test-suite/#continuous-integration), and deploying the resulting certificate as part of any existing deployment process (e.g. via [GitHub CI](https://github.com/openactive/OpenActive.Server.NET/blob/b66ba4172f4d839866729808ada30d8b9bafce54/.github/workflows/openactive-test-suite.yml#L105-L112)). `platformSoftwareVersion` in library settings, or `bookingService.softwareVersion` in raw Dataset JSON-LD should be omitted in this case.

For on-premise systems or systems with separately installed instances, this can be achieved by generating and hosting a new certificate for each version released, with the certificate's path based on the software version. The correct version of the certificate can then be referenced within the dataset site based on the software version of the instance. In this case, the version number should also be included in `platformSoftwareVersion` in library settings, or `bookingService.softwareVersion` in Dataset JSON.

## Step 4: GitHub Issues Board creation

The `discussionUrl` is the url of the GitHub issues board for that specific dataset site.

We recommend that you create each GitHub repository (that will include a GitHub Issues Board) within your own GitHub organisation either [manually](dataset-sites.md#manually) or via an [API call](dataset-sites.md#automatically).

If you have:

* **A Single database**, you need only create one GitHub Repository (that will include a "GitHub Issues Board") within your GitHub Organisation. It is recommended that this GitHub repository is named `openactive`.
* **Multiple databases**, you should create one GitHub Repository (that will include a "GitHub Issues Board") _for each customer_. It is recommended that the names of these repositories correspond with the names of the customers.

### Helpdesk integration

If you "follow" these GitHub repositories using a new GitHub account created with your support e-mail address then you will receive notifications for each query, and be able to reply via e-mail to the notifications from your support e-mail address - these replies then appear directly in GitHub. Note that any administrator accounts automatically follow newly created GitHub repositories within your organisation.

### GitHub Organisation Creation

You must first [create a parent GitHub organisation](https://help.github.com/en/articles/creating-a-new-organization-from-scratch) on the free tier:

* For booking systems we recommend naming the parent GitHub organisation after your own organisation
* For agencies or in-house tech teams we recommend naming parent GitHub organisation after your data publishing organisation.

### Manual GitHub Repository / Issues Board Creation

A guide for creating a new GitHub repository for each customer can be found below.

{% embed url="https://docs.google.com/document/d/1GO4HLYgrwpXH_qxVuaAWXw_HIr2Hn4KB7cl973Q1M4M/edit" %}

### Automatic GitHub Repository / Issues Board Creation

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

## Step 5: Validating your Dataset Site

Use the [validator](https://validator.openactive.io/?url=https%3A%2F%2Fopenactive.io%2Fdataset-site-template%2Fexample.jsonld\&version=2.x\&validationMode=DatasetSite) to check that the JSON-LD within your Dataset Site is conformant, by using the **Load URL** feature in the menu to load your **Dataset Site URL**, while in the "Dataset Sites" mode. The validator will automatically extract the JSON-LD from your Dataset Site's HTML and validate it.

{% embed url="https://validator.openactive.io/?url=https://openactive.io/dataset-site-template/example.jsonld&validationMode=DatasetSite&version=2.x" %}

## Step 6: Providing a Data Catalog (multiple databases only)

For booking systems with **multiple databases**, a Data Catalog must also be provided to allow the many Dataset Sites that are created to be easily indexed by the [OpenActive Status Page](https://status.openactive.io) and other data users.

A Data Catalog is very simply an array of the URLs of all your Dataset Sites (the `dataset` array), presented within a `DataCatalog` wrapper following a [specific format](../data-model/types/datacatalog.md). An example of a live Data Catalog from the Gladstone system can be found [here](https://opendata.leisurecloud.live/api/datacatalog), and another example [here](https://validator.openactive.io/?url=https%3A%2F%2Fopenactive.io%2Fdata-catalogs%2Fsingular.jsonld\&version=2.x\&validationMode=DataCatalog).

Please use the [validator](https://validator.openactive.io/?url=https%3A%2F%2Fopenactive.io%2Fdata-catalogs%2Fsingular.jsonld\&version=2.x\&validationMode=DataCatalog) to check that your `DataCatalog` is conformant, using the "Data Catalog" mode.

## Step 7: Adding your Dataset Site or Data Catalog to the OpenActive Data Catalog Collection

OpenActive Data Catalogs provide a mechanism for registering OpenActive Datasite Sites so that they can be [discovered and harvested](https://www.openactive.io/data-catalogs/) by data users.

### Single database

If you have created a new Dataset Site, simply create a [Pull Request for the OpenActive Data Catalog for Singular Datasets](https://github.com/openactive/data-catalogs/edit/master/singular.jsonld) and add your Dataset Site's production URL to the `dataset` array.

The pull request will trigger GitHub Actions to run the OpenActive Test Suite to validate the live feeds within dataset. OpenActive Test Suite validation must pass before the PR can be merged.

To force the validation to re-run, please submit an empty commit to the PR:

```
git commit --allow-empty -m "trigger GitHub actions"
git push
```

The OpenActive Test Suite can be used to run the same test locally, [as shown here](data-feeds/testing-feeds.md#openactive-test-suite).&#x20;

### Multiple databases

If you have created a new Data Catalog that links to your Dataset Sites, simply create a [Pull Request for the OpenActive Data Catalog Collection](https://github.com/openactive/data-catalogs/edit/master/data-catalog-collection.jsonld) and add your Data Catalog's production URL to the `hasPart` array.
