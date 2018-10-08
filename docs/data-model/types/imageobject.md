---
description: This page describes the ImageObject type.
---

# ImageObject

This type is derived from [https://schema.org/ImageObject](https://schema.org/ImageObject), which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available.

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
      <td style="text-align:left">Must always be present and set to <code>&quot;type&quot;: &quot;ImageObject&quot;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left"> <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        <p>The URL for the display resolution image.</p>
        <p>
          <br /><b>Example</b>
        </p>
        <p><code>&quot;url&quot;: &quot;http://example.com/static/image/speedball_large.jpg&quot;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>### **Optional fields**

| Property | Expected Type | Description |
| :--- | :--- | :--- |
| **thumbnail** |  Array of [`ImageObject`](https://docs.openactive.io/data-model/types/imageobject) | The URL for a thumbnail image for an image. |

