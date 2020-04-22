---
description: This page describes the WebAPI type.
---

# WebAPI

## **EARLY RELEASE NOTICE**
In order to expedite the OpenActive tooling work, this class has been added to the model for the purposes of testing.
IT IS SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://www.openactive.io/dataset-api-discovery/EditorsDraft/) evolves.

This type is derived from [https://pending.schema.org/WebAPI](https://pending.schema.org/WebAPI), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
        Must always be present and set to <code>"@type": "WebAPI"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>conformsTo</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates the version and profiles of OpenActive Open Booking Specification with which this WebAPI conforms, by specifying these as URLs.</p><p></br><b>Example</b></p><p><code>"conformsTo": [<br/>&nbsp;&nbsp;&quot;https://www.openactive.io/open-booking-api/1.0/#core&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>endpointDescription</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The Open API document associated with this version of the Open Booking API</p><p></br><b>Example</b></p><p><code>"endpointDescription": "https://www.openactive.io/open-booking-api/1.0/swagger.json"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>endpointURL</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The base URL of the Open Booking API</p><p></br><b>Example</b></p><p><code>"endpointURL": "https://example.bookingsystem.com/api/openbooking"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>landingPage</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The web page the broker uses to obtain access to the API, e.g. via a web form.</p><p></br><b>Example</b></p><p><code>"landingPage": "https://exampleforms.com/get-me-an-api-access-key"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the WebAPI</p><p></br><b>Example</b></p><p><code>"name": "Acme Leisure Sessions and Facilities"</code></p>
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
      <td style="text-align:left"><b>documentation</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A link to documentation related to the Dataset, or a link to the OpenActive developer documentation if no Dataset-specific documentation is available.</p><p></br><b>Example</b></p><p><code>"documentation": "https://developer.openactive.io"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>termsOfService</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A link to terms of service related to the use of this API.</p><p></br><b>Example</b></p><p><code>"termsOfService": "https://example.bookingsystem.com/terms"</code></p>
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
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A plain text description of the Dataset, which must not include HTML or other markup.</p><p></br><b>Example</b></p><p><code>"description": "Near real-time availability and rich descriptions relating to the sessions and facilities available from {OrganisationName}, published using the OpenActive Modelling Specification 2.0."</code></p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
