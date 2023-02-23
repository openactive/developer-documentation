---
description: This page describes the DataDownload type.
---

# DataDownload

## **EARLY RELEASE NOTICE**

This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.

This type is derived from [https://schema.org/DataDownload](https://schema.org/DataDownload), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Required properties**

| Property           | Expected Type                     | Description                                                                                                                                                                                                      |
| ------------------ | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@type**          | [`Text`](https://schema.org/Text) | Must always be present and set to `"@type": "DataDownload"`                                                                                                                                                      |
| **additionalType** | [`URL`](https://schema.org/URL)   | <p>A fully qualified reference to the class that is at the root of the items in the RPDE feed.</p><p><br><strong>Example</strong></p><p><code>"additionalType": "https://openactive.io/SessionSeries"</code></p> |
| **contentUrl**     | [`URL`](https://schema.org/URL)   | <p>The URL of the RPDE data feed.</p><p><br><strong>Example</strong></p><p><code>"contentUrl": "https://opendata.leisurecloud.live/api/feeds/fusion-lifestyle-fl-live-session-series"</code></p>                 |
| **encodingFormat** | [`Text`](https://schema.org/Text) | Must always be present and set to `"encodingFormat": "application/vnd.openactive.rpde+json; version=1"`                                                                                                          |
| **name**           | [`Text`](https://schema.org/Text) | <p>The name of the type of feed</p><p><br><strong>Example</strong></p><p><code>"name": "SessionSeries"</code></p>                                                                                                |

### **Optional properties**

| Property       | Expected Type                     | Description                                                                                                                               |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **identifier** | [`Text`](https://schema.org/Text) | <p>A local non-URI identifier for the resource</p><p><br><strong>Example</strong></p><p><code>"identifier": "ScheduledSession"</code></p> |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
