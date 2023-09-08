# Harvesting opportunity data

## Libraries

Although the logic to harvest and use OpenActive data is straightforward, there are several libraries that provide helpers to aid the consumption of opportunity data feeds.

The table below lists these libraries:

<table><thead><tr><th width="248">Language</th><th width="244.33333333333331">Dataset Discovery</th><th>Harvesting Feeds</th></tr></thead><tbody><tr><td>JavaScript / TypeScript</td><td><a href="https://github.com/openactive/dataset-utils">@openactive/dataset-utils</a></td><td>N/A</td></tr><tr><td>Python</td><td>Coming soon</td><td>Coming soon</td></tr><tr><td>Ruby</td><td><a href="https://github.com/openactive/openactive.rb">openactive.rb</a> *</td><td><a href="https://github.com/openactive/openactive.rb">openactive.rb</a></td></tr></tbody></table>

&#x20;\* Note that the Ruby library [requires updating](https://github.com/openactive/openactive.rb/issues/13) before it can be used for dataset discovery

## Dataset discovery

As described in the data catalogue [processing guidance](https://github.com/openactive/data-catalogs#processing-guidance), OpenActive datasets can be discovered automatically by "spidering" links within the canonical [OpenActive Data Catalog Collection JSON-LD](https://openactive.io/data-catalogs/data-catalog-collection.jsonld) file.

```mermaid
flowchart LR
  DCC["OpenActive Data Catalog Collection JSON-LD"]
  DC["Data Catalog JSON-LD"]
  DS["Dataset Site JSON-LD<br>(embedded in HTML)"]
  F["Feed URL"]
  DCC -. hasPart .-> DC -. dataset .-> DS -. distribution .-> F
```

## Harvesting feeds

### Considerations

* Combining feed pairs
  * Ensure that updates and deletes from both parent and child feeds are considered (such as SessionSeries/ScheduledSession or FacilityUse/Slot - see [Types of RPDE feed](../publishing-data/data-feeds/types-of-feed.md) for more information)
* Harvest frequency
  * To ensure your resources are not wasted, especially as you scale feed consumption, ensure that [sleep and live](../publishing-data/data-feeds/scaling-feeds.md#sleep-mode) modes are respected (i.e. wait 8 seconds if there are no items in the feed before making the next request). Due to caching, more frequent requests will simply hit a CDN and return the same response, so there is no advantage in polling faster than this.
* De-serializing RPDE Feeds:
  * Ensure that the data type used to de-serialize the `modified` timestamp can support signed 64-bit integers. [More info here](harvesting-opportunity-data.md#storing-rpde-modified-with-less-than-64-bit-integers).
* Resyncs
  * Consuming an RPDE feed from the beginning is termed a "resync".
  * RPDE feeds are not designed to be resynced frequently.
  * The feed consumer must continue to consume updates from the end of the feed to ensure the data stays up-to-date, rather than downloading all data from each update.
  * Resyncing any individual feed more than once each week is not recommended, as it increases the load on the open data publisher's servers, which will likely result in a high number of 429 responses and could cause your IP address to be blacklisted.

### Common Pitfalls

#### Storing RPDE \`modified\` with less than 64-bit integers

A common approach to creating `modified` values for an RPDE feed is to use SQL Server's `timestamp`/`rowversion` data types. This approach is suggested in the [RPDE specification](https://openactive.io/realtime-paged-data-exchange/#incrementing-unique-change-number).

This data type has been seen to generate integers up to values of 2⁶⁰.

Therefore, it is recommend to implementers to use data types that can store at least a signed 64-bit integer with precision.

Language specific guidelines:

* **JavaScript / TypeScript**: Use a [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/BigInt).
  * JavaScript [numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Number) are 64-bit floating point numbers, which means that integers cannot be represented with sufficient precision beyond 2⁵³.
  * [The MDN article on BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/BigInt) advises using the `reviver` parameter of `JSON.parse(..)` to parse JSON that contains big integers. **This is necessary to read RPDE data without losing precision** on `modified` values and therefore potentially experiencing data loss. This is how that would look:

```javascript
const reviver = (key, value) => (key === "modified" ? BigInt(value) : value);

const payload = '["items": [{"modified": 18014398509481982, ...';
const parsed = JSON.parse(payload, reviver);
```

* **C#**: Use a `long` as opposed to an `int`
* **Other languages**: Ensure that the integer type that is being used to de-serialize the `modified` timestamps from RPDE feed pages has at least as much size and precision as a signed 64-bit integer.
