---
description: This page describes the SportsActivityLocation type.
---

# SportsActivityLocation

This type is derived from [https://schema.org/SportsActivityLocation](https://schema.org/SportsActivityLocation), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Fields**

### **Required fields**
    
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
      <td style="text-align:left"><b>type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>"type": "SportsActivityLocation"</code>
      </td>
    </tr>
  </tbody>
</table>


### ** Required options **

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
        <a href="https://docs.openactive.io/data-model/types/postaladdress"><code>PostalAddress</code></a><br/> - or - <br/><a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A structured PostalAddress object for the Place.</p><p>Ideally the address should be provided using the PostalAddress structured format. Google Reserve requires <a href="https://schema.org/PostalAddress">https://schema.org/PostalAddress</a> and will not accept plain text addresses.</p><p></br><b>Example</b></p><p><code>"address": {<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;PostalAddress&quot;,<br/>&nbsp;&nbsp;&quot;streetAddress&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School,&nbsp;46A&nbsp;West&nbsp;Barnes&nbsp;Lane&quot;,<br/>&nbsp;&nbsp;&quot;addressLocality&quot;:&nbsp;&quot;New&nbsp;Malden&quot;,<br/>&nbsp;&nbsp;&quot;addressRegion&quot;:&nbsp;&quot;London&quot;,<br/>&nbsp;&nbsp;&quot;postalCode&quot;:&nbsp;&quot;NW5&nbsp;3DU&quot;,<br/>&nbsp;&nbsp;&quot;addressCountry&quot;:&nbsp;&quot;GB&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>geo</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/data-model/types/geocoordinates"><code>GeoCoordinates</code></a>
      </td>
      <td style="text-align:left">
        <p>The geo coordinates of the Place.</p><p></br><b>Example</b></p><p><code>"geo": {<br/>&nbsp;&nbsp;&quot;latitude&quot;:&nbsp;51.4034423828125,<br/>&nbsp;&nbsp;&quot;longitude&quot;:&nbsp;-0.2369088977575302,<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;GeoCoordinates&quot;<br/>}</code></p>
      </td>
    </tr>
  </tbody>
</table>


### **Recommended fields**
    
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
      <td style="text-align:left"><b>id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"id": "https://example.com/place/12345"</code></p>
      </td>
    </tr>
  </tbody>
</table>


### **Optional fields**
    
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
        <a href="https://docs.openactive.io/data-model/types/postaladdress"><code>PostalAddress</code></a><br/> - or - <br/><a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A structured PostalAddress object for the Place.</p><p>Ideally the address should be provided using the PostalAddress structured format. Google Reserve requires <a href="https://schema.org/PostalAddress">https://schema.org/PostalAddress</a> and will not accept plain text addresses.</p><p></br><b>Example</b></p><p><code>"address": {<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;PostalAddress&quot;,<br/>&nbsp;&nbsp;&quot;streetAddress&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School,&nbsp;46A&nbsp;West&nbsp;Barnes&nbsp;Lane&quot;,<br/>&nbsp;&nbsp;&quot;addressLocality&quot;:&nbsp;&quot;New&nbsp;Malden&quot;,<br/>&nbsp;&nbsp;&quot;addressRegion&quot;:&nbsp;&quot;London&quot;,<br/>&nbsp;&nbsp;&quot;postalCode&quot;:&nbsp;&quot;NW5&nbsp;3DU&quot;,<br/>&nbsp;&nbsp;&quot;addressCountry&quot;:&nbsp;&quot;GB&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>amenityFeature</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/locationfeaturespecification"><code>LocationFeatureSpecification</code></a>
      </td>
      <td style="text-align:left">
        <p>An array listing the Ammenities of the Place.</p><p></br><b>Example</b></p><p><code>"amenityFeature": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Changing&nbsp;Facilities&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;ChangingFacilities&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Showers&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Showers&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Lockers&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Lockers&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Towels&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Towels&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Creche&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Creche&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Parking&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Parking&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>containedInPlace</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/data-model/types/place"><code>Place</code></a><br/> - or - <br/><a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>While a <code>url</code> is not specified as an option in the Modelling Specification, it is necessary to link entities in RPDE.</p><p></br><b>Example</b></p><p><code>"containedInPlace": "http://www.example.org/api/locations/8958f9b8-2004-4e90-80ff-50c98a9b121d"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>containsPlace</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        <p>Places that exist within this place</p><p></br><b>Example</b></p><p><code>"containsPlace": {<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Place&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;https://www.everyoneactive.com/centres/Center-Parcs-Sports-Plaza&quot;,<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Center&nbsp;Parcs&nbsp;Sports&nbsp;Plaza&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The description of the Place</p><p></br><b>Example</b></p><p><code>"description": "Raynes Park High School in London"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>geo</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/data-model/types/geocoordinates"><code>GeoCoordinates</code></a>
      </td>
      <td style="text-align:left">
        <p>The geo coordinates of the Place.</p><p></br><b>Example</b></p><p><code>"geo": {<br/>&nbsp;&nbsp;&quot;latitude&quot;:&nbsp;51.4034423828125,<br/>&nbsp;&nbsp;&quot;longitude&quot;:&nbsp;-0.2369088977575302,<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;GeoCoordinates&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a><br/> - or - <br/><a href="https://docs.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a><br/> - or - <br/>Array of <a href="https://docs.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a><br/> - or - <br/><a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>A local non-URI identifier for the resource</p><p></br><b>Example</b></p><p><code>"identifier": "SB1234"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>image</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>An image or photo that depicts the place, e.g. a photo taken at a previous event.</p><p></br><b>Example</b></p><p><code>"image": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;thumbnail&quot;:&nbsp;&quot;http://example.com/static/image/speedball_thumbnail.jpg&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;ImageObject&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.com/static/image/speedball_large.jpg&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
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
    <tr>
      <td style="text-align:left"><b>openingHoursSpecification</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/openinghoursspecification"><code>OpeningHoursSpecification</code></a>
      </td>
      <td style="text-align:left">
        <p>The times the Place is open</p></p>
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
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>The website for the Place</p><p></br><b>Example</b></p><p><code>"url": "http://www.rphs.org.uk/"</code></p>
      </td>
    </tr>
  </tbody>
</table>


