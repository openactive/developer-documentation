---
description: This page describes the PropertyValue type.
---

# PropertyValue

This type is derived from [https://schema.org/PropertyValue](https://schema.org/PropertyValue), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Required properties**

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
      <td style="text-align:left"><b>type</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">Must always be present and set to <code>&quot;type&quot;: &quot;PropertyValue&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of this PropertyValue</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;name&quot;: &quot;Vendor ID&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>value</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
        <br />- or -
        <br /><a href="https://schema.org/Integer"><code>Integer</code></a>
      </td>
      <td style="text-align:left">
        <p>The actual value of this identifier</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;value&quot;: &quot;SB1234&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Optional properties**

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
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">Additional human-readable version of the value of the property.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>propertyID</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
        <br />- or -
        <br /><a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A commonly used identifier for the characteristic represented by the property</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;propertyID&quot;: &quot;ActivePlaces&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

