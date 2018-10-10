---
description: This page describes the FacilityUse type.
---

# FacilityUse

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
      <td style="text-align:left"><b>type</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">Must always be present and set to <code>&quot;type&quot;: &quot;FacilityUse&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>activity</b>
      </td>
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Specifies the physical activity or activities that will take place during
          a facility use.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;activity&quot;: [<br />  {<br />    &quot;type&quot;: &quot;Concept&quot;,<br />    &quot;id&quot;: &quot;https://openactive.io/activity-list#c0360db0-a817-4bae-9167-40f89b49fc9e&quot;,<br />    &quot;prefLabel&quot;: &quot;Badminton&quot;,<br />    &quot;inScheme&quot;: &quot;https://openactive.io/activity-list&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>location</b>
      </td>
      <td style="text-align:left"> <a href="https://docs.openactive.io/data-model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        <p>The location at which the facility use will take place.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;location&quot;: {<br />  &quot;address&quot;: {<br />    &quot;addressLocality&quot;: &quot;New Malden&quot;,<br />    &quot;addressRegion&quot;: &quot;London&quot;,<br />    &quot;postalCode&quot;: &quot;NW5 3DU&quot;,<br />    &quot;streetAddress&quot;: &quot;Raynes Park High School, 46A West Barnes Lane&quot;,<br />    &quot;type&quot;: &quot;PostalAddress&quot;<br />  },<br />  &quot;description&quot;: &quot;Raynes Park High School in London&quot;,<br />  &quot;geo&quot;: {<br />    &quot;latitude&quot;: 51.4034423828125,<br />    &quot;longitude&quot;: -0.2369088977575302,<br />    &quot;type&quot;: &quot;GeoCoordinates&quot;<br />  },<br />  &quot;id&quot;: &quot;https://example.com/locations/1234ABCD&quot;,<br />  &quot;identifier&quot;: &quot;1234ABCD&quot;,<br />  &quot;name&quot;: &quot;Raynes Park High School&quot;,<br />  &quot;telephone&quot;: &quot;01253 473934&quot;,<br />  &quot;type&quot;: &quot;Place&quot;<br />}</code>
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
      <td style="text-align:left"></td>
      <td style="text-align:left">The organisation responsible for providing the facility</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/url"><code>url</code></a>
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
</table>### **Recommended fields**

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
      <td style="text-align:left"> <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;id&quot;: &quot;https://example.com/facility-use/112345&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A free text description of the facility use</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;description&quot;: &quot;An fast paced game that incorporates netball, handball and football.&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>event</b>
      </td>
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/slot"><code>Slot</code></a>
      </td>
      <td style="text-align:left">
        <p>An array of slots of availability of this FacilityUse.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;event&quot;: [<br />  {<br />    &quot;type&quot;: &quot;Slot&quot;,<br />    &quot;id&quot;: &quot;http://www.example.org/api/facility-uses/432#/event/2018-03-01T10:00:00Z&quot;,<br />    &quot;startDate&quot;: &quot;2018-03-01T11:00:00Z&quot;,<br />    &quot;endDate&quot;: &quot;2018-03-01T11:30:00Z&quot;,<br />    &quot;duration&quot;: &quot;PT30M&quot;,<br />    &quot;remainingUses&quot;: 3,<br />    &quot;maximumUses&quot;: 6<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hoursAvailable</b>
      </td>
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/openinghoursspecification"><code>OpeningHoursSpecification</code></a>
      </td>
      <td style="text-align:left">The times the facility use is available</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>image</b>
      </td>
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>An image or photo that depicts the facility use, e.g. a photo taken at
          a previous event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;image&quot;: [<br />  {<br />    &quot;thumbnail&quot;: &quot;http://example.com/static/image/speedball_thumbnail.jpg&quot;,<br />    &quot;type&quot;: &quot;ImageObject&quot;,<br />    &quot;url&quot;: &quot;http://example.com/static/image/speedball_large.jpg&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>offers</b>
      </td>
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/offer"><code>Offer</code></a>
      </td>
      <td style="text-align:left">
        <p>An array of schema:Offer that include the price of booking.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;offers&quot;: {<br />  &quot;type&quot;: &quot;Offer&quot;,<br />  &quot;identifier&quot;: &quot;OX-AD&quot;,<br />  &quot;name&quot;: &quot;Adult&quot;,<br />  &quot;price&quot;: 7.5,<br />  &quot;priceCurrency&quot;: &quot;GBP&quot;,<br />  &quot;url&quot;: &quot;https://profile.everyoneactive.com/booking?Site=0140&amp;Activities=1402CBP20150217&amp;Culture=en-GB&quot;<br />}</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Optional fields**

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
      <td style="text-align:left"><b>@context</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/url"><code>url</code></a>
        <br />- or -
        <br />Array of <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>This must be included in the top-most entity in the JSON model.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;@context&quot;: &quot;https://openactive.io/&quot;</code>
        </p>
      </td>
    </tr>
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
      <td style="text-align:left">Array of <a href="https://schema.org/Text"><code>Text</code></a>
        <br />- or -
        <br />Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Used to specify the types of disabilities or impairments that are supported
          at an event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;accessibilitySupport&quot;: [<br />  {<br />    &quot;type&quot;: &quot;Concept&quot;,<br />    &quot;id&quot;: &quot;https://openactive.io/accessibility-support#1393f2dc-3fcc-4be9-a99f-f1e51f5ad277&quot;,<br />    &quot;prefLabel&quot;: &quot;Visual impairment&quot;,<br />    &quot;inScheme&quot;: &quot;https://openactive.io/accessibility-support&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>attendeeInstructions</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides additional notes and instructions for users of a facility. E.g.
          more information on how to find it, what to bring, etc.</p>
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
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a>
        <br
        />- or -
        <br />Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides a set of tags that help categorise and describe a facility.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;category&quot;: [<br />  {<br />    &quot;id&quot;: &quot;https://example.com/reference/categories#Top%20Club%20Level&quot;,<br />    &quot;inScheme&quot;: &quot;https://example.com/reference/categories&quot;,<br />    &quot;prefLabel&quot;: &quot;Top Club Level&quot;,<br />    &quot;type&quot;: &quot;Concept&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
        <br />- or -
        <br /><a href="https://docs.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
        <br
        />- or -
        <br />Array of <a href="https://docs.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
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
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/individualfacilityuse"><code>IndividualFacilityUse</code></a>
      </td>
      <td style="text-align:left">
        <p>Inverse of the oa:aggregateFacilityUse property. Relates a oa:FacilityUse
          (e.g. an opportunity to play tennis at a specific location) to an oa:IndividualFacilityUse
          (e.g. an opportunity to play tennis on a specific court).</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;individualFacilityUse&quot;: [<br />  {<br />    &quot;type&quot;: &quot;IndividualFacilityUse&quot;,<br />    &quot;id&quot;: &quot;http://www.example.org/facility-uses/1&quot;,<br />    &quot;name&quot;: &quot;Tennis Court 1&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>potentialAction</b>
      </td>
      <td style="text-align:left">Array of <a href="https://docs.openactive.io/data-model/types/action"><code>Action</code></a>
      </td>
      <td style="text-align:left">
        <p>The possible actions that a user may make. e.g. Book.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;potentialAction&quot;: [<br />  {<br />    &quot;name&quot;: &quot;Book&quot;,<br />    &quot;target&quot;: {<br />      &quot;encodingType&quot;: &quot;application/vnd.openactive.v1.0+json&quot;,<br />      &quot;httpMethod&quot;: &quot;POST&quot;,<br />      &quot;type&quot;: &quot;EntryPoint&quot;,<br />      &quot;url&quot;: &quot;https://example.com/orders&quot;<br />    },<br />    &quot;type&quot;: &quot;Action&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>