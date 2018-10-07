---
description: This page describes the Action type.
---

# Action

This type is derived from [https://schema.org/Action](https://schema.org/Action).

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `Action` |
| **name** |  [`Text`](https://schema.org/Text) |  The name of the action  **Example**  `Book` |
| **target** |  [`EntryPoint`](https://docs.openactive.io/model/types/entrypoint) |  A definition of the target of the action.  **Example**  `{   "encodingType": "application/vnd.openactive.v1.0+json",   "httpMethod": "POST",   "type": "EntryPoint",   "url": "https://example.com/orders" }` |

