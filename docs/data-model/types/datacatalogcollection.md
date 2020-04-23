---
description: This page describes the DataCatalogCollection type.
---

# DataCatalogCollection

## **EARLY RELEASE NOTICE**
In order to expedite the OpenActive tooling work, this class has been added to the model for the purposes of testing.
IT IS SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://www.openactive.io/dataset-api-discovery/EditorsDraft/) evolves.



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
        Must always be present and set to <code>"@type": "DataCatalogCollection"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>@id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"@id": "https://www.openactive.io/data-catalogs/data-catalog-collection.jsonld12345"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hasPart</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The URLs of each <code>DataCatalog</code> within this <code>DataCatalogCollection</code>.</p><p></br><b>Example</b></p><p><code>"hasPart": [<br/>&nbsp;&nbsp;&quot;https://opendata.leisurecloud.live/api/datacatalog&quot;,<br/>&nbsp;&nbsp;&quot;https://openactivedatacatalog.legendonlineservices.co.uk/api/DataCatalog&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>license</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>"license": "https://creativecommons.org/licenses/by/4.0/"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the DataCatalogCollection</p><p></br><b>Example</b></p><p><code>"name": "Acme Leisure Sessions and Facilities"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>publisher</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a>
      </td>
      <td style="text-align:left">
        <p>The organization ultimately responsible for maintaining this <code>DataCatalogCollection</code>.</p><p></br><b>Example</b></p><p><code>"publisher": {<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Central&nbsp;Speedball&nbsp;Association&quot;,<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Organization&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://www.speedball-world.com&quot;<br/>}</code></p>
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
      <td style="text-align:left"><b>datePublished</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a><br/> - or - <br/><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The date this <code>DataCatalogCollection</code> was first published. Can be specified as a <code>schema:Date</code> or <code>schema:DateTime</code>.</p><p></br><b>Example</b></p><p><code>"datePublished": "2018-01-27T12:00:00Z"</code></p>
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
      <td style="text-align:left"><b>dateModified</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a>
      </td>
      <td style="text-align:left">
        <p>The date this <code>DataCatalogCollection</code> was last updated.</p><p></br><b>Example</b></p><p><code>"dateModified": "2018-01-27T12:00:00Z"</code></p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
