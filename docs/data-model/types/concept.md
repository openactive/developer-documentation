---
description: This page describes the Concept type.
---

# Concept

This type is derived from [http://www.w3.org/2004/02/skos/core#Concept](http://www.w3.org/2004/02/skos/core#Concept).

## **Fields**

### **Required fields**
    
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
        Must always be present and set to <code>"type": "Concept"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>prefLabel</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A human readable string for use in user interfaces.</p><p></br><b>Example</b></p><p><code>"prefLabel": "Speedball"</code></p>
      </td>
    </tr>
  </tbody>
</table>


### **Recommended fields**
    
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
      <td style="text-align:left"><b>id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"id": "https://example.com/concept/12345"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>inScheme</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A stable URL reference for the taxonomy.</p><p></br><b>Example</b></p><p><code>"inScheme": "https://example.com/reference/activities"</code></p>
      </td>
    </tr>
  </tbody>
</table>


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
      <td style="text-align:left"><b>altLabel</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>An alternative human readable string for use in user interfaces.</p><p></br><b>Example</b></p><p><code>"altLabel": "Speedball"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>broader</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A broader Concept URI</p><p></br><b>Example</b></p><p><code>"broader": "https://example.com/football"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>narrower</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A more specific concept URI</p><p></br><b>Example</b></p><p><code>"narrower": "https://example.com/walking-football"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>notation</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A concept label that is not normally recognisable as natural language.</p><p></br><b>Example</b></p><p><code>"notation": "Speedball"</code></p>
      </td>
    </tr>
  </tbody>
</table>


