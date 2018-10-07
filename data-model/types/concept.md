---
description: This page describes the Concept type.
---

# Concept

This type is derived from [http://www.w3.org/2004/02/skos/core\#Concept](http://www.w3.org/2004/02/skos/core#Concept).

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `Concept` |
| **prefLabel** |  [`Text`](https://schema.org/Text) |  A human readable string for use in user interfaces.  **Example**  `Speedball` |

### **Recommended fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **id** |  [`url`](https://schema.org/url) |  A unique url based identifier for the record  **Example**  `https://example.com/concept/1234` |
| **inScheme** |  [`url`](https://schema.org/url) |  A stable URL reference for the taxonomy.  **Example**  `https://example.com/reference/activities` |

### **Optional fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **altLabel** |  Array of [`Text`](https://github.com/openactive/developer-documentation/tree/992826a56c27afeb9178705f587ceb83b4137659/data-model/types/ArrayOf/README.md#https://schema.org/Text) |  An alternative human readable string for use in user interfaces.  **Example**  `Speedball` |
| **broader** |  Array of [`url`](https://github.com/openactive/developer-documentation/tree/992826a56c27afeb9178705f587ceb83b4137659/data-model/types/ArrayOf/README.md#https://schema.org/url) |  A broader concept URI  **Example**  `https://example.com/football` |
| **narrower** |  Array of [`url`](https://github.com/openactive/developer-documentation/tree/992826a56c27afeb9178705f587ceb83b4137659/data-model/types/ArrayOf/README.md#https://schema.org/url) |  A more specific concept URI  **Example**  `https://example.com/walking-football` |
| **notation** |  [`Text`](https://schema.org/Text) |  A concept label that is not normally recognisable as natural language.  **Example**  `Speedball` |

