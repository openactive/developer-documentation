---
description: This page describes the Lease type.
---

# Lease

## **Properties**

### **Optional properties**

| Property         | Expected Type                                                                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@type**        |  [`Text`](https://schema.org/Text)                                                                                                                                                                                                                                                                                                                                                               |  Must always be present and set to `"@type": "Lease"`                                                                                                           |
| **identifier**   | <p> <a href="https://schema.org/Text"><code>Text</code></a><br> - or -<br><a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a><br> - or -<br>Array of <a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a><br> - or -<br><a href="https://schema.org/Integer"><code>Integer</code></a></p> | <p>Optional identifier of the Lease if useful for audit or debugging purposes.</p><p><br><strong>Example</strong></p><p><code>"identifier": "SB1234"</code></p> |
| **leaseExpires** |  [`DateTime`](https://schema.org/DateTime)                                                                                                                                                                                                                                                                                                                                                       | Expiry DateTime of the Lease in ISO 8601 format                                                                                                                 |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io)".
