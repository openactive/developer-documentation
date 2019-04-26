---
description: This page describes the CourseInstance type.
---

# CourseInstance

This type is derived from [https://pending.schema.org/CourseInstance](https://pending.schema.org/CourseInstance), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
      <td style="text-align:left">Must always be present and set to <code>&quot;type&quot;: &quot;CourseInstance&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>activity</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Specifies the physical activity or activities that will take place during
          an event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;activity&quot;: [<br />  {<br />    &quot;type&quot;: &quot;Concept&quot;,<br />    &quot;id&quot;: &quot;https://openactive.io/activity-list#5e78bcbe-36db-425a-9064-bf96d09cc351&quot;,<br />    &quot;prefLabel&quot;: &quot;Bodypump&#x2122;&quot;,<br />    &quot;inScheme&quot;: &quot;https://openactive.io/activity-list&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>location</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        <p>The location at which the event will take place. Or, in the case of events
          that may span multiple locations, the initial meeting or starting point.</p>
        <p>It is recommended that locations should be specified as a <a href="https://github.com/openactive/developer-documentation/tree/82461b0ee6de9cd5f8c556d362edda33169e04d6/models/place/README.md">Place</a> complete
          with a fully described geographic location and/or address.</p>
        <p>If only an address is available then this should be described as a <a href="https://github.com/openactive/developer-documentation/tree/82461b0ee6de9cd5f8c556d362edda33169e04d6/models/postaladdress/README.md">PostalAddress</a>.</p>
        <p>Applications may use <a href="https://schema.org/Text">schema:Text</a> to
          provide a more general description of a location (&quot;In Victoria Park,
          near the lake&quot;), but this is not recommended: consuming applications
          will be unable to help users discover opportunities based on their location.</p>
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
        <p>The name of the event</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;name&quot;: &quot;Speedball&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>offers</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/offer"><code>Offer</code></a>
      </td>
      <td style="text-align:left">
        <p>An array of schema:Offer that include the price of attending.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;offers&quot;: [<br />  {<br />    &quot;type&quot;: &quot;Offer&quot;,<br />    &quot;identifier&quot;: &quot;OX-AD&quot;,<br />    &quot;name&quot;: &quot;Adult&quot;,<br />    &quot;price&quot;: 3.3,<br />    &quot;priceCurrency&quot;: &quot;GBP&quot;,<br />    &quot;url&quot;: &quot;https://profile.everyoneactive.com/booking?Site=0140&amp;Activities=1402CBP20150217&amp;Culture=en-GB&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>organizer</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a>
        <br
        />- or -
        <br /><a href="https://developer.openactive.io/data-model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">
        <p>The person or organization ultimately responsible for an event. An organizer
          might be an schema:Organization or a schema:Person.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;organizer&quot;: {<br />  &quot;name&quot;: &quot;Central Speedball Association&quot;,<br />  &quot;type&quot;: &quot;Organization&quot;,<br />  &quot;url&quot;: &quot;http://www.speedball-world.com&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A URL to a web page (or section of a page) that describes the event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;url&quot;: &quot;https://example.com/event/1234&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>###  **Required options** 

While these properties are marked as optional in the specification, a data publisher must provide either a `startDate` or specify an `eventSchedule` for an event.

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
      <td style="text-align:left"><b>startDate</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/DateTime"><code>DateTime</code></a>
        <br />- or -
        <br /><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The start date and time of the event. Can be specified as a schema:Date
          or schema:DateTime.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;startDate&quot;: &quot;2018-01-27T12:00:00Z&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>eventSchedule</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/schedule"><code>Schedule</code></a>
      </td>
      <td style="text-align:left">
        <p>A an array of oa:Schedule or oa:PartialSchedule, which represents a recurrence
          pattern.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;eventSchedule&quot;: [<br />  {<br />    &quot;type&quot;: &quot;PartialSchedule&quot;,<br />    &quot;repeatFrequency&quot;: &quot;P1W&quot;,<br />    &quot;startTime&quot;: &quot;20:15&quot;,<br />    &quot;endTime&quot;: &quot;20:45&quot;,<br />    &quot;byDay&quot;: [<br />      &quot;http://schema.org/Tuesday&quot;<br />    ]<br />  }<br />]</code>
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
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;id&quot;: &quot;https://example.com/event/12345&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ageRange</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/quantitativevalue"><code>QuantitativeValue</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates that an event is suitable for a specific age range. If only
          a single age is specified then this is assumed to be a minimum age. Age
          ranges can be specified as follows: 18-30</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;ageRange&quot;: {<br />  &quot;type&quot;: &quot;QuantitativeValue&quot;,<br />  &quot;minValue&quot;: 15,<br />  &quot;maxValue&quot;: 60<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A free text description of the event</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;description&quot;: &quot;An fast paced game that incorporates netball, handball and football.&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>endDate</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/DateTime"><code>DateTime</code></a>
        <br />- or -
        <br /><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The end date and time of the event. Can be specified as a schema:Date
          or schema:DateTime</p>
        <p>It is recommended that publishers provide either an schema:endDate or
          a schema:duration for an event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;endDate&quot;: &quot;2018-01-27T12:00:00Z&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>eventStatus</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/EventStatusType"><code>EventStatusType</code></a>
      </td>
      <td style="text-align:left">
        <p>The status of an event. Can be used to indicate rescheduled or cancelled
          events</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;eventStatus&quot;: &quot;https://schema.org/EventScheduled&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>genderRestriction</b>
      </td>
      <td style="text-align:left"> <a href="https://openactive.io/GenderRestrictionType"><code>GenderRestrictionType</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates that an event is restricted to male, female or a mixed audience.
          If a gender restriction isn&apos;t specified then applications should assume
          that an event is suitable for a mixed audience</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;genderRestriction&quot;: &quot;https://openactive.io/FemaleOnly&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>image</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>An image or photo that depicts the event, e.g. a photo taken at a previous
          event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;image&quot;: [<br />  {<br />    &quot;type&quot;: &quot;ImageObject&quot;,<br />    &quot;url&quot;: &quot;http://example.com/static/image/speedball_large.jpg&quot;,<br />    &quot;thumbnail&quot;: [<br />      {<br />        &quot;type&quot;: &quot;ImageObject&quot;,<br />        &quot;url&quot;: &quot;http://example.com/static/image/speedball_thumbnail.jpg&quot;<br />      }<br />    ]<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>leader</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">
        <p>Refers to a person (schema:Person) who will be leading an event. E.g.
          a coach. This is a more specific role than an organiser or a contributor.
          The person will need to have given their consent for their personal information
          to be present in the Open Data.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;leader&quot;: [<br />  {<br />    &quot;type&quot;: &quot;Person&quot;,<br />    &quot;familyName&quot;: &quot;Smith&quot;,<br />    &quot;givenName&quot;: &quot;Nicole&quot;,<br />    &quot;gender&quot;: &quot;https://schema.org/Male&quot;,<br />    &quot;id&quot;: &quot;https://example.com/locations/1234ABCD/leaders/89&quot;,<br />    &quot;identifier&quot;: 89<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>level</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/Text"><code>Text</code></a>
        <br />- or -
        <br />Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>A general purpose property for specifying the suitability of an event
          for different participant &#x201C;levels&#x201D;. E.g. beginner/intermediate/advanced.
          Or in the case of martial arts, specific belt requirements.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;level&quot;: [<br />  &quot;beginner&quot;<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>maximumAttendeeCapacity</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>The maximum capacity of the Event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;maximumAttendeeCapacity&quot;: 30</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>remainingAttendeeCapacity</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>The number of places that are still available for the Event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;remainingAttendeeCapacity&quot;: 20</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>startDate</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/DateTime"><code>DateTime</code></a>
        <br />- or -
        <br /><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The start date and time of the event. Can be specified as a schema:Date
          or schema:DateTime.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;startDate&quot;: &quot;2018-01-27T12:00:00Z&quot;</code>
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
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
        <br />- or -
        <br />Array of <a href="https://schema.org/URL"><code>URL</code></a>
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
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a>
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
        <p>Provides additional notes and instructions for event attendees. E.g. more
          information on how to find the event, what to bring, etc.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;attendeeInstructions&quot;: &quot;Ensure you bring trainers and a bottle of water.&quot;</code>
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
        <p>Provides a set of tags that help categorise and describe an event, e.g.
          its intensity, purpose, etc.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;category&quot;: [<br />  &quot;High Intensity&quot;<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributor</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">
        <p>A Person who contributes to the facilitation of the Event.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;contributor&quot;: [<br />  {<br />    &quot;type&quot;: &quot;Person&quot;,<br />    &quot;familyName&quot;: &quot;Smith&quot;,<br />    &quot;givenName&quot;: &quot;Nicole&quot;,<br />    &quot;id&quot;: &quot;https://example.com/locations/1234ABCD/leaders/89&quot;,<br />    &quot;identifier&quot;: 89<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>duration</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        <p>The duration of the event given in [ISO8601] format.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;duration&quot;: &quot;PT1H&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>eventSchedule</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/schedule"><code>Schedule</code></a>
      </td>
      <td style="text-align:left">
        <p>A an array of oa:Schedule or oa:PartialSchedule, which represents a recurrence
          pattern.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;eventSchedule&quot;: [<br />  {<br />    &quot;type&quot;: &quot;PartialSchedule&quot;,<br />    &quot;repeatFrequency&quot;: &quot;P1W&quot;,<br />    &quot;startTime&quot;: &quot;20:15&quot;,<br />    &quot;endTime&quot;: &quot;20:45&quot;,<br />    &quot;byDay&quot;: [<br />      &quot;http://schema.org/Tuesday&quot;<br />    ]<br />  }<br />]</code>
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
      <td style="text-align:left"><b>isAccessibleForFree</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">
        <p>Whether the Event is accessible without charge.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;isAccessibleForFree&quot;: &quot;true&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>isCoached</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">
        <p>A boolean property that indicates whether an Event will be coached. This
          flag allows an Event to be marked as being coached without having to specify
          a named individual as a coach. This addresses both privacy concerns and
          also scenarios where the actual coach may only be decided on the day.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;isCoached&quot;: &quot;true&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>meetingPoint</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Instructions for the attendees of an Event about where they should meet
          the organizer or leader at the start of the event. Some larger locations
          may have several possible meeting points, so this property provides additional
          more specific directions.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;meetingPoint&quot;: &quot;At the entrance to the park&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>potentialAction</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/action"><code>Action</code></a>
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
    <tr>
      <td style="text-align:left"><b>programme</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/brand"><code>Brand</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates that an event will be organised according to a specific Programme.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;programme&quot;: {<br />  &quot;type&quot;: &quot;Brand&quot;,<br />  &quot;name&quot;: &quot;Play Ball!&quot;,<br />  &quot;url&quot;: &quot;http://example.org/brand/play-ball&quot;<br />}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>schedulingNote</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides a note from an organizer relating to how this Event is scheduled.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;schedulingNote&quot;: &quot;This event doesn&apos;t run during school holidays&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>subEvent</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/event"><code>Event</code></a>
      </td>
      <td style="text-align:left">Relates a parent event to a child event. Properties describing the parent
        event can be assumed to apply to the child, unless otherwise specified.
        A child event might be a specific instance of an Event within a schedule</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>superEvent</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/event"><code>Event</code></a>
      </td>
      <td style="text-align:left">Relates a child event to a parent event. Properties describing the parent
        event can be assumed to apply to the child, unless otherwise specified.
        A parent event might specify a recurring schedule, of which the child event
        is one specific instance</td>
    </tr>
  </tbody>
</table>Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

