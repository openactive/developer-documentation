---
description: This page describes the IndividualFacilityUse type.
---

# IndividualFacilityUse



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
        Must always be present and set to <code>"IndividualFacilityUse"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>activity</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Specifies the physical activity or activities that will take place during a facility use.</p><p></br><b>Example</b></p><p><code>"activity": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;id&quot;:&nbsp;&quot;https://example.com/reference/activities#Speedball&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;inScheme&quot;:&nbsp;&quot;https://example.com/reference/activities&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;prefLabel&quot;:&nbsp;&quot;Speedball&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Concept&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>location</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/data-model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        <p>The location at which the facility use will take place.</p><p></br><b>Example</b></p><p><code>"location": {<br/>&nbsp;&nbsp;&quot;address&quot;:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;addressLocality&quot;:&nbsp;&quot;New&nbsp;Malden&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;addressRegion&quot;:&nbsp;&quot;London&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;postalCode&quot;:&nbsp;&quot;NW5&nbsp;3DU&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;streetAddress&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School,&nbsp;46A&nbsp;West&nbsp;Barnes&nbsp;Lane&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;PostalAddress&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&quot;description&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School&nbsp;in&nbsp;London&quot;,<br/>&nbsp;&nbsp;&quot;geo&quot;:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;latitude&quot;:&nbsp;51.4034423828125,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;longitude&quot;:&nbsp;-0.2369088977575302,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;GeoCoordinates&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&quot;id&quot;:&nbsp;&quot;https://example.com/locations/1234ABCD&quot;,<br/>&nbsp;&nbsp;&quot;identifier&quot;:&nbsp;&quot;1234ABCD&quot;,<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School&quot;,<br/>&nbsp;&nbsp;&quot;telephone&quot;:&nbsp;&quot;01253&nbsp;473934&quot;,<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Place&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the facility use</p><p></br><b>Example</b></p><p><code>"name": "Speedball"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>provider</b></td>
      <td style="text-align:left">
        
      </td>
      <td style="text-align:left">
        <p>The organisation responsible for providing the facility</p></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A URL to a web page (or section of a page) that describes the facility use.</p><p></br><b>Example</b></p><p><code>"url": "https://example.com/facility-use/1234"</code></p>
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
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"id": "https://example.com/individfacilityUse/1234"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>aggregateFacilityUse</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/data-model/types/facilityuse"><code>FacilityUse</code></a>
      </td>
      <td style="text-align:left">
        <p>Inverse of the oa:individualFacilityUse property. Related an oa:IndividualFacilityUse (e.g. an opportunity to play tennis on a specific court) to a oa:FacilityUse (e.g. an opportunity to play tennis at a specific location).</p></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A free text description of the facility use</p><p></br><b>Example</b></p><p><code>"description": "An fast paced game that incorporates netball, handball and football."</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>event</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/slot"><code>Slot</code></a>
      </td>
      <td style="text-align:left">
        <p>TODO</p></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hoursAvailable</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/openinghoursspecification"><code>OpeningHoursSpecification</code></a>
      </td>
      <td style="text-align:left">
        <p>The times the facility use is available</p></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>image</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>An image or photo that depicts the facility use, e.g. a photo taken at a previous event.</p><p></br><b>Example</b></p><p><code>"image": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;thumbnail&quot;:&nbsp;&quot;http://example.com/static/image/speedball_thumbnail.jpg&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;ImageObject&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.com/static/image/speedball_large.jpg&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
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
      <td style="text-align:left"><b>accessibilityInformation</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provide additional, specific documentation for participants about how disabilities are, or can be supported at the facility.</p><p></br><b>Example</b></p><p><code>"accessibilityInformation": "TODO"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>accessibilitySupport</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Text"><code>Text</code></a><br/> - or - <br/>Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Used to specify the types of disabilities or impairments that are supported at a facility.</p><p></br><b>Example</b></p><p><code>"accessibilitySupport": "TODO"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>attendeeInstructions</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides additional notes and instructions for users of a facility. E.g. more information on how to find it, what to bring, etc.</p><p></br><b>Example</b></p><p><code>"attendeeInstructions": "TODO"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a><br/> - or - <br/>Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides a set of tags that help categorise and describe a facility.</p><p></br><b>Example</b></p><p><code>"category": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;id&quot;:&nbsp;&quot;https://example.com/reference/categories#Top%20Club%20Level&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;inScheme&quot;:&nbsp;&quot;https://example.com/reference/categories&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;prefLabel&quot;:&nbsp;&quot;Top&nbsp;Club&nbsp;Level&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Concept&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
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
      <td style="text-align:left"><b>offers</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/offer"><code>Offer</code></a>
      </td>
      <td style="text-align:left">
        <p>TODO</p></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>potentialAction</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/action"><code>Action</code></a>
      </td>
      <td style="text-align:left">
        <p>The possible actions that a user may make. e.g. Book.</p><p></br><b>Example</b></p><p><code>"potentialAction": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Book&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;target&quot;:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;encodingType&quot;:&nbsp;&quot;application/vnd.openactive.v1.0+json&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;httpMethod&quot;:&nbsp;&quot;POST&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;EntryPoint&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;https://example.com/orders&quot;<br/>&nbsp;&nbsp;&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Action&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
  </tbody>
</table>


