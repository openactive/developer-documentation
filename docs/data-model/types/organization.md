---
description: This page describes the Organization type.
---

# Organization

This type is derived from [https://schema.org/Organization](https://schema.org/Organization), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the Organization</p><p></br><b>Example</b></p><p><code>"name": "Central Speedball Association"</code></p>
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
      <td style="text-align:left"><b>sameAs</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>Lists the URL(s) of the official social media profile pages associated with the organization.</p><p></br><b>Example</b></p><p><code>"sameAs": [<br/>&nbsp;&nbsp;&quot;https://www.facebook.com/everyoneactive/&quot;,<br/>&nbsp;&nbsp;&quot;https://twitter.com/everyoneactive&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>telephone</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The telephone number of the Organization</p><p></br><b>Example</b></p><p><code>"telephone": "01234 567890"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A definitive canonical URL for the Organization.</p><p></br><b>Example</b></p><p><code>"url": "http://www.speedball-world.com"</code></p>
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
      <td style="text-align:left"><b>@type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>"@type": "Organization"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>@id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique URI-based identifier for the record. The value of <code>@id</code> must always be an absolute URI.</p><p><code>@id</code> properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in <a href="https://tools.ietf.org/html/rfc3986">RFC3986</a>.</p><p>The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).</p><p></br><b>Example</b></p><p><code>"@id": "https://id.bookingsystem.example.com/organizers/1"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>address</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/postaladdress"><code>PostalAddress</code></a>
      </td>
      <td style="text-align:left">
        <p>Address of the Seller, used on tax receipts.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A plain text description of the Organization, which must not include HTML or other markup.</p><p></br><b>Example</b></p><p><code>"description": "The national governing body of cycling"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>email</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>General enquiries e-mail address for the organization.</p><p></br><b>Example</b></p><p><code>"email": "info@example.com"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a><br/> - or - <br/><a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a><br/> - or - <br/>Array of <a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a><br/> - or - <br/><a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>A local non-URI identifier for the resource</p><p></br><b>Example</b></p><p><code>"identifier": "SB1234"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>isOpenBookingAllowed</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates whether the Seller allows open booking or not</p><p></br><b>Example</b></p><p><code>"isOpenBookingAllowed": "true"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>legalName</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The official name of the organization, e.g. the registered company name.</p><p></br><b>Example</b></p><p><code>"legalName": "Central Speedball Ltd"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>A logo for the Organization.</p><p></br><b>Example</b></p><p><code>"logo": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;ImageObject&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.com/static/image/speedball_large.jpg&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>taxMode</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/TaxMode"><code>TaxMode</code></a>
      </td>
      <td style="text-align:left">
        <p>Either  <a href="https://openactive.io/TaxNet">https://openactive.io/TaxNet</a> or  <a href="https://openactive.io/TaxGross">https://openactive.io/TaxGross</a></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>termsOfService</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/terms"><code>Terms</code></a>
      </td>
      <td style="text-align:left">
        <p>The terms of service of the Seller.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>vatID</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The Value-added Tax ID of the of the Seller.</p>
      </td>
    </tr>
  </tbody>
</table>


### **Beta Extension properties**
    
These properties are defined in the [OpenActive Beta Extension](https://openactive.io/ns-beta). The OpenActive Beta Extension is defined as a convenience to help document properties that are in active testing and review by the community. Publishers should not assume that properties in the beta namespace will either be added to the core specification or be included in the namespace over the long term.


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
      <td style="text-align:left"><b>beta:formalCriteriaMet</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/236">Proposal #236</a></p><p>An array of URLs, each of which describe the formal criteria that are met by the organizer.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:formattedDescription</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/276">Proposal #276</a></p><p>Sometimes a description is stored with formatting (e.g. href, bold, italics, embedded YouTube videos). This formatting can be useful for data consumers. This property must contain HTML.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:video</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/VideoObject"><code>VideoObject</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/88">Proposal #88</a></p><p>A related video object.</p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
