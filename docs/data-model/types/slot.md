---
description: This page describes the Slot type.
---

# Slot

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
        Must always be present and set to <code>"type": "Slot"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>duration</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Duration"><code>Duration</code></a>
      </td>
      <td style="text-align:left">
        <p>The duration of the slot given in [ISO8601] format.</p><p></br><b>Example</b></p><p><code>"duration": "PT1H"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>facilityUse</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/facilityuse"><code>FacilityUse</code></a><br/> - or - <br/><a href="https://developer.openactive.io/data-model/types/individualfacilityuse"><code>IndividualFacilityUse</code></a><br/> - or - <br/><a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>FacilityUse or IndividualFacilityUse that has this offer, either directly embedded or referenced by its @id</p><p></br><b>Example</b></p><p><code>"facilityUse": "https://example.com/facility-use/1"</code></p>
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
    <tr>
      <td style="text-align:left"><b>remainingUses</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>The remaining available courts or pitches at this time. Must be 0 or 1 for an IndividualFacilityUse.</p><p></br><b>Example</b></p><p><code>"remainingUses": 5</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>startDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a><br/> - or - <br/><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The start date and time of the slot. Can be specified as a schema:Date or schema:DateTime</p><p></br><b>Example</b></p><p><code>"startDate": "2018-01-27T12:00:00Z"</code></p>
      </td>
    </tr>
  </tbody>
</table>


### ** Required options **

While these properties are marked as optional/recommended in the Modelling Specification, one of these must be provided when surfacing a slot through an RPDE feed to ensure that the slots can be processed correctly by data consumers.

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
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"id": "https://example.com/slot/12345"</code></p>
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
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"id": "https://example.com/slot/12345"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>maximumUses</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>The maximum available courts or pitches at this time. Must be 0 or 1 for an IndividualFacilityUse.</p><p></br><b>Example</b></p><p><code>"maximumUses": 16</code></p>
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
      <td style="text-align:left"><b>endDate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a><br/> - or - <br/><a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The end date and time of the slot. Can be specified as a schema:Date or schema:DateTime</p><p>It is recommended that publishers provide either an schema:endDate or a schema:duration for an slot.</p><p></br><b>Example</b></p><p><code>"endDate": "2018-01-27T12:00:00Z"</code></p>
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
      <td style="text-align:left"><b>organizer</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a><br/> - or - <br/><a href="https://developer.openactive.io/data-model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">
        <p>The person or organization ultimately responsible for an event. An organizer might be an  schema:Organization or a schema:Person.</p><p></br><b>Example</b></p><p><code>"organizer": {<br/>&nbsp;&nbsp;&quot;name&quot;:&nbsp;&quot;Central&nbsp;Speedball&nbsp;Association&quot;,<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Organization&quot;,<br/>&nbsp;&nbsp;&quot;url&quot;:&nbsp;&quot;http://www.speedball-world.com&quot;<br/>}</code></p>
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
        <p><a href="https://github.com/openactive/modelling-opportunity-data/issues/227">Proposal #227</a></p><p>The physical location affiliated with the virtual event, for example the original location of the event before it was moved online.</p>
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
