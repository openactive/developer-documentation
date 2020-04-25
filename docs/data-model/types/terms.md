---
description: This page describes the Terms type.
---

# Terms

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
      <td style="text-align:left"><b>@type</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">Must always be present and set to <code>&quot;@type&quot;: &quot;Terms&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dateModified</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/DateTime"><code>DateTime</code></a>
      </td>
      <td style="text-align:left">
        <p>The date and time at which the webpage containing the contents of the
          terms, located at the <code>url</code>, was last updated.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;dateModified&quot;: &quot;2018-01-27T12:00:00Z&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">The name of the terms. The name must distinguish this from other terms
        fields provided, e.g. &apos;Terms and Conditions&apos; or &apos;Privacy
        Policy&apos;.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>requiresExplicitConsent</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Boolean"><code>Boolean</code></a>
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/URL"><code>URL</code></a>
      </td>
      <td style="text-align:left">The URL of the webpage containing the contents of the terms.</td>
    </tr>
  </tbody>
</table>Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License \(CC-BY V4.0\)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".

