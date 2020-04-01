---
description: This page describes the PriceSpecification type.
---

# PriceSpecification

This type is derived from [https://schema.org/PriceSpecification](https://schema.org/PriceSpecification), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
      <td style="text-align:left"><b>type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>"type": "PriceSpecification"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>prepayment</b></td>
      <td style="text-align:left">
        <a href="https://openactive.io/RequiredStatusType"><code>RequiredStatusType</code></a>
      </td>
      <td style="text-align:left">
        <p>Indicates if proceeding with booking requires a Customer to pay in advance, pay when attending, or have the option to do either. Values must be one of  <a href="https://openactive.io/Required">https://openactive.io/Required</a>,  <a href="https://openactive.io/Optional">https://openactive.io/Optional</a> or  <a href="https://openactive.io/Unavailable">https://openactive.io/Unavailable</a>.</p><p></br><b>Example</b></p><p><code>"prepayment": "https://openactive.io/Required"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>price</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Number"><code>Number</code></a>
      </td>
      <td style="text-align:left">
        <p>The total amount.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>priceCurrency</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The currency of the price. Specified as a 3-letter ISO 4217 value. If a  PriceSpecification has a zero price, then this property is not required. Otherwise the priceCurrency must be specified.</p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
