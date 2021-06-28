---
description: This page describes the TaxChargeSpecification type.
---

# TaxChargeSpecification

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
      <td style="text-align:left"><b>@type</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">Must always be present and set to <code>&quot;@type&quot;: &quot;TaxChargeSpecification&quot;</code>
      </td>
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
      <td style="text-align:left"><b>name</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">The name of the tax charge, e.g. &quot;VAT at 0% for EU transactions&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>price</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Number"><code>Number</code></a>
      </td>
      <td style="text-align:left">The total amount.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>priceCurrency</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">The currency of the price. Specified as a 3-letter ISO 4217 value. If
        a PriceSpecification has a zero price, then this property is not required.
        Otherwise the priceCurrency must be specified.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>rate</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Number"><code>Number</code></a>
      </td>
      <td style="text-align:left">The rate of VAT.</td>
    </tr>
  </tbody>
</table>

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

