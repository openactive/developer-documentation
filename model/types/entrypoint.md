---
description: This page describes the EntryPoint type.
---

# EntryPoint

This type is derived from [https://schema.org/EntryPoint](https://schema.org/EntryPoint).

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **encodingType** |  [`Text`](https://schema.org/Text) |  The supported encoding type for an EntryPoint request  **Example**  `application/vnd.openactive.v0.4+json` |
| **httpMethod** |  [`Text`](https://schema.org/Text) |  An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP.  **Example**  `POST` |
| **type** |  [`Text`](https://schema.org/Text) |  The type of object, in this case EntryPoint  **Example**  `EntryPoint` |
| **urlTemplate** |  [`urlTemplate`](https://schema.org/urlTemplate) |  URL of the item  **Example**  `https://example.com/orders{/var}` |

