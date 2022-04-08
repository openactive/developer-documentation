---
description: This page describes the Place type.
---

# Place

This type is derived from [https://schema.org/Place](https://schema.org/Place), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
        Must always be present and set to <code>"@type": "Place"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the Place</p><p></br><b>Example</b></p><p><code>"name": "Raynes Park High School"</code></p>
      </td>
    </tr>
  </tbody>
</table>


### **Required options**

While these properties are marked as recommended in the specification, a data publisher must provide as much detail in both `address` and `geo` for an event as possible.

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
      <td style="text-align:left"><b>address</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/postaladdress"><code>PostalAddress</code></a><br/> - or - <br/><a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A structured PostalAddress object for the Place.</p><p>Ideally the address should be provided using the PostalAddress structured format. Google Reserve requires <a href="https://schema.org/PostalAddress">https://schema.org/PostalAddress</a> and will not accept plain text addresses.</p><p></br><b>Example</b></p><p><code>"address": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;PostalAddress&quot;,<br/>&nbsp;&nbsp;&quot;streetAddress&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School,&nbsp;46A&nbsp;West&nbsp;Barnes&nbsp;Lane&quot;,<br/>&nbsp;&nbsp;&quot;addressLocality&quot;:&nbsp;&quot;New&nbsp;Malden&quot;,<br/>&nbsp;&nbsp;&quot;addressRegion&quot;:&nbsp;&quot;London&quot;,<br/>&nbsp;&nbsp;&quot;postalCode&quot;:&nbsp;&quot;NW5&nbsp;3DU&quot;,<br/>&nbsp;&nbsp;&quot;addressCountry&quot;:&nbsp;&quot;GB&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>geo</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/geocoordinates"><code>GeoCoordinates</code></a>
      </td>
      <td style="text-align:left">
        <p>The geo coordinates of the Place.</p><p></br><b>Example</b></p><p><code>"geo": {<br/>&nbsp;&nbsp;&quot;latitude&quot;:&nbsp;51.4034423828125,<br/>&nbsp;&nbsp;&quot;longitude&quot;:&nbsp;-0.2369088977575302,<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;GeoCoordinates&quot;<br/>}</code></p>
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
      <td style="text-align:left"><b>@id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique URI-based identifier for the record.</p><p><code>@id</code> properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in <a href="https://tools.ietf.org/html/rfc3986">RFC3986</a>.</p><p>The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).</p><p></br><b>Example</b></p><p><code>"@id": "https://id.bookingsystem.example.com/places/12345"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>amenityFeature</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/locationfeaturespecification"><code>LocationFeatureSpecification</code></a>
      </td>
      <td style="text-align:left">
        <p>An array listing the Ammenities of the Place.</p><p></br><b>Example</b></p><p><code>"amenityFeature": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Changing&nbsp;Facilities&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;ChangingFacilities&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Showers&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Showers&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Lockers&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Lockers&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Towels&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Towels&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Creche&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Creche&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Parking&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Parking&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A plain text description of the Place, which must not include HTML or other markup.</p><p></br><b>Example</b></p><p><code>"description": "Raynes Park High School in London"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>image</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>An image or photo that depicts the place, e.g. a photo taken at a previous event.</p><p></br><b>Example</b></p><p><code>"image": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;thumbnail&quot;:&nbsp;&quot;http://example.com/static/image/speedball_thumbnail.jpg&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;ImageObject&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.com/static/image/speedball_large.jpg&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>openingHoursSpecification</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/openinghoursspecification"><code>OpeningHoursSpecification</code></a>
      </td>
      <td style="text-align:left">
        <p>The times the Place is open</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>telephone</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The telephone number for the Place</p><p></br><b>Example</b></p><p><code>"telephone": "01253 473934"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The website for the Place</p><p></br><b>Example</b></p><p><code>"url": "http://www.rphs.org.uk/"</code></p>
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
      <td style="text-align:left"><b>containedInPlace</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        <p>The place within which this Place exists</p><p></br><b>Example</b></p><p><code>"containedInPlace": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Place&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;https://www.everyoneactive.com/centres/Middlesbrough-Sports-Village&quot;,<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Middlesbrough&nbsp;Sports&nbsp;Village&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>containsPlace</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        <p>Places that exist within this place</p><p></br><b>Example</b></p><p><code>"containsPlace": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Place&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;https://www.everyoneactive.com/centres/Center-Parcs-Sports-Plaza&quot;,<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Center&nbsp;Parcs&nbsp;Sports&nbsp;Plaza&quot;<br/>}</code></p>
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
      <td style="text-align:left"><b>specialOpeningHoursSpecification</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/openinghoursspecification"><code>OpeningHoursSpecification</code></a>
      </td>
      <td style="text-align:left">
        <p>Explicitly override general opening hours brought in scope by <code>schema:openingHoursSpecification</code>.</p>
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
      <td style="text-align:left"><b>beta:formattedDescription</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/276">Proposal #276</a></p><p>Sometimes a description is stored with formatting (e.g. href, bold, italics, embedded YouTube videos). This formatting can be useful for data consumers. This property must contain HTML.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:placeType</b></td>
      <td style="text-align:left">
        Array of <a href="http://www.w3.org/2004/02/skos/core#Concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/place-types/issues/1">Proposal #1</a></p><p>The type of Place. See <a href="https://openactive.io/place-types/">https://openactive.io/place-types/</a>.</p>
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
