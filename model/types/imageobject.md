---
description: This page describes the ImageObject type.
---

# ImageObject

This type is derived from [https://schema.org/ImageObject](https://schema.org/ImageObject).

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
        The type of object, in this case ImageObject</br></br><b>Example</b></br></br><code>ImageObject</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">
        <a href="https://schema.org/url"><code>url</code></a>
      </td>
      <td style="text-align:left">
        The URL for the display resolution image.</br></br><b>Example</b></br></br><code>http://example.com/static/image/speedball_large.jpg</code>
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
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">
        Array of <a href="https://docs.openactive.io/model/types/imageobject"><code>ImageObject</code></a>
      </td>
      <td style="text-align:left">
        The URL for a thumbnail image for an image.
      </td>
    </tr>
  </tbody>
</table>


