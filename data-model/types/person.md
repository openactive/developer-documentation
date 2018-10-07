---
description: This page describes the Person type.
---

# Person

This type is derived from [https://schema.org/Person](https://schema.org/Person).

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `Person` |

### **Recommended fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **id** |  [`url`](https://schema.org/url) |  A unique url based identifier for the record  **Example**  `https://example.com/person/1234` |

### **Optional fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **description** |  [`Text`](https://schema.org/Text) |  The description of the Person  **Example**  `The leader of the coaching team` |
| **identifier** |  [`Text`](https://schema.org/Text) |  A local non-URI identifier for the resource  **Example**  `SB1234` |
| **logo** |  [`ImageObject`](https://docs.openactive.io/data-model/types/imageobject) |  A logo for the person.  **Example**  `{   "type": "ImageObject",   "url": "http://example.com/static/image/speedball_large.jpg" }` |
| **name** |  [`Text`](https://schema.org/Text) |  A full name for the person.  This person must give direct permission for their personal information to be shared as part of the Open Data.  **Example**  `Daley Thompson` |
| **sameAs** |  Array of [`url`](https://github.com/openactive/developer-documentation/tree/992826a56c27afeb9178705f587ceb83b4137659/data-model/types/ArrayOf/README.md#https://schema.org/url) |  Lists the URL\(s\) of the official social media profile pages associated with the person.  **Example**  `https://example.org/example-org` |
| **telephone** |  [`Text`](https://schema.org/Text) |  The telephone number of the person  **Example**  `01234 567890` |
| **url** |  [`url`](https://schema.org/url) |  A URL where more information about the person may be found  **Example**  `http://www.example.com/` |

