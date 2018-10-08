---
description: This page describes the EventSeries type.
---

# EventSeries

This type is derived from [https://pending.schema.org/EventSeries](https://pending.schema.org/EventSeries), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
        Must always be present and set to <code>"type": "EventSeries"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>activity</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Specifies the physical activity or activities that will take place during an event.</p><p></br><b>Example</b></p><p><code>"activity": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;id&quot;:&nbsp;&quot;https://example.com/reference/activities#Speedball&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;inScheme&quot;:&nbsp;&quot;https://example.com/reference/activities&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;prefLabel&quot;:&nbsp;&quot;Speedball&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Concept&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
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
        <a href="https://docs.openactive.io/data-model/types/organization"><code>Organization</code></a><br/> - or - <br/><a href="https://docs.openactive.io/data-model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">
        <p>The person or organization ultimately responsible for an event. An organizer might be an  schema:Organization or a schema:Person.</p><p></br><b>Example</b></p><p><code>"organizer": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Central&nbsp;Speedball&nbsp;Association&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Organization&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://www.speedball-world.com&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A URL to a web page (or section of a page) that describes the event.</p><p></br><b>Example</b></p><p><code>"url": "https://example.com/event/1234"</code></p>
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
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"id": "https://example.com/event/1234"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ageRange</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/data-model/types/quantitativevalue"><code>QuantitativeValue</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates that an event is suitable for a specific age range. If only a single age is specified then this is assumed to be a minimum age. Age ranges can be specified as follows: 18-30</p><p></br><b>Example</b></p><p><code>"ageRange": {<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;QuantitativeValue&quot;,<br/>&nbsp;&nbsp;&quot;minValue&quot;:&nbsp;15,<br/>&nbsp;&nbsp;&quot;maxValue&quot;:&nbsp;60<br/>}</code></p>
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
      <td style="text-align:left"><b>eventStatus</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/EventStatusType"><code>EventStatusType</code></a>
      </td>
      <td style="text-align:left">
        <p>The status of an event. Can be used to indicate rescheduled or cancelled events</p><p></br><b>Example</b></p><p><code>"eventStatus": "https://schema.org/EventScheduled"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>genderRestriction</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/GenderRestrictionType"><code>GenderRestrictionType</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates that an event is restricted to male, female or a mixed audience. If a gender restriction isn't specified then applications should assume that an event is suitable for a mixed audience</p><p></br><b>Example</b></p><p><code>"genderRestriction": "https://openactive.io/Female"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>image</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>An image or photo that depicts the event, e.g. a photo taken at a previous event.</p><p></br><b>Example</b></p><p><code>"image": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;thumbnail&quot;:&nbsp;&quot;http://example.com/static/image/speedball_thumbnail.jpg&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;ImageObject&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.com/static/image/speedball_large.jpg&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>leader</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">
        <p>Refers to people (schema:Person) or organizations (schema:Organization) who will be leading an event. E.g. a coach. This is a more specific role than an organiser or a contributor. The person will need to have given their consent for their personal information to be present in the Open Data.</p><p></br><b>Example</b></p><p><code>"leader": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;familyName&quot;:&nbsp;&quot;Smith&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;givenName&quot;:&nbsp;&quot;Nicole&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;id&quot;:&nbsp;&quot;https://example.com/locations/1234ABCD/leaders/89&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;identifier&quot;:&nbsp;89,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Person&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>level</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Text"><code>Text</code></a><br/> - or - <br/>Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>A general purpose property for specifying the suitability of an event for different participant “levels”. E.g. beginner/intermediate/advanced. Or in the case of martial arts, specific belt requirements. Values should ideally be drawn from a controlled vocabulary.</p><p></br><b>Example</b></p><p><code>"level": "TODO"</code></p>
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
        Array of <a href="https://docs.openactive.io/data-model/types/offer"><code>Offer</code></a>
      </td>
      <td style="text-align:left">
        <p>TODO</p></p>
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
      <td style="text-align:left"><b>@context</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a><br/> - or - <br/>Array of <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>TODO</p><p></br><b>Example</b></p><p><code>"@context": "https://openactive.io/"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>accessibilityInformation</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provide additional, specific documentation for participants about how disabilities are, or can be supported at the Event.</p><p></br><b>Example</b></p><p><code>"accessibilityInformation": "TODO"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>accessibilitySupport</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Text"><code>Text</code></a><br/> - or - <br/>Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>Used to specify the types of disabilities or impairments that are supported at an event.</p><p></br><b>Example</b></p><p><code>"accessibilitySupport": "TODO"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>attendeeInstructions</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides additional notes and instructions for event attendees. E.g. more information on how to find the event, what to bring, etc.</p><p></br><b>Example</b></p><p><code>"attendeeInstructions": "TODO"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a><br/> - or - <br/>Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Provides a set of tags that help categorise and describe an event, e.g. its intensity, purpose, etc.</p><p></br><b>Example</b></p><p><code>"category": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;id&quot;:&nbsp;&quot;https://example.com/reference/categories#Top%20Club%20Level&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;inScheme&quot;:&nbsp;&quot;https://example.com/reference/categories&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;prefLabel&quot;:&nbsp;&quot;Top&nbsp;Club&nbsp;Level&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Concept&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributor</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">
        <p>A Person who contributes to the facilitation of the Event.</p><p></br><b>Example</b></p><p><code>"contributor": {}</code></p>
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
      <td style="text-align:left"><b>endDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a><br/> - or - <br/><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The end date and time of the event. Can be specified as a schema:Date or  schema:DateTime</p><p>It is recommended that publishers provide either an schema:endDate or a schema:duration for an event.</p><p></br><b>Example</b></p><p><code>"endDate": "2018-01-27T12:00:00Z"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>eventSchedule</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/schedule"><code>Schedule</code></a>
      </td>
      <td style="text-align:left">
        <p>TODO</p><p></br><b>Example</b></p><p><code>"eventSchedule": {}</code></p>
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
      <td style="text-align:left"><b>location</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/data-model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        <p>The location at which the event will take place. Or, in the case of events that may span multiple locations, the initial meeting or starting point.</p><p>It is recommended that locations should be specified as a <a href="/models/place">Place</a> complete with a fully described geographic location and/or address.If only an address is available then this should be described as a <a href="/models/postaladdress">PostalAddress</a>.</p><p>Applications may use <a href="https://schema.org/Text">schema:Text</a> to provide a more general description of a location (&quot;In Victoria Park, near the lake&quot;), but this is not recommended: consuming applications will be unable to help users discover opportunities based on their location.</p><p></br><b>Example</b></p><p><code>"location": {<br/>&nbsp;&nbsp;&quot;address&quot;:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;addressLocality&quot;:&nbsp;&quot;New&nbsp;Malden&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;addressRegion&quot;:&nbsp;&quot;London&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;postalCode&quot;:&nbsp;&quot;NW5&nbsp;3DU&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;streetAddress&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School,&nbsp;46A&nbsp;West&nbsp;Barnes&nbsp;Lane&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;PostalAddress&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&quot;description&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School&nbsp;in&nbsp;London&quot;,<br/>&nbsp;&nbsp;&quot;geo&quot;:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;latitude&quot;:&nbsp;51.4034423828125,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;longitude&quot;:&nbsp;-0.2369088977575302,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;GeoCoordinates&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&quot;id&quot;:&nbsp;&quot;https://example.com/locations/1234ABCD&quot;,<br/>&nbsp;&nbsp;&quot;identifier&quot;:&nbsp;&quot;1234ABCD&quot;,<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School&quot;,<br/>&nbsp;&nbsp;&quot;telephone&quot;:&nbsp;&quot;01253&nbsp;473934&quot;,<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Place&quot;<br/>}</code></p>
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
      <td style="text-align:left"><b>potentialAction</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/action"><code>Action</code></a>
      </td>
      <td style="text-align:left">
        <p>The possible actions that a user may make. e.g. Book.</p><p></br><b>Example</b></p><p><code>"potentialAction": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Book&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;target&quot;:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;encodingType&quot;:&nbsp;&quot;application/vnd.openactive.v1.0+json&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;httpMethod&quot;:&nbsp;&quot;POST&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;EntryPoint&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;https://example.com/orders&quot;<br/>&nbsp;&nbsp;&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Action&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>programme</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/data-model/types/brand"><code>Brand</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates that an event will be organised according to a specific Programme.</p><p></br><b>Example</b></p><p><code>"programme": {<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Brand&quot;,<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Play&nbsp;Ball!&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.org/brand/play-ball&quot;<br/>}</code></p>
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
      <td style="text-align:left"><b>startDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a><br/> - or - <br/><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The start date and time of the event. Can be specified as a schema:Date or schema:DateTime.</p><p></br><b>Example</b></p><p><code>"startDate": "2018-01-27T12:00:00Z"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>subEvent</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/event"><code>Event</code></a>
      </td>
      <td style="text-align:left">
        <p>Relates a parent event to a child event. Properties describing the parent event can be assumed to apply to the child, unless otherwise specified. A child event might be a specific instance of an Event within a schedule</p></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>superEvent</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/data-model/types/event"><code>Event</code></a>
      </td>
      <td style="text-align:left">
        <p>Relates a child event to a parent event. Properties describing the parent event can be assumed to apply to the child, unless otherwise specified. A parent event might specify a recurring schedule, of which the child event is one specific instance</p></p>
      </td>
    </tr>
  </tbody>
</table>


