---
description: This page describes the Entitlement type.
---

# Entitlement

## **EARLY RELEASE NOTICE**
This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback.
IT IS STILL SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.



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
        Must always be present and set to <code>"@type": "Entitlement"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>entitlementType</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>For the request, this is the value of the @id of the Concept being referenced. For the response, this the full Concept object including the @id and prefLabel.</p><p></br><b>Example</b></p><p><code>"entitlementType": {<br/>&nbsp;&nbsp;&quot;@type&quot;:&nbsp;&quot;Concept&quot;,<br/>&nbsp;&nbsp;&quot;@id&quot;:&nbsp;&quot;https://data.mcractive.com/openactive/entitlement-list#5e78bcbe-36db-425a-9064-bf96d09cc351&quot;,<br/>&nbsp;&nbsp;&quot;prefLabel&quot;:&nbsp;&quot;MCRactive&nbsp;Adult&nbsp;Resident&quot;,<br/>&nbsp;&nbsp;&quot;inScheme&quot;:&nbsp;&quot;https://data.mcractive.com/openactive/entitlement-list&quot;<br/>}</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>evidenceRequestAction</b></td>
      <td style="text-align:left">
        <a href="https://developer.openactive.io/data-model/types/action"><code>Action</code></a>
      </td>
      <td style="text-align:left">
        <p>Any evidence request associated with the entitlement.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>validFrom</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a>
      </td>
      <td style="text-align:left">
        <p>The date the entitlement becomes valid. This must be in the past.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>validUntil</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/DateTime"><code>DateTime</code></a>
      </td>
      <td style="text-align:left">
        <p>The date that the entitlement is no longer valid. This must be in the future.</p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
