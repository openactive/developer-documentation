---
description: This page describes the ImageObject type.
---

# ImageObject

This type is derived from [https://schema.org/ImageObject](https://schema.org/ImageObject).

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `ImageObject` |
| **url** |  [`url`](https://schema.org/url) |  The URL for the display resolution image.  **Example**  `http://example.com/static/image/speedball_large.jpg` |

### **Optional fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **thumbnail** |  Array of [`ImageObject`](https://docs.openactive.io/model/types/imageobject) |  The URL for a thumbnail image for an image. |

