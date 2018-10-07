---
description: This page describes the Brand type.
---

# Brand

This type is derived from [https://schema.org/Brand](https://schema.org/Brand).

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `Brand` |
| **name** |  [`Text`](https://schema.org/Text) |  The name of the brand.  **Example**  `Play Ball!` |
| **url** |  [`url`](https://schema.org/url) |  A url where further information can be found for the brand.  **Example**  `http://example.com/play_ball` |

### **Recommended fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **description** |  [`Text`](https://schema.org/Text) |  A text description for the brand.  **Example**  `Play Ball! is a series of games for people of all abilities.` |
| **logo** |  [`ImageObject`](https://docs.openactive.io/data-model/types/imageobject) |  The logo associated with the brand.  **Example**  `{   "type": "ImageObject",   "url": "http://example.com/static/image/speedball_large.jpg" }` |

### **Optional fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **identifier** |  [`Text`](https://schema.org/Text) |  A local non-URI identifier for the resource  **Example**  `BR1234` |

