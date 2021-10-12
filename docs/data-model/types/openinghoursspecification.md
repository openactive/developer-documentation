---
description: This page describes the OpeningHoursSpecification type.
---

# OpeningHoursSpecification

This type is derived from [https://schema.org/OpeningHoursSpecification](https://schema.org/OpeningHoursSpecification), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Required properties**

| Property      | Expected Type                                         | Description                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@type**     |  [`Text`](https://schema.org/Text)                    |  Must always be present and set to `"@type": "OpeningHoursSpecification"`                                                                                                                                                                                                                                                                                                                                |
| **closes**    |  [`Time`](https://schema.org/Time)                    | <p>The closing time. Set "00:00" for the value of <code>opens</code> and <code>closes</code> to indicated the <code>Place</code> is closed on the specified days.</p><p><br><strong>Example</strong></p><p><code>"closes": "17:00"</code></p>                                                                                                                                                            |
| **dayOfWeek** |  Array of [`DayOfWeek`](https://schema.org/DayOfWeek) | <p>Defines the days of the week upon which the <code>opens</code> and <code>closes</code> values are specified. Note this property is optional when used within <code>specialOpeningHoursSpecification</code>.</p><p><br><strong>Example</strong></p><p><code>"dayOfWeek": [</code><br><code>  "https://schema.org/Saturday",</code><br><code>  "https://schema.org/Sunday"</code><br><code>]</code></p> |
| **opens**     |  [`Time`](https://schema.org/Time)                    | <p>The opening time. Set "00:00" for the value of <code>opens</code> and <code>closes</code> to indicated the <code>Place</code> is closed on the specified days.</p><p><br><strong>Example</strong></p><p><code>"opens": "09:00"</code></p>                                                                                                                                                             |

### **Optional properties**

| Property         | Expected Type                      | Description                                                                                                                                                                                                                                                                                                 |
| ---------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **validFrom**    |  [`Date`](https://schema.org/Date) | <p>The date when the item becomes valid. The item will be valid at the beginning of the specified day. Note this property is required when used within <code>specialOpeningHoursSpecification</code>.</p><p><br><strong>Example</strong></p><p><code>"validFrom": "2018-01-22"</code></p>                   |
| **validThrough** |  [`Date`](https://schema.org/Date) | <p>The date after which the item is no longer valid. The item will cease to be valid at the end of the specified day. Note this property is required when used within <code>specialOpeningHoursSpecification</code>.</p><p><br><strong>Example</strong></p><p><code>"validThrough": "2018-01-27"</code></p> |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io)".
