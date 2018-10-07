---
description: This page describes the ConceptScheme type.
---

# ConceptScheme

This type is derived from [http://www.w3.org/2004/02/skos/core#ConceptScheme](http://www.w3.org/2004/02/skos/core#ConceptScheme).

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
        Must always be present and set to <code>ConceptScheme</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        A unique url based identifier for the record</br></br><b>Example</b></br></br><code>https://example.com/scheme/1234</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>concept</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        A collection of concepts that are part of this scheme</br></br><b>Example</b></br></br><code>[<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;id&quot;:&nbsp;&quot;https://example.com/concept/martial-arts&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Concept&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;prefLabel&quot;:&nbsp;&quot;Martial&nbsp;Arts&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;inScheme&quot;:&nbsp;&quot;https://example.com/scheme/123&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;narrower&quot;:&nbsp;&quot;https://example.com/concept/martial-arts/karate&quot;<br/>&nbsp;&nbsp;}<br/>]</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>title</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        The title of the scheme</br></br><b>Example</b></br></br><code>Activity List</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        A URL to a web page (or section of a page) that describes the concept scheme.</br></br><b>Example</b></br></br><code>https://example.com/scheme/1234</code>
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
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        A free text description of the taxonomy</br></br><b>Example</b></br></br><code>An example activity list.</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>license</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        Reference to the license under which the activity list has been published.</br></br><b>Example</b></br></br><code>https://example.com/license/MIT</code>
      </td>
    </tr>
  </tbody>
</table>


