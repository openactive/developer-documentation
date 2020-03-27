---
description: This page describes the ConceptScheme type.
---

# ConceptScheme

This type is derived from [http://www.w3.org/2004/02/skos/core\#ConceptScheme](http://www.w3.org/2004/02/skos/core#ConceptScheme).

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
      <td style="text-align:left"><b>type</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">Must always be present and set to <code>&quot;type&quot;: &quot;ConceptScheme&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>id</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;id&quot;: &quot;https://example.com/scheme/12345&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>concept</b>
      </td>
      <td style="text-align:left">Array of <a href="https://developer.openactive.io/data-model/types/concept"><code>Concept</code></a>
      </td>
      <td style="text-align:left">
        <p>A collection of concepts that are part of this scheme</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;concept&quot;: [<br />  {<br />    &quot;id&quot;: &quot;https://example.com/concept/martial-arts&quot;,<br />    &quot;type&quot;: &quot;Concept&quot;,<br />    &quot;prefLabel&quot;: &quot;Martial Arts&quot;,<br />    &quot;inScheme&quot;: &quot;https://example.com/scheme/123&quot;,<br />    &quot;narrower&quot;: &quot;https://example.com/concept/martial-arts/karate&quot;<br />  }<br />]</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>title</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The title of the scheme</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;title&quot;: &quot;Activity List&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>A URL to a web page (or section of a page) that describes the concept
          scheme.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;url&quot;: &quot;https://example.com/scheme/1234&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Recommended properties**

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
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A free text description of the taxonomy</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;description&quot;: &quot;An example activity list.&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>license</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">
        <p>Reference to the license under which the activity list has been published.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;license&quot;: &quot;https://example.com/license/MIT&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

