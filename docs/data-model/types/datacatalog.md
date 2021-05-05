---
description: This page describes the DataCatalog type.
---

# DataCatalog

## **EARLY RELEASE NOTICE**

This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. It is mostly stable, as it based entirely on schema.org. HOWEVER, IT IS STILL SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.

This type is derived from [https://schema.org/DataCatalog](https://schema.org/DataCatalog), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
      <td style="text-align:left"><b>@type</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">Must always be present and set to <code>&quot;@type&quot;: &quot;DataCatalog&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>@id</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;@id&quot;: &quot;https://opendata.leisurecloud.live/api/datacatalog12345&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>license</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">Must always be present and set to <code>&quot;license&quot;: &quot;https://creativecommons.org/licenses/by/4.0/&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the <code>DataCatalog</code>
        </p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;name&quot;: &quot;Acme Leisure Sessions and Facilities&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>publisher</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a>
      </td>
      <td style="text-align:left">
        <p>The organization ultimately responsible for maintaining this <code>DataCatalog</code>.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;publisher&quot;: {<br />  &quot;@type&quot;: &quot;Organization&quot;,<br />  &quot;name&quot;: &quot;Central Speedball Association&quot;,<br />  &quot;url&quot;: &quot;http://www.speedball-world.com&quot;<br />}</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

### **Required options**

The `DataCatalog` must include either `hasPart` if it is a collection of smaller `DataCatalog`s, or `dataset` if it is a collection of dataset sites.

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
      <td style="text-align:left"><b>hasPart</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The URLs of each smaller <code>DataCatalog</code> within this <code>DataCatalog</code> collection.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;hasPart&quot;: [<br />  &quot;https://opendata.leisurecloud.live/api/datacatalog&quot;,<br />  &quot;https://openactivedatacatalog.legendonlineservices.co.uk/api/DataCatalog&quot;<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dataset</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The URLs of the dataset sites within this <code>DataCatalog</code>.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;dataset&quot;: [<br />  &quot;https://opendata.exercise-anywhere.com/&quot;,<br />  &quot;https://www.participant.co.uk/participant/openactive/&quot;<br />]</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

### **Recommended properties**

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
      <td style="text-align:left"><b>datePublished</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/DateTime"><code>DateTime</code></a>
        <br />- or -
        <br /><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The date this <code>DataCatalog</code> was first published. Can be specified
          as a schema:Date or schema:DateTime.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;datePublished&quot;: &quot;2018-01-27T12:00:00Z&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

### **Optional properties**

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
      <td style="text-align:left"><b>dataset</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The URLs of the dataset sites within this <code>DataCatalog</code>.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;dataset&quot;: [<br />  &quot;https://opendata.exercise-anywhere.com/&quot;,<br />  &quot;https://www.participant.co.uk/participant/openactive/&quot;<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dateModified</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/DateTime"><code>DateTime</code></a>
      </td>
      <td style="text-align:left">
        <p>The date this <code>DataCatalog</code> was last updated.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;dateModified&quot;: &quot;2018-01-27T12:00:00Z&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hasPart</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The URLs of each smaller <code>DataCatalog</code> within this <code>DataCatalog</code> collection.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;hasPart&quot;: [<br />  &quot;https://opendata.leisurecloud.live/api/datacatalog&quot;,<br />  &quot;https://openactivedatacatalog.legendonlineservices.co.uk/api/DataCatalog&quot;<br />]</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

