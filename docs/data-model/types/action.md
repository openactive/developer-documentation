---
description: This page describes the Action type.
---

# Action

This type is derived from [https://schema.org/Action](https://schema.org/Action), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
      <td style="text-align:left">Must always be present and set to <code>&quot;type&quot;: &quot;Action&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>name</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/Text"><code>Text</code></a>
      </td>
      <td style="text-align:left">
        <p>The name of the action</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;name&quot;: &quot;Book&quot;</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>target</b>
      </td>
      <td style="text-align:left"> <a href="https://docs.openactive.io/data-model/types/entrypoint"><code>EntryPoint</code></a>
      </td>
      <td style="text-align:left">
        <p>A definition of the target of the action.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;target&quot;: {<br />  &quot;encodingType&quot;: &quot;application/vnd.openactive.v1.0+json&quot;,<br />  &quot;httpMethod&quot;: &quot;POST&quot;,<br />  &quot;type&quot;: &quot;EntryPoint&quot;,<br />  &quot;url&quot;: &quot;https://example.com/orders&quot;<br />}</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>