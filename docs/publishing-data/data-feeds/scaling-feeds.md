# Scaling RPDE feeds

## Approach to Scale

A retention period should be applied to your data, so that sessions in the past are removed from the feed, while respecting the [RPDE invariants](https://www.w3.org/2017/08/realtime-paged-data-exchange/#core-concept).

A CDN such as [CloudFlare](https://www.cloudflare.com/) is recommended to allow your RPDE endpoint to scale to millions of requests inbound.

## Retention Period

In order to minimise the total number of items within of RPDE feeds, it is recommended that data publishers apply a retention period - especially for `Event,` `ScheduledSession` or `Slot` data items.

The [Realtime Paged Data Exchange specification](https://www.w3.org/2017/08/realtime-paged-data-exchange/#deleted-items) specifies that:

> If any record is added to the list or updated it must remain in the list in perpetuity while it is in an "updated" state, or remain in the list for at least 7 days from the point in time at which it transitioned to a "deleted" state

{% hint style="info" %}
The [high-volume proposal](https://github.com/openactive/realtime-paged-data-exchange/issues/93) for the RPDE specification is currently widely adopted, and hence it is recommended that `Slot` feeds that have a particularly high volume of small payload items wait 2 days before removing `"deleted"` items from the feed, in place of the specified 7 days.
{% endhint %}

### Option 1: Retention period to minimise storage requirements

If the objective of implementing a retention period is primarily to reduce the number of records stored, records representing events that occur in the past should be pruned by:

* First setting their [`state` to the `"deleted"` state and updating the `modified` value](https://www.w3.org/2017/08/realtime-paged-data-exchange/#deleted-items).
* Then after 7 days removing them from the feed.

This may be implemented via a regular CRON job, for example.

{% hint style="danger" %}
Simply filtering out or removing opportunities from the feed that are in the past is not sufficient, because any opportunity that is edited to have a `startDate` in the past would then disappear from the feed without first transitioning into the [`"deleted"` state](https://www.w3.org/2017/08/realtime-paged-data-exchange/#deleted-items) with an updated `modified` value. Hence the previous version of such a record would live on forever in the downstream applications.
{% endhint %}

### Option 2: Retention period to reduce feed size

If the objective of implementing a retention period is primarily to reduce the size of the feed, an effective retention period can be implemented by having the first page of the feed start from the first relevant record (instead of from the beginning of time). This approach is useful for simple cases where a CRON job is not desirable.

The approach can be implemented as follows: if the `@afterTimestamp` and `@afterId` parameters are **not** supplied to the RPDE endpoint (i.e. for the first page), use the query below to try to get the `@firstTimestamp` and `@firstId` and use these as default values:

```sql
-- Execute ONLY if @afterTimestamp and @afterId NOT provided
  SELECT @firstTimestamp = modified, @firstId = id
    FROM ...
   WHERE startDate >= @now AND state <> "deleted"
ORDER BY modified, id
   LIMIT 1
```

For the first page only (where `@afterTimestamp` and `@afterId` parameters are **not** supplied), these default values are included within the `WHERE` clause of the RPDE query as below, with a slight change to the operands such that **`id >= @firstId`** to ensure the default value itself is included in the feed.

For the first page, if no default values are returned, the RPDE query must exclude the `WHERE` clause as per the [specification](https://www.openactive.io/realtime-paged-data-exchange/#sql-query-example-for-timestamp-id), and return results from the beginning of time.

Hence the query either uses:

* For the first page: the default values supplied from the query above or otherwise returns results from the beginning of time
* For all other pages: the values supplied by the parameters

```sql
-- Include this WHERE clause only if @afterTimestamp and @afterId
-- are NOT provided (first page), and if default values are available
   WHERE (modified = @firstTimestamp AND id >= @firstId)
      OR (modified > @firstTimestamp)
-- Include this WHERE clause only if @afterTimestamp and @afterId
-- are provided (not first page)
   WHERE (modified = @afterTimestamp AND id > @afterId)
      OR (modified > @afterTimestamp)
-- If @afterTimestamp and @afterId not provided, and default values
-- are not available, do not include WHERE clause
ORDER BY modified, id
```

To further reduce the number of records in the feed, any record for an opportunity in the past can be rendered as `"deleted"` in the feed without any change to the `updated` value (note the record **must not** be removed from the feed). This means that records representing past opportunities are effectively frozen after they have occurred, and by default will live on forever in downstream applications. If the record is edited, the `modified` value must still be updated, at which point the record will be removed from downstream applications, to ensure historical accuracy.

{% hint style="info" %}
Alternative approaches for implementing this option are available in [this proposal](https://github.com/openactive/realtime-paged-data-exchange/issues/96). Feedback and thoughts very welcome.
{% endhint %}

## CDN Configuration

A CDN is simple to configure and requires a small amount of additional code within the RPDE endpoint.

Note that in order for the CDN to be effective your application **should not** implement the [optional `limit` parameter specified in the RPDE specification](https://www.w3.org/2017/08/realtime-paged-data-exchange/#modified-timestamp-and-id).

### Basic Configuration

The following CDN configuration options are recommended:

* Configure the CDN to "Pass through and respect cache TTL headers" instead of overriding
* In the application, vary the cache headers for RPDE pages as follows:
  * For all pages which contain greater than zero items, return a TTL of "60 minutes":
    * `Cache-Control: public, max-age=3600`
  * For the last page, which contains zero items, return a TTL of "8 seconds":
    * `Cache-Control: public, max-age=8`

### Worked Example

The settings in the CDN Configuration section will create the behaviour described in this worked example automatically:

#### Scenario

* In this scenario, 200 data consumers are tracking the RPDE feed by polling at the end of the list (the last `next` URL).
* Although each data consumer can choose a polling frequency arbitrarily, that frequency is not relevant to the calculations here, as it is the settings of the cache header that dictate the load on the origin server. It should also be noted that during normal operation the number of data consumers also does not impact the load on the origin server, and that 200 is used illustratively.
* When the last page is requested, the first consumer would request the live page (creating one hit on the origin server), and the subsiquent 199 data consumers would receive a cached version.

#### **"Sleep" mode**

* For a feed whose source data is not being updated, the origin server receives one hit every 8 seconds and returns an empty list of `items` each time, and an identical `next` URL.
* Hence the maximum load during "Sleep" mode is 8 requests/minute.

#### "Live" mode

* When an update to source data occurs, one of the 8-second interval requests will render a list of items and a new `next` URL.
* The `items` list is rendered once by the origin server, and the subsiquent 199 data consumers would receive a cached version.
* All 200 data consumers will follow the same next URL, and again the first request will be cached for the other 199 data consumers.
* Hence the maximum load during "Live" mode is bounded by the response time of the "last" page, as the CDN will queue the requests from other data consumers waiting for this page. If the origin server is under high general load from other services, and the response time of the last page is increased, then the queue waits. This avoids a large number of data consumers adversely affecting the origin server performance during times of peak general load.

#### Resyncs and rate limits

If a data consumer decides to "resync" their data from the beginning of your feed, this will result in a temporary increase in request volume, as not all the pages earlier in the feed will still be cached in the CDN. This is not a frequent occurrence, however to ensure your system is protected from excessive requests, a rate limit behind your CDN of 10 requests/second is recommended.

### CloudFlare Walkthrough

In order for [CloudFlare](https://www.cloudflare.com/) to respect your cache control headers, there are five simple steps to follow:

#### 1) Set up CloudFlare as your DNS provider and proxy

After you've [set up CloudFlare](https://support.cloudflare.com/hc/en-us/categories/200275218-Getting-Started) as your DNS provider, check requests are being routed through CloudFlare by enabling the orange cloud button.

#### 2) Set up a page rule with a wildcard that covers your feeds

Use the wildcards to ensure the rule covers all your feeds, for example:

```
*opendata.example.com/api/feeds/*
```

The page rule should have the following configuration:

* **Cache Level:** Everything
* **Origin Cache Control**: On
* **SSL:** Flexible (if you do not have SSL configured on your own server)

#### 3) Set Browser Cache Expiration to Respect Existing Headers

On the Caching configuration page, ensure that following is set:

* **Browser Cache Expiration:** Respect Existing Headers

![](<../../.gitbook/assets/screenshot-2019-01-29-at-23.03.35-1 (2) (1) (1) (1) (2) (4).png>)

#### 4) Ensure that your feed does not inadvertently set any cookies

Ensure that your web application or web server infrastructure does not set any cookies on the feed pages (for example load balancer [affinity cookies](https://azure.microsoft.com/en-gb/blog/disabling-arrs-instance-affinity-in-windows-azure-web-sites/)), as these will prevent CloudFlare from caching pages.

#### 5) Test your configuration

Inspect the headers returned by your page to see if CloudFlare is successfully caching your feed.

A successfully cached page will return the following header:

* **cf-cache-status: HIT**

### Further information

The following articles will help you dive deeper into this in case you have any issues:

* [Understanding and Configuring Cloudflare Page Rules (Page Rules Tutorial)](https://support.cloudflare.com/hc/en-us/articles/218411427-Understanding-and-Configuring-Cloudflare-Page-Rules-Page-Rules-Tutorial-)
* [How Do I Tell Cloudflare What to Cache?](https://support.cloudflare.com/hc/en-us/articles/202775670-How-Do-I-Tell-Cloudflare-What-to-Cache-)
* [Origin Cache-Control](https://support.cloudflare.com/hc/en-us/articles/115003206852-Origin-Cache-Control)
* [What do the various Cloudflare cache responses (HIT, Expired, etc.) mean?](https://support.cloudflare.com/hc/en-us/articles/200168266-What-do-the-various-Cloudflare-cache-responses-HIT-Expired-etc-mean-)
* [View HTTP headers in Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/network-performance/reference#headers)
