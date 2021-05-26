---
description: This page describes the OrderItem type.
---

# OrderItem

This type is derived from [https://schema.org/OrderItem](https://schema.org/OrderItem), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Optional properties**
    
<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Expected Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>@type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>"@type": "OrderItem"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>@id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"@id": "https://example.com/OrderItem/12345"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>acceptedOffer</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/offer"><code>Offer</code></a>
      </td>
      <td style="text-align:left">
        <p>The offer from the associated orderedItem that has been selected by the Customer. The price of this includes or excludes tax depending on the taxMode of the Order.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>accessChannel</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/virtuallocation"><code>VirtualLocation</code></a>
      </td>
      <td style="text-align:left">
        <p>Channel through which the user can participate in the Opportunity. Not applicable for an OrderQuote.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>accessCode</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
      </td>
      <td style="text-align:left">
        <p>PropertyValue that contains a text value usable for entrance. Not applicable for an  OrderQuote.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>accessPass</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        <p>ImageObject or Barcode that contains reference to an asset (e.g. Barcode, QR code image or PDF) usable for entrance. Not applicable for an OrderQuote.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>attendee</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">
        <p>The person attending the Opportunity related to the OrderItem.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>attendeeDetailsRequired</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Property"><code>Property</code></a>
      </td>
      <td style="text-align:left">
        <p>The properties of <code>schema:Person</code> that are required to describe an <code>attendee</code> for this <code>OrderItem</code>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>cancellationMessage</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A message set by the Seller in the event of Opportunity cancellation, only applicable for an  <code>Order</code> and where the <code>OrderItem</code> has <code>orderItemStatus</code> set to <code>https://openactive.io/SellerCancelled</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>customerNotice</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A message set by the Seller to trigger a notification to the Customer, only applicable for an <code>Order</code> and where the <code>OrderItem</code> has <code>orderItemStatus</code> set to  <code>https://openactive.io/OrderItemConfirmed</code> or <code>https://openactive.io/CustomerAttended</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>error</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/openbookingerror"><code>OpenBookingError</code></a>
      </td>
      <td style="text-align:left">
        <p>Array of errors related to the OrderItem being included in the Order, only applicable for an  OrderQuote.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>orderItemIntakeForm</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/propertyvaluespecification"><code>PropertyValueSpecification</code></a>
      </td>
      <td style="text-align:left">
        <p>PropertyValueSpecifications that describe fields in the orderItemIntakeForm.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>orderItemIntakeFormResponse</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
      </td>
      <td style="text-align:left">
        <p>PropertyValues that contains a text value responses to the orderItemIntakeForm.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>orderItemStatus</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/OrderItemStatus"><code>OrderItemStatus</code></a>
      </td>
      <td style="text-align:left">
        
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>orderedItem</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/event"><code>Event</code></a>
      </td>
      <td style="text-align:left">
        <p>The specific bookable Thing that has been selected by the Customer. See the [Modelling-Opportunity-Data] for more information on these types. Note that the Broker Request and Orders feed only require id within these objects to be included; in these contexts, all other properties are ignored.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>position</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>An integer representing the order of OrderItems within the array.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>unitTaxSpecification</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/taxchargespecification"><code>TaxChargeSpecification</code></a>
      </td>
      <td style="text-align:left">
        <p>Breakdown of tax payable for the OrderItem.</p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
