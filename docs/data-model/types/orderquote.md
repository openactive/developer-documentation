---
description: This page describes the OrderQuote type.
---

# OrderQuote

This type is derived from [https://schema.org/Order](https://schema.org/Order), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
        Must always be present and set to <code>"@type": "OrderQuote"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>@id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique URI-based identifier for the record.</p><p><code>@id</code> properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in <a href="https://tools.ietf.org/html/rfc3986">RFC3986</a>.</p><p>The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).</p><p></br><b>Example</b></p><p><code>"@id": "https://api.example.com/orders/1a80eca5-99f1-4e9a-81da-937e5621b246"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>bookingService</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/bookingservice"><code>BookingService</code></a>
      </td>
      <td style="text-align:left">
        <p>Details about the Booking System</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>broker</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a>
      </td>
      <td style="text-align:left">
        <p>The organisation or developer providing an application that allows Customers to make bookings. Those applications will be clients of the API defined in this specification. If brokerRole is set to <a href="https://openactive.io/NoBroker">https://openactive.io/NoBroker</a> this is not required.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>brokerRole</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/BrokerType"><code>BrokerType</code></a>
      </td>
      <td style="text-align:left">
        <p>Either <a href="https://openactive.io/AgentBroker">https://openactive.io/AgentBroker</a>,  <a href="https://openactive.io/ResellerBroker">https://openactive.io/ResellerBroker</a> or  <a href="https://openactive.io/NoBroker">https://openactive.io/NoBroker</a>, as agreed in advance between the Broker and Seller.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>customer</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/person"><code>Person</code></a><br/> - or - <br/><a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a>
      </td>
      <td style="text-align:left">
        <p>The person or organization purchasing the Order.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The Order UUID of the Order, OrderQuote or OrderProposal, which is required within the Orders feed.</p><p></br><b>Example</b></p><p><code>"identifier": "123e4567-e89b-12d3-a456-426614174000"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>lease</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/lease"><code>Lease</code></a>
      </td>
      <td style="text-align:left">
        <p>The Lease on the OrderItems which lasts for the duration specified by the Booking System.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>orderCreationStatus</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/OrderCreationStatus"><code>OrderCreationStatus</code></a>
      </td>
      <td style="text-align:left">
        <p>This property is internal to the Broker in this version of the specification.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>orderNumber</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The Customer-facing identifier of the Order.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>orderProposalVersion</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>The unique URL representing this version of the  OrderProposal, or the version of the OrderProposal to which this Order is related.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>orderRequiresApproval</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">
        <p>Whether the Booking Flow with Approval must be used to book the set of OrderItems included. must be true if any of the OrderItems require approval.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>orderedItem</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/orderitem"><code>OrderItem</code></a>
      </td>
      <td style="text-align:left">
        <p>The items that constitute the Order.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>payment</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/payment"><code>Payment</code></a>
      </td>
      <td style="text-align:left">
        <p>The payment associated with the Order by the Broker. It is required for cases where a payment has been taken.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>seller</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a><br/> - or - <br/><a href="https://developer.openactive.io/data-model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">
        <p>The organisation (schema:Organization) or person (schema:Person) providing access to events or facilities via a Booking System. e.g. a leisure provider or independent instructor running a yoga classes.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>taxCalculationExcluded</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">
        <p>Set to true when business-to-business tax calculation is required by the seller or brokerRole settings, but not supported by the Broker.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>totalPaymentDue</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/pricespecification"><code>PriceSpecification</code></a>
      </td>
      <td style="text-align:left">
        
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>totalPaymentTax</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/taxchargespecification"><code>TaxChargeSpecification</code></a>
      </td>
      <td style="text-align:left">
        <p>Breakdown of tax payable for the Order.</p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
