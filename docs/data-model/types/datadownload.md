---
description: This page describes the DataDownload type.
---

# DataDownload

## **EARLY RELEASE NOTICE**
In order to expedite the OpenActive tooling work, this class has been added to the model for the purposes of testing.
IT IS SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://www.openactive.io/dataset-api-discovery/EditorsDraft/) evolves.

This type is derived from [https://schema.org/DataDownload](https://schema.org/DataDownload), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Required properties**
    
<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Expected Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>@type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>"@type": "DataDownload"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>additionalType</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A fully qualified reference to the class that is at the root of the items in the RPDE feed.</p><p></br><b>Example</b></p><p><code>"additionalType": "https://openactive.io/SessionSeries"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contentUrl</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The URL of the RPDE data feed.</p><p></br><b>Example</b></p><p><code>"contentUrl": "https://opendata.leisurecloud.live/api/feeds/fusion-lifestyle-fl-live-session-series"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>encodingFormat</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>"encodingFormat": "application/vnd.openactive.rpde+json; version=1"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the type of feed</p><p></br><b>Example</b></p><p><code>"name": "SessionSeries"</code></p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
