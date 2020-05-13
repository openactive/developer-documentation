---
description: This page describes the Dataset type.
---

# Dataset

## **EARLY RELEASE NOTICE**

This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. It is mostly stable, as it based almost entirely on schema.org. HOWEVER, IT IS STILL SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.

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
      <td style="text-align:left"><b>@type</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">Must always be present and set to <code>&quot;@type&quot;: &quot;Dataset&quot;</code>
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
        <p><code>&quot;@id&quot;: &quot;https://opendata.fusion-lifestyle.com/OpenActive/12345&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A plain text description of the <code>Dataset</code>, which must not include
          HTML or other markup.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;description&quot;: &quot;Near real-time availability and rich descriptions relating to the sessions and facilities available from {OrganisationName}, published using the OpenActive Modelling Specification 2.0.&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>discussionUrl</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A URL that can be used to raise issues related to the <code>Dataset</code> via
          a public forum.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;discussionUrl&quot;: &quot;https://github.com/gladstonemrm/FusionLifestyle/issues&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>distribution</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/datadownload"><code>DataDownload</code></a>
      </td>
      <td style="text-align:left">
        <p>An array of feeds within the dataset</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;distribution&quot;: [<br />  {<br />    &quot;@type&quot;: &quot;DataDownload&quot;,<br />    &quot;name&quot;: &quot;FacilityUse&quot;,<br />    &quot;additionalType&quot;: &quot;https://openactive.io/FacilityUse&quot;,<br />    &quot;encodingFormat&quot;: &quot;application/vnd.openactive.rpde+json; version=1&quot;,<br />    &quot;contentUrl&quot;: &quot;https://opendata.leisurecloud.live/api/feeds/fusion-lifestyle-fl-live-facility-uses&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>documentation</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A link to documentation related to the <code>Dataset</code>, or a link
          to the OpenActive developer documentation if no Dataset-specific documentation
          is available.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;documentation&quot;: &quot;https://developer.openactive.io&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>inLanguage</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>An array of languages included in the Dataset&apos;s content. Please use
          one of the language codes from the IETF BCP 47 standard.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;inLanguage&quot;: [<br />  &quot;en-GB&quot;<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>keywords</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Keywords for search engine optimisation</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;keywords&quot;: [<br />  &quot;Sessions&quot;,<br />  &quot;Facilities&quot;,<br />  &quot;Activities&quot;,<br />  &quot;Sports&quot;,<br />  &quot;Physical Activity&quot;,<br />  &quot;OpenActive&quot;<br />]</code>
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
        <p>The name of the <code>Dataset</code>
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
        <p>The organization ultimately responsible for this <code>Dataset</code>.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;publisher&quot;: {<br />  &quot;name&quot;: &quot;Central Speedball Association&quot;,<br />  &quot;type&quot;: &quot;Organization&quot;,<br />  &quot;url&quot;: &quot;http://www.speedball-world.com&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>schemaVersion</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates the version of OpenActive Modelling Opportunity Data Specification
          with which this <code>Dataset</code> conforms, by specifying its URL.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;schemaVersion&quot;: &quot;https://openactive.io/modelling-opportunity-data/2.0/&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The URL of the dataset site.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;url&quot;: &quot;https://opendata.fusion-lifestyle.com/OpenActive/&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Recommended properties**

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
      <td style="text-align:left"><b>backgroundImage</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>A background image for the <code>Dataset</code>.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;backgroundImage&quot;: {<br />  &quot;@type&quot;: &quot;ImageObject&quot;,<br />  &quot;url&quot;: &quot;http://example.com/static/image/speedball_large.jpg&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dateModified</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/DateTime"><code>DateTime</code></a>
      </td>
      <td style="text-align:left">
        <p>The date this <code>Dataset</code> was last updated. For RPDE feeds this
          may simply be the date and time that the Dataset Site was rendered, which
          may be cached.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;dateModified&quot;: &quot;2018-01-27T12:00:00Z&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>datePublished</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/DateTime"><code>DateTime</code></a>
        <br />- or -
        <br /><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The date this <code>Dataset</code> was first published. Can be specified
          as a schema:Date or schema:DateTime.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;datePublished&quot;: &quot;2018-01-27T12:00:00Z&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Optional properties**

| Property | Expected Type | Description |
| :--- | :--- | :--- |
| **accessService** |  [`WebAPI`](https://developer.openactive.io/data-model/types/webapi) | Information about the Open Booking API. Note this property is in EARLY RELEASE AND IS SUBJECT TO CHANGE. |
| **bookingService** |  [`BookingService`](https://developer.openactive.io/data-model/types/bookingservice) | Information about the Booking System or publishing platform |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

