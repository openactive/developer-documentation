---
description: This page describes the QuantitativeValue type.
---

# QuantitativeValue

This type is derived from [https://schema.org/QuantitativeValue](https://schema.org/QuantitativeValue), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Fields**

### **Required fields**

| Property | Expected Type | Description |
| :--- | :--- | :--- |
| **type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `"type": "QuantitativeValue"` |

### **Optional fields**

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
      <td style="text-align:left"><b>maxValue</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>The maximum value.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;maxValue&quot;: 60</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>minValue</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>The minimum value.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;minValue&quot;: 16</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>