---
description: This page describes the HeadlineEvent type.
---

# HeadlineEvent



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
      <td style="text-align:left"><b>activity</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        Specifies the physical activity or activities that will take place during an event.</br></br><b>Example</b></br></br><code>[<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;id&quot;:&nbsp;&quot;https://example.com/reference/activities#Speedball&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;inScheme&quot;:&nbsp;&quot;https://example.com/reference/activities&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;prefLabel&quot;:&nbsp;&quot;Speedball&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Concept&quot;<br/>&nbsp;&nbsp;}<br/>]</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>location</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/model/types/place"><code>Place</code></a>
      </td>
      <td style="text-align:left">
        The location at which the event will take place. Or, in the case of events that may span multiple locations, the initial meeting or starting point.</br></br>It is recommended that locations should be specified as a [Place](/models/place) complete with a fully described geographic location and/or address.<br/>If only an address is available then this should be described as a [PostalAddress](/models/postaladdress).</br></br>Applications may use [schema:Text](https://schema.org/Text) to provide a more general description of a location ("In Victoria Park, near the lake"), but this is not recommended: consuming applications will be unable to help users discover opportunities based on their location.</br></br><b>Example</b></br></br><code>{<br/>&nbsp;&nbsp;&quot;address&quot;:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;addressLocality&quot;:&nbsp;&quot;New&nbsp;Malden&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;addressRegion&quot;:&nbsp;&quot;London&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;postalCode&quot;:&nbsp;&quot;NW5&nbsp;3DU&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;streetAddress&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School,&nbsp;46A&nbsp;West&nbsp;Barnes&nbsp;Lane&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;PostalAddress&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&quot;description&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School&nbsp;in&nbsp;London&quot;,<br/>&nbsp;&nbsp;&quot;geo&quot;:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;latitude&quot;:&nbsp;51.4034423828125,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;longitude&quot;:&nbsp;-0.2369088977575302,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;GeoCoordinates&quot;<br/>&nbsp;&nbsp;},<br/>&nbsp;&nbsp;&quot;id&quot;:&nbsp;&quot;https://example.com/locations/1234ABCD&quot;,<br/>&nbsp;&nbsp;&quot;identifier&quot;:&nbsp;&quot;1234ABCD&quot;,<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Raynes&nbsp;Park&nbsp;High&nbsp;School&quot;,<br/>&nbsp;&nbsp;&quot;telephone&quot;:&nbsp;&quot;01253&nbsp;473934&quot;,<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Place&quot;<br/>}</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        The name of the event</br></br><b>Example</b></br></br><code>Speedball</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>organizer</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/model/types/organization"><code>Organization</code></a>
      </td>
      <td style="text-align:left">
        The person or organization ultimately responsible for an event. An organizer might be an  schema:Organization or a schema:Person.</br></br><b>Example</b></br></br><code>[<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Central&nbsp;Speedball&nbsp;Association&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Organization&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://www.speedball-world.com&quot;<br/>&nbsp;&nbsp;}<br/>]</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>startDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a>
      </td>
      <td style="text-align:left">
        The start date and time of the event. Can be specified as a schema:Date or schema:DateTime.</br></br><b>Example</b></br></br><code>2018-01-27T12:00:00Z</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        TODO</br></br><b>Example</b></br></br><code>HeadlineEvent</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        A URL to a web page (or section of a page) that describes the event.</br></br><b>Example</b></br></br><code>https://example.com/event/1234</code>
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
      <td style="text-align:left"><b>ageRange</b></td>
      <td style="text-align:left">
        <a href="https://docs.openactive.io/model/types/quantitativevalue"><code>QuantitativeValue</code></a>
      </td>
      <td style="text-align:left">
        Indicates that an event is suitable for a specific age range. If only a single age is specified then this is assumed to be a minimum age. Age ranges can be specified as follows: 18-30</br></br><b>Example</b></br></br><code>{<br/>&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;QuantitativeValue&quot;,<br/>&nbsp;&nbsp;&quot;minValue&quot;:&nbsp;15,<br/>&nbsp;&nbsp;&quot;maxValue&quot;:&nbsp;60<br/>}</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        A free text description of the event</br></br><b>Example</b></br></br><code>An fast paced game that incorporates netball, handball and football.</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>endDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a>
      </td>
      <td style="text-align:left">
        The end date and time of the event. Can be specified as a schema:Date or  schema:DateTime</br></br>It is recommended that publishers provide either an schema:endDate or a schema:duration for an event.</br></br><b>Example</b></br></br><code>2018-01-27T12:00:00Z</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>eventStatus</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/EventStatusType"><code>EventStatusType</code></a>
      </td>
      <td style="text-align:left">
        The status of an event. Can be used to indicate rescheduled or cancelled events</br></br><b>Example</b></br></br><code>https://schema.org/EventScheduled</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>genderRestriction</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/GenderRestrictionType"><code>GenderRestrictionType</code></a>
      </td>
      <td style="text-align:left">
        Indicates that an event is restricted to male, female or a mixed audience. If a gender restriction isn't specified then applications should assume that an event is suitable for a mixed audience</br></br><b>Example</b></br></br><code>https://openactive.io/Female</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        A unique url based identifier for the record</br></br><b>Example</b></br></br><code>https://example.com/event/1234</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>image</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        An image or photo that depicts the event, e.g. a photo taken at a previous event.</br></br><b>Example</b></br></br><code>[<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;thumbnail&quot;:&nbsp;&quot;http://example.com/static/image/speedball_thumbnail.jpg&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;ImageObject&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://example.com/static/image/speedball_large.jpg&quot;<br/>&nbsp;&nbsp;}<br/>]</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>leader</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">
        Refers to people (schema:Person) or organizations (schema:Organization) who will be leading an event. E.g. a coach. This is a more specific role than an organiser or a contributor. The person will need to have given their consent for their personal information to be present in the Open Data.</br></br><b>Example</b></br></br><code>[<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;familyName&quot;:&nbsp;&quot;Smith&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;givenName&quot;:&nbsp;&quot;Nicole&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;id&quot;:&nbsp;&quot;https://example.com/locations/1234ABCD/leaders/89&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;identifier&quot;:&nbsp;89,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Person&quot;<br/>&nbsp;&nbsp;}<br/>]</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>level</b></td>
      <td style="text-align:left">
        Array of <a href="ArrayOf#https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        A general purpose property for specifying the suitability of an event for different participant “levels”. E.g. beginner/intermediate/advanced. Or in the case of martial arts, specific belt requirements. Values should ideally be drawn from a controlled vocabulary.</br></br><b>Example</b></br></br><code>TODO</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>maximumAttendeeCapacity</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        The maximum capacity of the Event.</br></br><b>Example</b></br></br><code>30</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>offers</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/model/types/offer"><code>Offer</code></a>
      </td>
      <td style="text-align:left">
        TODO
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>remainingAttendeeCapacity</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        The number of places that are still available for the Event.</br></br><b>Example</b></br></br><code>20</code>
      </td>
    </tr>
  </tbody>
</table>


