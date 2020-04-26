---
description: This page describes the SportsActivityLocation type.
---

# SportsActivityLocation

This type is derived from [https://schema.org/SportsActivityLocation](https://schema.org/SportsActivityLocation), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

## **Properties**

### **Required properties**

| Property | Expected Type | Description |
| :--- | :--- | :--- |
| **@type** |  [`Text`](https://schema.org/Text) |  Must always be present and set to `"@type": "SportsActivityLocation"` |

### **Recommended properties**

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
      <td style="text-align:left"><b>containedInPlace</b>
      </td>
      <td style="text-align:left"> <a href="https://developer.openactive.io/data-model/types/place"><code>Place</code></a>
        <br
        />- or -
        <br /><a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>While a <code>url</code> is not specified as an option in the Modelling
          Specification, it is necessary to link entities in RPDE.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;containedInPlace&quot;: &quot;http://www.example.org/api/locations/8958f9b8-2004-4e90-80ff-50c98a9b121d&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the internal location where the activity is taking place</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;name&quot;: &quot;Court 1&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

