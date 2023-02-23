---
description: This page describes the OpenBookingError type.
---

# OpenBookingError

## **Properties**

### **Required properties**

| Property  | Expected Type                     | Description                                                     |
| --------- | --------------------------------- | --------------------------------------------------------------- |
| **@type** | [`Text`](https://schema.org/Text) | Must always be present and set to `"@type": "OpenBookingError"` |

### **Recommended properties**

| Property        | Expected Type                     | Description                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **description** | [`Text`](https://schema.org/Text) | <p>A plain-text human-readable explanation specific to this occurrence of the problem, providing specific information about why the error occurred in this particular case. This description must not include HTML or other markup.</p><p><br><strong>Example</strong></p><p><code>"description": "No customer details supplied. These must be supplied for calls to C2, P, and B."</code></p> |
| **instance**    | [`URL`](https://schema.org/URL)   | A URI reference that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced.                                                                                                                                                                                                                                                           |
| **name**        | [`Text`](https://schema.org/Text) | <p>A short, human-readable summary of the problem type. It should not change from occurrence to occurrence of the problem, except for purposes of localization.</p><p><br><strong>Example</strong></p><p><code>"name": "No customer details supplied"</code></p>                                                                                                                               |

### **Optional properties**

| Property       | Expected Type                           | Description                                         |
| -------------- | --------------------------------------- | --------------------------------------------------- |
| **requestId**  | [`Text`](https://schema.org/Text)       | Used by technical support for diagnostics purposes. |
| **statusCode** | [`Integer`](https://schema.org/Integer) | An integer representing the HTTP status code.       |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
