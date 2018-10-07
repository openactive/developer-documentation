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
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a name="type"></a><b>type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>SportsActivityLocation</code>
      </td>
    </tr>
  </tbody>
</table>


### **Recommended fields**
    
<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a name="id"></a><b>id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        A unique url based identifier for the record</br></br><b>Example</b></br></br><code>https://example.com/place/1234</code>
      </td>
    </tr>
  </tbody>
</table>


### **Optional fields**
    
<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a name="address"></a><b>address</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/data-model/types/postaladdress"><code>PostalAddress</code></a><br/> - or - <br/><a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        A structured PostalAddress object for the Place.</br></br>Ideally the address should be provided using the PostalAddress structured format. Google Reserve requires <a href="https://schema.org/PostalAddress">https://schema.org/PostalAddress</a> and will not accept plain text addresses.</br></br><b>Example</b></br></br><code>{<br/>&nbsp;&nbsp;&quot;addressLocality&quot;:&nbsp;&quot;New&nbsp;Malden&quot;,<br/>&nbsp;&nbsp;&quot;addressRegion&quot;:&nbsp;&quot;London&quot;,<br/>&nbsp;&nbsp;&quot;postalCode&quot;:&nbsp;&quot;NW5&nbsp;3DU&quot;,<br/>&nbsp;&nbsp;&quot;streetAddress&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School,&nbsp;46A&nbsp;West&nbsp;Barnes&nbsp;Lane&quot;,<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;PostalAddress&quot;<br/>}</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="amenityFeature"></a><b>amenityFeature</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/locationfeaturespecification"><code>LocationFeatureSpecification</code></a>
      </td>
      <td style="text-align:left">
        An array listing the Ammenities of the Place.</br></br><b>Example</b></br></br><code>[<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Changing&nbsp;Facilities&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;ChangingFacilities&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Showers&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Showers&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Lockers&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Lockers&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Towels&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Towels&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Creche&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;false,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Creche&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Parking&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;value&quot;:&nbsp;true,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Parking&quot;<br/>&nbsp;&nbsp;}<br/>]</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="containedInPlace"></a><b>containedInPlace</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/data-model/types/place"><code>Place</code></a><br/> - or - <br/><a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        While a <code>url</code> is not specified as an option in the Modelling Specification, it is necessary to link entities in RPDE.</br></br><b>Example</b></br></br><code>TODO</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="containsPlace"></a><b>containsPlace</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        TODO</br></br><b>Example</b></br></br><code>TODO</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="description"></a><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        The description of the Place</br></br><b>Example</b></br></br><code>Raynes Park High School in London</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="geo"></a><b>geo</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/data-model/types/geocoordinates"><code>GeoCoordinates</code></a>
      </td>
      <td style="text-align:left">
        The geo coordinates of the Place.</br></br><b>Example</b></br></br><code>{<br/>&nbsp;&nbsp;&quot;latitude&quot;:&nbsp;51.4034423828125,<br/>&nbsp;&nbsp;&quot;longitude&quot;:&nbsp;-0.2369088977575302,<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;GeoCoordinates&quot;<br/>}</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="identifier"></a><b>identifier</b></td>
      <td style="text-align:left">
        
      </td>
      <td style="text-align:left">
        A unique identifier for the record</br></br><b>Example</b></br></br><code>1234</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="image"></a><b>image</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        An image or photo that depicts the place, e.g. a photo taken at a previous event.</br></br><b>Example</b></br></br><code>[<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;thumbnail&quot;:&nbsp;&quot;http://example.com/static/image/speedball_thumbnail.jpg&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;ImageObject&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.com/static/image/speedball_large.jpg&quot;<br/>&nbsp;&nbsp;}<br/>]</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="name"></a><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        The name of the Place</br></br><b>Example</b></br></br><code>Raynes Park High School</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="openingHoursSpecification"></a><b>openingHoursSpecification</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/openinghoursspecification"><code>OpeningHoursSpecification</code></a>
      </td>
      <td style="text-align:left">
        The times the Place is open
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="telephone"></a><b>telephone</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        The telephone number for the Place</br></br><b>Example</b></br></br><code>01253 473934</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="url"></a><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        The website for the Place</br></br><b>Example</b></br></br><code>http://www.rphs.org.uk/</code>
      </td>
    </tr>
  </tbody>
</table>


