---
description: This page describes the ImageObject type.
---

# ImageObject

This type is derived from [https://schema.org/ImageObject](https://schema.org/ImageObject), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Required properties**

| Property  | Expected Type                      | Description                                                                                                                                                         |
| --------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `"@type": "ImageObject"`                                                                                                         |
| **url**   |  [`URL`](https://schema.org/URL)   | <p>The URL for the display resolution image.</p><p><br><strong>Example</strong></p><p><code>"url": "http://example.com/static/image/speedball_large.jpg"</code></p> |

### **Optional properties**

| Property      | Expected Type                                                                           | Description                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **height**    |  [`Integer`](https://schema.org/Integer)                                                | <p>The height of the media in pixels.</p><p><br><strong>Example</strong></p><p><code>"height": 300</code></p> |
| **thumbnail** |  Array of [`ImageObject`](https://developer.openactive.io/data-model/types/imageobject) | The URL for a thumbnail image for an image.                                                                   |
| **width**     |  [`Integer`](https://schema.org/Integer)                                                | <p>The width of the media in pixels.</p><p><br><strong>Example</strong></p><p><code>"width": 400</code></p>   |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io)".
