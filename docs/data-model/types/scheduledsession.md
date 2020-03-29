---
description: This page describes the ScheduledSession type.
---

# ScheduledSession

This type is derived from [https://schema.org/Event](https://schema.org/Event), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
      <td style="text-align:left"><b>type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>"type": "ScheduledSession"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>startDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a><br/> - or - <br/><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The start date and time of the event. Can be specified as a schema:Date or schema:DateTime.</p><p></br><b>Example</b></p><p><code>"startDate": "2018-01-27T12:00:00Z"</code></p>
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
      <td style="text-align:left"><b>id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"id": "https://example.com/event/1234512345"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>endDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a><br/> - or - <br/><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The end date and time of the event. Can be specified as a schema:Date or  schema:DateTime</p><p>It is recommended that publishers provide either an schema:endDate or a schema:duration for an event.</p><p></br><b>Example</b></p><p><code>"endDate": "2018-01-27T12:00:00Z"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>eventStatus</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/EventStatusType"><code>EventStatusType</code></a>
      </td>
      <td style="text-align:left">
        <p>The status of an event. Can be used to indicate rescheduled or cancelled events</p><p></br><b>Example</b></p><p><code>"eventStatus": "https://schema.org/EventScheduled"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>leader</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">
        <p>Refers to a person (schema:Person) who will be leading an event. E.g. a coach. This is a more specific role than an organiser or a contributor. The person will need to have given their consent for their personal information to be present in the Open Data.</p><p></br><b>Example</b></p><p><code>"leader": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Person&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;familyName&quot;:&nbsp;&quot;Smith&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;givenName&quot;:&nbsp;&quot;Nicole&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;gender&quot;:&nbsp;&quot;https://schema.org/Male&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@id&quot;:&nbsp;&quot;https://example.com/locations/1234ABCD/leaders/89&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;identifier&quot;:&nbsp;89<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>maximumAttendeeCapacity</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>The maximum capacity of the Event.</p><p></br><b>Example</b></p><p><code>"maximumAttendeeCapacity": 30</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>offers</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/offer"><code>Offer</code></a>
      </td>
      <td style="text-align:left">
        <p>An array of schema:Offer that include the price of attending.</p><p></br><b>Example</b></p><p><code>"offers": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Offer&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;identifier&quot;:&nbsp;&quot;OX-AD&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Adult&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;price&quot;:&nbsp;3.3,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;priceCurrency&quot;:&nbsp;&quot;GBP&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;https://profile.everyoneactive.com/booking?Site=0140&Activities=1402CBP20150217&Culture=en-GB&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>remainingAttendeeCapacity</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>The number of places that are still available for the Event.</p><p></br><b>Example</b></p><p><code>"remainingAttendeeCapacity": 20</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A URL to a web page (or section of a page) that describes the event.</p><p></br><b>Example</b></p><p><code>"url": "https://example.com/event/1234"</code></p>
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
      <td style="text-align:left"><b>activity</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Specifies the physical activity or activities that will take place during an event.</p><p></br><b>Example</b></p><p><code>"activity": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Concept&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@id&quot;:&nbsp;&quot;https://openactive.io/activity-list#5e78bcbe-36db-425a-9064-bf96d09cc351&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;prefLabel&quot;:&nbsp;&quot;Bodypump™&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;inScheme&quot;:&nbsp;&quot;https://openactive.io/activity-list&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ageRange</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/quantitativevalue"><code>QuantitativeValue</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates that an event is suitable for a specific age range. If only a single age is specified then this is assumed to be a minimum age. Age ranges can be specified as follows: 18-30</p><p></br><b>Example</b></p><p><code>"ageRange": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;QuantitativeValue&quot;,<br/>&nbsp;&nbsp;&quot;minValue&quot;:&nbsp;15,<br/>&nbsp;&nbsp;&quot;maxValue&quot;:&nbsp;60<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>attendeeInstructions</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides additional notes and instructions for event attendees. E.g. more information on how to find the event, what to bring, etc.</p><p></br><b>Example</b></p><p><code>"attendeeInstructions": "Ensure you bring trainers and a bottle of water."</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a><br/> - or - <br/>Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides a set of tags that help categorise and describe an event, e.g. its intensity, purpose, etc.</p><p></br><b>Example</b></p><p><code>"category": [<br/>&nbsp;&nbsp;&quot;High&nbsp;Intensity&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributor</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">
        <p>A Person who contributes to the facilitation of the Event.</p><p></br><b>Example</b></p><p><code>"contributor": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Person&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;familyName&quot;:&nbsp;&quot;Smith&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;givenName&quot;:&nbsp;&quot;Nicole&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@id&quot;:&nbsp;&quot;https://example.com/locations/1234ABCD/leaders/89&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;identifier&quot;:&nbsp;89<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A free text description of the event</p><p></br><b>Example</b></p><p><code>"description": "An fast paced game that incorporates netball, handball and football."</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>duration</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        <p>The duration of the event given in [ISO8601] format.</p><p></br><b>Example</b></p><p><code>"duration": "PT1H"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>eventAttendanceMode</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/EventAttendanceModeEnumeration"><code>EventAttendanceModeEnumeration</code></a>
      </td>
      <td style="text-align:left">
        <p>The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix.</p><p></br><b>Example</b></p><p><code>"eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>genderRestriction</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/GenderRestrictionType"><code>GenderRestrictionType</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates that an event is restricted to male, female or a mixed audience. If a gender restriction isn't specified then applications should assume that an event is suitable for a mixed audience</p><p></br><b>Example</b></p><p><code>"genderRestriction": "https://openactive.io/FemaleOnly"</code></p>
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
      <td style="text-align:left"><b>image</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>An image or photo that depicts the event, e.g. a photo taken at a previous event.</p><p></br><b>Example</b></p><p><code>"image": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;ImageObject&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.com/static/image/speedball_large.jpg&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;thumbnail&quot;:&nbsp;[<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;ImageObject&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.com/static/image/speedball_thumbnail.jpg&quot;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;]<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>isAccessibleForFree</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">
        <p>Whether the Event is accessible without charge.</p><p></br><b>Example</b></p><p><code>"isAccessibleForFree": "true"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>isCoached</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">
        <p>A boolean property that indicates whether an Event will be coached. This flag allows an Event to be marked as being coached without having to specify a named individual as a coach. This addresses both privacy concerns and also scenarios where the actual coach may only be decided on the day.</p><p></br><b>Example</b></p><p><code>"isCoached": "true"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>level</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Text"><code>Text</code></a><br/> - or - <br/>Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>A general purpose property for specifying the suitability of an event for different participant “levels”. E.g. beginner/intermediate/advanced. Or in the case of martial arts, specific belt requirements.</p><p></br><b>Example</b></p><p><code>"level": [<br/>&nbsp;&nbsp;&quot;beginner&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>location</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        <p>The location at which the event will take place. Or, in the case of events that may span multiple locations, the initial meeting or starting point.</p><p>It is recommended that locations should be specified as a <a href="/models/place">Place</a> complete with a fully described geographic location and/or address.</p><p>If only an address is available then this should be described as a <a href="/models/postaladdress">PostalAddress</a>.</p><p>Applications may use <a href="https://schema.org/Text">schema:Text</a> to provide a more general description of a location (&quot;In Victoria Park, near the lake&quot;), but this is not recommended: consuming applications will be unable to help users discover opportunities based on their location.</p><p></br><b>Example</b></p><p><code>"location": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Place&quot;,<br/>&nbsp;&nbsp;&quot;@id&quot;:&nbsp;&quot;https://example.com/locations/1234ABCD&quot;,<br/>&nbsp;&nbsp;&quot;identifier&quot;:&nbsp;&quot;1234ABCD&quot;,<br/>&nbsp;&nbsp;&quot;address&quot;:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;addressLocality&quot;:&nbsp;&quot;New&nbsp;Malden&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;addressRegion&quot;:&nbsp;&quot;London&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;postalCode&quot;:&nbsp;&quot;NW5&nbsp;3DU&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;streetAddress&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School,&nbsp;46A&nbsp;West&nbsp;Barnes&nbsp;Lane&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;PostalAddress&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&quot;description&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School&nbsp;in&nbsp;London&quot;,<br/>&nbsp;&nbsp;&quot;geo&quot;:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;latitude&quot;:&nbsp;51.4034423828125,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;longitude&quot;:&nbsp;-0.2369088977575302,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;GeoCoordinates&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School&quot;,<br/>&nbsp;&nbsp;&quot;telephone&quot;:&nbsp;&quot;01253&nbsp;473934&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>maximumVirtualAttendeeCapacity</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates the maximum number of connections to a shared virtual space.</p><p></br><b>Example</b></p><p><code>"maximumVirtualAttendeeCapacity": 20</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>meetingPoint</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Instructions for the attendees of an Event about where they should meet the organizer or leader at the start of the event. Some larger locations may have several possible meeting points, so this property provides additional more specific directions.</p><p></br><b>Example</b></p><p><code>"meetingPoint": "At the entrance to the park"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the event</p><p></br><b>Example</b></p><p><code>"name": "Speedball"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>organizer</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a><br/> - or - <br/><a href="https://developer.openactive.io/data-model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">
        <p>The person or organization ultimately responsible for an event. An organizer might be an  schema:Organization or a schema:Person.</p><p></br><b>Example</b></p><p><code>"organizer": {<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Central&nbsp;Speedball&nbsp;Association&quot;,<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Organization&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://www.speedball-world.com&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>programme</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/brand"><code>Brand</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates that an event will be organised according to a specific Programme.</p><p></br><b>Example</b></p><p><code>"programme": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Brand&quot;,<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Play&nbsp;Ball!&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.org/brand/play-ball&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>schedulingNote</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides a note from an organizer relating to how this Event is scheduled.</p><p></br><b>Example</b></p><p><code>"schedulingNote": "This event doesn't run during school holidays"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>superEvent</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/event"><code>Event</code></a><br/> - or - <br/><a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>Relates a child event to a parent event. Properties describing the parent event can be assumed to apply to the child, unless otherwise specified. A parent event might specify a recurring schedule, of which the child event is one specific instance</p>
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
      <td style="text-align:left"><b>beta:affiliatedLocation</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/227">Proposal #227</a></p><p>The original location of the event before it was moved online.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:attendeeCount</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/ns-beta/issues/12">Proposal #12</a></p><p>For events that have an unlimited number of tickets, captures the number of attendees (actual attendance).</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:distance</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/QuantitativeValue"><code>QuantitativeValue</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/ns-beta/issues/3">Proposal #3</a></p><p>The distance of a run, cycle or other activity. Must also include units.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:donationPaymentUrl</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/234">Proposal #234</a></p><p>The URL of the webpage where the activity provider accepts donations.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:estimatedDuration</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/QuantitativeValue"><code>QuantitativeValue</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/201">Proposal #201</a></p><p>A property that allows an Event duration to be represented as a range (e.g. 0-30mins, 30-60mins, 60-90mins, 90+).</p>
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
      <td style="text-align:left"><b>beta:formattedDescription</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/ns-beta/issues/2">Proposal #2</a></p><p>Sometimes a description is stored with formatting (e.g. href, bold, italics, embedded YouTube videos). This formatting can be useful for data consumers.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:isFirstSessionAccessibleForFree</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/232">Proposal #232</a></p><p>A property that indicates whether the first session is free.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:isInteractivityPreferred</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/230">Proposal #230</a></p><p>Indicates whether the virtual event is interactive (e.g. Zoom with participant microphones and cameras on), or is just a one-way broadcast (e.g. Facebook Live, Instagram Live, Zoom with participant microphones and cameras off).</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:isVirtuallyCoached</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/71">Proposal #71</a></p><p>A property that indicates whether the event is led by a virtual coach. Only relevant if an event <code>isCoached</code>. If not provided is assumed to be <code>false</code>.</p>
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
      <td style="text-align:left"><b>beta:participantSuppliedEquipment</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/requiredstatustype"><code>RequiredStatusType</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/229">Proposal #229</a></p><p>Indicates whether the participant must or may supply equipment for use in the Event.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:registrationCount</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/ns-beta/issues/13">Proposal #13</a></p><p>For events that have an unlimited number of tickets, captures the number of registrations (intention to attend).</p>
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
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/88">Proposal #88</a></p><p>An related video object.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beta:virtualLocation</b></td>
      <td style="text-align:left">
        <a href="https://pending.schema.org/VirtualLocation"><code>VirtualLocation</code></a>
      </td>
      <td style="text-align:left">
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/224">Proposal #224</a></p><p>Describes a means of electronic access to a shared virtual space.</p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
