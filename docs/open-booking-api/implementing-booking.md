# Implementing booking

{% hint style="warning" %}
Implementations of the Open Booking API are currently being developed through collaboration within the OpenActive technical community. This is especially important so that the current development work on the [OpenActive Test Suite](test-suite.md) can take into account feedback from real implementations. Please see the [\#openactive-test-suite slack channel for more information](https://slack.openactive.io/).

If you’re interested in implementing the Open Booking API, then please [get in touch](https://bookwhen.com/openactive) with the OpenActive technical team at the ODI.
{% endhint %}

## Prerequisites for Open Booking API

In order to build the Open Booking API, you must first have built both [Open Opportunity Data Feeds](../publishing-data/data-feeds/), and created a [Dataset Site](../publishing-data/dataset-sites.md).

## Implementation guidance

For .NET, a full implementation tutorial is available: [https://tutorials.openactive.io/open-booking-sdk/](https://tutorials.openactive.io/open-booking-sdk/).

For other languages, it is best to use the [Open Booking API CR2](https://openactive.io/open-booking-api/EditorsDraft) specification as an implementation reference.

### .NET, PHP and Ruby Libraries

Several libraries are available that greatly simplify implementation of the Open Booking API.

The table below lists the available OpenActive libraries:

| Library | [.NET](https://docs.microsoft.com/en-us/dotnet/standard/net-standard) | [PHP](https://www.php.net/releases/5_4_0.php) | [Ruby](https://www.ruby-lang.org/en/) |
| :--- | :--- | :--- | :--- |
| Booking Request/Response Serialisation and Deserialisation | [OpenActive.NET](https://www.nuget.org/packages/OpenActive.NET/) | [openactive/models](https://packagist.org/packages/openactive/models) | [openactive](https://rubygems.org/gems/openactive) |
| Open Booking SDK | [OpenActive.Server.NET](https://github.com/openactive/OpenActive.Server.NET) | N/A | N/A |



