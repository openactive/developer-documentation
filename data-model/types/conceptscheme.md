---
description: This page describes the ConceptScheme type.
---

# ConceptScheme

This type is derived from [http://www.w3.org/2004/02/skos/core\#ConceptScheme](http://www.w3.org/2004/02/skos/core#ConceptScheme).

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `ConceptScheme` |
| **id** |  [`url`](https://schema.org/url) |  A unique url based identifier for the record  **Example**  `https://example.com/scheme/1234` |
| **concept** |  Array of [`Concept`](https://docs.openactive.io/model/types/concept) |  A collection of concepts that are part of this scheme  **Example**  `[   {     "id": "https://example.com/concept/martial-arts",     "type": "Concept",     "prefLabel": "Martial Arts",     "inScheme": "https://example.com/scheme/123",     "narrower": "https://example.com/concept/martial-arts/karate"   } ]` |
| **title** |  [`Text`](https://schema.org/Text) |  The title of the scheme  **Example**  `Activity List` |
| **url** |  [`url`](https://schema.org/url) |  A URL to a web page \(or section of a page\) that describes the concept scheme.  **Example**  `https://example.com/scheme/1234` |

### **Recommended fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **description** |  [`Text`](https://schema.org/Text) |  A free text description of the taxonomy  **Example**  `An example activity list.` |
| **license** |  [`url`](https://schema.org/url) |  Reference to the license under which the activity list has been published.  **Example**  `https://example.com/license/MIT` |

