---
description: This page describes the PostalAddress type.
---

# PostalAddress

This type is derived from [https://schema.org/PostalAddress](https://schema.org/PostalAddress), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
      <td style="text-align:left"><b>type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>"type": "PostalAddress"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>addressCountry</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The country, expressed as a two-letter ISO 3166-1 alpha-2 country code.</p><p></br><b>Example</b></p><p><code>"addressCountry": "GB"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>addressLocality</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The locality, a suburb within a city or a town within a county or district.</p><p></br><b>Example</b></p><p><code>"addressLocality": "Shoreditch"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>addressRegion</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The region, either a city or a county or district.</p><p></br><b>Example</b></p><p><code>"addressRegion": "London"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>postalCode</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The postal code.</p><p></br><b>Example</b></p><p><code>"postalCode": "EC2A 4JE"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>streetAddress</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The street address.</p><p></br><b>Example</b></p><p><code>"streetAddress": "Open Data Institute, Floor 3, 65 Clifton St"</code></p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
