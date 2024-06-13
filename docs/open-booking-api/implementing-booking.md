# Implementing booking

{% hint style="warning" %}
Implementations of the Open Booking API are currently being developed through collaboration within the OpenActive technical community. This is especially important so that the current development work on the [OpenActive Test Suite](test-suite/) can take into account feedback from real implementations. Please see the [#openactive-test-suite slack channel for more information](https://slack.openactive.io/).

If you’re interested in implementing the Open Booking API, then please [get in touch](https://bookwhen.com/openactive) and announce yourself on the `#implementation-forum` [Slack channel](https://slack.openactive.io/).
{% endhint %}

## Prerequisites for Open Booking API

In order to build the Open Booking API, you must first have built both [Open Opportunity Data Feeds](../publishing-data/data-feeds/), and created a [Dataset Site](../publishing-data/dataset-sites.md).

## Implementation guidance

For .NET, a full implementation tutorial is available: [https://tutorials.openactive.io/open-booking-sdk/](https://tutorials.openactive.io/open-booking-sdk/).

For other languages, it is best to use the [Open Booking API CR3](https://openactive.io/open-booking-api/EditorsDraft/1.0CR3/) specification as an implementation reference.

### .NET, PHP and Ruby Libraries

Several libraries are available that greatly simplify implementation of the Open Booking API.

The table below lists the available OpenActive libraries:

<table data-header-hidden><thead><tr><th width="225">Library</th><th>.NET</th><th>PHP</th><th>Ruby</th></tr></thead><tbody><tr><td>Library</td><td><a href="https://docs.microsoft.com/en-us/dotnet/standard/net-standard">.NET</a></td><td><a href="https://www.php.net/releases/5_4_0.php">PHP</a></td><td><a href="https://www.ruby-lang.org/en/">Ruby</a></td></tr><tr><td>Booking Request/Response Serialisation and Deserialisation</td><td><a href="https://www.nuget.org/packages/OpenActive.NET/">OpenActive.NET</a></td><td><a href="https://packagist.org/packages/openactive/models">openactive/models</a></td><td><a href="https://rubygems.org/gems/openactive">openactive</a></td></tr><tr><td>Open Booking SDK</td><td><a href="https://github.com/openactive/OpenActive.Server.NET">OpenActive.Server.NET</a></td><td>N/A</td><td>N/A</td></tr></tbody></table>

