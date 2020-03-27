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
      <td style="text-align:left"><b>type</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">Must always be present and set to <code>&quot;type&quot;: &quot;Place&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the Place</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;name&quot;: &quot;Raynes Park High School&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Required options**

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
      <td style="text-align:left"><b>address</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/postaladdress"><code>PostalAddress</code></a>
        <br
        />- or -
        <br /><a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A structured PostalAddress object for the Place.</p>
        <p>Ideally the address should be provided using the PostalAddress structured
          format. Google Reserve requires <a href="https://schema.org/PostalAddress">https://schema.org/PostalAddress</a> and
          will not accept plain text addresses.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;address&quot;: {<br />  &quot;@type&quot;: &quot;PostalAddress&quot;,<br />  &quot;streetAddress&quot;: &quot;Raynes Park High School, 46A West Barnes Lane&quot;,<br />  &quot;addressLocality&quot;: &quot;New Malden&quot;,<br />  &quot;addressRegion&quot;: &quot;London&quot;,<br />  &quot;postalCode&quot;: &quot;NW5 3DU&quot;,<br />  &quot;addressCountry&quot;: &quot;GB&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>geo</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/geocoordinates"><code>GeoCoordinates</code></a>
      </td>
      <td style="text-align:left">
        <p>The geo coordinates of the Place.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;geo&quot;: {<br />  &quot;latitude&quot;: 51.4034423828125,<br />  &quot;longitude&quot;: -0.2369088977575302,<br />  &quot;type&quot;: &quot;GeoCoordinates&quot;<br />}</code>
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
      <td style="text-align:left"><b>id</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;id&quot;: &quot;https://example.com/place/12345&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>amenityFeature</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/locationfeaturespecification"><code>LocationFeatureSpecification</code></a>
      </td>
      <td style="text-align:left">
        <p>An array listing the Ammenities of the Place.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;amenityFeature&quot;: [<br />  {<br />    &quot;name&quot;: &quot;Changing Facilities&quot;,<br />    &quot;value&quot;: true,<br />    &quot;type&quot;: &quot;ChangingFacilities&quot;<br />  },<br />  {<br />    &quot;name&quot;: &quot;Showers&quot;,<br />    &quot;value&quot;: false,<br />    &quot;type&quot;: &quot;Showers&quot;<br />  },<br />  {<br />    &quot;name&quot;: &quot;Lockers&quot;,<br />    &quot;value&quot;: true,<br />    &quot;type&quot;: &quot;Lockers&quot;<br />  },<br />  {<br />    &quot;name&quot;: &quot;Towels&quot;,<br />    &quot;value&quot;: false,<br />    &quot;type&quot;: &quot;Towels&quot;<br />  },<br />  {<br />    &quot;name&quot;: &quot;Creche&quot;,<br />    &quot;value&quot;: false,<br />    &quot;type&quot;: &quot;Creche&quot;<br />  },<br />  {<br />    &quot;name&quot;: &quot;Parking&quot;,<br />    &quot;value&quot;: true,<br />    &quot;type&quot;: &quot;Parking&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The description of the Place</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;description&quot;: &quot;Raynes Park High School in London&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>image</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>An image or photo that depicts the place, e.g. a photo taken at a previous
          event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;image&quot;: [<br />  {<br />    &quot;thumbnail&quot;: &quot;http://example.com/static/image/speedball_thumbnail.jpg&quot;,<br />    &quot;type&quot;: &quot;ImageObject&quot;,<br />    &quot;url&quot;: &quot;http://example.com/static/image/speedball_large.jpg&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>openingHoursSpecification</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/openinghoursspecification"><code>OpeningHoursSpecification</code></a>
      </td>
      <td style="text-align:left">The times the Place is open</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>telephone</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The telephone number for the Place</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;telephone&quot;: &quot;01253 473934&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The website for the Place</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;url&quot;: &quot;http://www.rphs.org.uk/&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Optional properties**

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
      <td style="text-align:left"><b>address</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/postaladdress"><code>PostalAddress</code></a>
        <br
        />- or -
        <br /><a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A structured PostalAddress object for the Place.</p>
        <p>Ideally the address should be provided using the PostalAddress structured
          format. Google Reserve requires <a href="https://schema.org/PostalAddress">https://schema.org/PostalAddress</a> and
          will not accept plain text addresses.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;address&quot;: {<br />  &quot;@type&quot;: &quot;PostalAddress&quot;,<br />  &quot;streetAddress&quot;: &quot;Raynes Park High School, 46A West Barnes Lane&quot;,<br />  &quot;addressLocality&quot;: &quot;New Malden&quot;,<br />  &quot;addressRegion&quot;: &quot;London&quot;,<br />  &quot;postalCode&quot;: &quot;NW5 3DU&quot;,<br />  &quot;addressCountry&quot;: &quot;GB&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>containedInPlace</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        <p>The place within which this Place exists</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;containedInPlace&quot;: {<br />  &quot;@type&quot;: &quot;Place&quot;,<br />  &quot;url&quot;: &quot;https://www.everyoneactive.com/centres/Middlesbrough-Sports-Village&quot;,<br />  &quot;name&quot;: &quot;Middlesbrough Sports Village&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>containsPlace</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        <p>Places that exist within this place</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;containsPlace&quot;: {<br />  &quot;@type&quot;: &quot;Place&quot;,<br />  &quot;url&quot;: &quot;https://www.everyoneactive.com/centres/Center-Parcs-Sports-Plaza&quot;,<br />  &quot;name&quot;: &quot;Center Parcs Sports Plaza&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>geo</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/geocoordinates"><code>GeoCoordinates</code></a>
      </td>
      <td style="text-align:left">
        <p>The geo coordinates of the Place.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;geo&quot;: {<br />  &quot;latitude&quot;: 51.4034423828125,<br />  &quot;longitude&quot;: -0.2369088977575302,<br />  &quot;type&quot;: &quot;GeoCoordinates&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
        <br />- or -
        <br /><a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
        <br
        />- or -
        <br />Array of <a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
        <br
        />- or -
        <br /><a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>A local non-URI identifier for the resource</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;identifier&quot;: &quot;SB1234&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Beta Extension properties**

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
      <td style="text-align:left"><b>beta:formattedDescription</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/ns-beta/issues/2">Proposal #2</a>
        </p>
        <p>Sometimes a description is stored with formatting (e.g. href, bold, italics,
          embedded YouTube videos). This formatting can be useful for data consumers.</p>
      </td>
    </tr>
  </tbody>
</table>Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

