---
description: This page describes the Barcode type.
---

# Barcode

This type is derived from [https://schema.org/Barcode](https://schema.org/Barcode), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Required properties**

| Property  | Expected Type                      | Description                                             |
| --------- | ---------------------------------- | ------------------------------------------------------- |
| **@type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `"@type": "Barcode"` |

### **Optional properties**

| Property      | Expected Type                                                                           | Description                                                                                                                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **height**    |  [`Integer`](https://schema.org/Integer)                                                | <p>The height of the media in pixels.</p><p><br><strong>Example</strong></p><p><code>"height": 300</code></p>                                                                                                         |
| **text**      |  [`Text`](https://schema.org/Text)                                                      | <p>The barcode number</p><p><br><strong>Example</strong></p><p><code>"text": "0123456789"</code></p>                                                                                                                  |
| **thumbnail** |  Array of [`ImageObject`](https://developer.openactive.io/data-model/types/imageobject) | The URL for a thumbnail image for an image.                                                                                                                                                                           |
| **url**       |  [`URL`](https://schema.org/URL)                                                        | <p>A fallback rendered barcode image url in addition to the raw barcode details.</p><p><br><strong>Example</strong></p><p><code>"url": "https://fallback.image.example.com/476ac24c694da79c5e33731ebbb5f1"</code></p> |
| **width**     |  [`Integer`](https://schema.org/Integer)                                                | <p>The width of the media in pixels.</p><p><br><strong>Example</strong></p><p><code>"width": 400</code></p>                                                                                                           |

### **Beta Extension properties**

These properties are defined in the [OpenActive Beta Extension](https://openactive.io/ns-beta). The OpenActive Beta Extension is defined as a convenience to help document properties that are in active testing and review by the community. Publishers should not assume that properties in the beta namespace will either be added to the core specification or be included in the namespace over the long term.

| Property          | Expected Type                      | Description                                                                                                                       |
| ----------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **beta:codeType** |  [`Text`](https://schema.org/Text) | <p><a href="https://github.com/openactive/open-booking-api/issues/130">Proposal #130</a></p><p>Type of barcode, e.g. 'Code39'</p> |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io)".
