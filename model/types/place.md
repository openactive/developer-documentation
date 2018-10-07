---
description: This page describes the Place type.
---

# Place

This type is derived from [https://schema.org/Place](https://schema.org/Place).

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **name** |  [`Text`](https://schema.org/Text) |  The name of the Place  **Example**  `Raynes Park High School` |
| **type** |  [`Text`](https://schema.org/Text) |  The type of object, in this case Place  **Example**  `Place` |

### **Recommended fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **address** |  [`PostalAddress`](https://docs.openactive.io/model/types/postaladdress) |  A structured PostalAddress object for the Place.  Ideally the address should be provided using the PostalAddress structured format. Google Reserve requires https://schema.org/PostalAddress and will not accept plain text addresses.  **Example**  `{   "addressLocality": "New Malden",   "addressRegion": "London",   "postalCode": "NW5 3DU",   "streetAddress": "Raynes Park High School, 46A West Barnes Lane",   "type": "PostalAddress" }` |
| **amenityFeature** |  Array of [`LocationFeatureSpecification`](https://docs.openactive.io/model/types/locationfeaturespecification) |  An array listing the Ammenities of the Place.  **Example**  `[   {     "name": "Changing Facilities",     "value": true,     "type": "ChangingFacilities"   },   {     "name": "Showers",     "value": false,     "type": "Showers"   },   {     "name": "Lockers",     "value": true,     "type": "Lockers"   },   {     "name": "Towels",     "value": false,     "type": "Towels"   },   {     "name": "Creche",     "value": false,     "type": "Creche"   },   {     "name": "Parking",     "value": true,     "type": "Parking"   } ]` |
| **description** |  [`Text`](https://schema.org/Text) |  The description of the Place  **Example**  `Raynes Park High School in London` |
| **geo** |  [`GeoCoordinates`](https://docs.openactive.io/model/types/geocoordinates) |  The geo coordinates of the Place.  **Example**  `{   "latitude": 51.4034423828125,   "longitude": -0.2369088977575302,   "type": "GeoCoordinates" }` |
| **id** |  [`url`](https://schema.org/url) |  A unique url based identifier for the record  **Example**  `https://example.com/place/1234` |
| **image** |  Array of [`ImageObject`](https://docs.openactive.io/model/types/imageobject) |  An image or photo that depicts the place, e.g. a photo taken at a previous event.  **Example**  `[   {     "thumbnail": "http://example.com/static/image/speedball_thumbnail.jpg",     "type": "ImageObject",     "url": "http://example.com/static/image/speedball_large.jpg"   } ]` |
| **openingHoursSpecification** |  Array of [`OpeningHoursSpecification`](https://docs.openactive.io/model/types/openinghoursspecification) |  The times the Place is open |
| **telephone** |  [`Text`](https://schema.org/Text) |  The telephone number for the Place  **Example**  `01253 473934` |
| **url** |  [`url`](https://schema.org/url) |  The website for the Place  **Example**  `http://www.rphs.org.uk/` |

### **Optional fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **containedInPlace** |  [`Place`](https://docs.openactive.io/model/types/place) |  TODO  **Example**  `TODO` |
| **containsPlace** |  Array of [`Place`](https://docs.openactive.io/model/types/place) |  TODO  **Example**  `TODO` |
| **identifier** |  [`Text`](https://schema.org/Text) |  A local non-URI identifier for the resource  **Example**  `SB1234` |

