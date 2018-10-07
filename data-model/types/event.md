---
description: This page describes the Event type.
---

# Event

## **Example heading**

This is the first paragraph 

This type is derived from [https://schema.org/Event](https://schema.org/Event).

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `Event` |
| **activity** |  Array of [`Concept`](https://docs.openactive.io/model/types/concept) |  Specifies the physical activity or activities that will take place during an event.  **Example**  `[   {     "id": "https://example.com/reference/activities#Speedball",     "inScheme": "https://example.com/reference/activities",     "prefLabel": "Speedball",     "type": "Concept"   } ]` |
| **location** |  [`Place`](https://docs.openactive.io/model/types/place) |  The location at which the event will take place. Or, in the case of events that may span multiple locations, the initial meeting or starting point.  It is recommended that locations should be specified as a \[Place\]\(/models/place\) complete with a fully described geographic location and/or address. If only an address is available then this should be described as a \[PostalAddress\]\(/models/postaladdress\).  Applications may use \[schema:Text\]\(https://schema.org/Text\) to provide a more general description of a location \("In Victoria Park, near the lake"\), but this is not recommended: consuming applications will be unable to help users discover opportunities based on their location.  **Example**  `{   "address": {     "addressLocality": "New Malden",     "addressRegion": "London",     "postalCode": "NW5 3DU",     "streetAddress": "Raynes Park High School, 46A West Barnes Lane",     "type": "PostalAddress"   },   "description": "Raynes Park High School in London",   "geo": {     "latitude": 51.4034423828125,     "longitude": -0.2369088977575302,     "type": "GeoCoordinates"   },   "id": "https://example.com/locations/1234ABCD",   "identifier": "1234ABCD",   "name": "Raynes Park High School",   "telephone": "01253 473934",   "type": "Place" }` |
| **name** |  [`Text`](https://schema.org/Text) |  The name of the event  **Example**  `Speedball` |
| **organizer** |  [`Organization`](https://docs.openactive.io/model/types/organization) |  The person or organization ultimately responsible for an event. An organizer might be an schema:Organization or a schema:Person.  **Example**  `[   {     "name": "Central Speedball Association",     "type": "Organization",     "url": "http://www.speedball-world.com"   } ]` |
| **url** |  [`url`](https://schema.org/url) |  A URL to a web page \(or section of a page\) that describes the event.  **Example**  `https://example.com/event/1234` |

###  **Required options** 

While these properties are marked as optional, a data publisher must provide either a schema:startDate or specify a oa:eventSchedule for an event.

| Property | Type | Description |
| :--- | :--- | :--- |
| **startDate** |  [`DateTime`](https://schema.org/DateTime) |  The start date and time of the event. Can be specified as a schema:Date or schema:DateTime.  **Example**  `2018-01-27T12:00:00Z` |
| **eventSchedule** |  Array of [`Schedule`](https://docs.openactive.io/model/types/schedule) |  TODO  **Example**  `{}` |

### **Recommended fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **id** |  [`url`](https://schema.org/url) |  A unique url based identifier for the record  **Example**  `https://example.com/event/1234` |
| **ageRange** |  [`QuantitativeValue`](https://docs.openactive.io/model/types/quantitativevalue) |  Indicates that an event is suitable for a specific age range. If only a single age is specified then this is assumed to be a minimum age. Age ranges can be specified as follows: 18-30  **Example**  `{   "type": "QuantitativeValue",   "minValue": 15,   "maxValue": 60 }` |
| **description** |  [`Text`](https://schema.org/Text) |  A free text description of the event  **Example**  `An fast paced game that incorporates netball, handball and football.` |
| **endDate** |  [`DateTime`](https://schema.org/DateTime) |  The end date and time of the event. Can be specified as a schema:Date or schema:DateTime  It is recommended that publishers provide either an schema:endDate or a schema:duration for an event.  **Example**  `2018-01-27T12:00:00Z` |
| **eventStatus** |  [`EventStatusType`](https://schema.org/EventStatusType) |  The status of an event. Can be used to indicate rescheduled or cancelled events  **Example**  `https://schema.org/EventScheduled` |
| **genderRestriction** |  [`GenderRestrictionType`](https://openactive.io/GenderRestrictionType) |  Indicates that an event is restricted to male, female or a mixed audience. If a gender restriction isn't specified then applications should assume that an event is suitable for a mixed audience  **Example**  `https://openactive.io/Female` |
| **image** |  Array of [`ImageObject`](https://docs.openactive.io/model/types/imageobject) |  An image or photo that depicts the event, e.g. a photo taken at a previous event.  **Example**  `[   {     "thumbnail": "http://example.com/static/image/speedball_thumbnail.jpg",     "type": "ImageObject",     "url": "http://example.com/static/image/speedball_large.jpg"   } ]` |
| **leader** |  Array of [`Person`](https://docs.openactive.io/model/types/person) |  Refers to people \(schema:Person\) or organizations \(schema:Organization\) who will be leading an event. E.g. a coach. This is a more specific role than an organiser or a contributor. The person will need to have given their consent for their personal information to be present in the Open Data.  **Example**  `[   {     "familyName": "Smith",     "givenName": "Nicole",     "id": "https://example.com/locations/1234ABCD/leaders/89",     "identifier": 89,     "type": "Person"   } ]` |
| **level** |  Array of [`Text`](https://github.com/openactive/developer-documentation/tree/997de07697a95bfb22f2df5d2831c570a03e11ce/model/types/ArrayOf/README.md#https://schema.org/Text) |  A general purpose property for specifying the suitability of an event for different participant “levels”. E.g. beginner/intermediate/advanced. Or in the case of martial arts, specific belt requirements. Values should ideally be drawn from a controlled vocabulary.  **Example**  `TODO` |
| **maximumAttendeeCapacity** |  [`Integer`](https://schema.org/Integer) |  The maximum capacity of the Event.  **Example**  `30` |
| **offers** |  Array of [`Offer`](https://docs.openactive.io/model/types/offer) |  TODO |
| **remainingAttendeeCapacity** |  [`Integer`](https://schema.org/Integer) |  The number of places that are still available for the Event.  **Example**  `20` |
| **startDate** |  [`DateTime`](https://schema.org/DateTime) |  The start date and time of the event. Can be specified as a schema:Date or schema:DateTime.  **Example**  `2018-01-27T12:00:00Z` |

### **Optional fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **@context** |  [`url`](https://schema.org/url) |  TODO  **Example**  `https://openactive.io/` |
| **accessibilityInformation** |  [`Text`](https://schema.org/Text) |  Provide additional, specific documentation for participants about how disabilities are, or can be supported at the Event.  **Example**  `TODO` |
| **accessibilitySupport** |  Array of [`Text`](https://github.com/openactive/developer-documentation/tree/997de07697a95bfb22f2df5d2831c570a03e11ce/model/types/ArrayOf/README.md#https://schema.org/Text) |  Used to specify the types of disabilities or impairments that are supported at an event.  **Example**  `TODO` |
| **attendeeInstructions** |  [`Text`](https://schema.org/Text) |  Provides additional notes and instructions for event attendees. E.g. more information on how to find the event, what to bring, etc.  **Example**  `TODO` |
| **category** |  Array of [`Concept`](https://docs.openactive.io/model/types/concept) |  Provides a set of tags that help categorise and describe an event, e.g. its intensity, purpose, etc.  **Example**  `[   {     "id": "https://example.com/reference/categories#Top%20Club%20Level",     "inScheme": "https://example.com/reference/categories",     "prefLabel": "Top Club Level",     "type": "Concept"   } ]` |
| **contributor** |  Array of [`Person`](https://docs.openactive.io/model/types/person) |  A Person who contributes to the facilitation of the Event.  **Example**  `{}` |
| **duration** |  [`Duration`](https://schema.org/Duration) |  The duration of the event given in \[ISO8601\] format.  **Example**  `PT1H` |
| **eventSchedule** |  Array of [`Schedule`](https://docs.openactive.io/model/types/schedule) |  TODO  **Example**  `{}` |
| **identifier** |  |  A unique identifier for the record  **Example**  `1234` |
| **isAccessibleForFree** |  [`Boolean`](https://schema.org/Boolean) |  Whether the Event is accessible without charge.  **Example**  `true` |
| **isCoached** |  [`Boolean`](https://schema.org/Boolean) |  A boolean property that indicates whether an Event will be coached. This flag allows an Event to be marked as being coached without having to specify a named individual as a coach. This addresses both privacy concerns and also scenarios where the actual coach may only be decided on the day.  **Example**  `true` |
| **meetingPoint** |  [`Text`](https://schema.org/Text) |  Instructions for the attendees of an Event about where they should meet the organizer or leader at the start of the event. Some larger locations may have several possible meeting points, so this property provides additional more specific directions.  **Example**  `At the entrance to the park` |
| **potentialAction** |  Array of [`Action`](https://docs.openactive.io/model/types/action) |  The possible actions that a user may make. e.g. Book.  **Example**  `[   {     "name": "Book",     "target": {       "encodingType": "application/vnd.openactive.v1.0+json",       "httpMethod": "POST",       "type": "EntryPoint",       "url": "https://example.com/orders"     },     "type": "Action"   } ]` |
| **programme** |  [`Brand`](https://docs.openactive.io/model/types/brand) |  Indicates that an event will be organised according to a specific Programme.  **Example**  `{   "type": "Brand",   "name": "Play Ball!",   "url": "http://example.org/brand/play-ball" }` |
| **schedulingNote** |  [`Text`](https://schema.org/Text) |  Provides a note from an organizer relating to how this Event is scheduled.  **Example**  `This event doesn't run during school holidays` |
| **subEvent** |  Array of [`Event`](https://docs.openactive.io/model/types/event) |  Relates a parent event to a child event. Properties describing the parent event can be assumed to apply to the child, unless otherwise specified. A child event might be a specific instance of an Event within a schedule |
| **superEvent** |  [`Event`](https://docs.openactive.io/model/types/event) |  Relates a child event to a parent event. Properties describing the parent event can be assumed to apply to the child, unless otherwise specified. A parent event might specify a recurring schedule, of which the child event is one specific instance |

