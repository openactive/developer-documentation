---
description: This page describes the Offer type.
---

# Offer

This type is derived from [https://schema.org/Offer](https://schema.org/Offer).

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `Offer` |
| **price** |  [`Float`](https://schema.org/Float) |  The offer price of the activity.  This price should be specified without currency symbols and as a floating point number with two decimal places.  The currency of the price should be expressed in the priceCurrency field.  **Example**  `33` |

### **Recommended fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **id** |  [`url`](https://schema.org/url) |  A unique url based identifier for the record  **Example**  `https://example.com/offer/1234` |
| **ageRange** |  [`QuantitativeValue`](https://docs.openactive.io/data-model/types/quantitativevalue) |  Indicates that an event is suitable for a specific age range. If only a single age is specified then this is assumed to be a minimum age. Age ranges can be specified as follows: 18-30  **Example**  `{   "type": "QuantitativeValue",   "minValue": 15,   "maxValue": 60 }` |
| **name** |  [`Text`](https://schema.org/Text) |  A human readable name for the offer.  **Example**  `Speedball winger position` |
| **priceCurrency** |  [`Text`](https://schema.org/Text) |  The currency \(in 3-letter ISO 4217 format\) of the price.  If an Offer has a zero price, then this property is not required. Otherwise the currency must be specified.  **Example**  `GBP` |
| **url** |  [`url`](https://schema.org/url) |  URL describing the offer  **Example**  `http://www.rphs.org.uk/` |

### **Optional fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **advanceBooking** |  [`RequiredStatusType`](https://openactive.io/RequiredStatusType) |  Indicates whether to accept this offer, a participant must book in advance, whether they must pay on attending, or have option to do either.  **Example**  `https://openactive.io/Required` |
| **identifier** |  [`Text`](https://schema.org/Text) |  A local non-URI identifier for the resource  **Example**  `SB1234` |
| **prepayment** |  [`RequiredStatusType`](https://openactive.io/RequiredStatusType) |  Indicates whether to accept this offer, a participant must pay in advance, pay when attending, or have the option to do either.  **Example**  `https://openactive.io/Required` |

