---
description: This page describes the Action type.
---

# Action

This type is derived from [https://schema.org/Action](https://schema.org/Action), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Optional properties**

| Property   | Expected Type                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@type**  |  [`Text`](https://schema.org/Text)                                                                                                                                                                    |  Must always be present and set to `"@type": "Action"`                                                                                                                                                                                                                                                            |
| **object** | <p> <a href="https://developer.openactive.io/data-model/types/event"><code>Event</code></a><br> - or -<br><a href="https://developer.openactive.io/data-model/types/order"><code>Order</code></a></p> | <p>The object upon which the action is carried out, whose state is kept intact or changed.</p><p><br><strong>Example</strong></p><p><code>"object": {</code><br><code>  "@type": "SessionSeries",</code><br><code>  "@id": "https://id.booking-system.example.com/session-series/42"</code><br><code>}</code></p> |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io)".
