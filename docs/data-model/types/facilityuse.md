---
description: This page describes the FacilityUse type.
---

# FacilityUse



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
        Must always be present and set to <code>"@type": "FacilityUse"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>activity</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Specifies the physical activity or activities that will take place during a facility use.</p><p></br><b>Example</b></p><p><code>"activity": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Concept&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@id&quot;:&nbsp;&quot;https://openactive.io/activity-list#c0360db0-a817-4bae-9167-40f89b49fc9e&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;prefLabel&quot;:&nbsp;&quot;Badminton&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;inScheme&quot;:&nbsp;&quot;https://openactive.io/activity-list&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>location</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        <p>The location at which the facility use will take place.</p><p></br><b>Example</b></p><p><code>"location": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Place&quot;,<br/>&nbsp;&nbsp;&quot;address&quot;:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;addressLocality&quot;:&nbsp;&quot;New&nbsp;Malden&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;addressRegion&quot;:&nbsp;&quot;London&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;postalCode&quot;:&nbsp;&quot;NW5&nbsp;3DU&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;streetAddress&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School,&nbsp;46A&nbsp;West&nbsp;Barnes&nbsp;Lane&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;PostalAddress&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&quot;description&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School&nbsp;in&nbsp;London&quot;,<br/>&nbsp;&nbsp;&quot;geo&quot;:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;latitude&quot;:&nbsp;51.4034423828125,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;longitude&quot;:&nbsp;-0.2369088977575302,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;GeoCoordinates&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&quot;@id&quot;:&nbsp;&quot;https://example.com/locations/1234ABCD&quot;,<br/>&nbsp;&nbsp;&quot;identifier&quot;:&nbsp;&quot;1234ABCD&quot;,<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School&quot;,<br/>&nbsp;&nbsp;&quot;telephone&quot;:&nbsp;&quot;01253&nbsp;473934&quot;<br/>}</code></p>
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
        <a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a>
      </td>
      <td style="text-align:left">
        <p>The organisation responsible for providing the facility</p><p></br><b>Example</b></p><p><code>"provider": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Organization&quot;,<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Central&nbsp;Speedball&nbsp;Association&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://www.speedball-world.com&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A URL to a web page (or section of a page) that describes the facility use.</p><p></br><b>Example</b></p><p><code>"url": "https://example.com/facility-use/1234"</code></p>
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
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"@id": "https://example.com/facility-use/112345"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A plain text description of the facility use, which must not include HTML or other markup.</p><p></br><b>Example</b></p><p><code>"description": "An fast paced game that incorporates netball, handball and football."</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hoursAvailable</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/openinghoursspecification"><code>OpeningHoursSpecification</code></a>
      </td>
      <td style="text-align:left">
        <p>The times the facility use is available</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>image</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>An image or photo that depicts the facility use, e.g. a photo taken at a previous event.</p><p></br><b>Example</b></p><p><code>"image": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;thumbnail&quot;:&nbsp;&quot;http://example.com/static/image/speedball_thumbnail.jpg&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;ImageObject&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.com/static/image/speedball_large.jpg&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>offers</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/offer"><code>Offer</code></a>
      </td>
      <td style="text-align:left">
        <p>An array of schema:Offer that include the price of booking.</p><p></br><b>Example</b></p><p><code>"offers": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Offer&quot;,<br/>&nbsp;&nbsp;&quot;identifier&quot;:&nbsp;&quot;OX-AD&quot;,<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Adult&quot;,<br/>&nbsp;&nbsp;&quot;price&quot;:&nbsp;7.5,<br/>&nbsp;&nbsp;&quot;priceCurrency&quot;:&nbsp;&quot;GBP&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;https://profile.everyoneactive.com/booking?Site=0140&Activities=1402CBP20150217&Culture=en-GB&quot;<br/>}</code></p>
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
      <td style="text-align:left"><b>accessibilityInformation</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provide additional, specific documentation for participants about how disabilities are, or can be supported at the Event.</p><p></br><b>Example</b></p><p><code>"accessibilityInformation": "This route has been British Cycling assessed as an accessible route, meaning it is suitable for the majority of adaptive bikes. The route will have no or low levels of traffic, there will be plenty of space and will have a good surface throughout. If you have any questions about using this route on an adaptive bike on this ride, please use visit https://www.letsride.co.uk/accessibility or call 0123 456 7000 and ask for the Recreation team."</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>accessibilitySupport</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Used to specify the types of disabilities or impairments that are supported at an event.</p><p></br><b>Example</b></p><p><code>"accessibilitySupport": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Concept&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@id&quot;:&nbsp;&quot;https://openactive.io/accessibility-support#1393f2dc-3fcc-4be9-a99f-f1e51f5ad277&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;prefLabel&quot;:&nbsp;&quot;Visual&nbsp;impairment&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;inScheme&quot;:&nbsp;&quot;https://openactive.io/accessibility-support&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>additionalAdmissionRestriction</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Free text restrictions that must be displayed prominently to the user before booking. This property must only contain restrictions not described by <code>oa:ageRestriction</code> or <code>oa:genderRestriction</code>.</p><p></br><b>Example</b></p><p><code>"additionalAdmissionRestriction": [<br/>&nbsp;&nbsp;&quot;Participants&nbsp;younger&nbsp;than&nbsp;12&nbsp;must&nbsp;be&nbsp;accompanied&nbsp;by&nbsp;an&nbsp;adult&quot;,<br/>&nbsp;&nbsp;&quot;Participants&nbsp;must&nbsp;be&nbsp;comfortable&nbsp;standing&nbsp;for&nbsp;long&nbsp;periods&nbsp;of&nbsp;time&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>attendeeInstructions</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides additional notes and instructions for users of a facility, for example more information on how to find it, what to bring, etc. The value of this property must not include HTML or other markup.</p><p></br><b>Example</b></p><p><code>"attendeeInstructions": "The tennis court is locked with a keycode, so please ensure you book online in advance to gain access."</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>bookingChannel</b></td>
      <td style="text-align:left">
        Array of <a href="https://openactive.io/BookingChannelType"><code>BookingChannelType</code></a>
      </td>
      <td style="text-align:left">
        <p>The channels through which a booking can be made.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a><br/> - or - <br/>Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides a set of tags that help categorise and describe a facility.</p><p></br><b>Example</b></p><p><code>"category": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Concept&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@id&quot;:&nbsp;&quot;https://example.com/reference/categories#Top%20Club%20Level&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;inScheme&quot;:&nbsp;&quot;https://example.com/reference/categories&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;prefLabel&quot;:&nbsp;&quot;Top&nbsp;Club&nbsp;Level&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>event</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/slot"><code>Slot</code></a>
      </td>
      <td style="text-align:left">
        <p>An array of slots of availability of this FacilityUse.</p><p></br><b>Example</b></p><p><code>"event": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Slot&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@id&quot;:&nbsp;&quot;http://www.example.org/api/facility-uses/432#/event/2018-03-01T10:00:00Z&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;startDate&quot;:&nbsp;&quot;2018-03-01T11:00:00Z&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;endDate&quot;:&nbsp;&quot;2018-03-01T11:30:00Z&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;duration&quot;:&nbsp;&quot;PT30M&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;remainingUses&quot;:&nbsp;3,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;maximumUses&quot;:&nbsp;6<br/>&nbsp;&nbsp;}<br/>]</code></p>
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
      <td style="text-align:left"><b>individualFacilityUse</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/individualfacilityuse"><code>IndividualFacilityUse</code></a>
      </td>
      <td style="text-align:left">
        <p>Inverse of the oa:aggregateFacilityUse property. Relates a oa:FacilityUse (e.g. an opportunity to play tennis at a specific location) to an oa:IndividualFacilityUse (e.g. an opportunity to play tennis on a specific court).</p><p></br><b>Example</b></p><p><code>"individualFacilityUse": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;IndividualFacilityUse&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@id&quot;:&nbsp;&quot;http://www.example.org/facility-uses/1&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Tennis&nbsp;Court&nbsp;1&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
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
      <td style="text-align:left"><b>beta:bookingChannel</b></td>
      <td style="text-align:left">
        Array of <a href="https://openactive.io/ns-beta#BookingChannelType"><code>BookingChannelType</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/161">Proposal #161</a></p><p>The channels through which a booking can be made.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:facilitySetting</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/ns-beta#FacilitySettingType"><code>FacilitySettingType</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/facility-types/issues/1">Proposal #1</a></p><p>Whether the event or facility is indoor or outdoor.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:facilityType</b></td>
      <td style="text-align:left">
        Array of <a href="http://www.w3.org/2004/02/skos/core#Concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/facility-types/issues/1">Proposal #1</a></p><p>The type of facility in use. See <a href="https://openactive.io/facility-types/">https://openactive.io/facility-types/</a>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:formattedDescription</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/ns-beta/issues/2">Proposal #2</a></p><p>Sometimes a description is stored with formatting (e.g. href, bold, italics, embedded YouTube videos). This formatting can be useful for data consumers. This property must contain HTML.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:isWheelchairAccessible</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/166">Proposal #166</a></p><p>A property that details whether the event is suitable for wheelchair access. Placed on Event as this field could be used to detail whether the Event is suitable, as well as the Place.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:offerValidityPeriod</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/204">Proposal #204</a></p><p>Duration before the event for which the associated Offers are valid</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:sportsActivityLocation</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/SportsActivityLocation"><code>SportsActivityLocation</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/110">Proposal #110</a></p><p>Internal location of the event, e.g. Court 1</p>
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
