---
description: This page describes the OpeningHoursSpecification type.
---

# OpeningHoursSpecification

This type is derived from [https://schema.org/OpeningHoursSpecification](https://schema.org/OpeningHoursSpecification), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
      <td style="text-align:left"><b>@type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>"@type": "OpeningHoursSpecification"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>closes</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Time"><code>Time</code></a>
      </td>
      <td style="text-align:left">
        <p>The closing time.</p><p></br><b>Example</b></p><p><code>"closes": "17:00"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dayOfWeek</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DayOfWeek"><code>DayOfWeek</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the day of the week upon which the Place is open</p><p></br><b>Example</b></p><p><code>"dayOfWeek": "https://schema.org/Monday"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>opens</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Time"><code>Time</code></a>
      </td>
      <td style="text-align:left">
        <p>The opening time.</p><p></br><b>Example</b></p><p><code>"opens": "09:00"</code></p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
