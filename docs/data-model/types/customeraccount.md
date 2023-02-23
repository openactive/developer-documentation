---
description: This page describes the CustomerAccount type.
---

# CustomerAccount

## **EARLY RELEASE NOTICE**
This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback.
IT IS STILL SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.



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
        Must always be present and set to <code>"@type": "CustomerAccount"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>@id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique URI-based identifier for the record.</p><p><code>@id</code> properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in <a href="https://tools.ietf.org/html/rfc3986">RFC3986</a>.</p><p>The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).</p><p></br><b>Example</b></p><p><code>"@id": "https://id.bookingsystem.example.com/customer-accounts/fdc14503-275e-46d3-9922-45b986c9f9aa"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>accessPass</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/barcode"><code>Barcode</code></a>
      </td>
      <td style="text-align:left">
        <p>The barcode, QR code, magnetic stripe, or swipe card associated with this Customer Account, within their own namespaces.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>accountNumber</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The customer-facing identifier for the Customer Account.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>customer</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/person"><code>Person</code></a><br/> - or - <br/><a href="https://developer.openactive.io/data-model/types/organization"><code>Organization</code></a>
      </td>
      <td style="text-align:left">
        <p>The person or organization to whom this Customer Account belongs.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>entitlement</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/entitlement"><code>Entitlement</code></a>
      </td>
      <td style="text-align:left">
        <p>The current valid and active entitlements associated with this customer. Note that expired or inactive entitlements are not included in this list.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hasHiddenEntitlements</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left">
        <p>Whether there are any additional entitlements (other than those listed in entitlement) or other types of discounts are associated with the Customer Account that will influence pricing, and therefore whether the pricing for the entitlement in the feed should be treated as indicative.</p><p></br><b>Example</b></p><p><code>"hasHiddenEntitlements": "true"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The identifier of the Customer Account used by the Booking System.</p><p></br><b>Example</b></p><p><code>"identifier": "fdc14503-275e-46d3-9922-45b986c9f9aa"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>outstandingAction</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/action"><code>Action</code></a>
      </td>
      <td style="text-align:left">
        <p>Outstanding actions on this Customer Account, such as the resolution of outstanding debts or membership renewal. These may prevent the Customer from making bookings.</p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
