---
description: This page describes the Slot type.
---

# Slot

## **Fields**

### **Required fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **duration** |  [`Duration`](https://schema.org/Duration) |  The duration of the slot given in \[ISO8601\] format.  **Example**  `PT1H` |
| **facilityUse** |  [`url`](https://schema.org/url) |  URI to the FacilityUse that has this offer  **Example**  `TODO` |
| **remainingUses** |  [`Integer`](https://schema.org/Integer) |  TODO  **Example**  `5` |
| **startDate** |  [`DateTime`](https://schema.org/DateTime) |  The start date and time of the slot. Can be specified as a schema:Date or schema:DateTime  **Example**  `2018-01-27T12:00:00Z` |
| **type** |  [`Text`](https://schema.org/Text) |  The type of object, in this case Slot  **Example**  `Slot` |

###  **Required options** 

While these properties are marked as optional/recommended in the Modelling Specification, one of these must be provided when surfacing a slot through an RPDE feed to ensure that the slots can be processed correctly by data consumers.

| Property | Type | Description |
| :--- | :--- | :--- |
| **id** |  [`url`](https://schema.org/url) |  A unique url based identifier for the record  **Example**  `https://example.com/slot/1234` |
| **identifier** |  [`Text`](https://schema.org/Text) |  A local non-URI identifier for the resource  **Example**  `SB1234` |

### **Recommended fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **id** |  [`url`](https://schema.org/url) |  A unique url based identifier for the record  **Example**  `https://example.com/slot/1234` |
| **maximumUses** |  [`Integer`](https://schema.org/Integer) |  TODO  **Example**  `16` |

### **Optional fields**

| Property | Type | Description |
| :--- | :--- | :--- |
| **endDate** |  [`DateTime`](https://schema.org/DateTime) |  The end date and time of the slot. Can be specified as a schema:Date or schema:DateTime  It is recommended that publishers provide either an schema:endDate or a schema:duration for an slot.  **Example**  `2018-01-27T12:00:00Z` |
| **identifier** |  [`Text`](https://schema.org/Text) |  A local non-URI identifier for the resource  **Example**  `SB1234` |
| **offers** |  Array of [`Offer`](https://docs.openactive.io/model/types/offer) |  TODO  **Example**  `TODO` |

