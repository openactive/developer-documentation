---
description: This page describes the Organization type.
---

# Organization

This type is derived from [https://schema.org/Organization](https://schema.org/Organization).

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `Organization` |
| **name** |  [`Text`](https://schema.org/Text) |  The name of the Organization  **Example**  `Central Speedball Association` |

### **Recommended fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **id** |  [`url`](https://schema.org/url) |  A unique url based identifier for the record  **Example**  `https://example.com/organization/1234` |
| **sameAs** |  Array of [`url`](https://github.com/openactive/developer-documentation/tree/997de07697a95bfb22f2df5d2831c570a03e11ce/model/types/ArrayOf/README.md#https://schema.org/url) |  Lists the URL\(s\) of the official social media profile pages associated with the organization.  **Example**  `https://example.org/example-org` |
| **telephone** |  [`Text`](https://schema.org/Text) |  The telephone number of the Organization  **Example**  `01234 567890` |
| **url** |  [`url`](https://schema.org/url) |  A definitive canonical URL for the Organization.  **Example**  `http://www.speedball-world.com` |

### **Optional fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **description** |  [`Text`](https://schema.org/Text) |  The description of the Organization  **Example**  `The national governing body of cycling` |
| **identifier** |  [`Text`](https://schema.org/Text) |  A local non-URI identifier for the resource  **Example**  `SB1234` |
| **logo** |  [`ImageObject`](https://docs.openactive.io/model/types/imageobject) |  A logo for the Organization.  **Example**  `{   "type": "ImageObject",   "url": "http://example.com/static/image/speedball_large.jpg" }` |

