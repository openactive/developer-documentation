---
description: This page describes the OrderItem type.
---

# OrderItem

This type is derived from [https://schema.org/OrderItem](https://schema.org/OrderItem), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Optional properties**

| Property | Expected Type | Description |
| :--- | :--- | :--- |
| **@type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `"@type": "OrderItem"` |
| **acceptedOffer** |  [`Offer`](https://developer.openactive.io/data-model/types/offer) | The offer from the associated orderedItem that has been selected by the Customer. The price of this includes or excludes tax depending on the taxMode of the Order. |
| **accessChannel** |  [`VirtualLocation`](https://developer.openactive.io/data-model/types/virtuallocation) | Channel through which the user can participate in the Opportunity. Not applicable for an OrderQuote. |
| **accessCode** |  Array of [`PropertyValue`](https://developer.openactive.io/data-model/types/propertyvalue) | PropertyValue that contains a text value usable for entrance. Not applicable for an OrderQuote. |
| **accessPass** |  Array of [`ImageObject`](https://developer.openactive.io/data-model/types/imageobject) | ImageObject or Barcode that contains reference to an asset \(e.g. Barcode, QR code image or PDF\) usable for entrance. Not applicable for an OrderQuote. |
| **attendee** |  [`Person`](https://developer.openactive.io/data-model/types/person) | The person attending the Opportunity related to the OrderItem. |
| **attendeeDetailsRequired** |  Array of [`Property`](https://schema.org/Property) | The properties of `schema:Person` that are required to describe an `attendee` for this `OrderItem`. |
| **cancellationMessage** |  [`Text`](https://schema.org/Text) | A message set by the Seller in the event of Opportunity cancellation, only applicable for an `Order` and where the `OrderItem` has `orderItemStatus` set to `https://openactive.io/SellerCancelled` |
| **customerNotice** |  [`Text`](https://schema.org/Text) | A message set by the Seller to trigger a notification to the Customer, only applicable for an `Order` and where the `OrderItem` has `orderItemStatus` set to `https://openactive.io/OrderItemConfirmed` or `https://openactive.io/CustomerAttended` |
| **error** |  Array of [`OpenBookingError`](https://developer.openactive.io/data-model/types/openbookingerror) | Array of errors related to the OrderItem being included in the Order, only applicable for an OrderQuote. |
| **orderItemIntakeForm** |  Array of [`PropertyValueSpecification`](https://developer.openactive.io/data-model/types/propertyvaluespecification) | PropertyValueSpecifications that describe fields in the orderItemIntakeForm. |
| **orderItemIntakeFormResponse** |  Array of [`PropertyValue`](https://developer.openactive.io/data-model/types/propertyvalue) | PropertyValues that contains a text value responses to the orderItemIntakeForm. |
| **orderItemStatus** |  [`OrderItemStatus`](https://openactive.io/OrderItemStatus) |  |
| **orderedItem** |  [`Event`](https://developer.openactive.io/data-model/types/event) | The specific bookable Thing that has been selected by the Customer. See the \[Modelling-Opportunity-Data\] for more information on these types. Note that the Broker Request and Orders feed only require id within these objects to be included; in these contexts, all other properties are ignored. |
| **position** |  [`Integer`](https://schema.org/Integer) | An integer representing the order of OrderItems within the array. |
| **unitTaxSpecification** |  Array of [`TaxChargeSpecification`](https://developer.openactive.io/data-model/types/taxchargespecification) | Breakdown of tax payable for the OrderItem. |

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

