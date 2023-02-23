---
description: This page describes the PostalAddress type.
---

# PostalAddress

This type is derived from [https://schema.org/PostalAddress](https://schema.org/PostalAddress), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Required properties**

| Property            | Expected Type                     | Description                                                                                                                                                              |
| ------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **@type**           | [`Text`](https://schema.org/Text) | Must always be present and set to `"@type": "PostalAddress"`                                                                                                             |
| **addressCountry**  | [`Text`](https://schema.org/Text) | <p>The country, expressed as a two-letter ISO 3166-1 alpha-2 country code.</p><p><br><strong>Example</strong></p><p><code>"addressCountry": "GB"</code></p>              |
| **addressLocality** | [`Text`](https://schema.org/Text) | <p>The locality, a suburb within a city or a town within a county or district.</p><p><br><strong>Example</strong></p><p><code>"addressLocality": "Shoreditch"</code></p> |
| **addressRegion**   | [`Text`](https://schema.org/Text) | <p>The region, either a city or a county or district.</p><p><br><strong>Example</strong></p><p><code>"addressRegion": "London"</code></p>                                |
| **postalCode**      | [`Text`](https://schema.org/Text) | <p>The postal code.</p><p><br><strong>Example</strong></p><p><code>"postalCode": "EC2A 4JE"</code></p>                                                                   |
| **streetAddress**   | [`Text`](https://schema.org/Text) | <p>The street address.</p><p><br><strong>Example</strong></p><p><code>"streetAddress": "Open Data Institute, Floor 3, 65 Clifton St"</code></p>                          |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
