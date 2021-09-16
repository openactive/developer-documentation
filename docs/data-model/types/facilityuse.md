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
      <td style="text-align:left"><b>@type</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">Must always be present and set to <code>&quot;@type&quot;: &quot;FacilityUse&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>@id</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique URI-based identifier for the record.</p>
        <p><code>@id</code> properties are used as identifiers for compatibility with
          JSON-LD. The value of such a property must always be an absolute URI that
          provides a stable globally unique identifier for the resource, as described
          in <a href="https://tools.ietf.org/html/rfc3986">RFC3986</a>.</p>
        <p>The primary purpose of the URI format in this context is to provide natural
          namespacing for the identifier. Hence, the URI itself may not resolve to
          a valid endpoint, but must use a domain name controlled by the resource
          owner (the organisation responsible for the OpenActive open data feed).</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;@id&quot;: &quot;https://api.example.com/facility-uses/12345&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>activity</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Specifies the physical activity or activities that will take place during
          a facility use.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;activity&quot;: [<br />  {<br />    &quot;@type&quot;: &quot;Concept&quot;,<br />    &quot;@id&quot;: &quot;https://openactive.io/activity-list#c0360db0-a817-4bae-9167-40f89b49fc9e&quot;,<br />    &quot;prefLabel&quot;: &quot;Badminton&quot;,<br />    &quot;inScheme&quot;: &quot;https://openactive.io/activity-list&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>location</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        <p>The location at which the facility use will take place.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;location&quot;: {<br />  &quot;@type&quot;: &quot;Place&quot;,<br />  &quot;address&quot;: {<br />    &quot;addressLocality&quot;: &quot;New Malden&quot;,<br />    &quot;addressRegion&quot;: &quot;London&quot;,<br />    &quot;postalCode&quot;: &quot;NW5 3DU&quot;,<br />    &quot;streetAddress&quot;: &quot;Raynes Park High School, 46A West Barnes Lane&quot;,<br />    &quot;@type&quot;: &quot;PostalAddress&quot;<br />  },<br />  &quot;description&quot;: &quot;Raynes Park High School in London&quot;,<br />  &quot;geo&quot;: {<br />    &quot;latitude&quot;: 51.4034423828125,<br />    &quot;longitude&quot;: -0.2369088977575302,<br />    &quot;@type&quot;: &quot;GeoCoordinates&quot;<br />  },<br />  &quot;@id&quot;: &quot;https://example.com/locations/1234ABCD&quot;,<br />  &quot;identifier&quot;: &quot;1234ABCD&quot;,<br />  &quot;name&quot;: &quot;Raynes Park High School&quot;,<br />  &quot;telephone&quot;: &quot;01253 473934&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the facility use</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;name&quot;: &quot;Speedball&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>provider</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a>
      </td>
      <td style="text-align:left">
        <p>The organisation responsible for providing the facility</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;provider&quot;: {<br />  &quot;@type&quot;: &quot;Organization&quot;,<br />  &quot;name&quot;: &quot;Central Speedball Association&quot;,<br />  &quot;url&quot;: &quot;http://www.speedball-world.com&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A URL to a web page (or section of a page) that describes the facility
          use.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;url&quot;: &quot;https://example.com/facility-use/1234&quot;</code>
        </p>
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
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A plain text description of the facility use, which must not include HTML
          or other markup.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;description&quot;: &quot;An fast paced game that incorporates netball, handball and football.&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hoursAvailable</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/openinghoursspecification"><code>OpeningHoursSpecification</code></a>
      </td>
      <td style="text-align:left">The times the facility use is available</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>image</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>An image or photo that depicts the facility use, e.g. a photo taken at
          a previous event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;image&quot;: [<br />  {<br />    &quot;thumbnail&quot;: &quot;http://example.com/static/image/speedball_thumbnail.jpg&quot;,<br />    &quot;@type&quot;: &quot;ImageObject&quot;,<br />    &quot;url&quot;: &quot;http://example.com/static/image/speedball_large.jpg&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>offers</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/offer"><code>Offer</code></a>
      </td>
      <td style="text-align:left">
        <p>An array of schema:Offer that include the price of booking.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;offers&quot;: {<br />  &quot;@type&quot;: &quot;Offer&quot;,<br />  &quot;identifier&quot;: &quot;OX-AD&quot;,<br />  &quot;name&quot;: &quot;Adult&quot;,<br />  &quot;price&quot;: 7.5,<br />  &quot;priceCurrency&quot;: &quot;GBP&quot;,<br />  &quot;url&quot;: &quot;https://profile.everyoneactive.com/booking?Site=0140&amp;Activities=1402CBP20150217&amp;Culture=en-GB&quot;<br />}</code>
        </p>
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
      <td style="text-align:left"><b>accessibilityInformation</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provide additional, specific documentation for participants about how
          disabilities are, or can be supported at the Event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;accessibilityInformation&quot;: &quot;This route has been British Cycling assessed as an accessible route, meaning it is suitable for the majority of adaptive bikes. The route will have no or low levels of traffic, there will be plenty of space and will have a good surface throughout. If you have any questions about using this route on an adaptive bike on this ride, please use visit https://www.letsride.co.uk/accessibility or call 0123 456 7000 and ask for the Recreation team.&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>accessibilitySupport</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Used to specify the types of disabilities or impairments that are supported
          at an event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;accessibilitySupport&quot;: [<br />  {<br />    &quot;@type&quot;: &quot;Concept&quot;,<br />    &quot;@id&quot;: &quot;https://openactive.io/accessibility-support#1393f2dc-3fcc-4be9-a99f-f1e51f5ad277&quot;,<br />    &quot;prefLabel&quot;: &quot;Visual impairment&quot;,<br />    &quot;inScheme&quot;: &quot;https://openactive.io/accessibility-support&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>additionalAdmissionRestriction</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Free text restrictions that must be displayed prominently to the user
          before booking. This property must only contain restrictions not described
          by <code>oa:ageRestriction</code> or <code>oa:genderRestriction</code>.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;additionalAdmissionRestriction&quot;: [<br />  &quot;Participants younger than 12 must be accompanied by an adult&quot;,<br />  &quot;Participants must be comfortable standing for long periods of time&quot;<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>attendeeInstructions</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides additional notes and instructions for users of a facility, for
          example more information on how to find it, what to bring, etc. The value
          of this property must not include HTML or other markup.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;attendeeInstructions&quot;: &quot;The tennis court is locked with a keycode, so please ensure you book online in advance to gain access.&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a>
        <br
        />- or -
        <br />Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides a set of tags that help categorise and describe a facility.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;category&quot;: [<br />  {<br />    &quot;@type&quot;: &quot;Concept&quot;,<br />    &quot;@id&quot;: &quot;https://example.com/reference/categories#Top%20Club%20Level&quot;,<br />    &quot;inScheme&quot;: &quot;https://example.com/reference/categories&quot;,<br />    &quot;prefLabel&quot;: &quot;Top Club Level&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>event</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/slot"><code>Slot</code></a>
      </td>
      <td style="text-align:left">
        <p>An array of slots of availability of this FacilityUse.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;event&quot;: [<br />  {<br />    &quot;@type&quot;: &quot;Slot&quot;,<br />    &quot;@id&quot;: &quot;http://www.example.org/api/facility-uses/432#/event/2018-03-01T10:00:00Z&quot;,<br />    &quot;startDate&quot;: &quot;2018-03-01T11:00:00Z&quot;,<br />    &quot;endDate&quot;: &quot;2018-03-01T11:30:00Z&quot;,<br />    &quot;duration&quot;: &quot;PT30M&quot;,<br />    &quot;remainingUses&quot;: 3,<br />    &quot;maximumUses&quot;: 6<br />  }<br />]</code>
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
    <tr>
      <td style="text-align:left"><b>individualFacilityUse</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/individualfacilityuse"><code>IndividualFacilityUse</code></a>
      </td>
      <td style="text-align:left">
        <p>Inverse of the oa:aggregateFacilityUse property. Relates a oa:FacilityUse
          (e.g. an opportunity to play tennis at a specific location) to an oa:IndividualFacilityUse
          (e.g. an opportunity to play tennis on a specific court).</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;individualFacilityUse&quot;: [<br />  {<br />    &quot;@type&quot;: &quot;IndividualFacilityUse&quot;,<br />    &quot;@id&quot;: &quot;http://www.example.org/facility-uses/1&quot;,<br />    &quot;name&quot;: &quot;Tennis Court 1&quot;<br />  }<br />]</code>
        </p>
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
      <td style="text-align:left"><b>beta:bookingChannel</b>
      </td>
      <td style="text-align:left">Array of <a href="https://openactive.io/ns-beta#BookingChannelType"><code>BookingChannelType</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/161">Proposal #161</a>
        </p>
        <p>The channels through which a booking can be made.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:facilitySetting</b>
      </td>
      <td style="text-align:left"> <a href="https://openactive.io/ns-beta#FacilitySettingType"><code>FacilitySettingType</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/facility-types/issues/1">Proposal #1</a>
        </p>
        <p>Whether the event or facility is indoor or outdoor.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:facilityType</b>
      </td>
      <td style="text-align:left">Array of <a href="http://www.w3.org/2004/02/skos/core#Concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/facility-types/issues/1">Proposal #1</a>
        </p>
        <p>The type of facility in use. See <a href="https://openactive.io/facility-types/">https://openactive.io/facility-types/</a>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:formattedDescription</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/276">Proposal #276</a>
        </p>
        <p>Sometimes a description is stored with formatting (e.g. href, bold, italics,
          embedded YouTube videos). This formatting can be useful for data consumers.
          This property must contain HTML.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:isWheelchairAccessible</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/166">Proposal #166</a>
        </p>
        <p>A property that details whether the event is suitable for wheelchair access.
          Placed on Event as this field could be used to detail whether the Event
          is suitable, as well as the Place.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:offerValidityPeriod</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/204">Proposal #204</a>
        </p>
        <p>Duration before the event for which the associated Offers are valid</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:sportsActivityLocation</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/SportsActivityLocation"><code>SportsActivityLocation</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/110">Proposal #110</a>
        </p>
        <p>Internal location of the event, e.g. Court 1</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:video</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/VideoObject"><code>VideoObject</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/88">Proposal #88</a>
        </p>
        <p>A related video object.</p>
      </td>
    </tr>
  </tbody>
</table>

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

