---
description: This page describes the ScheduledSession type.
---

# ScheduledSession

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **activity** |  Array of [`Concept`](https://docs.openactive.io/model/types/concept) |  Specifies the physical activity or activities that will take place during an event.  **Example**  `[   {     "id": "https://example.com/reference/activities#Speedball",     "inScheme": "https://example.com/reference/activities",     "prefLabel": "Speedball",     "type": "Concept"   } ]` |
| **location** |  [`Place`](https://docs.openactive.io/model/types/place) |  The location at which the event will take place. Or, in the case of events that may span multiple locations, the initial meeting or starting point.  It is recommended that locations should be specified as a \[Place\]\(/models/place\) complete with a fully described geographic location and/or address. If only an address is available then this should be described as a \[PostalAddress\]\(/models/postaladdress\).  Applications may use \[schema:Text\]\(https://schema.org/Text\) to provide a more general description of a location \("In Victoria Park, near the lake"\), but this is not recommended: consuming applications will be unable to help users discover opportunities based on their location.  **Example**  `{   "address": {     "addressLocality": "New Malden",     "addressRegion": "London",     "postalCode": "NW5 3DU",     "streetAddress": "Raynes Park High School, 46A West Barnes Lane",     "type": "PostalAddress"   },   "description": "Raynes Park High School in London",   "geo": {     "latitude": 51.4034423828125,     "longitude": -0.2369088977575302,     "type": "GeoCoordinates"   },   "id": "https://example.com/locations/1234ABCD",   "identifier": "1234ABCD",   "name": "Raynes Park High School",   "telephone": "01253 473934",   "type": "Place" }` |
| **name** |  [`Text`](https://schema.org/Text) |  The name of the event  **Example**  `Speedball` |
| **startDate** |  [`DateTime`](https://schema.org/DateTime) |  The start date and time of the event. Can be specified as a schema:Date or schema:DateTime.  **Example**  `2018-01-27T12:00:00Z` |
| **type** |  [`Text`](https://schema.org/Text) |  TODO  **Example**  `ScheduledSession` |

### **Recommended fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **endDate** |  [`DateTime`](https://schema.org/DateTime) |  The end date and time of the event. Can be specified as a schema:Date or schema:DateTime  It is recommended that publishers provide either an schema:endDate or a schema:duration for an event.  **Example**  `2018-01-27T12:00:00Z` |
| **eventStatus** |  [`EventStatusType`](https://schema.org/EventStatusType) |  The status of an event. Can be used to indicate rescheduled or cancelled events  **Example**  `https://schema.org/EventScheduled` |
| **id** |  [`url`](https://schema.org/url) |  A unique url based identifier for the record  **Example**  `https://example.com/event/1234` |
| **leader** |  Array of [`Person`](https://docs.openactive.io/model/types/person) |  Refers to people \(schema:Person\) or organizations \(schema:Organization\) who will be leading an event. E.g. a coach. This is a more specific role than an organiser or a contributor. The person will need to have given their consent for their personal information to be present in the Open Data.  **Example**  `[   {     "familyName": "Smith",     "givenName": "Nicole",     "id": "https://example.com/locations/1234ABCD/leaders/89",     "identifier": 89,     "type": "Person"   } ]` |
| **maximumAttendeeCapacity** |  [`Integer`](https://schema.org/Integer) |  The maximum capacity of the Event.  **Example**  `30` |
| **offers** |  Array of [`Offer`](https://docs.openactive.io/model/types/offer) |  TODO |
| **remainingAttendeeCapacity** |  [`Integer`](https://schema.org/Integer) |  The number of places that are still available for the Event.  **Example**  `20` |
| **url** |  [`url`](https://schema.org/url) |  A URL to a web page \(or section of a page\) that describes the event.  **Example**  `https://example.com/event/1234` |

### **Optional fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **superEvent** |  [`Event`](https://docs.openactive.io/model/types/event) |  Relates a child event to a parent event. Properties describing the parent event can be assumed to apply to the child, unless otherwise specified. A parent event might specify a recurring schedule, of which the child event is one specific instance |

