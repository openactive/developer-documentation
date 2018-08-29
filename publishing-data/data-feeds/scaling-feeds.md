---
description: >-
  RPDE is compatible with edge-caching and CDNs. This page provides guidance on
  using caching to scale feeds.
---

# Scaling feeds

## Approach to Scale

A CDN such as [CloudFlare](https://www.cloudflare.com/) is recommended to allow your RPDE endpoint to scale to millions of requests inbound. 

## CDN Configuration

A CDN is simple to configure and requires a small amount of additional code within the RPDE endpoint.

#### Basic Configuration

The following CDN configuration options are recommended:

* Configure the CDN to "Pass through and respect cache TTL headers" instead of overriding
* In the application, vary the cache headers for RPDE pages as follows:
  * For all pages which contain greater than zero items, return a TTL of "60 minutes":
    * `Cache-Control: max-age=3600`
  * For the last page, which contains zero items, return a TTL of "10 seconds":
    * `Cache-Control: max-age=10`

## Worked Example

The settings in the CDN Configuration section will create the behaviour described in this worked example automatically:

#### Scenario

* In this scenario, 200 data consumers are tracking the RPDE feed by polling at the end of the list \(the last `next` URL\).
* Although each data consumer can choose a polling frequency arbitrarily, that frequency is not relevant to the calculations here, as it is the settings of the cache header that dictate the load on the origin server. It should also be noted that the number of data consumers also does not impact the load on the origin server, and that 200 is used illustratively.
* When the last page is requested, the first consumer would request the live page \(creating one hit on the origin server\), and the subsiquent 199 data consumers would receive a cached version. 

**"Sleep" mode**

* For a feed whose source data is not being updated, the origin server receives one hit every 10 seconds and returns an empty list of `items` each time, and an identical `next` URL.
* Hence the maximum load during "Sleep" mode is 6 requests/minute.

#### "Live" mode

* When an update to source data occurs, one of the 10-second interval requests will render a list of items and a new `next` URL.
* The `items` list is rendered once by the origin server, and the subsiquent 199 data consumers would receive a cached version.
* All 200 data consumers will follow the same next URL, and again the first request will be cached for the other 199 data consumers.
* Hence the maximum load during "Live" mode is bounded by the response time of the "last" page, as the CDN will queue the requests from other data consumers waiting for this page. If the origin server is under high general load from other services, and the response time of the last page is increased,  then the queue waits. This avoids a large number of data consumers adversely affecting the origin server performance during times of peak general load.

