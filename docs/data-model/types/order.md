---
description: This page describes the Order type.
---

# Order

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
      <td style="text-align:left"><b>@type</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">Must always be present and set to <code>&quot;@type&quot;: &quot;Order&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>@id</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;@id&quot;: &quot;https://example.com/Order/a4bf0373270be80312345&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>bookingService</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/bookingservice"><code>BookingService</code></a>
      </td>
      <td style="text-align:left">Details about the Booking System</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>broker</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a>
      </td>
      <td style="text-align:left">The organisation or developer providing an application that allows Customers
        to make bookings. Those applications will be clients of the API defined
        in this specification. If brokerRole is set to <a href="https://openactive.io/NoBroker">https://openactive.io/NoBroker</a> this
        is not required.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>brokerRole</b>
      </td>
      <td style="text-align:left"> <a href="https://openactive.io/BrokerType"><code>BrokerType</code></a>
      </td>
      <td style="text-align:left">Either <a href="https://openactive.io/AgentBroker">https://openactive.io/AgentBroker</a>,
        <a
        href="https://openactive.io/ResellerBroker">https://openactive.io/ResellerBroker</a>or <a href="https://openactive.io/NoBroker">https://openactive.io/NoBroker</a>,
          as agreed in advance between the Broker and Seller.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>customer</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/person"><code>Person</code></a>
        <br
        />- or -
        <br /><a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a>
      </td>
      <td style="text-align:left">The person or organization purchasing the Order.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
        <br />- or -
        <br /><a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
        <br
        />- or -
        <br />Array of <a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
        <br
        />- or -
        <br /><a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>A local non-URI identifier for the resource</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;identifier&quot;: &quot;SB1234&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>orderCreationStatus</b>
      </td>
      <td style="text-align:left"> <a href="https://openactive.io/OrderCreationStatus"><code>OrderCreationStatus</code></a>
      </td>
      <td style="text-align:left">This property is internal to the Broker in this version of the specification.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>orderNumber</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">The Customer-facing identifier of the Order.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>orderProposalVersion</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">The unique URL representing this version of the OrderProposal, or the
        version of the OrderProposal to which this Order is related.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>orderedItem</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/orderitem"><code>OrderItem</code></a>
      </td>
      <td style="text-align:left">The items that constitute the Order.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>payment</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/payment"><code>Payment</code></a>
      </td>
      <td style="text-align:left">The payment associated with the Order by the Broker. It is required for
        cases where a payment has been taken.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>seller</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a>
        <br
        />- or -
        <br /><a href="https://developer.openactive.io/data-model/types/person"><code>Person</code></a>
      </td>
      <td style="text-align:left">The organisation (schema:Organization) or person (schema:Person) providing
        access to events or facilities via a Booking System. e.g. a leisure provider
        or independent instructor running a yoga classes.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>taxCalculationExcluded</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">Set to true when business-to-business tax calculation is required by the
        seller or brokerRole settings, but not supported by the Broker.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>totalPaymentDue</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/pricespecification"><code>PriceSpecification</code></a>
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>totalPaymentTax</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/taxchargespecification"><code>TaxChargeSpecification</code></a>
      </td>
      <td style="text-align:left">Breakdown of tax payable for the Order.</td>
    </tr>
  </tbody>
</table>Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

