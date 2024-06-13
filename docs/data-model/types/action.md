---
description: This page describes the Action type.
---

# Action

This type is derived from [https://schema.org/Action](https://schema.org/Action), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
        Must always be present and set to <code>"@type": "Action"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>object</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/event"><code>Event</code></a><br/> - or - <br/><a href="https://developer.openactive.io/data-model/types/order"><code>Order</code></a>
      </td>
      <td style="text-align:left">
        <p>The object upon which the action is carried out, whose state is kept intact or changed.</p><p></br><b>Example</b></p><p><code>"object": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;SessionSeries&quot;,<br/>&nbsp;&nbsp;&quot;@id&quot;:&nbsp;&quot;https://id.booking-system.example.com/session-series/42&quot;<br/>}</code></p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
