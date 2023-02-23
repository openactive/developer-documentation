---
description: This page describes the DynamicPayment type.
---

# DynamicPayment

## **Properties**

### **Optional properties**

| Property               | Expected Type                                                                              | Description                                                                                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@type**              | [`Text`](https://schema.org/Text)                                                          | Must always be present and set to `"@type": "DynamicPayment"`                                                                                                                                |
| **accountId**          | [`Text`](https://schema.org/Text)                                                          | A reference used by the Seller to group transactions, which is used to aid reconciliation.                                                                                                   |
| **additionalProperty** | Array of [`PropertyValue`](https://developer.openactive.io/data-model/types/propertyvalue) | PropertyValue that contains a text value useful for reconciliation.                                                                                                                          |
| **identifier**         | [`Text`](https://schema.org/Text)                                                          | <p>The identifier of the payment held by the Broker and/or Payment Provider.</p><p><br><strong>Example</strong></p><p><code>"identifier": "SB1234"</code></p>                                |
| **name**               | [`Text`](https://schema.org/Text)                                                          | Optional free text description of the payment method for the Booking System, to help the Seller in discussions with the Customer (e.g. 'AcmeBroker Points' or 'AcmeBroker via Credit Card'). |
| **paymentMethod**      | [`PaymentMethod`](http://purl.org/goodrelations/v1#PaymentMethod)                          | paymentMethod must not be used, and is reserved for future versions of this specification.                                                                                                   |
| **paymentProviderId**  | [`Text`](https://schema.org/Text)                                                          | A reference to the specific Payment Provider that is used.                                                                                                                                   |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
