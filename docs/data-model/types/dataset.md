---
description: This page describes the Dataset type.
---

# Dataset

## **EARLY RELEASE NOTICE**
This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. It is mostly stable, as it based almost entirely on schema.org.
HOWEVER, IT IS STILL SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://www.openactive.io/dataset-api-discovery/EditorsDraft/) evolves.

This type is derived from [https://schema.org/Dataset](https://schema.org/Dataset), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
        Must always be present and set to <code>"@type": "Dataset"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>@id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"@id": "https://opendata.fusion-lifestyle.com/OpenActive/12345"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A plain text description of the <code>Dataset</code>, which must not include HTML or other markup.</p><p></br><b>Example</b></p><p><code>"description": "Near real-time availability and rich descriptions relating to the sessions and facilities available from {OrganisationName}, published using the OpenActive Modelling Specification 2.0."</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>discussionUrl</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A URL that can be used to raise issues related to the <code>Dataset</code> via a public forum.</p><p></br><b>Example</b></p><p><code>"discussionUrl": "https://github.com/gladstonemrm/FusionLifestyle/issues"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>distribution</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/datadownload"><code>DataDownload</code></a>
      </td>
      <td style="text-align:left">
        <p>An array of feeds within the dataset</p><p></br><b>Example</b></p><p><code>"distribution": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;DataDownload&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;FacilityUse&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;additionalType&quot;:&nbsp;&quot;https://openactive.io/FacilityUse&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;encodingFormat&quot;:&nbsp;&quot;application/vnd.openactive.rpde+json;&nbsp;version=1&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;contentUrl&quot;:&nbsp;&quot;https://opendata.leisurecloud.live/api/feeds/fusion-lifestyle-fl-live-facility-uses&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>documentation</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A link to documentation related to the <code>Dataset</code>, or a link to the OpenActive developer documentation if no Dataset-specific documentation is available.</p><p></br><b>Example</b></p><p><code>"documentation": "https://developer.openactive.io"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>inLanguage</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>An array of languages included in the Dataset's content. Please use one of the language codes from the IETF BCP 47 standard.</p><p></br><b>Example</b></p><p><code>"inLanguage": [<br/>&nbsp;&nbsp;&quot;en-GB&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>keywords</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Keywords for search engine optimisation</p><p></br><b>Example</b></p><p><code>"keywords": [<br/>&nbsp;&nbsp;&quot;Sessions&quot;,<br/>&nbsp;&nbsp;&quot;Facilities&quot;,<br/>&nbsp;&nbsp;&quot;Activities&quot;,<br/>&nbsp;&nbsp;&quot;Sports&quot;,<br/>&nbsp;&nbsp;&quot;Physical&nbsp;Activity&quot;,<br/>&nbsp;&nbsp;&quot;OpenActive&quot;<br/>]</code></p>
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
        <p>The name of the <code>Dataset</code></p><p></br><b>Example</b></p><p><code>"name": "Acme Leisure Sessions and Facilities"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>publisher</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a>
      </td>
      <td style="text-align:left">
        <p>The organization ultimately responsible for this <code>Dataset</code>.</p><p></br><b>Example</b></p><p><code>"publisher": {<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Central&nbsp;Speedball&nbsp;Association&quot;,<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Organization&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://www.speedball-world.com&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>schemaVersion</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates the version of OpenActive Modelling Opportunity Data Specification with which this <code>Dataset</code> conforms, by specifying its URL.</p><p></br><b>Example</b></p><p><code>"schemaVersion": "https://www.openactive.io/modelling-opportunity-data/2.0/"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The URL of the dataset site.</p><p></br><b>Example</b></p><p><code>"url": "https://opendata.fusion-lifestyle.com/OpenActive/"</code></p>
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
      <td style="text-align:left"><b>backgroundImage</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>A background image for the <code>Dataset</code>.</p><p></br><b>Example</b></p><p><code>"backgroundImage": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;ImageObject&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.com/static/image/speedball_large.jpg&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dateModified</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a>
      </td>
      <td style="text-align:left">
        <p>The date this <code>Dataset</code> was last updated. For RPDE feeds this may simply be the date and time that the Dataset Site was rendered, which may be cached.</p><p></br><b>Example</b></p><p><code>"dateModified": "2018-01-27T12:00:00Z"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>datePublished</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a><br/> - or - <br/><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The date this <code>Dataset</code> was first published. Can be specified as a schema:Date or schema:DateTime.</p><p></br><b>Example</b></p><p><code>"datePublished": "2018-01-27T12:00:00Z"</code></p>
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
      <td style="text-align:left"><b>accessService</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/webapi"><code>WebAPI</code></a>
      </td>
      <td style="text-align:left">
        <p>Information about the Open Booking API. Note this property is in EARLY RELEASE AND IS SUBJECT TO CHANGE.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>bookingService</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/bookingservice"><code>BookingService</code></a>
      </td>
      <td style="text-align:left">
        <p>Information about the Booking System or publishing platform</p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
