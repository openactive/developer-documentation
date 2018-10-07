---
description: This page describes the SportsActivityLocation type.
---

# SportsActivityLocation

This type is derived from [https://schema.org/SportsActivityLocation](https://schema.org/SportsActivityLocation).

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `SportsActivityLocation` |

### **Recommended fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **id** |  [`url`](https://schema.org/url) |  A unique url based identifier for the record  **Example**  `https://example.com/place/1234` |

### **Optional fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **address** |  [`PostalAddress`](https://docs.openactive.io/data-model/types/postaladdress) |  A structured PostalAddress object for the Place.  Ideally the address should be provided using the PostalAddress structured format. Google Reserve requires https://schema.org/PostalAddress and will not accept plain text addresses.  **Example**  `{   "addressLocality": "New Malden",   "addressRegion": "London",   "postalCode": "NW5 3DU",   "streetAddress": "Raynes Park High School, 46A West Barnes Lane",   "type": "PostalAddress" }` |
| **amenityFeature** |  Array of [`LocationFeatureSpecification`](https://docs.openactive.io/data-model/types/locationfeaturespecification) |  An array listing the Ammenities of the Place.  **Example**  `[   {     "name": "Changing Facilities",     "value": true,     "type": "ChangingFacilities"   },   {     "name": "Showers",     "value": false,     "type": "Showers"   },   {     "name": "Lockers",     "value": true,     "type": "Lockers"   },   {     "name": "Towels",     "value": false,     "type": "Towels"   },   {     "name": "Creche",     "value": false,     "type": "Creche"   },   {     "name": "Parking",     "value": true,     "type": "Parking"   } ]` |
| **containedInPlace** |  [`Place`](https://docs.openactive.io/data-model/types/place) |  While a \`url\` is not specified as an option in the Modelling Specification, it is necessary to link entities in RPDE.  **Example**  `TODO` |
| **containsPlace** |  Array of [`Place`](https://docs.openactive.io/data-model/types/place) |  TODO  **Example**  `TODO` |
| **description** |  [`Text`](https://schema.org/Text) |  The description of the Place  **Example**  `Raynes Park High School in London` |
| **geo** |  [`GeoCoordinates`](https://docs.openactive.io/data-model/types/geocoordinates) |  The geo coordinates of the Place.  **Example**  `{   "latitude": 51.4034423828125,   "longitude": -0.2369088977575302,   "type": "GeoCoordinates" }` |
| **identifier** |  |  A unique identifier for the record  **Example**  `1234` |
| **image** |  Array of [`ImageObject`](https://docs.openactive.io/data-model/types/imageobject) |  An image or photo that depicts the place, e.g. a photo taken at a previous event.  **Example**  `[   {     "thumbnail": "http://example.com/static/image/speedball_thumbnail.jpg",     "type": "ImageObject",     "url": "http://example.com/static/image/speedball_large.jpg"   } ]` |
| **name** |  [`Text`](https://schema.org/Text) |  The name of the Place  **Example**  `Raynes Park High School` |
| **openingHoursSpecification** |  Array of [`OpeningHoursSpecification`](https://docs.openactive.io/data-model/types/openinghoursspecification) |  The times the Place is open |
| **telephone** |  [`Text`](https://schema.org/Text) |  The telephone number for the Place  **Example**  `01253 473934` |
| **url** |  [`url`](https://schema.org/url) |  The website for the Place  **Example**  `http://www.rphs.org.uk/` |

