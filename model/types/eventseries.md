---
description: This page describes the EventSeries type.
---

# EventSeries

This type is derived from [https://pending.schema.org/EventSeries](https://pending.schema.org/EventSeries).

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **activity** |  Array of [`Concept`](https://docs.openactive.io/model/types/concept) |  Specifies the physical activity or activities that will take place during an event.  **Example**  `[   {     "id": "https://example.com/reference/activities#Speedball",     "inScheme": "https://example.com/reference/activities",     "prefLabel": "Speedball",     "type": "Concept"   } ]` |
| **name** |  [`Text`](https://schema.org/Text) |  The name of the event  **Example**  `Speedball` |
| **organizer** |  [`Organization`](https://docs.openactive.io/model/types/organization) |  The person or organization ultimately responsible for an event. An organizer might be an schema:Organization or a schema:Person.  **Example**  `[   {     "name": "Central Speedball Association",     "type": "Organization",     "url": "http://www.speedball-world.com"   } ]` |
| **type** |  [`Text`](https://schema.org/Text) |  TODO  **Example**  `EventSeries` |
| **url** |  [`url`](https://schema.org/url) |  A URL to a web page \(or section of a page\) that describes the event.  **Example**  `https://example.com/event/1234` |

### **Recommended fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **ageRange** |  [`QuantitativeValue`](https://docs.openactive.io/model/types/quantitativevalue) |  Indicates that an event is suitable for a specific age range. If only a single age is specified then this is assumed to be a minimum age. Age ranges can be specified as follows: 18-30  **Example**  `{   "type": "QuantitativeValue",   "minValue": 15,   "maxValue": 60 }` |
| **description** |  [`Text`](https://schema.org/Text) |  A free text description of the event  **Example**  `An fast paced game that incorporates netball, handball and football.` |
| **eventStatus** |  [`EventStatusType`](https://schema.org/EventStatusType) |  The status of an event. Can be used to indicate rescheduled or cancelled events  **Example**  `https://schema.org/EventScheduled` |
| **genderRestriction** |  [`GenderRestrictionType`](https://openactive.io/GenderRestrictionType) |  Indicates that an event is restricted to male, female or a mixed audience. If a gender restriction isn't specified then applications should assume that an event is suitable for a mixed audience  **Example**  `https://openactive.io/Female` |
| **id** |  [`url`](https://schema.org/url) |  A unique url based identifier for the record  **Example**  `https://example.com/event/1234` |
| **image** |  Array of [`ImageObject`](https://docs.openactive.io/model/types/imageobject) |  An image or photo that depicts the event, e.g. a photo taken at a previous event.  **Example**  `[   {     "thumbnail": "http://example.com/static/image/speedball_thumbnail.jpg",     "type": "ImageObject",     "url": "http://example.com/static/image/speedball_large.jpg"   } ]` |
| **leader** |  Array of [`Person`](https://docs.openactive.io/model/types/person) |  Refers to people \(schema:Person\) or organizations \(schema:Organization\) who will be leading an event. E.g. a coach. This is a more specific role than an organiser or a contributor. The person will need to have given their consent for their personal information to be present in the Open Data.  **Example**  `[   {     "familyName": "Smith",     "givenName": "Nicole",     "id": "https://example.com/locations/1234ABCD/leaders/89",     "identifier": 89,     "type": "Person"   } ]` |
| **level** |  Array of [`Text`](https://github.com/openactive/developer-documentation/tree/5879022a21960a4d21f701584717e4865dc1336e/model/types/ArrayOf/README.md#https://schema.org/Text) |  A general purpose property for specifying the suitability of an event for different participant “levels”. E.g. beginner/intermediate/advanced. Or in the case of martial arts, specific belt requirements. Values should ideally be drawn from a controlled vocabulary.  **Example**  `TODO` |
| **maximumAttendeeCapacity** |  [`Integer`](https://schema.org/Integer) |  The maximum capacity of the Event.  **Example**  `30` |
| **offers** |  Array of [`Offer`](https://docs.openactive.io/model/types/offer) |  TODO |
| **remainingAttendeeCapacity** |  [`Integer`](https://schema.org/Integer) |  The number of places that are still available for the Event.  **Example**  `20` |

