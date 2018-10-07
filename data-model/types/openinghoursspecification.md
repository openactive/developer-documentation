---
description: This page describes the OpeningHoursSpecification type.
---

# OpeningHoursSpecification

This type is derived from [https://schema.org/OpeningHoursSpecification](https://schema.org/OpeningHoursSpecification).

## **Fields**

### **Required fields**
    
<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Type</th>
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
        Must always be present and set to <code>OpeningHoursSpecification</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>closes</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Time"><code>Time</code></a>
      </td>
      <td style="text-align:left">
        The closing time.</br></br><b>Example</b></br></br><code>17:00Z</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dayOfWeek</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DayOfWeek"><code>DayOfWeek</code></a>
      </td>
      <td style="text-align:left">
        Defines the day of the week upon which the Place is open</br></br><b>Example</b></br></br><code>https://schema.org/Monday</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>opens</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Time"><code>Time</code></a>
      </td>
      <td style="text-align:left">
        The opening time.</br></br><b>Example</b></br></br><code>09:00Z</code>
      </td>
    </tr>
  </tbody>
</table>


