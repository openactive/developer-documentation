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
        <p>The closing time. Set &quot;00:00&quot; for the value of <code>opens</code> and <code>closes</code> to indicated the <code>Place</code> is closed on the specified days.</p><p></br><b>Example</b></p><p><code>"closes": "17:00"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>opens</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Time"><code>Time</code></a>
      </td>
      <td style="text-align:left">
        <p>The opening time. Set &quot;00:00&quot; for the value of <code>opens</code> and <code>closes</code> to indicated the <code>Place</code> is closed on the specified days.</p><p></br><b>Example</b></p><p><code>"opens": "09:00"</code></p>
      </td>
    </tr>
  </tbody>
</table>


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
      <td style="text-align:left"><b>dayOfWeek</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/DayOfWeek"><code>DayOfWeek</code></a>
      </td>
      <td style="text-align:left">
        <p>Defines the days of the week upon which the <code>opens</code> and <code>closes</code> values are specified.</p><p></br><b>Example</b></p><p><code>"dayOfWeek": [<br/>&nbsp;&nbsp;&quot;https://schema.org/Saturday&quot;,<br/>&nbsp;&nbsp;&quot;https://schema.org/Sunday&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>validFrom</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The date when the item becomes valid. The item will be valid at the beginning of the specified day.</p><p></br><b>Example</b></p><p><code>"validFrom": "2018-01-22"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>validThrough</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Date"><code>Date</code></a>
      </td>
      <td style="text-align:left">
        <p>The date after which the item is no longer valid. The item will cease to be valid at the end of the specified day.</p><p></br><b>Example</b></p><p><code>"validThrough": "2018-01-27"</code></p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
