---
description: This page describes the EntryPoint type.
---

# EntryPoint

This type is derived from [https://schema.org/EntryPoint](https://schema.org/EntryPoint), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
      <td style="text-align:left"><a name="type"></a><b>type</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>EntryPoint</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="encodingType"></a><b>encodingType</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        Must always be present and set to <code>application/vnd.openactive.v0.4+json</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="httpMethod"></a><b>httpMethod</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP.</p><p></p><p><b>Example</b></p><p><code>POST</code></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a name="urlTemplate"></a><b>urlTemplate</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/urlTemplate"><code>urlTemplate</code></a>
      </td>
      <td style="text-align:left">
        <p>URL of the item</p><p></p><p><b>Example</b></p><p><code>https://example.com/orders{/var}</code></p>
      </td>
    </tr>
  </tbody>
</table>


