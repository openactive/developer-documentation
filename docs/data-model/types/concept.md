---
description: This page describes the Concept type.
---

# Concept

This type is derived from [http://www.w3.org/2004/02/skos/core\#Concept](http://www.w3.org/2004/02/skos/core#Concept).

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
      <td style="text-align:left"><b>type</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">Must always be present and set to <code>&quot;type&quot;: &quot;Concept&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>prefLabel</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A human readable string for use in user interfaces.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;prefLabel&quot;: &quot;Speedball&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Recommended fields**

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
      <td style="text-align:left"><b>id</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A unique url based identifier for the record</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;id&quot;: &quot;https://example.com/concept/12345&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>inScheme</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A stable URL reference for the taxonomy.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;inScheme&quot;: &quot;https://example.com/reference/activities&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Optional fields**

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
      <td style="text-align:left"><b>altLabel</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>An alternative human readable string for use in user interfaces.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;altLabel&quot;: &quot;Speedball&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>broader</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A broader Concept URI</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;broader&quot;: &quot;https://example.com/football&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>narrower</b>
      </td>
      <td style="text-align:left">Array of <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>A more specific concept URI</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;narrower&quot;: &quot;https://example.com/walking-football&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>notation</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>A concept label that is not normally recognisable as natural language.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;notation&quot;: &quot;Speedball&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

