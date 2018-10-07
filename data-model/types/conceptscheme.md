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
      <th style="text-align:left">Expected Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a name="type"></a><b>type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>"ConceptScheme"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="id"></a><b>id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p><p></br><b>Example</b></p><p><code>"id": "https://example.com/scheme/1234"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="concept"></a><b>concept</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>A collection of concepts that are part of this scheme</p><p></br><b>Example</b></p><p><code>"concept": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;id&quot;:&nbsp;&quot;https://example.com/concept/martial-arts&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Concept&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;prefLabel&quot;:&nbsp;&quot;Martial&nbsp;Arts&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;inScheme&quot;:&nbsp;&quot;https://example.com/scheme/123&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;narrower&quot;:&nbsp;&quot;https://example.com/concept/martial-arts/karate&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="title"></a><b>title</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The title of the scheme</p><p></br><b>Example</b></p><p><code>"title": "Activity List"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="url"></a><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A URL to a web page (or section of a page) that describes the concept scheme.</p><p></br><b>Example</b></p><p><code>"url": "https://example.com/scheme/1234"</code></p>
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
      <td style="text-align:left"><a name="description"></a><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A free text description of the taxonomy</p><p></br><b>Example</b></p><p><code>"description": "An example activity list."</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="license"></a><b>license</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>Reference to the license under which the activity list has been published.</p><p></br><b>Example</b></p><p><code>"license": "https://example.com/license/MIT"</code></p>
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
      <td style="text-align:left"><a name="identifier"></a><b>identifier</b></td>
      <td style="text-align:left">
        
      </td>
      <td style="text-align:left">
        <p>A unique identifier for the record</p><p></br><b>Example</b></p><p><code>"identifier": "1234"</code></p>
      </td>
    </tr>
  </tbody>
</table>


