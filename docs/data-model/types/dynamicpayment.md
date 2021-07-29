---
description: This page describes the DynamicPayment type.
---

# DynamicPayment



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
        Must always be present and set to <code>"@type": "DynamicPayment"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>accountId</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A reference used by the Seller to group transactions, which is used to aid reconciliation.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>additionalProperty</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/propertyvalue"><code>PropertyValue</code></a>
      </td>
      <td style="text-align:left">
        <p>PropertyValue that contains a text value useful for reconciliation.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>identifier</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The identifier of the payment held by the Broker and/or Payment Provider.</p><p></br><b>Example</b></p><p><code>"identifier": "SB1234"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>Optional free text description of the payment method for the Booking System, to help the Seller in discussions with the Customer (e.g. 'AcmeBroker Points' or 'AcmeBroker via Credit Card').</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>paymentMethod</b></td>
      <td style="text-align:left">
        <a href="http://purl.org/goodrelations/v1#PaymentMethod"><code>PaymentMethod</code></a>
      </td>
      <td style="text-align:left">
        <p>paymentMethod must not be used, and is reserved for future versions of this specification.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>paymentProviderId</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A reference to the specific Payment Provider that is used.</p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
