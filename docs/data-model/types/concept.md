---
description: This page describes the Concept type.
---

# Concept

This type is derived from [http://www.w3.org/2004/02/skos/core#Concept](http://www.w3.org/2004/02/skos/core#Concept).

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
        Must always be present and set to <code>"@type": "Concept"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>@id</b></td>
      <td style="text-align:left">
        <a href="http://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"@id": "https://openactive.io/activity-list#a454c7e6-52da-426d-9bd1-743e9d7d266d12345"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>inScheme</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A stable URL reference for the taxonomy, which must be <code>https://openactive.io/activity-list</code> to reference the OpenActive Activity List.</p><p></br><b>Example</b></p><p><code>"inScheme": "https://openactive.io/activity-list"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>prefLabel</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A human readable string that minimally describes the Concept, for use in user interfaces.</p><p></br><b>Example</b></p><p><code>"prefLabel": "Salsa"</code></p>
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
      <td style="text-align:left"><b>altLabel</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>An alternative human readable string for use in user interfaces.</p><p></br><b>Example</b></p><p><code>"altLabel": [<br/>&nbsp;&nbsp;&quot;Five&nbsp;a&nbsp;side&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>broader</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A broader Concept URI</p><p></br><b>Example</b></p><p><code>"broader": [<br/>&nbsp;&nbsp;&quot;https://openactive.io/activity-list#6ca15167-51da-4d91-a1ae-8a45dc47b0ea&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>definition</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A human readable string that unambiguously defines the Concept, for use in user interfaces.</p><p></br><b>Example</b></p><p><code>"definition": "Latin American style of dance with Cuban origins."</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hiddenLabel</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>An alternative human readable string used to drive autocomplete search matches, that is hidden from the user.</p><p></br><b>Example</b></p><p><code>"hiddenLabel": [<br/>&nbsp;&nbsp;&quot;5-a-side&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>narrower</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A more specific concept URI</p><p></br><b>Example</b></p><p><code>"narrower": [<br/>&nbsp;&nbsp;&quot;https://openactive.io/activity-list#b3829f3e-a63e-455f-a51c-1f50ecf85ad5&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>notation</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A human-readable identifier for the concept.</p><p></br><b>Example</b></p><p><code>"notation": "salsa"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>related</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A related Concept URI</p><p></br><b>Example</b></p><p><code>"related": [<br/>&nbsp;&nbsp;&quot;https://openactive.io/activity-list#5cdf5ead-e19d-4619-9585-cfe509c3fe52&quot;<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>topConceptOf</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A reference to the Scheme URI, the existence of which indicates that this Concept is at the top level of the hierarchy.</p><p></br><b>Example</b></p><p><code>"topConceptOf": "https://openactive.io/activity-list"</code></p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
