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
        Must always be present and set to <code>Concept</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>prefLabel</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        A human readable string for use in user interfaces.</br></br><b>Example</b></br></br><code>Speedball</code>
      </td>
    </tr>
  </tbody>
</table>


### **Recommended fields**
    
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
      <td style="text-align:left"><b>id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        A unique url based identifier for the record</br></br><b>Example</b></br></br><code>https://example.com/concept/1234</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>inScheme</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        A stable URL reference for the taxonomy.</br></br><b>Example</b></br></br><code>https://example.com/reference/activities</code>
      </td>
    </tr>
  </tbody>
</table>


### **Optional fields**
    
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
      <td style="text-align:left"><b>altLabel</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        An alternative human readable string for use in user interfaces.</br></br><b>Example</b></br></br><code>Speedball</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>broader</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        A broader concept URI</br></br><b>Example</b></br></br><code>https://example.com/football</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>narrower</b></td>
      <td style="text-align:left">
        Array of <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        A more specific concept URI</br></br><b>Example</b></br></br><code>https://example.com/walking-football</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>notation</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        A concept label that is not normally recognisable as natural language.</br></br><b>Example</b></br></br><code>Speedball</code>
      </td>
    </tr>
  </tbody>
</table>


