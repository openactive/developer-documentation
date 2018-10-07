---
description: This page describes the IndividualFacilityUse type.
---

# IndividualFacilityUse

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `IndividualFacilityUse` |
| **activity** |  Array of [`Concept`](https://docs.openactive.io/data-model/types/concept) |  Specifies the physical activity or activities that will take place during a facility use.  **Example**  `[   {     "id": "https://example.com/reference/activities#Speedball",     "inScheme": "https://example.com/reference/activities",     "prefLabel": "Speedball",     "type": "Concept"   } ]` |
| **location** |  [`Place`](https://docs.openactive.io/data-model/types/place) |  The location at which the facility use will take place.  **Example**  `{   "address": {     "addressLocality": "New Malden",     "addressRegion": "London",     "postalCode": "NW5 3DU",     "streetAddress": "Raynes Park High School, 46A West Barnes Lane",     "type": "PostalAddress"   },   "description": "Raynes Park High School in London",   "geo": {     "latitude": 51.4034423828125,     "longitude": -0.2369088977575302,     "type": "GeoCoordinates"   },   "id": "https://example.com/locations/1234ABCD",   "identifier": "1234ABCD",   "name": "Raynes Park High School",   "telephone": "01253 473934",   "type": "Place" }` |
| **name** |  [`Text`](https://schema.org/Text) |  The name of the facility use  **Example**  `Speedball` |
| **provider** |  |  The organisation responsible for providing the facility |
| **url** |  [`url`](https://schema.org/url) |  A URL to a web page \(or section of a page\) that describes the facility use.  **Example**  `https://example.com/facility-use/1234` |

### **Recommended fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **id** |  [`url`](https://schema.org/url) |  A unique url based identifier for the record  **Example**  `https://example.com/individfacilityUse/1234` |
| **aggregateFacilityUse** |  [`FacilityUse`](https://docs.openactive.io/data-model/types/facilityuse) |  Inverse of the oa:individualFacilityUse property. Related an oa:IndividualFacilityUse \(e.g. an opportunity to play tennis on a specific court\) to a oa:FacilityUse \(e.g. an opportunity to play tennis at a specific location\). |
| **description** |  [`Text`](https://schema.org/Text) |  A free text description of the facility use  **Example**  `An fast paced game that incorporates netball, handball and football.` |
| **event** |  Array of [`Slot`](https://docs.openactive.io/data-model/types/slot) |  TODO |
| **hoursAvailable** |  Array of [`OpeningHoursSpecification`](https://docs.openactive.io/data-model/types/openinghoursspecification) |  The times the facility use is available |
| **image** |  Array of [`ImageObject`](https://docs.openactive.io/data-model/types/imageobject) |  An image or photo that depicts the facility use, e.g. a photo taken at a previous event.  **Example**  `[   {     "thumbnail": "http://example.com/static/image/speedball_thumbnail.jpg",     "type": "ImageObject",     "url": "http://example.com/static/image/speedball_large.jpg"   } ]` |

### **Optional fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **accessibilityInformation** |  [`Text`](https://schema.org/Text) |  Provide additional, specific documentation for participants about how disabilities are, or can be supported at the facility.  **Example**  `TODO` |
| **accessibilitySupport** |  Array of [`Text`](https://github.com/openactive/developer-documentation/tree/992826a56c27afeb9178705f587ceb83b4137659/data-model/types/ArrayOf/README.md#https://schema.org/Text) |  Used to specify the types of disabilities or impairments that are supported at a facility.  **Example**  `TODO` |
| **attendeeInstructions** |  [`Text`](https://schema.org/Text) |  Provides additional notes and instructions for users of a facility. E.g. more information on how to find it, what to bring, etc.  **Example**  `TODO` |
| **category** |  Array of [`Concept`](https://docs.openactive.io/data-model/types/concept) |  Provides a set of tags that help categorise and describe a facility.  **Example**  `[   {     "id": "https://example.com/reference/categories#Top%20Club%20Level",     "inScheme": "https://example.com/reference/categories",     "prefLabel": "Top Club Level",     "type": "Concept"   } ]` |
| **identifier** |  [`Text`](https://schema.org/Text) |  A local non-URI identifier for the resource  **Example**  `SB1234` |
| **offers** |  Array of [`Offer`](https://docs.openactive.io/data-model/types/offer) |  TODO |
| **potentialAction** |  Array of [`Action`](https://docs.openactive.io/data-model/types/action) |  The possible actions that a user may make. e.g. Book.  **Example**  `[   {     "name": "Book",     "target": {       "encodingType": "application/vnd.openactive.v1.0+json",       "httpMethod": "POST",       "type": "EntryPoint",       "url": "https://example.com/orders"     },     "type": "Action"   } ]` |

