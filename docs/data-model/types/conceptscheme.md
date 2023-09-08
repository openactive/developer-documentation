---
description: This page describes the ConceptScheme type.
---

# ConceptScheme

This type is derived from [http://www.w3.org/2004/02/skos/core#ConceptScheme](http://www.w3.org/2004/02/skos/core#ConceptScheme).

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
        Must always be present and set to <code>"@type": "ConceptScheme"</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>@id</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique URI-based identifier for the record.</p><p><code>@id</code> properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in <a href="https://tools.ietf.org/html/rfc3986">RFC3986</a>.</p><p>The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).</p><p></br><b>Example</b></p><p><code>"@id": "https://example.com/scheme-name"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>concept</b></td>
      <td style="text-align:left">
        Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>A collection of concepts that are part of this scheme</p><p></br><b>Example</b></p><p><code>"concept": [<br/>&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;@id&quot;:&nbsp;&quot;https://example.com/concept/martial-arts&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:&nbsp;&quot;Concept&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;prefLabel&quot;:&nbsp;&quot;Martial&nbsp;Arts&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;inScheme&quot;:&nbsp;&quot;https://example.com/scheme/123&quot;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&quot;narrower&quot;:&nbsp;&quot;https://example.com/concept/martial-arts/karate&quot;<br/>&nbsp;&nbsp;}<br/>]</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>title</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The title of the scheme</p><p></br><b>Example</b></p><p><code>"title": "Activity List"</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A URL to a web page (or section of a page) that describes the concept scheme.</p><p></br><b>Example</b></p><p><code>"url": "https://example.com/scheme/1234"</code></p>
      </td>
    </tr>
  </tbody>
</table>


### **Recommended properties**
    
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
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A plain text description of the taxonomy, which must not include HTML or other markup.</p><p></br><b>Example</b></p><p><code>"description": "An example activity list."</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>license</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>Reference to the license under which the activity list has been published.</p><p></br><b>Example</b></p><p><code>"license": "https://example.com/license/MIT"</code></p>
      </td>
    </tr>
  </tbody>
</table>






Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
