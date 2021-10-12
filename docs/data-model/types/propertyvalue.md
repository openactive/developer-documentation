---
description: This page describes the PropertyValue type.
---

# PropertyValue

This type is derived from [https://schema.org/PropertyValue](https://schema.org/PropertyValue), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Optional properties**

| Property        | Expected Type                                                                                                                                                                                                   | Description                                                                                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@type**       |  [`Text`](https://schema.org/Text)                                                                                                                                                                              |  Must always be present and set to `"@type": "PropertyValue"`                                                                                                                               |
| **description** |  [`Text`](https://schema.org/Text)                                                                                                                                                                              | Additional human-readable version of the value of the property.                                                                                                                             |
| **name**        |  [`Text`](https://schema.org/Text)                                                                                                                                                                              | <p>The name of this PropertyValue</p><p><br><strong>Example</strong></p><p><code>"name": "Vendor ID"</code></p>                                                                             |
| **propertyID**  | <p> <a href="https://schema.org/URL"><code>URL</code></a><br> - or -<br><a href="https://schema.org/Text"><code>Text</code></a></p>                                                                             | <p>A commonly used identifier for the characteristic represented by the property</p><p><br><strong>Example</strong></p><p><code>"propertyID": "https://example.com/photoconsent"</code></p> |
| **value**       | <p> <a href="https://schema.org/Text"><code>Text</code></a><br> - or -<br><a href="https://schema.org/Boolean"><code>Boolean</code></a><br> - or -<br><a href="https://schema.org/URL"><code>URL</code></a></p> | <p>The actual value of this identifier</p><p><br><strong>Example</strong></p><p><code>"value": "SB1234"</code></p>                                                                          |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io)".
